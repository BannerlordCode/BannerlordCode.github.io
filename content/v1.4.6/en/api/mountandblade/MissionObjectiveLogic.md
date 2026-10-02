---
title: "MissionObjectiveLogic"
description: "MissionObjectiveLogic: a public class in TaleWorlds.MountAndBlade, inheriting MissionLogic; 4 exposed members (3 methods, 1 properties, 0 fields). Source: TaleWorlds.MountAndBlade/Missions/MissionLogics/MissionObjectiveLogic.cs."
---
# MissionObjectiveLogic

**Namespace:** `TaleWorlds.MountAndBlade.Missions.MissionLogics`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class MissionObjectiveLogic : MissionLogic`
**File:** `TaleWorlds.MountAndBlade/Missions/MissionLogics/MissionObjectiveLogic.cs`

## Overview

MissionObjectiveLogic lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/Missions/MissionLogics/MissionObjectiveLogic.cs. It is a public class, implementing/inheriting MissionLogic; the inheritance chain is MissionObjectiveLogic → MissionLogic → MissionBehavior → IMissionBehavior. It exposes 4 public/protected members: 3 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionObjectiveLogic is a top-level type in TaleWorlds.MountAndBlade, namespace differing from (TaleWorlds.MountAndBlade.Missions.MissionLogics) the module directory; inheritance chain MissionObjectiveLogic → MissionLogic → MissionBehavior → IMissionBehavior. The surface is method-led (methods 3/4, properties 1/4), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/Missions/MissionLogics/MissionObjectiveLogic.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CurrentObjective` | `public MissionObjective CurrentObjective` | property |
| `StartObjective` | `public void StartObjective(MissionObjective objective)` | method |
| `CompleteCurrentObjective` | `public void CompleteCurrentObjective()` | method |
| `OnMissionTick` | `public override void OnMissionTick(float dt)` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface MissionLogic](../MissionLogic)
- [same namespace MissionHintLogic](../MissionHintLogic)
