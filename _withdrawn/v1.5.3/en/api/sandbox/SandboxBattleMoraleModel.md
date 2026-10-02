---
title: "SandboxBattleMoraleModel"
description: "Auto-generated class reference for SandboxBattleMoraleModel."
---
# SandboxBattleMoraleModel

**Namespace:** SandBox.GameComponents
**Module:** SandBox
**Type:** `public class SandboxBattleMoraleModel : BattleMoraleModel `
**Base:** BattleMoraleModel
**Source:** SandBox/GameComponents/SandboxBattleMoraleModel.cs

## Overview

Auto-generated stub for `SandboxBattleMoraleModel`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### CalculateMaxMoraleChangeDueToAgentIncapacitated
`public override ValueTuple<float,float> CalculateMaxMoraleChangeDueToAgentIncapacitated(Agent affectedAgent,AgentState affectedAgentState,Agent affectorAgent,in KillingBlow killingBlow)`

### CalculateMaxMoraleChangeDueToAgentPanicked
`public override ValueTuple<float,float> CalculateMaxMoraleChangeDueToAgentPanicked(Agent agent)`

### GetEffectiveInitialMorale
`public override float GetEffectiveInitialMorale(Agent agent,float baseMorale)`

### CalculateMoraleChangeToCharacter
`public override float CalculateMoraleChangeToCharacter(Agent agent,float maxMoraleChange)`

### CanPanicDueToMorale
`public override bool CanPanicDueToMorale(Agent agent)`

### CalculateCasualtiesFactor
`public override float CalculateCasualtiesFactor(BattleSideEnum battleSide)`

### GetAverageMorale
`public override float GetAverageMorale(Formation formation)`

### CalculateMoraleChangeOnShipSunk
`public override float CalculateMoraleChangeOnShipSunk(IShipOrigin shipOrigin)`

### CalculateMoraleOnRamming
`public override float CalculateMoraleOnRamming(Agent agent,IShipOrigin rammingShip,IShipOrigin rammedShip)`

### CalculateMaxMoraleChangeDueToAgentIncapacitatedExplained
`public static ValueTuple<ExplainedNumber,ExplainedNumber> CalculateMaxMoraleChangeDueToAgentIncapacitatedExplained(Agent affectedAgent,AgentState affectedAgentState,Agent affectorAgent,in KillingBlow killingBlow,float casualtiesFactor)`

### CalculateMoraleOnShipsConnected
`public override float CalculateMoraleOnShipsConnected(Agent agent,IShipOrigin ownerShip,IShipOrigin targetShip)`

### GetEffectiveInitialMoraleExplained
`public static ExplainedNumber GetEffectiveInitialMoraleExplained(Agent agent,float baseMorale)`

## See Also

- [Section index](../)
