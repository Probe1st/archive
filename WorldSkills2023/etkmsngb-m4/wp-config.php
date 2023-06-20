<?php
/**
 * Основные параметры WordPress.
 *
 * Скрипт для создания wp-config.php использует этот файл в процессе установки.
 * Необязательно использовать веб-интерфейс, можно скопировать файл в "wp-config.php"
 * и заполнить значения вручную.
 *
 * Этот файл содержит следующие параметры:
 *
 * * Настройки базы данных
 * * Секретные ключи
 * * Префикс таблиц базы данных
 * * ABSPATH
 *
 * @link https://ru.wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Параметры базы данных: Эту информацию можно получить у вашего хостинг-провайдера ** //
/** Имя базы данных для WordPress */
define( 'DB_NAME', 'etkmsngb_m4' );

/** Имя пользователя базы данных */
define( 'DB_USER', 'etkmsngb' );

/** Пароль к базе данных */
define( 'DB_PASSWORD', 'N6E5vh' );

/** Имя сервера базы данных */
define( 'DB_HOST', 'localhost' );

/** Кодировка базы данных для создания таблиц. */
define( 'DB_CHARSET', 'utf8mb4' );

/** Схема сопоставления. Не меняйте, если не уверены. */
define( 'DB_COLLATE', '' );

/**#@+
 * Уникальные ключи и соли для аутентификации.
 *
 * Смените значение каждой константы на уникальную фразу. Можно сгенерировать их с помощью
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ сервиса ключей на WordPress.org}.
 *
 * Можно изменить их, чтобы сделать существующие файлы cookies недействительными.
 * Пользователям потребуется авторизоваться снова.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'tmxDI*HS(T1p|BBm7y:*v2P@0H4&#6S~^v/Eg#>j<:~qgp#@+}(;(%%lXN)5?L>L' );
define( 'SECURE_AUTH_KEY',  '|.Du4OfwCW#~]HFs[)CG9,0#cqc%eI20XuQd2bc!Ils:&EqThE[W?h+~xzhv3 3]' );
define( 'LOGGED_IN_KEY',    ' x$~M0Y}M=aG}_gr=e{4sig?gbo1Be0.J:2!I3gW=V KB7{O+MdSh7m~9B~;OI<+' );
define( 'NONCE_KEY',        '&=JYA `}[0_f+vGJ8GU]6,t:@qy!%1JVGrq%[CI<dOD_KxEa;HeO;O,F}m^(0sa(' );
define( 'AUTH_SALT',        'qvB7[Emg!Y*u6O#k*G(1.mFIlL4WRm-9hs{k}>y0a~M8FL `O.?UHFG$`:?0=Lan' );
define( 'SECURE_AUTH_SALT', ')UR/!N.zSy?+f$/Wxs972n~xm~t?~,lLoz&rGkn3]XQn6BuToYI4B}T`m=LPPBq*' );
define( 'LOGGED_IN_SALT',   'n0Y{nbIA8aN?rOaX!W`5Re^o);L?&hUohmG10M]T6GOCg)TJTCDl{wdL_4KQH3/e' );
define( 'NONCE_SALT',       'lI g<bm9((I-5P.X_giH}tw.sz.M!94zs0:+p)/9,eOay#VM(~SO/vnoeE1Heb:O' );

/**#@-*/

/**
 * Префикс таблиц в базе данных WordPress.
 *
 * Можно установить несколько сайтов в одну базу данных, если использовать
 * разные префиксы. Пожалуйста, указывайте только цифры, буквы и знак подчеркивания.
 */
$table_prefix = 'wp_';

/**
 * Для разработчиков: Режим отладки WordPress.
 *
 * Измените это значение на true, чтобы включить отображение уведомлений при разработке.
 * Разработчикам плагинов и тем настоятельно рекомендуется использовать WP_DEBUG
 * в своём рабочем окружении.
 *
 * Информацию о других отладочных константах можно найти в документации.
 *
 * @link https://ru.wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Произвольные значения добавляйте между этой строкой и надписью "дальше не редактируем". */



/* Это всё, дальше не редактируем. Успехов! */

/** Абсолютный путь к директории WordPress. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Инициализирует переменные WordPress и подключает файлы. */
require_once ABSPATH . 'wp-settings.php';
