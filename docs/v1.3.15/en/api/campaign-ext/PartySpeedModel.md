<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PartySpeedModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PartySpeedModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class PartySpeedModel : MBGameModel<PartySpeedModel>`
**Base:** `MBGameModel<PartySpeedModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/PartySpeedModel.cs`

## Overview

`PartySpeedModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<PartySpeedModel>(new MyPartySpeedModel())` to change how it computes.

## Key Properties

| Name | Signature |
|------|-----------|
| `BaseSpeed` | `public abstract float BaseSpeed { get; }` |
| `MinimumSpeed` | `public abstract float MinimumSpeed { get; }` |

## Key Methods

### CalculateBaseSpeed
```csharp
public abstract ExplainedNumber CalculateBaseSpeed(MobileParty party, bool includeDescriptions = false, int additionalTroopOnFootCount = 0, int additionalTroopOnHorseCount = 0)
```

### CalculateFinalSpeed
```csharp
public abstract ExplainedNumber CalculateFinalSpeed(MobileParty mobileParty, ExplainedNumber finalSpeed)
```

## Usage Example

```csharp
// Typical usage of PartySpeedModel (Model)
Game.Current.ReplaceModel<PartySpeedModel>(new MyPartySpeedModel());
```

## See Also

- [Complete Class Catalog](../catalog)