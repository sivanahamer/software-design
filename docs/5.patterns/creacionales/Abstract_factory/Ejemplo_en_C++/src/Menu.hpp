#ifndef MENU_HPP
#define MENU_HPP

#include "Factories.hpp"

/**
 * @brief Metodo encargado de desplegar el correo
 * institucional con todos los productos concretos
 * creados
*/
void handleMail(AbstractFactory* mailFactory);

/**
 * @brief Metodo encargado de desplegar mediacion
 * virtual con todos los productos concretos
 * creados
*/
void handleMediacionVirtual(AbstractFactory* mediacionVirtualFactory);

/**
 * @brief Metodo encargado de crear el menu
 * principal para elegir cual plataforma se va
 * a utilizar
*/
void principalMenu();

#endif
