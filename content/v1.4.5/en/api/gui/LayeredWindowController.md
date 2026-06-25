---
title: "LayeredWindowController"
description: "Auto-generated class reference for LayeredWindowController."
---
# LayeredWindowController

**Namespace:** TaleWorlds.TwoDimension.Standalone
**Module:** TaleWorlds.TwoDimension
**Type:** `public class LayeredWindowController`
**Base:** none
**File:** `bin/TaleWorlds.TwoDimension.Standalone/TaleWorlds.TwoDimension.Standalone/LayeredWindowController.cs`

## Overview

`LayeredWindowController` is a controller whose job is less about storing data and more about driving the subsystem into its next state after receiving input.

## Mental Model

Treat `LayeredWindowController` as a Controller-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### SetSize
`public void SetSize(int width, int height)`

**Purpose:** Assigns a new value to `size` and updates the object's internal state.

```csharp
// Obtain an instance of LayeredWindowController from the subsystem API first
LayeredWindowController layeredWindowController = ...;
layeredWindowController.SetSize(0, 0);
```

### PostRender
`public void PostRender()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of LayeredWindowController from the subsystem API first
LayeredWindowController layeredWindowController = ...;
layeredWindowController.PostRender();
```

### OnFinalize
`public void OnFinalize()`

**Purpose:** Invoked when the `finalize` event is raised.

```csharp
// Obtain an instance of LayeredWindowController from the subsystem API first
LayeredWindowController layeredWindowController = ...;
layeredWindowController.OnFinalize();
```

## Usage Example

```csharp
var controller = Mission.Current.GetMissionBehavior<LayeredWindowController>();
```

## See Also

- [Area Index](../)