---
title: "ScreenBase"
description: "Auto-generated class reference for ScreenBase."
---
# ScreenBase

**Namespace:** TaleWorlds.ScreenSystem
**Module:** TaleWorlds.ScreenSystem
**Type:** `public abstract class ScreenBase`
**Base:** none
**File:** `bin/TaleWorlds.ScreenSystem/TaleWorlds.ScreenSystem/ScreenBase.cs`

## Overview

`ScreenBase` lives in `TaleWorlds.ScreenSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.ScreenSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsActive` | `public bool IsActive { get; }` |
| `IsPaused` | `public bool IsPaused { get; }` |
| `IsInitialized` | `public bool IsInitialized { get; }` |
| `IsFinalized` | `public bool IsFinalized { get; }` |
| `MouseVisible` | `public virtual bool MouseVisible { get; set; }` |

## Key Methods

### OnLayerAddedEvent
`public delegate void OnLayerAddedEvent(ScreenLayer addedLayer)`

**Purpose:** Invoked when the layer added event event is raised.

```csharp
// Obtain an instance of ScreenBase from the subsystem API first
ScreenBase screenBase = ...;
screenBase.OnLayerAddedEvent(addedLayer);
```

### OnLayerRemovedEvent
`public delegate void OnLayerRemovedEvent(ScreenLayer removedLayer)`

**Purpose:** Invoked when the layer removed event event is raised.

```csharp
// Obtain an instance of ScreenBase from the subsystem API first
ScreenBase screenBase = ...;
screenBase.OnLayerRemovedEvent(removedLayer);
```

### ActivateAllLayers
`public void ActivateAllLayers()`

**Purpose:** Activates the resource, state, or feature associated with all layers.

```csharp
// Obtain an instance of ScreenBase from the subsystem API first
ScreenBase screenBase = ...;
screenBase.ActivateAllLayers();
```

### DeactivateAllLayers
`public void DeactivateAllLayers()`

**Purpose:** Deactivates the resource, state, or feature associated with all layers.

```csharp
// Obtain an instance of ScreenBase from the subsystem API first
ScreenBase screenBase = ...;
screenBase.DeactivateAllLayers();
```

### Deactivate
`public void Deactivate()`

**Purpose:** Deactivates the resource, state, or feature represented by the this instance.

```csharp
// Obtain an instance of ScreenBase from the subsystem API first
ScreenBase screenBase = ...;
screenBase.Deactivate();
```

### Activate
`public void Activate()`

**Purpose:** Activates the resource, state, or feature represented by the this instance.

```csharp
// Obtain an instance of ScreenBase from the subsystem API first
ScreenBase screenBase = ...;
screenBase.Activate();
```

### UpdateLayout
`public virtual void UpdateLayout()`

**Purpose:** Recalculates and stores the latest representation of layout.

```csharp
// Obtain an instance of ScreenBase from the subsystem API first
ScreenBase screenBase = ...;
screenBase.UpdateLayout();
```

### OnFocusChangeOnGameWindow
`public virtual void OnFocusChangeOnGameWindow(bool focusGained)`

**Purpose:** Invoked when the focus change on game window event is raised.

```csharp
// Obtain an instance of ScreenBase from the subsystem API first
ScreenBase screenBase = ...;
screenBase.OnFocusChangeOnGameWindow(false);
```

### AddComponent
`public void AddComponent(ScreenComponent component)`

**Purpose:** Adds component to the current collection or state.

```csharp
// Obtain an instance of ScreenBase from the subsystem API first
ScreenBase screenBase = ...;
screenBase.AddComponent(component);
```

### AddLayer
`public void AddLayer(ScreenLayer layer)`

**Purpose:** Adds layer to the current collection or state.

```csharp
// Obtain an instance of ScreenBase from the subsystem API first
ScreenBase screenBase = ...;
screenBase.AddLayer(layer);
```

### RemoveLayer
`public void RemoveLayer(ScreenLayer layer)`

**Purpose:** Removes layer from the current collection or state.

```csharp
// Obtain an instance of ScreenBase from the subsystem API first
ScreenBase screenBase = ...;
screenBase.RemoveLayer(layer);
```

### HasLayer
`public bool HasLayer(ScreenLayer layer)`

**Purpose:** Determines whether the this instance already holds layer.

```csharp
// Obtain an instance of ScreenBase from the subsystem API first
ScreenBase screenBase = ...;
var result = screenBase.HasLayer(layer);
```

### SetLayerCategoriesState
`public void SetLayerCategoriesState(string categoryIds, bool isActive)`

**Purpose:** Assigns a new value to layer categories state and updates the object's internal state.

```csharp
// Obtain an instance of ScreenBase from the subsystem API first
ScreenBase screenBase = ...;
screenBase.SetLayerCategoriesState("example", false);
```

### SetLayerCategoriesStateAndToggleOthers
`public void SetLayerCategoriesStateAndToggleOthers(string categoryIds, bool isActive)`

**Purpose:** Assigns a new value to layer categories state and toggle others and updates the object's internal state.

```csharp
// Obtain an instance of ScreenBase from the subsystem API first
ScreenBase screenBase = ...;
screenBase.SetLayerCategoriesStateAndToggleOthers("example", false);
```

### SetLayerCategoriesStateAndDeactivateOthers
`public void SetLayerCategoriesStateAndDeactivateOthers(string categoryIds, bool isActive)`

**Purpose:** Assigns a new value to layer categories state and deactivate others and updates the object's internal state.

```csharp
// Obtain an instance of ScreenBase from the subsystem API first
ScreenBase screenBase = ...;
screenBase.SetLayerCategoriesStateAndDeactivateOthers("example", false);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
ScreenBase instance = ...;
```

## See Also

- [Area Index](../)