
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MakePeaceAction`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MakePeaceAction

## Mental Model

Treat `MakePeaceAction` as an entry point or data node for this subsystem: inspect its properties first, then decide which methods to call.

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `TaleWorlds.CampaignSystem/Actions/MakePeaceAction.cs`

MakePeaceAction is a set of static methods that trigger "MakePeace" in the campaign for a specific reason. Mods call its `Apply*` overloads to change game state (one per reason).

## Methods

### Apply

```csharp
public static void Apply(IFaction faction1, IFaction faction2)
```

**Purpose:** execute this entry point.

### ApplyByKingdomDecision

```csharp
public static void ApplyByKingdomDecision(IFaction faction1, IFaction faction2, int dailyTributeFrom1To2, int dailyTributeDuration)
```

**Purpose:** kingdom decision.

## Usage Example

```csharp
// Trigger this action from a mod
MakePeaceAction.Apply(faction1, faction2);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Campaign System catalog](../catalog-campaign)