<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EnterSettlementAction`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# EnterSettlementAction

## Mental Model

Treat `EnterSettlementAction` as an entry point or data node for this subsystem: inspect its properties first, then decide which methods to call.

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `TaleWorlds.CampaignSystem/Actions/EnterSettlementAction.cs`

EnterSettlementAction is a set of static methods that trigger "EnterSettlement" in the campaign for a specific reason. Mods call its `Apply*` overloads to change game state (one per reason).

## Methods

### ApplyForParty

```csharp
public static void ApplyForParty(MobileParty mobileParty, Settlement settlement)
```

**Purpose:** for party.

### ApplyForPartyEntersAlley

```csharp
public static void ApplyForPartyEntersAlley(MobileParty party, Settlement settlement, Alley alley, bool isPlayerInvolved = false)
```

**Purpose:** for party enters alley.

### ApplyForCharacterOnly

```csharp
public static void ApplyForCharacterOnly(Hero hero, Settlement settlement)
```

**Purpose:** for character only.

### ApplyForPrisoner

```csharp
public static void ApplyForPrisoner(Hero hero, Settlement settlement)
```

**Purpose:** for prisoner.

## Usage Example

```csharp
// Trigger this action from a mod
EnterSettlementAction.ApplyForParty(mobileParty, settlement);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Campaign System catalog](../catalog-campaign)