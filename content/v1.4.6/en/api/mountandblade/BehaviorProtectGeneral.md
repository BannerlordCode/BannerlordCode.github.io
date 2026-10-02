---
title: "BehaviorProtectGeneral"
description: "BehaviorProtectGeneral: a public class in TaleWorlds.MountAndBlade, inheriting BehaviorComponent; 5 exposed members (3 methods, 1 properties, 0 fields). Source: TaleWorlds.MountAndBlade/BehaviorProtectGeneral.cs."
---
# BehaviorProtectGeneral

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class BehaviorProtectGeneral : BehaviorComponent`
**File:** `TaleWorlds.MountAndBlade/BehaviorProtectGeneral.cs`

## Overview

BehaviorProtectGeneral lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/BehaviorProtectGeneral.cs. It is a public class, implementing/inheriting BehaviorComponent; the inheritance chain is BehaviorProtectGeneral → BehaviorComponent. It exposes 5 public/protected members: 3 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BehaviorProtectGeneral is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain BehaviorProtectGeneral → BehaviorComponent. The surface is method-led (methods 3/5, properties 1/5), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/BehaviorProtectGeneral.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `BehaviorProtectGeneral` | `public BehaviorProtectGeneral(Formation formation) : base(formation)` | constructor |
| `TickOccasionally` | `public override void TickOccasionally()` | method |
| `NavmeshlessTargetPositionPenalty` | `public override float NavmeshlessTargetPositionPenalty` | property |
| `GetAiWeight` | `protected override float GetAiWeight()` | method |
| `OnAgentRemoved` | `public override void OnAgentRemoved(Agent agent)` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface BehaviorComponent](../BehaviorComponent)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
