<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ForceVolunteersEventComponent`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ForceVolunteersEventComponent

**Namespace:** TaleWorlds.CampaignSystem.MapEvents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ForceVolunteersEventComponent : MapEventComponent`
**Base:** `MapEventComponent`
**File:** `TaleWorlds.CampaignSystem/MapEvents/ForceVolunteersEventComponent.cs`

## 概述

`ForceVolunteersEventComponent` 是一个 AgentComponent——附加在 Agent 上的每-agent 状态/逻辑组件。通过 `agent.GetComponent<ForceVolunteersEventComponent>()` 访问（部分组件在 agent 上有强类型属性）。继承 AgentComponent 可添加自定义组件。

## 主要属性

| Name | Signature |
|------|-----------|
| `SimulationContext` | `public override MapEvent.PowerCalculationContext SimulationContext { get; }` |

## 主要方法

### CreateForceSuppliesEvent
```csharp
public static ForceVolunteersEventComponent CreateForceSuppliesEvent(PartyBase attackerParty, PartyBase defenderParty)
```

### CreateComponentForOldSaves
```csharp
public static ForceVolunteersEventComponent CreateComponentForOldSaves(MapEvent mapEvent)
```

## 使用示例

```csharp
// ForceVolunteersEventComponent (Component) 的典型用法
agent.GetComponent<ForceVolunteersEventComponent>();
```

## 参见

- [完整类目录](../catalog)