---
title: "TutorialArea"
description: "TutorialArea: a public class in TaleWorlds.MountAndBlade, inheriting MissionObject; 30 exposed members (26 methods, 3 properties, 0 fields). Source: TaleWorlds.MountAndBlade/TutorialArea.cs."
---
# TutorialArea

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class TutorialArea : MissionObject`
**File:** `TaleWorlds.MountAndBlade/TutorialArea.cs`

## Overview

TutorialArea lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/TutorialArea.cs. It is a public class, implementing/inheriting MissionObject; the inheritance chain is TutorialArea → MissionObject → ScriptComponentBehavior. It exposes 30 public/protected members: 26 methods, 3 properties, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TutorialArea is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain TutorialArea → MissionObject → ScriptComponentBehavior. The surface is method-led (methods 26/30, properties 3/30), so it mostly exposes operations. ScriptComponentBehavior on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/TutorialArea.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MBReadOnlyList` | `public MBReadOnlyList<TrainingIcon>TrainingIconsReadOnly` | property |
| `TypeOfTraining` | `public TutorialArea.TrainingType TypeOfTraining` | property |
| `OnEditorInit` | `protected internal override void OnEditorInit()` | method |
| `OnEditorTick` | `protected internal override void OnEditorTick(float dt)` | method |
| `OnInit` | `protected internal override void OnInit()` | method |
| `AfterMissionStart` | `public override void AfterMissionStart()` | method |
| `MarkTrainingIcons` | `public void MarkTrainingIcons(bool mark)` | method |
| `GetActiveTrainingIcon` | `public TrainingIcon GetActiveTrainingIcon()` | method |
| `GetIndexFromTag` | `public int GetIndexFromTag(string tag)` | method |
| `List` | `public List<string>GetSubTrainingTags()` | method |
| `ActivateTaggedWeapons` | `public void ActivateTaggedWeapons(int index)` | method |
| `EquipWeaponsToPlayer` | `public void EquipWeaponsToPlayer(int index)` | method |
| `DeactivateAllWeapons` | `public void DeactivateAllWeapons(bool resetDestructibles)` | method |
| `ActivateBoundaries` | `public void ActivateBoundaries()` | method |
| `HideBoundaries` | `public void HideBoundaries()` | method |
| `GetBreakablesCount` | `public int GetBreakablesCount(int index)` | method |
| `MakeDestructible` | `public void MakeDestructible(int index)` | method |
| `MarkAllTargets` | `public void MarkAllTargets(int index, bool mark)` | method |
| `ResetMarkingTargetTimers` | `public void ResetMarkingTargetTimers(int index)` | method |
| `MakeInDestructible` | `public void MakeInDestructible(int index)` | method |
| `AllBreakablesAreBroken` | `public bool AllBreakablesAreBroken(int index)` | method |
| `GetBrokenBreakableCount` | `public int GetBrokenBreakableCount(int index)` | method |
| `GetUnbrokenBreakableCount` | `public int GetUnbrokenBreakableCount(int index)` | method |
| `ResetBreakables` | `public void ResetBreakables(int index, bool makeIndestructible = true)` | method |
| `HasMainAgentPickedAll` | `public bool HasMainAgentPickedAll(int index)` | method |
| `CheckMainAgentEquipment` | `public void CheckMainAgentEquipment(int index)` | method |
| `CheckWeapons` | `public void CheckWeapons(int index)` | method |
| `IsPositionInsideTutorialArea` | `public bool IsPositionInsideTutorialArea(Vec3 position, out string[]volumeBoxTags)` | method |
| `TrainingType` | `public enum TrainingType` | property |
| `TrainingType` | `public enum TrainingType` | nested type |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface MissionObject](../MissionObject)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
