<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TournamentModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TournamentModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class TournamentModel : MBGameModel<TournamentModel>`
**Base:** `MBGameModel<TournamentModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/TournamentModel.cs`

## Overview

`TournamentModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<TournamentModel>(new MyTournamentModel())` to change how it computes.

## Key Methods

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

## Usage Example

```csharp
// Typical usage of TournamentModel (Model)
Game.Current.ReplaceModel<TournamentModel>(new MyTournamentModel());
```

## See Also

- [Complete Class Catalog](../catalog)