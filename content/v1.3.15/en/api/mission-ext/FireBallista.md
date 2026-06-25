---
title: "FireBallista"
description: "Auto-generated class reference for FireBallista."
---
# FireBallista

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class FireBallista : Ballista`
**Base:** `Ballista`
**File:** `TaleWorlds.MountAndBlade/FireBallista.cs`

## Overview

`FireBallista` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetSiegeEngineType
`public override SiegeEngineType GetSiegeEngineType()`

**Purpose:** **Purpose:** Reads and returns the siege engine type value held by the this instance.

```csharp
// Obtain an instance of FireBallista from the subsystem API first
FireBallista fireBallista = ...;
var result = fireBallista.GetSiegeEngineType();
```

### ProcessTargetValue
`public override float ProcessTargetValue(float baseValue, TargetFlags flags)`

**Purpose:** **Purpose:** Executes the ProcessTargetValue logic.

```csharp
// Obtain an instance of FireBallista from the subsystem API first
FireBallista fireBallista = ...;
var result = fireBallista.ProcessTargetValue(0, flags);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
FireBallista fireBallista = ...;
fireBallista.GetSiegeEngineType();
```

## See Also

- [Area Index](../)