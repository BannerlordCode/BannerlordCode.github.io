<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `RaidEventComponent`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# RaidEventComponent

**Namespace:** TaleWorlds.CampaignSystem.MapEvents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class RaidEventComponent : MapEventComponent`
**Base:** `MapEventComponent`
**File:** `TaleWorlds.CampaignSystem/MapEvents/RaidEventComponent.cs`

## 概述

`RaidEventComponent` 是一个 AgentComponent——附加在 Agent 上的每-agent 状态/逻辑组件。通过 `agent.GetComponent<RaidEventComponent>()` 访问（部分组件在 agent 上有强类型属性）。继承 AgentComponent 可添加自定义组件。

## 主要属性

| Name | Signature |
|------|-----------|
| `RaidDamage` | `public float RaidDamage { get; }` |
| `DefenderSide` | `public MapEventSide DefenderSide { get; }` |
| `AttackerSide` | `public MapEventSide AttackerSide { get; }` |
| `MapEventSettlement` | `public Settlement MapEventSettlement { get; }` |
| `IsPlayerMapEvent` | `public bool IsPlayerMapEvent { get; }` |
| `BattleState` | `public BattleState BattleState { get; }` |
| `SimulationContext` | `public override MapEvent.PowerCalculationContext SimulationContext { get; }` |

## 主要方法

### CreateRaidEvent
```csharp
public static RaidEventComponent CreateRaidEvent(PartyBase attackerParty, PartyBase defenderParty)
```

### CreateComponentForOldSaves
```csharp
public static RaidEventComponent CreateComponentForOldSaves(MapEvent mapEvent, float nextSettlementDamage, int lootedItemCount, float raidDamage)
```

## 使用示例

```csharp
// RaidEventComponent (Component) 的典型用法
agent.GetComponent<RaidEventComponent>();
```

## 参见

- [完整类目录](../catalog)