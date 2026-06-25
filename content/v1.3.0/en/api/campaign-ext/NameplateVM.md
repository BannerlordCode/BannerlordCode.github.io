---
title: "NameplateVM"
description: "Auto-generated class reference for NameplateVM."
---
# NameplateVM

**Namespace:** SandBox.ViewModelCollection.Nameplate
**Module:** SandBox.ViewModelCollection
**Type:** `public class NameplateVM : ViewModel`
**Base:** `ViewModel`
**File:** `SandBox.ViewModelCollection/Nameplate/NameplateVM.cs`

## Overview

`NameplateVM` lives in `SandBox.ViewModelCollection.Nameplate` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.ViewModelCollection.Nameplate` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Scale` | `public double Scale { get; set; }` |
| `NameplateOrder` | `public int NameplateOrder { get; set; }` |
| `SizeType` | `public int SizeType { get; set; }` |
| `FactionColor` | `public string FactionColor { get; set; }` |
| `DistanceToCamera` | `public float DistanceToCamera { get; set; }` |
| `IsVisibleOnMap` | `public bool IsVisibleOnMap { get; set; }` |
| `IsTargetedByTutorial` | `public bool IsTargetedByTutorial { get; set; }` |
| `Position` | `public Vec2 Position { get; set; }` |
| `CanParley` | `public bool CanParley { get; set; }` |

## Key Methods

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Invoked when the `finalize` event is raised.

```csharp
// Obtain an instance of NameplateVM from the subsystem API first
NameplateVM nameplateVM = ...;
nameplateVM.OnFinalize();
```

### Initialize
`public virtual void Initialize(GameEntity strategicEntity)`

**Purpose:** Prepares the resources, state, or bindings the current object needs before use.

```csharp
// Obtain an instance of NameplateVM from the subsystem API first
NameplateVM nameplateVM = ...;
nameplateVM.Initialize(strategicEntity);
```

### RefreshDynamicProperties
`public virtual void RefreshDynamicProperties(bool forceUpdate)`

**Purpose:** Keeps the display or cache of `dynamic properties` in sync with the underlying state.

```csharp
// Obtain an instance of NameplateVM from the subsystem API first
NameplateVM nameplateVM = ...;
nameplateVM.RefreshDynamicProperties(false);
```

### RefreshPosition
`public virtual void RefreshPosition()`

**Purpose:** Keeps the display or cache of `position` in sync with the underlying state.

```csharp
// Obtain an instance of NameplateVM from the subsystem API first
NameplateVM nameplateVM = ...;
nameplateVM.RefreshPosition();
```

### RefreshRelationStatus
`public virtual void RefreshRelationStatus()`

**Purpose:** Keeps the display or cache of `relation status` in sync with the underlying state.

```csharp
// Obtain an instance of NameplateVM from the subsystem API first
NameplateVM nameplateVM = ...;
nameplateVM.RefreshRelationStatus();
```

### RefreshTutorialStatus
`public virtual void RefreshTutorialStatus(string newTutorialHighlightElementID)`

**Purpose:** Keeps the display or cache of `tutorial status` in sync with the underlying state.

```csharp
// Obtain an instance of NameplateVM from the subsystem API first
NameplateVM nameplateVM = ...;
nameplateVM.RefreshTutorialStatus("example");
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
NameplateVM nameplateVM = ...;
nameplateVM.OnFinalize();
```

## See Also

- [Area Index](../)