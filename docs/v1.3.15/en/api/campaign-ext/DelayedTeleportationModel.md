<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DelayedTeleportationModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DelayedTeleportationModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class DelayedTeleportationModel : MBGameModel<DelayedTeleportationModel>`
**Base:** `MBGameModel<DelayedTeleportationModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/DelayedTeleportationModel.cs`

## Overview

`DelayedTeleportationModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<DelayedTeleportationModel>(new MyDelayedTeleportationModel())` to change how it computes.

## Key Properties

| Name | Signature |
|------|-----------|
| `DefaultTeleportationSpeed` | `public abstract float DefaultTeleportationSpeed { get; }` |

## Key Methods

### GetTeleportationDelayAsHours
```csharp
public abstract ExplainedNumber GetTeleportationDelayAsHours(Hero teleportingHero, PartyBase target)
```

### CanPerformImmediateTeleport
```csharp
public abstract bool CanPerformImmediateTeleport(Hero hero, MobileParty targetMobileParty, Settlement targetSettlement)
```

## Usage Example

```csharp
// Typical usage of DelayedTeleportationModel (Model)
Game.Current.ReplaceModel<DelayedTeleportationModel>(new MyDelayedTeleportationModel());
```

## See Also

- [Complete Class Catalog](../catalog)