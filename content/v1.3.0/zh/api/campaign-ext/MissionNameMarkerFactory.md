---
title: "MissionNameMarkerFactory"
description: "MissionNameMarkerFactory 的自动生成类参考。"
---
# MissionNameMarkerFactory

**Namespace:** SandBox.ViewModelCollection.Missions.NameMarker
**Module:** SandBox.ViewModelCollection
**Type:** `public static class MissionNameMarkerFactory`
**Base:** 无
**File:** `SandBox.ViewModelCollection/Missions/NameMarker/MissionNameMarkerFactory.cs`

## 概述

`MissionNameMarkerFactory` 位于 `SandBox.ViewModelCollection.Missions.NameMarker`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.ViewModelCollection.Missions.NameMarker` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Id` | `public string Id { get; }` |
| `IsDefaultContext` | `public bool IsDefaultContext { get; }` |
| `ProviderTypes` | `public List<Type> ProviderTypes { get; }` |

## 主要方法

### PushContext
`public static MissionNameMarkerFactory.INameMarkerProviderContext PushContext(string name, bool addDefaultProviders)`

**用途 / Purpose:** 获取或维护 「push context」 数据。

```csharp
// 静态调用，不需要实例
MissionNameMarkerFactory.PushContext("example", false);
```

### PopContext
`public static void PopContext(string contextId)`

**用途 / Purpose:** 获取或维护 「pop context」 数据。

```csharp
// 静态调用，不需要实例
MissionNameMarkerFactory.PopContext("example");
```

### PopContext
`public static void PopContext(MissionNameMarkerFactory.INameMarkerProviderContext context)`

**用途 / Purpose:** 获取或维护 「pop context」 数据。

```csharp
// 静态调用，不需要实例
MissionNameMarkerFactory.PopContext(context);
```

### CollectProviders
`public static List<MissionNameMarkerProvider> CollectProviders()`

**用途 / Purpose:** 处理与 「collect providers」 相关的逻辑。

```csharp
// 静态调用，不需要实例
MissionNameMarkerFactory.CollectProviders();
```

### UpdateProviders
`public static void UpdateProviders(MissionNameMarkerProvider existingProviders, out List<MissionNameMarkerProvider> addedProviders, out List<MissionNameMarkerProvider> removedProviders)`

**用途 / Purpose:** 重新计算并更新 「providers」 的最新表示。

```csharp
// 静态调用，不需要实例
MissionNameMarkerFactory.UpdateProviders(existingProviders, addedProviders, removedProviders);
```

### AddProvider
`public void AddProvider(Type tProvider)`

**用途 / Purpose:** 将 「provider」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 MissionNameMarkerFactory 实例
MissionNameMarkerFactory missionNameMarkerFactory = ...;
missionNameMarkerFactory.AddProvider(tProvider);
```

### RemoveProvider
`public void RemoveProvider(Type tProvider)`

**用途 / Purpose:** 从当前容器或状态中移除 「provider」。

```csharp
// 先通过子系统 API 拿到 MissionNameMarkerFactory 实例
MissionNameMarkerFactory missionNameMarkerFactory = ...;
missionNameMarkerFactory.RemoveProvider(tProvider);
```

## 使用示例

```csharp
MissionNameMarkerFactory.PushContext("example", false);
```

## 参见

- [本区域目录](../)