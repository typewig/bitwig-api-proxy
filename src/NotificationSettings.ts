import ApiProxy from './ApiProxy';
import BooleanValue from './BooleanValue';


class NotificationSettings extends ApiProxy {
    constructor(target) {
        super(target);
        this._extendMethodClassMap({
            'getUserNotificationsEnabled': BooleanValue,
        });
    }
}


/**
 * Bitwig Studio supports automatic visual feedback from controllers that shows up as popup notifications.
 * For example when the selected track or the current controller preset was changed on the controller, these
 * notifications are shown, depending on the configuration.
 *
 * It depends both on the users preference and the capabilities of the controller hardware if a certain
 * notification should be shown. This interface provides functions for enabling/disabling the various kinds
 * of automatic notifications from the hardware point of view. Typically, controllers that include an
 * advanced display don't need to show many notifications additionally on screen. For other controllers
 * that do not include a display it might be useful to show all notifications.
 * By default all notifications are disabled.
 *
 * In addition, the user can enable or disable all notifications the have been enabled using this interface in the
 * preferences dialog of Bitwig Studio.
 *
 * @since Bitwig Studio 1.1
 */
declare interface NotificationSettings {
    /**
     * Returns an object that reports if user notifications are enabled and that allows to enable/disable
     * user notifications from the control surface. If user notifications are disabled, no automatic notifications
     * will be shown in the Bitwig Studio user interface. If user notifications are enabled, all automatic
     * notifications will be shown that are enabled using the methods of this interface.
     *
     * @return {BooleanValue} a boolean value object
     * @since Bitwig Studio 1.1
     */
    getUserNotificationsEnabled(): BooleanValue;

    /**
     * Specifies if user notification related to selection changes should be shown. Please note that this setting
     * only applies when user notifications are enabled in general, otherwise no notification are shown.
     * By default this setting is `false`.
     *
     * @param {boolean} shouldShowNotifications `true` in case selection notifications should be shown,
                                   `false` otherwise.
     * @since Bitwig Studio 1.1
     */
    setShouldShowSelectionNotifications(shouldShowNotifications?: boolean): void;

    /**
     * Specifies if user notification related to selection changes should be shown. Please note that this setting
     * only applies when user notifications are enabled in general, otherwise no notification are shown.
     * By default this setting is `false`.
     *
     * @param {boolean} shouldShowNotifications `true` in case selection notifications should be shown,
                                   `false` otherwise.
     * @since Bitwig Studio 1.1
     */
    setShouldShowChannelSelectionNotifications(shouldShowNotifications?: boolean): void;

    /**
     * Specifies if user notification related to selection changes should be shown. Please note that this setting
     * only applies when user notifications are enabled in general, otherwise no notification are shown.
     * By default this setting is `false`.
     *
     * @param {boolean} shouldShowNotifications `true` in case selection notifications should be shown,
                                   `false` otherwise.
     * @since Bitwig Studio 1.1
     */
    setShouldShowTrackSelectionNotifications(shouldShowNotifications?: boolean): void;

    /**
     * Specifies if user notification related to selection changes should be shown. Please note that this setting
     * only applies when user notifications are enabled in general, otherwise no notification are shown.
     * By default this setting is `false`.
     *
     * @param {boolean} shouldShowNotifications `true` in case selection notifications should be shown,
                                   `false` otherwise.
     * @since Bitwig Studio 1.1
     */
    setShouldShowControllerSelectionNotifications(shouldShowNotifications?: boolean): void;

    /**
     * Specifies if user notification related to selection changes should be shown. Please note that this setting
     * only applies when user notifications are enabled in general, otherwise no notification are shown.
     * By default this setting is `false`.
     *
     * @param {boolean} shouldShowNotifications `true` in case selection notifications should be shown,
                                   `false` otherwise.
     * @since Bitwig Studio 1.1
     */
    setShouldShowControllerLayerSelectionNotifications(shouldShowNotifications?: boolean): void;

    /**
     * Specifies if user notification related to selection changes should be shown. Please note that this setting
     * only applies when user notifications are enabled in general, otherwise no notification are shown.
     *
     * @param {boolean} shouldShowNotifications `true` in case selection notifications should be shown,
                                   `false` otherwise.
     * @since Bitwig Studio 1.1
     */
    setShouldShowPresetNotifications(shouldShowNotifications?: boolean): void;

    /**
     * Specifies if user notification related to selection changes should be shown. Please note that this setting
     * only applies when user notifications are enabled in general, otherwise no notification are shown.
     * By default this setting is `false`.
     *
     * @param {boolean} shouldShowNotifications `true` in case selection notifications should be shown,
                                   `false` otherwise.
     * @since Bitwig Studio 1.1
     */
    setShouldShowMappingNotifications(shouldShowNotifications?: boolean): void;

    /**
     * Specifies if user notification related to selection changes should be shown. Please note that this setting
     * only applies when user notifications are enabled in general, otherwise no notification are shown.
     * By default this setting is `false`.
     *
     * @param {boolean} shouldShowNotifications `true` in case selection notifications should be shown,
                                   `false` otherwise.
     * @since Bitwig Studio 1.1
     */
    setShouldShowValueNotifications(shouldShowNotifications?: boolean): void;

}


export default NotificationSettings;
