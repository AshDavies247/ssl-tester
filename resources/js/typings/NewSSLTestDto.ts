export interface NewSSLTestDto {
    url: string;
    checkrate: number;
    contact: string;
    follow_redirects: boolean;
    alert_expiration: boolean;
    alert_errors: boolean;
    alert_mixed_content: boolean;
    first_expiration_reminder: number;
    second_expiration_reminder: number;
    third_expiration_reminder: number;
    user_agent: string;
    custom_hostname: string;
}
