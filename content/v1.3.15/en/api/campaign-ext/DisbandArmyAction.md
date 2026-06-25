---
title: "DisbandArmyAction"
description: "Auto-generated campaign action reference for DisbandArmyAction."
---
# DisbandArmyAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `TaleWorlds.CampaignSystem/Actions/DisbandArmyAction.cs`

DisbandArmyAction is a set of static methods that trigger "DisbandArmy" in the campaign for a specific reason. Mods call its `Apply*` overloads to change game state (one per reason).

## Methods

### ApplyByReleasedByPlayerAfterBattle

```csharp
public static void ApplyByReleasedByPlayerAfterBattle(Army army)
```

**Purpose:** released by player after battle.

### ApplyByArmyLeaderIsDead

```csharp
public static void ApplyByArmyLeaderIsDead(Army army)
```

**Purpose:** army leader is dead.

### ApplyByNotEnoughParty

```csharp
public static void ApplyByNotEnoughParty(Army army)
```

**Purpose:** not enough party.

### ApplyByObjectiveFinished

```csharp
public static void ApplyByObjectiveFinished(Army army)
```

**Purpose:** objective finished.

### ApplyByPlayerTakenPrisoner

```csharp
public static void ApplyByPlayerTakenPrisoner(Army army)
```

**Purpose:** player taken prisoner.

### ApplyByFoodProblem

```csharp
public static void ApplyByFoodProblem(Army army)
```

**Purpose:** food problem.

### ApplyByInactivity

```csharp
public static void ApplyByInactivity(Army army)
```

**Purpose:** inactivity.

### ApplyByCohesionDepleted

```csharp
public static void ApplyByCohesionDepleted(Army army)
```

**Purpose:** cohesion depleted.

### ApplyByNoActiveWar

```csharp
public static void ApplyByNoActiveWar(Army army)
```

**Purpose:** no active war.

### ApplyByUnknownReason

```csharp
public static void ApplyByUnknownReason(Army army)
```

**Purpose:** unknown reason.

### ApplyByLeaderPartyRemoved

```csharp
public static void ApplyByLeaderPartyRemoved(Army army)
```

**Purpose:** leader party removed.

### ApplyByNoShip

```csharp
public static void ApplyByNoShip(Army army)
```

**Purpose:** no ship.

## Usage Example

```csharp
// Trigger this action from a mod
DisbandArmyAction.ApplyByReleasedByPlayerAfterBattle(army);
```

## See Also

- [Area Index](../)
- [Campaign System](../campaign/)