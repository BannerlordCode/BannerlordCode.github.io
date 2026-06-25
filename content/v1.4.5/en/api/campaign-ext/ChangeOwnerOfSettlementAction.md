---
title: "ChangeOwnerOfSettlementAction"
description: "Auto-generated campaign action reference for ChangeOwnerOfSettlementAction."
---
# ChangeOwnerOfSettlementAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/ChangeOwnerOfSettlementAction.cs`

ChangeOwnerOfSettlementAction is a set of static methods that trigger "ChangeOwnerOfSettlement" in the campaign for a specific reason. Mods call its `Apply*` overloads to change game state (one per reason).

## Methods

### ApplyByDefault

```csharp
public static void ApplyByDefault(Hero hero, Settlement settlement)
```

**Purpose:** default.

### ApplyByKingDecision

```csharp
public static void ApplyByKingDecision(Hero hero, Settlement settlement)
```

**Purpose:** king decision.

### ApplyBySiege

```csharp
public static void ApplyBySiege(Hero newOwner, Hero capturerHero, Settlement settlement)
```

**Purpose:** siege.

### ApplyByLeaveFaction

```csharp
public static void ApplyByLeaveFaction(Hero hero, Settlement settlement)
```

**Purpose:** leave faction.

### ApplyByBarter

```csharp
public static void ApplyByBarter(Hero hero, Settlement settlement)
```

**Purpose:** barter.

### ApplyByRebellion

```csharp
public static void ApplyByRebellion(Hero hero, Settlement settlement)
```

**Purpose:** rebellion.

### ApplyByDestroyClan

```csharp
public static void ApplyByDestroyClan(Settlement settlement, Hero newOwner)
```

**Purpose:** destroy clan.

### ApplyByGift

```csharp
public static void ApplyByGift(Settlement settlement, Hero newOwner)
```

**Purpose:** gift.

## Usage Example

```csharp
// Trigger this action from a mod
ChangeOwnerOfSettlementAction.ApplyByDefault(hero, settlement);
```

## See Also

- [Area Index](../)
- [Campaign System](../campaign/)