---
title: "SettlementAccessModel"
description: "Auto-generated class reference for SettlementAccessModel."
---
# SettlementAccessModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class SettlementAccessModel : MBGameModel<SettlementAccessModel> `
**Base:** MBGameModel<SettlementAccessModel>
**Source:** TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementAccessModel.cs

## Overview

Auto-generated stub for `SettlementAccessModel`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### CanMainHeroEnterSettlement
`public abstract void CanMainHeroEnterSettlement(Settlement settlement,out SettlementAccessModel.AccessDetails accessDetails)`

### CanMainHeroEnterLordsHall
`public abstract void CanMainHeroEnterLordsHall(Settlement settlement,out SettlementAccessModel.AccessDetails accessDetails)`

### CanMainHeroEnterDungeon
`public abstract void CanMainHeroEnterDungeon(Settlement settlement,out SettlementAccessModel.AccessDetails accessDetails)`

### CanMainHeroAccessLocation
`public abstract bool CanMainHeroAccessLocation(Settlement settlement,string locationId,out bool disableOption,out TextObject disabledText)`

### CanMainHeroDoSettlementAction
`public abstract bool CanMainHeroDoSettlementAction(Settlement settlement,SettlementAccessModel.SettlementAction settlementAction,out bool disableOption,out TextObject disabledText)`

### IsRequestMeetingOptionAvailable
`public abstract bool IsRequestMeetingOptionAvailable(Settlement settlement,out bool disableOption,out TextObject disabledText)`

## See Also

- [Section index](../)
