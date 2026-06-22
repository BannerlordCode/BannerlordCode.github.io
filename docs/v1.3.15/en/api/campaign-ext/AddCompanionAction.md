<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AddCompanionAction`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# AddCompanionAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `TaleWorlds.CampaignSystem/Actions/AddCompanionAction.cs`

AddCompanionAction is a set of static methods that trigger "AddCompanion" in the campaign for a specific reason. Mods call its `Apply*` overloads to change game state (one per reason).

## Methods

### Apply

```csharp
public static void Apply(Clan clan, Hero companion)
```

**Purpose:** .

## Usage Example

```csharp
// Trigger this action from a mod
AddCompanionAction.Apply(clan, companion);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Campaign System catalog](../catalog-campaign)