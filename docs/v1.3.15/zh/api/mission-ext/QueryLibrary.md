<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `QueryLibrary`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# QueryLibrary

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** `public static class QueryLibrary`
**领域:** mission-ext

## 概述

`QueryLibrary` 位于 `TaleWorlds.MountAndBlade`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### IsInfantry
`public static bool IsInfantry(Agent a)`

**用途 / Purpose:** 处理 `is infantry` 相关逻辑。

### IsInfantryWithoutBanner
`public static bool IsInfantryWithoutBanner(Agent a)`

**用途 / Purpose:** 处理 `is infantry without banner` 相关逻辑。

### HasShield
`public static bool HasShield(Agent a)`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `shield`。

### IsRanged
`public static bool IsRanged(Agent a)`

**用途 / Purpose:** 处理 `is ranged` 相关逻辑。

### IsRangedWithoutBanner
`public static bool IsRangedWithoutBanner(Agent a)`

**用途 / Purpose:** 处理 `is ranged without banner` 相关逻辑。

### IsCavalry
`public static bool IsCavalry(Agent a)`

**用途 / Purpose:** 处理 `is cavalry` 相关逻辑。

### IsCavalryWithoutBanner
`public static bool IsCavalryWithoutBanner(Agent a)`

**用途 / Purpose:** 处理 `is cavalry without banner` 相关逻辑。

### IsRangedCavalry
`public static bool IsRangedCavalry(Agent a)`

**用途 / Purpose:** 处理 `is ranged cavalry` 相关逻辑。

### IsRangedCavalryWithoutBanner
`public static bool IsRangedCavalryWithoutBanner(Agent a)`

**用途 / Purpose:** 处理 `is ranged cavalry without banner` 相关逻辑。

### HasSpear
`public static bool HasSpear(Agent a)`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `spear`。

### HasThrown
`public static bool HasThrown(Agent a)`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `thrown`。

### IsHeavy
`public static bool IsHeavy(Agent a)`

**用途 / Purpose:** 处理 `is heavy` 相关逻辑。

## 使用示例

```csharp
// 先准备该类型需要的上下文，然后直接调用静态入口
QueryLibrary.IsInfantry(a);
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)
