<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DisguiseMissionUsePoint`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# DisguiseMissionUsePoint

**Namespace:** SandBox.Objects.Usables
**Module:** SandBox.Objects
**Type:** `public class DisguiseMissionUsePoint : UsableMissionObject`
**Base:** `UsableMissionObject`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox/SandBox.Objects.Usables/DisguiseMissionUsePoint.cs`

## 概述

`DisguiseMissionUsePoint` 位于 `SandBox.Objects.Usables`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.Objects.Usables` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### GetDescriptionText
`public override TextObject GetDescriptionText(WeakGameEntity gameEntity)`

**用途 / Purpose:** 获取 `description text` 的当前值。

### OnUse
`public override void OnUse(Agent userAgent, sbyte agentBoneIndex)`

**用途 / Purpose:** 当 `use` 事件触发时调用此方法。

### OnUseStopped
`public override void OnUseStopped(Agent userAgent, bool isSuccessful, int preferenceIndex)`

**用途 / Purpose:** 当 `use stopped` 事件触发时调用此方法。

### IsDisabledForAgent
`public override bool IsDisabledForAgent(Agent agent)`

**用途 / Purpose:** 处理 `is disabled for agent` 相关逻辑。

### IsUsableByAgent
`public override bool IsUsableByAgent(Agent userAgent)`

**用途 / Purpose:** 处理 `is usable by agent` 相关逻辑。

### GetUserFrameForAgent
`public override WorldFrame GetUserFrameForAgent(Agent agent)`

**用途 / Purpose:** 获取 `user frame for agent` 的当前值。

## 使用示例

```csharp
var value = new DisguiseMissionUsePoint();
value.GetDescriptionText(gameEntity);
```

## 参见

- [完整类目录](../catalog)