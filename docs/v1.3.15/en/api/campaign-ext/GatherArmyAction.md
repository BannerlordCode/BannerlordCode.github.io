<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GatherArmyAction`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GatherArmyAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `TaleWorlds.CampaignSystem/Actions/GatherArmyAction.cs`

GatherArmyAction is a set of static methods that trigger "GatherArmy" in the campaign for a specific reason. Mods call its `Apply*` overloads to change game state (one per reason).

## Methods

### Apply

```csharp
public static void Apply(MobileParty leaderParty, IMapPoint gatheringPoint)
```

**Purpose:** .

## Usage Example

```csharp
// Trigger this action from a mod
GatherArmyAction.Apply(leaderParty, gatheringPoint);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Campaign System catalog](../catalog-campaign)