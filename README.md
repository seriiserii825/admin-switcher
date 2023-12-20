# WordPress Admin Switcher #

- **Author:** Kellen Mace
- **Author URL:** http://kellenmace.com/
- **License:** GPLv2 or later
- **License URL:** http://www.gnu.org/licenses/gpl-2.0.html
- **GitHub URL:** https://github.com/kellenmace/wp-admin-switcher/
- **Chrome Web Store URL:** https://chrome.google.com/webstore/detail/wordpress-admin-switcher/pgjihalgddfomcjjpiafhppegjajpkac

## Description ##

A Google Chrome extension that enables you to quickly log into and switch to/from the WordPress admin using a single keyboard shortcut. It works on any WordPress site and is great for power users who want to skip the manual steps of always having to type "wp-admin" into the address bar to log in to a site, or always having to reach for their mouse/trackpad and click a link in the WP admin bar in order to switch to/from the admin; those processes are replaced with a single keyboard shortcut instead.

## Use ##

On any WordPress site, hit cmd + shift + A (Mac) or ctrl + shift + A (Windows/Linux) to log into and switch to/from the WordPress admin. Alternatively, clicking the extension icon produces the same behavior.

## Examples ##

1. You're not yet logged in to a WordPress site. Hitting the shortcut will direct you to the WordPress admin login screen. After logging in you will be directed to the admin post edit screen for the post/page/custom post type you were viewing before you logged in, if possible, or else the main admin screen.
2. You're already logged in and are on the front end of a WordPress site. Hitting the shortcut will direct you to the admin post edit screen for the post/page/custom post type you were viewing, or else the main admin screen.
3. You're already logged in and are in the WordPress admin. Hitting the shortcut will direct you to the page on the front end for the post/page/custom post type you were editing, or else the main site URL.

## FAQ ##

> Can I change the keyboard shortcut from cmd/ctrl + shift + A to something else?

Yes. Go to the Chrome menu > More Tools > Extensions and check the "Keyboard shortcuts" link at the bottom. Find WordPress Admin Switcher on the list click the field next to "Switch to/from admin". Enter your own custom keyboard shortcut.

> If I'm logged in to a site, WordPress provides links in the admin bar at the top
> that can be used to jump back & forth between the admin and front end. How is this
> any different?

It's about efficiency and productivity. The more you can leave your hands on the keyboard without reaching for the mouse/trackpad, the faster you'll be. Not to mention that if you're not yet logged in to a WordPress site, the admin bar links aren't there for you to click on so you'll end up manually highlighting and deleting part of the URL and typing in "wp-admin" every time. The following table illustrates the difference.

<table>
    <tr>
        <th style="width: 20%"></th>
        <th style="width: 55%">Without extension</th>
        <th style="width: 25%">With extension</th>
    </tr>
    <tr>
        <th>Logging into a site</th>
        <td>Move your hand to your mouse/trackpad.
Move the cursor up to the omnibar/address bar.
Click and highlight everything to the right of the domain.
Type 'wp-admin' followed by the enter key.</td>
        <td>Hit cmd/ctrl + shift + A</td>
    </tr>
    <tr>
        <th>Switching between front end/admin</th>
        <td>Move your hand to your mouse/trackpad.
Move the cursor up the WordPress admin bar.
Click one of the links to go to/from the admin.</td>
        <td>Hit cmd/ctrl + shift + A</td>
    </tr>
</table># admin-switcher
