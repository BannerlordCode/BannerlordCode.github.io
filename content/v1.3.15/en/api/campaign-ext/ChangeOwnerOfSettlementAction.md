---
title: "ChangeOwnerOfSettlementAction"
description: "Auto-generated campaign action reference for ChangeOwnerOfSettlementAction."
---
# ChangeOwnerOfSettlementAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `TaleWorlds.CampaignSystem/Actions/ChangeOwnerOfSettlementAction.cs`

ChangeOwnerOfSettlementAction is a set of static methods that trigger "ChangeOwnerOfSettlement" in the campaign for a specific reason. Mods call its `Apply*` overloads to change game state (one per reason).

## Methods

### ApplyByDefault

```csharp
public static void ApplyByDefault(Hero hero, Settlement settlement)
```

**Purpose:** **Purpose:** Applies the effect of by default to the this instance.

### ApplyByKingDecision

```csharp
public static void ApplyByKingDecision(Hero hero, Settlement settlement)
```

**Purpose:** **Purpose:** Applies the effect of by king decision to the this instance.

### ApplyBySiege

```csharp
public static void ApplyBySiege(Hero newOwner, Hero capturerHero, Settlement settlement)
```

**Purpose:** **Purpose:** Applies the effect of by siege to the this instance.

### ApplyByLeaveFaction

```csharp
public static void ApplyByLeaveFaction(Hero hero, Settlement settlement)
```

**Purpose:** **Purpose:** Applies the effect of by leave faction to the this instance.

### ApplyByBarter

```csharp
public static void ApplyByBarter(Hero hero, Settlement settlement)
```

**Purpose:** **Purpose:** Applies the effect of by barter to the this instance.

### ApplyByRebellion

```csharp
public static void ApplyByRebellion(Hero hero, Settlement settlement)
```

**Purpose:** **Purpose:** Applies the effect of by rebellion to the this instance.

### ApplyByDestroyClan

```csharp
public static void ApplyByDestroyClan(Settlement settlement, Hero newOwner)
```

**Purpose:** **Purpose:** Applies the effect of by destroy clan to the this instance.

### ApplyByGift

```csharp
public static void ApplyByGift(Settlement settlement, Hero newOwner)
```

**Purpose:** **Purpose:** Applies the effect of by gift to the this instance.

## Usage Example

```csharp
// Trigger this action from a mod
ChangeOwnerOfSettlementAction.ApplyByDefault(hero, settlement);
```

## See Also

- [Area Index](../)
- [Campaign System](../../campaign/)