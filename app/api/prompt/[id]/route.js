import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const GET = async (_request, { params }) => {
  try {
    await connectToDB();
    const prompt = await Prompt.findById(params.id).populate("creator");
    if (!prompt) {
      return new Response("Prompt not found", { status: 404 });
    }
    return new Response(JSON.stringify(prompt), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetchss", { status: 500 });
  }
};

export const PATCH = async (request, { params }) => {
  const { prompt, tag } = await request.json();
  try {
    await connectToDB();
    const existingPrompt = await Prompt.findById(params.id);
    if (!existingPrompt) {
      return new Response("Prompt not found", { status: 404 });
    }
    existingPrompt.prompt = prompt;
    existingPrompt.tag = tag;

    await existingPrompt.save();
    return new Response(JSON.stringify(existingPrompt), { status: 200 });
  } catch (error) {
    return new Response("Failed to update", { status: 500 });
  }
};

export const DELETE = async (_request, { params }) => {
  try {
    await connectToDB();
    const result = await Prompt.findByIdAndDelete(params.id);

    if (!result) {
      console.log(`Prompt with id ${params.id} not found.`);
      return new Response("Prompt not found", { status: 404 });
    }

    console.log(`Prompt with id ${params.id} deleted successfully.`);
    return new Response("Prompt deleted successfully", { status: 200 });
  } catch (error) {
    console.error("Error deleting prompt:", error);
    return new Response(`Couldn't remove the prompt: ${error.message}`, {
      status: 500,
    });
  }
};
