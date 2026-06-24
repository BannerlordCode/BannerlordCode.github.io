<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CallbackDebugTool`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# CallbackDebugTool

**Namespace:** TaleWorlds.DotNet
**Module:** TaleWorlds.DotNet
**Type:** `public static class CallbackDebugTool`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.DotNet/TaleWorlds.DotNet/CallbackDebugTool.cs`

## 概述

`CallbackDebugTool` 位于 `TaleWorlds.DotNet`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.DotNet` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### AddLog
`public static void AddLog( string memberName = "")`

**用途 / Purpose:** 向当前集合/状态中添加 `log`。

### FrameEnd
`public static void FrameEnd()`

**用途 / Purpose:** 处理 `frame end` 相关逻辑。

### Reset
`public static void Reset()`

**用途 / Purpose:** 将 `reset` 重置为初始状态。

### ShowResults
`public static string ShowResults()`

**用途 / Purpose:** 处理 `show results` 相关逻辑。

## 使用示例

```csharp
CallbackDebugTool.AddLog("example");
```

## 参见

- [完整类目录](../catalog)