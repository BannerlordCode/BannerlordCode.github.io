<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultDifficultyModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultDifficultyModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultDifficultyModel : DifficultyModel`
**Base:** `DifficultyModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultDifficultyModel.cs`

## Overview

`DefaultDifficultyModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<DefaultDifficultyModel>(new MyDefaultDifficultyModel())` to change how it computes.

## Key Methods

### GetPlayerTroopsReceivedDamageMultiplier
```csharp
public override float GetPlayerTroopsReceivedDamageMultiplier()
```

### GetPlayerRecruitSlotBonus
```csharp
public override int GetPlayerRecruitSlotBonus()
```

### GetPlayerMapMovementSpeedBonusMultiplier
```csharp
public override float GetPlayerMapMovementSpeedBonusMultiplier()
```

### GetStealthDifficultyMultiplier
```csharp
public override float GetStealthDifficultyMultiplier()
```

### GetDisguiseDifficultyMultiplier
```csharp
public override float GetDisguiseDifficultyMultiplier()
```

### GetCombatAIDifficultyMultiplier
```csharp
public override float GetCombatAIDifficultyMultiplier()
```

### GetPersuasionBonusChance
```csharp
public override float GetPersuasionBonusChance()
```

### GetClanMemberDeathChanceMultiplier
```csharp
public override float GetClanMemberDeathChanceMultiplier()
```

## Usage Example

```csharp
// Typical usage of DefaultDifficultyModel (Model)
Game.Current.ReplaceModel<DefaultDifficultyModel>(new MyDefaultDifficultyModel());
```

## See Also

- [Complete Class Catalog](../catalog)