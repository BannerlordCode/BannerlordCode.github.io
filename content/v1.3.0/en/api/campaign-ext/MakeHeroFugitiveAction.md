---
title: "MakeHeroFugitiveAction"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MakeHeroFugitiveAction`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MakeHeroFugitiveAction

## Mental Model

Treat `MakeHeroFugitiveAction` as an entry point or data node for this subsystem: inspect its properties first, then decide which methods to call.

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

**Purpose:** execute this entry point.

## Usage Example

```csharp
// Trigger this action from a mod
MakeHeroFugitiveAction.Apply(fugitive, false);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Campaign System catalog](../catalog-campaign)