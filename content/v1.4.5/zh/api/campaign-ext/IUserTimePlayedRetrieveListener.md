---
title: "IUserTimePlayedRetrieveListener"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `IUserTimePlayedRetrieveListener`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# IUserTimePlayedRetrieveListener

**Namespace:** Galaxy.Api
**Module:** Galaxy.Api
**Type:** `public abstract class IUserTimePlayedRetrieveListener : GalaxyTypeAwareListenerUserTimePlayedRetrieve`
**Base:** `GalaxyTypeAwareListenerUserTimePlayedRetrieve`
**File:** `Bannerlord.Source/bin/GalaxyCSharp/Galaxy.Api/IUserTimePlayedRetrieveListener.cs`

## 概述

`IUserTimePlayedRetrieveListener` 位于 `Galaxy.Api`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `Galaxy.Api` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### SwigDelegateIUserTimePlayedRetrieveListener_0
`public delegate void SwigDelegateIUserTimePlayedRetrieveListener_0(IntPtr cPtr, IntPtr userID)`

**用途 / Purpose:** 处理 `swig delegate i user time played retrieve listener_0` 相关逻辑。

### SwigDelegateIUserTimePlayedRetrieveListener_1
`public delegate void SwigDelegateIUserTimePlayedRetrieveListener_1(IntPtr cPtr, IntPtr userID, int failureReason)`

**用途 / Purpose:** 处理 `swig delegate i user time played retrieve listener_1` 相关逻辑。

### Dispose
`public override void Dispose()`

**用途 / Purpose:** 处理 `dispose` 相关逻辑。

### OnUserTimePlayedRetrieveSuccess
`public abstract void OnUserTimePlayedRetrieveSuccess(GalaxyID userID)`

**用途 / Purpose:** 当 `user time played retrieve success` 事件触发时调用此方法。

### OnUserTimePlayedRetrieveFailure
`public abstract void OnUserTimePlayedRetrieveFailure(GalaxyID userID, FailureReason failureReason)`

**用途 / Purpose:** 当 `user time played retrieve failure` 事件触发时调用此方法。

## 使用示例

```csharp
var implementation = new CustomIUserTimePlayedRetrieveListener();
```

## 参见

- [完整类目录](../catalog)