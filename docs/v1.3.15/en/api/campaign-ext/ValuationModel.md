<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ValuationModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ValuationModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class ValuationModel : MBGameModel<ValuationModel>`
**Base:** `MBGameModel<ValuationModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/ValuationModel.cs`

## Overview

`ValuationModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<ValuationModel>(new MyValuationModel())` to change how it computes.

## Key Methods

### GetValueOfTroop
```csharp
public abstract float GetValueOfTroop(CharacterObject troop)
```

### GetMilitaryValueOfParty
```csharp
public abstract float GetMilitaryValueOfParty(MobileParty party)
```

### GetValueOfHero
```csharp
public abstract float GetValueOfHero(Hero hero)
```

## Usage Example

```csharp
// Typical usage of ValuationModel (Model)
Game.Current.ReplaceModel<ValuationModel>(new MyValuationModel());
```

## See Also

- [Complete Class Catalog](../catalog)