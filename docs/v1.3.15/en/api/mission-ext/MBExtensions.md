<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MBExtensions`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MBExtensions

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** class
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `MBExtensions` is a class in the `TaleWorlds.MountAndBlade` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Methods

### GetGlobalOrganicDirection

```csharp
public static Vec2 GetGlobalOrganicDirection(this ColumnFormation columnFormation)
```

### GetGlobalHeadDirection

```csharp
public static Vec2 GetGlobalHeadDirection(this ColumnFormation columnFormation)
```

### FindAllWithCompatibleType

```csharp
public static List<GameEntity> FindAllWithCompatibleType(this IEnumerable<GameEntity> sceneProps, params Type types)
```

### FindAllWithCompatibleType

```csharp
public static List<MissionObject> FindAllWithCompatibleType(this IEnumerable<MissionObject> missionObjects, params Type types)
```

### CollectChildrenEntitiesWithTag

```csharp
public static List<GameEntity> CollectChildrenEntitiesWithTag(this GameEntity entity, string tag)
```

### CollectChildrenEntitiesWithTag

```csharp
public static List<WeakGameEntity> CollectChildrenEntitiesWithTag(this WeakGameEntity entity, string tag)
```

### GetFirstChildEntityWithName

```csharp
public static WeakGameEntity GetFirstChildEntityWithName(this WeakGameEntity entity, string name)
```

### HasParentOfType

```csharp
public static bool HasParentOfType(this GameEntity e, Type t)
```

### HasParentOfType

```csharp
public static bool HasParentOfType(this WeakGameEntity e, Type t)
```

### IsOpponentOf

```csharp
public static bool IsOpponentOf(this BattleSideEnum s, BattleSideEnum side)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)