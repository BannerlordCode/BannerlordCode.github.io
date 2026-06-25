---
title: "ScreenManager"
description: "ScreenManager 的自动生成类参考。"
---
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

**用途 / Purpose:** 初始化当前对象所需的资源、状态或绑定。

```csharp
// 静态调用，不需要实例
ScreenManager.Initialize(engineInterface);
```

### RemoveGlobalLayer
`public static void RemoveGlobalLayer(GlobalLayer layer)`

**用途 / Purpose:** 从当前容器或状态中移除 「global layer」。

```csharp
// 静态调用，不需要实例
ScreenManager.RemoveGlobalLayer(layer);
```

### AddGlobalLayer
`public static void AddGlobalLayer(GlobalLayer layer, bool isFocusable)`

**用途 / Purpose:** 将 「global layer」 添加到当前容器或状态中。

```csharp
// 静态调用，不需要实例
ScreenManager.AddGlobalLayer(layer, false);
```

### OnConstrainStateChanged
`public static void OnConstrainStateChanged(bool isConstrained)`

**用途 / Purpose:** 在 「constrain state changed」 事件触发时调用此回调。

```csharp
// 静态调用，不需要实例
ScreenManager.OnConstrainStateChanged(false);
```

### ScreenTypeExistsAtList
`public static bool ScreenTypeExistsAtList(ScreenBase screen)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 静态调用，不需要实例
ScreenManager.ScreenTypeExistsAtList(screen);
```

### UpdateLayout
`public static void UpdateLayout()`

**用途 / Purpose:** 重新计算并更新 「layout」 的最新表示。

```csharp
// 静态调用，不需要实例
ScreenManager.UpdateLayout();
```

### SetSuspendLayer
`public static void SetSuspendLayer(ScreenLayer layer, bool isSuspended)`

**用途 / Purpose:** 为 「suspend layer」 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
ScreenManager.SetSuspendLayer(layer, false);
```

### OnFinalize
`public static void OnFinalize()`

**用途 / Purpose:** 在 「finalize」 事件触发时调用此回调。

```csharp
// 静态调用，不需要实例
ScreenManager.OnFinalize();
```

### Tick
`public static void Tick(float dt)`

**用途 / Purpose:** 推进当前对象一帧/一个更新周期的状态。

```csharp
// 静态调用，不需要实例
ScreenManager.Tick(0);
```

### LateTick
`public static void LateTick(float dt)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 静态调用，不需要实例
ScreenManager.LateTick(0);
```

### OnPlatformScreenKeyboardRequested
`public static bool OnPlatformScreenKeyboardRequested(string initialText, string descriptionText, int maxLength, int keyboardTypeEnum)`

**用途 / Purpose:** 在 「platform screen keyboard requested」 事件触发时调用此回调。

```csharp
// 静态调用，不需要实例
ScreenManager.OnPlatformScreenKeyboardRequested("example", "example", 0, 0);
```

### OnOnscreenKeyboardDone
`public static void OnOnscreenKeyboardDone(string inputText)`

**用途 / Purpose:** 在 「onscreen keyboard done」 事件触发时调用此回调。

```csharp
// 静态调用，不需要实例
ScreenManager.OnOnscreenKeyboardDone("example");
```

### OnOnscreenKeyboardCanceled
`public static void OnOnscreenKeyboardCanceled()`

**用途 / Purpose:** 在 「onscreen keyboard canceled」 事件触发时调用此回调。

```csharp
// 静态调用，不需要实例
ScreenManager.OnOnscreenKeyboardCanceled();
```

### OnGameWindowFocusChange
`public static void OnGameWindowFocusChange(bool focusGained)`

**用途 / Purpose:** 在 「game window focus change」 事件触发时调用此回调。

```csharp
// 静态调用，不需要实例
ScreenManager.OnGameWindowFocusChange(false);
```

### ReplaceTopScreen
`public static void ReplaceTopScreen(ScreenBase screen)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 静态调用，不需要实例
ScreenManager.ReplaceTopScreen(screen);
```

### GetPersistentInputRestrictions
`public static List<ScreenLayer> GetPersistentInputRestrictions()`

**用途 / Purpose:** 读取并返回当前对象中 「persistent input restrictions」 的结果。

```csharp
// 静态调用，不需要实例
ScreenManager.GetPersistentInputRestrictions();
```

### SetAndActivateRootScreen
`public static void SetAndActivateRootScreen(ScreenBase screen)`

**用途 / Purpose:** 为 「and activate root screen」 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
ScreenManager.SetAndActivateRootScreen(screen);
```

### CleanAndPushScreen
`public static void CleanAndPushScreen(ScreenBase screen)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 静态调用，不需要实例
ScreenManager.CleanAndPushScreen(screen);
```

### ClearSiegeMachineSelection
`public static string ClearSiegeMachineSelection(List<string> args)`

**用途 / Purpose:** 清空当前对象中的「siege machine selection」。

```csharp
// 静态调用，不需要实例
ScreenManager.ClearSiegeMachineSelection(args);
```

### CopyCustomBattle
`public static string CopyCustomBattle(List<string> args)`

**用途 / Purpose:** 把当前对象的「custom battle」状态复制到目标对象。

```csharp
// 静态调用，不需要实例
ScreenManager.CopyCustomBattle(args);
```

### ApplyCustomBattleLayout
`public static string ApplyCustomBattleLayout(List<string> args)`

