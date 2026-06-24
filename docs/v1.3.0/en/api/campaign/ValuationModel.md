<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ValuationModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ValuationModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class ValuationModel : MBGameModel<ValuationModel>`
**Base:** `MBGameModel<ValuationModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/ValuationModel.cs`

## Overview

`ValuationModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `ValuationModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetValueOfTroop
`public abstract float GetValueOfTroop(CharacterObject troop)`

**Purpose:** Gets the current value of `value of troop`.

### GetMilitaryValueOfParty
`public abstract float GetMilitaryValueOfParty(MobileParty party)`

**Purpose:** Gets the current value of `military value of party`.

### GetValueOfHero
`public abstract float GetValueOfHero(Hero hero)`

**Purpose:** Gets the current value of `value of hero`.

## Usage Example

```csharp
var implementation = new CustomValuationModel();
```

## See Also

- [Complete Class Catalog](../catalog)