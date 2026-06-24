<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `WindowsFramework`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# WindowsFramework

**Namespace:** TaleWorlds.TwoDimension.Standalone
**Module:** TaleWorlds.TwoDimension
**Type:** `public class WindowsFramework`
**Base:** 无
**File:** `TaleWorlds.TwoDimension.Standalone/WindowsFramework.cs`

## 概述

`WindowsFramework` 位于 `TaleWorlds.TwoDimension.Standalone`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.TwoDimension.Standalone` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `ThreadConfig` | `public WindowsFrameworkThreadConfig ThreadConfig { get; set; }` |
| `ElapsedTicks` | `public long ElapsedTicks { get; }` |
| `TicksPerSecond` | `public long TicksPerSecond { get; }` |

## 主要方法

### Initialize
`public void Initialize(FrameworkDomain frameworkDomains)`

**用途 / Purpose:** 初始化 `initialize` 的状态、资源或绑定。

### RegisterMessageCommunicator
`public void RegisterMessageCommunicator(IMessageCommunicator communicator)`

**用途 / Purpose:** 处理 `register message communicator` 相关逻辑。

### UnRegisterMessageCommunicator
`public void UnRegisterMessageCommunicator(IMessageCommunicator communicator)`

**用途 / Purpose:** 处理 `un register message communicator` 相关逻辑。

### Stop
`public void Stop()`

**用途 / Purpose:** 处理 `stop` 相关逻辑。

### OnFinalize
`public void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

### Start
`public void Start()`

**用途 / Purpose:** 处理 `start` 相关逻辑。

## 使用示例

```csharp
var value = new WindowsFramework();
value.Initialize(frameworkDomains);
```

## 参见

- [完整类目录](../catalog)