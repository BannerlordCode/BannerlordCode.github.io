---
title: "MapEntityVisual"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MapEntityVisual`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MapEntityVisual

**Namespace:** SandBox.View.Map.Visuals
**Module:** SandBox.View
**Type:** `public abstract class MapEntityVisual`
**Base:** none
**File:** `SandBox.View/Map/Visuals/MapEntityVisual.cs`

## Overview

`MapEntityVisual` lives in `SandBox.View.Map.Visuals` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.View.Map.Visuals` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `MapScreen` | `public MapScreen MapScreen { get; }` |
| `InteractionPositionForPlayer` | `public abstract CampaignVec2 InteractionPositionForPlayer { get; }` |
| `AttachedTo` | `public abstract MapEntityVisual AttachedTo { get; set; }` |
| `IsMobileEntity` | `public virtual bool IsMobileEntity { get; set; }` |
| `CircleLocalFrame` | `public virtual MatrixFrame CircleLocalFrame { get; set; }` |
| `IsMainEntity` | `public virtual bool IsMainEntity { get; }` |
| `BearingRotation` | `public virtual float BearingRotation { get; }` |

## Key Methods

### OnMapClick
`public abstract bool OnMapClick(bool followModifierUsed)`

**Purpose:** Called when the `map click` event is raised.

### OnHover
`public abstract void OnHover()`

**Purpose:** Called when the `hover` event is raised.

### OnOpenEncyclopedia
`public abstract void OnOpenEncyclopedia()`

**Purpose:** Called when the `open encyclopedia` event is raised.

### IsVisibleOrFadingOut
`public abstract bool IsVisibleOrFadingOut()`

**Purpose:** Handles logic related to `is visible or fading out`.

### GetVisualPosition
`public abstract Vec3 GetVisualPosition()`

**Purpose:** Gets the current value of `visual position`.

### ReleaseResources
`public virtual void ReleaseResources()`

**Purpose:** Handles logic related to `release resources`.

### OnHoverEnd
`public virtual void OnHoverEnd()`

**Purpose:** Called when the `hover end` event is raised.

### OnTrackAction
`public virtual void OnTrackAction()`

**Purpose:** Called when the `track action` event is raised.

### IsEnemyOf
`public virtual bool IsEnemyOf(IFaction faction)`

**Purpose:** Handles logic related to `is enemy of`.

### IsAllyOf
`public virtual bool IsAllyOf(IFaction faction)`

**Purpose:** Handles logic related to `is ally of`.

## Usage Example

```csharp
var implementation = new CustomMapEntityVisual();
```

## See Also

- [Complete Class Catalog](../catalog)