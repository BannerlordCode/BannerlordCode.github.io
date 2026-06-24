<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Timer`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# Timer

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class Timer`
**Base:** 无
**File:** `TaleWorlds.Core/Timer.cs`

## 概述

`Timer` 位于 `TaleWorlds.Core`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Core` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Duration` | `public float Duration { get; set; }` |
| `PreviousDeltaTime` | `public float PreviousDeltaTime { get; }` |

## 主要方法

### Check
`public virtual bool Check(float gameTime)`

**用途 / Purpose:** 处理 `check` 相关逻辑。

### ElapsedTime
`public float ElapsedTime()`

**用途 / Purpose:** 处理 `elapsed time` 相关逻辑。

### Reset
`public void Reset(float gameTime)`

**用途 / Purpose:** 将 `reset` 重置为初始状态。

### Reset
`public void Reset(float gameTime, float newDuration)`

**用途 / Purpose:** 将 `reset` 重置为初始状态。

### AdjustStartTime
`public void AdjustStartTime(float deltaTime)`

**用途 / Purpose:** 处理 `adjust start time` 相关逻辑。

## 使用示例

```csharp
var value = new Timer();
value.Check(0);
```

## 参见

- [完整类目录](../catalog)