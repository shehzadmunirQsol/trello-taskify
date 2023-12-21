"use server";

import { z } from "zod";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
const CreateBoard = z.object({
  title: z.string(),
});

export async function Create(formData: FormData) {
  const { title } = CreateBoard.parse({
    title: formData.get("title"),
  });
  await db.board.create({
    data: {
      title,
    },
  });
  revalidatePath("/organization/org_2ZZwpFBzrHZubPeAHaXNC2MiknB");
}
