<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TeleportUsePoint`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# TeleportUsePoint

**Namespace:** SandBox.Objects
**Module:** SandBox.Objects
**Type:** `public class TeleportUsePoint : StandingPoint`
**Base:** `StandingPoint`
**File:** `SandBox/Objects/TeleportUsePoint.cs`

## 概述

`TeleportUsePoint` 位于 `SandBox.Objects`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.Objects` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `HasAIMovingTo` | `public override bool HasAIMovingTo { get; }` |

## 主要方法

### IsAIMovingTo
`public override bool IsAIMovingTo(Agent agent)`

**用途 / Purpose:** 处理 `is a i moving to` 相关逻辑。

### IsUsableByAgent
`public override bool IsUsableByAgent(Agent userAgent)`

**用途 / Purpose:** 处理 `is usable by agent` 相关逻辑。

### IsDisabledForAgent
`public override bool IsDisabledForAgent(Agent agent)`

**用途 / Purpose:** 处理 `is disabled for agent` 相关逻辑。

### OnUse
`public override void OnUse(Agent userAgent, sbyte agentBoneIndex)`

**用途 / Purpose:** 当 `use` 事件触发时调用此方法。

### Deactivate
`public void Deactivate()`

**用途 / Purpose:** 处理 `deactivate` 相关逻辑。

### Activate
`public void Activate()`

**用途 / Purpose:** 处理 `activate` 相关逻辑。

### OnFocusGain
`public override void OnFocusGain(Agent userAgent)`

**用途 / Purpose:** 当 `focus gain` 事件触发时调用此方法。

## 使用示例

```csharp
var value = new TeleportUsePoint();
value.IsAIMovingTo(agent);
```

## 参见

- [完整类目录](../catalog)