---
title: "PassageUsePoint"
description: "PassageUsePoint: a public class in SandBox, inheriting StandingPoint; 19 exposed members (11 methods, 6 properties, 1 fields). Source: SandBox/Objects/PassageUsePoint.cs."
---
# PassageUsePoint

**Namespace:** `SandBox.Objects`
**Module:** `SandBox`
**Type:** `public class PassageUsePoint : StandingPoint`
**File:** `SandBox/Objects/PassageUsePoint.cs`

## Overview

PassageUsePoint lives in the SandBox module, source file SandBox/Objects/PassageUsePoint.cs. It is a public class, implementing/inheriting StandingPoint; the inheritance chain is PassageUsePoint → StandingPoint. It exposes 19 public/protected members: 11 methods, 6 properties, 1 fields, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PassageUsePoint is a top-level type in SandBox, namespace differing from (SandBox.Objects) the module directory; inheritance chain PassageUsePoint → StandingPoint. The surface is method-led (methods 11/19, properties 6/19), so it mostly exposes operations. StandingPoint on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Objects/PassageUsePoint.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MBReadOnlyList` | `public MBReadOnlyList<Agent>MovingAgents` | property |
| `MovingAgent` | `public override Agent MovingAgent` | property |
| `PassageUsePoint` | `public PassageUsePoint()` | constructor |
| `ToLocation` | `public Location ToLocation` | property |
| `HasAIMovingTo` | `public override bool HasAIMovingTo` | property |
| `FocusableObjectType` | `public override FocusableObjectType FocusableObjectType` | property |
| `IsDisabledForAgent` | `public override bool IsDisabledForAgent(Agent agent)` | method |
| `AfterMissionStart` | `public override void AfterMissionStart()` | method |
| `DisableCombatActionsOnUse` | `public override bool DisableCombatActionsOnUse` | property |
| `OnInit` | `protected override void OnInit()` | method |
| `OnUse` | `public override void OnUse(Agent userAgent, sbyte agentBoneIndex)` | method |
| `OnUseStopped` | `public override void OnUseStopped(Agent userAgent, bool isSuccessful, int preferenceIndex)` | method |
| `IsUsableByAgent` | `public override bool IsUsableByAgent(Agent userAgent)` | method |
| `GetMovingAgentCount` | `public override int GetMovingAgentCount()` | method |
| `GetMovingAgentWithIndex` | `public override Agent GetMovingAgentWithIndex(int index)` | method |
| `AddMovingAgent` | `public override void AddMovingAgent(Agent movingAgent)` | method |
| `RemoveMovingAgent` | `public override void RemoveMovingAgent(Agent movingAgent)` | method |
| `IsAIMovingTo` | `public override bool IsAIMovingTo(Agent agent)` | method |
| `ToLocationId` | `public string ToLocationId` | field |

## See Also

- [↑ sandbox module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace CheckpointArea](../CheckpointArea)
- [same namespace DefaultMusicInstrumentData](../DefaultMusicInstrumentData)
- [same namespace DynamicPatrolAreaParent](../DynamicPatrolAreaParent)
- [same namespace GenericMissionEventBox](../GenericMissionEventBox)
