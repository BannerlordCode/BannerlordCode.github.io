---
title: "TransposedLineFormation"
description: "TransposedLineFormation: a public class in TaleWorlds.MountAndBlade, inheriting LineFormation; 5 exposed members (2 methods, 2 properties, 0 fields). Source: TaleWorlds.MountAndBlade/TransposedLineFormation.cs."
---
# TransposedLineFormation

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class TransposedLineFormation : LineFormation`
**File:** `TaleWorlds.MountAndBlade/TransposedLineFormation.cs`

## Overview

TransposedLineFormation lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/TransposedLineFormation.cs. It is a public class, implementing/inheriting LineFormation; the inheritance chain is TransposedLineFormation → LineFormation → IFormationArrangement. It exposes 5 public/protected members: 2 methods, 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TransposedLineFormation is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain TransposedLineFormation → LineFormation → IFormationArrangement. The surface is method-led (methods 2/5, properties 2/5), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/TransposedLineFormation.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IntervalMultiplier` | `public override float IntervalMultiplier` | property |
| `DistanceMultiplier` | `public override float DistanceMultiplier` | property |
| `TransposedLineFormation` | `public TransposedLineFormation(IFormation owner) : base(owner, true)` | constructor |
| `Clone` | `public override IFormationArrangement Clone(IFormation formation)` | method |
| `RearrangeFrom` | `public override void RearrangeFrom(IFormationArrangement arrangement)` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface LineFormation](../LineFormation)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
