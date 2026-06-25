---
title: "GauntletGamepadNavigationManager"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GauntletGamepadNavigationManager`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GauntletGamepadNavigationManager

**Namespace:** TaleWorlds.GauntletUI.GamepadNavigation
**Module:** TaleWorlds.GauntletUI
**Type:** `public class GauntletGamepadNavigationManager`
**Base:** none
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/GamepadNavigation/GauntletGamepadNavigationManager.cs`

## Overview

`GauntletGamepadNavigationManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `GauntletGamepadNavigationManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

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
`public static void Initialize()`

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

### TryNavigateTo
`public bool TryNavigateTo(Widget widget)`

**Purpose:** Attempts to get `navigate to`, usually returning the result in an out parameter.

### TryNavigateTo
`public bool TryNavigateTo(GamepadNavigationScope scope)`

**Purpose:** Attempts to get `navigate to`, usually returning the result in an out parameter.

### OnFinalize
`public void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

### Update
`public void Update(float dt)`

**Purpose:** Updates the state or data of `update`.

### SetAllDirty
`public void SetAllDirty()`

**Purpose:** Sets the value or state of `all dirty`.

### Compare
`public int Compare(IGamepadNavigationContext x, IGamepadNavigationContext y)`

**Purpose:** Handles logic related to `compare`.

### Compare
`public int Compare(GamepadNavigationForcedScopeCollection x, GamepadNavigationForcedScopeCollection y)`

**Purpose:** Handles logic related to `compare`.

### GainNavigationAfterFrames
`public void GainNavigationAfterFrames(int frameCount, Func<bool> predicate = null)`

**Purpose:** Handles logic related to `gain navigation after frames`.

### GainNavigationAfterTime
`public void GainNavigationAfterTime(float seconds, Func<bool> predicate = null)`

**Purpose:** Handles logic related to `gain navigation after time`.

### Tick
`public void Tick(float dt)`

**Purpose:** Handles logic related to `tick`.

### Clear
`public void Clear()`

**Purpose:** Handles logic related to `clear`.

## Usage Example

```csharp
var manager = GauntletGamepadNavigationManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)