---
title: "LocationModel"
description: "LocationModel 的自动生成类参考。"
---
# LocationModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class LocationModel : MBGameModel<LocationModel>`
**Base:** `MBGameModel<LocationModel>`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/LocationModel.cs`

## 概述

`LocationModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `LocationModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetSettlementUpgradeLevel
`public abstract int GetSettlementUpgradeLevel(LocationEncounter locationEncounter)`

**用途 / Purpose:** 读取并返回当前对象中 settlement upgrade level 的结果。

```csharp
// 先通过子系统 API 拿到 LocationModel 实例
LocationModel locationModel = ...;
var result = locationModel.GetSettlementUpgradeLevel(locationEncounter);
```

### GetCivilianSceneLevel
`public abstract string GetCivilianSceneLevel(Settlement settlement)`

**用途 / Purpose:** 读取并返回当前对象中 civilian scene level 的结果。

```csharp
// 先通过子系统 API 拿到 LocationModel 实例
LocationModel locationModel = ...;
var result = locationModel.GetCivilianSceneLevel(settlement);
```

### GetCivilianUpgradeLevelTag
`public abstract string GetCivilianUpgradeLevelTag(int upgradeLevel)`

**用途 / Purpose:** 读取并返回当前对象中 civilian upgrade level tag 的结果。

```csharp
// 先通过子系统 API 拿到 LocationModel 实例
LocationModel locationModel = ...;
var result = locationModel.GetCivilianUpgradeLevelTag(0);
```

### GetUpgradeLevelTag
`public abstract string GetUpgradeLevelTag(int upgradeLevel)`

**用途 / Purpose:** 读取并返回当前对象中 upgrade level tag 的结果。

```csharp
// 先通过子系统 API 拿到 LocationModel 实例
LocationModel locationModel = ...;
var result = locationModel.GetUpgradeLevelTag(0);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
LocationModel instance = ...;
```

## 参见

- [本区域目录](../)