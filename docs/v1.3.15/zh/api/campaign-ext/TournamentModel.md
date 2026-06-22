<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TournamentModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TournamentModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class TournamentModel : MBGameModel<TournamentModel>`
**Base:** `MBGameModel<TournamentModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/TournamentModel.cs`

## 概述

`TournamentModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<TournamentModel>(new MyTournamentModel())` 注册，以改变其计算逻辑。

## 主要方法

### GetTournamentStartChance
```csharp
public abstract float GetTournamentStartChance(Town town)
```

### CreateTournament
```csharp
public abstract TournamentGame CreateTournament(Town town)
```

### GetTournamentEndChance
```csharp
public abstract float GetTournamentEndChance(TournamentGame tournament)
```

### GetNumLeaderboardVictoriesAtGameStart
```csharp
public abstract int GetNumLeaderboardVictoriesAtGameStart()
```

### GetTournamentSimulationScore
```csharp
public abstract float GetTournamentSimulationScore(CharacterObject character)
```

### GetRenownReward
```csharp
public abstract int GetRenownReward(Hero winner, Town town)
```

### GetInfluenceReward
```csharp
public abstract int GetInfluenceReward(Hero winner, Town town)
```

### GetSkillXpGainFromTournament
```csharp
public abstract ValueTuple<SkillObject, int> GetSkillXpGainFromTournament(Town town)
```

### GetParticipantArmor
```csharp
public abstract Equipment GetParticipantArmor(CharacterObject participant)
```

### GetRegularRewardItems
```csharp
public abstract MBList<ItemObject> GetRegularRewardItems(Town town, int regularRewardMinValue, int regularRewardMaxValue)
```

### GetEliteRewardItems
```csharp
public abstract MBList<ItemObject> GetEliteRewardItems(Town town, int regularRewardMinValue, int regularRewardMaxValue)
```

## 使用示例

```csharp
// TournamentModel (Model) 的典型用法
Game.Current.ReplaceModel<TournamentModel>(new MyTournamentModel());
```

## 参见

- [完整类目录](../catalog)