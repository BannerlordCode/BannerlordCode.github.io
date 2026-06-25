---
title: "DelayedTeleportationModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DelayedTeleportationModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DelayedTeleportationModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class DelayedTeleportationModel : MBGameModel<DelayedTeleportationModel>`
**Base:** `MBGameModel<DelayedTeleportationModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/DelayedTeleportationModel.cs`

## Overview

`DelayedTeleportationModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DelayedTeleportationModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `DefaultTeleportationSpeed` | `public abstract float DefaultTeleportationSpeed { get; }` |

## Key Methods

### GetTeleportationDelayAsHours
`public abstract ExplainedNumber GetTeleportationDelayAsHours(Hero teleportingHero, PartyBase target)`

**Purpose:** Gets the current value of `teleportation delay as hours`.

### CanPerformImmediateTeleport
`public abstract bool CanPerformImmediateTeleport(Hero hero, MobileParty targetMobileParty, Settlement targetSettlement)`

**Purpose:** Checks whether the current object can `perform immediate teleport`.

## Usage Example

```csharp
var implementation = new CustomDelayedTeleportationModel();
```

## See Also

- [Complete Class Catalog](../catalog)