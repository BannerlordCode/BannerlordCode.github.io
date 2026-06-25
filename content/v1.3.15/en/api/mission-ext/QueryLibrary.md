---
title: "QueryLibrary"
description: "Auto-generated class reference for QueryLibrary."
---
# QueryLibrary

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class QueryLibrary`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/QueryLibrary.cs`

## Overview

`QueryLibrary` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### IsInfantry
`public static bool IsInfantry(Agent a)`

**Purpose:** Determines whether the current object is in the `infantry` state or condition.

```csharp
// Static call; no instance required
QueryLibrary.IsInfantry(a);
```

### IsInfantryWithoutBanner
`public static bool IsInfantryWithoutBanner(Agent a)`

**Purpose:** Determines whether the current object is in the `infantry without banner` state or condition.

```csharp
// Static call; no instance required
QueryLibrary.IsInfantryWithoutBanner(a);
```

### HasShield
`public static bool HasShield(Agent a)`

**Purpose:** Determines whether the current object already holds `shield`.

```csharp
// Static call; no instance required
QueryLibrary.HasShield(a);
```

### IsRanged
`public static bool IsRanged(Agent a)`

**Purpose:** Determines whether the current object is in the `ranged` state or condition.

```csharp
// Static call; no instance required
QueryLibrary.IsRanged(a);
```

### IsRangedWithoutBanner
`public static bool IsRangedWithoutBanner(Agent a)`

**Purpose:** Determines whether the current object is in the `ranged without banner` state or condition.

```csharp
// Static call; no instance required
QueryLibrary.IsRangedWithoutBanner(a);
```

### IsCavalry
`public static bool IsCavalry(Agent a)`

**Purpose:** Determines whether the current object is in the `cavalry` state or condition.

```csharp
// Static call; no instance required
QueryLibrary.IsCavalry(a);
```

### IsCavalryWithoutBanner
`public static bool IsCavalryWithoutBanner(Agent a)`

**Purpose:** Determines whether the current object is in the `cavalry without banner` state or condition.

```csharp
// Static call; no instance required
QueryLibrary.IsCavalryWithoutBanner(a);
```

### IsRangedCavalry
`public static bool IsRangedCavalry(Agent a)`

**Purpose:** Determines whether the current object is in the `ranged cavalry` state or condition.

```csharp
// Static call; no instance required
QueryLibrary.IsRangedCavalry(a);
```

### IsRangedCavalryWithoutBanner
`public static bool IsRangedCavalryWithoutBanner(Agent a)`

**Purpose:** Determines whether the current object is in the `ranged cavalry without banner` state or condition.

```csharp
// Static call; no instance required
QueryLibrary.IsRangedCavalryWithoutBanner(a);
```

### HasSpear
`public static bool HasSpear(Agent a)`

**Purpose:** Determines whether the current object already holds `spear`.

```csharp
// Static call; no instance required
QueryLibrary.HasSpear(a);
```

### HasThrown
`public static bool HasThrown(Agent a)`

**Purpose:** Determines whether the current object already holds `thrown`.

```csharp
// Static call; no instance required
QueryLibrary.HasThrown(a);
```

### IsHeavy
`public static bool IsHeavy(Agent a)`

**Purpose:** Determines whether the current object is in the `heavy` state or condition.

```csharp
// Static call; no instance required
QueryLibrary.IsHeavy(a);
```

## Usage Example

```csharp
QueryLibrary.IsInfantry(a);
```

## See Also

- [Area Index](../)