---
title: "GauntletGamepadNavigationManager"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GauntletGamepadNavigationManager`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GauntletGamepadNavigationManager

**Namespace:** TaleWorlds.GauntletUI.GamepadNavigation
**Module:** TaleWorlds.GauntletUI
**Type:** `public class GauntletGamepadNavigationManager`
**Base:** 无
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/GamepadNavigation/GauntletGamepadNavigationManager.cs`

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
| `AnyWidgetUsingNavigation` | `public bool AnyWidgetUsingNavigation { get; }` |

## 主要方法

### Initialize
`public static void Initialize()`

**用途 / Purpose:** 初始化 `initialize` 的状态、资源或绑定。

### TryNavigateTo
`public bool TryNavigateTo(Widget widget)`

**用途 / Purpose:** 尝试获取 `navigate to`，通常以 out 参数返回结果。

### TryNavigateTo
`public bool TryNavigateTo(GamepadNavigationScope scope)`

**用途 / Purpose:** 尝试获取 `navigate to`，通常以 out 参数返回结果。

### OnFinalize
`public void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

### Update
`public void Update(float dt)`

**用途 / Purpose:** 更新 `update` 的状态或数据。

### SetAllDirty
`public void SetAllDirty()`

**用途 / Purpose:** 设置 `all dirty` 的值或状态。

### Compare
`public int Compare(IGamepadNavigationContext x, IGamepadNavigationContext y)`

**用途 / Purpose:** 处理 `compare` 相关逻辑。

### Compare
`public int Compare(GamepadNavigationForcedScopeCollection x, GamepadNavigationForcedScopeCollection y)`

**用途 / Purpose:** 处理 `compare` 相关逻辑。

### GainNavigationAfterFrames
`public void GainNavigationAfterFrames(int frameCount, Func<bool> predicate = null)`

**用途 / Purpose:** 处理 `gain navigation after frames` 相关逻辑。

### GainNavigationAfterTime
`public void GainNavigationAfterTime(float seconds, Func<bool> predicate = null)`

**用途 / Purpose:** 处理 `gain navigation after time` 相关逻辑。

### Tick
`public void Tick(float dt)`

**用途 / Purpose:** 处理 `tick` 相关逻辑。

### Clear
`public void Clear()`

**用途 / Purpose:** 处理 `clear` 相关逻辑。

## 使用示例

```csharp
var manager = GauntletGamepadNavigationManager.Current;
```

## 参见

- [完整类目录](../catalog)