---
title: "InformationRestrictionModel"
description: "InformationRestrictionModel 的自动生成类参考。"
---
# InformationRestrictionModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class InformationRestrictionModel : MBGameModel<InformationRestrictionModel>`
**Base:** `MBGameModel<InformationRestrictionModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/InformationRestrictionModel.cs`

## 概述

`InformationRestrictionModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `InformationRestrictionModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### DoesPlayerKnowDetailsOf
`public abstract bool DoesPlayerKnowDetailsOf(Settlement settlement)`

**用途 / Purpose:** 返回「player know details of」对当前对象是否成立的布尔结果。

```csharp
// 先通过子系统 API 拿到 InformationRestrictionModel 实例
InformationRestrictionModel informationRestrictionModel = ...;
var result = informationRestrictionModel.DoesPlayerKnowDetailsOf(settlement);
```

### DoesPlayerKnowDetailsOf
`public abstract bool DoesPlayerKnowDetailsOf(Hero hero)`

**用途 / Purpose:** 返回「player know details of」对当前对象是否成立的布尔结果。

```csharp
// 先通过子系统 API 拿到 InformationRestrictionModel 实例
InformationRestrictionModel informationRestrictionModel = ...;
var result = informationRestrictionModel.DoesPlayerKnowDetailsOf(hero);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
InformationRestrictionModel instance = ...;
```

## 参见

- [本区域目录](../)