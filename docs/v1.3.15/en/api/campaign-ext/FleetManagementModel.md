<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `FleetManagementModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# FleetManagementModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class FleetManagementModel : MBGameModel<FleetManagementModel>`
**Base:** `MBGameModel<FleetManagementModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/FleetManagementModel.cs`

## Overview

`FleetManagementModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<FleetManagementModel>(new MyFleetManagementModel())` to change how it computes.

## Key Properties

| Name | Signature |
|------|-----------|
| `MinimumTroopCountRequiredToSendShips` | `public abstract int MinimumTroopCountRequiredToSendShips { get; }` |

## Key Methods

### CanTroopsReturn
```csharp
public abstract bool CanTroopsReturn()
```

### GetReturnTimeForTroops
```csharp
public abstract CampaignTime GetReturnTimeForTroops(Ship ship)
```

### CanSendShipToPlayerClan
```csharp
public abstract bool CanSendShipToPlayerClan(Ship ship, int playerShipsCount, int troopsCountToSend, out TextObject hint)
```

## Usage Example

```csharp
// Typical usage of FleetManagementModel (Model)
Game.Current.ReplaceModel<FleetManagementModel>(new MyFleetManagementModel());
```

## See Also

- [Complete Class Catalog](../catalog)