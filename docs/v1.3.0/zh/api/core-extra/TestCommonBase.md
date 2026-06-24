<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TestCommonBase`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# TestCommonBase

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public abstract class TestCommonBase`
**Base:** 无
**File:** `TaleWorlds.Library/TestCommonBase.cs`

## 概述

`TestCommonBase` 位于 `TaleWorlds.Library`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Library` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `BaseInstance` | `public static TestCommonBase BaseInstance { get; }` |

## 主要方法

### Tick
`public abstract void Tick()`

**用途 / Purpose:** 处理 `tick` 相关逻辑。

### StartTimeoutTimer
`public void StartTimeoutTimer()`

**用途 / Purpose:** 处理 `start timeout timer` 相关逻辑。

### ToggleTimeoutTimer
`public void ToggleTimeoutTimer()`

**用途 / Purpose:** 处理 `toggle timeout timer` 相关逻辑。

### CheckTimeoutTimer
`public bool CheckTimeoutTimer()`

**用途 / Purpose:** 处理 `check timeout timer` 相关逻辑。

### GetGameStatus
`public virtual string GetGameStatus()`

**用途 / Purpose:** 获取 `game status` 的当前值。

### WaitFor
`public void WaitFor(double seconds)`

**用途 / Purpose:** 处理 `wait for` 相关逻辑。

### WaitUntil
`public virtual async Task WaitUntil(Func<bool> func)`

**用途 / Purpose:** 处理 `wait until` 相关逻辑。

### WaitForAsync
`public Task WaitForAsync(double seconds, Random random)`

**用途 / Purpose:** 处理 `wait for async` 相关逻辑。

### WaitForAsync
`public Task WaitForAsync(double seconds)`

**用途 / Purpose:** 处理 `wait for async` 相关逻辑。

### GetAttachmentsFolderPath
`public static string GetAttachmentsFolderPath()`

**用途 / Purpose:** 获取 `attachments folder path` 的当前值。

### OnFinalize
`public virtual void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

## 使用示例

```csharp
var implementation = new CustomTestCommonBase();
```

## 参见

- [完整类目录](../catalog)