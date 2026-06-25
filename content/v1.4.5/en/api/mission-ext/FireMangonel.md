---
title: "FireMangonel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `FireMangonel`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# FireMangonel

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class FireMangonel : Mangonel`
**Base:** `Mangonel`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/FireMangonel.cs`

## Overview

`FireMangonel` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetSiegeEngineType
`public override SiegeEngineType GetSiegeEngineType()`

**Purpose:** Gets the current value of `siege engine type`.

### ProcessTargetValue
`public override float ProcessTargetValue(float baseValue, TargetFlags flags)`

**Purpose:** Handles logic related to `process target value`.

## Usage Example

```csharp
var value = new FireMangonel();
value.GetSiegeEngineType();
```

## See Also

- [Complete Class Catalog](../catalog)