---
title: "BattleBannerBearersModel"
description: "Auto-generated class reference for BattleBannerBearersModel."
---
# BattleBannerBearersModel

**Namespace:** TaleWorlds.MountAndBlade.ComponentInterfaces
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class BattleBannerBearersModel : MBGameModel<BattleBannerBearersModel> `
**Base:** MBGameModel<BattleBannerBearersModel>
**Source:** TaleWorlds.MountAndBlade/ComponentInterfaces/BattleBannerBearersModel.cs

## Overview

Auto-generated stub for `BattleBannerBearersModel`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### InitializeModel
`public void InitializeModel(BannerBearerLogic bannerBearerLogic)`

### FinalizeModel
`public void FinalizeModel()`

### IsFormationBanner
`public bool IsFormationBanner(Formation formation,SpawnedItemEntity item)`

### IsBannerSearchingAgent
`public bool IsBannerSearchingAgent(Agent agent)`

### IsInteractableFormationBanner
`public bool IsInteractableFormationBanner(SpawnedItemEntity item,Agent interactingAgent)`

### HasFormationBanner
`public bool HasFormationBanner(Formation formation)`

### HasBannerOnGround
`public bool HasBannerOnGround(Formation formation)`

### GetFormationBanner
`public ItemObject GetFormationBanner(Formation formation)`

### GetFormationBannerBearers
`public List<Agent> GetFormationBannerBearers(Formation formation)`

### GetActiveBanner
`public BannerComponent GetActiveBanner(Formation formation)`

### GetMinimumFormationTroopCountToBearBanners
`public abstract int GetMinimumFormationTroopCountToBearBanners()`

### GetBannerInteractionDistance
`public abstract float GetBannerInteractionDistance(Agent interactingAgent)`

### CanBannerBearerProvideEffectToFormation
`public abstract bool CanBannerBearerProvideEffectToFormation(Agent agent,Formation formation)`

### CanAgentPickUpAnyBanner
`public abstract bool CanAgentPickUpAnyBanner(Agent agent)`

### CanAgentBecomeBannerBearer
`public abstract bool CanAgentBecomeBannerBearer(Agent agent)`

### GetAgentBannerBearingPriority
`public abstract int GetAgentBannerBearingPriority(Agent agent)`

### CanFormationDeployBannerBearers
`public abstract bool CanFormationDeployBannerBearers(Formation formation)`

### GetDesiredNumberOfBannerBearersForFormation
`public abstract int GetDesiredNumberOfBannerBearersForFormation(Formation formation)`

### GetBannerBearerReplacementWeapon
`public abstract ItemObject GetBannerBearerReplacementWeapon(BasicCharacterObject agentCharacter)`

## See Also

- [Section index](../)
