---
title: "Callback"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Callback`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# Callback

**Namespace:** Steamworks
**Module:** Steamworks
**Type:** `public abstract class Callback`
**Base:** 无
**File:** `Bannerlord.Source/bin/Steamworks.NET/Steamworks/Callback.cs`

## 概述

`Callback` 位于 `Steamworks`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `Steamworks` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsGameServer` | `public abstract bool IsGameServer { get; }` |

## 主要方法

### DispatchDelegate
`public delegate void DispatchDelegate(T param)`

**用途 / Purpose:** 处理 `dispatch delegate` 相关逻辑。

### Create
`public static Callback<T> Create(DispatchDelegate func)`

**用途 / Purpose:** 创建一个 `create` 实例或对象。

### CreateGameServer
`public static Callback<T> CreateGameServer(DispatchDelegate func)`

**用途 / Purpose:** 创建一个 `game server` 实例或对象。

### Dispose
`public void Dispose()`

**用途 / Purpose:** 处理 `dispose` 相关逻辑。

### Register
`public void Register(DispatchDelegate func)`

**用途 / Purpose:** 处理 `register` 相关逻辑。

### Unregister
`public void Unregister()`

**用途 / Purpose:** 处理 `unregister` 相关逻辑。

## 使用示例

```csharp
var implementation = new CustomCallback();
```

## 参见

- [完整类目录](../catalog)