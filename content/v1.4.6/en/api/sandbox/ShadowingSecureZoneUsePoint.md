---
title: "ShadowingSecureZoneUsePoint"
description: "ShadowingSecureZoneUsePoint: a public class in SandBox, inheriting UsableMissionObject; 5 exposed members (4 methods, 0 properties, 0 fields). Source: SandBox/Objects/Usables/ShadowingSecureZoneUsePoint.cs."
---
# ShadowingSecureZoneUsePoint

**Namespace:** `SandBox.Objects.Usables`
**Module:** `SandBox`
**Type:** `public class ShadowingSecureZoneUsePoint : UsableMissionObject`
**File:** `SandBox/Objects/Usables/ShadowingSecureZoneUsePoint.cs`

## Overview

ShadowingSecureZoneUsePoint lives in the SandBox module, source file SandBox/Objects/Usables/ShadowingSecureZoneUsePoint.cs. It is a public class, implementing/inheriting UsableMissionObject; the inheritance chain is ShadowingSecureZoneUsePoint → UsableMissionObject. It exposes 5 public/protected members: 4 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ShadowingSecureZoneUsePoint is a top-level type in SandBox, namespace differing from (SandBox.Objects.Usables) the module directory; inheritance chain ShadowingSecureZoneUsePoint → UsableMissionObject. The surface is method-led (methods 4/5, properties 0/5), so it mostly exposes operations. UsableMissionObject on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Objects/Usables/ShadowingSecureZoneUsePoint.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ShadowingSecureZoneUsePoint` | `public ShadowingSecureZoneUsePoint() : base(false)` | constructor |
| `GetDescriptionText` | `public override TextObject GetDescriptionText(WeakGameEntity gameEntity)` | method |
| `OnUse` | `public override void OnUse(Agent userAgent, sbyte agentBoneIndex)` | method |
| `OnUseStopped` | `public override void OnUseStopped(Agent userAgent, bool isSuccessful, int preferenceIndex)` | method |
| `IsDisabledForAgent` | `public override bool IsDisabledForAgent(Agent agent)` | method |

## See Also

- [↑ sandbox module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace Chair](../Chair)
- [same namespace CheckpointUsePoint](../CheckpointUsePoint)
- [same namespace DisguiseMissionUsePoint](../DisguiseMissionUsePoint)
- [same namespace MusicianGroup](../MusicianGroup)
