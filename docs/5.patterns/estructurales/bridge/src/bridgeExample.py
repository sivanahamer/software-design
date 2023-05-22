from abc import ABC, abstractmethod

class Device(ABC):

    @abstractmethod
    def isEnabled(self) -> str:
        pass

    @abstractmethod
    def enable(self) -> None:
        pass

    @abstractmethod
    def disable(self) -> None:
        pass

    @abstractmethod
    def getVolume(self) -> int:
        pass

    @abstractmethod
    def setVolume(self, percent) -> None:
        pass

    @abstractmethod
    def getChannel(self) -> int:
        pass

    @abstractmethod
    def setChannel(self, channel) -> None:
        pass

class Radio(Device):
    def __init__(self):
        self.is_enabled = False
        self.volume = 0
        self.channel = 0

    def isEnabled(self) -> bool:
        return self.is_enabled

    def enable(self) -> None:
        self.is_enabled = True
        print("Radio is Enabled! ✅")

    def disable(self) -> None:
        self.is_enabled = False
        print("Radio is Disabled! ❌")

    def getVolume(self) -> int:
        return self.volume

    def setVolume(self, percent) -> None:
        self.volume += percent

    def getChannel(self) -> int:
        return self.channel

    def setChannel(self, channel) -> None:
        self.channel += channel


class TV(Device):
    def __init__(self):
        self.is_enabled = False
        self.volume = 0
        self.channel = 0
    
    def isEnabled(self) -> bool:
        return self.is_enabled

    def enable(self) -> None:
        self.is_enabled = True
        print("¡TV is Enabled! ✅")

    def disable(self) -> None:
        self.is_enabled = False
        print("¡TV is Disabled! ❌")

    def getVolume(self) -> int:
        return self.volume

    def setVolume(self, percent) -> None:
        self.volume += percent

    def getChannel(self) -> int:
        return self.channel

    def setChannel(self, channel) -> None:
        self.channel += channel
    

class Remote:
    def __init__(self, device: Device) -> None:
        self.device = device  # ESTE ES EL BRIDGE

    def togglePower(self) -> None:
        if(self.device.isEnabled()):
            self.device.disable()
        else:
            self.device.enable()

    def volumeDown(self) -> None:
        self.device.setVolume(-1)

    def volumeUp(self) -> None:
        self.device.setVolume(1)
        
    def channelDown(self) -> None:
        self.device.setChannel(-1)
        
    def channelUp(self) -> None:
        self.device.setChannel(1)
    

class AdvancedRemote(Remote):
    def mute(self) -> None:
        self.device.setVolume(-self.device.getVolume())

if __name__ == "__main__":

    radio = Radio()
    remote = Remote(radio)
    #client_code(abstraction)
    remote.togglePower()
    remote.togglePower()

    tv = TV()
    advancedRemote = AdvancedRemote(tv)
    #client_code(abstraction)
    advancedRemote.togglePower()
    advancedRemote.togglePower()