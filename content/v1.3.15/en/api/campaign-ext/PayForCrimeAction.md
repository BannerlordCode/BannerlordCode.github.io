---
title: "PayForCrimeAction"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PayForCrimeAction`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PayForCrimeAction

## Mental Model

Treat `PayForCrimeAction` as an entry point or data node for this subsystem: inspect its properties first, then decide which methods to call.

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `TaleWorlds.CampaignSystem/Actions/PayForCrimeAction.cs`

PayForCrimeAction is a set of static methods that trigger "PayForCrime" in the campaign for a specific reason. Mods call its `Apply*` overloads to change game state (one per reason).

## Methods

### GetClearCrimeCost

```csharp
public static float GetClearCrimeCost(IFaction faction, CrimeModel.PaymentMethod paymentMethod)
```

**Purpose:** get clear crime cost.

### Apply

```csharp
public static void Apply(IFaction faction, CrimeModel.PaymentMethod paymentMethod)
```

**Purpose:** execute this entry point.

## Usage Example

```csharp
// Trigger this action from a mod
PayForCrimeAction.GetClearCrimeCost(faction, paymentMethod);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Campaign System catalog](../catalog-campaign)