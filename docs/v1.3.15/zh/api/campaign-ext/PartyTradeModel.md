<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PartyTradeModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PartyTradeModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class PartyTradeModel : MBGameModel<PartyTradeModel>`
**Base:** `MBGameModel<PartyTradeModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/PartyTradeModel.cs`

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

**用途 / Purpose:** 获取 `trade penalty factor` 的当前值。

## 使用示例

```csharp
var implementation = new CustomPartyTradeModel();
```

## 参见

- [完整类目录](../catalog)