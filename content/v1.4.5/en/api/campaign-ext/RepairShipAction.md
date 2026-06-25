---
title: "RepairShipAction"
description: "Auto-generated campaign action reference for RepairShipAction."
---
# RepairShipAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/RepairShipAction.cs`

RepairShipAction is a set of static methods that trigger "RepairShip" in the campaign for a specific reason. Mods call its `Apply*` overloads to change game state (one per reason).

## Methods

### Apply

```csharp
public static void Apply(Ship ship, Settlement repairPort)
```

**Purpose:** Applies the this instance's effect to its target.

### ApplyForFree

```csharp
public static void ApplyForFree(Ship ship)
```

**Purpose:** Applies the effect of for free to the this instance.

### ApplyForBanditShip

```csharp
public static void ApplyForBanditShip(Ship ship)
```

**Purpose:** Applies the effect of for bandit ship to the this instance.

## Usage Example

```csharp
// Trigger this action from a mod
RepairShipAction.Apply(ship, repairPort);
```

## See Also

- [Area Index](../)
- [Campaign System](../../campaign/)