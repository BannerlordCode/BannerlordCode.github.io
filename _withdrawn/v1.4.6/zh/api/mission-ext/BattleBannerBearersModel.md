---
title: "BattleBannerBearersModel"
description: "BattleBannerBearersModel：TaleWorlds.MountAndBlade.ComponentInterfaces 的 public 类，继承 MBGameModel<BattleBannerBearersModel>；公开成员 21 个（方法 19、属性 1、字段 1）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade/ComponentInterfaces/BattleBannerBearersModel.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# BattleBannerBearersModel

**Namespace:** `TaleWorlds.MountAndBlade.ComponentInterfaces`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public abstract class BattleBannerBearersModel : MBGameModel<BattleBannerBearersModel>`
**File:** `TaleWorlds.MountAndBlade/ComponentInterfaces/BattleBannerBearersModel.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

BattleBannerBearersModel 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/ComponentInterfaces/BattleBannerBearersModel.cs。它是一个 public 类（abstract），实现/继承 MBGameModel<BattleBannerBearersModel>，继承链为 BattleBannerBearersModel → MBGameModel → GameModel。public/protected 成员共 21 个：19 方法、1 属性、1 字段。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：BattleBannerBearersModel 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.ComponentInterfaces`，继承链 BattleBannerBearersModel → MBGameModel → GameModel。成员构成以方法为主（方法 19/21，属性 1/21），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/ComponentInterfaces/BattleBannerBearersModel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `BannerBearerLogic` | `protected BannerBearerLogic BannerBearerLogic` | 属性 |
| `InitializeModel` | `public void InitializeModel(BannerBearerLogic bannerBearerLogic)` | 方法 |
| `FinalizeModel` | `public void FinalizeModel()` | 方法 |
| `IsFormationBanner` | `public bool IsFormationBanner(Formation formation, SpawnedItemEntity item)` | 方法 |
| `IsBannerSearchingAgent` | `public bool IsBannerSearchingAgent(Agent agent)` | 方法 |
| `IsInteractableFormationBanner` | `public bool IsInteractableFormationBanner(SpawnedItemEntity item, Agent interactingAgent)` | 方法 |
| `HasFormationBanner` | `public bool HasFormationBanner(Formation formation)` | 方法 |
| `HasBannerOnGround` | `public bool HasBannerOnGround(Formation formation)` | 方法 |
| `GetFormationBanner` | `public ItemObject GetFormationBanner(Formation formation)` | 方法 |
| `List` | `public List<Agent>GetFormationBannerBearers(Formation formation)` | 方法 |
| `GetActiveBanner` | `public BannerComponent GetActiveBanner(Formation formation)` | 方法 |
| `GetMinimumFormationTroopCountToBearBanners` | `public abstract int GetMinimumFormationTroopCountToBearBanners();` | 方法 |
| `GetBannerInteractionDistance` | `public abstract float GetBannerInteractionDistance(Agent interactingAgent);` | 方法 |
| `CanBannerBearerProvideEffectToFormation` | `public abstract bool CanBannerBearerProvideEffectToFormation(Agent agent, Formation formation);` | 方法 |
| `CanAgentPickUpAnyBanner` | `public abstract bool CanAgentPickUpAnyBanner(Agent agent);` | 方法 |
| `CanAgentBecomeBannerBearer` | `public abstract bool CanAgentBecomeBannerBearer(Agent agent);` | 方法 |
| `GetAgentBannerBearingPriority` | `public abstract int GetAgentBannerBearingPriority(Agent agent);` | 方法 |
| `CanFormationDeployBannerBearers` | `public abstract bool CanFormationDeployBannerBearers(Formation formation);` | 方法 |
| `GetDesiredNumberOfBannerBearersForFormation` | `public abstract int GetDesiredNumberOfBannerBearersForFormation(Formation formation);` | 方法 |
| `GetBannerBearerReplacementWeapon` | `public abstract ItemObject GetBannerBearerReplacementWeapon(BasicCharacterObject agentCharacter);` | 方法 |
| `DefaultDetachmentCostMultiplier` | `public const float DefaultDetachmentCostMultiplier` | 字段 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 MBGameModel](../../core-extra/MBGameModel__1/)
- [同命名空间 AgentApplyDamageModel](../AgentApplyDamageModel/)
- [同命名空间 AgentDecideKilledOrUnconsciousModel](../AgentDecideKilledOrUnconsciousModel/)
- [同命名空间 ApplyWeatherEffectsModel](../ApplyWeatherEffectsModel/)
- [同命名空间 AutoBlockModel](../AutoBlockModel/)
