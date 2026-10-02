---
title: "MissionSiegeEnginesLogic"
description: "MissionSiegeEnginesLogic: a public class in TaleWorlds.MountAndBlade, inheriting MissionLogic; 3 exposed members (2 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade/MissionSiegeEnginesLogic.cs."
---
# MissionSiegeEnginesLogic

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class MissionSiegeEnginesLogic : MissionLogic`
**File:** `TaleWorlds.MountAndBlade/MissionSiegeEnginesLogic.cs`

## Overview

MissionSiegeEnginesLogic lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/MissionSiegeEnginesLogic.cs. It is a public class, implementing/inheriting MissionLogic; the inheritance chain is MissionSiegeEnginesLogic → MissionLogic → MissionBehavior → IMissionBehavior. It exposes 3 public/protected members: 2 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionSiegeEnginesLogic is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain MissionSiegeEnginesLogic → MissionLogic → MissionBehavior → IMissionBehavior. The surface is method-led (methods 2/3, properties 0/3), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/MissionSiegeEnginesLogic.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MissionSiegeEnginesLogic` | `public MissionSiegeEnginesLogic(List<MissionSiegeWeapon>defenderSiegeWeapons, List<MissionSiegeWeapon>attackerSiegeWeapons)` | constructor |
| `GetSiegeWeaponsController` | `public IMissionSiegeWeaponsController GetSiegeWeaponsController(BattleSideEnum side)` | method |
| `GetMissionSiegeWeapons` | `public void GetMissionSiegeWeapons(out IEnumerable<IMissionSiegeWeapon>defenderSiegeWeapons, out IEnumerable<IMissionSiegeWeapon>attackerSiegeWeapons)` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface MissionLogic](../MissionLogic)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
