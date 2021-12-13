export interface SSLTest {
    test_id: string;
    url: string;
    alert_expiration: boolean;
    alert_errors: boolean;
    alert_mixed_content: boolean;
    follow_redirects: boolean;
    checkrate: number;
    first_expiration_reminder: number;
    second_expiration_reminder: number;
    third_expiration_reminder: number;
}
