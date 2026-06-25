---
title: "CustomBattleFactory"
description: "CustomBattleFactory 的自动生成类参考。"
---
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

**用途 / Purpose:** 启动「custom battle」流程或状态机。

```csharp
// 静态调用，不需要实例
CustomBattleFactory.StartCustomBattle();
```

### GetProviderCount
`public static int GetProviderCount()`

**用途 / Purpose:** 读取并返回当前对象中 「provider count」 的结果。

```csharp
// 静态调用，不需要实例
CustomBattleFactory.GetProviderCount();
```

### CollectProviders
`public static List<ICustomBattleProvider> CollectProviders()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 静态调用，不需要实例
CustomBattleFactory.CollectProviders();
```

### CollectNextProvider
`public static ICustomBattleProvider CollectNextProvider(Type currentProviderType)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 静态调用，不需要实例
CustomBattleFactory.CollectNextProvider(currentProviderType);
```

## 使用示例

```csharp
CustomBattleFactory.StartCustomBattle();
```

## 参见

- [本区域目录](../)