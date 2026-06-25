---
title: "BattleBannerBearersModel"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BattleBannerBearersModel`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# BattleBannerBearersModel

**Namespace:** TaleWorlds.MountAndBlade.ComponentInterfaces
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class BattleBannerBearersModel : MBGameModel<BattleBannerBearersModel>`
**Base:** `MBGameModel<BattleBannerBearersModel>`
**File:** `TaleWorlds.MountAndBlade/ComponentInterfaces/BattleBannerBearersModel.cs`

## 概述

`BattleBannerBearersModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `BattleBannerBearersModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### InitializeModel
`public void InitializeModel(BannerBearerLogic bannerBearerLogic)`

**用途 / Purpose:** 初始化 `model` 的状态、资源或绑定。

### FinalizeModel
`public void FinalizeModel()`

**用途 / Purpose:** 处理 `finalize model` 相关逻辑。

### IsFormationBanner
`public bool IsFormationBanner(Formation formation, SpawnedItemEntity item)`

**用途 / Purpose:** 处理 `is formation banner` 相关逻辑。

### IsBannerSearchingAgent
`public bool IsBannerSearchingAgent(Agent agent)`

**用途 / Purpose:** 处理 `is banner searching agent` 相关逻辑。

### IsInteractableFormationBanner
`public bool IsInteractableFormationBanner(SpawnedItemEntity item, Agent interactingAgent)`

**用途 / Purpose:** 处理 `is interactable formation banner` 相关逻辑。

### HasFormationBanner
`public bool HasFormationBanner(Formation formation)`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `formation banner`。

### HasBannerOnGround
`public bool HasBannerOnGround(Formation formation)`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `banner on ground`。

### GetFormationBanner
`public ItemObject GetFormationBanner(Formation formation)`

**用途 / Purpose:** 获取 `formation banner` 的当前值。

### GetFormationBannerBearers
`public List<Agent> GetFormationBannerBearers(Formation formation)`

**用途 / Purpose:** 获取 `formation banner bearers` 的当前值。

### GetActiveBanner
`public BannerComponent GetActiveBanner(Formation formation)`

**用途 / Purpose:** 获取 `active banner` 的当前值。

### GetMinimumFormationTroopCountToBearBanners
`public abstract int GetMinimumFormationTroopCountToBearBanners()`

**用途 / Purpose:** 获取 `minimum formation troop count to bear banners` 的当前值。

### GetBannerInteractionDistance
`public abstract float GetBannerInteractionDistance(Agent interactingAgent)`

**用途 / Purpose:** 获取 `banner interaction distance` 的当前值。

### CanBannerBearerProvideEffectToFormation
`public abstract bool CanBannerBearerProvideEffectToFormation(Agent agent, Formation formation)`

**用途 / Purpose:** 判断当前对象是否可以执行 `banner bearer provide effect to formation`。

### CanAgentPickUpAnyBanner
`public abstract bool CanAgentPickUpAnyBanner(Agent agent)`

**用途 / Purpose:** 判断当前对象是否可以执行 `agent pick up any banner`。

### CanAgentBecomeBannerBearer
`public abstract bool CanAgentBecomeBannerBearer(Agent agent)`

**用途 / Purpose:** 判断当前对象是否可以执行 `agent become banner bearer`。

### GetAgentBannerBearingPriority
`public abstract int GetAgentBannerBearingPriority(Agent agent)`

**用途 / Purpose:** 获取 `agent banner bearing priority` 的当前值。

### CanFormationDeployBannerBearers
`public abstract bool CanFormationDeployBannerBearers(Formation formation)`

**用途 / Purpose:** 判断当前对象是否可以执行 `formation deploy banner bearers`。

### GetDesiredNumberOfBannerBearersForFormation
`public abstract int GetDesiredNumberOfBannerBearersForFormation(Formation formation)`

**用途 / Purpose:** 获取 `desired number of banner bearers for formation` 的当前值。

### GetBannerBearerReplacementWeapon
`public abstract ItemObject GetBannerBearerReplacementWeapon(BasicCharacterObject agentCharacter)`

**用途 / Purpose:** 获取 `banner bearer replacement weapon` 的当前值。

## 使用示例

```csharp
var implementation = new CustomBattleBannerBearersModel();
```

## 参见

- [完整类目录](../catalog)