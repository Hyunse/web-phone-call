import User from '@entities/User';
import { RemoveFriendMutationArgs, RemoveFriendResponse } from '@type/graph';
import { Resolvers } from '@type/resolvers';
import privateResolver from '@utils/privateResolver';

const resolver: Resolvers = {
  Mutation: {
    RemoveUser: privateResolver(
      async (
        _,
        args: RemoveFriendMutationArgs,
        { req }
      ): Promise<RemoveFriendResponse> => {
        const { id } = req.user;

        try {
          await User.delete({ id });

          return {
            ok: true,
            error: null,
          };
        } catch (error) {
          return {
            ok: true,
            error: error.message,
          };
        }
      }
    ),
  },
};

export default resolver;
