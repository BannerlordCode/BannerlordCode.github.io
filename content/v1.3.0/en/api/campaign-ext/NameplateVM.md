---
title: "NameplateVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `NameplateVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
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

**Purpose:** Called when the `finalize` event is raised.

### Initialize
`public virtual void Initialize(GameEntity strategicEntity)`

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

### RefreshDynamicProperties
`public virtual void RefreshDynamicProperties(bool forceUpdate)`

**Purpose:** Refreshes the display or cache of `dynamic properties`.

### RefreshPosition
`public virtual void RefreshPosition()`

**Purpose:** Refreshes the display or cache of `position`.

### RefreshRelationStatus
`public virtual void RefreshRelationStatus()`

**Purpose:** Refreshes the display or cache of `relation status`.

### RefreshTutorialStatus
`public virtual void RefreshTutorialStatus(string newTutorialHighlightElementID)`

**Purpose:** Refreshes the display or cache of `tutorial status`.

## Usage Example

```csharp
var value = new NameplateVM();
value.OnFinalize();
```

## See Also

- [Complete Class Catalog](../catalog)