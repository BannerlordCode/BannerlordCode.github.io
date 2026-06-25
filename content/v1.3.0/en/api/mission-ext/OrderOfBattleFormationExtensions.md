---
title: "OrderOfBattleFormationExtensions"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `OrderOfBattleFormationExtensions`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# OrderOfBattleFormationExtensions

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class OrderOfBattleFormationExtensions`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/OrderOfBattleFormationExtensions.cs`

## Overview

`OrderOfBattleFormationExtensions` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

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
OrderOfBattleFormationExtensions.Refresh(formation);
```

## See Also

- [Complete Class Catalog](../catalog)