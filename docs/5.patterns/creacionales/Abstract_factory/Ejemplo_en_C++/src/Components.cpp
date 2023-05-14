#include "Components.hpp"

    void MailUser::login() {
        cout << "\t\t*****************************************" << endl;
        cout << "\t\t|   Entrando al Correo Institucional\t|" << endl;
        cout << "\t\t*****************************************" << endl << endl;           
    }

    void MVirtualUser::login() {
        cout << "\t\t*****************************************" << endl;
        cout << "\t\t|   Entrando a Mediacion Virtual\t|" << endl;
        cout << "\t\t*****************************************" << endl << endl;           
    }

    void MailMessage::generateMessage() {
        cout << "\t\t********************************************************" << endl;
        cout << "\t\t|   Creando un mensaje desde el correo institucional   |" << endl;
        cout << "\t\t********************************************************" << endl << endl;   
    }

    void MailMessage::sendMessage() {
        cout << "\t\t*****************************************************" << endl;
        cout << "\t\t|   Enviado mensaje desde el correo institucional   |" << endl;
        cout << "\t\t*****************************************************" << endl << endl;           
    }

    void MVirtualMessage::generateMessage() {
        cout << "\t\t*************************************************" << endl;
        cout << "\t\t|   Creando un mensaje desde mediacion virtual\t|" << endl;
        cout << "\t\t*************************************************" << endl << endl;   
    }

    void MVirtualMessage::sendMessage() {
        cout << "\t\t*************************************************" << endl;
        cout << "\t\t|   Enviado mensaje desde mediacion virtual\t|" << endl;
        cout << "\t\t*************************************************" << endl << endl;           
    }

    void MailInterface::generateInterface() {
        cout << "\t\t***********************************************************" << endl;
        cout << "\t\t|   Generando barras de menu, botones, toolbars y ventanas|" << endl;
        cout << "\t\t|   con el estilo del Correo Institucional\t\t  |" << endl;
        cout << "\t\t***********************************************************" << endl << endl;                
    }

    void MVirtualInterface::generateInterface() {
        cout << "\t\t***********************************************************" << endl;
        cout << "\t\t|   Generando barras de menu, botones, toolbars y ventanas|" << endl;
        cout << "\t\t|   con el estilo de Mediacion Virtual\t\t\t  |" << endl;
        cout << "\t\t***********************************************************" << endl << endl;  
    }