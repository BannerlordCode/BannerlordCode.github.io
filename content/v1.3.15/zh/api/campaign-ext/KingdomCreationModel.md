---
title: "KingdomCreationModel"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `KingdomCreationModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# KingdomCreationModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class KingdomCreationModel : MBGameModel<KingdomCreationModel>`
**Base:** `MBGameModel<KingdomCreationModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/KingdomCreationModel.cs`

## 概述

`KingdomCreationModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `KingdomCreationModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `MinimumClanTierToCreateKingdom` | `public abstract int MinimumClanTierToCreateKingdom { get; }` |
| `MinimumNumberOfSettlementsOwnedToCreateKingdom` | `public abstract int MinimumNumberOfSettlementsOwnedToCreateKingdom { get; }` |
| `MinimumTroopCountToCreateKingdom` | `public abstract int MinimumTroopCountToCreateKingdom { get; }` |
| `MaximumNumberOfInitialPolicies` | `public abstract int MaximumNumberOfInitialPolicies { get; }` |

## 主要方法

### IsPlayerKingdomCreationPossible
`public abstract bool IsPlayerKingdomCreationPossible(out List<TextObject> explanations)`

**用途 / Purpose:** 处理 `is player kingdom creation possible` 相关逻辑。

### IsPlayerKingdomAbdicationPossible
`public abstract bool IsPlayerKingdomAbdicationPossible(out List<TextObject> explanations)`

**用途 / Purpose:** 处理 `is player kingdom abdication possible` 相关逻辑。

### GetAvailablePlayerKingdomCultures
`public abstract IEnumerable<CultureObject> GetAvailablePlayerKingdomCultures()`

**用途 / Purpose:** 获取 `available player kingdom cultures` 的当前值。

## 使用示例

```csharp
var implementation = new CustomKingdomCreationModel();
```

## 参见

- [完整类目录](../catalog)