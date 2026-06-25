---
title: "ChangeOwnerOfWorkshopAction"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ChangeOwnerOfWorkshopAction`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ChangeOwnerOfWorkshopAction

## Mental Model

Treat `ChangeOwnerOfWorkshopAction` as an entry point or data node for this subsystem: inspect its properties first, then decide which methods to call.

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/ChangeOwnerOfWorkshopAction.cs`

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

- [Complete Class Catalog](../catalog)
- [Campaign System catalog](../catalog-campaign)