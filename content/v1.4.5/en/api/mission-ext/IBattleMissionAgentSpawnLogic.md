---
title: "IBattleMissionAgentSpawnLogic"
description: "Auto-generated class reference for IBattleMissionAgentSpawnLogic."
---
# IBattleMissionAgentSpawnLogic

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public interface IBattleMissionAgentSpawnLogic : IMissionAgentSpawnLogic, IMissionBehavior`
**Base:** `IMissionAgentSpawnLogic`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/IBattleMissionAgentSpawnLogic.cs`

## Overview

`IBattleMissionAgentSpawnLogic` sits closer to the behavior layer: it reacts to events, drives flows, and updates subsystem state every tick or at key transitions.

## Mental Model

Treat `IBattleMissionAgentSpawnLogic` as a Logic-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
// Usually obtained through DI or a factory method
IIBattleMissionAgentSpawnLogic service = ...;
```

## See Also

- [Area Index](../)