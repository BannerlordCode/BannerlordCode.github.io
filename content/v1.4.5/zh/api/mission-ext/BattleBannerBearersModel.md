---
title: "BattleBannerBearersModel"
description: "BattleBannerBearersModel 的自动生成类参考。"
---
# BattleBannerBearersModel

**Namespace:** TaleWorlds.MountAndBlade.ComponentInterfaces
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class BattleBannerBearersModel : MBGameModel<BattleBannerBearersModel>`
**Base:** `MBGameModel<BattleBannerBearersModel>`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade.ComponentInterfaces/BattleBannerBearersModel.cs`

## 概述

`BattleBannerBearersModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `BattleBannerBearersModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### InitializeModel
`public void InitializeModel(BannerBearerLogic bannerBearerLogic)`

**用途 / Purpose:** 为 model 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 BattleBannerBearersModel 实例
BattleBannerBearersModel battleBannerBearersModel = ...;
battleBannerBearersModel.InitializeModel(bannerBearerLogic);
```

### FinalizeModel
`public void FinalizeModel()`

**用途 / Purpose:** 调用 FinalizeModel 对应的操作。

```csharp
// 先通过子系统 API 拿到 BattleBannerBearersModel 实例
BattleBannerBearersModel battleBannerBearersModel = ...;
battleBannerBearersModel.FinalizeModel();
```

### IsFormationBanner
`public bool IsFormationBanner(Formation formation, SpawnedItemEntity item)`

**用途 / Purpose:** 判断当前对象是否处于 formation banner 状态或条件。

```csharp
// 先通过子系统 API 拿到 BattleBannerBearersModel 实例
BattleBannerBearersModel battleBannerBearersModel = ...;
var result = battleBannerBearersModel.IsFormationBanner(formation, item);
```

### IsBannerSearchingAgent
`public bool IsBannerSearchingAgent(Agent agent)`

**用途 / Purpose:** 判断当前对象是否处于 banner searching agent 状态或条件。

```csharp
// 先通过子系统 API 拿到 BattleBannerBearersModel 实例
BattleBannerBearersModel battleBannerBearersModel = ...;
var result = battleBannerBearersModel.IsBannerSearchingAgent(agent);
```

### IsInteractableFormationBanner
`public bool IsInteractableFormationBanner(SpawnedItemEntity item, Agent interactingAgent)`

**用途 / Purpose:** 判断当前对象是否处于 interactable formation banner 状态或条件。

```csharp
// 先通过子系统 API 拿到 BattleBannerBearersModel 实例
BattleBannerBearersModel battleBannerBearersModel = ...;
var result = battleBannerBearersModel.IsInteractableFormationBanner(item, interactingAgent);
```

### HasFormationBanner
`public bool HasFormationBanner(Formation formation)`

**用途 / Purpose:** 判断当前对象是否已经持有 formation banner。

```csharp
// 先通过子系统 API 拿到 BattleBannerBearersModel 实例
BattleBannerBearersModel battleBannerBearersModel = ...;
var result = battleBannerBearersModel.HasFormationBanner(formation);
```

### HasBannerOnGround
`public bool HasBannerOnGround(Formation formation)`

**用途 / Purpose:** 判断当前对象是否已经持有 banner on ground。

```csharp
// 先通过子系统 API 拿到 BattleBannerBearersModel 实例
BattleBannerBearersModel battleBannerBearersModel = ...;
var result = battleBannerBearersModel.HasBannerOnGround(formation);
```

### GetFormationBanner
`public ItemObject GetFormationBanner(Formation formation)`

**用途 / Purpose:** 读取并返回当前对象中 formation banner 的结果。

```csharp
// 先通过子系统 API 拿到 BattleBannerBearersModel 实例
BattleBannerBearersModel battleBannerBearersModel = ...;
var result = battleBannerBearersModel.GetFormationBanner(formation);
```

### GetFormationBannerBearers
`public List<Agent> GetFormationBannerBearers(Formation formation)`

**用途 / Purpose:** 读取并返回当前对象中 formation banner bearers 的结果。

```csharp
// 先通过子系统 API 拿到 BattleBannerBearersModel 实例
BattleBannerBearersModel battleBannerBearersModel = ...;
var result = battleBannerBearersModel.GetFormationBannerBearers(formation);
```

### GetActiveBanner
`public BannerComponent GetActiveBanner(Formation formation)`

**用途 / Purpose:** 读取并返回当前对象中 active banner 的结果。

```csharp
// 先通过子系统 API 拿到 BattleBannerBearersModel 实例
BattleBannerBearersModel battleBannerBearersModel = ...;
var result = battleBannerBearersModel.GetActiveBanner(formation);
```

### GetMinimumFormationTroopCountToBearBanners
`public abstract int GetMinimumFormationTroopCountToBearBanners()`

**用途 / Purpose:** 读取并返回当前对象中 minimum formation troop count to bear banners 的结果。

```csharp
// 先通过子系统 API 拿到 BattleBannerBearersModel 实例
BattleBannerBearersModel battleBannerBearersModel = ...;
var result = battleBannerBearersModel.GetMinimumFormationTroopCountToBearBanners();
```

### GetBannerInteractionDistance
`public abstract float GetBannerInteractionDistance(Agent interactingAgent)`

**用途 / Purpose:** 读取并返回当前对象中 banner interaction distance 的结果。

```csharp
// 先通过子系统 API 拿到 BattleBannerBearersModel 实例
BattleBannerBearersModel battleBannerBearersModel = ...;
var result = battleBannerBearersModel.GetBannerInteractionDistance(interactingAgent);
```

### CanBannerBearerProvideEffectToFormation
`public abstract bool CanBannerBearerProvideEffectToFormation(Agent agent, Formation formation)`

**用途 / Purpose:** 检查当前对象是否满足 banner bearer provide effect to formation 的前置条件。

```csharp
// 先通过子系统 API 拿到 BattleBannerBearersModel 实例
BattleBannerBearersModel battleBannerBearersModel = ...;
var result = battleBannerBearersModel.CanBannerBearerProvideEffectToFormation(agent, formation);
```

### CanAgentPickUpAnyBanner
`public abstract bool CanAgentPickUpAnyBanner(Agent agent)`

**用途 / Purpose:** 检查当前对象是否满足 agent pick up any banner 的前置条件。

```csharp
// 先通过子系统 API 拿到 BattleBannerBearersModel 实例
BattleBannerBearersModel battleBannerBearersModel = ...;
var result = battleBannerBearersModel.CanAgentPickUpAnyBanner(agent);
```

### CanAgentBecomeBannerBearer
`public abstract bool CanAgentBecomeBannerBearer(Agent agent)`

**用途 / Purpose:** 检查当前对象是否满足 agent become banner bearer 的前置条件。

```csharp
// 先通过子系统 API 拿到 BattleBannerBearersModel 实例
BattleBannerBearersModel battleBannerBearersModel = ...;
var result = battleBannerBearersModel.CanAgentBecomeBannerBearer(agent);
```

### GetAgentBannerBearingPriority
`public abstract int GetAgentBannerBearingPriority(Agent agent)`

**用途 / Purpose:** 读取并返回当前对象中 agent banner bearing priority 的结果。

```csharp
// 先通过子系统 API 拿到 BattleBannerBearersModel 实例
BattleBannerBearersModel battleBannerBearersModel = ...;
var result = battleBannerBearersModel.GetAgentBannerBearingPriority(agent);
```

### CanFormationDeployBannerBearers
`public abstract bool CanFormationDeployBannerBearers(Formation formation)`

**用途 / Purpose:** 检查当前对象是否满足 formation deploy banner bearers 的前置条件。

```csharp
// 先通过子系统 API 拿到 BattleBannerBearersModel 实例
BattleBannerBearersModel battleBannerBearersModel = ...;
var result = battleBannerBearersModel.CanFormationDeployBannerBearers(formation);
```

### GetDesiredNumberOfBannerBearersForFormation
`public abstract int GetDesiredNumberOfBannerBearersForFormation(Formation formation)`

**用途 / Purpose:** 读取并返回当前对象中 desired number of banner bearers for formation 的结果。

```csharp
// 先通过子系统 API 拿到 BattleBannerBearersModel 实例
BattleBannerBearersModel battleBannerBearersModel = ...;
var result = battleBannerBearersModel.GetDesiredNumberOfBannerBearersForFormation(formation);
```

### GetBannerBearerReplacementWeapon
`public abstract ItemObject GetBannerBearerReplacementWeapon(BasicCharacterObject agentCharacter)`

**用途 / Purpose:** 读取并返回当前对象中 banner bearer replacement weapon 的结果。

```csharp
// 先通过子系统 API 拿到 BattleBannerBearersModel 实例
BattleBannerBearersModel battleBannerBearersModel = ...;
var result = battleBannerBearersModel.GetBannerBearerReplacementWeapon(agentCharacter);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
BattleBannerBearersModel instance = ...;
```

## 参见

- [本区域目录](../)