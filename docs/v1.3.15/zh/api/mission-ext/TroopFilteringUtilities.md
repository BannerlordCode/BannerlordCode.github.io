<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TroopFilteringUtilities`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TroopFilteringUtilities

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** 类 class class
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`TroopFilteringUtilities` 是 `TaleWorlds.MountAndBlade` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要方法

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

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)