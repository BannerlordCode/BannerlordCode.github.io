---
title: "IBattlePowerCalculationLogic"
description: "Auto-generated class reference for IBattlePowerCalculationLogic."
---
# IBattlePowerCalculationLogic

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public interface IBattlePowerCalculationLogic : IMissionBehavior`
**Base:** `IMissionBehavior`
**File:** `TaleWorlds.MountAndBlade/IBattlePowerCalculationLogic.cs`

## Overview

`IBattlePowerCalculationLogic` sits closer to the behavior layer: it reacts to events, drives flows, and updates subsystem state every tick or at key transitions.

## Mental Model

Treat `IBattlePowerCalculationLogic` as a Logic-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
// Usually obtained through DI or a factory method
IIBattlePowerCalculationLogic service = ...;
```

## See Also

- [Area Index](../)