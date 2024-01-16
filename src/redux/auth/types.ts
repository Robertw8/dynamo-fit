type OptionalString = string | undefined;

interface User {
  email: OptionalString;
  name: OptionalString;
  dailyCalories: OptionalString;
  dailyActivity: OptionalString;
  settings: {
    height: OptionalString;
    currentWeight: OptionalString;
    desiredWeight: OptionalString;
    birthday: OptionalString;
    blood: OptionalString;
    sex: OptionalString;
    levelActivity: OptionalString;
  };
}

interface InitialAuthState {
  user: User;
  token: OptionalString;
  isLoggedIn: boolean;
  isLoading: boolean;
  isRefreshing: boolean;
  error: OptionalString;
  type: OptionalString;
}

export type { User, InitialAuthState };
