---
title: "SteamInput"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SteamInput`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# SteamInput

**Namespace:** Steamworks
**Module:** Steamworks
**Type:** `public static class SteamInput`
**Base:** 无
**File:** `Bannerlord.Source/bin/Steamworks.NET/Steamworks/SteamInput.cs`

## 概述

`SteamInput` 位于 `Steamworks`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `Steamworks` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### Init
`public static bool Init(bool bExplicitlyCallRunFrame)`

**用途 / Purpose:** 初始化 `init` 的状态、资源或绑定。

### Shutdown
`public static bool Shutdown()`

**用途 / Purpose:** 处理 `shutdown` 相关逻辑。

### SetInputActionManifestFilePath
`public static bool SetInputActionManifestFilePath(string pchInputActionManifestAbsolutePath)`

**用途 / Purpose:** 设置 `input action manifest file path` 的值或状态。

### RunFrame
`public static void RunFrame(bool bReservedValue = true)`

**用途 / Purpose:** 处理 `run frame` 相关逻辑。

### BWaitForData
`public static bool BWaitForData(bool bWaitForever, uint unTimeout)`

**用途 / Purpose:** 处理 `b wait for data` 相关逻辑。

### BNewDataAvailable
`public static bool BNewDataAvailable()`

**用途 / Purpose:** 处理 `b new data available` 相关逻辑。

### GetConnectedControllers
`public static int GetConnectedControllers(InputHandle_t handlesOut)`

**用途 / Purpose:** 获取 `connected controllers` 的当前值。

### EnableDeviceCallbacks
`public static void EnableDeviceCallbacks()`

**用途 / Purpose:** 处理 `enable device callbacks` 相关逻辑。

### EnableActionEventCallbacks
`public static void EnableActionEventCallbacks(SteamInputActionEventCallbackPointer pCallback)`

**用途 / Purpose:** 处理 `enable action event callbacks` 相关逻辑。

### GetActionSetHandle
`public static InputActionSetHandle_t GetActionSetHandle(string pszActionSetName)`

**用途 / Purpose:** 获取 `action set handle` 的当前值。

### ActivateActionSet
`public static void ActivateActionSet(InputHandle_t inputHandle, InputActionSetHandle_t actionSetHandle)`

**用途 / Purpose:** 处理 `activate action set` 相关逻辑。

### GetCurrentActionSet
`public static InputActionSetHandle_t GetCurrentActionSet(InputHandle_t inputHandle)`

**用途 / Purpose:** 获取 `current action set` 的当前值。

### ActivateActionSetLayer
`public static void ActivateActionSetLayer(InputHandle_t inputHandle, InputActionSetHandle_t actionSetLayerHandle)`

**用途 / Purpose:** 处理 `activate action set layer` 相关逻辑。

### DeactivateActionSetLayer
`public static void DeactivateActionSetLayer(InputHandle_t inputHandle, InputActionSetHandle_t actionSetLayerHandle)`

**用途 / Purpose:** 处理 `deactivate action set layer` 相关逻辑。

### DeactivateAllActionSetLayers
`public static void DeactivateAllActionSetLayers(InputHandle_t inputHandle)`

**用途 / Purpose:** 处理 `deactivate all action set layers` 相关逻辑。

### GetActiveActionSetLayers
`public static int GetActiveActionSetLayers(InputHandle_t inputHandle, InputActionSetHandle_t handlesOut)`

**用途 / Purpose:** 获取 `active action set layers` 的当前值。

### GetDigitalActionHandle
`public static InputDigitalActionHandle_t GetDigitalActionHandle(string pszActionName)`

**用途 / Purpose:** 获取 `digital action handle` 的当前值。

### GetDigitalActionData
`public static InputDigitalActionData_t GetDigitalActionData(InputHandle_t inputHandle, InputDigitalActionHandle_t digitalActionHandle)`

**用途 / Purpose:** 获取 `digital action data` 的当前值。

### GetDigitalActionOrigins
`public static int GetDigitalActionOrigins(InputHandle_t inputHandle, InputActionSetHandle_t actionSetHandle, InputDigitalActionHandle_t digitalActionHandle, EInputActionOrigin originsOut)`

**用途 / Purpose:** 获取 `digital action origins` 的当前值。

### GetStringForDigitalActionName
`public static string GetStringForDigitalActionName(InputDigitalActionHandle_t eActionHandle)`

**用途 / Purpose:** 获取 `string for digital action name` 的当前值。

### GetAnalogActionHandle
`public static InputAnalogActionHandle_t GetAnalogActionHandle(string pszActionName)`

**用途 / Purpose:** 获取 `analog action handle` 的当前值。

### GetAnalogActionData
`public static InputAnalogActionData_t GetAnalogActionData(InputHandle_t inputHandle, InputAnalogActionHandle_t analogActionHandle)`

**用途 / Purpose:** 获取 `analog action data` 的当前值。

### GetAnalogActionOrigins
`public static int GetAnalogActionOrigins(InputHandle_t inputHandle, InputActionSetHandle_t actionSetHandle, InputAnalogActionHandle_t analogActionHandle, EInputActionOrigin originsOut)`

**用途 / Purpose:** 获取 `analog action origins` 的当前值。

### GetGlyphPNGForActionOrigin
`public static string GetGlyphPNGForActionOrigin(EInputActionOrigin eOrigin, ESteamInputGlyphSize eSize, uint unFlags)`

**用途 / Purpose:** 获取 `glyph p n g for action origin` 的当前值。

### GetGlyphSVGForActionOrigin
`public static string GetGlyphSVGForActionOrigin(EInputActionOrigin eOrigin, uint unFlags)`

**用途 / Purpose:** 获取 `glyph s v g for action origin` 的当前值。

### GetGlyphForActionOrigin_Legacy
`public static string GetGlyphForActionOrigin_Legacy(EInputActionOrigin eOrigin)`

**用途 / Purpose:** 获取 `glyph for action origin_ legacy` 的当前值。

### GetStringForActionOrigin
`public static string GetStringForActionOrigin(EInputActionOrigin eOrigin)`

**用途 / Purpose:** 获取 `string for action origin` 的当前值。

### GetStringForAnalogActionName
`public static string GetStringForAnalogActionName(InputAnalogActionHandle_t eActionHandle)`

**用途 / Purpose:** 获取 `string for analog action name` 的当前值。

### StopAnalogActionMomentum
`public static void StopAnalogActionMomentum(InputHandle_t inputHandle, InputAnalogActionHandle_t eAction)`

**用途 / Purpose:** 处理 `stop analog action momentum` 相关逻辑。

### GetMotionData
`public static InputMotionData_t GetMotionData(InputHandle_t inputHandle)`

**用途 / Purpose:** 获取 `motion data` 的当前值。

### TriggerVibration
`public static void TriggerVibration(InputHandle_t inputHandle, ushort usLeftSpeed, ushort usRightSpeed)`

**用途 / Purpose:** 处理 `trigger vibration` 相关逻辑。

### TriggerVibrationExtended
`public static void TriggerVibrationExtended(InputHandle_t inputHandle, ushort usLeftSpeed, ushort usRightSpeed, ushort usLeftTriggerSpeed, ushort usRightTriggerSpeed)`

**用途 / Purpose:** 处理 `trigger vibration extended` 相关逻辑。

### TriggerSimpleHapticEvent
`public static void TriggerSimpleHapticEvent(InputHandle_t inputHandle, EControllerHapticLocation eHapticLocation, byte nIntensity, char nGainDB, byte nOtherIntensity, char nOtherGainDB)`

**用途 / Purpose:** 处理 `trigger simple haptic event` 相关逻辑。

### SetLEDColor
`public static void SetLEDColor(InputHandle_t inputHandle, byte nColorR, byte nColorG, byte nColorB, uint nFlags)`

**用途 / Purpose:** 设置 `l e d color` 的值或状态。

### Legacy_TriggerHapticPulse
`public static void Legacy_TriggerHapticPulse(InputHandle_t inputHandle, ESteamControllerPad eTargetPad, ushort usDurationMicroSec)`

**用途 / Purpose:** 处理 `legacy_ trigger haptic pulse` 相关逻辑。

### Legacy_TriggerRepeatedHapticPulse
`public static void Legacy_TriggerRepeatedHapticPulse(InputHandle_t inputHandle, ESteamControllerPad eTargetPad, ushort usDurationMicroSec, ushort usOffMicroSec, ushort unRepeat, uint nFlags)`

**用途 / Purpose:** 处理 `legacy_ trigger repeated haptic pulse` 相关逻辑。

### ShowBindingPanel
`public static bool ShowBindingPanel(InputHandle_t inputHandle)`

**用途 / Purpose:** 处理 `show binding panel` 相关逻辑。

### GetInputTypeForHandle
`public static ESteamInputType GetInputTypeForHandle(InputHandle_t inputHandle)`

**用途 / Purpose:** 获取 `input type for handle` 的当前值。

### GetControllerForGamepadIndex
`public static InputHandle_t GetControllerForGamepadIndex(int nIndex)`

**用途 / Purpose:** 获取 `controller for gamepad index` 的当前值。

### GetGamepadIndexForController
`public static int GetGamepadIndexForController(InputHandle_t ulinputHandle)`

**用途 / Purpose:** 获取 `gamepad index for controller` 的当前值。

### GetStringForXboxOrigin
`public static string GetStringForXboxOrigin(EXboxOrigin eOrigin)`

**用途 / Purpose:** 获取 `string for xbox origin` 的当前值。

### GetGlyphForXboxOrigin
`public static string GetGlyphForXboxOrigin(EXboxOrigin eOrigin)`

**用途 / Purpose:** 获取 `glyph for xbox origin` 的当前值。

### GetActionOriginFromXboxOrigin
`public static EInputActionOrigin GetActionOriginFromXboxOrigin(InputHandle_t inputHandle, EXboxOrigin eOrigin)`

**用途 / Purpose:** 获取 `action origin from xbox origin` 的当前值。

### TranslateActionOrigin
`public static EInputActionOrigin TranslateActionOrigin(ESteamInputType eDestinationInputType, EInputActionOrigin eSourceOrigin)`

**用途 / Purpose:** 处理 `translate action origin` 相关逻辑。

### GetDeviceBindingRevision
`public static bool GetDeviceBindingRevision(InputHandle_t inputHandle, out int pMajor, out int pMinor)`

**用途 / Purpose:** 获取 `device binding revision` 的当前值。

### GetRemotePlaySessionID
`public static uint GetRemotePlaySessionID(InputHandle_t inputHandle)`

**用途 / Purpose:** 获取 `remote play session i d` 的当前值。

### GetSessionInputConfigurationSettings
`public static ushort GetSessionInputConfigurationSettings()`

**用途 / Purpose:** 获取 `session input configuration settings` 的当前值。

## 使用示例

```csharp
SteamInput.Init(false);
```

## 参见

- [完整类目录](../catalog)