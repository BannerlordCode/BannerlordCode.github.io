---
title: "SkeinFormation"
description: "SkeinFormation: a public class in TaleWorlds.MountAndBlade, inheriting LineFormation; 5 exposed members (4 methods, 0 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/SkeinFormation.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SkeinFormation

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class SkeinFormation : LineFormation`
**File:** `TaleWorlds.MountAndBlade/SkeinFormation.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

SkeinFormation lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/SkeinFormation.cs. It is a public class, implementing/inheriting LineFormation; the inheritance chain is SkeinFormation → LineFormation → IFormationArrangement. It exposes 5 public/protected members: 4 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SkeinFormation lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain SkeinFormation → LineFormation → IFormationArrangement. The surface is method-led (methods 4/5, properties 0/5), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/SkeinFormation.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `SkeinFormation` | `public SkeinFormation(IFormation owner) : base(owner, true)` | constructor |
| `Clone` | `public override IFormationArrangement Clone(IFormation formation)` | method |
| `GetLocalPositionOfUnit` | `protected override Vec2 GetLocalPositionOfUnit(int fileIndex, int rankIndex)` | method |
| `GetLocalPositionOfUnitWithAdjustment` | `protected override Vec2 GetLocalPositionOfUnitWithAdjustment(int fileIndex, int rankIndex, float distanceBetweenAgentsAdjustment)` | method |
| `TryGetUnitPositionIndexFromLocalPosition` | `protected override bool TryGetUnitPositionIndexFromLocalPosition(Vec2 localPosition, out int fileIndex, out int rankIndex)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface LineFormation](../LineFormation/)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
