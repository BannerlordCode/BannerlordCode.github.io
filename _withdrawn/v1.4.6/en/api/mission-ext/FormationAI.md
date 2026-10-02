---
title: "FormationAI"
description: "FormationAI: a public class in TaleWorlds.MountAndBlade; 21 exposed members (11 methods, 6 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/FormationAI.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# FormationAI

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class FormationAI`
**File:** `TaleWorlds.MountAndBlade/FormationAI.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

FormationAI lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/FormationAI.cs. It is a public class; the inheritance chain is FormationAI. It exposes 21 public/protected members: 11 methods, 6 properties, 1 events, 1 constructors, 2 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: FormationAI lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain FormationAI. The surface is method-led (methods 11/21, properties 6/21), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/FormationAI.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Action` | `public event Action<Formation>OnActiveBehaviorChanged;` | event |
| `ActiveBehavior` | `public BehaviorComponent ActiveBehavior` | property |
| `Side` | `public FormationAI.BehaviorSide Side` | property |
| `IsMainFormation` | `public bool IsMainFormation` | property |
| `BehaviorCount` | `public int BehaviorCount` | property |
| `FormationAI` | `public FormationAI(Formation formation)` | constructor |
| `SetBehaviorWeight` | `public T SetBehaviorWeight<T>(float w) where T : BehaviorComponent` | method |
| `AddAiBehavior` | `public void AddAiBehavior(BehaviorComponent behaviorComponent)` | method |
| `GetBehavior` | `public T GetBehavior<T>() where T : BehaviorComponent` | method |
| `AddSpecialBehavior` | `public void AddSpecialBehavior(BehaviorComponent behavior, bool purgePreviousSpecialBehaviors = false)` | method |
| `Tick` | `public void Tick()` | method |
| `OnDeploymentFinished` | `public void OnDeploymentFinished()` | method |
| `OnAgentRemoved` | `public void OnAgentRemoved(Agent agent)` | method |
| `GetBehaviorAtIndex` | `public BehaviorComponent GetBehaviorAtIndex(int index)` | method |
| `DebugMore` | `public void DebugMore()` | method |
| `DebugScores` | `public void DebugScores()` | method |
| `ResetBehaviorWeights` | `public void ResetBehaviorWeights()` | method |
| `BehaviorData` | `public class BehaviorData` | property |
| `BehaviorSide` | `public enum BehaviorSide` | property |
| `BehaviorData` | `public class BehaviorData` | nested type |
| `BehaviorSide` | `public enum BehaviorSide` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
