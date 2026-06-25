---
title: "SallyOutReinforcementSpawnTimer"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SallyOutReinforcementSpawnTimer`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SallyOutReinforcementSpawnTimer

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SallyOutReinforcementSpawnTimer : ICustomReinforcementSpawnTimer`
**Base:** `ICustomReinforcementSpawnTimer`
**File:** `TaleWorlds.MountAndBlade/SallyOutReinforcementSpawnTimer.cs`

## Overview

`SallyOutReinforcementSpawnTimer` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Check
`public bool Check(BattleSideEnum side)`

**Purpose:** Handles logic related to `check`.

### ResetTimer
`public void ResetTimer(BattleSideEnum side)`

**Purpose:** Resets `timer` to its initial state.

## Usage Example

```csharp
var value = new SallyOutReinforcementSpawnTimer();
value.Check(side);
```

## See Also

- [Complete Class Catalog](../catalog)