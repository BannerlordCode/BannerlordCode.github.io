---
title: "DefaultEmissaryModel"
description: "DefaultEmissaryModel 的自动生成类参考。"
---
# DefaultEmissaryModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultEmissaryModel : EmissaryModel`
**Base:** `EmissaryModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultEmissaryModel.cs`

## 概述

`DefaultEmissaryModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultEmissaryModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `EmissaryRelationBonusForMainClan` | `public override int EmissaryRelationBonusForMainClan { get; }` |

## 主要方法

### IsEmissary
`public override bool IsEmissary(Hero hero)`

**用途 / Purpose:** 判断当前对象是否处于 「emissary」 状态或条件。

```csharp
// 先通过子系统 API 拿到 DefaultEmissaryModel 实例
DefaultEmissaryModel defaultEmissaryModel = ...;
var result = defaultEmissaryModel.IsEmissary(hero);
```

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultEmissaryModel>(new MyDefaultEmissaryModel());
```

## 参见

- [本区域目录](../)