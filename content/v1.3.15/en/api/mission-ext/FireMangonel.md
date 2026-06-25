---
title: "FireMangonel"
description: "Auto-generated class reference for FireMangonel."
---
# FireMangonel

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class FireMangonel : Mangonel`
**Base:** `Mangonel`
**File:** `TaleWorlds.MountAndBlade/FireMangonel.cs`

## Overview

`FireMangonel` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetSiegeEngineType
`public override SiegeEngineType GetSiegeEngineType()`

**Purpose:** Reads and returns the `siege engine type` value held by the current object.

```csharp
// Obtain an instance of FireMangonel from the subsystem API first
FireMangonel fireMangonel = ...;
var result = fireMangonel.GetSiegeEngineType();
```

### ProcessTargetValue
`public override float ProcessTargetValue(float baseValue, TargetFlags flags)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of FireMangonel from the subsystem API first
FireMangonel fireMangonel = ...;
var result = fireMangonel.ProcessTargetValue(0, flags);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
FireMangonel fireMangonel = ...;
fireMangonel.GetSiegeEngineType();
```

## See Also

- [Area Index](../)