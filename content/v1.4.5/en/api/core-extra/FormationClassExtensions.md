---
title: "FormationClassExtensions"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `FormationClassExtensions`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# FormationClassExtensions

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public static class FormationClassExtensions`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.Core/TaleWorlds.Core/FormationClassExtensions.cs`

## Overview

`FormationClassExtensions` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetName
`public static string GetName(this FormationClass formationClass)`

**Purpose:** Gets the current value of `name`.

### GetLocalizedName
`public static TextObject GetLocalizedName(this FormationClass formationClass)`

**Purpose:** Gets the current value of `localized name`.

### GetTroopUsageFlags
`public static TroopUsageFlags GetTroopUsageFlags(this FormationClass troopClass)`

**Purpose:** Gets the current value of `troop usage flags`.

### GetTroopTypeForRegularFormation
`public static TroopType GetTroopTypeForRegularFormation(this FormationClass formationClass)`

**Purpose:** Gets the current value of `troop type for regular formation`.

### IsDefaultFormationClass
`public static bool IsDefaultFormationClass(this FormationClass formationClass)`

**Purpose:** Handles logic related to `is default formation class`.

### IsRegularFormationClass
`public static bool IsRegularFormationClass(this FormationClass formationClass)`

**Purpose:** Handles logic related to `is regular formation class`.

### FallbackClass
`public static FormationClass FallbackClass(this FormationClass formationClass)`

**Purpose:** Handles logic related to `fallback class`.

## Usage Example

```csharp
FormationClassExtensions.GetName(formationClass);
```

## See Also

- [Complete Class Catalog](../catalog)