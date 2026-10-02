---
title: "AlarmedBehaviorGroup"
description: "AlarmedBehaviorGroup 的自动生成类参考。"
---
# AlarmedBehaviorGroup

**Namespace:** SandBox.Missions.AgentBehaviors
**Module:** SandBox
**Type:** `public class AlarmedBehaviorGroup : AgentBehaviorGroup `
**Base:** AgentBehaviorGroup
**Source:** SandBox/Missions/AgentBehaviors/AlarmedBehaviorGroup.cs

## 概述

`AlarmedBehaviorGroup` 的自动生成类参考页面。声明来自 `SandBox/Missions/AgentBehaviors/AlarmedBehaviorGroup.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### SetCanMoveWhenCautious
`public void SetCanMoveWhenCautious(bool value) `

### GetVisualFactor
`public float GetVisualFactor(Vec3 usedGlobalLookDirection,Agent currentAgent,MBReadOnlyList<GameEntity> stealthIndoorLightingAreas,ref bool hasVisualOnCorpse,ref bool hasVisualOnEnemy) `

### ResetAlarmFactor
`public void ResetAlarmFactor() `

### AddAlarmFactor
`public void AddAlarmFactor(float addedAlarmFactor,in WorldPosition suspiciousPosition) `

### Tick
`public override void Tick(float dt,bool isSimulation) `

### GetScore
`public override float GetScore(bool isSimulation) `

### GetClosestAlarmSource
`public Agent GetClosestAlarmSource(out float distanceSquared) `

### AlarmAgent
`public static void AlarmAgent(Agent agent) `

### OnActivate
`protected override void OnActivate() `

### OnAgentRemoved
`public override void OnAgentRemoved(Agent agent) `

### OnDeactivate
`protected override void OnDeactivate() `

### ForceThink
`public override void ForceThink(float inSeconds) `

### ConversationTick
`public override void ConversationTick() `

## 参见

- [本区域目录](../)
- [API 参考](../../)
