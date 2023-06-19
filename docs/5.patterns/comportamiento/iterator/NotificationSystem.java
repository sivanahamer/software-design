// Un ejemplo en Java para demostrar la implementación
// del patrón iterador con un ejemplo de notificaciones


// Una clase simple de Notificación
class Notification
{
	// Para almacenar un mensaje de notificación
	String notification;

	public Notification(String notification)
	{
		this.notification = notification;
	}
	public String getNotification()
	{
		return notification;
	}
}

// Intefaz "Collection"
interface Collection
{
	public Iterator createIterator();
}

// Colección de notificaciones
class NotificationCollection implements Collection
{
	static final int MAX_ITEMS = 6;
	int numberOfItems = 0;
	Notification[] notificationList;

	public NotificationCollection()
	{
		notificationList = new Notification[MAX_ITEMS];

		// Notiticaciones para el ejemplo
		addItem("Notification 1");
		addItem("Notification 2");
		addItem("Notification 3");
	}

	public void addItem(String str)
	{
		Notification notification = new Notification(str);
		if (numberOfItems >= MAX_ITEMS)
			System.err.println("Full");
		else
		{
			notificationList[numberOfItems] = notification;
			numberOfItems = numberOfItems + 1;
		}
	}

	public Iterator createIterator()
	{
		return new NotificationIterator(notificationList);
	}
}

// También se podría usar Java.Util.Iterator
interface Iterator
{
	// indica si hay más elementos sobre los que iterar
	boolean hasNext();

	// retorna el siguiente elemento
	Object next();
}

// ConcreteIterator
class NotificationIterator implements Iterator
{
	Notification[] notificationList;

	// mantiene la posición actual del iterador sobre el array
	int pos = 0;

	// El constructor toma el array de notificationList sobre el que se va a iterar.
	public NotificationIterator (Notification[] notificationList)
	{
		this.notificationList = notificationList;
	}

	public Object next()
	{
		// retorna el siguiente elemento en el array e incrementa pos
		Notification notification = notificationList[pos];
		pos += 1;
		return notification;
	}

	public boolean hasNext()
	{
		if (pos >= notificationList.length ||
			notificationList[pos] == null)
			return false;
		else
			return true;
	}
}

// Contiene la colección de notificaciones 
// como un objeto de NotificationCollection
class NotificationBar
{
	NotificationCollection notifications;

	public NotificationBar(NotificationCollection notifications)
	{
		this.notifications = notifications;
	}

	public void printNotifications()
	{
		Iterator iterator = notifications.createIterator();
		System.out.println("-------NOTIFICATION BAR------------");
		while (iterator.hasNext())
		{
			Notification n = (Notification)iterator.next();
			System.out.println(n.getNotification());
		}
	}
}


class Main
{
	public static void main(String args[])
	{
		NotificationCollection nc = new NotificationCollection();
		NotificationBar nb = new NotificationBar(nc);
		nb.printNotifications();
	}
}
