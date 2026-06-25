---
title: "EmissaryModel"
description: "EmissaryModel 的自动生成类参考。"
---
# EmissaryModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class EmissaryModel : MBGameModel<EmissaryModel>`
**Base:** `MBGameModel<EmissaryModel>`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/EmissaryModel.cs`

## 概述

`EmissaryModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `EmissaryModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `EmissaryRelationBonusForMainClan` | `public abstract int EmissaryRelationBonusForMainClan { get; }` |

## 主要方法

### IsEmissary
`public abstract bool IsEmissary(Hero hero)`

**用途 / Purpose:** 判断当前对象是否处于 emissary 状态或条件。

```csharp
// 先通过子系统 API 拿到 EmissaryModel 实例
EmissaryModel emissaryModel = ...;
var result = emissaryModel.IsEmissary(hero);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
EmissaryModel instance = ...;
```

## 参见

- [本区域目录](../)