---
title: "StonePile"
description: "StonePile 的自动生成类参考。"
---
# StonePile

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class StonePile : UsableMachine,IDetachment `
**Base:** UsableMachine,IDetachment
**Source:** TaleWorlds.MountAndBlade/StonePile.cs

## 概述

`StonePile` 的自动生成类参考页面。声明来自 `TaleWorlds.MountAndBlade/StonePile.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### ConsumeAmmo
`protected void ConsumeAmmo() `

### SetAmmo
`public void SetAmmo(int ammoLeft) `

### CheckAmmo
`protected virtual void CheckAmmo() `

### OnInit
`protected internal override void OnInit() `

### OnMissionReset
`protected internal override void OnMissionReset() `

### AfterMissionStart
`public override void AfterMissionStart() `

### GetActionTextForStandingPoint
`public override TextObject GetActionTextForStandingPoint(UsableMissionObject usableGameObject) `

### GetDescriptionText
`public override TextObject GetDescriptionText(WeakGameEntity gameEntity) `

### CreateAIBehaviorObject
`public override UsableMachineAIBase CreateAIBehaviorObject() `

### IsInRangeToCheckAlternativePoints
`public override bool IsInRangeToCheckAlternativePoints(Agent agent) `

### GetBestPointAlternativeTo
`public override StandingPoint GetBestPointAlternativeTo(StandingPoint standingPoint,Agent agent) `

### GetTickRequirement
`public override ScriptComponentBehavior.TickRequirement GetTickRequirement() `

### OnTick
`protected internal override void OnTick(float dt) `

### WriteToNetwork
`public override void WriteToNetwork() `

### GetSuitableStandingPointFor
`protected override StandingPoint GetSuitableStandingPointFor(BattleSideEnum side,Agent agent = null,List<Agent> agents = null,List<ValueTuple<Agent,float>> agentValuePairs = null) `

### GetDetachmentWeightAux
`protected override float GetDetachmentWeightAux(BattleSideEnum side) `

### UpdateAmmoMesh
`protected virtual void UpdateAmmoMesh() `

## 参见

- [本区域目录](../)
- [API 参考](../../)
