import User from '@entities/User';
import { GetUserQueryArgs, GetUserResponse } from '@type/graph';
import { Resolvers } from '@type/resolvers';

const resolvers: Resolvers = {
  Query: {
    GetUser: async (
      _,
      args: GetUserQueryArgs,
      __
    ): Promise<GetUserResponse> => {
      const { email } = args;

      try {
        const user = await User.findOne({ email });

        if (!user) throw new Error(`The user not found`);

        return {
          ok: true,
          user: user,
          error: null,
        };
      } catch (error) {
        return {
          ok: false,
          user: null,
          error: error.message,
        };
      }
    },
  },
};

export default resolvers;
