---
title: "SellPrisonersAction"
description: "Auto-generated campaign action reference for SellPrisonersAction."
---
# SellPrisonersAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/SellPrisonersAction.cs`

SellPrisonersAction is a set of static methods that trigger "SellPrisoners" in the campaign for a specific reason. Mods call its `Apply*` overloads to change game state (one per reason).

## Methods

### ApplyForAllPrisoners

```csharp
public static void ApplyForAllPrisoners(PartyBase sellerParty, PartyBase buyerParty)
```

**Purpose:** Applies the effect of for all prisoners to the this instance.

### ApplyForSelectedPrisoners

```csharp
public static void ApplyForSelectedPrisoners(PartyBase sellerParty, PartyBase buyerParty, TroopRoster prisoners)
```

**Purpose:** Applies the effect of for selected prisoners to the this instance.

### ApplyByPartyScreen

```csharp
public static void ApplyByPartyScreen(TroopRoster prisoners)
```

**Purpose:** Applies the effect of by party screen to the this instance.

## Usage Example

```csharp
// Trigger this action from a mod
SellPrisonersAction.ApplyForAllPrisoners(sellerParty, buyerParty);
```

## See Also

- [Area Index](../)
- [Campaign System](../../campaign/)