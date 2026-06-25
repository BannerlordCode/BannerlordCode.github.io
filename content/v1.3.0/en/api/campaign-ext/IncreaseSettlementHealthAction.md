---
title: "IncreaseSettlementHealthAction"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `IncreaseSettlementHealthAction`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# IncreaseSettlementHealthAction

## Mental Model

Treat `IncreaseSettlementHealthAction` as an entry point or data node for this subsystem: inspect its properties first, then decide which methods to call.

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `TaleWorlds.CampaignSystem/Actions/IncreaseSettlementHealthAction.cs`

IncreaseSettlementHealthAction is a set of static methods that trigger "IncreaseSettlementHealth" in the campaign for a specific reason. Mods call its `Apply*` overloads to change game state (one per reason).

## Methods

### Apply

```csharp
public static void Apply(Settlement settlement, float percentage)
```

**Purpose:** execute this entry point.

## Usage Example

```csharp
// Trigger this action from a mod
IncreaseSettlementHealthAction.Apply(settlement, 100);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Campaign System catalog](../catalog-campaign)