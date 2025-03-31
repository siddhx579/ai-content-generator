import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import moment from 'moment';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
    try {
        const { formData, templateSlug, aiResponse, createdBy } = await req.json();

        const result = await prisma.aIOutput.create({
            data: {
                formData,
                templateSlug,
                aiResponse,
                createdBy: createdBy || '', // Ensure it’s a string
                createdAt: moment().format('YYYY-MM-DD'),
            },
        });

        return NextResponse.json(result);
    } catch (error) {
        return NextResponse.json({ error: "Error saving data", details: error }, { status: 500 });
    }
}