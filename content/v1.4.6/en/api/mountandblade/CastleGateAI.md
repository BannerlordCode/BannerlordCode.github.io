---
title: "CastleGateAI"
description: "CastleGateAI: a public class in TaleWorlds.MountAndBlade, inheriting UsableMachineAIBase; 3 exposed members (1 methods, 1 properties, 0 fields). Source: TaleWorlds.MountAndBlade/CastleGateAI.cs."
---
# CastleGateAI

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class CastleGateAI : UsableMachineAIBase`
**File:** `TaleWorlds.MountAndBlade/CastleGateAI.cs`

## Overview

CastleGateAI lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/CastleGateAI.cs. It is a public class, implementing/inheriting UsableMachineAIBase; the inheritance chain is CastleGateAI → UsableMachineAIBase. It exposes 3 public/protected members: 1 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CastleGateAI is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain CastleGateAI → UsableMachineAIBase. The surface is method-led (methods 1/3, properties 1/3), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/CastleGateAI.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ResetInitialGateState` | `public void ResetInitialGateState(CastleGate.GateState newInitialState)` | method |
| `CastleGateAI` | `public CastleGateAI(CastleGate gate) : base(gate)` | constructor |
| `HasActionCompleted` | `public override bool HasActionCompleted` | property |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface UsableMachineAIBase](../UsableMachineAIBase)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
