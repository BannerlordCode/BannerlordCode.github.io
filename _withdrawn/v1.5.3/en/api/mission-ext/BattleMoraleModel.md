---
title: "BattleMoraleModel"
description: "Auto-generated class reference for BattleMoraleModel."
---
# BattleMoraleModel

**Namespace:** TaleWorlds.MountAndBlade.ComponentInterfaces
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class BattleMoraleModel : MBGameModel<BattleMoraleModel> `
**Base:** MBGameModel<BattleMoraleModel>
**Source:** TaleWorlds.MountAndBlade/ComponentInterfaces/BattleMoraleModel.cs

## Overview

Auto-generated stub for `BattleMoraleModel`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

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

## See Also

- [Section index](../)
