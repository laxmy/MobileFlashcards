import { AsyncStorage } from 'react-native'
import { Notifications, Permissions } from 'expo'

const STUDY_NOTIFICATION = 'flashcards:notifications'

export function clearLocalNotification () {
  return AsyncStorage.removeItem(STUDY_NOTIFICATION)
    .then(Notifications.cancelAllScheduledNotificationsAsync)
}

function createNotification() {
  return {
    title: '⚠ Have you studied flashcards today?',
    body: "👋 don't forget to study today!",
    ios: {
      sound: true,
    },
    android: {
      sound: true,
      priority: 'high',
      sticky: false,
      vibrate: true,
    }
  }
}

export function setLocalNotification () {
  AsyncStorage.getItem(STUDY_NOTIFICATION)
    .then(JSON.parse)
    .then((data) => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS)
          .then(({ status }) => {
            if (status === 'granted') {
              Notifications.cancelAllScheduledNotificationsAsync()

              let tomorrow = new Date()
              tomorrow.setDate(tomorrow.getDate() + 1)
              tomorrow.setHours(20)
              tomorrow.setMintutes(0)

              Notifications.scheduleLocalNotificationsAsync(
                createNotification(),
                {
                  time: tomorrow,
                  repeat: 'day',
                }
              )

              AsyncStorage.setItem(STUDY_NOTIFICATION, JSON.stringify(true))
            }
          })
      }
    })
}
