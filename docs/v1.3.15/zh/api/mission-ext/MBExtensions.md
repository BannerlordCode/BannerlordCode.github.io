<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MBExtensions`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MBExtensions

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** 类 class class
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`MBExtensions` 是 `TaleWorlds.MountAndBlade` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要方法

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

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)