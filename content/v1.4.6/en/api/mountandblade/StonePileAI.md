---
title: "StonePileAI"
description: "StonePileAI: a public class in TaleWorlds.MountAndBlade, inheriting UsableMachineAIBase; 5 exposed members (4 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade/StonePileAI.cs."
---
# StonePileAI

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class StonePileAI : UsableMachineAIBase`
**File:** `TaleWorlds.MountAndBlade/StonePileAI.cs`

## Overview

StonePileAI lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/StonePileAI.cs. It is a public class, implementing/inheriting UsableMachineAIBase; the inheritance chain is StonePileAI → UsableMachineAIBase. It exposes 5 public/protected members: 4 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: StonePileAI is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain StonePileAI → UsableMachineAIBase. The surface is method-led (methods 4/5, properties 0/5), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/StonePileAI.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `StonePileAI` | `public StonePileAI(StonePile stonePile) : base(stonePile)` | constructor |
| `GetSuitableAgentForStandingPoint` | `public static Agent GetSuitableAgentForStandingPoint(StonePile usableMachine, StandingPoint standingPoint, List<Agent>agents, List<Agent>usedAgents)` | method |
| `GetSuitableAgentForStandingPoint` | `public static Agent GetSuitableAgentForStandingPoint(StonePile stonePile, StandingPoint standingPoint, List<ValueTuple<Agent, float>>agents, List<Agent>usedAgents, float weight)` | method |
| `IsAgentAssignable` | `public static bool IsAgentAssignable(Agent agent)` | method |
| `HandleAgentStopUsingStandingPoint` | `protected override void HandleAgentStopUsingStandingPoint(Agent agent, StandingPoint standingPoint)` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface UsableMachineAIBase](../UsableMachineAIBase)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
