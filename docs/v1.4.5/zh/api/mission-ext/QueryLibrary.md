<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `QueryLibrary`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# QueryLibrary

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class QueryLibrary`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/QueryLibrary.cs`

## 概述

`QueryLibrary` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

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
QueryLibrary.IsInfantry(a);
```

## 参见

- [完整类目录](../catalog)