<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ScriptComponent`
- [← 本领域 / 返回 engine](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ScriptComponent

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public abstract class ScriptComponent : NativeObject`
**Base:** `NativeObject`
**File:** `TaleWorlds.Engine/ScriptComponent.cs`

## 概述

`ScriptComponent` 是一个 AgentComponent——附加在 Agent 上的每-agent 状态/逻辑组件。通过 `agent.GetComponent<ScriptComponent>()` 访问（部分组件在 agent 上有强类型属性）。继承 AgentComponent 可添加自定义组件。

## 主要方法

### GetName
```csharp
public string GetName()
```

## 使用示例

```csharp
// ScriptComponent (Component) 的典型用法
agent.GetComponent<ScriptComponent>();
```

## 参见

- [完整类目录](../catalog)