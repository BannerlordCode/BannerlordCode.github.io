---
title: "ChangeOwnerOfWorkshopAction"
description: "Auto-generated campaign action reference for ChangeOwnerOfWorkshopAction."
---
# ChangeOwnerOfWorkshopAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `TaleWorlds.CampaignSystem/Actions/ChangeOwnerOfWorkshopAction.cs`

ChangeOwnerOfWorkshopAction is a set of static methods that trigger "ChangeOwnerOfWorkshop" in the campaign for a specific reason. Mods call its `Apply*` overloads to change game state (one per reason).

## Methods

### ApplyByBankruptcy

```csharp
public static void ApplyByBankruptcy(Workshop workshop, Hero newOwner, WorkshopType workshopType, int cost)
```

**Purpose:** Applies the effect of by bankruptcy to the this instance.

### ApplyByPlayerBuying

```csharp
public static void ApplyByPlayerBuying(Workshop workshop)
```

**Purpose:** Applies the effect of by player buying to the this instance.

### ApplyByPlayerSelling

```csharp
public static void ApplyByPlayerSelling(Workshop workshop, Hero newOwner, WorkshopType workshopType)
```

**Purpose:** Applies the effect of by player selling to the this instance.

### ApplyByDeath

```csharp
public static void ApplyByDeath(Workshop workshop, Hero newOwner)
```

**Purpose:** Applies the effect of by death to the this instance.

### ApplyByWar

```csharp
public static void ApplyByWar(Workshop workshop, Hero newOwner, WorkshopType workshopType)
```

**Purpose:** Applies the effect of by war to the this instance.

## Usage Example

```csharp
// Trigger this action from a mod
ChangeOwnerOfWorkshopAction.ApplyByBankruptcy(workshop, newOwner, workshopType, 100);
```

## See Also

- [Area Index](../)
- [Campaign System](../../campaign/)