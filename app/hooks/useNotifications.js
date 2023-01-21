import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
import { useEffect, useRef } from "react";
import expoPushTokensApi from "../api/expoPushTokens";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export default useNotifications = (notificationListener) => {
  const responseListener = useRef();

  useEffect(() => {
    // Fetching the Expo push token and uploading it to a server
    registerForPushNotificationsAsync();

    if (notificationListener) {
      responseListener.current =
        // Listeners registered by this method will be called whenever a user interacts with a notification (eg. taps on it).
        Notifications.addNotificationResponseReceivedListener(
          notificationListener
        );
    }

    return () => {
      // Removes a notification subscription returned by an addNotification*Listener call.
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  const registerForPushNotificationsAsync = async () => {
    let token;

    if (Platform.OS === "android") {
      await Notifications.setNotificationChannelAsync("default", {
        name: "default",
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: "#FF231F7C",
      });
    }

    if (Device.isDevice) {
      const { status: existingStatus } =
        await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== "granted") {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== "granted") {
        alert("Failed to get push token for push notification!");
        return;
      }
      token = (await Notifications.getExpoPushTokenAsync()).data;
      expoPushTokensApi.register(token);
    } else {
      alert("Must use physical device for Push Notifications");
    }

    return token;
  };
};
