---
title: "EnemyAgentAIDeactivationMissionLogic"
description: "Auto-generated class reference for EnemyAgentAIDeactivationMissionLogic."
---
# EnemyAgentAIDeactivationMissionLogic

> ⚠ 本页为自动生成的类参考，示例未经源码核对，勿直接引用其中的 API。

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public class EnemyAgentAIDeactivationMissionLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `SandBox/Missions/MissionLogics/EnemyAgentAIDeactivationMissionLogic.cs`

## Overview

`EnemyAgentAIDeactivationMissionLogic` sits closer to the behavior layer: it reacts to events, drives flows, and updates subsystem state every tick or at key transitions.

## Mental Model

Treat `EnemyAgentAIDeactivationMissionLogic` as a Logic-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<EnemyAgentAIDeactivationMissionLogic>();
```

## See Also

- [Area Index](../)