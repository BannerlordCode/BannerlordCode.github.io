---
title: "MapEntityVisual"
description: "Auto-generated class reference for MapEntityVisual."
---
# MapEntityVisual

**Namespace:** SandBox.View.Map.Visuals
**Module:** SandBox.View
**Type:** `public abstract class MapEntityVisual`
**Base:** none
**File:** `Modules.SandBox/SandBox.View/SandBox.View.Map.Visuals/MapEntityVisual.cs`

## Overview

`MapEntityVisual` lives in `SandBox.View.Map.Visuals` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.View.Map.Visuals` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `InteractionPositionForPlayer` | `public abstract CampaignVec2 InteractionPositionForPlayer { get; }` |
| `AttachedTo` | `public abstract MapEntityVisual AttachedTo { get; set; }` |
| `CircleLocalFrame` | `public virtual MatrixFrame CircleLocalFrame { get; set; }` |
| `BearingRotation` | `public virtual float BearingRotation { get; }` |

## Key Methods

### OnMapClick
`public abstract bool OnMapClick(bool followModifierUsed)`

**Purpose:** Invoked when the `map click` event is raised.

```csharp
// Obtain an instance of MapEntityVisual from the subsystem API first
MapEntityVisual mapEntityVisual = ...;
var result = mapEntityVisual.OnMapClick(false);
```

### OnHover
`public abstract void OnHover()`

**Purpose:** Invoked when the `hover` event is raised.

```csharp
// Obtain an instance of MapEntityVisual from the subsystem API first
MapEntityVisual mapEntityVisual = ...;
mapEntityVisual.OnHover();
```

### OnOpenEncyclopedia
`public abstract void OnOpenEncyclopedia()`

**Purpose:** Invoked when the `open encyclopedia` event is raised.

```csharp
// Obtain an instance of MapEntityVisual from the subsystem API first
MapEntityVisual mapEntityVisual = ...;
mapEntityVisual.OnOpenEncyclopedia();
```

### IsVisibleOrFadingOut
`public abstract bool IsVisibleOrFadingOut()`

**Purpose:** Determines whether the current object is in the `visible or fading out` state or condition.

```csharp
// Obtain an instance of MapEntityVisual from the subsystem API first
MapEntityVisual mapEntityVisual = ...;
var result = mapEntityVisual.IsVisibleOrFadingOut();
```

### GetVisualPosition
`public abstract Vec3 GetVisualPosition()`

**Purpose:** Reads and returns the `visual position` value held by the current object.

```csharp
// Obtain an instance of MapEntityVisual from the subsystem API first
MapEntityVisual mapEntityVisual = ...;
var result = mapEntityVisual.GetVisualPosition();
```

### ReleaseResources
`public virtual void ReleaseResources()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MapEntityVisual from the subsystem API first
MapEntityVisual mapEntityVisual = ...;
mapEntityVisual.ReleaseResources();
```

### OnHoverEnd
`public virtual void OnHoverEnd()`

**Purpose:** Invoked when the `hover end` event is raised.

```csharp
// Obtain an instance of MapEntityVisual from the subsystem API first
MapEntityVisual mapEntityVisual = ...;
mapEntityVisual.OnHoverEnd();
```

### OnTrackAction
`public virtual void OnTrackAction()`

**Purpose:** Invoked when the `track action` event is raised.

```csharp
// Obtain an instance of MapEntityVisual from the subsystem API first
MapEntityVisual mapEntityVisual = ...;
mapEntityVisual.OnTrackAction();
```

### IsEnemyOf
`public virtual bool IsEnemyOf(IFaction faction)`

**Purpose:** Determines whether the current object is in the `enemy of` state or condition.

```csharp
// Obtain an instance of MapEntityVisual from the subsystem API first
MapEntityVisual mapEntityVisual = ...;
var result = mapEntityVisual.IsEnemyOf(faction);
```

### IsAllyOf
`public virtual bool IsAllyOf(IFaction faction)`

**Purpose:** Determines whether the current object is in the `ally of` state or condition.

```csharp
// Obtain an instance of MapEntityVisual from the subsystem API first
MapEntityVisual mapEntityVisual = ...;
var result = mapEntityVisual.IsAllyOf(faction);
```

### IsInSameFaction
`public virtual bool IsInSameFaction(IFaction faction)`

**Purpose:** Determines whether the current object is in the `in same faction` state or condition.

```csharp
// Obtain an instance of MapEntityVisual from the subsystem API first
MapEntityVisual mapEntityVisual = ...;
var result = mapEntityVisual.IsInSameFaction(faction);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
MapEntityVisual instance = ...;
```

## See Also

- [Area Index](../)