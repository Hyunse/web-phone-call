import User from '@entities/User';
import { AddFriendMutationArgs, AddFriendResponse } from '@type/graph';
import { Resolvers } from '@type/resolvers';
import privateResolver from '@utils/privateResolver';

const resolver: Resolvers = {
  Mutation: {
    AddFriend: privateResolver(
      async (
        _,
        args: AddFriendMutationArgs,
        { req }
      ): Promise<AddFriendResponse> => {
        const { id } = req.user;
        const { email } = args;

        try {
          const currentUser = await User.findOne({ id });
          const friend = await User.findOne({ email });

          if (currentUser && friend) {
            currentUser.friendsList.push(friend);
            currentUser.save();

            return {
              ok: true,
              error: null,
            };
          } else {
            throw new Error('Save Failed');
          }
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
