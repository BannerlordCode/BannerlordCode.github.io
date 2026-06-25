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

**Purpose:** **Purpose:** Applies the effect of by released by player after battle to the this instance.

### ApplyByArmyLeaderIsDead

```csharp
public static void ApplyByArmyLeaderIsDead(Army army)
```

**Purpose:** **Purpose:** Applies the effect of by army leader is dead to the this instance.

### ApplyByNotEnoughParty

```csharp
public static void ApplyByNotEnoughParty(Army army)
```

**Purpose:** **Purpose:** Applies the effect of by not enough party to the this instance.

### ApplyByObjectiveFinished

```csharp
public static void ApplyByObjectiveFinished(Army army)
```

**Purpose:** **Purpose:** Applies the effect of by objective finished to the this instance.

### ApplyByLowPartySizeRatio

```csharp
public static void ApplyByLowPartySizeRatio(Army army)
```

**Purpose:** **Purpose:** Applies the effect of by low party size ratio to the this instance.

### ApplyByPlayerTakenPrisoner

```csharp
public static void ApplyByPlayerTakenPrisoner(Army army)
```

**Purpose:** **Purpose:** Applies the effect of by player taken prisoner to the this instance.

### ApplyByFoodProblem

```csharp
public static void ApplyByFoodProblem(Army army)
```

**Purpose:** **Purpose:** Applies the effect of by food problem to the this instance.

### ApplyByInactivity

```csharp
public static void ApplyByInactivity(Army army)
```

**Purpose:** **Purpose:** Applies the effect of by inactivity to the this instance.

### ApplyByCohesionDepleted

```csharp
public static void ApplyByCohesionDepleted(Army army)
```

**Purpose:** **Purpose:** Applies the effect of by cohesion depleted to the this instance.

### ApplyByNoActiveWar

```csharp
public static void ApplyByNoActiveWar(Army army)
```

**Purpose:** **Purpose:** Applies the effect of by no active war to the this instance.

### ApplyByUnknownReason

```csharp
public static void ApplyByUnknownReason(Army army)
```

**Purpose:** **Purpose:** Applies the effect of by unknown reason to the this instance.

### ApplyByLeaderPartyRemoved

```csharp
public static void ApplyByLeaderPartyRemoved(Army army)
```

**Purpose:** **Purpose:** Applies the effect of by leader party removed to the this instance.

### ApplyByNoShip

```csharp
public static void ApplyByNoShip(Army army)
```

**Purpose:** **Purpose:** Applies the effect of by no ship to the this instance.

## Usage Example

```csharp
// Trigger this action from a mod
DisbandArmyAction.ApplyByReleasedByPlayerAfterBattle(army);
```

## See Also

- [Area Index](../)
- [Campaign System](../../campaign/)