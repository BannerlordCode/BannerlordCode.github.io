---
title: "SiegeTowerAI"
description: "SiegeTowerAI: a public class in TaleWorlds.MountAndBlade, inheriting UsableMachineAIBase; 3 exposed members (0 methods, 2 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/SiegeTowerAI.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SiegeTowerAI

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public sealed class SiegeTowerAI : UsableMachineAIBase`
**File:** `TaleWorlds.MountAndBlade/SiegeTowerAI.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

SiegeTowerAI lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/SiegeTowerAI.cs. It is a public class (sealed), implementing/inheriting UsableMachineAIBase; the inheritance chain is SiegeTowerAI → UsableMachineAIBase. It exposes 3 public/protected members: 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SiegeTowerAI lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain SiegeTowerAI → UsableMachineAIBase. The surface is property-led (properties 2/3, methods 0/3), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/SiegeTowerAI.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `SiegeTowerAI` | `public SiegeTowerAI(SiegeTower siegeTower) : base(siegeTower)` | constructor |
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
