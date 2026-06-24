<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DisableHeroAction`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DisableHeroAction

## Mental Model

Treat `DisableHeroAction` as an entry point or data node for this subsystem: inspect its properties first, then decide which methods to call.

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `TaleWorlds.CampaignSystem/Actions/DisableHeroAction.cs`

DisableHeroAction is a set of static methods that trigger "DisableHero" in the campaign for a specific reason. Mods call its `Apply*` overloads to change game state (one per reason).

## Methods

### Apply

```csharp
public static void Apply(Hero hero)
```

**Purpose:** execute this entry point.

## Usage Example

```csharp
// Trigger this action from a mod
DisableHeroAction.Apply(hero);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Campaign System catalog](../catalog-campaign)