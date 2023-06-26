#ifndef FACTORIES_HPP
#define FACTORIES_HPP
#include "Components.hpp"

/**
  @brief Clase Abstract Factory
  Esta es la clase padre de todas las demas
  clases concretas. Tiene los metodos para que
  las clases concretas puedan crear los objetos
  concretos que requieran
*/
class AbstractFactory {
public:
    /**
     * @brief Destructor de la clase Abstract
     * Factory para evitar fugas de memoria
    */
    virtual ~AbstractFactory() {};

    /**
     * @brief Metodo para crear usuarios, no esta
     * implementado ya que la clase concreta heredara
     * este metodo e implementara lo necesario para
     * crear el usuario
    */    
    virtual User* createUser() = 0;

    /**
     * @brief Metodo para crear mensajes, no esta
     * implementado ya que la clase concreta heredara
     * este metodo e implementara lo necesario para
     * crear el mensaje
    */    
    virtual Message* createMessage() = 0;

    /**
     * @brief Metodo para crear interfaces, no esta
     * implementado ya que la clase concreta heredara
     * este metodo e implementara lo necesario para
     * crear la interfaz
    */    
    virtual Interface* createInterface() = 0;
};

/**
  @brief Clase MailFactory
  Esta clase/fabrica hereda de Abstract Factory para
  obtener los metodos y atributos que hay que
  implementar y esta fabrica generara objetos
  relacionados al correo institucional
*/
class MailFactory : public AbstractFactory {
public:

/**
  @brief Metodo createUser utilizado para
  crear los usuarios del correo institucional.
  Es override porque esta heredando de Abstract
  Factory
*/
    User* createUser() override {
        return new MailUser();
    }

/**
  @brief Metodo createMessage utilizado para
  crear los mensajes del correo institucional
  Es override porque esta heredando de Abstract
  Factory
*/
    Message* createMessage() override {
        return new MailMessage();
    }

/**
  @brief Metodo createInterface utilizado para
  crear los elementos comunes de una interfaz grafica
  para el correo institucional.
  Es override porque esta heredando de Abstract
  Factory
*/
    Interface* createInterface() override {
        return new MailInterface();
    }
};

/**
  @brief Clase MVirtualFactory
  Esta clase/fabrica hereda de Abstract Factory para
  obtener los metodos y atributos que hay que
  implementar y esta fabrica generara objetos
  relacionados al correo institucional
*/
class MVirtualFactory : public AbstractFactory {
public:

    /**
     @brief Metodo createUser utilizado para
    crear los usuarios de mediacion virtual.
    Es override porque esta heredando de Abstract
    Factory
    */
    User* createUser() override {
        return new MVirtualUser();
    }

    /**
     @brief Metodo createMessage utilizado para
    crear los mensajes de mediacion virtual
    Es override porque esta heredando de Abstract
    Factory
    */
    Message* createMessage() override {
        return new MVirtualMessage();
    }

    /**
     @brief Metodo createInterface utilizado para
    crear los elementos comunes de una interfaz grafica
    para de mediacion virtual.
    Es override porque esta heredando de Abstract
    Factory
    */
    Interface* createInterface() override {
        return new MVirtualInterface();
    }
};

#endif
