<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SettlementPatrolModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SettlementPatrolModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class SettlementPatrolModel : MBGameModel<SettlementPatrolModel>`
**Base:** `MBGameModel<SettlementPatrolModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementPatrolModel.cs`

## Overview

`SettlementPatrolModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<SettlementPatrolModel>(new MySettlementPatrolModel())` to change how it computes.

## Key Methods

### GetPatrolPartySpawnDuration
```csharp
public abstract CampaignTime GetPatrolPartySpawnDuration(Settlement settlement, bool naval)
```

### CanSettlementHavePatrolParties
```csharp
public abstract bool CanSettlementHavePatrolParties(Settlement settlement, bool naval)
```

### GetPartyTemplateForPatrolParty
```csharp
public abstract PartyTemplateObject GetPartyTemplateForPatrolParty(Settlement settlement, bool naval)
```

## Usage Example

```csharp
// Typical usage of SettlementPatrolModel (Model)
Game.Current.ReplaceModel<SettlementPatrolModel>(new MySettlementPatrolModel());
```

## See Also

- [Complete Class Catalog](../catalog)