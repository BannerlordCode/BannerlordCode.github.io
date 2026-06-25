---
title: "FireTrebuchet"
description: "Auto-generated class reference for FireTrebuchet."
---
# FireTrebuchet

**Namespace:** TaleWorlds.MountAndBlade.Objects.Siege
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class FireTrebuchet : Trebuchet`
**Base:** `Trebuchet`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade.Objects.Siege/FireTrebuchet.cs`

## Overview

`FireTrebuchet` lives in `TaleWorlds.MountAndBlade.Objects.Siege` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Objects.Siege` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetSiegeEngineType
`public override SiegeEngineType GetSiegeEngineType()`

**Purpose:** **Purpose:** Reads and returns the siege engine type value held by the this instance.

```csharp
// Obtain an instance of FireTrebuchet from the subsystem API first
FireTrebuchet fireTrebuchet = ...;
var result = fireTrebuchet.GetSiegeEngineType();
```

### ProcessTargetValue
`public override float ProcessTargetValue(float baseValue, TargetFlags flags)`

**Purpose:** **Purpose:** Executes the ProcessTargetValue logic.

```csharp
// Obtain an instance of FireTrebuchet from the subsystem API first
FireTrebuchet fireTrebuchet = ...;
var result = fireTrebuchet.ProcessTargetValue(0, flags);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
FireTrebuchet fireTrebuchet = ...;
fireTrebuchet.GetSiegeEngineType();
```

## See Also

- [Area Index](../)