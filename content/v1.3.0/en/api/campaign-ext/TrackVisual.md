---
title: "TrackVisual"
description: "Auto-generated class reference for TrackVisual."
---
# TrackVisual

**Namespace:** SandBox.View.Map.Visuals
**Module:** SandBox.View
**Type:** `public class TrackVisual : MapEntityVisual<Track>`
**Base:** `MapEntityVisual<Track>`
**File:** `SandBox.View/Map/Visuals/TrackVisual.cs`

## Overview

`TrackVisual` lives in `SandBox.View.Map.Visuals` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.View.Map.Visuals` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `InteractionPositionForPlayer` | `public override CampaignVec2 InteractionPositionForPlayer { get; }` |
| `AttachedTo` | `public override MapEntityVisual AttachedTo { get; }` |

## Key Methods

### GetVisualPosition
`public override Vec3 GetVisualPosition()`

**Purpose:** Reads and returns the visual position value held by the this instance.

```csharp
// Obtain an instance of TrackVisual from the subsystem API first
TrackVisual trackVisual = ...;
var result = trackVisual.GetVisualPosition();
```

### IsVisibleOrFadingOut
`public override bool IsVisibleOrFadingOut()`

**Purpose:** Determines whether the this instance is in the visible or fading out state or condition.

```csharp
// Obtain an instance of TrackVisual from the subsystem API first
TrackVisual trackVisual = ...;
var result = trackVisual.IsVisibleOrFadingOut();
```

### OnHover
`public override void OnHover()`

**Purpose:** Invoked when the hover event is raised.

```csharp
// Obtain an instance of TrackVisual from the subsystem API first
TrackVisual trackVisual = ...;
trackVisual.OnHover();
```

### OnMapClick
`public override bool OnMapClick(bool followModifierUsed)`

**Purpose:** Invoked when the map click event is raised.

```csharp
// Obtain an instance of TrackVisual from the subsystem API first
TrackVisual trackVisual = ...;
var result = trackVisual.OnMapClick(false);
```

### OnOpenEncyclopedia
`public override void OnOpenEncyclopedia()`

**Purpose:** Invoked when the open encyclopedia event is raised.

```csharp
// Obtain an instance of TrackVisual from the subsystem API first
TrackVisual trackVisual = ...;
trackVisual.OnOpenEncyclopedia();
```

### ReleaseResources
`public override void ReleaseResources()`

**Purpose:** Executes the ReleaseResources logic.

```csharp
// Obtain an instance of TrackVisual from the subsystem API first
TrackVisual trackVisual = ...;
trackVisual.ReleaseResources();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
TrackVisual trackVisual = ...;
trackVisual.GetVisualPosition();
```

## See Also

- [Area Index](../)