**用途 / Purpose:** 将 「custom battle layout」 的效果应用到当前对象。

```csharp
// 静态调用，不需要实例
ScreenManager.ApplyCustomBattleLayout(args);
```

### PushScreen
`public static void PushScreen(ScreenBase screen)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 静态调用，不需要实例
ScreenManager.PushScreen(screen);
```

### PopScreen
`public static void PopScreen()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 静态调用，不需要实例
ScreenManager.PopScreen();
```

### CleanScreens
`public static void CleanScreens()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 静态调用，不需要实例
ScreenManager.CleanScreens();
```

### Update
`public static void Update(IReadOnlyList<int> lastKeysPressed)`

**用途 / Purpose:** 重新计算并更新当前对象的最新表示。

```csharp
// 静态调用，不需要实例
ScreenManager.Update(lastKeysPressed);
```

### EarlyUpdate
`public static void EarlyUpdate(Vec2 usableArea)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 静态调用，不需要实例
ScreenManager.EarlyUpdate(usableArea);
```

### IsControllerActive
`public static bool IsControllerActive()`

**用途 / Purpose:** 判断当前对象是否处于 「controller active」 状态或条件。

```csharp
// 静态调用，不需要实例
ScreenManager.IsControllerActive();
```

### IsMouseCursorHidden
`public static bool IsMouseCursorHidden()`

**用途 / Purpose:** 判断当前对象是否处于 「mouse cursor hidden」 状态或条件。

```csharp
// 静态调用，不需要实例
ScreenManager.IsMouseCursorHidden();
```

### IsMouseCursorActive
`public static bool IsMouseCursorActive()`

**用途 / Purpose:** 判断当前对象是否处于 「mouse cursor active」 状态或条件。

```csharp
// 静态调用，不需要实例
ScreenManager.IsMouseCursorActive();
```

### IsLayerBlockedAtPosition
`public static bool IsLayerBlockedAtPosition(ScreenLayer layer, Vector2 position)`

**用途 / Purpose:** 判断当前对象是否处于 「layer blocked at position」 状态或条件。

```csharp
// 静态调用，不需要实例
ScreenManager.IsLayerBlockedAtPosition(layer, position);
```

### GetMouseVisibility
`public static bool GetMouseVisibility()`

**用途 / Purpose:** 读取并返回当前对象中 「mouse visibility」 的结果。

```csharp
// 静态调用，不需要实例
ScreenManager.GetMouseVisibility();
```

### TrySetFocus
`public static void TrySetFocus(ScreenLayer layer)`

**用途 / Purpose:** 尝试获取 「set focus」 的值，通常通过 out 参数返回是否成功。

```csharp
// 静态调用，不需要实例
ScreenManager.TrySetFocus(layer);
```

### TryLoseFocus
`public static void TryLoseFocus(ScreenLayer layer)`

**用途 / Purpose:** 尝试获取 「lose focus」 的值，通常通过 out 参数返回是否成功。

```csharp
// 静态调用，不需要实例
ScreenManager.TryLoseFocus(layer);
```

### OnScaleChange
`public static void OnScaleChange(float newScale)`

**用途 / Purpose:** 在 「scale change」 事件触发时调用此回调。

```csharp
// 静态调用，不需要实例
ScreenManager.OnScaleChange(0);
```

### OnControllerDisconnect
`public static void OnControllerDisconnect()`

**用途 / Purpose:** 在 「controller disconnect」 事件触发时调用此回调。

```csharp
// 静态调用，不需要实例
ScreenManager.OnControllerDisconnect();
```

### SetScreenDebugInformationEnabled
`public static string SetScreenDebugInformationEnabled(List<string> args)`

**用途 / Purpose:** 为 「screen debug information enabled」 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
ScreenManager.SetScreenDebugInformationEnabled(args);
```

### SetScreenDebugInformationEnabled
`public static void SetScreenDebugInformationEnabled(bool isEnabled)`

**用途 / Purpose:** 为 「screen debug information enabled」 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
ScreenManager.SetScreenDebugInformationEnabled(false);
```

### OnPushScreenEvent
`public delegate void OnPushScreenEvent(ScreenBase pushedScreen)`

**用途 / Purpose:** 在 「push screen event」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 ScreenManager 实例
ScreenManager screenManager = ...;
screenManager.OnPushScreenEvent(pushedScreen);
```

### OnPopScreenEvent
`public delegate void OnPopScreenEvent(ScreenBase poppedScreen)`

**用途 / Purpose:** 在 「pop screen event」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 ScreenManager 实例
ScreenManager screenManager = ...;
screenManager.OnPopScreenEvent(poppedScreen);
```

### OnControllerDisconnectedEvent
`public delegate void OnControllerDisconnectedEvent()`

**用途 / Purpose:** 在 「controller disconnected event」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 ScreenManager 实例
ScreenManager screenManager = ...;
screenManager.OnControllerDisconnectedEvent();
```

### OnPlatformTextRequestedDelegate
`public delegate bool OnPlatformTextRequestedDelegate(string initialText, string descriptionText, int maxLength, int keyboardTypeEnum)`

**用途 / Purpose:** 在 「platform text requested delegate」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 ScreenManager 实例
ScreenManager screenManager = ...;
var result = screenManager.OnPlatformTextRequestedDelegate("example", "example", 0, 0);
```

## 使用示例

```csharp
var manager = ScreenManager.Current;
```

## 参见

- [本区域目录](../)