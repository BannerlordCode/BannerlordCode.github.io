---
title: "ForceSuppliesEventComponent"
description: "负责从村庄强征物资的 MapEvent 组件，管理村庄状态、民兵绑定、完成事件和海上劫掠上下文。"
---
# ForceSuppliesEventComponent

**命名空间：** `TaleWorlds.CampaignSystem.MapEvents`  
**模块：** `TaleWorlds.CampaignSystem`  
**类型：** `public class ForceSuppliesEventComponent : MapEventComponent`  
**基类：** [MapEventComponent](../MapEventComponent)  
**源码文件：** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.MapEvents/ForceSuppliesEventComponent.cs`

## 一句话职责

它为强征村庄物资的 `MapEvent` 提供村庄或海上劫掠模拟上下文，并让村庄保持强征物资状态直到事件结束。

## 心智模型

这是具体的 [MapEventComponent](../MapEventComponent)，不是村庄库存服务，也不是 `MobileParty` 组件。`PlayerEncounter` 在 `ForceSupplies` 被设置时选择它；工厂创建外层 `MapEvent`，使用 `MapEvent.BattleTypes.IsForcingSupplies` 初始化，在有定居点民兵时把民兵队伍绑定到防守方，并通过 `Campaign.Current.MapEventManager` 登记事件。

组件负责阶段性的村庄状态切换。`OnInitialize` 调用 `ChangeVillageStateAction.ApplyBySettingToBeingForcedForSupplies`，`OnBeforeFinalize` 根据战斗状态分发 `ForceSuppliesCompleted`，只有攻击方胜利才传攻击方，否则传防守方；`OnFinalize` 把定居点恢复为普通村庄状态。组件没有公开的可变结果字段，事件及其参战方仍是状态权威。

## 何时使用，何时不要使用

- 活动玩家 Encounter 需要识别强征物资事件时，读取 `PlayerEncounter.Battle?.Component`。
- 让 `PlayerEncounter.StartBattle` 或对应 Encounter 流程调用 `CreateForceSuppliesEvent`；这个工厂会改变 Campaign 状态，不是轮询辅助函数。
- 需要完成后处理时订阅 `CampaignEvents.ForceSuppliesCompletedEvent`，不要手动调用 `OnBeforeFinalize` 或 `OnFinalize`。
- 强征志愿者应使用 [ForceVolunteersEventComponent](../ForceVolunteersEventComponent)；它的村庄状态和完成事件不同。
- 不要直接构造受保护组件、把它挂到任意 `MapEvent`，也不要假定每个防守方都有民兵队伍。

## 依赖关系

```text
PlayerEncounter.ForceSupplies
  -> ForceSuppliesEventComponent.CreateForceSuppliesEvent
  -> MapEvent.Initialize(IsForcingSupplies)
  -> 村庄状态 + 可选民兵 MapEventSide 绑定
  -> ForceSuppliesCompleted + 村庄恢复正常
```

- 事件宿主：[MapEvent](../MapEvent) 持有参战方、战斗状态、定居点和结束顺序。
- 创建入口：[PlayerEncounter](../PlayerEncounter) 选择工厂；[MapEventManager](../MapEventManager) 登记已初始化事件。
- 状态变更：[ChangeVillageStateAction](../../campaign-ext/ChangeVillageStateAction) 进入强征状态并恢复普通状态。
- 完成通知：`CampaignEvents.ForceSuppliesCompletedEvent` 经由 dispatcher 到达 [CampaignEventReceiver](../CampaignEventReceiver)。
- 持久化：`CreateComponentForOldSaves` 将组件重新挂回已加载 `MapEvent`；事件和组件属于 Campaign 存档图。

## 状态与操作

| 成员 | 含义与时机 |
|---|---|
| `MapEvent` | 继承的事件反向引用，在构造后有效，并由旧档路径重新绑定。 |
| `SimulationContext` | 陆地事件返回 `Village`；`MapEventHelper.IsNavalRaid(MapEvent)` 为真时返回 `NavalRaid`。 |
| `CreateForceSuppliesEvent` | 创建、初始化、绑定民兵、登记并返回活动事件的组件。 |
| `CreateComponentForOldSaves` | 围绕已加载事件重建组件，不创建或登记新事件。 |
| `OnInitialize` | 将事件定居点标记为正在强征物资，由 `MapEvent.Initialize` 调用。 |
| `OnBeforeFinalize` | 在外层事件清理前，用源码定义的胜方调用完成通知。 |
| `OnFinalize` | 将事件定居点恢复为普通村庄状态。 |

## 真实示例

Campaign 行为需要观察当前事件时，应从活动 Encounter 获取它并检查组件：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Encounters;
using TaleWorlds.CampaignSystem.MapEvents;
using TaleWorlds.CampaignSystem.Settlements;

MapEvent battle = PlayerEncounter.Battle;
if (battle?.Component is ForceSuppliesEventComponent supplies && !battle.IsFinalized)
{
    MapEvent.PowerCalculationContext context = supplies.SimulationContext;
    Settlement village = battle.MapEventSettlement;
}
```

源码只在选定强征物资 Encounter 后创建该组件。需要完成处理的 mod 应监听 `CampaignEvents.ForceSuppliesCompletedEvent`，并在 `MapEventEnded` 后释放事件引用。

## 风险与存档边界

- 工厂假定 attacker 和 defender 描述村庄 Encounter。传入任意队伍可能使 `MapEventSettlement` 或村庄状态操作失效。
- 只有 `defenderParty.Settlement?.MilitiaPartyComponent` 存在时才会更新民兵队伍的 `MapEventSide`。没有民兵组件不等于事件无效。
- 对同一 Encounter 重复调用工厂会创建另一个事件，造成村庄状态、民兵参战和玩家 Encounter 状态不一致。
- 手动调用 `OnInitialize`、`OnBeforeFinalize` 或 `OnFinalize` 可能重复发送完成通知，或让村庄永久停留在强征状态。
- 完成通知把所有非攻击方胜利状态都映射为防守方。需要区分平局或中断的消费者必须自己读取事件结果。
- 读档时必须在已加载事件上使用 `CreateComponentForOldSaves`；加载期间创建新事件会改变存档图并复制 Encounter 状态。

## 版本说明

本页依据 v1.4.5 `ForceSuppliesEventComponent`、`PlayerEncounter.StartBattleInternal`、`MapEvent.OnLateLoad`、`ChangeVillageStateAction` 和 `ForceSuppliesCompleted` 事件路径编写。战斗类型和存档版本条件可能随版本变化。

## 导航

- 父级：[Campaign API](../)
- 同级：[MapEventComponent](../MapEventComponent) · [ForceVolunteersEventComponent](../ForceVolunteersEventComponent) · [SiegeAmbushEventComponent](../SiegeAmbushEventComponent) · [BlockadeBattleMapEvent](../BlockadeBattleMapEvent)
- 相关：[MapEvent](../MapEvent) · [PlayerEncounter](../PlayerEncounter) · [MapEventManager](../MapEventManager) · [ChangeVillageStateAction](../../campaign-ext/ChangeVillageStateAction)
- English: [ForceSuppliesEventComponent](../../../../en/api/campaign/ForceSuppliesEventComponent)
