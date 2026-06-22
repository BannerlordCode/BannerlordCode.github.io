<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GameManagerComponent`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GameManagerComponent

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public abstract class GameManagerComponent : IEntityComponent`
**Base:** `IEntityComponent`
**File:** `TaleWorlds.Core/GameManagerComponent.cs`

## 概述

`GameManagerComponent` 是一个 AgentComponent——附加在 Agent 上的每-agent 状态/逻辑组件。通过 `agent.GetComponent<GameManagerComponent>()` 访问（部分组件在 agent 上有强类型属性）。继承 AgentComponent 可添加自定义组件。

## 主要属性

| Name | Signature |
|------|-----------|
| `GameManager` | `public GameManagerBase GameManager { get; internal set; }` |

## 使用示例

```csharp
// GameManagerComponent (Component) 的典型用法
agent.GetComponent<GameManagerComponent>();
```

## 参见

- [完整类目录](../catalog)