<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ApplyHeirSelectionAction`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ApplyHeirSelectionAction

## Mental Model

Treat `ApplyHeirSelectionAction` as an entry point or data node for this subsystem: inspect its properties first, then decide which methods to call.

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