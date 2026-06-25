---
title: "GauntletMapEventVisualCreator"
description: "Auto-generated class reference for GauntletMapEventVisualCreator."
---
# GauntletMapEventVisualCreator

**Namespace:** SandBox.GauntletUI.Map
**Module:** SandBox.GauntletUI
**Type:** `public class GauntletMapEventVisualCreator : IMapEventVisualCreator`
**Base:** `IMapEventVisualCreator`
**File:** `SandBox.GauntletUI/Map/GauntletMapEventVisualCreator.cs`

## Overview

`GauntletMapEventVisualCreator` lives in `SandBox.GauntletUI.Map` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.GauntletUI.Map` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### CreateMapEventVisual
`public IMapEventVisual CreateMapEventVisual(MapEvent mapEvent)`

**Purpose:** Constructs a new `map event visual` entity and returns it to the caller.

```csharp
// Obtain an instance of GauntletMapEventVisualCreator from the subsystem API first
GauntletMapEventVisualCreator gauntletMapEventVisualCreator = ...;
var result = gauntletMapEventVisualCreator.CreateMapEventVisual(mapEvent);
```

### GetCurrentEvents
`public IEnumerable<GauntletMapEventVisual> GetCurrentEvents()`

**Purpose:** Reads and returns the `current events` value held by the current object.

```csharp
// Obtain an instance of GauntletMapEventVisualCreator from the subsystem API first
GauntletMapEventVisualCreator gauntletMapEventVisualCreator = ...;
var result = gauntletMapEventVisualCreator.GetCurrentEvents();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
GauntletMapEventVisualCreator gauntletMapEventVisualCreator = ...;
gauntletMapEventVisualCreator.CreateMapEventVisual(mapEvent);
```

## See Also

- [Area Index](../)