---
title: "ChangeProductionTypeOfWorkshopAction"
description: "Auto-generated campaign action reference for ChangeProductionTypeOfWorkshopAction."
---
# ChangeProductionTypeOfWorkshopAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/ChangeProductionTypeOfWorkshopAction.cs`

ChangeProductionTypeOfWorkshopAction is a set of static methods that trigger "ChangeProductionTypeOfWorkshop" in the campaign for a specific reason. Mods call its `Apply*` overloads to change game state (one per reason).

## Methods

### Apply

```csharp
public static void Apply(Workshop workshop, WorkshopType newWorkshopType, bool ignoreCost = false)
```

**Purpose:** **Purpose:** Applies the this instance's effect to its target.

## Usage Example

```csharp
// Trigger this action from a mod
ChangeProductionTypeOfWorkshopAction.Apply(workshop, newWorkshopType, false);
```

## See Also

- [Area Index](../)
- [Campaign System](../../campaign/)