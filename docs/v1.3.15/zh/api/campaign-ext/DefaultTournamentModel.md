<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultTournamentModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultTournamentModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultTournamentModel : TournamentModel`
**Base:** `TournamentModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultTournamentModel.cs`

## 概述

`DefaultTournamentModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<DefaultTournamentModel>(new MyDefaultTournamentModel())` 注册，以改变其计算逻辑。

## 主要方法

### CreateTournament
```csharp
public override TournamentGame CreateTournament(Town town)
```

### GetTournamentStartChance
```csharp
public override float GetTournamentStartChance(Town town)
```

### GetNumLeaderboardVictoriesAtGameStart
```csharp
public override int GetNumLeaderboardVictoriesAtGameStart()
```

### GetTournamentEndChance
```csharp
public override float GetTournamentEndChance(TournamentGame tournament)
```

### GetTournamentSimulationScore
```csharp
public override float GetTournamentSimulationScore(CharacterObject character)
```

### GetRenownReward
```csharp
public override int GetRenownReward(Hero winner, Town town)
```

### GetInfluenceReward
```csharp
public override int GetInfluenceReward(Hero winner, Town town)
```

### GetSkillXpGainFromTournament
```csharp
public override ValueTuple<SkillObject, int> GetSkillXpGainFromTournament(Town town)
```

### GetParticipantArmor
```csharp
public override Equipment GetParticipantArmor(CharacterObject participant)
```

### GetRegularRewardItems
```csharp
public override MBList<ItemObject> GetRegularRewardItems(Town town, int regularRewardMinValue, int regularRewardMaxValue)
```

### GetEliteRewardItems
```csharp
public override MBList<ItemObject> GetEliteRewardItems(Town town, int regularRewardMinValue, int regularRewardMaxValue)
```

## 使用示例

```csharp
// DefaultTournamentModel (Model) 的典型用法
Game.Current.ReplaceModel<DefaultTournamentModel>(new MyDefaultTournamentModel());
```

## 参见

- [完整类目录](../catalog)