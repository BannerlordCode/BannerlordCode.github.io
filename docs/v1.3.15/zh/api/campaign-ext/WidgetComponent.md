<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `WidgetComponent`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# WidgetComponent

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `public abstract class WidgetComponent`
**Base:** 无
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/WidgetComponent.cs`

## 概述

`WidgetComponent` 是一个 AgentComponent——附加在 Agent 上的每-agent 状态/逻辑组件。通过 `agent.GetComponent<WidgetComponent>()` 访问（部分组件在 agent 上有强类型属性）。继承 AgentComponent 可添加自定义组件。

## 使用示例

```csharp
// WidgetComponent (Component) 的典型用法
agent.GetComponent<WidgetComponent>();
```

## 参见

- [完整类目录](../catalog)