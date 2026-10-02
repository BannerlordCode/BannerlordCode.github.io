---
title: "PassageAI"
description: "PassageAI: a public class in SandBox.AI, inheriting UsableMachineAIBase; 3 exposed members (2 methods, 0 properties, 0 fields). Canonical bucket sandbox. Source: SandBox/AI/PassageAI.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# PassageAI

**Namespace:** `SandBox.AI`
**Module:** `SandBox`
**Type:** `public class PassageAI : UsableMachineAIBase`
**File:** `SandBox/AI/PassageAI.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

PassageAI lives in the SandBox module, source file SandBox/AI/PassageAI.cs. It is a public class, implementing/inheriting UsableMachineAIBase; the inheritance chain is PassageAI → UsableMachineAIBase. It exposes 3 public/protected members: 2 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PassageAI lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.AI`, inheritance chain PassageAI → UsableMachineAIBase. The surface is method-led (methods 2/3, properties 0/3), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/AI/PassageAI.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `PassageAI` | `public PassageAI(UsableMachine usableMachine) : base(usableMachine)` | constructor |
| `GetScriptedFrameFlags` | `protected override Agent.AIScriptedFrameFlags GetScriptedFrameFlags(Agent agent)` | method |
| `OnTick` | `protected override void OnTick(Agent agentToCompareTo, Formation formationToCompareTo, Team potentialUsersTeam, float dt)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface UsableMachineAIBase](../../mission-ext/UsableMachineAIBase/)
- [same namespace AgentBehaviorManager](../AgentBehaviorManager/)
- [same namespace UsablePlaceAI](../UsablePlaceAI/)
