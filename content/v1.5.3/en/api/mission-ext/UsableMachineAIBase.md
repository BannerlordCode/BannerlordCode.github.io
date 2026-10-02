---
title: "UsableMachineAIBase"
description: "Auto-generated class reference for UsableMachineAIBase."
---
# UsableMachineAIBase

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class UsableMachineAIBase `
**Base:** System.Object
**Source:** TaleWorlds.MountAndBlade/UsableMachineAIBase.cs

## Overview

Auto-generated stub for `UsableMachineAIBase`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### GetScriptedFrameFlags
`protected internal virtual Agent.AIScriptedFrameFlags GetScriptedFrameFlags(Agent agent)`

### Tick
`public void Tick(Agent agentToCompareTo,Formation formationToCompareTo,Team potentialUsersTeam,float dt)`

### OnTick
`protected virtual void OnTick(Agent agentToCompareTo,Formation formationToCompareTo,Team potentialUsersTeam,float dt)`

### GetSuitableAgentForStandingPoint
`public static Agent GetSuitableAgentForStandingPoint(UsableMachine usableMachine,StandingPoint standingPoint,IEnumerable<Agent> agents,List<Agent> usedAgents)`

### TeleportUserAgentsToMachine
`public virtual void TeleportUserAgentsToMachine(List<Agent> agentList)`

### StopUsingStandingPoint
`public void StopUsingStandingPoint(StandingPoint standingPoint)`

### GetStopUsingStandingPointFlags
`protected Agent.StopUsingGameObjectFlags GetStopUsingStandingPointFlags(Agent agent,StandingPoint standingPoint)`

### HandleAgentStopUsingStandingPoint
`protected virtual void HandleAgentStopUsingStandingPoint(Agent agent,StandingPoint standingPoint)`

## See Also

- [Section index](../)
