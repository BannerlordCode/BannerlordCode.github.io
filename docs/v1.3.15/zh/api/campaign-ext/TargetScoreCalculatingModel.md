<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TargetScoreCalculatingModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TargetScoreCalculatingModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class TargetScoreCalculatingModel : MBGameModel<TargetScoreCalculatingModel>`
**Base:** `MBGameModel<TargetScoreCalculatingModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/TargetScoreCalculatingModel.cs`

## 概述

`TargetScoreCalculatingModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<TargetScoreCalculatingModel>(new MyTargetScoreCalculatingModel())` 注册，以改变其计算逻辑。

## 主要属性

| Name | Signature |
|------|-----------|
| `TravelingToAssignmentFactor` | `public abstract float TravelingToAssignmentFactor { get; }` |
| `BesiegingFactor` | `public abstract float BesiegingFactor { get; }` |
| `AssaultingTownFactor` | `public abstract float AssaultingTownFactor { get; }` |
| `RaidingFactor` | `public abstract float RaidingFactor { get; }` |
| `DefendingFactor` | `public abstract float DefendingFactor { get; }` |

## 主要方法

### GetPatrollingFactor
```csharp
public abstract float GetPatrollingFactor(bool isNavalPatrolling)
```

### GetTargetScoreForFaction
```csharp
public abstract float GetTargetScoreForFaction(Settlement targetSettlement, Army.ArmyTypes missionType, MobileParty mobileParty, float ourStrength)
```

### CalculatePatrollingScoreForSettlement
```csharp
public abstract float CalculatePatrollingScoreForSettlement(Settlement settlement, bool isFromPort, MobileParty mobileParty)
```

### CurrentObjectiveValue
```csharp
public abstract float CurrentObjectiveValue(MobileParty mobileParty)
```

## 使用示例

```csharp
// TargetScoreCalculatingModel (Model) 的典型用法
Game.Current.ReplaceModel<TargetScoreCalculatingModel>(new MyTargetScoreCalculatingModel());
```

## 参见

- [完整类目录](../catalog)