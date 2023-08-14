import { UserService } from "@/service";

type PageParams = {
  params: {
    username: string;
  };
};

const service = new UserService();

export default async function Page({ params }: PageParams) {
  const { username } = params;

  const user = await service.getByUsername(username);

  if (!user) {
    return <div>User not found</div>;
  }

  return <div>{JSON.stringify(user)}</div>;
}
