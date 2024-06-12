import prismaClient from "../../config/database";

export async function UpdateDeckStatus(id: string) {
  await prismaClient.$transaction(async (prisma) => {
    const cards = await prisma.card.findMany({
      where: { deck_id: id },
    });

    const countStatus = [0, 0, 0];

    const statusMap: Record<string, number> = {
      New: 0,
      Under_Review: 1,
      Revised: 2,
    };

    cards.forEach((card) => {
      if (statusMap[card.status] !== undefined) {
        countStatus[statusMap[card.status]] += 1;
      }
    });

    await prisma.deck.update({
      where: { id: id },
      data: { cardStatus: countStatus },
    });
  });
}
