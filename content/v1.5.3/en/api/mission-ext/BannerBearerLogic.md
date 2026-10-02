---
title: "BannerBearerLogic"
description: "Auto-generated class reference for BannerBearerLogic."
---
# BannerBearerLogic

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BannerBearerLogic : MissionLogic `
**Base:** MissionLogic
**Source:** TaleWorlds.MountAndBlade/BannerBearerLogic.cs

## Overview

Auto-generated stub for `BannerBearerLogic`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### IsFormationBanner
`public bool IsFormationBanner(Formation formation,SpawnedItemEntity spawnedItem)`

### HasBannerOnGround
`public bool HasBannerOnGround(Formation formation)`

### GetActiveBanner
`public BannerComponent GetActiveBanner(Formation formation)`

### GetFormationBannerBearers
`public List<Agent> GetFormationBannerBearers(Formation formation)`

### GetFormationBanner
`public ItemObject GetFormationBanner(Formation formation)`

### IsBannerSearchingAgent
`public bool IsBannerSearchingAgent(Agent agent)`

### GetMissingBannerCount
`public int GetMissingBannerCount(Formation formation)`

### GetFormationFromBanner
`public Formation GetFormationFromBanner(SpawnedItemEntity spawnedItem)`

### SetFormationBanner
`public void SetFormationBanner(Formation formation,ItemObject newBanner)`

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

### OnEndMission
`protected override void OnEndMission()`

### OnDeploymentFinished
`public override void OnDeploymentFinished()`

### OnMissionTick
`public override void OnMissionTick(float dt)`

### OnItemPickup
`public void OnItemPickup(Agent agent,SpawnedItemEntity spawnedItem)`

### OnItemDrop
`public void OnItemDrop(Agent agent,SpawnedItemEntity spawnedItem)`

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent,Agent affectorAgent,AgentState agentState,KillingBlow blow)`

### OnAgentPanicked
`public override void OnAgentPanicked(Agent affectedAgent)`

### UpdateAgent
`public void UpdateAgent(Agent agent,bool willBecomeBannerBearer)`

### SpawnBannerBearer
`public Agent SpawnBannerBearer(IAgentOriginBase troopOrigin,bool isPlayerSide,Formation formation,bool spawnWithHorse,bool isReinforcement,int formationTroopCount,int formationTroopIndex,bool isAlarmed,bool wieldInitialWeapons,Vec3? initialPosition,Vec2? initialDirection,string specialActionSetSuffix = null,bool useTroopClassForSpawn = false)`

### IsBannerItem
`public static bool IsBannerItem(ItemObject item)`

## See Also

- [Section index](../)
