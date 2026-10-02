---
title: "CrimeModel"
description: "Auto-generated class reference for CrimeModel."
---
# CrimeModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class CrimeModel : MBGameModel<CrimeModel> `
**Base:** MBGameModel<CrimeModel>
**Source:** TaleWorlds.CampaignSystem/ComponentInterfaces/CrimeModel.cs

## Overview

Auto-generated stub for `CrimeModel`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### GetMaxCrimeRating
`public abstract float GetMaxCrimeRating()`

### GetMinAcceptableCrimeRating
`public abstract float GetMinAcceptableCrimeRating(IFaction faction)`

### GetCrimeRatingAfterPunishment
`public abstract float GetCrimeRatingAfterPunishment()`

### DoesPlayerHaveAnyCrimeRating
`public abstract bool DoesPlayerHaveAnyCrimeRating(IFaction faction)`

### IsPlayerCrimeRatingSevere
`public abstract bool IsPlayerCrimeRatingSevere(IFaction faction)`

### IsPlayerCrimeRatingModerate
`public abstract bool IsPlayerCrimeRatingModerate(IFaction faction)`

### IsPlayerCrimeRatingMild
`public abstract bool IsPlayerCrimeRatingMild(IFaction faction)`

### GetCost
`public abstract float GetCost(IFaction faction,CrimeModel.PaymentMethod paymentMethod,float minimumCrimeRating)`

### GetEffectiveCrimeChange
`public abstract ExplainedNumber GetEffectiveCrimeChange(IFaction faction,float deltaCrimeRating)`

### GetDailyCrimeRatingChange
`public abstract ExplainedNumber GetDailyCrimeRatingChange(IFaction faction,bool includeDescriptions = false)`

## See Also

- [Section index](../)
