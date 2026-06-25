---
title: "DefaultDelayedTeleportationModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultDelayedTeleportationModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultDelayedTeleportationModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultDelayedTeleportationModel : DelayedTeleportationModel`
**Base:** `DelayedTeleportationModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultDelayedTeleportationModel.cs`

## Overview

`DefaultDelayedTeleportationModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultDelayedTeleportationModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `DefaultTeleportationSpeed` | `public override float DefaultTeleportationSpeed { get; }` |

## Key Methods

### GetTeleportationDelayAsHours
`public override ExplainedNumber GetTeleportationDelayAsHours(Hero teleportingHero, PartyBase target)`

**Purpose:** Gets the current value of `teleportation delay as hours`.

### CanPerformImmediateTeleport
`public override bool CanPerformImmediateTeleport(Hero hero, MobileParty targetMobileParty, Settlement targetSettlement)`

**Purpose:** Checks whether the current object can `perform immediate teleport`.

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultDelayedTeleportationModel>(new MyDefaultDelayedTeleportationModel());
```

## See Also

- [Complete Class Catalog](../catalog)