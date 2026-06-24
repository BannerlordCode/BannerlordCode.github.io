<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TestContext`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TestContext

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public class TestContext`
**Base:** 无
**File:** `TaleWorlds.Library/TestContext.cs`

## 概述

`TestContext` 位于 `TaleWorlds.Library`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Library` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### RunTestAux
`public void RunTestAux(string commandLine)`

**用途 / Purpose:** 处理 `run test aux` 相关逻辑。

### OnApplicationTick
`public void OnApplicationTick(float dt)`

**用途 / Purpose:** 当 `application tick` 事件触发时调用此方法。

### TickTest
`public void TickTest(float dt)`

**用途 / Purpose:** 处理 `tick test` 相关逻辑。

### FinalizeContext
`public void FinalizeContext()`

**用途 / Purpose:** 处理 `finalize context` 相关逻辑。

## 使用示例

```csharp
var value = new TestContext();
value.RunTestAux("example");
```

## 参见

- [完整类目录](../catalog)