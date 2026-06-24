<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DestroyKingdomAction`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DestroyKingdomAction

## Mental Model

Treat `DestroyKingdomAction` as an entry point or data node for this subsystem: inspect its properties first, then decide which methods to call.

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `TaleWorlds.CampaignSystem/Actions/DestroyKingdomAction.cs`

DestroyKingdomAction is a set of static methods that trigger "DestroyKingdom" in the campaign for a specific reason. Mods call its `Apply*` overloads to change game state (one per reason).

## Methods

### Apply

```csharp
public static void Apply(Kingdom destroyedKingdom)
```

**Purpose:** execute this entry point.

### ApplyByKingdomLeaderDeath

```csharp
public static void ApplyByKingdomLeaderDeath(Kingdom destroyedKingdom)
```

**Purpose:** kingdom leader death.

## Usage Example

```csharp
// Trigger this action from a mod
DestroyKingdomAction.Apply(destroyedKingdom);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Campaign System catalog](../catalog-campaign)