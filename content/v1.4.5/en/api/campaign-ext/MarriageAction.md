---
title: "MarriageAction"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MarriageAction`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MarriageAction

## Mental Model

Treat `MarriageAction` as an entry point or data node for this subsystem: inspect its properties first, then decide which methods to call.

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/MarriageAction.cs`

MarriageAction is a set of static methods that trigger "Marriage" in the campaign for a specific reason. Mods call its `Apply*` overloads to change game state (one per reason).

## Methods

### Apply

```csharp
public static void Apply(Hero firstHero, Hero secondHero, bool showNotification = true)
```

**Purpose:** execute this entry point.

## Usage Example

```csharp
// Trigger this action from a mod
MarriageAction.Apply(firstHero, secondHero, false);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Campaign System catalog](../catalog-campaign)