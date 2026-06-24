<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultRaidModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultRaidModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultRaidModel : RaidModel`
**Base:** `RaidModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultRaidModel.cs`

## 概述

`DefaultRaidModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultRaidModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `GoldRewardForEachLostHearth` | `public override int GoldRewardForEachLostHearth { get; }` |

## 主要方法

### CalculateHitDamage
`public override ExplainedNumber CalculateHitDamage(MapEventSide attackerSide, float settlementHitPoints)`

**用途 / Purpose:** 处理 `calculate hit damage` 相关逻辑。

### GetCommonLootItemScores
`public override MBReadOnlyList<ValueTuple<ItemObject, float>> GetCommonLootItemScores()`

**用途 / Purpose:** 获取 `common loot item scores` 的当前值。

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultRaidModel>(new MyDefaultRaidModel());
```

## 参见

- [完整类目录](../catalog)