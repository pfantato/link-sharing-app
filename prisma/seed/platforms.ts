import { PrismaClient } from "@prisma/client";

export default async function seedPlatformCollection(prisma: PrismaClient) {
  const gitHub = await prisma.platform.upsert({
    where: { name: "GitHub" },
    update: {},
    create: {
      name: "GitHub",
      identifier: "github",
      backgroundColor: "#1A1A1A",
      foregroundColor: "#FFFFFF",
    },
  });

  const frontEndMentor = await prisma.platform.upsert({
    where: { name: "Frontend Mentor" },
    update: {},
    create: {
      name: "Frontend Mentor",
      identifier: "frontend-mentor",
      backgroundColor: "#FFFFFF",
      foregroundColor: "#333333",
    },
  });

  const twitter = await prisma.platform.upsert({
    where: { name: "Twitter" },
    update: {},
    create: {
      name: "Twitter",
      identifier: "twitter",
      backgroundColor: "#43B7E9",
      foregroundColor: "#FFFFFF",
    },
  });

  const linkedIn = await prisma.platform.upsert({
    where: { name: "LinkedIn" },
    update: {},
    create: {
      name: "LinkedIn",
      identifier: "linkedin",
      backgroundColor: "#2D68FF",
      foregroundColor: "#FFFFFF",
    },
  });

  const youTube = await prisma.platform.upsert({
    where: { name: "YouTube" },
    update: {},
    create: {
      name: "YouTube",
      identifier: "youtube",
      backgroundColor: "#EE3939",
      foregroundColor: "#FFFFFF",
    },
  });

  const facebook = await prisma.platform.upsert({
    where: { name: "Facebook" },
    update: {},
    create: {
      name: "Facebook",
      identifier: "facebook",
      backgroundColor: "#2442AC",
      foregroundColor: "#FFFFFF",
    },
  });

  const twitch = await prisma.platform.upsert({
    where: { name: "Twitch" },
    update: {},
    create: {
      name: "Twitch",
      identifier: "twitch",
      backgroundColor: "#EE3FC8",
      foregroundColor: "#FFFFFF",
    },
  });

  const devTo = await prisma.platform.upsert({
    where: { name: "Dev.to" },
    update: {},
    create: {
      name: "Dev.to",
      identifier: "devto",
      backgroundColor: "#333333",
      foregroundColor: "#FFFFFF",
    },
  });

  const codewars = await prisma.platform.upsert({
    where: { name: "Codewars" },
    update: {},
    create: {
      name: "Codewars",
      identifier: "codewars",
      backgroundColor: "#8A1A50",
      foregroundColor: "#FFFFFF",
    },
  });

  const freeCodeCamp = await prisma.platform.upsert({
    where: { name: "freeCodeCamp" },
    update: {},
    create: {
      name: "freeCodeCamp",
      identifier: "freecodecamp",
      backgroundColor: "#302267",
      foregroundColor: "#FFFFFF",
    },
  });

  const gitLab = await prisma.platform.upsert({
    where: { name: "GitLab" },
    update: {},
    create: {
      name: "GitLab",
      identifier: "gitlab",
      backgroundColor: "#EB4925",
      foregroundColor: "#FFFFFF",
    },
  });

  const hashnode = await prisma.platform.upsert({
    where: { name: "Hashnode" },
    update: {},
    create: {
      name: "Hashnode",
      identifier: "hashnode",
      backgroundColor: "#0330D1",
      foregroundColor: "#FFFFFF",
    },
  });

  const stackOverflow = await prisma.platform.upsert({
    where: { name: "Stack Overflow" },
    update: {},
    create: {
      name: "Stack Overflow",
      identifier: "stackoverflow",
      backgroundColor: "#EC7100",
      foregroundColor: "#FFFFFF",
    },
  });

  return {
    gitHub,
    twitter,
    frontEndMentor,
    linkedIn,
    youTube,
    facebook,
    twitch,
    devTo,
    codewars,
    freeCodeCamp,
    gitLab,
    hashnode,
    stackOverflow,
  };
}
