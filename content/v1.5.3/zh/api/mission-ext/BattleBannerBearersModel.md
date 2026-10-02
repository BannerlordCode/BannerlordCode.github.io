---
title: "BattleBannerBearersModel"
description: "BattleBannerBearersModel 的自动生成类参考。"
---
# BattleBannerBearersModel

**Namespace:** TaleWorlds.MountAndBlade.ComponentInterfaces
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class BattleBannerBearersModel : MBGameModel<BattleBannerBearersModel> `
**Base:** MBGameModel<BattleBannerBearersModel>
**Source:** TaleWorlds.MountAndBlade/ComponentInterfaces/BattleBannerBearersModel.cs

## 概述

`BattleBannerBearersModel` 的自动生成类参考页面。声明来自 `TaleWorlds.MountAndBlade/ComponentInterfaces/BattleBannerBearersModel.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### InitializeModel
`public void InitializeModel(BannerBearerLogic bannerBearerLogic) `

### FinalizeModel
`public void FinalizeModel() `

### IsFormationBanner
`public bool IsFormationBanner(Formation formation,SpawnedItemEntity item) `

### IsBannerSearchingAgent
`public bool IsBannerSearchingAgent(Agent agent) `

### IsInteractableFormationBanner
`public bool IsInteractableFormationBanner(SpawnedItemEntity item,Agent interactingAgent) `

### HasFormationBanner
`public bool HasFormationBanner(Formation formation) `

### HasBannerOnGround
`public bool HasBannerOnGround(Formation formation) `

### GetFormationBanner
`public ItemObject GetFormationBanner(Formation formation) `

### GetFormationBannerBearers
`public List<Agent> GetFormationBannerBearers(Formation formation) `

### GetActiveBanner
`public BannerComponent GetActiveBanner(Formation formation) `

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

## 参见

- [本区域目录](../)
- [API 参考](../../)
