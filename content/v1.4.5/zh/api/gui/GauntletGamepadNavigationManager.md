---
title: "GauntletGamepadNavigationManager"
description: "GauntletGamepadNavigationManager 的自动生成类参考。"
---
# GauntletGamepadNavigationManager

**Namespace:** TaleWorlds.GauntletUI.GamepadNavigation
**Module:** TaleWorlds.GauntletUI
**Type:** `public class GauntletGamepadNavigationManager`
**Base:** 无
**File:** `bin/TaleWorlds.GauntletUI/TaleWorlds.GauntletUI.GamepadNavigation/GauntletGamepadNavigationManager.cs`

## 概述

`GauntletGamepadNavigationManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `GauntletGamepadNavigationManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `Instance` | `public static GauntletGamepadNavigationManager Instance { get; }` |
| `IsTouchpadMouseEnabled` | `public bool IsTouchpadMouseEnabled { get; }` |
| `IsFollowingMobileTarget` | `public bool IsFollowingMobileTarget { get; }` |
| `IsHoldingDpadKeysForNavigation` | `public bool IsHoldingDpadKeysForNavigation { get; }` |
| `IsCursorMovingForNavigation` | `public bool IsCursorMovingForNavigation { get; }` |
| `IsInWrapMovement` | `public bool IsInWrapMovement { get; }` |
| `LastTargetedWidget` | `public Widget LastTargetedWidget { get; }` |
| `TargetedWidgetHasAction` | `public bool TargetedWidgetHasAction { get; }` |

## 主要方法

### Compare
`public int Compare(IGamepadNavigationContext x, IGamepadNavigationContext y)`

**用途 / Purpose:** 将当前对象与另一实例比较大小/顺序。

```csharp
// 先通过子系统 API 拿到 GauntletGamepadNavigationManager 实例
GauntletGamepadNavigationManager gauntletGamepadNavigationManager = ...;
var result = gauntletGamepadNavigationManager.Compare(x, y);
```

### Compare
`public int Compare(GamepadNavigationForcedScopeCollection x, GamepadNavigationForcedScopeCollection y)`

**用途 / Purpose:** 将当前对象与另一实例比较大小/顺序。

```csharp
// 先通过子系统 API 拿到 GauntletGamepadNavigationManager 实例
GauntletGamepadNavigationManager gauntletGamepadNavigationManager = ...;
var result = gauntletGamepadNavigationManager.Compare(x, y);
```

### GainNavigationAfterFrames
`public void GainNavigationAfterFrames(int frameCount, Func<bool> predicate = null)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 GauntletGamepadNavigationManager 实例
GauntletGamepadNavigationManager gauntletGamepadNavigationManager = ...;
gauntletGamepadNavigationManager.GainNavigationAfterFrames(0, null);
```

### GainNavigationAfterTime
`public void GainNavigationAfterTime(float seconds, Func<bool> predicate = null)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 GauntletGamepadNavigationManager 实例
GauntletGamepadNavigationManager gauntletGamepadNavigationManager = ...;
gauntletGamepadNavigationManager.GainNavigationAfterTime(0, null);
```

### Tick
`public void Tick(float dt)`

**用途 / Purpose:** 推进当前对象一帧/一个更新周期的状态。

```csharp
// 先通过子系统 API 拿到 GauntletGamepadNavigationManager 实例
GauntletGamepadNavigationManager gauntletGamepadNavigationManager = ...;
gauntletGamepadNavigationManager.Tick(0);
```

### Clear
`public void Clear()`

**用途 / Purpose:** 清空当前对象中的内容。

```csharp
// 先通过子系统 API 拿到 GauntletGamepadNavigationManager 实例
GauntletGamepadNavigationManager gauntletGamepadNavigationManager = ...;
gauntletGamepadNavigationManager.Clear();
```

### Initialize
`public static void Initialize()`

**用途 / Purpose:** 初始化当前对象所需的资源、状态或绑定。

```csharp
// 静态调用，不需要实例
GauntletGamepadNavigationManager.Initialize();
```

### TryNavigateTo
`public bool TryNavigateTo(Widget widget)`

**用途 / Purpose:** 尝试获取 「navigate to」 的值，通常通过 out 参数返回是否成功。

```csharp
// 先通过子系统 API 拿到 GauntletGamepadNavigationManager 实例
GauntletGamepadNavigationManager gauntletGamepadNavigationManager = ...;
var result = gauntletGamepadNavigationManager.TryNavigateTo(widget);
```

### TryNavigateTo
`public bool TryNavigateTo(GamepadNavigationScope scope)`

**用途 / Purpose:** 尝试获取 「navigate to」 的值，通常通过 out 参数返回是否成功。

```csharp
// 先通过子系统 API 拿到 GauntletGamepadNavigationManager 实例
GauntletGamepadNavigationManager gauntletGamepadNavigationManager = ...;
var result = gauntletGamepadNavigationManager.TryNavigateTo(scope);
```

### OnFinalize
`public void OnFinalize()`

**用途 / Purpose:** 在 「finalize」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 GauntletGamepadNavigationManager 实例
GauntletGamepadNavigationManager gauntletGamepadNavigationManager = ...;
gauntletGamepadNavigationManager.OnFinalize();
```

### Update
`public void Update(float dt)`

**用途 / Purpose:** 重新计算并更新当前对象的最新表示。

```csharp
// 先通过子系统 API 拿到 GauntletGamepadNavigationManager 实例
GauntletGamepadNavigationManager gauntletGamepadNavigationManager = ...;
gauntletGamepadNavigationManager.Update(0);
```

### SetAllDirty
`public void SetAllDirty()`

**用途 / Purpose:** 为 「all dirty」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 GauntletGamepadNavigationManager 实例
GauntletGamepadNavigationManager gauntletGamepadNavigationManager = ...;
gauntletGamepadNavigationManager.SetAllDirty();
```

## 使用示例

```csharp
var manager = GauntletGamepadNavigationManager.Current;
```

## 参见

- [本区域目录](../)