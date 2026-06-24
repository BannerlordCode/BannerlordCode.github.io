<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `AgentBehaviorManager`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# AgentBehaviorManager

**Namespace:** SandBox.AI
**Module:** SandBox.AI
**Type:** `public class AgentBehaviorManager : IAgentBehaviorManager`
**Base:** `IAgentBehaviorManager`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox/SandBox.AI/AgentBehaviorManager.cs`

## 概述

`AgentBehaviorManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `AgentBehaviorManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### AddQuestCharacterBehaviors
`public void AddQuestCharacterBehaviors(IAgent agent)`

**用途 / Purpose:** 向当前集合/状态中添加 `quest character behaviors`。

### AddFirstCompanionBehavior
`public void AddFirstCompanionBehavior(IAgent agent)`

**用途 / Purpose:** 向当前集合/状态中添加 `first companion behavior`。

## 使用示例

```csharp
var manager = AgentBehaviorManager.Current;
```

## 参见

- [完整类目录](../catalog)