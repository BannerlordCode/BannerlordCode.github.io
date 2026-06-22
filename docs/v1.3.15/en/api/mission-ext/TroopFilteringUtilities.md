<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TroopFilteringUtilities`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TroopFilteringUtilities

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** class
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `TroopFilteringUtilities` is a class in the `TaleWorlds.MountAndBlade` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Methods

### GetFilter

```csharp
public static TroopTraitsMask GetFilter(bool isMounted, bool isRanged, bool isMelee, bool hasHeavyArmor, bool hasThrown, bool hasSpear, bool hasShield)
```

### GetFilter

```csharp
public static TroopTraitsMask GetFilter(params FormationClass formationClasses)
```

### GetFilter

```csharp
public static TroopTraitsMask GetFilter(params FormationFilterType filterTypes)
```

### GetPriorityFunction

```csharp
public static void GetPriorityFunction(TroopTraitsMask filter, out Func<Agent, int> priorityFunc)
```

### GetPriorityFunction

```csharp
public static void GetPriorityFunction(TroopTraitsMask filter, out Func<IAgentOriginBase, int> priorityFunc)
```

### GetTroopPriority

```csharp
public static int GetTroopPriority(TroopTraitsMask troopMask, int battleTier, TroopTraitsMask filter)
```

### GetMaxPriority

```csharp
public static int GetMaxPriority(TroopTraitsMask filter)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)