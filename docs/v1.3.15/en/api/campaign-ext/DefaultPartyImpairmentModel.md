<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultPartyImpairmentModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultPartyImpairmentModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultPartyImpairmentModel : PartyImpairmentModel`
**Base:** `PartyImpairmentModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultPartyImpairmentModel.cs`

## Overview

`DefaultPartyImpairmentModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<DefaultPartyImpairmentModel>(new MyDefaultPartyImpairmentModel())` to change how it computes.

## Key Methods

### GetSiegeExpectedVulnerabilityTime
```csharp
public override float GetSiegeExpectedVulnerabilityTime()
```

### GetDisorganizedStateDuration
```csharp
public override ExplainedNumber GetDisorganizedStateDuration(MobileParty party)
```

### CanGetDisorganized
```csharp
public override bool CanGetDisorganized(PartyBase party)
```

### GetVulnerabilityStateDuration
```csharp
public override float GetVulnerabilityStateDuration(PartyBase party)
```

## Usage Example

```csharp
// Typical usage of DefaultPartyImpairmentModel (Model)
Game.Current.ReplaceModel<DefaultPartyImpairmentModel>(new MyDefaultPartyImpairmentModel());
```

## See Also

- [Complete Class Catalog](../catalog)