---
title: "SiegeAftermathModel"
description: "SiegeAftermathModel 的自动生成类参考。"
---
# SiegeAftermathModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class SiegeAftermathModel : MBGameModel<SiegeAftermathModel>`
**Base:** `MBGameModel<SiegeAftermathModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/SiegeAftermathModel.cs`

## 概述

`SiegeAftermathModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `SiegeAftermathModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetSiegeAftermathTraitXpChangeForPlayer
`public abstract int GetSiegeAftermathTraitXpChangeForPlayer(TraitObject trait, Settlement devastatedSettlement, SiegeAftermathAction.SiegeAftermath aftermathType)`

**用途 / Purpose:** 读取并返回当前对象中 「siege aftermath trait xp change for player」 的结果。

```csharp
// 先通过子系统 API 拿到 SiegeAftermathModel 实例
SiegeAftermathModel siegeAftermathModel = ...;
var result = siegeAftermathModel.GetSiegeAftermathTraitXpChangeForPlayer(trait, devastatedSettlement, aftermathType);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
SiegeAftermathModel instance = ...;
```

## 参见

- [本区域目录](../)