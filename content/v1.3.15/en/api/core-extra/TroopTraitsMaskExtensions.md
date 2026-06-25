---
title: "TroopTraitsMaskExtensions"
description: "Auto-generated class reference for TroopTraitsMaskExtensions."
---
# TroopTraitsMaskExtensions

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public static class TroopTraitsMaskExtensions`
**Base:** none
**File:** `TaleWorlds.Core/TroopTraitsMaskExtensions.cs`

## Overview

`TroopTraitsMaskExtensions` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### HasMelee
`public static bool HasMelee(this TroopTraitsMask troopTraitsMask)`

**Purpose:** **Purpose:** Determines whether the this instance already holds melee.

```csharp
// Static call; no instance required
TroopTraitsMaskExtensions.HasMelee(troopTraitsMask);
```

### HasRanged
`public static bool HasRanged(this TroopTraitsMask troopTraitsMask)`

**Purpose:** **Purpose:** Determines whether the this instance already holds ranged.

```csharp
// Static call; no instance required
TroopTraitsMaskExtensions.HasRanged(troopTraitsMask);
```

### HasMount
`public static bool HasMount(this TroopTraitsMask troopTraitsMask)`

**Purpose:** **Purpose:** Determines whether the this instance already holds mount.

```csharp
// Static call; no instance required
TroopTraitsMaskExtensions.HasMount(troopTraitsMask);
```

### HasArmor
`public static bool HasArmor(this TroopTraitsMask troopTraitsMask)`

**Purpose:** **Purpose:** Determines whether the this instance already holds armor.

```csharp
// Static call; no instance required
TroopTraitsMaskExtensions.HasArmor(troopTraitsMask);
```

### HasThrown
`public static bool HasThrown(this TroopTraitsMask troopTraitsMask)`

**Purpose:** **Purpose:** Determines whether the this instance already holds thrown.

```csharp
// Static call; no instance required
TroopTraitsMaskExtensions.HasThrown(troopTraitsMask);
```

### HasSpear
`public static bool HasSpear(this TroopTraitsMask troopTraitsMask)`

**Purpose:** **Purpose:** Determines whether the this instance already holds spear.

```csharp
// Static call; no instance required
TroopTraitsMaskExtensions.HasSpear(troopTraitsMask);
```

### HasShield
`public static bool HasShield(this TroopTraitsMask troopTraitsMask)`

**Purpose:** **Purpose:** Determines whether the this instance already holds shield.

```csharp
// Static call; no instance required
TroopTraitsMaskExtensions.HasShield(troopTraitsMask);
```

### HasLowTier
`public static bool HasLowTier(this TroopTraitsMask troopFilterMask)`

**Purpose:** **Purpose:** Determines whether the this instance already holds low tier.

```csharp
// Static call; no instance required
TroopTraitsMaskExtensions.HasLowTier(troopFilterMask);
```

### HasHighTier
`public static bool HasHighTier(this TroopTraitsMask troopFilterMask)`

**Purpose:** **Purpose:** Determines whether the this instance already holds high tier.

```csharp
// Static call; no instance required
TroopTraitsMaskExtensions.HasHighTier(troopFilterMask);
```

### GetTroopTraitsText
`public static string GetTroopTraitsText(this TroopTraitsMask troopTraitsMask)`

**Purpose:** **Purpose:** Reads and returns the troop traits text value held by the this instance.

```csharp
// Static call; no instance required
TroopTraitsMaskExtensions.GetTroopTraitsText(troopTraitsMask);
```

### GetTraitsFilterText
`public static string GetTraitsFilterText(this TroopTraitsMask troopTraitsFilter)`

**Purpose:** **Purpose:** Reads and returns the traits filter text value held by the this instance.

```csharp
// Static call; no instance required
TroopTraitsMaskExtensions.GetTraitsFilterText(troopTraitsFilter);
```

### GetClassFilterText
`public static string GetClassFilterText(this TroopTraitsMask troopTraitsFilter)`

**Purpose:** **Purpose:** Reads and returns the class filter text value held by the this instance.

```csharp
// Static call; no instance required
TroopTraitsMaskExtensions.GetClassFilterText(troopTraitsFilter);
```

## Usage Example

```csharp
TroopTraitsMaskExtensions.HasMelee(troopTraitsMask);
```

## See Also

- [Area Index](../)