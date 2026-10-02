---
title: "TacticComponent"
description: "TacticComponent: a public class in TaleWorlds.MountAndBlade; 30 exposed members (22 methods, 4 properties, 3 fields). Source: TaleWorlds.MountAndBlade/TacticComponent.cs."
---
# TacticComponent

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public abstract class TacticComponent`
**File:** `TaleWorlds.MountAndBlade/TacticComponent.cs`

## Overview

TacticComponent lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/TacticComponent.cs. It is a public class (abstract); the inheritance chain is TacticComponent. It exposes 30 public/protected members: 22 methods, 4 properties, 3 fields, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TacticComponent is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain TacticComponent. The surface is method-led (methods 22/30, properties 4/30), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/TacticComponent.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Team` | `public Team Team` | property |
| `MBList` | `protected MBList<Formation>FormationsIncludingSpecialAndEmpty` | property |
| `MBList` | `protected MBList<Formation>FormationsIncludingEmpty` | property |
| `TacticComponent` | `protected TacticComponent(Team team)` | constructor |
| `OnCancel` | `protected internal virtual void OnCancel()` | method |
| `OnApply` | `protected internal virtual void OnApply()` | method |
| `TickOccasionally` | `public virtual void TickOccasionally()` | method |
| `GetFormationGroupEffectivenessOverOrder` | `protected static float GetFormationGroupEffectivenessOverOrder(IEnumerable<Formation>formationGroup, OrderType orderType, IOrderable targetObject = null)` | method |
| `GetFormationEffectivenessOverOrder` | `protected static float GetFormationEffectivenessOverOrder(Formation formation, OrderType orderType, IOrderable targetObject = null)` | method |
| `DebugTick` | `protected internal virtual void DebugTick(float dt)` | method |
| `List` | `protected List<Formation>ConsolidateFormations(List<Formation>formationsToBeConsolidated, int neededCount)` | method |
| `CalculateNotEngagingTacticalAdvantage` | `protected static float CalculateNotEngagingTacticalAdvantage(TeamQuerySystem team)` | method |
| `SplitFormationClassIntoGivenNumber` | `protected void SplitFormationClassIntoGivenNumber(Func<Formation, bool>formationClass, int count)` | method |
| `CheckAndSetAvailableFormationsChanged` | `protected virtual bool CheckAndSetAvailableFormationsChanged()` | method |
| `AreFormationsCreated` | `protected bool AreFormationsCreated` | property |
| `ResetTactic` | `public void ResetTactic()` | method |
| `AssignTacticFormations1121` | `protected void AssignTacticFormations1121()` | method |
| `List` | `protected static List<Formation>ChooseAndSortByPriority(IEnumerable<Formation>formations, Func<Formation, bool>isEligible, Func<Formation, bool>isPrioritized, Func<Formation, float>score)` | method |
| `ManageFormationCounts` | `protected virtual void ManageFormationCounts()` | method |
| `ManageFormationCounts` | `protected void ManageFormationCounts(int infantryCount, int rangedCount, int cavalryCount, int rangedCavalryCount)` | method |
| `StopUsingAllMachines` | `protected virtual void StopUsingAllMachines()` | method |
| `StopUsingAllRangedSiegeWeapons` | `protected void StopUsingAllRangedSiegeWeapons()` | method |
| `SoundTacticalHorn` | `protected void SoundTacticalHorn(int soundCode)` | method |
| `SetDefaultBehaviorWeights` | `public static void SetDefaultBehaviorWeights(Formation f)` | method |
| `GetTacticWeight` | `protected internal virtual float GetTacticWeight()` | method |
| `CheckAndDetermineFormation` | `protected bool CheckAndDetermineFormation(ref Formation formation, Func<Formation, bool>isEligible)` | method |
| `ResetTacticalPositions` | `protected internal virtual bool ResetTacticalPositions()` | method |
| `MoveHornSoundIndex` | `public static readonly int MoveHornSoundIndex` | field |
| `AttackHornSoundIndex` | `public static readonly int AttackHornSoundIndex` | field |
| `RetreatHornSoundIndex` | `public static readonly int RetreatHornSoundIndex` | field |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
