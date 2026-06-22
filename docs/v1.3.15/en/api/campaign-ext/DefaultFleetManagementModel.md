<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultFleetManagementModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultFleetManagementModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultFleetManagementModel : FleetManagementModel`
**Base:** `FleetManagementModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultFleetManagementModel.cs`

## Overview

`DefaultFleetManagementModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<DefaultFleetManagementModel>(new MyDefaultFleetManagementModel())` to change how it computes.

## Key Properties

| Name | Signature |
|------|-----------|
| `MinimumTroopCountRequiredToSendShips` | `public override int MinimumTroopCountRequiredToSendShips { get; }` |

## Key Methods

### CanSendShipToPlayerClan
```csharp
public override bool CanSendShipToPlayerClan(Ship ship, int playerShipsCount, int troopsCountToSend, out TextObject hint)
```

### CanTroopsReturn
```csharp
public override bool CanTroopsReturn()
```

### GetReturnTimeForTroops
```csharp
public override CampaignTime GetReturnTimeForTroops(Ship ship)
```

## Usage Example

```csharp
// Typical usage of DefaultFleetManagementModel (Model)
Game.Current.ReplaceModel<DefaultFleetManagementModel>(new MyDefaultFleetManagementModel());
```

## See Also

- [Complete Class Catalog](../catalog)