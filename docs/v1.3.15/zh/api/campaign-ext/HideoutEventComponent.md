<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `HideoutEventComponent`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# HideoutEventComponent

**Namespace:** TaleWorlds.CampaignSystem.MapEvents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class HideoutEventComponent : MapEventComponent`
**Base:** `MapEventComponent`
**File:** `TaleWorlds.CampaignSystem/MapEvents/HideoutEventComponent.cs`

## 概述

`HideoutEventComponent` 是一个 AgentComponent——附加在 Agent 上的每-agent 状态/逻辑组件。通过 `agent.GetComponent<HideoutEventComponent>()` 访问（部分组件在 agent 上有强类型属性）。继承 AgentComponent 可添加自定义组件。

## 主要属性

| Name | Signature |
|------|-----------|
| `SimulationContext` | `public override MapEvent.PowerCalculationContext SimulationContext { get; }` |

## 主要方法

### CreateHideoutEvent
```csharp
public static HideoutEventComponent CreateHideoutEvent(PartyBase attackerParty, PartyBase defenderParty, bool isSendTroops)
```

### CreateComponentForOldSaves
```csharp
public static HideoutEventComponent CreateComponentForOldSaves(MapEvent mapEvent, bool isSendTroops)
```

## 使用示例

```csharp
// HideoutEventComponent (Component) 的典型用法
agent.GetComponent<HideoutEventComponent>();
```

## 参见

- [完整类目录](../catalog)