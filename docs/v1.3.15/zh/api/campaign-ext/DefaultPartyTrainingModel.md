<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultPartyTrainingModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultPartyTrainingModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultPartyTrainingModel : PartyTrainingModel`
**Base:** `PartyTrainingModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultPartyTrainingModel.cs`

## 概述

`DefaultPartyTrainingModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<DefaultPartyTrainingModel>(new MyDefaultPartyTrainingModel())` 注册，以改变其计算逻辑。

## 主要方法

### GetXpReward
```csharp
public override int GetXpReward(CharacterObject character)
```

### GetEffectiveDailyExperience
```csharp
public override ExplainedNumber GetEffectiveDailyExperience(MobileParty mobileParty, TroopRosterElement troop)
```

### GenerateSharedXp
```csharp
public override int GenerateSharedXp(CharacterObject troop, int xp, MobileParty mobileParty)
```

### CalculateXpGainFromBattles
```csharp
public override ExplainedNumber CalculateXpGainFromBattles(FlattenedTroopRosterElement troopRosterElement, PartyBase party)
```

## 使用示例

```csharp
// DefaultPartyTrainingModel (Model) 的典型用法
Game.Current.ReplaceModel<DefaultPartyTrainingModel>(new MyDefaultPartyTrainingModel());
```

## 参见

- [完整类目录](../catalog)