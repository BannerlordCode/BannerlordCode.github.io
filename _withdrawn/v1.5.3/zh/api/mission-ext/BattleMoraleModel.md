---
title: "BattleMoraleModel"
description: "BattleMoraleModel 的自动生成类参考。"
---
# BattleMoraleModel

**Namespace:** TaleWorlds.MountAndBlade.ComponentInterfaces
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class BattleMoraleModel : MBGameModel<BattleMoraleModel> `
**Base:** MBGameModel<BattleMoraleModel>
**Source:** TaleWorlds.MountAndBlade/ComponentInterfaces/BattleMoraleModel.cs

## 概述

`BattleMoraleModel` 的自动生成类参考页面。声明来自 `TaleWorlds.MountAndBlade/ComponentInterfaces/BattleMoraleModel.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### CalculateMaxMoraleChangeDueToAgentIncapacitated
`public abstract ValueTuple<float,float> CalculateMaxMoraleChangeDueToAgentIncapacitated(Agent affectedAgent,AgentState affectedAgentState,Agent affectorAgent,in KillingBlow killingBlow)`

### CalculateMaxMoraleChangeDueToAgentPanicked
`public abstract ValueTuple<float,float> CalculateMaxMoraleChangeDueToAgentPanicked(Agent agent)`

### CalculateMoraleChangeToCharacter
`public abstract float CalculateMoraleChangeToCharacter(Agent agent,float maxMoraleChange)`

### GetEffectiveInitialMorale
`public abstract float GetEffectiveInitialMorale(Agent agent,float baseMorale)`

### CanPanicDueToMorale
`public abstract bool CanPanicDueToMorale(Agent agent)`

### CalculateCasualtiesFactor
`public abstract float CalculateCasualtiesFactor(BattleSideEnum battleSide)`

### GetAverageMorale
`public abstract float GetAverageMorale(Formation formation)`

### CalculateMoraleChangeOnShipSunk
`public abstract float CalculateMoraleChangeOnShipSunk(IShipOrigin shipOrigin)`

### CalculateMoraleOnRamming
`public abstract float CalculateMoraleOnRamming(Agent agent,IShipOrigin rammingShip,IShipOrigin rammedShip)`

### CalculateMoraleOnShipsConnected
`public abstract float CalculateMoraleOnShipsConnected(Agent agent,IShipOrigin ownerShip,IShipOrigin targetShip)`

## 参见

- [本区域目录](../)
- [API 参考](../../)
