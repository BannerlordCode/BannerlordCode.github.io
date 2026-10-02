---
title: "CustomSallyOutMissionController"
description: "CustomSallyOutMissionController: a public class in TaleWorlds.MountAndBlade.MissionSpawnHandlers, inheriting SallyOutMissionController; 2 exposed members (1 methods, 0 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/MissionSpawnHandlers/CustomSallyOutMissionController.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CustomSallyOutMissionController

**Namespace:** `TaleWorlds.MountAndBlade.MissionSpawnHandlers`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class CustomSallyOutMissionController : SallyOutMissionController`
**File:** `TaleWorlds.MountAndBlade/MissionSpawnHandlers/CustomSallyOutMissionController.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

CustomSallyOutMissionController lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/MissionSpawnHandlers/CustomSallyOutMissionController.cs. It is a public class, implementing/inheriting SallyOutMissionController; the inheritance chain is CustomSallyOutMissionController → SallyOutMissionController → MissionLogic → MissionBehavior → IMissionBehavior. It exposes 2 public/protected members: 1 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CustomSallyOutMissionController lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.MissionSpawnHandlers`, inheritance chain CustomSallyOutMissionController → SallyOutMissionController → MissionLogic → MissionBehavior → IMissionBehavior. The surface is method-led (methods 1/2, properties 0/2), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/MissionSpawnHandlers/CustomSallyOutMissionController.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `CustomSallyOutMissionController` | `public CustomSallyOutMissionController(IBattleCombatant defenderBattleCombatant, IBattleCombatant attackerBattleCombatant) : base(true)` | constructor |
| `GetInitialTroopCounts` | `protected override void GetInitialTroopCounts(out int besiegedTotalTroopCount, out int besiegerTotalTroopCount)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface SallyOutMissionController](../SallyOutMissionController/)
- [same namespace CustomBattleMissionSpawnHandler](../CustomBattleMissionSpawnHandler/)
- [same namespace CustomMissionSpawnHandler](../CustomMissionSpawnHandler/)
- [same namespace CustomSiegeMissionSpawnHandler](../CustomSiegeMissionSpawnHandler/)
