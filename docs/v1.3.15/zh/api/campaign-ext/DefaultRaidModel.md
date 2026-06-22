<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultRaidModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultRaidModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultRaidModel : RaidModel`
**Base:** `RaidModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultRaidModel.cs`

## 概述

`DefaultRaidModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<DefaultRaidModel>(new MyDefaultRaidModel())` 注册，以改变其计算逻辑。

## 主要属性

| Name | Signature |
|------|-----------|
| `GoldRewardForEachLostHearth` | `public override int GoldRewardForEachLostHearth { get; }` |

## 主要方法

### CalculateHitDamage
```csharp
public override ExplainedNumber CalculateHitDamage(MapEventSide attackerSide, float settlementHitPoints)
```

### GetCommonLootItemScores
```csharp
public override MBReadOnlyList<ValueTuple<ItemObject, float>> GetCommonLootItemScores()
```

## 使用示例

```csharp
// DefaultRaidModel (Model) 的典型用法
Game.Current.ReplaceModel<DefaultRaidModel>(new MyDefaultRaidModel());
```

## 参见

- [完整类目录](../catalog)