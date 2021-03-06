import { Action } from "@ngrx/store";
import { UserAuth } from "src/app/models/userAuth";
import { UserRegister } from "../models/userRegister";
import { User } from "../models/user";
import { MyToken } from "../models/token";
import { BeeHiveActionsState } from "../models/beeHiveActionsState";
import { BeeHives } from "../models/beeHives";
import { IPlots } from "../models/plots";

export const USER_SIGN_IN = "USER_SIGN_IN";
export const USER_SIGN_IN_RES = "USER_SIGN_IN_RES";

export class UserSingIn implements Action {
  type: string = USER_SIGN_IN;
  constructor(public user: User) {}
}
export class UserSingInRes implements Action {
  type: string = USER_SIGN_IN_RES;
  constructor(public success: boolean) {}
}

export const USER_LOG_IN_SUCCESS = "USER_LOG_IN_SUCCESS";
export class UserLogInSuccess implements Action {
  type: string = USER_LOG_IN_SUCCESS;
  constructor(public user: User, public token: MyToken) {}
}

export const USER_LOG_IN_AS_GUEST = "USER_LOG_IN_AS_GUEST";
export class UserLogInAsGuest implements Action {
  type: string = USER_LOG_IN_AS_GUEST;
  constructor(public user: User) {}
}

export const BEE_HIVE_ACTIONS_CHANGE = "BEE_HIVE_ACTIONS_CHANGE";
export class BeeHiveActionsChange implements Action {
  type: string = BEE_HIVE_ACTIONS_CHANGE;
  constructor(public beeHiveActionsState: BeeHiveActionsState) {}
}

export const BEEHIVE_SELECT = "BEEHIVE_SELECT";
export class BeehiveSelect implements Action {
  type: string = BEEHIVE_SELECT;
  constructor(public Beehive: BeeHives) {}
}

export const GET_MY_BEEHIVES = "GET_MY_BEEHIVES";
export class GetMyBeehives implements Action {
  type: string = GET_MY_BEEHIVES;
  constructor(public Beehives: BeeHives[]) {}
}

export const PLOT_SELECT = "PLOT_SELECT";
export class PlotSelect implements Action {
  type: string = PLOT_SELECT;
  constructor(public plot: IPlots) {}
}

export const GET_MY_PLOTS = "GET_MY_PLOTS";
export class GetMyPlots implements Action {
  type: string = GET_MY_PLOTS;
  constructor(public plots: IPlots[]) {}
}

export const GET_MY_NOTIFI = "GET_MY_NOTIFI";
export class GetMyNotifi implements Action {
  type: string = GET_MY_NOTIFI;
  constructor(public notifi: any[]) {}
}
