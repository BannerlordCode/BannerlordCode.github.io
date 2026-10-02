---
title: "AlarmedBehaviorGroup"
description: "Auto-generated class reference for AlarmedBehaviorGroup."
---
# AlarmedBehaviorGroup

**Namespace:** SandBox.Missions.AgentBehaviors
**Module:** SandBox
**Type:** `public class AlarmedBehaviorGroup : AgentBehaviorGroup `
**Base:** AgentBehaviorGroup
**Source:** SandBox/Missions/AgentBehaviors/AlarmedBehaviorGroup.cs

## Overview

Auto-generated stub for `AlarmedBehaviorGroup`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### SetCanMoveWhenCautious
`public void SetCanMoveWhenCautious(bool value)`

### GetVisualFactor
`public float GetVisualFactor(Vec3 usedGlobalLookDirection,Agent currentAgent,MBReadOnlyList<GameEntity> stealthIndoorLightingAreas,ref bool hasVisualOnCorpse,ref bool hasVisualOnEnemy)`

### ResetAlarmFactor
`public void ResetAlarmFactor()`

### AddAlarmFactor
`public void AddAlarmFactor(float addedAlarmFactor,in WorldPosition suspiciousPosition)`

### Tick
`public override void Tick(float dt,bool isSimulation)`

### GetScore
`public override float GetScore(bool isSimulation)`

### GetClosestAlarmSource
`public Agent GetClosestAlarmSource(out float distanceSquared)`

### AlarmAgent
`public static void AlarmAgent(Agent agent)`

### OnActivate
`protected override void OnActivate()`

### OnAgentRemoved
`public override void OnAgentRemoved(Agent agent)`

### OnDeactivate
`protected override void OnDeactivate()`

### ForceThink
`public override void ForceThink(float inSeconds)`

### ConversationTick
`public override void ConversationTick()`

## See Also

- [Section index](../)
