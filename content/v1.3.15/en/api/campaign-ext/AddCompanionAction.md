---
title: "AddCompanionAction"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AddCompanionAction`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# AddCompanionAction

## Mental Model

Treat `AddCompanionAction` as an entry point or data node for this subsystem: inspect its properties first, then decide which methods to call.

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

**Purpose:** execute this entry point.

## Usage Example

```csharp
// Trigger this action from a mod
AddCompanionAction.Apply(clan, companion);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Campaign System catalog](../catalog-campaign)