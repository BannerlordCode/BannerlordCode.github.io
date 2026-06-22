<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultSettlementPatrolModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultSettlementPatrolModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultSettlementPatrolModel : SettlementPatrolModel`
**Base:** `SettlementPatrolModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementPatrolModel.cs`

## Overview

`DefaultSettlementPatrolModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<DefaultSettlementPatrolModel>(new MyDefaultSettlementPatrolModel())` to change how it computes.

## Key Methods

### GetPatrolPartySpawnDuration
```csharp
public override CampaignTime GetPatrolPartySpawnDuration(Settlement settlement, bool naval)
```

### CanSettlementHavePatrolParties
```csharp
public override bool CanSettlementHavePatrolParties(Settlement settlement, bool naval)
```

### GetPartyTemplateForPatrolParty
```csharp
public override PartyTemplateObject GetPartyTemplateForPatrolParty(Settlement settlement, bool naval)
```

## Usage Example

```csharp
// Typical usage of DefaultSettlementPatrolModel (Model)
Game.Current.ReplaceModel<DefaultSettlementPatrolModel>(new MyDefaultSettlementPatrolModel());
```

## See Also

- [Complete Class Catalog](../catalog)