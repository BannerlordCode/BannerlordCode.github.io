---
title: "ITargetable"
description: "ITargetable: a public interface in TaleWorlds.MountAndBlade; 9 exposed members (9 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade/ITargetable.cs."
---
# ITargetable

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public interface ITargetable`
**File:** `TaleWorlds.MountAndBlade/ITargetable.cs`

## Overview

ITargetable lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/ITargetable.cs. It is a public interface; the inheritance chain is ITargetable. It exposes 9 public/protected members: 9 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ITargetable is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain ITargetable. The surface is method-led (methods 9/9, properties 0/9), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/ITargetable.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetTargetFlags` | `TargetFlags GetTargetFlags();` | method |
| `GetTargetValue` | `float GetTargetValue(List<Vec3>referencePositions);` | method |
| `GetTargetEntity` | `WeakGameEntity GetTargetEntity();` | method |
| `GetTargetingOffset` | `Vec3 GetTargetingOffset();` | method |
| `GetSide` | `BattleSideEnum GetSide();` | method |
| `GetTargetGlobalVelocity` | `Vec3 GetTargetGlobalVelocity();` | method |
| `IsDestructable` | `bool IsDestructable();` | method |
| `Entity` | `WeakGameEntity Entity();` | method |
| `Vec3>ComputeGlobalPhysicsBoundingBoxMinMax` | `ValueTuple<Vec3, Vec3>ComputeGlobalPhysicsBoundingBoxMinMax();` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
