import { NextRequest, NextResponse } from 'next/server';
import moment from 'moment';
import { prisma } from '@/utils/prisma';

export async function POST(req: NextRequest) {
    try {
        const { formData, templateSlug, aiResponse, createdBy } = await req.json();

        const result = await prisma.aIOutput.create({
            data: {
                formData,
                templateSlug,
                aiResponse,
                createdBy: createdBy || '',
                createdAt: moment().format('YYYY-MM-DD'),
            },
        });

        return NextResponse.json(result);
    } catch (error) {
        return NextResponse.json({ error: "Error saving data", details: error }, { status: 500 });
    }
}