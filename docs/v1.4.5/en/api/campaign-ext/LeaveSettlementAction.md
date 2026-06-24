<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `LeaveSettlementAction`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# LeaveSettlementAction

## Mental Model

Treat `LeaveSettlementAction` as an entry point or data node for this subsystem: inspect its properties first, then decide which methods to call.

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/LeaveSettlementAction.cs`

LeaveSettlementAction is a set of static methods that trigger "LeaveSettlement" in the campaign for a specific reason. Mods call its `Apply*` overloads to change game state (one per reason).

## Methods

### ApplyForParty

```csharp
public static void ApplyForParty(MobileParty mobileParty)
```

**Purpose:** for party.

### ApplyForCharacterOnly

```csharp
public static void ApplyForCharacterOnly(Hero hero)
```

**Purpose:** for character only.

## Usage Example

```csharp
// Trigger this action from a mod
LeaveSettlementAction.ApplyForParty(mobileParty);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Campaign System catalog](../catalog-campaign)