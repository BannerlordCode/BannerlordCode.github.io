
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `StartMercenaryServiceAction`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# StartMercenaryServiceAction

## Mental Model

Treat `StartMercenaryServiceAction` as an entry point or data node for this subsystem: inspect its properties first, then decide which methods to call.

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `TaleWorlds.CampaignSystem/Actions/StartMercenaryServiceAction.cs`

StartMercenaryServiceAction is a set of static methods that trigger "StartMercenaryService" in the campaign for a specific reason. Mods call its `Apply*` overloads to change game state (one per reason).

## Methods

### ApplyByDefault

```csharp
public static void ApplyByDefault(Clan clan, Kingdom kingdom, int awardMultiplier)
```

**Purpose:** default.

## Usage Example

```csharp
// Trigger this action from a mod
StartMercenaryServiceAction.ApplyByDefault(clan, kingdom, 100);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Campaign System catalog](../catalog-campaign)