---
title: "IAgentStateDecider"
description: "IAgentStateDecider: a public interface in TaleWorlds.MountAndBlade, inheriting IMissionBehavior; 1 exposed members (1 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade/IAgentStateDecider.cs."
---
# IAgentStateDecider

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public interface IAgentStateDecider : IMissionBehavior`
**File:** `TaleWorlds.MountAndBlade/IAgentStateDecider.cs`

## Overview

IAgentStateDecider lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/IAgentStateDecider.cs. It is a public interface, implementing/inheriting IMissionBehavior; the inheritance chain is IAgentStateDecider → IMissionBehavior. It exposes 1 public/protected members: 1 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: IAgentStateDecider is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain IAgentStateDecider → IMissionBehavior. The surface is method-led (methods 1/1, properties 0/1), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/IAgentStateDecider.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetAgentState` | `AgentState GetAgentState(Agent affectedAgent, float deathProbability, out bool usedSurgery);` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface IMissionBehavior](../IMissionBehavior)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
