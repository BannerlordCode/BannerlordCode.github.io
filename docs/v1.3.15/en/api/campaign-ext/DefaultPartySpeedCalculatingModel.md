<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultPartySpeedCalculatingModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultPartySpeedCalculatingModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultPartySpeedCalculatingModel : PartySpeedModel`
**Base:** `PartySpeedModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultPartySpeedCalculatingModel.cs`

## Overview

`DefaultPartySpeedCalculatingModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<DefaultPartySpeedCalculatingModel>(new MyDefaultPartySpeedCalculatingModel())` to change how it computes.

## Key Properties

| Name | Signature |
|------|-----------|
| `BaseSpeed` | `public override float BaseSpeed { get; }` |
| `MinimumSpeed` | `public override float MinimumSpeed { get; }` |

## Key Methods

### CalculateBaseSpeed
```csharp
public override ExplainedNumber CalculateBaseSpeed(MobileParty mobileParty, bool includeDescriptions = false, int additionalTroopOnFootCount = 0, int additionalTroopOnHorseCount = 0)
```

### CalculateFinalSpeed
```csharp
public override ExplainedNumber CalculateFinalSpeed(MobileParty mobileParty, ExplainedNumber finalSpeed)
```

## Usage Example

```csharp
// Typical usage of DefaultPartySpeedCalculatingModel (Model)
Game.Current.ReplaceModel<DefaultPartySpeedCalculatingModel>(new MyDefaultPartySpeedCalculatingModel());
```

## See Also

- [Complete Class Catalog](../catalog)