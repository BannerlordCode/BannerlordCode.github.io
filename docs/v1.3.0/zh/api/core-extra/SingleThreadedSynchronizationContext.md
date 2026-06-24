<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SingleThreadedSynchronizationContext`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# SingleThreadedSynchronizationContext

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public sealed class SingleThreadedSynchronizationContext : SynchronizationContext`
**Base:** `SynchronizationContext`
**File:** `TaleWorlds.Library/SingleThreadedSynchronizationContext.cs`

## 概述

`SingleThreadedSynchronizationContext` 位于 `TaleWorlds.Library`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Library` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### Send
`public override void Send(SendOrPostCallback callback, object state)`

**用途 / Purpose:** 处理 `send` 相关逻辑。

### Post
`public override void Post(SendOrPostCallback callback, object state)`

**用途 / Purpose:** 处理 `post` 相关逻辑。

### Tick
`public void Tick()`

**用途 / Purpose:** 处理 `tick` 相关逻辑。

### Invoke
`public void Invoke()`

**用途 / Purpose:** 处理 `invoke` 相关逻辑。

## 使用示例

```csharp
var value = new SingleThreadedSynchronizationContext();
value.Send(callback, state);
```

## 参见

- [完整类目录](../catalog)