---
title: "DefaultFleetManagementModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultFleetManagementModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultFleetManagementModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultFleetManagementModel : FleetManagementModel`
**Base:** `FleetManagementModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultFleetManagementModel.cs`

## Overview

`DefaultFleetManagementModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultFleetManagementModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### CanSendShipToPlayerClan
`public override bool CanSendShipToPlayerClan(Ship ship, int playerShipsCount, int troopsCountToSend, out TextObject hint)`

**Purpose:** Checks whether the current object can `send ship to player clan`.

### CanTroopsReturn
`public override bool CanTroopsReturn()`

**Purpose:** Checks whether the current object can `troops return`.

### GetReturnTimeForTroops
`public override CampaignTime GetReturnTimeForTroops(Ship ship)`

**Purpose:** Gets the current value of `return time for troops`.

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultFleetManagementModel>(new MyDefaultFleetManagementModel());
```

## See Also

- [Complete Class Catalog](../catalog)