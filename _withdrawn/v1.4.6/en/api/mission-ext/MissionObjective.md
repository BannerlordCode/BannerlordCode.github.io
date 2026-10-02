---
title: "MissionObjective"
description: "MissionObjective: a public class in TaleWorlds.MountAndBlade.Missions.Objectives; 34 exposed members (20 methods, 10 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/Missions/Objectives/MissionObjective.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MissionObjective

**Namespace:** `TaleWorlds.MountAndBlade.Missions.Objectives`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public abstract class MissionObjective`
**File:** `TaleWorlds.MountAndBlade/Missions/Objectives/MissionObjective.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

MissionObjective lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/Missions/Objectives/MissionObjective.cs. It is a public class (abstract); the inheritance chain is MissionObjective. It exposes 34 public/protected members: 20 methods, 10 properties, 1 events, 1 constructors, 2 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionObjective lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.Missions.Objectives`, inheritance chain MissionObjective. The surface is method-led (methods 20/34, properties 10/34), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/Missions/Objectives/MissionObjective.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `UniqueId` | `public abstract string UniqueId` | property |
| `Name` | `public abstract TextObject Name` | property |
| `Description` | `public abstract TextObject Description` | property |
| `IsActive` | `public bool IsActive` | property |
| `IsStarted` | `public bool IsStarted` | property |
| `IsCompleted` | `public bool IsCompleted` | property |
| `Mission` | `public Mission Mission` | property |
| `ObjectiveGiver` | `public BasicCharacterObject ObjectiveGiver` | property |
| `OnUpdated;` | `public event Action OnUpdated;` | event |
| `MissionObjective` | `public MissionObjective(Mission mission)` | constructor |
| `GetCurrentProgress` | `public virtual MissionObjectiveProgressInfo GetCurrentProgress()` | method |
| `SetObjectiveGiver` | `public void SetObjectiveGiver(BasicCharacterObject objectiveGiver)` | method |
| `AddTarget` | `public void AddTarget(MissionObjectiveTarget target)` | method |
| `RemoveTarget` | `public void RemoveTarget(MissionObjectiveTarget target)` | method |
| `ClearTargets` | `public void ClearTargets()` | method |
| `MBReadOnlyList` | `public MBReadOnlyList<MissionObjectiveTarget>GetTargetsCopy()` | method |
| `MBReadOnlyList` | `protected MBReadOnlyList<TTarget>GetTargetsCopy<TTarget>() where TTarget : MissionObjectiveTarget` | method |
| `IsActivationRequirementsMet` | `protected virtual bool IsActivationRequirementsMet()` | method |
| `IsCompletionRequirementsMet` | `protected virtual bool IsCompletionRequirementsMet()` | method |
| `OnStart` | `protected virtual void OnStart()` | method |
| `OnComplete` | `protected virtual void OnComplete()` | method |
| `OnTick` | `protected virtual void OnTick(float dt)` | method |
| `OnTargetAdded` | `protected virtual void OnTargetAdded(MissionObjectiveTarget target)` | method |
| `OnTargetRemoved` | `protected virtual void OnTargetRemoved(MissionObjectiveTarget target)` | method |
| `OnTargetsCleared` | `protected virtual void OnTargetsCleared()` | method |
| `CreateGenericObjectiveBuilder` | `public static MissionObjective.GenericMissionObjectiveBuilder CreateGenericObjectiveBuilder(Mission mission, string id, TextObject name = null, TextObject description = null)` | method |
| `MissionObjective.GenericMissionObjectiveTargetBuilder` | `public static MissionObjective.GenericMissionObjectiveTargetBuilder<T>CreateGenericTargetBuilder<T>(T target, TextObject name, Vec3 staticPosition)` | method |
| `MissionObjective.GenericMissionObjectiveTargetBuilder` | `public static MissionObjective.GenericMissionObjectiveTargetBuilder<T>CreateGenericTargetBuilder<T>(T target)` | method |
| `MissionObjective.GenericMissionObjectiveTargetBuilder` | `public static MissionObjective.GenericMissionObjectiveTargetBuilder<T>CreateGenericTargetBuilder<T>(T target, TextObject name)` | method |
| `MissionObjective.GenericMissionObjectiveTargetBuilder` | `public static MissionObjective.GenericMissionObjectiveTargetBuilder<T>CreateGenericTargetBuilder<T>(T target, Vec3 staticPosition)` | method |
| `GenericMissionObjectiveBuilder` | `public struct GenericMissionObjectiveBuilder` | property |
| `GenericMissionObjectiveTargetBuilder` | `public struct GenericMissionObjectiveTargetBuilder<T>` | property |
| `GenericMissionObjectiveBuilder` | `public struct GenericMissionObjectiveBuilder` | nested type |
| `GenericMissionObjectiveTargetBuilder` | `public struct GenericMissionObjectiveTargetBuilder<T>` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace MissionObjectiveProgressInfo](../MissionObjectiveProgressInfo/)
- [same namespace MissionObjectiveTarget](../MissionObjectiveTarget/)
- [same namespace MissionObjectiveTarget](../MissionObjectiveTarget__1/)
