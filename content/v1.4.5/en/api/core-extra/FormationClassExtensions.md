---
title: "FormationClassExtensions"
description: "Auto-generated class reference for FormationClassExtensions."
---
# FormationClassExtensions

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public static class FormationClassExtensions`
**Base:** none
**File:** `bin/TaleWorlds.Core/TaleWorlds.Core/FormationClassExtensions.cs`

## Overview

`FormationClassExtensions` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetName
`public static string GetName(this FormationClass formationClass)`

**Purpose:** **Purpose:** Reads and returns the name value held by the this instance.

```csharp
// Static call; no instance required
FormationClassExtensions.GetName(formationClass);
```

### GetLocalizedName
`public static TextObject GetLocalizedName(this FormationClass formationClass)`

**Purpose:** **Purpose:** Reads and returns the localized name value held by the this instance.

```csharp
// Static call; no instance required
FormationClassExtensions.GetLocalizedName(formationClass);
```

### GetTroopUsageFlags
`public static TroopUsageFlags GetTroopUsageFlags(this FormationClass troopClass)`

**Purpose:** **Purpose:** Reads and returns the troop usage flags value held by the this instance.

```csharp
// Static call; no instance required
FormationClassExtensions.GetTroopUsageFlags(troopClass);
```

### GetTroopTypeForRegularFormation
`public static TroopType GetTroopTypeForRegularFormation(this FormationClass formationClass)`

**Purpose:** **Purpose:** Reads and returns the troop type for regular formation value held by the this instance.

```csharp
// Static call; no instance required
FormationClassExtensions.GetTroopTypeForRegularFormation(formationClass);
```

### IsDefaultFormationClass
`public static bool IsDefaultFormationClass(this FormationClass formationClass)`

**Purpose:** **Purpose:** Determines whether the this instance is in the default formation class state or condition.

```csharp
// Static call; no instance required
FormationClassExtensions.IsDefaultFormationClass(formationClass);
```

### IsRegularFormationClass
`public static bool IsRegularFormationClass(this FormationClass formationClass)`

**Purpose:** **Purpose:** Determines whether the this instance is in the regular formation class state or condition.

```csharp
// Static call; no instance required
FormationClassExtensions.IsRegularFormationClass(formationClass);
```

### FallbackClass
`public static FormationClass FallbackClass(this FormationClass formationClass)`

**Purpose:** **Purpose:** Executes the FallbackClass logic.

```csharp
// Static call; no instance required
FormationClassExtensions.FallbackClass(formationClass);
```

## Usage Example

```csharp
FormationClassExtensions.GetName(formationClass);
```

## See Also

- [Area Index](../)