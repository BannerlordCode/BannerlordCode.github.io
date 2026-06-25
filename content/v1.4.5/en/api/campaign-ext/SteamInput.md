---
title: "SteamInput"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SteamInput`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SteamInput

**Namespace:** Steamworks
**Module:** Steamworks
**Type:** `public static class SteamInput`
**Base:** none
**File:** `Bannerlord.Source/bin/Steamworks.NET/Steamworks/SteamInput.cs`

## Overview

`SteamInput` lives in `Steamworks` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Steamworks` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Init
`public static bool Init(bool bExplicitlyCallRunFrame)`

**Purpose:** Initializes the state, resources, or bindings for `init`.

### Shutdown
`public static bool Shutdown()`

**Purpose:** Handles logic related to `shutdown`.

### SetInputActionManifestFilePath
`public static bool SetInputActionManifestFilePath(string pchInputActionManifestAbsolutePath)`

**Purpose:** Sets the value or state of `input action manifest file path`.

### RunFrame
`public static void RunFrame(bool bReservedValue = true)`

**Purpose:** Handles logic related to `run frame`.

### BWaitForData
`public static bool BWaitForData(bool bWaitForever, uint unTimeout)`

**Purpose:** Handles logic related to `b wait for data`.

### BNewDataAvailable
`public static bool BNewDataAvailable()`

**Purpose:** Handles logic related to `b new data available`.

### GetConnectedControllers
`public static int GetConnectedControllers(InputHandle_t handlesOut)`

**Purpose:** Gets the current value of `connected controllers`.

### EnableDeviceCallbacks
`public static void EnableDeviceCallbacks()`

**Purpose:** Handles logic related to `enable device callbacks`.

### EnableActionEventCallbacks
`public static void EnableActionEventCallbacks(SteamInputActionEventCallbackPointer pCallback)`

**Purpose:** Handles logic related to `enable action event callbacks`.

### GetActionSetHandle
`public static InputActionSetHandle_t GetActionSetHandle(string pszActionSetName)`

**Purpose:** Gets the current value of `action set handle`.

### ActivateActionSet
`public static void ActivateActionSet(InputHandle_t inputHandle, InputActionSetHandle_t actionSetHandle)`

**Purpose:** Handles logic related to `activate action set`.

### GetCurrentActionSet
`public static InputActionSetHandle_t GetCurrentActionSet(InputHandle_t inputHandle)`

**Purpose:** Gets the current value of `current action set`.

### ActivateActionSetLayer
`public static void ActivateActionSetLayer(InputHandle_t inputHandle, InputActionSetHandle_t actionSetLayerHandle)`

**Purpose:** Handles logic related to `activate action set layer`.

### DeactivateActionSetLayer
`public static void DeactivateActionSetLayer(InputHandle_t inputHandle, InputActionSetHandle_t actionSetLayerHandle)`

**Purpose:** Handles logic related to `deactivate action set layer`.

### DeactivateAllActionSetLayers
`public static void DeactivateAllActionSetLayers(InputHandle_t inputHandle)`

**Purpose:** Handles logic related to `deactivate all action set layers`.

### GetActiveActionSetLayers
`public static int GetActiveActionSetLayers(InputHandle_t inputHandle, InputActionSetHandle_t handlesOut)`

**Purpose:** Gets the current value of `active action set layers`.

### GetDigitalActionHandle
`public static InputDigitalActionHandle_t GetDigitalActionHandle(string pszActionName)`

**Purpose:** Gets the current value of `digital action handle`.

### GetDigitalActionData
`public static InputDigitalActionData_t GetDigitalActionData(InputHandle_t inputHandle, InputDigitalActionHandle_t digitalActionHandle)`

**Purpose:** Gets the current value of `digital action data`.

### GetDigitalActionOrigins
`public static int GetDigitalActionOrigins(InputHandle_t inputHandle, InputActionSetHandle_t actionSetHandle, InputDigitalActionHandle_t digitalActionHandle, EInputActionOrigin originsOut)`

**Purpose:** Gets the current value of `digital action origins`.

### GetStringForDigitalActionName
`public static string GetStringForDigitalActionName(InputDigitalActionHandle_t eActionHandle)`

**Purpose:** Gets the current value of `string for digital action name`.

### GetAnalogActionHandle
`public static InputAnalogActionHandle_t GetAnalogActionHandle(string pszActionName)`

**Purpose:** Gets the current value of `analog action handle`.

### GetAnalogActionData
`public static InputAnalogActionData_t GetAnalogActionData(InputHandle_t inputHandle, InputAnalogActionHandle_t analogActionHandle)`

**Purpose:** Gets the current value of `analog action data`.

### GetAnalogActionOrigins
`public static int GetAnalogActionOrigins(InputHandle_t inputHandle, InputActionSetHandle_t actionSetHandle, InputAnalogActionHandle_t analogActionHandle, EInputActionOrigin originsOut)`

**Purpose:** Gets the current value of `analog action origins`.

### GetGlyphPNGForActionOrigin
`public static string GetGlyphPNGForActionOrigin(EInputActionOrigin eOrigin, ESteamInputGlyphSize eSize, uint unFlags)`

**Purpose:** Gets the current value of `glyph p n g for action origin`.

