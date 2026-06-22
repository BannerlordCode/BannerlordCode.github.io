<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GauntletGamepadNavigationManager`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GauntletGamepadNavigationManager

**命名空间:** TaleWorlds.GauntletUI.GamepadNavigation
**模块:** TaleWorlds.GauntletUI
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`GauntletGamepadNavigationManager` 是 `TaleWorlds.GauntletUI.GamepadNavigation` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
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

```csharp
public static void Initialize()
```

### TryNavigateTo

```csharp
public bool TryNavigateTo(Widget widget)
```

### TryNavigateTo

```csharp
public bool TryNavigateTo(GamepadNavigationScope scope)
```

### OnFinalize

```csharp
public void OnFinalize()
```

### Update

```csharp
public void Update(float dt)
```

### SetAllDirty

```csharp
public void SetAllDirty()
```

### Compare

```csharp
public int Compare(IGamepadNavigationContext x, IGamepadNavigationContext y)
```

### Compare

```csharp
public int Compare(GamepadNavigationForcedScopeCollection x, GamepadNavigationForcedScopeCollection y)
```

### GainNavigationAfterFrames

```csharp
public void GainNavigationAfterFrames(int frameCount, Func<bool> predicate = null)
```

### GainNavigationAfterTime

```csharp
public void GainNavigationAfterTime(float seconds, Func<bool> predicate = null)
```

### Tick

```csharp
public void Tick(float dt)
```

### Clear

```csharp
public void Clear()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)