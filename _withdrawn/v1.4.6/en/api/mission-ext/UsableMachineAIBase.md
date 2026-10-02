---
title: "UsableMachineAIBase"
description: "UsableMachineAIBase: a public class in TaleWorlds.MountAndBlade; 12 exposed members (9 methods, 2 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/UsableMachineAIBase.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# UsableMachineAIBase

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public abstract class UsableMachineAIBase`
**File:** `TaleWorlds.MountAndBlade/UsableMachineAIBase.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

UsableMachineAIBase lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/UsableMachineAIBase.cs. It is a public class (abstract); the inheritance chain is UsableMachineAIBase. It exposes 12 public/protected members: 9 methods, 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: UsableMachineAIBase lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain UsableMachineAIBase. The surface is method-led (methods 9/12, properties 2/12), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/UsableMachineAIBase.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `UsableMachineAIBase` | `protected UsableMachineAIBase(UsableMachine usableMachine)` | constructor |
| `HasActionCompleted` | `public virtual bool HasActionCompleted` | property |
| `GetScriptedFrameFlags` | `protected internal virtual Agent.AIScriptedFrameFlags GetScriptedFrameFlags(Agent agent)` | method |
| `Tick` | `public void Tick(Agent agentToCompareTo, Formation formationToCompareTo, Team potentialUsersTeam, float dt)` | method |
| `OnTick` | `protected virtual void OnTick(Agent agentToCompareTo, Formation formationToCompareTo, Team potentialUsersTeam, float dt)` | method |
| `GetSuitableAgentForStandingPoint` | `public static Agent GetSuitableAgentForStandingPoint(UsableMachine usableMachine, StandingPoint standingPoint, IEnumerable<Agent>agents, List<Agent>usedAgents)` | method |
| `GetSuitableAgentForStandingPoint` | `public static Agent GetSuitableAgentForStandingPoint(UsableMachine usableMachine, StandingPoint standingPoint, List<ValueTuple<Agent, float>>agents, List<Agent>usedAgents, float weight)` | method |
| `NextOrder` | `protected virtual MovementOrder NextOrder` | property |
| `TeleportUserAgentsToMachine` | `public virtual void TeleportUserAgentsToMachine(List<Agent>agentList)` | method |
| `StopUsingStandingPoint` | `public void StopUsingStandingPoint(StandingPoint standingPoint)` | method |
| `GetStopUsingStandingPointFlags` | `protected Agent.StopUsingGameObjectFlags GetStopUsingStandingPointFlags(Agent agent, StandingPoint standingPoint)` | method |
| `HandleAgentStopUsingStandingPoint` | `protected virtual void HandleAgentStopUsingStandingPoint(Agent agent, StandingPoint standingPoint)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
