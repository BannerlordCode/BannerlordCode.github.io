<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ScreenBase`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ScreenBase

**Namespace:** TaleWorlds.ScreenSystem
**Module:** TaleWorlds.ScreenSystem
**Type:** `public abstract class ScreenBase`
**Base:** none
**File:** `TaleWorlds.ScreenSystem/ScreenBase.cs`

## Overview

`ScreenBase` lives in `TaleWorlds.ScreenSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.ScreenSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `DebugInput` | `public IInputContext DebugInput { get; }` |
| `Layers` | `public MBReadOnlyList<ScreenLayer> Layers { get; }` |
| `IsActive` | `public bool IsActive { get; }` |
| `IsPaused` | `public bool IsPaused { get; }` |
| `IsInitialized` | `public bool IsInitialized { get; }` |
| `IsFinalized` | `public bool IsFinalized { get; }` |
| `MouseVisible` | `public virtual bool MouseVisible { get; set; }` |

## Key Methods

### ActivateAllLayers
`public void ActivateAllLayers()`

**Purpose:** Handles logic related to `activate all layers`.

### DeactivateAllLayers
`public void DeactivateAllLayers()`

**Purpose:** Handles logic related to `deactivate all layers`.

### Deactivate
`public void Deactivate()`

**Purpose:** Handles logic related to `deactivate`.

### Activate
`public void Activate()`

**Purpose:** Handles logic related to `activate`.

### UpdateLayout
`public virtual void UpdateLayout()`

**Purpose:** Updates the state or data of `layout`.

### OnFocusChangeOnGameWindow
`public virtual void OnFocusChangeOnGameWindow(bool focusGained)`

**Purpose:** Called when the `focus change on game window` event is raised.

### AddComponent
`public void AddComponent(ScreenComponent component)`

**Purpose:** Adds `component` to the current collection or state.

### AddLayer
`public void AddLayer(ScreenLayer layer)`

**Purpose:** Adds `layer` to the current collection or state.

### RemoveLayer
`public void RemoveLayer(ScreenLayer layer)`

**Purpose:** Removes `layer` from the current collection or state.

### HasLayer
`public bool HasLayer(ScreenLayer layer)`

**Purpose:** Checks whether the current object has/contains `layer`.

### SetLayerCategoriesState
`public void SetLayerCategoriesState(string categoryIds, bool isActive)`

**Purpose:** Sets the value or state of `layer categories state`.

### SetLayerCategoriesStateAndToggleOthers
`public void SetLayerCategoriesStateAndToggleOthers(string categoryIds, bool isActive)`

**Purpose:** Sets the value or state of `layer categories state and toggle others`.

### SetLayerCategoriesStateAndDeactivateOthers
`public void SetLayerCategoriesStateAndDeactivateOthers(string categoryIds, bool isActive)`

**Purpose:** Sets the value or state of `layer categories state and deactivate others`.

### OnLayerAddedEvent
`public delegate void OnLayerAddedEvent(ScreenLayer addedLayer)`

**Purpose:** Called when the `layer added event` event is raised.

### OnLayerRemovedEvent
`public delegate void OnLayerRemovedEvent(ScreenLayer removedLayer)`

**Purpose:** Called when the `layer removed event` event is raised.

## Usage Example

```csharp
var implementation = new CustomScreenBase();
```

## See Also

- [Complete Class Catalog](../catalog)