---
title: "ModuleExtensions"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ModuleExtensions`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# ModuleExtensions

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class ModuleExtensions`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/ModuleExtensions.cs`

## 概述

`ModuleExtensions` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### GetUsedMachines
`public static IEnumerable<UsableMachine> GetUsedMachines(this Formation formation)`

**用途 / Purpose:** 获取 `used machines` 的当前值。

### StartUsingMachine
`public static void StartUsingMachine(this Formation formation, UsableMachine usable, bool isPlayerOrder = false)`

**用途 / Purpose:** 处理 `start using machine` 相关逻辑。

### StopUsingMachine
`public static void StopUsingMachine(this Formation formation, UsableMachine usable, bool isPlayerOrder = false)`

**用途 / Purpose:** 处理 `stop using machine` 相关逻辑。

### ToWorldPosition
`public static WorldPosition ToWorldPosition(this Vec3 rawPosition)`

**用途 / Purpose:** 处理 `to world position` 相关逻辑。

## 使用示例

```csharp
ModuleExtensions.GetUsedMachines(formation);
```

## 参见

- [完整类目录](../catalog)