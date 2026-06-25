---
title: "CallResult"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CallResult`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# CallResult

**Namespace:** Steamworks
**Module:** Steamworks
**Type:** `public abstract class CallResult`
**Base:** 无
**File:** `Bannerlord.Source/bin/Steamworks.NET/Steamworks/CallResult.cs`

## 概述

`CallResult` 位于 `Steamworks`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `Steamworks` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### APIDispatchDelegate
`public delegate void APIDispatchDelegate(T param, bool bIOFailure)`

**用途 / Purpose:** 处理 `a p i dispatch delegate` 相关逻辑。

### Create
`public static CallResult<T> Create(APIDispatchDelegate func = null)`

**用途 / Purpose:** 创建一个 `create` 实例或对象。

### Dispose
`public void Dispose()`

**用途 / Purpose:** 处理 `dispose` 相关逻辑。

### Set
`public void Set(SteamAPICall_t hAPICall, APIDispatchDelegate func = null)`

**用途 / Purpose:** 设置 `set` 的值或状态。

### IsActive
`public bool IsActive()`

**用途 / Purpose:** 处理 `is active` 相关逻辑。

### Cancel
`public void Cancel()`

**用途 / Purpose:** 判断当前对象是否可以执行 `cel`。

## 使用示例

```csharp
var implementation = new CustomCallResult();
```

## 参见

- [完整类目录](../catalog)