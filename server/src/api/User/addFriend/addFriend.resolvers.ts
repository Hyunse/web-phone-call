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
        const user = req.user;
        console.log(user);
        return {
          ok: true,
          error: null,
        };
      }
    ),
  },
};

export default resolver;
