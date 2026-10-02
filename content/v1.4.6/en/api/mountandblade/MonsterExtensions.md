---
title: "MonsterExtensions"
description: "MonsterExtensions: a public class in TaleWorlds.MountAndBlade; 4 exposed members (4 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade/MonsterExtensions.cs."
---
# MonsterExtensions

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public static class MonsterExtensions`
**File:** `TaleWorlds.MountAndBlade/MonsterExtensions.cs`

## Overview

MonsterExtensions lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/MonsterExtensions.cs. It is a public class; the inheritance chain is MonsterExtensions. It exposes 4 public/protected members: 4 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MonsterExtensions is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain MonsterExtensions. The surface is method-led (methods 4/4, properties 0/4), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/MonsterExtensions.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `FillAnimationSystemData` | `public static AnimationSystemData FillAnimationSystemData(this Monster monster, float stepSize, bool hasClippingPlane, bool isFemale)` | method |
| `FillAnimationSystemData` | `public static AnimationSystemData FillAnimationSystemData(this Monster monster, MBActionSet actionSet, float stepSize, bool hasClippingPlane)` | method |
| `FillCapsuleData` | `public static AgentCapsuleData FillCapsuleData(this Monster monster)` | method |
| `FillSpawnData` | `public static AgentSpawnData FillSpawnData(this Monster monster, ItemObject mountItem)` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
