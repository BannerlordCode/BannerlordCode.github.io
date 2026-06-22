<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PartyTrainingModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PartyTrainingModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class PartyTrainingModel : MBGameModel<PartyTrainingModel>`
**Base:** `MBGameModel<PartyTrainingModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/PartyTrainingModel.cs`

## 概述

`PartyTrainingModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<PartyTrainingModel>(new MyPartyTrainingModel())` 注册，以改变其计算逻辑。

## 主要方法

### GenerateSharedXp
```csharp
public abstract int GenerateSharedXp(CharacterObject troop, int xp, MobileParty mobileParty)
```

### CalculateXpGainFromBattles
```csharp
public abstract ExplainedNumber CalculateXpGainFromBattles(FlattenedTroopRosterElement troopRosterElement, PartyBase party)
```

### GetXpReward
```csharp
public abstract int GetXpReward(CharacterObject character)
```

### GetEffectiveDailyExperience
```csharp
public abstract ExplainedNumber GetEffectiveDailyExperience(MobileParty party, TroopRosterElement troop)
```

## 使用示例

```csharp
// PartyTrainingModel (Model) 的典型用法
Game.Current.ReplaceModel<PartyTrainingModel>(new MyPartyTrainingModel());
```

## 参见

- [完整类目录](../catalog)