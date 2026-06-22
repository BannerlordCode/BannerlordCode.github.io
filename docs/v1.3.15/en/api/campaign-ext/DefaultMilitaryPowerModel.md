<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultMilitaryPowerModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultMilitaryPowerModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultMilitaryPowerModel : MilitaryPowerModel`
**Base:** `MilitaryPowerModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultMilitaryPowerModel.cs`

## Overview

`DefaultMilitaryPowerModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<DefaultMilitaryPowerModel>(new MyDefaultMilitaryPowerModel())` to change how it computes.

## Key Methods

### GetTroopPower
```csharp
public override float GetTroopPower(CharacterObject troop, BattleSideEnum side, MapEvent.PowerCalculationContext context, float leaderModifier)
```

### GetPowerOfParty
```csharp
public override float GetPowerOfParty(PartyBase party, BattleSideEnum side, MapEvent.PowerCalculationContext context)
```

### GetPowerModifierOfHero
```csharp
public override float GetPowerModifierOfHero(Hero leaderHero)
```

### GetContextModifier
```csharp
public override float GetContextModifier(CharacterObject troop, BattleSideEnum battleSide, MapEvent.PowerCalculationContext context)
```

### GetContextForPosition
```csharp
public override MapEvent.PowerCalculationContext GetContextForPosition(CampaignVec2 position)
```

### GetDefaultTroopPower
```csharp
public override float GetDefaultTroopPower(CharacterObject troop)
```

### GetContextModifier
```csharp
public override float GetContextModifier(Ship ship, BattleSideEnum battleSideEnum, MapEvent.PowerCalculationContext context)
```

## Usage Example

```csharp
// Typical usage of DefaultMilitaryPowerModel (Model)
Game.Current.ReplaceModel<DefaultMilitaryPowerModel>(new MyDefaultMilitaryPowerModel());
```

## See Also

- [Complete Class Catalog](../catalog)