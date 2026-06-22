<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultVassalRewardsModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultVassalRewardsModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultVassalRewardsModel : VassalRewardsModel`
**Base:** `VassalRewardsModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultVassalRewardsModel.cs`

## 概述

`DefaultVassalRewardsModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<DefaultVassalRewardsModel>(new MyDefaultVassalRewardsModel())` 注册，以改变其计算逻辑。

## 主要属性

| Name | Signature |
|------|-----------|
| `RelationRewardWithLeader` | `public override int RelationRewardWithLeader { get; }` |
| `InfluenceReward` | `public override float InfluenceReward { get; }` |

## 主要方法

### GetEquipmentRewardsForJoiningKingdom
```csharp
public override ItemRoster GetEquipmentRewardsForJoiningKingdom(Kingdom kingdom)
```

### GetTroopRewardsForJoiningKingdom
```csharp
public override TroopRoster GetTroopRewardsForJoiningKingdom(Kingdom kingdom)
```

## 使用示例

```csharp
// DefaultVassalRewardsModel (Model) 的典型用法
Game.Current.ReplaceModel<DefaultVassalRewardsModel>(new MyDefaultVassalRewardsModel());
```

## 参见

- [完整类目录](../catalog)