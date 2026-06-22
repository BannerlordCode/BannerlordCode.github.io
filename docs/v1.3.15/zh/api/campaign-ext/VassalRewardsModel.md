<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `VassalRewardsModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# VassalRewardsModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class VassalRewardsModel : MBGameModel<VassalRewardsModel>`
**Base:** `MBGameModel<VassalRewardsModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/VassalRewardsModel.cs`

## 概述

`VassalRewardsModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<VassalRewardsModel>(new MyVassalRewardsModel())` 注册，以改变其计算逻辑。

## 主要属性

| Name | Signature |
|------|-----------|
| `InfluenceReward` | `public abstract float InfluenceReward { get; }` |
| `RelationRewardWithLeader` | `public abstract int RelationRewardWithLeader { get; }` |

## 主要方法

### GetTroopRewardsForJoiningKingdom
```csharp
public abstract TroopRoster GetTroopRewardsForJoiningKingdom(Kingdom kingdom)
```

### GetEquipmentRewardsForJoiningKingdom
```csharp
public abstract ItemRoster GetEquipmentRewardsForJoiningKingdom(Kingdom kingdom)
```

## 使用示例

```csharp
// VassalRewardsModel (Model) 的典型用法
Game.Current.ReplaceModel<VassalRewardsModel>(new MyVassalRewardsModel());
```

## 参见

- [完整类目录](../catalog)