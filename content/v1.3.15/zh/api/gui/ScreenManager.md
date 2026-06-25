---
title: "ScreenManager"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ScreenManager`
- [← 本领域 / 返回 gui](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ScreenManager

**Namespace:** TaleWorlds.ScreenSystem
**Module:** TaleWorlds.ScreenSystem
**Type:** `public static class ScreenManager`
**Base:** 无
**File:** `TaleWorlds.ScreenSystem/ScreenManager.cs`

## 概述

`ScreenManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `ScreenManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `EngineInterface` | `public static IScreenManagerEngineConnection EngineInterface { get; }` |
| `Scale` | `public static float Scale { get; }` |
| `UsableArea` | `public static Vec2 UsableArea { get; }` |
| `IsEnterButtonRDown` | `public static bool IsEnterButtonRDown { get; }` |
| `IsLateTickInProgress` | `public static bool IsLateTickInProgress { get; }` |
| `SortedLayers` | `public static List<ScreenLayer> SortedLayers { get; }` |
| `TopScreen` | `public static ScreenBase TopScreen { get; }` |
| `FocusedLayer` | `public static ScreenLayer FocusedLayer { get; }` |
| `FirstHitLayer` | `public static ScreenLayer FirstHitLayer { get; }` |
| `IsWindowFocused` | `public static bool IsWindowFocused { get; }` |

## 主要方法

### Initialize
`public static void Initialize(IScreenManagerEngineConnection engineInterface)`

**用途 / Purpose:** 初始化 `initialize` 的状态、资源或绑定。

### RemoveGlobalLayer
`public static void RemoveGlobalLayer(GlobalLayer layer)`

**用途 / Purpose:** 从当前集合/状态中移除 `global layer`。

### AddGlobalLayer
`public static void AddGlobalLayer(GlobalLayer layer, bool isFocusable)`

**用途 / Purpose:** 向当前集合/状态中添加 `global layer`。

### OnConstrainStateChanged
`public static void OnConstrainStateChanged(bool isConstrained)`

**用途 / Purpose:** 当 `constrain state changed` 事件触发时调用此方法。

### ScreenTypeExistsAtList
`public static bool ScreenTypeExistsAtList(ScreenBase screen)`

**用途 / Purpose:** 处理 `screen type exists at list` 相关逻辑。

### UpdateLayout
`public static void UpdateLayout()`

**用途 / Purpose:** 更新 `layout` 的状态或数据。

### SetSuspendLayer
`public static void SetSuspendLayer(ScreenLayer layer, bool isSuspended)`

**用途 / Purpose:** 设置 `suspend layer` 的值或状态。

### OnFinalize
`public static void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

### Tick
`public static void Tick(float dt)`

**用途 / Purpose:** 处理 `tick` 相关逻辑。

### LateTick
`public static void LateTick(float dt)`

**用途 / Purpose:** 处理 `late tick` 相关逻辑。

### OnPlatformScreenKeyboardRequested
`public static bool OnPlatformScreenKeyboardRequested(string initialText, string descriptionText, int maxLength, int keyboardTypeEnum)`

**用途 / Purpose:** 当 `platform screen keyboard requested` 事件触发时调用此方法。

### OnOnscreenKeyboardDone
`public static void OnOnscreenKeyboardDone(string inputText)`

**用途 / Purpose:** 当 `onscreen keyboard done` 事件触发时调用此方法。

### OnOnscreenKeyboardCanceled
`public static void OnOnscreenKeyboardCanceled()`

**用途 / Purpose:** 当 `onscreen keyboard canceled` 事件触发时调用此方法。

### OnGameWindowFocusChange
`public static void OnGameWindowFocusChange(bool focusGained)`

**用途 / Purpose:** 当 `game window focus change` 事件触发时调用此方法。

### ReplaceTopScreen
`public static void ReplaceTopScreen(ScreenBase screen)`

**用途 / Purpose:** 处理 `replace top screen` 相关逻辑。

### GetPersistentInputRestrictions
`public static List<ScreenLayer> GetPersistentInputRestrictions()`

**用途 / Purpose:** 获取 `persistent input restrictions` 的当前值。

### SetAndActivateRootScreen
`public static void SetAndActivateRootScreen(ScreenBase screen)`

**用途 / Purpose:** 设置 `and activate root screen` 的值或状态。

