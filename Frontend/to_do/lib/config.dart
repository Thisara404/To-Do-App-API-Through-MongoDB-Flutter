class ApiConfig {
  // Base URL for API calls
  static const String baseUrl = 'http://192.168.43.187:3001';

  // API endpoints
  static const String loginEndpoint = '/user/login';
  static const String signupEndpoint = '/user/register';
  static const String tasksEndpoint = '/tasks';

  // Token storage key
  static const String tokenKey = 'auth_token';
  static const String userIdKey = 'user_id';
}
