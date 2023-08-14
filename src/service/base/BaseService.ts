import { HttpStatusCodes } from "@/lib";

export type ServiceResponse<T> = {
  data: T | undefined;
  status: HttpStatusCodes;
  error?: any;
};

export class BaseService<
  T extends {
    findMany: any;
    findUnique: any;
    create: any;
  },
  FindUniqueArgs,
  FindManyArgs,
  CreateArgs,
  ResponseType
> {
  #db: T;

  constructor(db: T) {
    this.#db = db;
  }

  protected success<ResType>(data: ResType): ServiceResponse<ResType> {
    return {
      data,
      status: HttpStatusCodes.OK,
    };
  }

  protected fail(error: any, status = HttpStatusCodes.INTERNAL_SERVER_ERROR) {
    return {
      status,
      error,
      data: undefined,
    };
  }

  protected safeQuery<RespType, Args>(fn: any) {
    return async (query: Args) => {
      try {
        const result = await fn(query);
        return this.success<RespType>(result);
      } catch (error) {
        return this.fail(error);
      }
    };
  }

  protected async findMany(query: FindManyArgs) {
    return this.safeQuery<ResponseType[], FindManyArgs>(this.#db?.findMany)(
      query
    );
  }

  protected async findUnique(query: FindUniqueArgs) {
    return this.safeQuery<ResponseType, FindUniqueArgs>(this.#db?.findUnique)(
      query
    );
  }

  async create(data: CreateArgs) {
    return this.safeQuery<ResponseType, CreateArgs>(this.#db?.create)(data);
  }

  async findById(id: string) {
    return this.safeQuery<ResponseType, FindUniqueArgs>(this.#db?.findUnique)({
      where: { id },
    } as FindUniqueArgs);
  }

  async findAll() {
    return this.safeQuery<ResponseType[], FindManyArgs>(this.#db?.findMany)(
      {} as FindManyArgs
    );
  }
}
