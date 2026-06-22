<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ChangeCrimeRatingAction`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ChangeCrimeRatingAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `TaleWorlds.CampaignSystem/Actions/ChangeCrimeRatingAction.cs`

ChangeCrimeRatingAction is a set of static methods that trigger "ChangeCrimeRating" in the campaign for a specific reason. Mods call its `Apply*` overloads to change game state (one per reason).

## Methods

### Apply

```csharp
public static void Apply(IFaction faction, float deltaCrimeRating, bool showNotification = true)
```

**Purpose:** .

## Usage Example

```csharp
// Trigger this action from a mod
ChangeCrimeRatingAction.Apply(faction, 100, false);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Campaign System catalog](../catalog-campaign)