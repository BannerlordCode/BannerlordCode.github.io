<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GauntletGamepadNavigationManager`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GauntletGamepadNavigationManager

**Namespace:** TaleWorlds.GauntletUI.GamepadNavigation
**Module:** TaleWorlds.GauntletUI
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `GauntletGamepadNavigationManager` is a class in the `TaleWorlds.GauntletUI.GamepadNavigation` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

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


## Key Methods

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

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)