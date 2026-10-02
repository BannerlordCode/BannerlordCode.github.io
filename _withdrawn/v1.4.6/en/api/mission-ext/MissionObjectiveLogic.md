---
title: "MissionObjectiveLogic"
description: "MissionObjectiveLogic: a public class in TaleWorlds.MountAndBlade.Missions.MissionLogics, inheriting MissionLogic; 4 exposed members (3 methods, 1 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/Missions/MissionLogics/MissionObjectiveLogic.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MissionObjectiveLogic

**Namespace:** `TaleWorlds.MountAndBlade.Missions.MissionLogics`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class MissionObjectiveLogic : MissionLogic`
**File:** `TaleWorlds.MountAndBlade/Missions/MissionLogics/MissionObjectiveLogic.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

MissionObjectiveLogic lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/Missions/MissionLogics/MissionObjectiveLogic.cs. It is a public class, implementing/inheriting MissionLogic; the inheritance chain is MissionObjectiveLogic → MissionLogic → MissionBehavior → IMissionBehavior. It exposes 4 public/protected members: 3 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionObjectiveLogic lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.Missions.MissionLogics`, inheritance chain MissionObjectiveLogic → MissionLogic → MissionBehavior → IMissionBehavior. The surface is method-led (methods 3/4, properties 1/4), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/Missions/MissionLogics/MissionObjectiveLogic.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `CurrentObjective` | `public MissionObjective CurrentObjective` | property |
| `StartObjective` | `public void StartObjective(MissionObjective objective)` | method |
| `CompleteCurrentObjective` | `public void CompleteCurrentObjective()` | method |
| `OnMissionTick` | `public override void OnMissionTick(float dt)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MissionLogic](../MissionLogic/)
- [same namespace MissionHintLogic](../MissionHintLogic/)
