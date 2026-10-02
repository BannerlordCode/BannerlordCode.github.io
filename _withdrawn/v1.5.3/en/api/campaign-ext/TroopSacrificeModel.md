---
title: "TroopSacrificeModel"
description: "Auto-generated class reference for TroopSacrificeModel."
---
# TroopSacrificeModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class TroopSacrificeModel : MBGameModel<TroopSacrificeModel> `
**Base:** MBGameModel<TroopSacrificeModel>
**Source:** TaleWorlds.CampaignSystem/ComponentInterfaces/TroopSacrificeModel.cs

## Overview

Auto-generated stub for `TroopSacrificeModel`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### GetLostTroopCountForBreakingInBesiegedSettlement
`public abstract ExplainedNumber GetLostTroopCountForBreakingInBesiegedSettlement(MobileParty party,SiegeEvent siegeEvent)`

### GetLostTroopCountForBreakingOutOfBesiegedSettlement
`public abstract ExplainedNumber GetLostTroopCountForBreakingOutOfBesiegedSettlement(MobileParty party,SiegeEvent siegeEvent,bool isBreakingOutFromPort)`

### GetNumberOfTroopsSacrificedForTryingToGetAway
`public abstract int GetNumberOfTroopsSacrificedForTryingToGetAway(BattleSideEnum playerBattleSide,MapEvent mapEvent)`

### GetShipsToSacrificeForTryingToGetAway
`public abstract void GetShipsToSacrificeForTryingToGetAway(BattleSideEnum playerBattleSide,MapEvent mapEvent,out MBList<Ship> shipsToCapture,out Ship shipToTakeDamage,out float damageToApplyForLastShip)`

### CanPlayerGetAwayFromEncounter
`public abstract bool CanPlayerGetAwayFromEncounter(out TextObject explanation)`

## See Also

- [Section index](../)
