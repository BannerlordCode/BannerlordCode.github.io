---
title: "BattlePowerCalculationLogic"
description: "BattlePowerCalculationLogic: a public class in TaleWorlds.MountAndBlade, inheriting MissionLogic, IBattlePowerCalculationLogic; 3 exposed members (1 methods, 1 properties, 0 fields). Source: TaleWorlds.MountAndBlade/BattlePowerCalculationLogic.cs."
---
# BattlePowerCalculationLogic

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class BattlePowerCalculationLogic : MissionLogic, IBattlePowerCalculationLogic, IMissionBehavior`
**File:** `TaleWorlds.MountAndBlade/BattlePowerCalculationLogic.cs`

## Overview

BattlePowerCalculationLogic lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/BattlePowerCalculationLogic.cs. It is a public class, implementing/inheriting MissionLogic, IBattlePowerCalculationLogic, IMissionBehavior; the inheritance chain is BattlePowerCalculationLogic → MissionLogic → MissionBehavior → IMissionBehavior. It exposes 3 public/protected members: 1 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BattlePowerCalculationLogic is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain BattlePowerCalculationLogic → MissionLogic → MissionBehavior → IMissionBehavior. The surface is method-led (methods 1/3, properties 1/3), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/BattlePowerCalculationLogic.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsTeamPowersCalculated` | `public bool IsTeamPowersCalculated` | property |
| `BattlePowerCalculationLogic` | `public BattlePowerCalculationLogic()` | constructor |
| `GetTotalTeamPower` | `public float GetTotalTeamPower(Team team)` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface MissionLogic](../MissionLogic)
- [base / interface IBattlePowerCalculationLogic](../IBattlePowerCalculationLogic)
- [base / interface IMissionBehavior](../IMissionBehavior)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
