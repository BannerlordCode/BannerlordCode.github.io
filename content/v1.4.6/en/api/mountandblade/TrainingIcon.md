---
title: "TrainingIcon"
description: "TrainingIcon: a public class in TaleWorlds.MountAndBlade, inheriting UsableMachine; 13 exposed members (12 methods, 1 properties, 0 fields). Source: TaleWorlds.MountAndBlade/TrainingIcon.cs."
---
# TrainingIcon

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class TrainingIcon : UsableMachine`
**File:** `TaleWorlds.MountAndBlade/TrainingIcon.cs`

## Overview

TrainingIcon lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/TrainingIcon.cs. It is a public class, implementing/inheriting UsableMachine; the inheritance chain is TrainingIcon → UsableMachine → SynchedMissionObject → MissionObject → ScriptComponentBehavior. It exposes 13 public/protected members: 12 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TrainingIcon is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain TrainingIcon → UsableMachine → SynchedMissionObject → MissionObject → ScriptComponentBehavior. The surface is method-led (methods 12/13, properties 1/13), so it mostly exposes operations. ScriptComponentBehavior on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/TrainingIcon.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
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

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface UsableMachine](../UsableMachine)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
