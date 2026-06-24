<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SteamUtils`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SteamUtils

**Namespace:** Steamworks
**Module:** Steamworks
**Type:** `public static class SteamUtils`
**Base:** none
**File:** `Bannerlord.Source/bin/Steamworks.NET/Steamworks/SteamUtils.cs`

## Overview

`SteamUtils` lives in `Steamworks` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Steamworks` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetSecondsSinceAppActive
`public static uint GetSecondsSinceAppActive()`

**Purpose:** Gets the current value of `seconds since app active`.

### GetSecondsSinceComputerActive
`public static uint GetSecondsSinceComputerActive()`

**Purpose:** Gets the current value of `seconds since computer active`.

### GetConnectedUniverse
`public static EUniverse GetConnectedUniverse()`

**Purpose:** Gets the current value of `connected universe`.

### GetServerRealTime
`public static uint GetServerRealTime()`

**Purpose:** Gets the current value of `server real time`.

### GetIPCountry
`public static string GetIPCountry()`

**Purpose:** Gets the current value of `i p country`.

### GetImageSize
`public static bool GetImageSize(int iImage, out uint pnWidth, out uint pnHeight)`

**Purpose:** Gets the current value of `image size`.

### GetImageRGBA
`public static bool GetImageRGBA(int iImage, byte pubDest, int nDestBufferSize)`

**Purpose:** Gets the current value of `image r g b a`.

### GetCurrentBatteryPower
`public static byte GetCurrentBatteryPower()`

**Purpose:** Gets the current value of `current battery power`.

### GetAppID
`public static AppId_t GetAppID()`

**Purpose:** Gets the current value of `app i d`.

### SetOverlayNotificationPosition
`public static void SetOverlayNotificationPosition(ENotificationPosition eNotificationPosition)`

**Purpose:** Sets the value or state of `overlay notification position`.

### IsAPICallCompleted
`public static bool IsAPICallCompleted(SteamAPICall_t hSteamAPICall, out bool pbFailed)`

**Purpose:** Handles logic related to `is a p i call completed`.

### GetAPICallFailureReason
`public static ESteamAPICallFailure GetAPICallFailureReason(SteamAPICall_t hSteamAPICall)`

**Purpose:** Gets the current value of `a p i call failure reason`.

### GetAPICallResult
`public static bool GetAPICallResult(SteamAPICall_t hSteamAPICall, IntPtr pCallback, int cubCallback, int iCallbackExpected, out bool pbFailed)`

**Purpose:** Gets the current value of `a p i call result`.

### GetIPCCallCount
`public static uint GetIPCCallCount()`

**Purpose:** Gets the current value of `i p c call count`.

### SetWarningMessageHook
`public static void SetWarningMessageHook(SteamAPIWarningMessageHook_t pFunction)`

**Purpose:** Sets the value or state of `warning message hook`.

### IsOverlayEnabled
`public static bool IsOverlayEnabled()`

**Purpose:** Handles logic related to `is overlay enabled`.

### BOverlayNeedsPresent
`public static bool BOverlayNeedsPresent()`

**Purpose:** Handles logic related to `b overlay needs present`.

### CheckFileSignature
`public static SteamAPICall_t CheckFileSignature(string szFileName)`

**Purpose:** Handles logic related to `check file signature`.

### ShowGamepadTextInput
`public static bool ShowGamepadTextInput(EGamepadTextInputMode eInputMode, EGamepadTextInputLineMode eLineInputMode, string pchDescription, uint unCharMax, string pchExistingText)`

**Purpose:** Handles logic related to `show gamepad text input`.

### GetEnteredGamepadTextLength
`public static uint GetEnteredGamepadTextLength()`

**Purpose:** Gets the current value of `entered gamepad text length`.

### GetEnteredGamepadTextInput
`public static bool GetEnteredGamepadTextInput(out string pchText, uint cchText)`

**Purpose:** Gets the current value of `entered gamepad text input`.

### GetSteamUILanguage
`public static string GetSteamUILanguage()`

**Purpose:** Gets the current value of `steam u i language`.

### IsSteamRunningInVR
`public static bool IsSteamRunningInVR()`

**Purpose:** Handles logic related to `is steam running in v r`.

### SetOverlayNotificationInset
`public static void SetOverlayNotificationInset(int nHorizontalInset, int nVerticalInset)`

**Purpose:** Sets the value or state of `overlay notification inset`.

### IsSteamInBigPictureMode
`public static bool IsSteamInBigPictureMode()`

**Purpose:** Handles logic related to `is steam in big picture mode`.

### StartVRDashboard
`public static void StartVRDashboard()`

**Purpose:** Handles logic related to `start v r dashboard`.

### IsVRHeadsetStreamingEnabled
`public static bool IsVRHeadsetStreamingEnabled()`

**Purpose:** Handles logic related to `is v r headset streaming enabled`.

### SetVRHeadsetStreamingEnabled
`public static void SetVRHeadsetStreamingEnabled(bool bEnabled)`

**Purpose:** Sets the value or state of `v r headset streaming enabled`.

### IsSteamChinaLauncher
`public static bool IsSteamChinaLauncher()`

**Purpose:** Handles logic related to `is steam china launcher`.

### InitFilterText
`public static bool InitFilterText(uint unFilterOptions = 0u)`

**Purpose:** Initializes the state, resources, or bindings for `filter text`.

### FilterText
`public static int FilterText(ETextFilteringContext eContext, CSteamID sourceSteamID, string pchInputMessage, out string pchOutFilteredText, uint nByteSizeOutFilteredText)`

**Purpose:** Handles logic related to `filter text`.

### GetIPv6ConnectivityState
`public static ESteamIPv6ConnectivityState GetIPv6ConnectivityState(ESteamIPv6ConnectivityProtocol eProtocol)`

**Purpose:** Gets the current value of `i pv6 connectivity state`.

### IsSteamRunningOnSteamDeck
`public static bool IsSteamRunningOnSteamDeck()`

**Purpose:** Handles logic related to `is steam running on steam deck`.

### ShowFloatingGamepadTextInput
`public static bool ShowFloatingGamepadTextInput(EFloatingGamepadTextInputMode eKeyboardMode, int nTextFieldXPosition, int nTextFieldYPosition, int nTextFieldWidth, int nTextFieldHeight)`

**Purpose:** Handles logic related to `show floating gamepad text input`.

### SetGameLauncherMode
`public static void SetGameLauncherMode(bool bLauncherMode)`

**Purpose:** Sets the value or state of `game launcher mode`.

### DismissFloatingGamepadTextInput
`public static bool DismissFloatingGamepadTextInput()`

**Purpose:** Handles logic related to `dismiss floating gamepad text input`.

## Usage Example

```csharp
SteamUtils.GetSecondsSinceAppActive();
```

## See Also

- [Complete Class Catalog](../catalog)