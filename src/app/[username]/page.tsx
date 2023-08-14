import { getProfileByUsername } from "@/service";

type PageParams = {
  params: {
    username: string;
  };
};

export default async function Page({ params }: PageParams) {
  const { username } = params;

  const profile = await getProfileByUsername(username);

  if (!profile) {
    return <div>Profile not found</div>;
  }

  return <div>{JSON.stringify(profile)}</div>;
}
