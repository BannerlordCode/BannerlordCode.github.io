---
title: "CustomMissionSpawnHandler"
description: "CustomMissionSpawnHandler: a public class in TaleWorlds.MountAndBlade.MissionSpawnHandlers, inheriting MissionLogic; 2 exposed members (2 methods, 0 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/MissionSpawnHandlers/CustomMissionSpawnHandler.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CustomMissionSpawnHandler

**Namespace:** `TaleWorlds.MountAndBlade.MissionSpawnHandlers`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class CustomMissionSpawnHandler : MissionLogic`
**File:** `TaleWorlds.MountAndBlade/MissionSpawnHandlers/CustomMissionSpawnHandler.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

CustomMissionSpawnHandler lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/MissionSpawnHandlers/CustomMissionSpawnHandler.cs. It is a public class, implementing/inheriting MissionLogic; the inheritance chain is CustomMissionSpawnHandler → MissionLogic → MissionBehavior → IMissionBehavior. It exposes 2 public/protected members: 2 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CustomMissionSpawnHandler lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.MissionSpawnHandlers`, inheritance chain CustomMissionSpawnHandler → MissionLogic → MissionBehavior → IMissionBehavior. The surface is method-led (methods 2/2, properties 0/2), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/MissionSpawnHandlers/CustomMissionSpawnHandler.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `OnBehaviorInitialize` | `public override void OnBehaviorInitialize()` | method |
| `CreateCustomBattleWaveSpawnSettings` | `protected static MissionSpawnSettings CreateCustomBattleWaveSpawnSettings()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MissionLogic](../MissionLogic/)
- [same namespace CustomBattleMissionSpawnHandler](../CustomBattleMissionSpawnHandler/)
- [same namespace CustomSallyOutMissionController](../CustomSallyOutMissionController/)
- [same namespace CustomSiegeMissionSpawnHandler](../CustomSiegeMissionSpawnHandler/)
