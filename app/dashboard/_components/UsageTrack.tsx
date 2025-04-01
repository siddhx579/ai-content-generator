import { Button } from '@/components/ui/button';
import { useUser } from '@clerk/nextjs';
import React, { useContext, useEffect, useState } from 'react';
import { History } from '../history/page';
import { prisma } from '@/utils/prisma';
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext';
import { UserSubscriptionContext } from '@/app/(context)/UserSubscriptionContext';
import { UpdateCreditUsageContext } from '@/app/(context)/UpdateCreditUsageContext';

function UsageTrack() {
    const { user } = useUser();
    const { totalUsage, setTotalUsage } = useContext(TotalUsageContext);
    const { userSubscription, setUserSubscription } = useContext(UserSubscriptionContext);
    const [maxWords, setMaxWords] = useState(100000);
    const { updateCreditUsage, setUpdateCreditUsage } = useContext(UpdateCreditUsageContext);

    useEffect(() => {
        user && getData();
        user && isUserSubscribe();
    }, [user]);

    useEffect(() => {
        user && getData();
    }, [updateCreditUsage && user]);

    const getData = async () => {
        const result: History[] = await prisma.aIOutput.findMany({
            where: { createdBy: user?.primaryEmailAddress?.emailAddress }
        });

        getTotalUsage(result);
    };

    const isUserSubscribe = async () => {
        const result = await prisma.userSubscription.findMany({
            where: { email: user?.primaryEmailAddress?.emailAddress }
        });
        console.log(result);
        if (result.length > 0) {
            setUserSubscription(true);
            setMaxWords(1000000);
        }
    }

    const getTotalUsage = (result: History[]) => {
        let total: number = 0;
        result.forEach(element => {
            total = total + Number(element.aiResponse?.length)
        });
        setTotalUsage(total);
        console.log(total);
    }

    return (
        <div className='m-5'>
            <div className='bg-primary text-white p-3 rounded-lg'>
                <h2 className='font-medium'>Credits</h2>
                <div className='h-2 bg-[#9981f9] w-full rounded-full mt-3'>
                    <div className='h-2 bg-white rounded-full' style={{ width: totalUsage / maxWords }}>
                    </div>
                </div>
                <h2 className='text-sm my-2'> credits used</h2>
            </div>
            <Button variant={'secondary'} className='w-full my-3 text-primary'>Upgrade</Button>
        </div>
    );
}

export default UsageTrack;