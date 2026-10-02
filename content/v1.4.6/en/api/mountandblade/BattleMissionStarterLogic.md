---
title: "BattleMissionStarterLogic"
description: "BattleMissionStarterLogic: a public class in TaleWorlds.MountAndBlade, inheriting MissionLogic; 3 exposed members (1 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade/BattleMissionStarterLogic.cs."
---
# BattleMissionStarterLogic

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class BattleMissionStarterLogic : MissionLogic`
**File:** `TaleWorlds.MountAndBlade/BattleMissionStarterLogic.cs`

## Overview

BattleMissionStarterLogic lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/BattleMissionStarterLogic.cs. It is a public class, implementing/inheriting MissionLogic; the inheritance chain is BattleMissionStarterLogic → MissionLogic → MissionBehavior → IMissionBehavior. It exposes 3 public/protected members: 1 methods, 2 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BattleMissionStarterLogic is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain BattleMissionStarterLogic → MissionLogic → MissionBehavior → IMissionBehavior. The surface is method-led (methods 1/3, properties 0/3), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/BattleMissionStarterLogic.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `BattleMissionStarterLogic` | `public BattleMissionStarterLogic()` | constructor |
| `BattleMissionStarterLogic` | `public BattleMissionStarterLogic(IMissionTroopSupplier defenderTroopSupplier = null, IMissionTroopSupplier attackerTroopSupplier = null)` | constructor |
| `AfterStart` | `public override void AfterStart()` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface MissionLogic](../MissionLogic)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
