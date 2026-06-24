<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GiveItemAction`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GiveItemAction

## Mental Model

Treat `GiveItemAction` as an entry point or data node for this subsystem: inspect its properties first, then decide which methods to call.

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `TaleWorlds.CampaignSystem/Actions/GiveItemAction.cs`

GiveItemAction is a set of static methods that trigger "GiveItem" in the campaign for a specific reason. Mods call its `Apply*` overloads to change game state (one per reason).

## Methods

### ApplyForHeroes

```csharp
public static void ApplyForHeroes(Hero giver, Hero receiver, in ItemRosterElement itemRosterElement)
```

**Purpose:** for heroes.

### ApplyForParties

```csharp
public static void ApplyForParties(PartyBase giverParty, PartyBase receiverParty, in ItemRosterElement itemRosterElement)
```

**Purpose:** for parties.

## Usage Example

```csharp
// Trigger this action from a mod
GiveItemAction.ApplyForHeroes(giver, receiver, itemRosterElement);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Campaign System catalog](../catalog-campaign)