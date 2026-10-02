---
title: "BehaviorAssaultWalls"
description: "BehaviorAssaultWalls: a public class in TaleWorlds.MountAndBlade, inheriting BehaviorComponent; 8 exposed members (6 methods, 1 properties, 0 fields). Source: TaleWorlds.MountAndBlade/BehaviorAssaultWalls.cs."
---
# BehaviorAssaultWalls

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class BehaviorAssaultWalls : BehaviorComponent`
**File:** `TaleWorlds.MountAndBlade/BehaviorAssaultWalls.cs`

## Overview

BehaviorAssaultWalls lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/BehaviorAssaultWalls.cs. It is a public class, implementing/inheriting BehaviorComponent; the inheritance chain is BehaviorAssaultWalls → BehaviorComponent. It exposes 8 public/protected members: 6 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BehaviorAssaultWalls is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain BehaviorAssaultWalls → BehaviorComponent. The surface is method-led (methods 6/8, properties 1/8), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/BehaviorAssaultWalls.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `BehaviorAssaultWalls` | `public BehaviorAssaultWalls(Formation formation) : base(formation)` | constructor |
| `GetBehaviorString` | `public override TextObject GetBehaviorString()` | method |
| `CalculateCurrentOrder` | `protected override void CalculateCurrentOrder()` | method |
| `OnValidBehaviorSideChanged` | `public override void OnValidBehaviorSideChanged()` | method |
| `TickOccasionally` | `public override void TickOccasionally()` | method |
| `OnBehaviorActivatedAux` | `protected override void OnBehaviorActivatedAux()` | method |
| `NavmeshlessTargetPositionPenalty` | `public override float NavmeshlessTargetPositionPenalty` | property |
| `GetAiWeight` | `protected override float GetAiWeight()` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface BehaviorComponent](../BehaviorComponent)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
