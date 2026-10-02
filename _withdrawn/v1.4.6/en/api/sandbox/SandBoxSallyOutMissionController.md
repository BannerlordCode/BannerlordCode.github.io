---
title: "SandBoxSallyOutMissionController"
description: "SandBoxSallyOutMissionController: a public class in SandBox.Missions.MissionLogics, inheriting SallyOutMissionController; 3 exposed members (2 methods, 0 properties, 0 fields). Canonical bucket sandbox. Source: SandBox/Missions/MissionLogics/SandBoxSallyOutMissionController.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SandBoxSallyOutMissionController

**Namespace:** `SandBox.Missions.MissionLogics`
**Module:** `SandBox`
**Type:** `public class SandBoxSallyOutMissionController : SallyOutMissionController`
**File:** `SandBox/Missions/MissionLogics/SandBoxSallyOutMissionController.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

SandBoxSallyOutMissionController lives in the SandBox module, source file SandBox/Missions/MissionLogics/SandBoxSallyOutMissionController.cs. It is a public class, implementing/inheriting SallyOutMissionController; the inheritance chain is SandBoxSallyOutMissionController → SallyOutMissionController → MissionLogic → MissionBehavior → IMissionBehavior. It exposes 3 public/protected members: 2 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SandBoxSallyOutMissionController lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.Missions.MissionLogics`, inheritance chain SandBoxSallyOutMissionController → SallyOutMissionController → MissionLogic → MissionBehavior → IMissionBehavior. The surface is method-led (methods 2/3, properties 0/3), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Missions/MissionLogics/SandBoxSallyOutMissionController.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `SandBoxSallyOutMissionController` | `public SandBoxSallyOutMissionController(bool isSallyOutAmbush) : base(isSallyOutAmbush)` | constructor |
| `OnBehaviorInitialize` | `public override void OnBehaviorInitialize()` | method |
| `GetInitialTroopCounts` | `protected override void GetInitialTroopCounts(out int besiegedTotalTroopCount, out int besiegerTotalTroopCount)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface SallyOutMissionController](../../mission-ext/SallyOutMissionController/)
- [same namespace BattleAgentLogic](../BattleAgentLogic/)
- [same namespace BattleSurgeonLogic](../BattleSurgeonLogic/)
- [same namespace CampaignMissionComponent](../CampaignMissionComponent/)
- [same namespace CampaignSiegeStateHandler](../CampaignSiegeStateHandler/)
