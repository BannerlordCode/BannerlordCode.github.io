<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ApplyHeirSelectionAction`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ApplyHeirSelectionAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `TaleWorlds.CampaignSystem/Actions/ApplyHeirSelectionAction.cs`

ApplyHeirSelectionAction is a set of static methods that trigger "ApplyHeirSelection" in the campaign for a specific reason. Mods call its `Apply*` overloads to change game state (one per reason).

## Methods

### ApplyByDeath

```csharp
public static void ApplyByDeath(Hero heir)
```

**Purpose:** death.

### ApplyByRetirement

```csharp
public static void ApplyByRetirement(Hero heir)
```

**Purpose:** retirement.

## Usage Example

```csharp
// Trigger this action from a mod
ApplyHeirSelectionAction.ApplyByDeath(heir);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Campaign System catalog](../catalog-campaign)