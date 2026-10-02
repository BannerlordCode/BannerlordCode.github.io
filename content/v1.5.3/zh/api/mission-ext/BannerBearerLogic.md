---
title: "BannerBearerLogic"
description: "BannerBearerLogic 的自动生成类参考。"
---
# BannerBearerLogic

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BannerBearerLogic : MissionLogic `
**Base:** MissionLogic
**Source:** TaleWorlds.MountAndBlade/BannerBearerLogic.cs

## 概述

`BannerBearerLogic` 的自动生成类参考页面。声明来自 `TaleWorlds.MountAndBlade/BannerBearerLogic.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### IsFormationBanner
`public bool IsFormationBanner(Formation formation,SpawnedItemEntity spawnedItem) `

### HasBannerOnGround
`public bool HasBannerOnGround(Formation formation) `

### GetActiveBanner
`public BannerComponent GetActiveBanner(Formation formation) `

### GetFormationBannerBearers
`public List<Agent> GetFormationBannerBearers(Formation formation) `

### GetFormationBanner
`public ItemObject GetFormationBanner(Formation formation) `

### IsBannerSearchingAgent
`public bool IsBannerSearchingAgent(Agent agent) `

### GetMissingBannerCount
`public int GetMissingBannerCount(Formation formation) `

### GetFormationFromBanner
`public Formation GetFormationFromBanner(SpawnedItemEntity spawnedItem) `

### SetFormationBanner
`public void SetFormationBanner(Formation formation,ItemObject newBanner) `

### OnBehaviorInitialize
`public override void OnBehaviorInitialize() `

### OnEndMission
`protected override void OnEndMission() `

### OnDeploymentFinished
`public override void OnDeploymentFinished() `

### OnMissionTick
`public override void OnMissionTick(float dt) `

### OnItemPickup
`public void OnItemPickup(Agent agent,SpawnedItemEntity spawnedItem) `

### OnItemDrop
`public void OnItemDrop(Agent agent,SpawnedItemEntity spawnedItem) `

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent,Agent affectorAgent,AgentState agentState,KillingBlow blow) `

### OnAgentPanicked
`public override void OnAgentPanicked(Agent affectedAgent) `

### UpdateAgent
`public void UpdateAgent(Agent agent,bool willBecomeBannerBearer) `

### SpawnBannerBearer
`public Agent SpawnBannerBearer(IAgentOriginBase troopOrigin,bool isPlayerSide,Formation formation,bool spawnWithHorse,bool isReinforcement,int formationTroopCount,int formationTroopIndex,bool isAlarmed,bool wieldInitialWeapons,Vec3? initialPosition,Vec2? initialDirection,string specialActionSetSuffix = null,bool useTroopClassForSpawn = false) `

### IsBannerItem
`public static bool IsBannerItem(ItemObject item) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
