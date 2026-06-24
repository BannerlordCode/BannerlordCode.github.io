<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `OrderOfBattleFormationExtensions`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# OrderOfBattleFormationExtensions

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class OrderOfBattleFormationExtensions`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/OrderOfBattleFormationExtensions.cs`

## 概述

`OrderOfBattleFormationExtensions` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### Refresh
`public unsafe static void Refresh(this Formation formation)`

**用途 / Purpose:** 刷新 `refresh` 的显示或缓存。

### GetOrderOfBattleFormationClass
`public static DeploymentFormationClass GetOrderOfBattleFormationClass(this FormationClass formationClass)`

**用途 / Purpose:** 获取 `order of battle formation class` 的当前值。

### GetFormationClasses
`public static List<FormationClass> GetFormationClasses(this DeploymentFormationClass orderOfBattleFormationClass)`

**用途 / Purpose:** 获取 `formation classes` 的当前值。

### GetFilterName
`public static TextObject GetFilterName(this FormationFilterType filterType)`

**用途 / Purpose:** 获取 `filter name` 的当前值。

### GetFilterDescription
`public static TextObject GetFilterDescription(this FormationFilterType filterType)`

**用途 / Purpose:** 获取 `filter description` 的当前值。

### GetClassName
`public static TextObject GetClassName(this DeploymentFormationClass formationClass)`

**用途 / Purpose:** 获取 `class name` 的当前值。

### GetHeroAgents
`public static List<Agent> GetHeroAgents(this Team team)`

**用途 / Purpose:** 获取 `hero agents` 的当前值。

## 使用示例

```csharp
OrderOfBattleFormationExtensions.Refresh(formation);
```

## 参见

- [完整类目录](../catalog)