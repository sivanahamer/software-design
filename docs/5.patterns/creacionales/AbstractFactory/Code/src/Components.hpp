#ifndef COMPONENTS_HPP
#define COMPONENTS_HPP

#include <iostream>

using namespace std;

/**
  @brief Clase User el cual funciona como
  un producto abstracto de los usuarios
*/
class User {
public:
    /**
     @brief Destructor de la clase User
     para evitar fugas de memoria a la hora
     de usar el delete
    */
    virtual ~User() {};

    /**
     @brief Metodo login del producto abstracto User
     el cual no esta implementado para que los productos
     concretos la implementen
    */
    virtual void login() = 0;
};

/**
  @brief Clase MailUser el cual funciona como
  un producto concreto de User
*/
class MailUser : public User {
public:
    /**
     @brief Metodo login usado para simular cuando un
     usuario se logea al correo institucional
    */
    void login();
};

/**
  @brief Clase MVirtualUser el cual funciona como
  un producto concreto de User
*/
class MVirtualUser : public User {
public:
    /**
     @brief Metodo login usado para simular cuando un
     usuario se logea a mediacion virtual
    */
    void login();
};

//------------------------Message-------------------

/**
  @brief Clase Message el cual funciona como
  un producto abstracto de los mensajes
*/
class Message {
public:
    /**
     @brief Destructor de la clase Message
     para evitar fugas de memoria a la hora
     de usar el delete
    */
    virtual ~Message() {}

    /**
     @brief Metodo generateMessage del producto abstracto
     Message el cual no esta implementado para que los productos
     concretos lo implementen
    */
    virtual void generateMessage() = 0;

    /**
     @brief Metodo sendMessage del producto abstracto
     Message el cual no esta implementado para que los productos
     concretos lo implementen
    */
    virtual void sendMessage() = 0;
};

/**
  @brief Clase MailMessage el cual funciona como
  un producto concreto de Message
*/
class MailMessage : public Message {
public:
    /**
     @brief Metodo que se encarga de simular la
     creacion de un mensaje en el correo
     institucional
    */
    void generateMessage();

    /**
     @brief Metodo que se encarga de simular el
     envio de un mensaje en el correo
     institucional
    */
    void sendMessage();
};

/**
  @brief Clase MVirtualMessage el cual funciona como
  otro producto concreto de Message
*/
class MVirtualMessage : public Message {
public:
    /**
     @brief Metodo que se encarga de simular la
     creacion de un mensaje en mediacion virtual
    */
    void generateMessage();

    /**
     @brief Metodo que se encarga de simular el
     envio de un mensaje en mediacion virtual
    */
    void sendMessage();
};

//------------------------Interface-------------------

/**
  @brief Clase Interface el cual funciona como
  un producto abstracto de la interface grafica
*/
class Interface {
public:
    /**
     @brief Destructor de la clase Interface
     para evitar fugas de memoria a la hora
     de usar el delete
    */
    virtual ~Interface() {};

    /**
     @brief Metodo generateInterface del producto abstracto
     Interface el cual no esta implementado para que los productos
     concretos lo implementen
    */    
    virtual void generateInterface() = 0;
};

/**
  @brief Clase MailInterface el cual funciona como un
  producto concreto de Interface
*/
class MailInterface: public Interface {
public:
    /**
     @brief Metodo generateInterface encargado de simular
     la generacion de una interface grafica para el correo
     intitucional al crear botones,toolbars, entre
     otros elementos ficticios
    */    
    void generateInterface();
};

/**
  @brief Clase MVirtualInterface el cual funciona como un
  producto concreto de Interface
*/
class MVirtualInterface : public Interface {
public:
    /**
     @brief Metodo generateInterface encargado de simular
     la generacion de una interface grafica para mediacion
     virtual al crear botones,toolbars, entre
     otros elementos ficticios
    */    
    void generateInterface();
};

#endif