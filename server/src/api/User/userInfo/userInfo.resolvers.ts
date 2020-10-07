import { Resolvers } from '@type/resolvers';
import User from '@entities/User';
import { GetCurrentUserResponse } from '@type/graph';

const resolvers: Resolvers = {
  Query: {
    GetCurrentUser: async (_, __, { req }): Promise<GetCurrentUserResponse> => {
      const { id } = req.user;
      console.log(req.user)

      try {
        const currentUser = await User.findOne({ id });

        if (!currentUser) throw new Error('User Not Found');

        return {
          ok: true,
          error: null,
          user: currentUser,
        };
      } catch (error) {
        return {
          ok: false,
          error: error.message,
          user: null,
        };
      }
    },
  },
};

export default resolvers;
