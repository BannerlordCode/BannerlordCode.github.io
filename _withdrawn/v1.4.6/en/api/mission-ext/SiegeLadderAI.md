---
title: "SiegeLadderAI"
description: "SiegeLadderAI: a public class in TaleWorlds.MountAndBlade, inheriting UsableMachineAIBase; 4 exposed members (0 methods, 3 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/SiegeLadderAI.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SiegeLadderAI

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public sealed class SiegeLadderAI : UsableMachineAIBase`
**File:** `TaleWorlds.MountAndBlade/SiegeLadderAI.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

SiegeLadderAI lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/SiegeLadderAI.cs. It is a public class (sealed), implementing/inheriting UsableMachineAIBase; the inheritance chain is SiegeLadderAI → UsableMachineAIBase. It exposes 4 public/protected members: 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SiegeLadderAI lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain SiegeLadderAI → UsableMachineAIBase. The surface is property-led (properties 3/4, methods 0/4), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/SiegeLadderAI.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `SiegeLadderAI` | `public SiegeLadderAI(SiegeLadder ladder) : base(ladder)` | constructor |
| `Ladder` | `public SiegeLadder Ladder` | property |
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
