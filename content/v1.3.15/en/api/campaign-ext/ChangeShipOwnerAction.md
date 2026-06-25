---
title: "ChangeShipOwnerAction"
description: "Auto-generated campaign action reference for ChangeShipOwnerAction."
---
# ChangeShipOwnerAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `TaleWorlds.CampaignSystem/Actions/ChangeShipOwnerAction.cs`

ChangeShipOwnerAction is a set of static methods that trigger "ChangeShipOwner" in the campaign for a specific reason. Mods call its `Apply*` overloads to change game state (one per reason).

## Methods

### ApplyByTransferring

```csharp
public static void ApplyByTransferring(PartyBase newOwner, Ship ship)
```

**Purpose:** **Purpose:** Applies the effect of by transferring to the this instance.

### ApplyByTrade

```csharp
public static void ApplyByTrade(PartyBase newOwner, Ship ship)
```

**Purpose:** **Purpose:** Applies the effect of by trade to the this instance.

### ApplyByLooting

```csharp
public static void ApplyByLooting(PartyBase newOwner, Ship ship)
```

**Purpose:** **Purpose:** Applies the effect of by looting to the this instance.

### ApplyByProduction

```csharp
public static void ApplyByProduction(PartyBase newOwner, Ship ship)
```

**Purpose:** **Purpose:** Applies the effect of by production to the this instance.

### ApplyByMobilePartyCreation

```csharp
public static void ApplyByMobilePartyCreation(PartyBase newOwner, Ship ship)
```

**Purpose:** **Purpose:** Applies the effect of by mobile party creation to the this instance.

## Usage Example

```csharp
// Trigger this action from a mod
ChangeShipOwnerAction.ApplyByTransferring(newOwner, ship);
```

## See Also

- [Area Index](../)
- [Campaign System](../../campaign/)