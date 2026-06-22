<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MilitaryPowerModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MilitaryPowerModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class MilitaryPowerModel : MBGameModel<MilitaryPowerModel>`
**Base:** `MBGameModel<MilitaryPowerModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/MilitaryPowerModel.cs`

## Overview

`MilitaryPowerModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<MilitaryPowerModel>(new MyMilitaryPowerModel())` to change how it computes.

## Key Methods

### GetTroopPower
```csharp
public abstract float GetTroopPower(CharacterObject troop, BattleSideEnum side, MapEvent.PowerCalculationContext context, float leaderModifier)
```

### GetPowerOfParty
```csharp
public abstract float GetPowerOfParty(PartyBase party, BattleSideEnum side, MapEvent.PowerCalculationContext context)
```

### GetContextModifier
```csharp
public abstract float GetContextModifier(CharacterObject troop, BattleSideEnum battleSideEnum, MapEvent.PowerCalculationContext context)
```

### GetContextModifier
```csharp
public abstract float GetContextModifier(Ship ship, BattleSideEnum battleSideEnum, MapEvent.PowerCalculationContext context)
```

### GetContextForPosition
```csharp
public abstract MapEvent.PowerCalculationContext GetContextForPosition(CampaignVec2 position)
```

### GetDefaultTroopPower
```csharp
public abstract float GetDefaultTroopPower(CharacterObject troop)
```

### GetPowerModifierOfHero
```csharp
public abstract float GetPowerModifierOfHero(Hero leaderHero)
```

## Usage Example

```csharp
// Typical usage of MilitaryPowerModel (Model)
Game.Current.ReplaceModel<MilitaryPowerModel>(new MyMilitaryPowerModel());
```

## See Also

- [Complete Class Catalog](../catalog)