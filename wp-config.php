<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'netgain_wp');

/** MySQL database username */
define('DB_USER', 'netgain_wp');

/** MySQL database password */
define('DB_PASSWORD', 'fGyRI66mIjYw');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         ' .s3df2S@}b7b5yY@6P9WRi7@Y5hd&-1~mq556^w~L)q]S{o|Ne+ PD|JIX%#l,f');
define('SECURE_AUTH_KEY',  'fh:d=6J_.G<f|e{5J9kx,.<`i}#OeP7oa!{7#+)&i?#d:,KwYk-_H$IC@y|o=|{U');
define('LOGGED_IN_KEY',    '-Cl,_,F/nZvf)-2}5Fx@sjR2B|wGpIwaPIVL|2%Nu%x F9-fK@xO%x,__0`XD7+(');
define('NONCE_KEY',        'K|VL=bbK6+f#C+V7umYXpu&#?- GI/GqX}*kk=W}*-|M?4IA:H4i8!~HY`5kGc~h');
define('AUTH_SALT',        'tN/x~_hyyF_M}6tPAM_Tn[l4dC+)U(Z_x8I8)9xJwJ+t#n%Pg+DISbE!cR6xaFxd');
define('SECURE_AUTH_SALT', 'Drr<#4%8;+OzERW>|ZKL9A[xp2cym0d>lfdH+=N+si|G:=i,<|ag|S,3xBxaWf{/');
define('LOGGED_IN_SALT',   'DGkk&.{gP/J+1]W9-l&Rh%M}F4la$UdW|^E|d6Zu%sl?R-iey=04{[I}Tbk7.0!|');
define('NONCE_SALT',       '*]Q6T+|YI:&F+7MNu/0vipA%!+ag}8~8=6yUrqFbL<-_eUA[k^.I@YgLSZ~n|;O~');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
