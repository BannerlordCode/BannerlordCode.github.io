---
title: "SpawningBehaviorBase"
description: "SpawningBehaviorBase 的自动生成类参考。"
---
# SpawningBehaviorBase

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class SpawningBehaviorBase `
**Base:** System.Object
**Source:** TaleWorlds.MountAndBlade/SpawningBehaviorBase.cs

## 概述

`SpawningBehaviorBase` 的自动生成类参考页面。声明来自 `TaleWorlds.MountAndBlade/SpawningBehaviorBase.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### Initialize
`public virtual void Initialize(SpawnComponent spawnComponent) `

### Clear
`public virtual void Clear() `

### OnTick
`public virtual void OnTick(float dt) `

### AreAgentsSpawning
`public bool AreAgentsSpawning() `

### ResetSpawnCounts
`protected void ResetSpawnCounts() `

### ResetSpawnTimers
`protected void ResetSpawnTimers() `

### RequestStartSpawnSession
`public virtual void RequestStartSpawnSession() `

### RequestStopSpawnSession
`public void RequestStopSpawnSession() `

### SetRemainingAgentsInvulnerable
`public void SetRemainingAgentsInvulnerable() `

### SpawnAgents
`protected abstract void SpawnAgents()`

### GetBodyProperties
`protected BodyProperties GetBodyProperties(MissionPeer missionPeer,BasicCultureObject cultureLimit) `

### SpawnBot
`protected void SpawnBot(Team agentTeam,BasicCultureObject cultureLimit) `

### CanUpdateSpawnEquipment
`public virtual bool CanUpdateSpawnEquipment(MissionPeer missionPeer) `

### ToggleUpdatingSpawnEquipment
`public void ToggleUpdatingSpawnEquipment(bool canUpdate) `

### AllowEarlyAgentVisualsDespawning
`public abstract bool AllowEarlyAgentVisualsDespawning(MissionPeer missionPeer)`

### GetMaximumReSpawnPeriodForPeer
`public virtual int GetMaximumReSpawnPeriodForPeer(MissionPeer peer) `

### IsRoundInProgress
`protected abstract bool IsRoundInProgress()`

### OnClearScene
`public virtual void OnClearScene() `

### OnAgentRemoved
`public void OnAgentRemoved(Agent affectedAgent,Agent affectorAgent,AgentState agentState,KillingBlow blow) `

### OnSpawningEndedEventDelegate
`public delegate void OnSpawningEndedEventDelegate()`

## 参见

- [本区域目录](../)
- [API 参考](../../)
