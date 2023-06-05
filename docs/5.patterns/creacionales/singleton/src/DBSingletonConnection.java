import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class MySQLDatabaseConnection {
    private static MySQLDatabaseConnection instance;
    private Connection connection;
    
    private final String url = "jdbc:mysql://localhost:3306/mydatabase";
    private final String username = "your-username";
    private final String password = "your-password";
    
    private MySQLDatabaseConnection() {
        // Constructor privado
    }
    
    public static MySQLDatabaseConnection getInstance() {
        if (instance == null) {
            instance = new MySQLDatabaseConnection();
        }
        return instance;
    }
    
    public Connection getConnection() {
        if (connection == null) {
            try {
                connection = DriverManager.getConnection(url, username, password);
                System.out.println("Conexión a la base de datos establecida.");
            } catch (SQLException e) {
                System.out.println("Error al establecer la conexión: " + e.getMessage());
            }
        }
        return connection;
    }
}
