<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SiegeAftermathAction`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SiegeAftermathAction

## Mental Model

Treat `SiegeAftermathAction` as an entry point or data node for this subsystem: inspect its properties first, then decide which methods to call.

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/SiegeAftermathAction.cs`

SiegeAftermathAction is a set of static methods that trigger "SiegeAftermath" in the campaign for a specific reason. Mods call its `Apply*` overloads to change game state (one per reason).

## Methods

### ApplyAftermath

```csharp
public static void ApplyAftermath(MobileParty attackerParty, Settlement settlement, SiegeAftermath aftermathType, Clan previousSettlementOwner, Dictionary<MobileParty, float> partyContributions)
```

**Purpose:** aftermath.

## Usage Example

```csharp
// Trigger this action from a mod
SiegeAftermathAction.ApplyAftermath(attackerParty, settlement, aftermathType, previousSettlementOwner, dictionary<MobileParty, 100);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Campaign System catalog](../catalog-campaign)