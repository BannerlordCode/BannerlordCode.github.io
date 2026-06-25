---
title: "BattleCaptainModel"
description: "BattleCaptainModel 的自动生成类参考。"
---
# BattleCaptainModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class BattleCaptainModel : MBGameModel<BattleCaptainModel>`
**Base:** `MBGameModel<BattleCaptainModel>`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/BattleCaptainModel.cs`

## 概述

`BattleCaptainModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `BattleCaptainModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetCaptainRatingForTroopUsages
`public abstract float GetCaptainRatingForTroopUsages(Hero hero, TroopUsageFlags flag, out List<PerkObject> compatiblePerks)`

**用途 / Purpose:** 读取并返回当前对象中 captain rating for troop usages 的结果。

```csharp
// 先通过子系统 API 拿到 BattleCaptainModel 实例
BattleCaptainModel battleCaptainModel = ...;
var result = battleCaptainModel.GetCaptainRatingForTroopUsages(hero, flag, compatiblePerks);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
BattleCaptainModel instance = ...;
```

## 参见

- [本区域目录](../)