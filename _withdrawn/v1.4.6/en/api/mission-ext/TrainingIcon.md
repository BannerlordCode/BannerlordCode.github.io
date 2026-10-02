---
title: "TrainingIcon"
description: "TrainingIcon: a public class in TaleWorlds.MountAndBlade, inheriting UsableMachine; 13 exposed members (12 methods, 1 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/TrainingIcon.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# TrainingIcon

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class TrainingIcon : UsableMachine`
**File:** `TaleWorlds.MountAndBlade/TrainingIcon.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

TrainingIcon lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/TrainingIcon.cs. It is a public class, implementing/inheriting UsableMachine; the inheritance chain is TrainingIcon → UsableMachine → SynchedMissionObject → MissionObject → ScriptComponentBehavior → DotNetObject. It exposes 13 public/protected members: 12 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TrainingIcon lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain TrainingIcon → UsableMachine → SynchedMissionObject → MissionObject → ScriptComponentBehavior → DotNetObject. The surface is method-led (methods 12/13, properties 1/13), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/TrainingIcon.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Focused` | `public bool Focused` | property |
| `OnInit` | `protected internal override void OnInit()` | method |
| `GetTickRequirement` | `public override ScriptComponentBehavior.TickRequirement GetTickRequirement()` | method |
| `OnTick` | `protected internal override void OnTick(float dt)` | method |
| `SetMarked` | `public void SetMarked(bool highlight)` | method |
| `GetIsActivated` | `public bool GetIsActivated()` | method |
| `GetTrainingSubTypeTag` | `public string GetTrainingSubTypeTag()` | method |
| `DisableIcon` | `public void DisableIcon()` | method |
| `EnableIcon` | `public void EnableIcon()` | method |
| `GetDescriptionText` | `public override TextObject GetDescriptionText(WeakGameEntity gameEntity)` | method |
| `GetActionTextForStandingPoint` | `public override TextObject GetActionTextForStandingPoint(UsableMissionObject usableGameObject = null)` | method |
| `OnFocusGain` | `public override void OnFocusGain(Agent userAgent)` | method |
| `OnFocusLose` | `public override void OnFocusLose(Agent userAgent)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface UsableMachine](../UsableMachine/)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
