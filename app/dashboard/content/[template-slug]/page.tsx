"use client";
import React, { use, useContext, useState } from 'react';
import FormSection from '../_components/FormSection';
import OutputSection from '../_components/OutputSection';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Templates from '@/app/(data)/Templates';
import { TEMPLATE } from '../../_components/TemplateListSection';
import { chatSession } from '@/utils/AiModal';
import { useUser } from '@clerk/nextjs';
import moment from 'moment';
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext';
import { UserSubscriptionContext } from '@/app/(context)/UserSubscriptionContext';
import { UpdateCreditUsageContext } from '@/app/(context)/UpdateCreditUsageContext';
import { useRouter } from 'next/navigation'; 

interface PROPS {
    params: Promise<{ 'template-slug': string }>;
}

function CreateNewContent(props: PROPS) { 
    const [loading, setLoading] = useState(false);
    const params = use(props.params);
    const selectedTemplate: TEMPLATE | undefined = Templates?.find(
        (item) => item.slug === params['template-slug']
    );
    const [aiOutput, setAiOutput] = useState<string>('');
    const { user } = useUser();
    const router = useRouter(); 

    const { totalUsage, setTotalUsage } = useContext(TotalUsageContext);
    const { userSubscription, setUserSubscription } = useContext(UserSubscriptionContext);
    const { updateCreditUsage, setUpdateCreditUsage } = useContext(UpdateCreditUsageContext);

    const SaveInDb = async (formData: any, slug: any, aiResp: string) => {
        try {
            const response = await fetch('/api/saveContent', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    formData,
                    templateSlug: slug,
                    aiResponse: aiResp,
                    createdBy: user?.primaryEmailAddress?.emailAddress || '',
                    createdAt: moment().format('YYYY-MM-DD'),
                }),
            });

            const result = await response.json();
            console.log(result);
        } catch (error) {
            console.error("Error saving data: ", error);
        }
    };

    const GenerateAIContent = async (formData: any) => {
        if (totalUsage >= 10000 && !userSubscription) {
            console.log("Please upgrade");
            router.push('/dashboard/billing');
            return;
        }
        setLoading(true);
        const SelectedPrompt = selectedTemplate?.aiPrompt;
        const FinalAiPrompt = JSON.stringify(formData) + ", " + SelectedPrompt;
        const result = await chatSession.sendMessage(FinalAiPrompt);

        setAiOutput(result?.response.text());
        await SaveInDb(JSON.stringify(formData), selectedTemplate?.slug, result?.response.text());
        setLoading(false);

        setUpdateCreditUsage(Date.now());
    };

    return (
        <div className='p-5'>
            <Link href={"/dashboard"}>
                <Button><ArrowLeft /> Back</Button>
            </Link>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 py-5'>
                <FormSection selectedTemplate={selectedTemplate} userFormInput={(v: any) => GenerateAIContent(v)} loading={loading} />
                <div className='col-span-2'>
                    <OutputSection aiOutput={aiOutput} />
                </div>
            </div>
        </div>
    );
}

export default CreateNewContent;