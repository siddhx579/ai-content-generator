import { Button } from '@/components/ui/button';
import { useUser } from '@clerk/nextjs';
import React, { useContext, useEffect, useState } from 'react';
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext';
import { UserSubscriptionContext } from '@/app/(context)/UserSubscriptionContext';

function UsageTrack() {
    const { user } = useUser();
    const { totalUsage, setTotalUsage } = useContext(TotalUsageContext);
    const { userSubscription, setUserSubscription } = useContext(UserSubscriptionContext);
    const [maxWords, setMaxWords] = useState(100000);

    useEffect(() => {
        if (user) fetchUsageData();
    }, [user]);

    const fetchUsageData = async () => {
        try {
            const res = await fetch('/api/usage');
            const data = await res.json();

            if (data.error) return;
            setTotalUsage(data.totalUsage);
            if (data.isSubscribed) {
                setUserSubscription(true);
                setMaxWords(1000000);
            }
        } catch (error) {
            console.error("Error fetching usage data", error);
        }
    };

    return (
        <div className='m-5'>
            <div className='bg-primary text-white p-3 rounded-lg'>
                <h2 className='font-medium'>Credits</h2>
                <div className='h-2 bg-[#9981f9] w-full rounded-full mt-3'>
                    <div className='h-2 bg-white rounded-full' style={{ width: totalUsage / maxWords > 1 ? '100%' : `${(totalUsage / maxWords) * 100}%` }}>
                    </div>
                </div>
                <h2 className='text-sm my-2'>{totalUsage}/{maxWords} credits used</h2>
            </div>
            <Button variant={'secondary'} className='w-full my-3 text-primary'>Upgrade</Button>
        </div>
    );
}

export default UsageTrack;