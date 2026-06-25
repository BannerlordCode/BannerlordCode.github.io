---
title: "PartyTradeModel"
description: "PartyTradeModel 的自动生成类参考。"
---
# PartyTradeModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class PartyTradeModel : MBGameModel<PartyTradeModel>`
**Base:** `MBGameModel<PartyTradeModel>`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/PartyTradeModel.cs`

## 概述

`PartyTradeModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `PartyTradeModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `CaravanTransactionHighestValueItemCount` | `public abstract int CaravanTransactionHighestValueItemCount { get; }` |

## 主要方法

### GetTradePenaltyFactor
`public abstract float GetTradePenaltyFactor(MobileParty party)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 trade penalty factor 的结果。

```csharp
// 先通过子系统 API 拿到 PartyTradeModel 实例
PartyTradeModel partyTradeModel = ...;
var result = partyTradeModel.GetTradePenaltyFactor(party);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
PartyTradeModel instance = ...;
```

## 参见

- [本区域目录](../)