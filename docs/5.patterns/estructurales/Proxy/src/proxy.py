from abc import ABC, abstractmethod

class Image(ABC):
    @abstractmethod
    def display(self):
        pass

class RealImage(Image):
    def __init__(self, filename):
        self.filename = filename
        self.load_from_disk()

    def load_from_disk(self):
        print(f"Loading {self.filename}")

    def display(self):
        print(f"Displaying {self.filename}")

class ProxyImage(Image):
    def __init__(self, filename):
        self.filename = filename
        self.real_image = None

    def display(self):
        if self.real_image == None:
            self.real_image = RealImage(self.filename)
        self.real_image.display()

image = ProxyImage("test.jpg")

# La imagen se cargará desde el disco
image.display()
print("")

# La imagen no se cargará desde el disco
image.display()