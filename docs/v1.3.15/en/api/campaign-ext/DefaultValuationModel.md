<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultValuationModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultValuationModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultValuationModel : ValuationModel`
**Base:** `ValuationModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultValuationModel.cs`

## Overview

`DefaultValuationModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<DefaultValuationModel>(new MyDefaultValuationModel())` to change how it computes.

## Key Methods

### GetMilitaryValueOfParty
```csharp
public override float GetMilitaryValueOfParty(MobileParty party)
```

### GetValueOfTroop
```csharp
public override float GetValueOfTroop(CharacterObject troop)
```

### GetValueOfHero
```csharp
public override float GetValueOfHero(Hero hero)
```

## Usage Example

```csharp
// Typical usage of DefaultValuationModel (Model)
Game.Current.ReplaceModel<DefaultValuationModel>(new MyDefaultValuationModel());
```

## See Also

- [Complete Class Catalog](../catalog)