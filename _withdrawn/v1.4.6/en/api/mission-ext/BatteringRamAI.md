---
title: "BatteringRamAI"
description: "BatteringRamAI: a public class in TaleWorlds.MountAndBlade, inheriting UsableMachineAIBase; 3 exposed members (0 methods, 2 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/BatteringRamAI.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# BatteringRamAI

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public sealed class BatteringRamAI : UsableMachineAIBase`
**File:** `TaleWorlds.MountAndBlade/BatteringRamAI.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

BatteringRamAI lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/BatteringRamAI.cs. It is a public class (sealed), implementing/inheriting UsableMachineAIBase; the inheritance chain is BatteringRamAI → UsableMachineAIBase. It exposes 3 public/protected members: 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BatteringRamAI lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain BatteringRamAI → UsableMachineAIBase. The surface is property-led (properties 2/3, methods 0/3), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/BatteringRamAI.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `BatteringRamAI` | `public BatteringRamAI(BatteringRam batteringRam) : base(batteringRam)` | constructor |
| `HasActionCompleted` | `public override bool HasActionCompleted` | property |
| `NextOrder` | `protected override MovementOrder NextOrder` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface UsableMachineAIBase](../UsableMachineAIBase/)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
