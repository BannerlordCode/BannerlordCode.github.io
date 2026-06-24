
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ChangeProductionTypeOfWorkshopAction`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ChangeProductionTypeOfWorkshopAction

## Mental Model

Treat `ChangeProductionTypeOfWorkshopAction` as an entry point or data node for this subsystem: inspect its properties first, then decide which methods to call.

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `TaleWorlds.CampaignSystem/Actions/ChangeProductionTypeOfWorkshopAction.cs`

ChangeProductionTypeOfWorkshopAction is a set of static methods that trigger "ChangeProductionTypeOfWorkshop" in the campaign for a specific reason. Mods call its `Apply*` overloads to change game state (one per reason).

## Methods

### Apply

```csharp
public static void Apply(Workshop workshop, WorkshopType newWorkshopType, bool ignoreCost = false)
```

**Purpose:** execute this entry point.

## Usage Example

```csharp
// Trigger this action from a mod
ChangeProductionTypeOfWorkshopAction.Apply(workshop, newWorkshopType, false);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Campaign System catalog](../catalog-campaign)