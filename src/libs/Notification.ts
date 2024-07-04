
import Toastify from 'toastify-js'
import type { INotification } from '../types/types'

export default function requestNotification(
  { icon, notificationMsg, body }: INotification
) {
  const app = document.querySelector('#App')
  Notification.requestPermission().then(permission => {
    if (permission === "granted" && app != null) {
      showNotification({ body, icon, notificationMsg })
      Toastify({
        selector: app,
        text: '✔ Permiso Avtivado',
        duration: 5000,
        gravity: 'bottom',
        style: { background: 'linear-gradient(to right, #0e03c7, #058eaa)' }
      }).showToast()
    }

    if (permission === 'denied' && app != null) {
      Toastify({
        selector: app,
        text: '❌ Permiso Denagado!',
        duration: 5000,
        gravity: 'bottom',
        style: { background: 'linear-gradient(to right, #0e03c7, #058eaa)' }
      }).showToast()
    }

    if (permission === 'default' && app != null) {
      Toastify({
        selector: app,
        text: 'Esta web te pedira permiso para mostrar notificaciones',
        duration: 5000,
        gravity: 'bottom',
        style: { background: 'linear-gradient(to right, #0e03c7, #058eaa)' }
      }).showToast()
    }
  }).catch(error => {
    console.error('Error al solicitar permiso de notificación:', error);
    Toastify({
      selector: app!,
      text: 'Error al solicitar permiso de notificación',
      duration: 5000,
      gravity: 'bottom',
      style: { background: 'linear-gradient(to right, #0e03c7, #058eaa)' }
    }).showToast()
  })
}

function showNotification({ icon, notificationMsg, body }: INotification) {
  return new Notification(
    notificationMsg ?? '', {
    body: body ?? '',
    icon: icon ?? ''
  }
  )
}
