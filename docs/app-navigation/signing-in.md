---
id: signing-in
title: Signing in
sidebar_label: Signing in
sidebar_position: 2
---

# Signing in

To use OpenTMS you need an account at your organization's tenant. If you do not have one yet, ask your administrator to create one for you.

## Steps

1. Open OpenTMS in your browser at the URL provided by your organization (typically `https://<your-tenant>.opentms.nl` or a similar address).
2. Enter your **tenant name** if asked. This identifies your organization inside OpenTMS.
3. Enter your **username or email** and **password**.
4. Click **Log in**.

<figure>

![Login screen — placeholder](./img/01-login-screen.png)

<figcaption>The OpenTMS login screen.</figcaption>
</figure>

After signing in you land on the **Dashboard**.

## What if I forget my password?

Click **Forgot password?** on the login screen and enter your email address. OpenTMS sends you a reset link. The link is valid for a limited time — open it in the same browser to complete the reset.

## Two-factor authentication

If your organization requires two-factor authentication, OpenTMS asks for a verification code right after your password. Enter the code from your authenticator app (or the code you received by email/SMS, depending on how it has been configured).

## Single sign-on (SSO)

If your organization uses single sign-on, the login screen shows an extra button (for example **Sign in with Microsoft**). Click it and follow your provider's flow — you do not need to enter a separate OpenTMS password.

## Signing out

Open the **user menu** in the top-right corner and click **Logout**. See [Your user menu](./user-menu#sign-out) for details.

:::warning Public computers
Always sign out before leaving a shared computer. OpenTMS sessions stay open until you log out or the session expires.
:::
