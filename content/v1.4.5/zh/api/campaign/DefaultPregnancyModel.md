---
title: "DefaultPregnancyModel"
description: "DefaultPregnancyModel 的自动生成类参考。"
---
# DefaultPregnancyModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultPregnancyModel : PregnancyModel`
**Base:** `PregnancyModel`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultPregnancyModel.cs`

## 概述

`DefaultPregnancyModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultPregnancyModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetDailyChanceOfPregnancyForHero
`public override float GetDailyChanceOfPregnancyForHero(Hero hero)`

**用途 / Purpose:** 读取并返回当前对象中 daily chance of pregnancy for hero 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultPregnancyModel 实例
DefaultPregnancyModel defaultPregnancyModel = ...;
var result = defaultPregnancyModel.GetDailyChanceOfPregnancyForHero(hero);
```

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultPregnancyModel>(new MyDefaultPregnancyModel());
```

## 参见

- [本区域目录](../)