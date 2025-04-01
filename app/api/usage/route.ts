import { prisma } from '@/utils/prisma';
import { NextResponse } from 'next/server';
import { currentUser } from '@clerk/nextjs/server';

export async function GET() {
    try {
        const user = await currentUser();
        if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

        const history = await prisma.aIOutput.findMany({
            where: { createdBy: user?.primaryEmailAddress?.emailAddress }
        });

        const totalUsage = history.reduce((total, item) => total + (item.aiResponse?.length || 0), 0);

        const subscription = await prisma.userSubscription.findMany({
            where: { email: user?.primaryEmailAddress?.emailAddress }
        });

        return NextResponse.json({
            totalUsage,
            isSubscribed: subscription.length > 0
        });
    } catch (error) {
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}