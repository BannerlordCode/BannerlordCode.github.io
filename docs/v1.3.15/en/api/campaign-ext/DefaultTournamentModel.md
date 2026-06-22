<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultTournamentModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultTournamentModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultTournamentModel : TournamentModel`
**Base:** `TournamentModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultTournamentModel.cs`

## Overview

`DefaultTournamentModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<DefaultTournamentModel>(new MyDefaultTournamentModel())` to change how it computes.

## Key Methods

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

## Usage Example

```csharp
// Typical usage of DefaultTournamentModel (Model)
Game.Current.ReplaceModel<DefaultTournamentModel>(new MyDefaultTournamentModel());
```

## See Also

- [Complete Class Catalog](../catalog)