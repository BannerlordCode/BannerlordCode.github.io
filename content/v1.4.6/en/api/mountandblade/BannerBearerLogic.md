---
title: "BannerBearerLogic"
description: "BannerBearerLogic: a public class in TaleWorlds.MountAndBlade, inheriting MissionLogic; 28 exposed members (20 methods, 1 properties, 2 fields). Source: TaleWorlds.MountAndBlade/BannerBearerLogic.cs."
---
# BannerBearerLogic

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class BannerBearerLogic : MissionLogic`
**File:** `TaleWorlds.MountAndBlade/BannerBearerLogic.cs`

## Overview

BannerBearerLogic lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/BannerBearerLogic.cs. It is a public class, implementing/inheriting MissionLogic; the inheritance chain is BannerBearerLogic → MissionLogic → MissionBehavior → IMissionBehavior. It exposes 28 public/protected members: 20 methods, 1 properties, 2 fields, 2 events, 1 constructors, 2 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BannerBearerLogic is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain BannerBearerLogic → MissionLogic → MissionBehavior → IMissionBehavior. The surface is method-led (methods 20/28, properties 1/28), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/BannerBearerLogic.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Action` | `public event Action<Formation>OnBannerBearersUpdated;` | event |
| `bool>OnBannerBearerAgentUpdated;` | `public event Action<Agent, bool>OnBannerBearerAgentUpdated;` | event |
| `BannerBearerLogic` | `public BannerBearerLogic()` | constructor |
| `AgentSpawnLogic` | `public IMissionAgentSpawnLogic AgentSpawnLogic` | property |
| `IsFormationBanner` | `public bool IsFormationBanner(Formation formation, SpawnedItemEntity spawnedItem)` | method |
| `HasBannerOnGround` | `public bool HasBannerOnGround(Formation formation)` | method |
| `GetActiveBanner` | `public BannerComponent GetActiveBanner(Formation formation)` | method |
| `List` | `public List<Agent>GetFormationBannerBearers(Formation formation)` | method |
| `GetFormationBanner` | `public ItemObject GetFormationBanner(Formation formation)` | method |
| `IsBannerSearchingAgent` | `public bool IsBannerSearchingAgent(Agent agent)` | method |
| `GetMissingBannerCount` | `public int GetMissingBannerCount(Formation formation)` | method |
| `GetFormationFromBanner` | `public Formation GetFormationFromBanner(SpawnedItemEntity spawnedItem)` | method |
| `SetFormationBanner` | `public void SetFormationBanner(Formation formation, ItemObject newBanner)` | method |
| `OnBehaviorInitialize` | `public override void OnBehaviorInitialize()` | method |
| `OnEndMission` | `protected override void OnEndMission()` | method |
| `OnDeploymentFinished` | `public override void OnDeploymentFinished()` | method |
| `OnMissionTick` | `public override void OnMissionTick(float dt)` | method |
| `OnItemPickup` | `public void OnItemPickup(Agent agent, SpawnedItemEntity spawnedItem)` | method |
| `OnItemDrop` | `public void OnItemDrop(Agent agent, SpawnedItemEntity spawnedItem)` | method |
| `OnAgentRemoved` | `public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)` | method |
| `OnAgentPanicked` | `public override void OnAgentPanicked(Agent affectedAgent)` | method |
| `UpdateAgent` | `public void UpdateAgent(Agent agent, bool willBecomeBannerBearer)` | method |
| `SpawnBannerBearer` | `public Agent SpawnBannerBearer(IAgentOriginBase troopOrigin, bool isPlayerSide, Formation formation, bool spawnWithHorse, bool isReinforcement, int formationTroopCount, int formationTroopIndex, bool isAlarmed, bool wieldInitialWeapons, Vec3? initialPosition, Vec2? initialDirection, string specialActionSetSuffix = null, bool useTroopClassForSpawn = false)` | method |
| `IsBannerItem` | `public static bool IsBannerItem(ItemObject item)` | method |
| `DefaultBannerBearerAgentDefensiveness` | `public const float DefaultBannerBearerAgentDefensiveness` | field |
| `BannerSearcherUpdatePeriod` | `public const float BannerSearcherUpdatePeriod` | field |
| `BannerState` | `public enum BannerState` | nested type |
| `BannerInstance` | `public struct BannerInstance` | nested type |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface MissionLogic](../MissionLogic)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
