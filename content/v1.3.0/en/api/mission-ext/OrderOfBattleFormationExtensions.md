---
title: "OrderOfBattleFormationExtensions"
description: "Auto-generated class reference for OrderOfBattleFormationExtensions."
---
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

**Purpose:** Refreshes the this instance's display or cache to match the underlying state.

```csharp
// Static call; no instance required
OrderOfBattleFormationExtensions.Refresh(formation);
```

### GetOrderOfBattleFormationClass
`public static DeploymentFormationClass GetOrderOfBattleFormationClass(this FormationClass formationClass)`

**Purpose:** Reads and returns the order of battle formation class value held by the this instance.

```csharp
// Static call; no instance required
OrderOfBattleFormationExtensions.GetOrderOfBattleFormationClass(formationClass);
```

### GetFormationClasses
`public static List<FormationClass> GetFormationClasses(this DeploymentFormationClass orderOfBattleFormationClass)`

**Purpose:** Reads and returns the formation classes value held by the this instance.

```csharp
// Static call; no instance required
OrderOfBattleFormationExtensions.GetFormationClasses(orderOfBattleFormationClass);
```

### GetFilterName
`public static TextObject GetFilterName(this FormationFilterType filterType)`

**Purpose:** Reads and returns the filter name value held by the this instance.

```csharp
// Static call; no instance required
OrderOfBattleFormationExtensions.GetFilterName(filterType);
```

### GetFilterDescription
`public static TextObject GetFilterDescription(this FormationFilterType filterType)`

**Purpose:** Reads and returns the filter description value held by the this instance.

```csharp
// Static call; no instance required
OrderOfBattleFormationExtensions.GetFilterDescription(filterType);
```

### GetClassName
`public static TextObject GetClassName(this DeploymentFormationClass formationClass)`

**Purpose:** Reads and returns the class name value held by the this instance.

```csharp
// Static call; no instance required
OrderOfBattleFormationExtensions.GetClassName(formationClass);
```

### GetHeroAgents
`public static List<Agent> GetHeroAgents(this Team team)`

**Purpose:** Reads and returns the hero agents value held by the this instance.

```csharp
// Static call; no instance required
OrderOfBattleFormationExtensions.GetHeroAgents(team);
```

## Usage Example

```csharp
OrderOfBattleFormationExtensions.Refresh(formation);
```

## See Also

- [Area Index](../)