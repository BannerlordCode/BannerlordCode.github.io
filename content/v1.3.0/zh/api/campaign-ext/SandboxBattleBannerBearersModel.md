---
title: "SandboxBattleBannerBearersModel"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SandboxBattleBannerBearersModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# SandboxBattleBannerBearersModel

**Namespace:** SandBox
**Module:** SandBox
**Type:** `public class SandboxBattleBannerBearersModel : BattleBannerBearersModel`
**Base:** `BattleBannerBearersModel`
**File:** `SandBox/SandboxBattleBannerBearersModel.cs`

## 概述

`SandboxBattleBannerBearersModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `SandboxBattleBannerBearersModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetMinimumFormationTroopCountToBearBanners
`public override int GetMinimumFormationTroopCountToBearBanners()`

**用途 / Purpose:** 获取 `minimum formation troop count to bear banners` 的当前值。

### GetBannerInteractionDistance
`public override float GetBannerInteractionDistance(Agent interactingAgent)`

**用途 / Purpose:** 获取 `banner interaction distance` 的当前值。

### CanBannerBearerProvideEffectToFormation
`public override bool CanBannerBearerProvideEffectToFormation(Agent agent, Formation formation)`

**用途 / Purpose:** 判断当前对象是否可以执行 `banner bearer provide effect to formation`。

### CanAgentPickUpAnyBanner
`public override bool CanAgentPickUpAnyBanner(Agent agent)`

**用途 / Purpose:** 判断当前对象是否可以执行 `agent pick up any banner`。

### CanAgentBecomeBannerBearer
`public override bool CanAgentBecomeBannerBearer(Agent agent)`

**用途 / Purpose:** 判断当前对象是否可以执行 `agent become banner bearer`。

### GetAgentBannerBearingPriority
`public override int GetAgentBannerBearingPriority(Agent agent)`

**用途 / Purpose:** 获取 `agent banner bearing priority` 的当前值。

### CanFormationDeployBannerBearers
`public override bool CanFormationDeployBannerBearers(Formation formation)`

**用途 / Purpose:** 判断当前对象是否可以执行 `formation deploy banner bearers`。

### GetDesiredNumberOfBannerBearersForFormation
`public override int GetDesiredNumberOfBannerBearersForFormation(Formation formation)`

**用途 / Purpose:** 获取 `desired number of banner bearers for formation` 的当前值。

### GetBannerBearerReplacementWeapon
`public override ItemObject GetBannerBearerReplacementWeapon(BasicCharacterObject agentCharacter)`

**用途 / Purpose:** 获取 `banner bearer replacement weapon` 的当前值。

## 使用示例

```csharp
Game.Current.ReplaceModel<SandboxBattleBannerBearersModel>(new MySandboxBattleBannerBearersModel());
```

## 参见

- [完整类目录](../catalog)