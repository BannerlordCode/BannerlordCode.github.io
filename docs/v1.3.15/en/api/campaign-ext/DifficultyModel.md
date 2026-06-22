<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DifficultyModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DifficultyModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class DifficultyModel : MBGameModel<DifficultyModel>`
**Base:** `MBGameModel<DifficultyModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/DifficultyModel.cs`

## Overview

`DifficultyModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<DifficultyModel>(new MyDifficultyModel())` to change how it computes.

## Key Methods

### GetPlayerTroopsReceivedDamageMultiplier
```csharp
public abstract float GetPlayerTroopsReceivedDamageMultiplier()
```

### GetPlayerRecruitSlotBonus
```csharp
public abstract int GetPlayerRecruitSlotBonus()
```

### GetPlayerMapMovementSpeedBonusMultiplier
```csharp
public abstract float GetPlayerMapMovementSpeedBonusMultiplier()
```

### GetCombatAIDifficultyMultiplier
```csharp
public abstract float GetCombatAIDifficultyMultiplier()
```

### GetPersuasionBonusChance
```csharp
public abstract float GetPersuasionBonusChance()
```

### GetClanMemberDeathChanceMultiplier
```csharp
public abstract float GetClanMemberDeathChanceMultiplier()
```

### GetStealthDifficultyMultiplier
```csharp
public abstract float GetStealthDifficultyMultiplier()
```

### GetDisguiseDifficultyMultiplier
```csharp
public abstract float GetDisguiseDifficultyMultiplier()
```

## Usage Example

```csharp
// Typical usage of DifficultyModel (Model)
Game.Current.ReplaceModel<DifficultyModel>(new MyDifficultyModel());
```

## See Also

- [Complete Class Catalog](../catalog)