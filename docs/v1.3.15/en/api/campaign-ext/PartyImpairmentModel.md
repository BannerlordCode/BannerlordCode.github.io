<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PartyImpairmentModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PartyImpairmentModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class PartyImpairmentModel : MBGameModel<PartyImpairmentModel>`
**Base:** `MBGameModel<PartyImpairmentModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/PartyImpairmentModel.cs`

## Overview

`PartyImpairmentModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<PartyImpairmentModel>(new MyPartyImpairmentModel())` to change how it computes.

## Key Methods

### GetDisorganizedStateDuration
```csharp
public abstract ExplainedNumber GetDisorganizedStateDuration(MobileParty party)
```

### GetVulnerabilityStateDuration
```csharp
public abstract float GetVulnerabilityStateDuration(PartyBase party)
```

### GetSiegeExpectedVulnerabilityTime
```csharp
public abstract float GetSiegeExpectedVulnerabilityTime()
```

### CanGetDisorganized
```csharp
public abstract bool CanGetDisorganized(PartyBase partyBase)
```

## Usage Example

```csharp
// Typical usage of PartyImpairmentModel (Model)
Game.Current.ReplaceModel<PartyImpairmentModel>(new MyPartyImpairmentModel());
```

## See Also

- [Complete Class Catalog](../catalog)