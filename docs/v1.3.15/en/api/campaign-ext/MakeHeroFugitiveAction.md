<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MakeHeroFugitiveAction`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MakeHeroFugitiveAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `TaleWorlds.CampaignSystem/Actions/MakeHeroFugitiveAction.cs`

MakeHeroFugitiveAction is a set of static methods that trigger "MakeHeroFugitive" in the campaign for a specific reason. Mods call its `Apply*` overloads to change game state (one per reason).

## Methods

### Apply

```csharp
public static void Apply(Hero fugitive, bool showNotification = false)
```

**Purpose:** .

## Usage Example

```csharp
// Trigger this action from a mod
MakeHeroFugitiveAction.Apply(fugitive, false);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Campaign System catalog](../catalog-campaign)