---
title: "StandingPoint"
description: "StandingPoint 的自动生成类参考。"
---
# StandingPoint

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class StandingPoint : UsableMissionObject `
**Base:** UsableMissionObject
**Source:** TaleWorlds.MountAndBlade/StandingPoint.cs

## 概述

`StandingPoint` 的自动生成类参考页面。声明来自 `TaleWorlds.MountAndBlade/StandingPoint.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### OnInit
`protected internal override void OnInit() `

### OnParentMachinePhysicsStateChanged
`public void OnParentMachinePhysicsStateChanged() `

### IsDisabledForAgent
`public override bool IsDisabledForAgent(Agent agent) `

### GetTickRequirement
`public override ScriptComponentBehavior.TickRequirement GetTickRequirement() `

### OnTickParallel3
`protected internal override void OnTickParallel3(float dt) `

### OnTick
`protected internal override void OnTick(float dt) `

### DoesActionTypeStopUsingGameObject
`protected virtual bool DoesActionTypeStopUsingGameObject(Agent.ActionCodeType actionType) `

### OnUse
`public override void OnUse(Agent userAgent,sbyte agentBoneIndex) `

### OnUseStopped
`public override void OnUseStopped(Agent userAgent,bool isSuccessful,int preferenceIndex) `

### GetUserFrameForAgent
`public override WorldFrame GetUserFrameForAgent(Agent agent) `

### HasAlternative
`public virtual bool HasAlternative() `

### GetUsageScoreForAgent
`public virtual float GetUsageScoreForAgent(Agent agent) `
`public virtual float GetUsageScoreForAgent(ValueTuple<Agent,float> agentPair) `

### SetupOnUsingStoppedBehavior
`public void SetupOnUsingStoppedBehavior(bool autoAttach,Action<Agent,bool> action) `

### OnEndMission
`public override void OnEndMission() `

### IsUsableBySide
`protected internal virtual bool IsUsableBySide(BattleSideEnum side) `

### GetDescriptionText
`public override TextObject GetDescriptionText(WeakGameEntity gameEntity) `

### IsUsableByAgent
`public override bool IsUsableByAgent(Agent userAgent) `

### SetUsableByAIOnly
`public void SetUsableByAIOnly() `

### SetUsableByPlayerOnly
`public void SetUsableByPlayerOnly() `

### SetUsableByPlayerOrAI
`public void SetUsableByPlayerOrAI() `

## 参见

- [本区域目录](../)
- [API 参考](../../)
