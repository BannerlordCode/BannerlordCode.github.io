---
title: "AdoptHeroAction"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AdoptHeroAction`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# AdoptHeroAction

## Mental Model

Treat `AdoptHeroAction` as an entry point or data node for this subsystem: inspect its properties first, then decide which methods to call.

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `TaleWorlds.CampaignSystem/Actions/AdoptHeroAction.cs`

AdoptHeroAction is a set of static methods that trigger "AdoptHero" in the campaign for a specific reason. Mods call its `Apply*` overloads to change game state (one per reason).

## Methods

### Apply

```csharp
public static void Apply(Hero adoptedHero)
```

**Purpose:** execute this entry point.

## Usage Example

```csharp
// Trigger this action from a mod
AdoptHeroAction.Apply(adoptedHero);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Campaign System catalog](../catalog-campaign)