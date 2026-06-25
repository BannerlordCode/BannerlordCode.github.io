---
title: "DefaultLocationModel"
description: "DefaultLocationModel 的自动生成类参考。"
---
# DefaultLocationModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultLocationModel : LocationModel`
**Base:** `LocationModel`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultLocationModel.cs`

## 概述

`DefaultLocationModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultLocationModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetSettlementUpgradeLevel
`public override int GetSettlementUpgradeLevel(LocationEncounter locationEncounter)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 settlement upgrade level 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultLocationModel 实例
DefaultLocationModel defaultLocationModel = ...;
var result = defaultLocationModel.GetSettlementUpgradeLevel(locationEncounter);
```

### GetCivilianSceneLevel
`public override string GetCivilianSceneLevel(Settlement settlement)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 civilian scene level 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultLocationModel 实例
DefaultLocationModel defaultLocationModel = ...;
var result = defaultLocationModel.GetCivilianSceneLevel(settlement);
```

### GetCivilianUpgradeLevelTag
`public override string GetCivilianUpgradeLevelTag(int upgradeLevel)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 civilian upgrade level tag 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultLocationModel 实例
DefaultLocationModel defaultLocationModel = ...;
var result = defaultLocationModel.GetCivilianUpgradeLevelTag(0);
```

### GetUpgradeLevelTag
`public override string GetUpgradeLevelTag(int upgradeLevel)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 upgrade level tag 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultLocationModel 实例
DefaultLocationModel defaultLocationModel = ...;
var result = defaultLocationModel.GetUpgradeLevelTag(0);
```

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultLocationModel>(new MyDefaultLocationModel());
```

## 参见

- [本区域目录](../)