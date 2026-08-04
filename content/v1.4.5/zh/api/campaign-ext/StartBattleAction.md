---
title: "StartBattleAction"
description: "为已经验证的战役遭遇创建或加入 MapEvent，并发布战斗开始边界，供战役和任务流程继续接管。"
---
# StartBattleAction

**命名空间:** `TaleWorlds.CampaignSystem.Actions`  
**模块:** `TaleWorlds.CampaignSystem`  
**类型:** `public static class StartBattleAction`  
**基类:** 无（静态类）  
**源文件:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/StartBattleAction.cs`

## 一句话职责

把两个已经由 EncounterManager、AI 或玩家遭遇 owner 验证为可交战的真实 Campaign party 创建为 `MapEvent` 战斗，或将 party 加入已有事件，完成参与方登记、遭遇状态和战斗开始通知；它只负责达到战斗开始边界，不决定战争结果、Mission 内容或结算伤亡。

## 心智模型

`StartBattleAction` 是战役地图事件的**创建/加入边界**。它不会运行 3D Mission、结算伤亡、决定战争，也不替代 [EncounterManager](../../campaign/EncounterManager) 判断两个 party 是否可以互动。调用方必须先建立合法的 attacker、defender 和遭遇上下文。

通用 `Apply(PartyBase, PartyBase)` 会根据当前据点、围城、raid、blockade 和已有地图事件状态推导 `MapEvent.BattleTypes`。显式入口更窄：`ApplyStartBattle` 建立野战，`ApplyStartRaid` 对据点建立 raid，`ApplyStartSallyOut` 使用城镇驻军对抗防守方，`ApplyStartAssaultAgainstWalls` 建立攻城突击。

如果 defender 没有地图事件，内部路径会要求当前 `EncounterModel` 创建 map-event component；如果已有事件，则把 attacker 接到相反的一侧。玩家在据点内时可能被中断现有 encounter，随后计算是否显示开始通知，并经 dispatcher 发出 `CampaignEventReceiver.OnStartBattle`。之后的 `MapEvent` 与 `PlayerEncounter` 流程负责进入 Mission 和结算。

只有在 mod 扩展了已有遭遇 owner、且手里是活跃 party 时才直接使用。不要直接写 `MapEventSide`，不要在任意 tick 中调用，也不要把它当作传送或启动 3D Mission 的快捷方式。

## 依赖图

```text
EncounterManager / 围城 / raid owner
  -> StartBattleAction.Apply(attackerParty, defenderParty) 或显式类型入口
      -> Campaign.Current.Models.EncounterModel
          -> 创建 MapEvent component 或加入一侧
      -> CampaignEventDispatcher.OnStartBattle
          -> CampaignEvents / CampaignEventReceiver 监听器
      -> PlayerEncounter / MapEvent / Mission 投影
```

**上游:** [EncounterManager](../../campaign/EncounterManager)、`PlayerEncounter`、围城和 raid 流程提供当前 party 与据点上下文。  
**下游:** [MapEvent](../../campaign/MapEvent)、[CampaignEvents](../../campaign/CampaignEvents)、地图事件 Behavior、玩家 encounter 状态以及最终的 [Mission](../../mission/Mission) 消费结果。  
**相关实体:** [PartyBase](../../campaign/PartyBase)、[MobileParty](../../campaign/MobileParty)、[Settlement](../../campaign/Settlement) 和 [SiegeEvent](../../campaign/SiegeEvent)。

## 关键入口与 BattleType 选择

### `Apply`

```csharp
public static void Apply(PartyBase attackerParty, PartyBase defenderParty)
```

当 defender 没有已有事件时，源码从 live party 和据点状态推导野战、围城、城外围城、hideout、sally-out、raid、blockade 或 blockade-sally-out。已有事件时，它保留事件族，并可能把特殊的双方海上 raid 分支改为野战。传给事件的 `subject` 在有据点上下文时是相关 settlement。

### 显式入口

| 入口 | 必须是活对象的参数 | 含义 |
| --- | --- | --- |
| `ApplyStartBattle(MobileParty, MobileParty)` | attacker 与 defender party | 创建或加入野战。 |
| `ApplyStartRaid(MobileParty, Settlement)` | attacker 与 settlement | 对据点 party 开始 raid。 |
| `ApplyStartSallyOut(Settlement, MobileParty)` | town garrison 与 defender | 发起 sally-out，需要 `settlement.Town.GarrisonParty`。 |
| `ApplyStartAssaultAgainstWalls(MobileParty, Settlement)` | attacker 与 settlement | 对据点 party 发起攻城突击。 |

显式名称不会替调用方完成 active、阵营敌对、围城/raid 状态和玩家 encounter owner 的验证。

## 状态与事件顺序

1. defender 没有事件时，通过当前 `EncounterModel` 创建 map-event component；否则把 attacker 加到正确的一侧。
2. 玩家在据点 encounter 中且需要中断时，调用 `PlayerEncounter.InterruptEncounter`。
3. 只有双方都是各自军团 leader 时才可能显示开始通知；据点事件有多个 defender party 时会抑制该标志。
4. 派发 `OnStartBattle(attackerParty, defenderParty, subject, showNotification)`。
5. 后续由 `MapEvent`、玩家 encounter、围城和 Mission 流程继续处理；这个 Action 不会结束事件。

观察地图事件创建和清理可订阅 `CampaignEvents.MapEventStarted` 与 `CampaignEvents.MapEventEnded`；观察即时开始边界则使用 `CampaignEvents`/receiver 的战斗回调。两个通知都不等于战斗已经结算。

## 真实当前 Campaign 示例

### 在验证双方 party 后启动 mod 自有野战

原版 EncounterManager 从当前 Campaign 提供活 party，并通常先调用 `StartPartyEncounter`。一个范围很窄的 mod 自有遭遇只有在完成同类检查后，才可使用显式野战入口：

```csharp
using System.Linq;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;

