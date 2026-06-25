---
title: "INameMarkerProviderContext"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `INameMarkerProviderContext`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# INameMarkerProviderContext

**命名空间:** SandBox.ViewModelCollection.Missions.NameMarker
**模块:** SandBox.ViewModelCollection
**类型:** `public interface INameMarkerProviderContext`
**领域:** campaign-ext

## 概述

`INameMarkerProviderContext` 位于 `SandBox.ViewModelCollection.Missions.NameMarker`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

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

**用途 / Purpose:** 处理 `push context` 相关逻辑。

### PopContext
`public static void PopContext(string contextId)`

**用途 / Purpose:** 处理 `pop context` 相关逻辑。

### PopContext
`public static void PopContext(MissionNameMarkerFactory.INameMarkerProviderContext context)`

**用途 / Purpose:** 处理 `pop context` 相关逻辑。

### CollectProviders
`public static List<MissionNameMarkerProvider> CollectProviders()`

**用途 / Purpose:** 处理 `collect providers` 相关逻辑。

### UpdateProviders
`public static void UpdateProviders(MissionNameMarkerProvider existingProviders, out List<MissionNameMarkerProvider> addedProviders, out List<MissionNameMarkerProvider> removedProviders)`

**用途 / Purpose:** 更新 `providers` 的状态或数据。

### AddProvider
`public void AddProvider(Type tProvider)`

**用途 / Purpose:** 向当前集合/状态中添加 `provider`。

### RemoveProvider
`public void RemoveProvider(Type tProvider)`

**用途 / Purpose:** 从当前集合/状态中移除 `provider`。

## 使用示例

```csharp
INameMarkerProviderContext implementation = GetNameMarkerProviderContextImplementation();
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)
