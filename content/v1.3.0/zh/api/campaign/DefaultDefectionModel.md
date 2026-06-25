---
title: "DefaultDefectionModel"
description: "DefaultDefectionModel 的自动生成类参考。"
---
# DefaultDefectionModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultDefectionModel : DefectionModel`
**Base:** `DefectionModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultDefectionModel.cs`

## 概述

`DefaultDefectionModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultDefectionModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### CanHeroDefectToFaction
`public override bool CanHeroDefectToFaction(Hero hero, Kingdom kingdom)`

**用途 / Purpose:** **用途 / Purpose:** 检查当前对象是否满足 hero defect to faction 的前置条件。

```csharp
// 先通过子系统 API 拿到 DefaultDefectionModel 实例
DefaultDefectionModel defaultDefectionModel = ...;
var result = defaultDefectionModel.CanHeroDefectToFaction(hero, kingdom);
```

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultDefectionModel>(new MyDefaultDefectionModel());
```

## 参见

- [本区域目录](../)