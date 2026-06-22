<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultDelayedTeleportationModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultDelayedTeleportationModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultDelayedTeleportationModel : DelayedTeleportationModel`
**Base:** `DelayedTeleportationModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultDelayedTeleportationModel.cs`

## Overview

`DefaultDelayedTeleportationModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<DefaultDelayedTeleportationModel>(new MyDefaultDelayedTeleportationModel())` to change how it computes.

## Key Properties

| Name | Signature |
|------|-----------|
| `DefaultTeleportationSpeed` | `public override float DefaultTeleportationSpeed { get; }` |

## Key Methods

### GetTeleportationDelayAsHours
```csharp
public override ExplainedNumber GetTeleportationDelayAsHours(Hero teleportingHero, PartyBase target)
```

### CanPerformImmediateTeleport
```csharp
public override bool CanPerformImmediateTeleport(Hero hero, MobileParty targetMobileParty, Settlement targetSettlement)
```

## Usage Example

```csharp
// Typical usage of DefaultDelayedTeleportationModel (Model)
Game.Current.ReplaceModel<DefaultDelayedTeleportationModel>(new MyDefaultDelayedTeleportationModel());
```

## See Also

- [Complete Class Catalog](../catalog)