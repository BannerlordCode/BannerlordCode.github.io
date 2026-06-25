---
title: "GauntletGamepadNavigationManager"
description: "Auto-generated class reference for GauntletGamepadNavigationManager."
---
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

**Purpose:** Prepares the resources, state, or bindings the current object needs before use.

```csharp
// Static call; no instance required
GauntletGamepadNavigationManager.Initialize();
```

### TryNavigateTo
`public bool TryNavigateTo(Widget widget)`

**Purpose:** Attempts to retrieve `navigate to`, usually returning success through an out parameter.

```csharp
// Obtain an instance of GauntletGamepadNavigationManager from the subsystem API first
GauntletGamepadNavigationManager gauntletGamepadNavigationManager = ...;
var result = gauntletGamepadNavigationManager.TryNavigateTo(widget);
```

### TryNavigateTo
`public bool TryNavigateTo(GamepadNavigationScope scope)`

**Purpose:** Attempts to retrieve `navigate to`, usually returning success through an out parameter.

```csharp
// Obtain an instance of GauntletGamepadNavigationManager from the subsystem API first
GauntletGamepadNavigationManager gauntletGamepadNavigationManager = ...;
var result = gauntletGamepadNavigationManager.TryNavigateTo(scope);
```

### OnFinalize
`public void OnFinalize()`

**Purpose:** Invoked when the `finalize` event is raised.

```csharp
// Obtain an instance of GauntletGamepadNavigationManager from the subsystem API first
GauntletGamepadNavigationManager gauntletGamepadNavigationManager = ...;
gauntletGamepadNavigationManager.OnFinalize();
```

### Update
`public void Update(float dt)`

**Purpose:** Recalculates and stores the latest representation of the current object.

```csharp
// Obtain an instance of GauntletGamepadNavigationManager from the subsystem API first
GauntletGamepadNavigationManager gauntletGamepadNavigationManager = ...;
gauntletGamepadNavigationManager.Update(0);
```

### SetAllDirty
`public void SetAllDirty()`

**Purpose:** Assigns a new value to `all dirty` and updates the object's internal state.

```csharp
// Obtain an instance of GauntletGamepadNavigationManager from the subsystem API first
GauntletGamepadNavigationManager gauntletGamepadNavigationManager = ...;
gauntletGamepadNavigationManager.SetAllDirty();
```

### Compare
`public int Compare(IGamepadNavigationContext x, IGamepadNavigationContext y)`

**Purpose:** Compares the current object with another instance for ordering.

```csharp
// Obtain an instance of GauntletGamepadNavigationManager from the subsystem API first
GauntletGamepadNavigationManager gauntletGamepadNavigationManager = ...;
var result = gauntletGamepadNavigationManager.Compare(x, y);
```

### Compare
`public int Compare(GamepadNavigationForcedScopeCollection x, GamepadNavigationForcedScopeCollection y)`

**Purpose:** Compares the current object with another instance for ordering.

```csharp
// Obtain an instance of GauntletGamepadNavigationManager from the subsystem API first
GauntletGamepadNavigationManager gauntletGamepadNavigationManager = ...;
var result = gauntletGamepadNavigationManager.Compare(x, y);
```

### GainNavigationAfterFrames
`public void GainNavigationAfterFrames(int frameCount, Func<bool> predicate = null)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of GauntletGamepadNavigationManager from the subsystem API first
GauntletGamepadNavigationManager gauntletGamepadNavigationManager = ...;
gauntletGamepadNavigationManager.GainNavigationAfterFrames(0, null);
```

### GainNavigationAfterTime
`public void GainNavigationAfterTime(float seconds, Func<bool> predicate = null)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of GauntletGamepadNavigationManager from the subsystem API first
GauntletGamepadNavigationManager gauntletGamepadNavigationManager = ...;
gauntletGamepadNavigationManager.GainNavigationAfterTime(0, null);
```

### Tick
`public void Tick(float dt)`

**Purpose:** Advances the current object's state by one frame or update cycle.

```csharp
// Obtain an instance of GauntletGamepadNavigationManager from the subsystem API first
GauntletGamepadNavigationManager gauntletGamepadNavigationManager = ...;
gauntletGamepadNavigationManager.Tick(0);
```

### Clear
`public void Clear()`

**Purpose:** Removes all content from the current object.

```csharp
// Obtain an instance of GauntletGamepadNavigationManager from the subsystem API first
GauntletGamepadNavigationManager gauntletGamepadNavigationManager = ...;
gauntletGamepadNavigationManager.Clear();
```

## Usage Example

```csharp
var manager = GauntletGamepadNavigationManager.Current;
```

## See Also

- [Area Index](../)