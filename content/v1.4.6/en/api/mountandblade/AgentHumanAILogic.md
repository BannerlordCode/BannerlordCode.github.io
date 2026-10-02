---
title: "AgentHumanAILogic"
description: "AgentHumanAILogic: a public class in TaleWorlds.MountAndBlade, inheriting MissionLogic; 3 exposed members (3 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade/AgentHumanAILogic.cs."
---
# AgentHumanAILogic

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class AgentHumanAILogic : MissionLogic`
**File:** `TaleWorlds.MountAndBlade/AgentHumanAILogic.cs`

## Overview

AgentHumanAILogic lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/AgentHumanAILogic.cs. It is a public class, implementing/inheriting MissionLogic; the inheritance chain is AgentHumanAILogic → MissionLogic → MissionBehavior → IMissionBehavior. It exposes 3 public/protected members: 3 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: AgentHumanAILogic is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain AgentHumanAILogic → MissionLogic → MissionBehavior → IMissionBehavior. The surface is method-led (methods 3/3, properties 0/3), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/AgentHumanAILogic.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnAgentCreated` | `public override void OnAgentCreated(Agent agent)` | method |
| `OnAgentControllerChanged` | `protected internal override void OnAgentControllerChanged(Agent agent, AgentControllerType oldController)` | method |
| `OnAgentMount` | `public override void OnAgentMount(Agent agent)` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface MissionLogic](../MissionLogic)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
