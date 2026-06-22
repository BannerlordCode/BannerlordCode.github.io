<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MapEventComponent`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MapEventComponent

**Namespace:** TaleWorlds.CampaignSystem.MapEvents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class MapEventComponent`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/MapEvents/MapEventComponent.cs`

## 概述

`MapEventComponent` 是一个 AgentComponent——附加在 Agent 上的每-agent 状态/逻辑组件。通过 `agent.GetComponent<MapEventComponent>()` 访问（部分组件在 agent 上有强类型属性）。继承 AgentComponent 可添加自定义组件。

## 主要属性

| Name | Signature |
|------|-----------|
| `MapEvent` | `public MapEvent MapEvent { get; }` |
| `SimulationContext` | `public abstract MapEvent.PowerCalculationContext SimulationContext { get; }` |

## 使用示例

```csharp
// MapEventComponent (Component) 的典型用法
agent.GetComponent<MapEventComponent>();
```

## 参见

- [完整类目录](../catalog)