### GetGlyphSVGForActionOrigin
`public static string GetGlyphSVGForActionOrigin(EInputActionOrigin eOrigin, uint unFlags)`

**Purpose:** Gets the current value of `glyph s v g for action origin`.

### GetGlyphForActionOrigin_Legacy
`public static string GetGlyphForActionOrigin_Legacy(EInputActionOrigin eOrigin)`

**Purpose:** Gets the current value of `glyph for action origin_ legacy`.

### GetStringForActionOrigin
`public static string GetStringForActionOrigin(EInputActionOrigin eOrigin)`

**Purpose:** Gets the current value of `string for action origin`.

### GetStringForAnalogActionName
`public static string GetStringForAnalogActionName(InputAnalogActionHandle_t eActionHandle)`

**Purpose:** Gets the current value of `string for analog action name`.

### StopAnalogActionMomentum
`public static void StopAnalogActionMomentum(InputHandle_t inputHandle, InputAnalogActionHandle_t eAction)`

**Purpose:** Handles logic related to `stop analog action momentum`.

### GetMotionData
`public static InputMotionData_t GetMotionData(InputHandle_t inputHandle)`

**Purpose:** Gets the current value of `motion data`.

### TriggerVibration
`public static void TriggerVibration(InputHandle_t inputHandle, ushort usLeftSpeed, ushort usRightSpeed)`

**Purpose:** Handles logic related to `trigger vibration`.

### TriggerVibrationExtended
`public static void TriggerVibrationExtended(InputHandle_t inputHandle, ushort usLeftSpeed, ushort usRightSpeed, ushort usLeftTriggerSpeed, ushort usRightTriggerSpeed)`

**Purpose:** Handles logic related to `trigger vibration extended`.

### TriggerSimpleHapticEvent
`public static void TriggerSimpleHapticEvent(InputHandle_t inputHandle, EControllerHapticLocation eHapticLocation, byte nIntensity, char nGainDB, byte nOtherIntensity, char nOtherGainDB)`

**Purpose:** Handles logic related to `trigger simple haptic event`.

### SetLEDColor
`public static void SetLEDColor(InputHandle_t inputHandle, byte nColorR, byte nColorG, byte nColorB, uint nFlags)`

**Purpose:** Sets the value or state of `l e d color`.

### Legacy_TriggerHapticPulse
`public static void Legacy_TriggerHapticPulse(InputHandle_t inputHandle, ESteamControllerPad eTargetPad, ushort usDurationMicroSec)`

**Purpose:** Handles logic related to `legacy_ trigger haptic pulse`.

### Legacy_TriggerRepeatedHapticPulse
`public static void Legacy_TriggerRepeatedHapticPulse(InputHandle_t inputHandle, ESteamControllerPad eTargetPad, ushort usDurationMicroSec, ushort usOffMicroSec, ushort unRepeat, uint nFlags)`

**Purpose:** Handles logic related to `legacy_ trigger repeated haptic pulse`.

### ShowBindingPanel
`public static bool ShowBindingPanel(InputHandle_t inputHandle)`

**Purpose:** Handles logic related to `show binding panel`.

### GetInputTypeForHandle
`public static ESteamInputType GetInputTypeForHandle(InputHandle_t inputHandle)`

**Purpose:** Gets the current value of `input type for handle`.

### GetControllerForGamepadIndex
`public static InputHandle_t GetControllerForGamepadIndex(int nIndex)`

**Purpose:** Gets the current value of `controller for gamepad index`.

### GetGamepadIndexForController
`public static int GetGamepadIndexForController(InputHandle_t ulinputHandle)`

**Purpose:** Gets the current value of `gamepad index for controller`.

### GetStringForXboxOrigin
`public static string GetStringForXboxOrigin(EXboxOrigin eOrigin)`

**Purpose:** Gets the current value of `string for xbox origin`.

### GetGlyphForXboxOrigin
`public static string GetGlyphForXboxOrigin(EXboxOrigin eOrigin)`

**Purpose:** Gets the current value of `glyph for xbox origin`.

### GetActionOriginFromXboxOrigin
`public static EInputActionOrigin GetActionOriginFromXboxOrigin(InputHandle_t inputHandle, EXboxOrigin eOrigin)`

**Purpose:** Gets the current value of `action origin from xbox origin`.

### TranslateActionOrigin
`public static EInputActionOrigin TranslateActionOrigin(ESteamInputType eDestinationInputType, EInputActionOrigin eSourceOrigin)`

**Purpose:** Handles logic related to `translate action origin`.

### GetDeviceBindingRevision
`public static bool GetDeviceBindingRevision(InputHandle_t inputHandle, out int pMajor, out int pMinor)`

**Purpose:** Gets the current value of `device binding revision`.

### GetRemotePlaySessionID
`public static uint GetRemotePlaySessionID(InputHandle_t inputHandle)`

**Purpose:** Gets the current value of `remote play session i d`.

### GetSessionInputConfigurationSettings
`public static ushort GetSessionInputConfigurationSettings()`

**Purpose:** Gets the current value of `session input configuration settings`.

## Usage Example

```csharp
SteamInput.Init(false);
```

## See Also

- [Complete Class Catalog](../catalog)