---
title: "CustomBattleBannerBearersModel"
description: "CustomBattleBannerBearersModel 的自动生成类参考。"
---
# CustomBattleBannerBearersModel

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CustomBattleBannerBearersModel : BattleBannerBearersModel`
**Base:** `BattleBannerBearersModel`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/CustomBattleBannerBearersModel.cs`

## 概述

`CustomBattleBannerBearersModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `CustomBattleBannerBearersModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetMinimumFormationTroopCountToBearBanners
`public override int GetMinimumFormationTroopCountToBearBanners()`

**用途 / Purpose:** 读取并返回当前对象中 「minimum formation troop count to bear banners」 的结果。

```csharp
// 先通过子系统 API 拿到 CustomBattleBannerBearersModel 实例
CustomBattleBannerBearersModel customBattleBannerBearersModel = ...;
var result = customBattleBannerBearersModel.GetMinimumFormationTroopCountToBearBanners();
```

### GetBannerInteractionDistance
`public override float GetBannerInteractionDistance(Agent interactingAgent)`

**用途 / Purpose:** 读取并返回当前对象中 「banner interaction distance」 的结果。

```csharp
// 先通过子系统 API 拿到 CustomBattleBannerBearersModel 实例
CustomBattleBannerBearersModel customBattleBannerBearersModel = ...;
var result = customBattleBannerBearersModel.GetBannerInteractionDistance(interactingAgent);
```

### CanBannerBearerProvideEffectToFormation
`public override bool CanBannerBearerProvideEffectToFormation(Agent agent, Formation formation)`

**用途 / Purpose:** 检查当前对象是否满足 「banner bearer provide effect to formation」 的前置条件。

```csharp
// 先通过子系统 API 拿到 CustomBattleBannerBearersModel 实例
CustomBattleBannerBearersModel customBattleBannerBearersModel = ...;
var result = customBattleBannerBearersModel.CanBannerBearerProvideEffectToFormation(agent, formation);
```

### CanAgentPickUpAnyBanner
`public override bool CanAgentPickUpAnyBanner(Agent agent)`

**用途 / Purpose:** 检查当前对象是否满足 「agent pick up any banner」 的前置条件。

```csharp
// 先通过子系统 API 拿到 CustomBattleBannerBearersModel 实例
CustomBattleBannerBearersModel customBattleBannerBearersModel = ...;
var result = customBattleBannerBearersModel.CanAgentPickUpAnyBanner(agent);
```

### CanAgentBecomeBannerBearer
`public override bool CanAgentBecomeBannerBearer(Agent agent)`

**用途 / Purpose:** 检查当前对象是否满足 「agent become banner bearer」 的前置条件。

```csharp
// 先通过子系统 API 拿到 CustomBattleBannerBearersModel 实例
CustomBattleBannerBearersModel customBattleBannerBearersModel = ...;
var result = customBattleBannerBearersModel.CanAgentBecomeBannerBearer(agent);
```

### GetAgentBannerBearingPriority
`public override int GetAgentBannerBearingPriority(Agent agent)`

**用途 / Purpose:** 读取并返回当前对象中 「agent banner bearing priority」 的结果。

```csharp
// 先通过子系统 API 拿到 CustomBattleBannerBearersModel 实例
CustomBattleBannerBearersModel customBattleBannerBearersModel = ...;
var result = customBattleBannerBearersModel.GetAgentBannerBearingPriority(agent);
```

### CanFormationDeployBannerBearers
`public override bool CanFormationDeployBannerBearers(Formation formation)`

**用途 / Purpose:** 检查当前对象是否满足 「formation deploy banner bearers」 的前置条件。

```csharp
// 先通过子系统 API 拿到 CustomBattleBannerBearersModel 实例
CustomBattleBannerBearersModel customBattleBannerBearersModel = ...;
var result = customBattleBannerBearersModel.CanFormationDeployBannerBearers(formation);
```

### GetDesiredNumberOfBannerBearersForFormation
`public override int GetDesiredNumberOfBannerBearersForFormation(Formation formation)`

**用途 / Purpose:** 读取并返回当前对象中 「desired number of banner bearers for formation」 的结果。

```csharp
// 先通过子系统 API 拿到 CustomBattleBannerBearersModel 实例
CustomBattleBannerBearersModel customBattleBannerBearersModel = ...;
var result = customBattleBannerBearersModel.GetDesiredNumberOfBannerBearersForFormation(formation);
```

### GetBannerBearerReplacementWeapon
`public override ItemObject GetBannerBearerReplacementWeapon(BasicCharacterObject agentCharacter)`

**用途 / Purpose:** 读取并返回当前对象中 「banner bearer replacement weapon」 的结果。

```csharp
// 先通过子系统 API 拿到 CustomBattleBannerBearersModel 实例
CustomBattleBannerBearersModel customBattleBannerBearersModel = ...;
var result = customBattleBannerBearersModel.GetBannerBearerReplacementWeapon(agentCharacter);
```

## 使用示例

```csharp
Game.Current.ReplaceModel<CustomBattleBannerBearersModel>(new MyCustomBattleBannerBearersModel());
```

## 参见

- [本区域目录](../)