### CleanAndPushScreen
`public static void CleanAndPushScreen(ScreenBase screen)`

**用途 / Purpose:** 处理 `clean and push screen` 相关逻辑。

### ClearSiegeMachineSelection
`public static string ClearSiegeMachineSelection(List<string> args)`

**用途 / Purpose:** 处理 `clear siege machine selection` 相关逻辑。

### CopyCustomBattle
`public static string CopyCustomBattle(List<string> args)`

**用途 / Purpose:** 处理 `copy custom battle` 相关逻辑。

### ApplyCustomBattleLayout
`public static string ApplyCustomBattleLayout(List<string> args)`

**用途 / Purpose:** 将 `custom battle layout` 应用到当前对象。

### PushScreen
`public static void PushScreen(ScreenBase screen)`

**用途 / Purpose:** 处理 `push screen` 相关逻辑。

### PopScreen
`public static void PopScreen()`

**用途 / Purpose:** 处理 `pop screen` 相关逻辑。

### CleanScreens
`public static void CleanScreens()`

**用途 / Purpose:** 处理 `clean screens` 相关逻辑。

### Update
`public static void Update(IReadOnlyList<int> lastKeysPressed)`

**用途 / Purpose:** 更新 `update` 的状态或数据。

### EarlyUpdate
`public static void EarlyUpdate(Vec2 usableArea)`

**用途 / Purpose:** 处理 `early update` 相关逻辑。

### IsControllerActive
`public static bool IsControllerActive()`

**用途 / Purpose:** 处理 `is controller active` 相关逻辑。

### IsMouseCursorHidden
`public static bool IsMouseCursorHidden()`

**用途 / Purpose:** 处理 `is mouse cursor hidden` 相关逻辑。

### IsMouseCursorActive
`public static bool IsMouseCursorActive()`

**用途 / Purpose:** 处理 `is mouse cursor active` 相关逻辑。

### IsLayerBlockedAtPosition
`public static bool IsLayerBlockedAtPosition(ScreenLayer layer, Vector2 position)`

**用途 / Purpose:** 处理 `is layer blocked at position` 相关逻辑。

### GetMouseVisibility
`public static bool GetMouseVisibility()`

**用途 / Purpose:** 获取 `mouse visibility` 的当前值。

### TrySetFocus
`public static void TrySetFocus(ScreenLayer layer)`

**用途 / Purpose:** 尝试获取 `set focus`，通常以 out 参数返回结果。

### TryLoseFocus
`public static void TryLoseFocus(ScreenLayer layer)`

**用途 / Purpose:** 尝试获取 `lose focus`，通常以 out 参数返回结果。

### OnScaleChange
`public static void OnScaleChange(float newScale)`

**用途 / Purpose:** 当 `scale change` 事件触发时调用此方法。

### OnControllerDisconnect
`public static void OnControllerDisconnect()`

**用途 / Purpose:** 当 `controller disconnect` 事件触发时调用此方法。

### SetScreenDebugInformationEnabled
`public static string SetScreenDebugInformationEnabled(List<string> args)`

**用途 / Purpose:** 设置 `screen debug information enabled` 的值或状态。

### SetScreenDebugInformationEnabled
`public static void SetScreenDebugInformationEnabled(bool isEnabled)`

**用途 / Purpose:** 设置 `screen debug information enabled` 的值或状态。

### OnPushScreenEvent
`public delegate void OnPushScreenEvent(ScreenBase pushedScreen)`

**用途 / Purpose:** 当 `push screen event` 事件触发时调用此方法。

### OnPopScreenEvent
`public delegate void OnPopScreenEvent(ScreenBase poppedScreen)`

**用途 / Purpose:** 当 `pop screen event` 事件触发时调用此方法。

### OnControllerDisconnectedEvent
`public delegate void OnControllerDisconnectedEvent()`

**用途 / Purpose:** 当 `controller disconnected event` 事件触发时调用此方法。

### OnPlatformTextRequestedDelegate
`public delegate bool OnPlatformTextRequestedDelegate(string initialText, string descriptionText, int maxLength, int keyboardTypeEnum)`

**用途 / Purpose:** 当 `platform text requested delegate` 事件触发时调用此方法。

## 使用示例

```csharp
var manager = ScreenManager.Current;
```

## 参见

- [完整类目录](../catalog)