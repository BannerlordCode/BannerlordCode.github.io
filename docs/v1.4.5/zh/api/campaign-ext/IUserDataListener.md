<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `IUserDataListener`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# IUserDataListener

**Namespace:** Galaxy.Api
**Module:** Galaxy.Api
**Type:** `public abstract class IUserDataListener : GalaxyTypeAwareListenerUserData`
**Base:** `GalaxyTypeAwareListenerUserData`
**File:** `Bannerlord.Source/bin/GalaxyCSharp/Galaxy.Api/IUserDataListener.cs`

## 概述

`IUserDataListener` 位于 `Galaxy.Api`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `Galaxy.Api` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### SwigDelegateIUserDataListener_0
`public delegate void SwigDelegateIUserDataListener_0(IntPtr cPtr)`

**用途 / Purpose:** 处理 `swig delegate i user data listener_0` 相关逻辑。

### Dispose
`public override void Dispose()`

**用途 / Purpose:** 处理 `dispose` 相关逻辑。

### OnUserDataUpdated
`public abstract void OnUserDataUpdated()`

**用途 / Purpose:** 当 `user data updated` 事件触发时调用此方法。

## 使用示例

```csharp
var implementation = new CustomIUserDataListener();
```

## 参见

- [完整类目录](../catalog)