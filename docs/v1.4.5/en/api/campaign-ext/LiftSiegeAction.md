<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `LiftSiegeAction`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# LiftSiegeAction

## Mental Model

Treat `LiftSiegeAction` as an entry point or data node for this subsystem: inspect its properties first, then decide which methods to call.

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/LiftSiegeAction.cs`

LiftSiegeAction is a set of static methods that trigger "LiftSiege" in the campaign for a specific reason. Mods call its `Apply*` overloads to change game state (one per reason).

## Methods

### GetGameAction

```csharp
public static void GetGameAction(MobileParty side1Party)
```

**Purpose:** get game action.

## Usage Example

```csharp
// Trigger this action from a mod
LiftSiegeAction.GetGameAction(side1Party);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Campaign System catalog](../catalog-campaign)