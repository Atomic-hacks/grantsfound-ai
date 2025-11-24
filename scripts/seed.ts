import { prisma } from "../lib/db";

async function main() {
  const org = await prisma.org.upsert({
    where: { id: "org_seed" },
    update: {},
    create: {
      id: "org_seed",
      name: "GrantsFound Labs",
      tier: "pilot",
    },
  });

  await prisma.user.upsert({
    where: { email: "pilot@grantsfound.ai" },
    update: {},
    create: {
      email: "pilot@grantsfound.ai",
      name: "Pilot Admin",
      roles: ["admin"],
      orgId: org.id,
    },
  });

  console.info("Seed complete"); // eslint-disable-line no-console
}

main()
  .catch((err) => {
    console.error(err); // eslint-disable-line no-console
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
