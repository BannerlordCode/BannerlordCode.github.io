---
title: "TeleportUsePoint"
description: "TeleportUsePoint: a public class in SandBox, inheriting StandingPoint; 13 exposed members (9 methods, 2 properties, 0 fields). Source: SandBox/Objects/TeleportUsePoint.cs."
---
# TeleportUsePoint

**Namespace:** `SandBox.Objects`
**Module:** `SandBox`
**Type:** `public class TeleportUsePoint : StandingPoint`
**File:** `SandBox/Objects/TeleportUsePoint.cs`

## Overview

TeleportUsePoint lives in the SandBox module, source file SandBox/Objects/TeleportUsePoint.cs. It is a public class, implementing/inheriting StandingPoint; the inheritance chain is TeleportUsePoint → StandingPoint. It exposes 13 public/protected members: 9 methods, 2 properties, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TeleportUsePoint is a top-level type in SandBox, namespace differing from (SandBox.Objects) the module directory; inheritance chain TeleportUsePoint → StandingPoint. The surface is method-led (methods 9/13, properties 2/13), so it mostly exposes operations. StandingPoint on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Objects/TeleportUsePoint.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `HasAIMovingTo` | `public override bool HasAIMovingTo` | property |
| `TeleportUsePoint` | `public TeleportUsePoint()` | constructor |
| `IsAIMovingTo` | `public override bool IsAIMovingTo(Agent agent)` | method |
| `OnInit` | `protected override void OnInit()` | method |
| `IsUsableByAgent` | `public override bool IsUsableByAgent(Agent userAgent)` | method |
| `IsDisabledForAgent` | `public override bool IsDisabledForAgent(Agent agent)` | method |
| `OnTick` | `protected override void OnTick(float dt)` | method |
| `OnUse` | `public override void OnUse(Agent userAgent, sbyte agentBoneIndex)` | method |
| `Deactivate` | `public void Deactivate()` | method |
| `Activate` | `public void Activate()` | method |
| `OnFocusGain` | `public override void OnFocusGain(Agent userAgent)` | method |
| `TeleportType` | `public enum TeleportType` | property |
| `TeleportType` | `public enum TeleportType` | nested type |

## See Also

- [↑ sandbox module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace CheckpointArea](../CheckpointArea)
- [same namespace DefaultMusicInstrumentData](../DefaultMusicInstrumentData)
- [same namespace DynamicPatrolAreaParent](../DynamicPatrolAreaParent)
- [same namespace GenericMissionEventBox](../GenericMissionEventBox)
