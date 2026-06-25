---
title: "ScrollbarInterpolationController"
description: "Auto-generated class reference for ScrollbarInterpolationController."
---
# ScrollbarInterpolationController

**Namespace:** TaleWorlds.GauntletUI.BaseTypes
**Module:** TaleWorlds.GauntletUI
**Type:** `class ScrollbarInterpolationController`
**Base:** none
**File:** `bin/TaleWorlds.GauntletUI/TaleWorlds.GauntletUI.BaseTypes/ScrollablePanel.cs`

## Overview

`ScrollbarInterpolationController` is a controller whose job is less about storing data and more about driving the subsystem into its next state after receiving input.

## Mental Model

Treat `ScrollbarInterpolationController` as a Controller-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### SetControlledScrollbar
`public void SetControlledScrollbar(ScrollbarWidget scrollbar)`

**Purpose:** Assigns a new value to `controlled scrollbar` and updates the object's internal state.

```csharp
// Obtain an instance of ScrollbarInterpolationController from the subsystem API first
ScrollbarInterpolationController scrollbarInterpolationController = ...;
scrollbarInterpolationController.SetControlledScrollbar(scrollbar);
```

### StartInterpolation
`public void StartInterpolation(float targetValue, float duration)`

**Purpose:** Starts the `interpolation` flow or state machine.

```csharp
// Obtain an instance of ScrollbarInterpolationController from the subsystem API first
ScrollbarInterpolationController scrollbarInterpolationController = ...;
scrollbarInterpolationController.StartInterpolation(0, 0);
```

### StopInterpolation
`public void StopInterpolation()`

**Purpose:** Stops the `interpolation` flow or state machine.

```csharp
// Obtain an instance of ScrollbarInterpolationController from the subsystem API first
ScrollbarInterpolationController scrollbarInterpolationController = ...;
scrollbarInterpolationController.StopInterpolation();
```

### GetValue
`public float GetValue()`

**Purpose:** Reads and returns the `value` value held by the current object.

```csharp
// Obtain an instance of ScrollbarInterpolationController from the subsystem API first
ScrollbarInterpolationController scrollbarInterpolationController = ...;
var result = scrollbarInterpolationController.GetValue();
```

### Tick
`public void Tick(float dt)`

**Purpose:** Advances the current object's state by one frame or update cycle.

```csharp
// Obtain an instance of ScrollbarInterpolationController from the subsystem API first
ScrollbarInterpolationController scrollbarInterpolationController = ...;
scrollbarInterpolationController.Tick(0);
```

## Usage Example

```csharp
var controller = Mission.Current.GetMissionBehavior<ScrollbarInterpolationController>();
```

## See Also

- [Area Index](../)