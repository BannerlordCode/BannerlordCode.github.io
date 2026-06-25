---
title: "MissionNameMarkerFactory"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionNameMarkerFactory`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MissionNameMarkerFactory

**Namespace:** SandBox.ViewModelCollection.Missions.NameMarker
**Module:** SandBox.ViewModelCollection
**Type:** `public static class MissionNameMarkerFactory`
**Base:** 无
**File:** `Bannerlord.Source/Modules.SandBox/SandBox.ViewModelCollection/SandBox.ViewModelCollection.Missions.NameMarker/MissionNameMarkerFactory.cs`

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

### AddProvider
`public void AddProvider(Type tProvider)`

**用途 / Purpose:** 向当前集合/状态中添加 `provider`。

### RemoveProvider
`public void RemoveProvider(Type tProvider)`

**用途 / Purpose:** 从当前集合/状态中移除 `provider`。

### PushContext
`public static INameMarkerProviderContext PushContext(string name, bool addDefaultProviders)`

**用途 / Purpose:** 处理 `push context` 相关逻辑。

### PopContext
`public static void PopContext(string contextId)`

**用途 / Purpose:** 处理 `pop context` 相关逻辑。

### PopContext
`public static void PopContext(INameMarkerProviderContext context)`

**用途 / Purpose:** 处理 `pop context` 相关逻辑。

### CollectProviders
`public static List<MissionNameMarkerProvider> CollectProviders()`

**用途 / Purpose:** 处理 `collect providers` 相关逻辑。

### UpdateProviders
`public static void UpdateProviders(MissionNameMarkerProvider existingProviders, out List<MissionNameMarkerProvider> addedProviders, out List<MissionNameMarkerProvider> removedProviders)`

**用途 / Purpose:** 更新 `providers` 的状态或数据。

## 使用示例

```csharp
var value = new MissionNameMarkerFactory();
value.AddProvider(tProvider);
```

## 参见

- [完整类目录](../catalog)