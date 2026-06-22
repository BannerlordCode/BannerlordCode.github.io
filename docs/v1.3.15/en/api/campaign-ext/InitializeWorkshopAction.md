<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `InitializeWorkshopAction`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# InitializeWorkshopAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `TaleWorlds.CampaignSystem/Actions/InitializeWorkshopAction.cs`

InitializeWorkshopAction is a set of static methods that trigger "InitializeWorkshop" in the campaign for a specific reason. Mods call its `Apply*` overloads to change game state (one per reason).

## Methods

### ApplyByNewGame

```csharp
public static void ApplyByNewGame(Workshop workshop, Hero workshopOwner, WorkshopType workshopType)
```

**Purpose:** new game.

## Usage Example

```csharp
// Trigger this action from a mod
InitializeWorkshopAction.ApplyByNewGame(workshop, workshopOwner, workshopType);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Campaign System catalog](../catalog-campaign)