
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BreakInOutBesiegedSettlementAction`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BreakInOutBesiegedSettlementAction

## Mental Model

Treat `BreakInOutBesiegedSettlementAction` as an entry point or data node for this subsystem: inspect its properties first, then decide which methods to call.

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `TaleWorlds.CampaignSystem/Actions/BreakInOutBesiegedSettlementAction.cs`

BreakInOutBesiegedSettlementAction is a set of static methods that trigger "BreakInOutBesiegedSettlement" in the campaign for a specific reason. Mods call its `Apply*` overloads to change game state (one per reason).

## Methods

### ApplyBreakIn

```csharp
public static void ApplyBreakIn(out TroopRoster casualties, out int armyCasualtiesCount, bool isFromPort)
```

**Purpose:** break in.

### ApplyBreakOut

```csharp
public static void ApplyBreakOut(out TroopRoster casualties, out int armyCasualtiesCount, bool isFromPort)
```

**Purpose:** break out.

## Usage Example

```csharp
// Trigger this action from a mod
BreakInOutBesiegedSettlementAction.ApplyBreakIn(casualties, armyCasualtiesCount, false);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Campaign System catalog](../catalog-campaign)