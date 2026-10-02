---
title: "BannerBearerLogic"
description: "BannerBearerLogic：TaleWorlds.MountAndBlade 的 public 类，继承 MissionLogic；公开成员 28 个（方法 20、属性 1、字段 2）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade/BannerBearerLogic.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# BannerBearerLogic

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class BannerBearerLogic : MissionLogic`
**File:** `TaleWorlds.MountAndBlade/BannerBearerLogic.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

BannerBearerLogic 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/BannerBearerLogic.cs。它是一个 public 类，实现/继承 MissionLogic，继承链为 BannerBearerLogic → MissionLogic → MissionBehavior → IMissionBehavior。public/protected 成员共 28 个：20 方法、1 属性、2 字段、2 事件、1 构造函数、2 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：BannerBearerLogic 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade`，继承链 BannerBearerLogic → MissionLogic → MissionBehavior → IMissionBehavior。成员构成以方法为主（方法 20/28，属性 1/28），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/BannerBearerLogic.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Action` | `public event Action<Formation>OnBannerBearersUpdated;` | 事件 |
| `bool>OnBannerBearerAgentUpdated;` | `public event Action<Agent, bool>OnBannerBearerAgentUpdated;` | 事件 |
| `BannerBearerLogic` | `public BannerBearerLogic()` | 构造函数 |
| `AgentSpawnLogic` | `public IMissionAgentSpawnLogic AgentSpawnLogic` | 属性 |
| `IsFormationBanner` | `public bool IsFormationBanner(Formation formation, SpawnedItemEntity spawnedItem)` | 方法 |
| `HasBannerOnGround` | `public bool HasBannerOnGround(Formation formation)` | 方法 |
| `GetActiveBanner` | `public BannerComponent GetActiveBanner(Formation formation)` | 方法 |
| `List` | `public List<Agent>GetFormationBannerBearers(Formation formation)` | 方法 |
| `GetFormationBanner` | `public ItemObject GetFormationBanner(Formation formation)` | 方法 |
| `IsBannerSearchingAgent` | `public bool IsBannerSearchingAgent(Agent agent)` | 方法 |
| `GetMissingBannerCount` | `public int GetMissingBannerCount(Formation formation)` | 方法 |
| `GetFormationFromBanner` | `public Formation GetFormationFromBanner(SpawnedItemEntity spawnedItem)` | 方法 |
| `SetFormationBanner` | `public void SetFormationBanner(Formation formation, ItemObject newBanner)` | 方法 |
| `OnBehaviorInitialize` | `public override void OnBehaviorInitialize()` | 方法 |
| `OnEndMission` | `protected override void OnEndMission()` | 方法 |
| `OnDeploymentFinished` | `public override void OnDeploymentFinished()` | 方法 |
| `OnMissionTick` | `public override void OnMissionTick(float dt)` | 方法 |
| `OnItemPickup` | `public void OnItemPickup(Agent agent, SpawnedItemEntity spawnedItem)` | 方法 |
| `OnItemDrop` | `public void OnItemDrop(Agent agent, SpawnedItemEntity spawnedItem)` | 方法 |
| `OnAgentRemoved` | `public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)` | 方法 |
| `OnAgentPanicked` | `public override void OnAgentPanicked(Agent affectedAgent)` | 方法 |
| `UpdateAgent` | `public void UpdateAgent(Agent agent, bool willBecomeBannerBearer)` | 方法 |
| `SpawnBannerBearer` | `public Agent SpawnBannerBearer(IAgentOriginBase troopOrigin, bool isPlayerSide, Formation formation, bool spawnWithHorse, bool isReinforcement, int formationTroopCount, int formationTroopIndex, bool isAlarmed, bool wieldInitialWeapons, Vec3? initialPosition, Vec2? initialDirection, string specialActionSetSuffix = null, bool useTroopClassForSpawn = false)` | 方法 |
| `IsBannerItem` | `public static bool IsBannerItem(ItemObject item)` | 方法 |
| `DefaultBannerBearerAgentDefensiveness` | `public const float DefaultBannerBearerAgentDefensiveness` | 字段 |
| `BannerSearcherUpdatePeriod` | `public const float BannerSearcherUpdatePeriod` | 字段 |
| `BannerState` | `public enum BannerState` | 嵌套类型 |
| `BannerInstance` | `public struct BannerInstance` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 MissionLogic](../MissionLogic/)
- [同命名空间 ActionIndexCache](../ActionIndexCache/)
- [同命名空间 AgentBuildData](../AgentBuildData/)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData/)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic/)
