<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `NativeScriptComponent`
- [← 本领域 / 返回 engine](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# NativeScriptComponent

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class NativeScriptComponent : ScriptComponent`
**Base:** `ScriptComponent`
**File:** `TaleWorlds.Engine/NativeScriptComponent.cs`

## 概述

`NativeScriptComponent` 是一个 AgentComponent——附加在 Agent 上的每-agent 状态/逻辑组件。通过 `agent.GetComponent<NativeScriptComponent>()` 访问（部分组件在 agent 上有强类型属性）。继承 AgentComponent 可添加自定义组件。

## 使用示例

```csharp
// NativeScriptComponent (Component) 的典型用法
agent.GetComponent<NativeScriptComponent>();
```

## 参见

- [完整类目录](../catalog)