---
title: "DefaultGenericXpModel"
description: "DefaultGenericXpModel 的自动生成类参考。"
---
# DefaultGenericXpModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultGenericXpModel : GenericXpModel`
**Base:** `GenericXpModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultGenericXpModel.cs`

## 概述

`DefaultGenericXpModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultGenericXpModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetXpMultiplier
`public override float GetXpMultiplier(Hero hero)`

**用途 / Purpose:** 读取并返回当前对象中 「xp multiplier」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultGenericXpModel 实例
DefaultGenericXpModel defaultGenericXpModel = ...;
var result = defaultGenericXpModel.GetXpMultiplier(hero);
```

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultGenericXpModel>(new MyDefaultGenericXpModel());
```

## 参见

- [本区域目录](../)