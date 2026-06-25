---
title: "PayForCrimeAction"
description: "Auto-generated campaign action reference for PayForCrimeAction."
---
# PayForCrimeAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/PayForCrimeAction.cs`

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

**Purpose:** .

## Usage Example

```csharp
// Trigger this action from a mod
PayForCrimeAction.GetClearCrimeCost(faction, paymentMethod);
```

## See Also

- [Area Index](../)
- [Campaign System](../campaign/)