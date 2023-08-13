import { PrismaClient } from "@prisma/client";

export default async function seedPlatformCollection(prisma: PrismaClient) {
  const gitHub = await prisma.platform.upsert({
    where: { name: "GitHub" },
    update: {
      logoUrl: "github",
    },
    create: {
      name: "GitHub",
      logoUrl: "github",
      backgroundColor: "#1A1A1A",
      foregroundColor: "#FFFFFF",
    },
  });

  const frontEndMentor = await prisma.platform.upsert({
    where: { name: "Frontend Mentor" },
    update: {
      logoUrl: "frontend-mentor",
    },
    create: {
      name: "Frontend Mentor",
      logoUrl: "frontend-mentor",
      backgroundColor: "#FFFFFF",
      foregroundColor: "#333333",
    },
  });

  const twitter = await prisma.platform.upsert({
    where: { name: "Twitter" },
    update: {
      logoUrl: "twitter",
    },
    create: {
      name: "Twitter",
      logoUrl: "twitter",
      backgroundColor: "#43B7E9",
      foregroundColor: "#FFFFFF",
    },
  });

  const linkedIn = await prisma.platform.upsert({
    where: { name: "LinkedIn" },
    update: {
      logoUrl: "linkedin",
    },
    create: {
      name: "LinkedIn",
      logoUrl: "linkedin",
      backgroundColor: "#2D68FF",
      foregroundColor: "#FFFFFF",
    },
  });

  const youTube = await prisma.platform.upsert({
    where: { name: "YouTube" },
    update: {
      logoUrl: "youtube",
    },
    create: {
      name: "YouTube",
      logoUrl: "youtube",
      backgroundColor: "#EE3939",
      foregroundColor: "#FFFFFF",
    },
  });

  const facebook = await prisma.platform.upsert({
    where: { name: "Facebook" },
    update: {
      logoUrl: "facebook",
    },
    create: {
      name: "Facebook",
      logoUrl: "facebook",
      backgroundColor: "#2442AC",
      foregroundColor: "#FFFFFF",
    },
  });

  const twitch = await prisma.platform.upsert({
    where: { name: "Twitch" },
    update: {
      logoUrl: "twitch",
    },
    create: {
      name: "Twitch",
      logoUrl: "twitch",
      backgroundColor: "#EE3FC8",
      foregroundColor: "#FFFFFF",
    },
  });

  const devTo = await prisma.platform.upsert({
    where: { name: "Dev.to" },
    update: {
      logoUrl: "devto",
    },
    create: {
      name: "Dev.to",
      logoUrl: "devto",
      backgroundColor: "#333333",
      foregroundColor: "#FFFFFF",
    },
  });

  const codewars = await prisma.platform.upsert({
    where: { name: "Codewars" },
    update: {
      logoUrl: "codewars",
    },
    create: {
      name: "Codewars",
      logoUrl: "codewars",
      backgroundColor: "#8A1A50",
      foregroundColor: "#FFFFFF",
    },
  });

  const freeCodeCamp = await prisma.platform.upsert({
    where: { name: "freeCodeCamp" },
    update: {
      logoUrl: "freecodecamp",
    },
    create: {
      name: "freeCodeCamp",
      logoUrl: "freecodecamp",
      backgroundColor: "#302267",
      foregroundColor: "#FFFFFF",
    },
  });

  const gitLab = await prisma.platform.upsert({
    where: { name: "GitLab" },
    update: {
      logoUrl: "gitlab",
    },
    create: {
      name: "GitLab",
      logoUrl: "gitlab",
      backgroundColor: "#EB4925",
      foregroundColor: "#FFFFFF",
    },
  });

  const hashnode = await prisma.platform.upsert({
    where: { name: "Hashnode" },
    update: {
      logoUrl: "hashnode",
    },
    create: {
      name: "Hashnode",
      logoUrl: "hashnode",
      backgroundColor: "#0330D1",
      foregroundColor: "#FFFFFF",
    },
  });

  const stackOverflow = await prisma.platform.upsert({
    where: { name: "Stack Overflow" },
    update: {
      logoUrl: "stackoverflow",
    },
    create: {
      name: "Stack Overflow",
      logoUrl: "stackoverflow",
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
