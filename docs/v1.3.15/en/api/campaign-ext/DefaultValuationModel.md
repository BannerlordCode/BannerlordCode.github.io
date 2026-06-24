<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultValuationModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultValuationModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultValuationModel : ValuationModel`
**Base:** `ValuationModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultValuationModel.cs`

## Overview

`DefaultValuationModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultValuationModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetMilitaryValueOfParty
`public override float GetMilitaryValueOfParty(MobileParty party)`

**Purpose:** Gets the current value of `military value of party`.

### GetValueOfTroop
`public override float GetValueOfTroop(CharacterObject troop)`

**Purpose:** Gets the current value of `value of troop`.

### GetValueOfHero
`public override float GetValueOfHero(Hero hero)`

**Purpose:** Gets the current value of `value of hero`.

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultValuationModel>(new MyDefaultValuationModel());
```

## See Also

- [Complete Class Catalog](../catalog)