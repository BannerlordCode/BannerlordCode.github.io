---
title: "MissionHintLogic"
description: "MissionHintLogic: a public class in TaleWorlds.MountAndBlade.Missions.MissionLogics, inheriting MissionLogic; 6 exposed members (3 methods, 1 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/Missions/MissionLogics/MissionHintLogic.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MissionHintLogic

**Namespace:** `TaleWorlds.MountAndBlade.Missions.MissionLogics`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class MissionHintLogic : MissionLogic`
**File:** `TaleWorlds.MountAndBlade/Missions/MissionLogics/MissionHintLogic.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

MissionHintLogic lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/Missions/MissionLogics/MissionHintLogic.cs. It is a public class, implementing/inheriting MissionLogic; the inheritance chain is MissionHintLogic → MissionLogic → MissionBehavior → IMissionBehavior. It exposes 6 public/protected members: 3 methods, 1 properties, 1 events, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionHintLogic lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.Missions.MissionLogics`, inheritance chain MissionHintLogic → MissionLogic → MissionBehavior → IMissionBehavior. The surface is method-led (methods 3/6, properties 1/6), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/Missions/MissionLogics/MissionHintLogic.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `OnActiveHintChanged;` | `public event MissionHintLogic.MissionHintChangedDelegate OnActiveHintChanged;` | event |
| `ActiveHint` | `public MissionHint ActiveHint` | property |
| `SetActiveHint` | `public void SetActiveHint(MissionHint hint)` | method |
| `Clear` | `public void Clear()` | method |
| `MissionHintChangedDelegate` | `public delegate void MissionHintChangedDelegate(MissionHint previousHint, MissionHint newHint);` | method |
| `MissionHintChangedDelegate` | `public delegate void MissionHintChangedDelegate(MissionHint previousHint, MissionHint newHint)` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MissionLogic](../MissionLogic/)
- [same namespace MissionObjectiveLogic](../MissionObjectiveLogic/)
