---
title: "CustomBattleFactory"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CustomBattleFactory`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# CustomBattleFactory

**Namespace:** TaleWorlds.MountAndBlade.View.CustomBattle
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class CustomBattleFactory`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/CustomBattle/CustomBattleFactory.cs`

## 概述

`CustomBattleFactory` 位于 `TaleWorlds.MountAndBlade.View.CustomBattle`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.View.CustomBattle` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### StartCustomBattle
`public static void StartCustomBattle()`

**用途 / Purpose:** 处理 `start custom battle` 相关逻辑。

### GetProviderCount
`public static int GetProviderCount()`

**用途 / Purpose:** 获取 `provider count` 的当前值。

### CollectProviders
`public static List<ICustomBattleProvider> CollectProviders()`

**用途 / Purpose:** 处理 `collect providers` 相关逻辑。

### CollectNextProvider
`public static ICustomBattleProvider CollectNextProvider(Type currentProviderType)`

**用途 / Purpose:** 处理 `collect next provider` 相关逻辑。

## 使用示例

```csharp
CustomBattleFactory.StartCustomBattle();
```

## 参见

- [完整类目录](../catalog)