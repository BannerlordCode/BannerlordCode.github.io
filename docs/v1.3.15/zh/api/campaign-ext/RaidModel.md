<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `RaidModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# RaidModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class RaidModel : MBGameModel<RaidModel>`
**Base:** `MBGameModel<RaidModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/RaidModel.cs`

## 概述

`RaidModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<RaidModel>(new MyRaidModel())` 注册，以改变其计算逻辑。

## 主要属性

| Name | Signature |
|------|-----------|
| `GoldRewardForEachLostHearth` | `public abstract int GoldRewardForEachLostHearth { get; }` |

## 主要方法

### GetCommonLootItemScores
```csharp
public abstract MBReadOnlyList<ValueTuple<ItemObject, float>> GetCommonLootItemScores()
```

### CalculateHitDamage
```csharp
public abstract ExplainedNumber CalculateHitDamage(MapEventSide attackerSide, float settlementHitPoints)
```

## 使用示例

```csharp
// RaidModel (Model) 的典型用法
Game.Current.ReplaceModel<RaidModel>(new MyRaidModel());
```

## 参见

- [完整类目录](../catalog)