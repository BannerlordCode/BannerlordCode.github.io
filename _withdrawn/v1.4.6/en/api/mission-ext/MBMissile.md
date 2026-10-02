---
title: "MBMissile"
description: "MBMissile: a public class in TaleWorlds.MountAndBlade; 7 exposed members (5 methods, 1 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/MBMissile.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MBMissile

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public abstract class MBMissile`
**File:** `TaleWorlds.MountAndBlade/MBMissile.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

MBMissile lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/MBMissile.cs. It is a public class (abstract); the inheritance chain is MBMissile. It exposes 7 public/protected members: 5 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MBMissile lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain MBMissile. The surface is method-led (methods 5/7, properties 1/7), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/MBMissile.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `MBMissile` | `protected MBMissile(Mission mission)` | constructor |
| `Index` | `public int Index` | property |
| `GetPosition` | `public Vec3 GetPosition()` | method |
| `GetOldPosition` | `public Vec3 GetOldPosition()` | method |
| `GetVelocity` | `public Vec3 GetVelocity()` | method |
| `SetVelocity` | `public void SetVelocity(in Vec3 velocity)` | method |
| `GetHasRigidBody` | `public bool GetHasRigidBody()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
