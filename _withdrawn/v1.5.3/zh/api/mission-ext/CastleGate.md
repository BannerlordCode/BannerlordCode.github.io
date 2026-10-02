---
title: "CastleGate"
description: "CastleGate 的自动生成类参考。"
---
# CastleGate

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CastleGate : UsableMachine,IPointDefendable,ICastleKeyPosition,ITargetable `
**Base:** UsableMachine,IPointDefendable,ICastleKeyPosition,ITargetable
**Source:** TaleWorlds.MountAndBlade/CastleGate.cs

## 概述

`CastleGate` 的自动生成类参考页面。声明来自 `TaleWorlds.MountAndBlade/CastleGate.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### GetPosition
`public Vec3 GetPosition() `

### GetOrder
`public override OrderType GetOrder(BattleSideEnum side) `

### OnInit
`protected internal override void OnInit() `

### SetUsableTeam
`public void SetUsableTeam(Team team) `

### AfterMissionStart
`public override void AfterMissionStart() `

### OnRemoved
`protected override void OnRemoved(int removeReason) `

### OnEditorInit
`protected internal override void OnEditorInit() `

### OnMissionReset
`protected internal override void OnMissionReset() `

### GetDescriptionText
`public override TextObject GetDescriptionText(WeakGameEntity gameEntity) `

### GetActionTextForStandingPoint
`public override TextObject GetActionTextForStandingPoint(UsableMissionObject usableGameObject) `

### CreateAIBehaviorObject
`public override UsableMachineAIBase CreateAIBehaviorObject() `

### OpenDoorAndDisableGateForCivilianMission
`public void OpenDoorAndDisableGateForCivilianMission() `

### OpenDoor
`public void OpenDoor() `

### CloseDoor
`public void CloseDoor() `

### SetAutoOpenState
`public void SetAutoOpenState(bool isEnabled) `

### GetTickRequirement
`public override ScriptComponentBehavior.TickRequirement GetTickRequirement() `

### OnTick
`protected internal override void OnTick(float dt) `

### IsAgentOnInconvenientNavmesh
`protected override bool IsAgentOnInconvenientNavmesh(Agent agent,StandingPoint standingPoint) `

### GetTargetFlags
`public TargetFlags GetTargetFlags() `

### GetTargetValue
`public float GetTargetValue(List<Vec3> weaponPos) `

### GetTargetEntity
`public WeakGameEntity GetTargetEntity() `

### GetSide
`public BattleSideEnum GetSide() `

### GetTargetGlobalVelocity
`public Vec3 GetTargetGlobalVelocity() `

### IsDestructable
`public bool IsDestructable() `

### Entity
`public WeakGameEntity Entity() `

### ComputeGlobalPhysicsBoundingBoxMinMax
`public ValueTuple<Vec3,Vec3> ComputeGlobalPhysicsBoundingBoxMinMax() `

### CollectGameEntities
`protected void CollectGameEntities(bool calledFromOnInit) `

### OnNextDestructionState
`protected void OnNextDestructionState() `

### CollectDynamicGameEntities
`protected void CollectDynamicGameEntities(bool calledFromOnInit) `

### OnCheckForProblems
`protected internal override bool OnCheckForProblems() `

### GetTargetingOffset
`public Vec3 GetTargetingOffset() `

## 参见

- [本区域目录](../)
- [API 参考](../../)