public static void StartValidatedFieldBattle()
{
    if (Campaign.Current == null || MobileParty.MainParty == null)
        return;

    MobileParty attacker = MobileParty.MainParty;
    MobileParty defender = Campaign.Current.MobileParties.FirstOrDefault(p =>
        p != attacker && p.IsActive && p.MapEvent == null &&
        p.MapFaction != attacker.MapFaction);
    if (defender == null || attacker.MapEvent != null || attacker.CurrentSettlement != null ||
        defender.CurrentSettlement != null)
        return;

    StartBattleAction.ApplyStartBattle(attacker, defender);
}
```

这段示例故意限制为两个没有当前事件或据点位置的活地图 party。需要玩家 encounter、军团加入、围城检查或 AI 互动规则时，应优先让 [EncounterManager](../../campaign/EncounterManager) 处理 owner 流程。

### 观察创建的 MapEvent 与开始边界

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.MapEvents;
using TaleWorlds.CampaignSystem.Party;

private void RegisterEvents()
{
    CampaignEvents.MapEventStarted.AddNonSerializedListener(this, OnMapEventStarted);
}

private void OnMapEventStarted(MapEvent mapEvent, PartyBase attacker, PartyBase defender)
{
    if (mapEvent != null && attacker != null && defender != null)
        RecordBattle(mapEvent.StringId, attacker.StringId, defender.StringId);
}
```

在回调中复制 ID 或其他需要的值。`MapEvent` 之后可能被结算，不能把它作为 mod 的持久状态直接保存。

## 风险与存档边界

- **Action 不返回合法性结果。** 它假设 Campaign、party 和遭遇状态完整；空或过期输入可能在 `EncounterModel` 或 party/event 访问中失败。
- **玩家遭遇应走 owner。** 不经过 `PlayerEncounter`、围城、军团和 EncounterManager 的建立步骤，直接调用显式入口可能得到没有正确菜单或 Mission 投影的地图事件。
- **BattleType 必须与世界状态一致。** `ApplyStartRaid`、`ApplyStartSallyOut` 和 `ApplyStartAssaultAgainstWalls` 依赖相应据点组件与 AI/围城状态；普通 village 或没有 garrison 的 town 不符合入口契约。
- **已有事件是共享状态。** Action 可能把 party 加入一侧、中断玩家 encounter，或改变海上 raid 分支。不要在同一双方的 `MapEventStarted` 回调中再次调用。
- **开始不等于结算。** 不要从 `OnStartBattle` 监听器随意移除兵、Finalize 事件或进入 Mission；owner 可能仍在准备参与者和玩家流程。
- **MapEvent 不是可稳定保存的回调对象。** 保存稳定 party/event ID，读档后重新获取活对象；不要序列化事件引用或把 `showNotification` 当成持久状态。
- **不要手写 side。** 直接赋值 `MapEventSide` 或 `MapEvent` 会跳过 `EncounterModel` 创建、事件发布、玩家中断和参与者登记，问题可能在之后的遭遇或存档中才暴露。

## 导航

- **父级:** [Campaign extension API](../) · [Campaign system](../../campaign/)
- **同级:** [EnterSettlementAction](../EnterSettlementAction) · [TakePrisonerAction](../TakePrisonerAction) · [ChangeOwnerOfSettlementAction](../ChangeOwnerOfSettlementAction)
- **相关实体:** [MapEvent](../../campaign/MapEvent) · [PartyBase](../../campaign/PartyBase) · [MobileParty](../../campaign/MobileParty) · [Settlement](../../campaign/Settlement) · [SiegeEvent](../../campaign/SiegeEvent)
- **owner 与通知:** [EncounterManager](../../campaign/EncounterManager) · [CampaignEvents](../../campaign/CampaignEvents) · [CampaignEventDispatcher](../../campaign/CampaignEventDispatcher) · [Mission](../../mission/Mission)
