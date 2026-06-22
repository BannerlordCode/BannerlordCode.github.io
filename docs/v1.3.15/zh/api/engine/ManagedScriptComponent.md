<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ManagedScriptComponent`
- [← 本领域 / 返回 engine](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ManagedScriptComponent

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class ManagedScriptComponent : ScriptComponent`
**Base:** `ScriptComponent`
**File:** `TaleWorlds.Engine/ManagedScriptComponent.cs`

## 概述

`ManagedScriptComponent` 是一个 AgentComponent——附加在 Agent 上的每-agent 状态/逻辑组件。通过 `agent.GetComponent<ManagedScriptComponent>()` 访问（部分组件在 agent 上有强类型属性）。继承 AgentComponent 可添加自定义组件。

## 主要属性

| Name | Signature |
|------|-----------|
| `ScriptComponentBehavior` | `public ScriptComponentBehavior ScriptComponentBehavior { get { return EngineApplicationInterface.IScriptComponent.GetScriptComponentBehavior(base.Pointer); }` |

## 主要方法

### SetVariableEditorWidgetStatus
```csharp
public void SetVariableEditorWidgetStatus(string field, bool enabled)
```

### SetVariableEditorWidgetValue
```csharp
public void SetVariableEditorWidgetValue(string field, RglScriptFieldType fieldType, double value)
```

## 使用示例

```csharp
// ManagedScriptComponent (Component) 的典型用法
agent.GetComponent<ManagedScriptComponent>();
```

## 参见

- [完整类目录](../catalog)