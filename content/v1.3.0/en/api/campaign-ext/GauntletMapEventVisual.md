---
title: "GauntletMapEventVisual"
description: "Auto-generated class reference for GauntletMapEventVisual."
---
# GauntletMapEventVisual

**Namespace:** SandBox.GauntletUI.Map
**Module:** SandBox.GauntletUI
**Type:** `public class GauntletMapEventVisual : IMapEventVisual`
**Base:** `IMapEventVisual`
**File:** `SandBox.GauntletUI/Map/GauntletMapEventVisual.cs`

## Overview

`GauntletMapEventVisual` lives in `SandBox.GauntletUI.Map` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.GauntletUI.Map` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `MapEvent` | `public MapEvent MapEvent { get; }` |
| `WorldPosition` | `public Vec2 WorldPosition { get; }` |
| `IsVisible` | `public bool IsVisible { get; }` |

## Key Methods

### Initialize
`public void Initialize(CampaignVec2 position, int battleSizeValue, bool isVisible)`

**Purpose:** Prepares the resources, state, or bindings the this instance needs before use.

```csharp
// Obtain an instance of GauntletMapEventVisual from the subsystem API first
GauntletMapEventVisual gauntletMapEventVisual = ...;
gauntletMapEventVisual.Initialize(position, 0, false);
```

### OnMapEventEnd
`public void OnMapEventEnd()`

**Purpose:** Invoked when the map event end event is raised.

```csharp
// Obtain an instance of GauntletMapEventVisual from the subsystem API first
GauntletMapEventVisual gauntletMapEventVisual = ...;
gauntletMapEventVisual.OnMapEventEnd();
```

### SetVisibility
`public void SetVisibility(bool isVisible)`

**Purpose:** Assigns a new value to visibility and updates the object's internal state.

```csharp
// Obtain an instance of GauntletMapEventVisual from the subsystem API first
GauntletMapEventVisual gauntletMapEventVisual = ...;
gauntletMapEventVisual.SetVisibility(false);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
GauntletMapEventVisual gauntletMapEventVisual = ...;
gauntletMapEventVisual.Initialize(position, 0, false);
```

## See Also

- [Area Index](../)