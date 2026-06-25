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

**Purpose:** bankruptcy.

### ApplyByPlayerBuying

```csharp
public static void ApplyByPlayerBuying(Workshop workshop)
```

**Purpose:** player buying.

### ApplyByPlayerSelling

```csharp
public static void ApplyByPlayerSelling(Workshop workshop, Hero newOwner, WorkshopType workshopType)
```

**Purpose:** player selling.

### ApplyByDeath

```csharp
public static void ApplyByDeath(Workshop workshop, Hero newOwner)
```

**Purpose:** death.

### ApplyByWar

```csharp
public static void ApplyByWar(Workshop workshop, Hero newOwner, WorkshopType workshopType)
```

**Purpose:** war.

## Usage Example

```csharp
// Trigger this action from a mod
ChangeOwnerOfWorkshopAction.ApplyByBankruptcy(workshop, newOwner, workshopType, 100);
```

## See Also

- [Area Index](../)
- [Campaign System](../../campaign/)