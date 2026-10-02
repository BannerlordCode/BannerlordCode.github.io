---
title: "StealthAreaUsePoint"
description: "StealthAreaUsePoint: a public class in SandBox, inheriting UsableMissionObject; 10 exposed members (9 methods, 0 properties, 0 fields). Source: SandBox/Objects/Usables/StealthAreaUsePoint.cs."
---
# StealthAreaUsePoint

**Namespace:** `SandBox.Objects.Usables`
**Module:** `SandBox`
**Type:** `public class StealthAreaUsePoint : UsableMissionObject`
**File:** `SandBox/Objects/Usables/StealthAreaUsePoint.cs`

## Overview

StealthAreaUsePoint lives in the SandBox module, source file SandBox/Objects/Usables/StealthAreaUsePoint.cs. It is a public class, implementing/inheriting UsableMissionObject; the inheritance chain is StealthAreaUsePoint → UsableMissionObject. It exposes 10 public/protected members: 9 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: StealthAreaUsePoint is a top-level type in SandBox, namespace differing from (SandBox.Objects.Usables) the module directory; inheritance chain StealthAreaUsePoint → UsableMissionObject. The surface is method-led (methods 9/10, properties 0/10), so it mostly exposes operations. UsableMissionObject on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Objects/Usables/StealthAreaUsePoint.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `StealthAreaUsePoint` | `public StealthAreaUsePoint() : base(false)` | constructor |
| `OnInit` | `protected override void OnInit()` | method |
| `GetDescriptionText` | `public override TextObject GetDescriptionText(WeakGameEntity gameEntity)` | method |
| `OnUse` | `public override void OnUse(Agent userAgent, sbyte agentBoneIndex)` | method |
| `OnUseStopped` | `public override void OnUseStopped(Agent userAgent, bool isSuccessful, int preferenceIndex)` | method |
| `DisableAgentAIs` | `public void DisableAgentAIs()` | method |
| `IsDisabledForAgent` | `public override bool IsDisabledForAgent(Agent agent)` | method |
| `IsUsableByAgent` | `public override bool IsUsableByAgent(Agent userAgent)` | method |
| `EnableStealthAreaUsePoint` | `public void EnableStealthAreaUsePoint()` | method |
| `DisableStealthAreaUsePoint` | `public void DisableStealthAreaUsePoint()` | method |

## See Also

- [↑ sandbox module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace Chair](../Chair)
- [same namespace CheckpointUsePoint](../CheckpointUsePoint)
- [same namespace DisguiseMissionUsePoint](../DisguiseMissionUsePoint)
- [same namespace MusicianGroup](../MusicianGroup)
