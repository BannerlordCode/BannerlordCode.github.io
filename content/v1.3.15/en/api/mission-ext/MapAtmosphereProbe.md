---
title: "MapAtmosphereProbe"
description: "Auto-generated class reference for MapAtmosphereProbe."
---
# MapAtmosphereProbe

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MapAtmosphereProbe : ScriptComponentBehavior`
**Base:** `ScriptComponentBehavior`
**File:** `TaleWorlds.MountAndBlade/MapAtmosphereProbe.cs`

## Overview

`MapAtmosphereProbe` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetInfluenceAmount
`public float GetInfluenceAmount(Vec3 worldPosition)`

**Purpose:** Reads and returns the influence amount value held by the this instance.

```csharp
// Obtain an instance of MapAtmosphereProbe from the subsystem API first
MapAtmosphereProbe mapAtmosphereProbe = ...;
var result = mapAtmosphereProbe.GetInfluenceAmount(worldPosition);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MapAtmosphereProbe mapAtmosphereProbe = ...;
mapAtmosphereProbe.GetInfluenceAmount(worldPosition);
```

## See Also

- [Area Index](../)