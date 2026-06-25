---
title: "AtmosphereGrid"
description: "Auto-generated class reference for AtmosphereGrid."
---
# AtmosphereGrid

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class AtmosphereGrid`
**Base:** none
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/AtmosphereGrid.cs`

## Overview

`AtmosphereGrid` lives in `TaleWorlds.CampaignSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Initialize
`public void Initialize()`

**Purpose:** Prepares the resources, state, or bindings the current object needs before use.

```csharp
// Obtain an instance of AtmosphereGrid from the subsystem API first
AtmosphereGrid atmosphereGrid = ...;
atmosphereGrid.Initialize();
```

### GetInterpolatedStateInfo
`public AtmosphereState GetInterpolatedStateInfo(Vec3 pos)`

**Purpose:** Reads and returns the `interpolated state info` value held by the current object.

```csharp
// Obtain an instance of AtmosphereGrid from the subsystem API first
AtmosphereGrid atmosphereGrid = ...;
var result = atmosphereGrid.GetInterpolatedStateInfo(pos);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
AtmosphereGrid atmosphereGrid = ...;
atmosphereGrid.Initialize();
```

## See Also

- [Area Index](../)