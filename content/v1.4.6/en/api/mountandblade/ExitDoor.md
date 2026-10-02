---
title: "ExitDoor"
description: "ExitDoor: a public class in TaleWorlds.MountAndBlade, inheriting UsableMachine; 5 exposed members (5 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade/ExitDoor.cs."
---
# ExitDoor

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class ExitDoor : UsableMachine`
**File:** `TaleWorlds.MountAndBlade/ExitDoor.cs`

## Overview

ExitDoor lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/ExitDoor.cs. It is a public class, implementing/inheriting UsableMachine; the inheritance chain is ExitDoor → UsableMachine → SynchedMissionObject → MissionObject → ScriptComponentBehavior. It exposes 5 public/protected members: 5 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ExitDoor is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain ExitDoor → UsableMachine → SynchedMissionObject → MissionObject → ScriptComponentBehavior. The surface is method-led (methods 5/5, properties 0/5), so it mostly exposes operations. ScriptComponentBehavior on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/ExitDoor.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetActionTextForStandingPoint` | `public override TextObject GetActionTextForStandingPoint(UsableMissionObject usableGameObject)` | method |
| `GetDescriptionText` | `public override TextObject GetDescriptionText(WeakGameEntity gameEntity)` | method |
| `OnInit` | `protected internal override void OnInit()` | method |
| `GetTickRequirement` | `public override ScriptComponentBehavior.TickRequirement GetTickRequirement()` | method |
| `OnTick` | `protected internal override void OnTick(float dt)` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface UsableMachine](../UsableMachine)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
