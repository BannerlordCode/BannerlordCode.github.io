---
title: "OrderOfBattleFormationExtensions"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `OrderOfBattleFormationExtensions`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# OrderOfBattleFormationExtensions

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class OrderOfBattleFormationExtensions`
**Area:** mission-ext

## Overview

`OrderOfBattleFormationExtensions` lives in `TaleWorlds.MountAndBlade`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Refresh
`public unsafe static void Refresh(this Formation formation)`

**Purpose:** Refreshes the display or cache of `refresh`.

### GetOrderOfBattleFormationClass
`public static DeploymentFormationClass GetOrderOfBattleFormationClass(this FormationClass formationClass)`

**Purpose:** Gets the current value of `order of battle formation class`.

### GetFormationClasses
`public static List<FormationClass> GetFormationClasses(this DeploymentFormationClass orderOfBattleFormationClass)`

**Purpose:** Gets the current value of `formation classes`.

### GetFilterName
`public static TextObject GetFilterName(this FormationFilterType filterType)`

**Purpose:** Gets the current value of `filter name`.

### GetFilterDescription
`public static TextObject GetFilterDescription(this FormationFilterType filterType)`

**Purpose:** Gets the current value of `filter description`.

### GetClassName
`public static TextObject GetClassName(this DeploymentFormationClass formationClass)`

**Purpose:** Gets the current value of `class name`.

### GetHeroAgents
`public static List<Agent> GetHeroAgents(this Team team)`

**Purpose:** Gets the current value of `hero agents`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
OrderOfBattleFormationExtensions.Refresh(formation);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
