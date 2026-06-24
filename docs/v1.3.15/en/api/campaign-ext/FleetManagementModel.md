<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `FleetManagementModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# FleetManagementModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class FleetManagementModel : MBGameModel<FleetManagementModel>`
**Base:** `MBGameModel<FleetManagementModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/FleetManagementModel.cs`

## Overview

`FleetManagementModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `FleetManagementModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `MinimumTroopCountRequiredToSendShips` | `public abstract int MinimumTroopCountRequiredToSendShips { get; }` |

## Key Methods

### CanTroopsReturn
`public abstract bool CanTroopsReturn()`

**Purpose:** Checks whether the current object can `troops return`.

### GetReturnTimeForTroops
`public abstract CampaignTime GetReturnTimeForTroops(Ship ship)`

**Purpose:** Gets the current value of `return time for troops`.

### CanSendShipToPlayerClan
`public abstract bool CanSendShipToPlayerClan(Ship ship, int playerShipsCount, int troopsCountToSend, out TextObject hint)`

**Purpose:** Checks whether the current object can `send ship to player clan`.

## Usage Example

```csharp
var implementation = new CustomFleetManagementModel();
```

## See Also

- [Complete Class Catalog](../catalog)