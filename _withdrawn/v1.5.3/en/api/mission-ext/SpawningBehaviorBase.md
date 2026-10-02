---
title: "SpawningBehaviorBase"
description: "Auto-generated class reference for SpawningBehaviorBase."
---
# SpawningBehaviorBase

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class SpawningBehaviorBase `
**Base:** System.Object
**Source:** TaleWorlds.MountAndBlade/SpawningBehaviorBase.cs

## Overview

Auto-generated stub for `SpawningBehaviorBase`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### Initialize
`public virtual void Initialize(SpawnComponent spawnComponent)`

### Clear
`public virtual void Clear()`

### OnTick
`public virtual void OnTick(float dt)`

### AreAgentsSpawning
`public bool AreAgentsSpawning()`

### ResetSpawnCounts
`protected void ResetSpawnCounts()`

### ResetSpawnTimers
`protected void ResetSpawnTimers()`

### RequestStartSpawnSession
`public virtual void RequestStartSpawnSession()`

### RequestStopSpawnSession
`public void RequestStopSpawnSession()`

### SetRemainingAgentsInvulnerable
`public void SetRemainingAgentsInvulnerable()`

### SpawnAgents
`protected abstract void SpawnAgents()`

### GetBodyProperties
`protected BodyProperties GetBodyProperties(MissionPeer missionPeer,BasicCultureObject cultureLimit)`

### SpawnBot
`protected void SpawnBot(Team agentTeam,BasicCultureObject cultureLimit)`

### CanUpdateSpawnEquipment
`public virtual bool CanUpdateSpawnEquipment(MissionPeer missionPeer)`

### ToggleUpdatingSpawnEquipment
`public void ToggleUpdatingSpawnEquipment(bool canUpdate)`

### AllowEarlyAgentVisualsDespawning
`public abstract bool AllowEarlyAgentVisualsDespawning(MissionPeer missionPeer)`

### GetMaximumReSpawnPeriodForPeer
`public virtual int GetMaximumReSpawnPeriodForPeer(MissionPeer peer)`

### IsRoundInProgress
`protected abstract bool IsRoundInProgress()`

### OnClearScene
`public virtual void OnClearScene()`

### OnAgentRemoved
`public void OnAgentRemoved(Agent affectedAgent,Agent affectorAgent,AgentState agentState,KillingBlow blow)`

### OnSpawningEndedEventDelegate
`public delegate void OnSpawningEndedEventDelegate()`

## See Also

- [Section index](../)
