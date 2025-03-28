"use client";
import React, { use, useState } from 'react';
import FormSection from '../_components/FormSection';
import OutputSection from '../_components/OutputSection';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Templates from '@/app/(data)/Templates';
import { TEMPLATE } from '../../_components/TemplateListSection';

interface PROPS {
    params: Promise<{ 'template-slug': string }>;  // params is now a Promise
}

function CreateNewContent(props: PROPS) {
    const [loading, setLoading] = useState(false);
    const params = use(props.params); // Unwrapping the Promise
    const selectedTemplate: TEMPLATE | undefined = Templates?.find(
        (item) => item.slug === params['template-slug']
    );
    const [aiOutput, setAiOutput] = useState<string>('');

    const GenerateAIContent = (formData: any) => {

    }

    return (
        <div className='p-5'>
            <Link href={"/dashboard"}>
                <Button><ArrowLeft /> Back</Button>
            </Link>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 py-5'>
                <FormSection selectedTemplate={selectedTemplate} userFormInput={(v: any) => console.log(v)} loading={loading} />
                <div className='col-span-2'>
                    <OutputSection aiOutput={aiOutput} />
                </div>
            </div>
        </div>
    );
}

export default CreateNewContent;