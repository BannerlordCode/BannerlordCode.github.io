---
title: "CustomBattleMoraleModel"
description: "CustomBattleMoraleModel 的自动生成类参考。"
---
# CustomBattleMoraleModel

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CustomBattleMoraleModel : BattleMoraleModel `
**Base:** BattleMoraleModel
**Source:** TaleWorlds.MountAndBlade/CustomBattleMoraleModel.cs

## 概述

`CustomBattleMoraleModel` 的自动生成类参考页面。声明来自 `TaleWorlds.MountAndBlade/CustomBattleMoraleModel.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### CalculateMaxMoraleChangeDueToAgentIncapacitated
`public override ValueTuple<float,float> CalculateMaxMoraleChangeDueToAgentIncapacitated(Agent affectedAgent,AgentState affectedAgentState,Agent affectorAgent,in KillingBlow killingBlow) `

### CalculateMaxMoraleChangeDueToAgentPanicked
`public override ValueTuple<float,float> CalculateMaxMoraleChangeDueToAgentPanicked(Agent agent) `

### CalculateMoraleChangeToCharacter
`public override float CalculateMoraleChangeToCharacter(Agent agent,float maxMoraleChange) `

### GetEffectiveInitialMorale
`public override float GetEffectiveInitialMorale(Agent agent,float baseMorale) `

### CanPanicDueToMorale
`public override bool CanPanicDueToMorale(Agent agent) `

### CalculateCasualtiesFactor
`public override float CalculateCasualtiesFactor(BattleSideEnum battleSide) `

### GetAverageMorale
`public override float GetAverageMorale(Formation formation) `

### CalculateMoraleChangeOnShipSunk
`public override float CalculateMoraleChangeOnShipSunk(IShipOrigin shipOrigin) `

### CalculateMoraleOnRamming
`public override float CalculateMoraleOnRamming(Agent agent,IShipOrigin rammingShip,IShipOrigin rammedShip) `

### CalculateMoraleOnShipsConnected
`public override float CalculateMoraleOnShipsConnected(Agent agent,IShipOrigin ownerShip,IShipOrigin targetShip) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
