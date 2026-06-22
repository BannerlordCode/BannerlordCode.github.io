<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BribeGuardsAction`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BribeGuardsAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `TaleWorlds.CampaignSystem/Actions/BribeGuardsAction.cs`

BribeGuardsAction is a set of static methods that trigger "BribeGuards" in the campaign for a specific reason. Mods call its `Apply*` overloads to change game state (one per reason).

## Methods

### Apply

```csharp
public static void Apply(Settlement settlement, int gold)
```

**Purpose:** .

## Usage Example

```csharp
// Trigger this action from a mod
BribeGuardsAction.Apply(settlement, 100);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Campaign System catalog](../catalog-campaign)