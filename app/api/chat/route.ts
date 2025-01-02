import { OpenAI } from 'openai';
import { ChatRequest, ChatResponse } from '@/app/types/chat';

const client = new OpenAI({
  apiKey: process.env.DEEPSEEK_API_KEY || 'sk-3637996642ba454a91e7b298798003df',
  baseURL: 'https://api.deepseek.com/v1',
});

export async function POST(request: Request) {
  try {
    const body: ChatRequest = await request.json();
    
    const completion = await client.chat.completions.create({
      model: 'deepseek-chat',
      messages: body.messages,
      temperature: 0.7,
    });

    const response: ChatResponse = {
      message: {
        role: 'assistant',
        content: completion.choices[0].message.content || '',
      },
    };

    return new Response(JSON.stringify(response), {
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error: any) {
    console.error('Chat API Error:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to get response from AI' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
} 