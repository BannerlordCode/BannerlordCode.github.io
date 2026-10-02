---
title: "SallyOutMissionController"
description: "SallyOutMissionController: a public class in TaleWorlds.MountAndBlade, inheriting MissionLogic; 10 exposed members (8 methods, 1 properties, 0 fields). Source: TaleWorlds.MountAndBlade/SallyOutMissionController.cs."
---
# SallyOutMissionController

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public abstract class SallyOutMissionController : MissionLogic`
**File:** `TaleWorlds.MountAndBlade/SallyOutMissionController.cs`

## Overview

SallyOutMissionController lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/SallyOutMissionController.cs. It is a public class (abstract), implementing/inheriting MissionLogic; the inheritance chain is SallyOutMissionController → MissionLogic → MissionBehavior → IMissionBehavior. It exposes 10 public/protected members: 8 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SallyOutMissionController is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain SallyOutMissionController → MissionLogic → MissionBehavior → IMissionBehavior. The surface is method-led (methods 8/10, properties 1/10), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/SallyOutMissionController.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MBReadOnlyList` | `public MBReadOnlyList<SiegeWeapon>BesiegerSiegeEngines` | property |
| `SallyOutMissionController` | `public SallyOutMissionController(bool isSallyOutAmbush)` | constructor |
| `OnBehaviorInitialize` | `public override void OnBehaviorInitialize()` | method |
| `AfterStart` | `public override void AfterStart()` | method |
| `OnMissionTick` | `public override void OnMissionTick(float dt)` | method |
| `OnDeploymentFinished` | `public override void OnDeploymentFinished()` | method |
| `OnEndMission` | `protected override void OnEndMission()` | method |
| `GetInitialTroopCounts` | `protected abstract void GetInitialTroopCounts(out int besiegedTotalTroopCount, out int besiegerTotalTroopCount);` | method |
| `MBReadOnlyList` | `public static MBReadOnlyList<SiegeWeapon>GetBesiegerSiegeEngines()` | method |
| `DisableSiegeEngines` | `public static void DisableSiegeEngines()` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface MissionLogic](../MissionLogic)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
