
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ClaimSettlementAction`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ClaimSettlementAction

## Mental Model

Treat `ClaimSettlementAction` as an entry point or data node for this subsystem: inspect its properties first, then decide which methods to call.

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `TaleWorlds.CampaignSystem/Actions/ClaimSettlementAction.cs`

ClaimSettlementAction is a set of static methods that trigger "ClaimSettlement" in the campaign for a specific reason. Mods call its `Apply*` overloads to change game state (one per reason).

## Methods

### Apply

```csharp
public static void Apply(Hero claimant, Settlement claimedSettlement)
```

**Purpose:** execute this entry point.

## Usage Example

```csharp
// Trigger this action from a mod
ClaimSettlementAction.Apply(claimant, claimedSettlement);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Campaign System catalog](../catalog-campaign)