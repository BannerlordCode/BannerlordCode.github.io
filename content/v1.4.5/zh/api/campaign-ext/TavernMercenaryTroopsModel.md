---
title: "TavernMercenaryTroopsModel"
description: "TavernMercenaryTroopsModel 的自动生成类参考。"
---
# TavernMercenaryTroopsModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class TavernMercenaryTroopsModel : MBGameModel<TavernMercenaryTroopsModel>`
**Base:** `MBGameModel<TavernMercenaryTroopsModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/TavernMercenaryTroopsModel.cs`

## 概述

`TavernMercenaryTroopsModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `TavernMercenaryTroopsModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `RegularMercenariesSpawnChance` | `public abstract float RegularMercenariesSpawnChance { get; }` |

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
TavernMercenaryTroopsModel instance = ...;
```

## 参见

- [本区域目录](../)