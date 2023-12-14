import { TLayout, TUser } from "../Types/customTypes.types";

const demoLayouts: TLayout[] = [
  {name: 'Twitch', URLParam: 'twitch'},
  {name: 'Gaming on TV (Dark Mode)', URLParam:'TVGaming'},
  {name: 'LCS on the side', URLParam:'LCS'},
]

const demoUser: TUser = {
  userId: 0,
  username: 'Default',
}

const getLayouts = (user: TUser = demoUser) => {

  //fetch layouts from DB, currently is just demoLayouts
  const userLayouts: TLayout[] = demoLayouts;

  return userLayouts

};

export default getLayouts;