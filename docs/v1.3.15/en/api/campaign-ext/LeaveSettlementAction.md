<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `LeaveSettlementAction`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# LeaveSettlementAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `TaleWorlds.CampaignSystem/Actions/LeaveSettlementAction.cs`

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