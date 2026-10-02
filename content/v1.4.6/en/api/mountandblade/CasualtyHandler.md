---
title: "CasualtyHandler"
description: "CasualtyHandler: a public class in TaleWorlds.MountAndBlade, inheriting MissionLogic; 4 exposed members (4 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade/CasualtyHandler.cs."
---
# CasualtyHandler

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class CasualtyHandler : MissionLogic`
**File:** `TaleWorlds.MountAndBlade/CasualtyHandler.cs`

## Overview

CasualtyHandler lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/CasualtyHandler.cs. It is a public class, implementing/inheriting MissionLogic; the inheritance chain is CasualtyHandler → MissionLogic → MissionBehavior → IMissionBehavior. It exposes 4 public/protected members: 4 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CasualtyHandler is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain CasualtyHandler → MissionLogic → MissionBehavior → IMissionBehavior. The surface is method-led (methods 4/4, properties 0/4), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/CasualtyHandler.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnAgentRemoved` | `public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)` | method |
| `OnAgentFleeing` | `public override void OnAgentFleeing(Agent affectedAgent)` | method |
| `GetCasualtyCountOfFormation` | `public int GetCasualtyCountOfFormation(Formation formation)` | method |
| `GetCasualtyPowerLossOfFormation` | `public float GetCasualtyPowerLossOfFormation(Formation formation)` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface MissionLogic](../MissionLogic)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
