---
title: "TroopClassExtensions"
description: "Auto-generated class reference for TroopClassExtensions."
---
# TroopClassExtensions

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public static class TroopClassExtensions`
**Base:** none
**File:** `bin/TaleWorlds.Core/TaleWorlds.Core/TroopClassExtensions.cs`

## Overview

`TroopClassExtensions` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### IsRanged
`public static bool IsRanged(this FormationClass troopClass)`

**Purpose:** **Purpose:** Determines whether the this instance is in the ranged state or condition.

```csharp
// Static call; no instance required
TroopClassExtensions.IsRanged(troopClass);
```

### IsMounted
`public static bool IsMounted(this FormationClass troopClass)`

**Purpose:** **Purpose:** Determines whether the this instance is in the mounted state or condition.

```csharp
// Static call; no instance required
TroopClassExtensions.IsMounted(troopClass);
```

### IsMeleeInfantry
`public static bool IsMeleeInfantry(this FormationClass troopClass)`

**Purpose:** **Purpose:** Determines whether the this instance is in the melee infantry state or condition.

```csharp
// Static call; no instance required
TroopClassExtensions.IsMeleeInfantry(troopClass);
```

### IsMeleeCavalry
`public static bool IsMeleeCavalry(this FormationClass troopClass)`

**Purpose:** **Purpose:** Determines whether the this instance is in the melee cavalry state or condition.

```csharp
// Static call; no instance required
TroopClassExtensions.IsMeleeCavalry(troopClass);
```

### DefaultClass
`public static FormationClass DefaultClass(this FormationClass troopClass)`

**Purpose:** **Purpose:** Executes the DefaultClass logic.

```csharp
// Static call; no instance required
TroopClassExtensions.DefaultClass(troopClass);
```

### AlternativeClass
`public static FormationClass AlternativeClass(this FormationClass troopClass)`

**Purpose:** **Purpose:** Executes the AlternativeClass logic.

```csharp
// Static call; no instance required
TroopClassExtensions.AlternativeClass(troopClass);
```

### DismountedClass
`public static FormationClass DismountedClass(this FormationClass troopClass)`

**Purpose:** **Purpose:** Executes the DismountedClass logic.

```csharp
// Static call; no instance required
TroopClassExtensions.DismountedClass(troopClass);
```

### IsDefaultTroopClass
`public static bool IsDefaultTroopClass(this FormationClass troopClass)`

**Purpose:** **Purpose:** Determines whether the this instance is in the default troop class state or condition.

```csharp
// Static call; no instance required
TroopClassExtensions.IsDefaultTroopClass(troopClass);
```

### IsRegularTroopClass
`public static bool IsRegularTroopClass(this FormationClass troopClass)`

**Purpose:** **Purpose:** Determines whether the this instance is in the regular troop class state or condition.

```csharp
// Static call; no instance required
TroopClassExtensions.IsRegularTroopClass(troopClass);
```

### GetNextSpawnPrioritizedClass
`public static FormationClass GetNextSpawnPrioritizedClass(this FormationClass troopClass)`

**Purpose:** **Purpose:** Reads and returns the next spawn prioritized class value held by the this instance.

```csharp
// Static call; no instance required
TroopClassExtensions.GetNextSpawnPrioritizedClass(troopClass);
```

## Usage Example

```csharp
TroopClassExtensions.IsRanged(troopClass);
```

## See Also

- [Area Index](../)