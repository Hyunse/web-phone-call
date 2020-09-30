import User from '@entities/User';
import { RemoveFriendMutationArgs, RemoveFriendResponse } from '@type/graph';
import { Resolvers } from '@type/resolvers';
import privateResolver from '@utils/privateResolver';

const resolver: Resolvers = {
  Mutation: {
    RemoveFriend: privateResolver(
      async (
        _,
        args: RemoveFriendMutationArgs,
        { req }
      ): Promise<RemoveFriendResponse> => {
        const { id } = req.user;
        const { email } = args;

        try {
          const currentUser = await User.findOne({ id });

          if (currentUser) {
            const friendIdx = currentUser.friendsList.findIndex((friend) => friend.email === email);

            if(friendIdx > -1) {
              currentUser.friendsList.splice(friendIdx, 1);
              currentUser.save();

            }
          }

          return {
            ok: true,
            error: null,
          };
        } catch (error) {
          return {
            ok: false,
            error: error.message,
          };
        }
      }
    ),
  },
};

export default resolver;
