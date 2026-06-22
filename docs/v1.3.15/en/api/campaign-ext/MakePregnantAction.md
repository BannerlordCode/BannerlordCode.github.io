<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MakePregnantAction`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MakePregnantAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `TaleWorlds.CampaignSystem/Actions/MakePregnantAction.cs`

MakePregnantAction is a set of static methods that trigger "MakePregnant" in the campaign for a specific reason. Mods call its `Apply*` overloads to change game state (one per reason).

## Methods

### Apply

```csharp
public static void Apply(Hero mother)
```

**Purpose:** .

## Usage Example

```csharp
// Trigger this action from a mod
MakePregnantAction.Apply(mother);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Campaign System catalog](../catalog-campaign)