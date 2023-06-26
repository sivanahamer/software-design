#include <iostream>
#include "Menu.hpp"

using namespace std;

void handleMail(AbstractFactory* mailFactory) {
    mailFactory = new MailFactory();
    User* mailUser = mailFactory->createUser();
    Message* mailMessage = mailFactory->createMessage();
    Interface* mailInterface = mailFactory->createInterface();
    
    mailUser->login(); // Logging in to mail account
    mailInterface->generateInterface();
    mailMessage->generateMessage();
    mailMessage->sendMessage(); // Sending mail message
    
    delete mailInterface;
    delete mailMessage;
    delete mailUser;
    delete mailFactory;
}

void handleMediacionVirtual(AbstractFactory* mediacionVirtualFactory) {
    mediacionVirtualFactory = new MVirtualFactory();
    User* mediacionVirtualUser = mediacionVirtualFactory->createUser();
    Message* mediacionVirtualMessage = mediacionVirtualFactory->createMessage();
    Interface* mediacionVirtualInterface = mediacionVirtualFactory->createInterface();

    mediacionVirtualUser->login(); // Logging in to mail account
    mediacionVirtualInterface->generateInterface();
    mediacionVirtualMessage->generateMessage();
    mediacionVirtualMessage->sendMessage(); // Sending mail message

    delete mediacionVirtualInterface;
    delete mediacionVirtualMessage;
    delete mediacionVirtualUser;
    delete mediacionVirtualFactory;
}

void principalMenu() {

    AbstractFactory* factory = nullptr;
    
    int option;
    cout << "\t\t********************************************************" << endl;
    cout << "\t\t|   Sistema de manejo de plataformas institucionales\t|" << endl;
    cout << "\t\t********************************************************" << endl << endl;    
    cout << "1. Correo institucional" << endl;
    cout << "2. Mediacion Virtual" << endl;
    cout << "Ingrese la plataforma que desea utilizar: ";
    cin >> option;

    switch (option) {
        case 1:
            handleMail(factory);
            break;
        case 2:
            handleMediacionVirtual(factory);
            break;
        default:
            cout << "Opcion invalida" << endl;
            break;
    }
}