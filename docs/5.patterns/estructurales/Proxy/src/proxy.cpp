#include <iostream>
#include <string>

// Interfaz del objeto real
class Subject {
public:
    virtual void request() = 0;
};

// Objeto real
class RealSubject : public Subject {
public:
    void request() override {
        std::cout << "RealSubject: Atendiendo la solicitud" << std::endl;
    }
};

// Proxy
class Proxy : public Subject {
private:
    RealSubject* real_subject_;

public:
    Proxy() : real_subject_(nullptr) {}

    void request() override {
        // Verifica si se ha creado una instancia del objeto real
        if (real_subject_ == nullptr) {
            real_subject_ = new RealSubject();
        }

        // Realiza acciones adicionales antes de llamar al objeto real
        std::cout << "Proxy: Realizando acciones antes de la solicitud" << std::endl;

        // Llama al objeto real
        real_subject_->request();

        // Realiza acciones adicionales después de llamar al objeto real
        std::cout << "Proxy: Realizando acciones posteriores a la solicitud" << std::endl;
    }
};

// Uso del Proxy
int main() {
    // Crea una instancia del proxy
    Proxy proxy;

    // Llama al método a través del proxy
    proxy.request();

    return 0;
}