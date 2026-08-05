---
title: "ForceVolunteersEventComponent"
description: "负责从村庄强征志愿者的 MapEvent 组件，管理村庄状态、民兵绑定、完成事件和海上劫掠上下文。"
---
# ForceVolunteersEventComponent

**命名空间：** `TaleWorlds.CampaignSystem.MapEvents`  
**模块：** `TaleWorlds.CampaignSystem`  
**类型：** `public class ForceVolunteersEventComponent : MapEventComponent`  
**基类：** [MapEventComponent](../MapEventComponent)  
**源码文件：** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.MapEvents/ForceVolunteersEventComponent.cs`

## 一句话职责

它为强征村庄志愿者的 `MapEvent` 提供村庄或海上劫掠模拟上下文，并在志愿者 Encounter 结束后恢复村庄。

## 心智模型

这是强征志愿者 Encounter 的 Campaign 事件策略组件。`PlayerEncounter` 在 `ForceVolunteers` 被设置时选择它；工厂使用 `MapEvent.BattleTypes.IsForcingVolunteers` 创建 `MapEvent`，有民兵时把其队伍绑定到防守方，再将事件登记到活动的 [MapEventManager](../MapEventManager)。

源码刻意把公开工厂命名为 `CreateForceSuppliesEvent`，虽然类型是 `ForceVolunteersEventComponent`。这是 v1.4.5 的真实 API 名称，不能自行改写为 `CreateForceVolunteersEvent`。它通过 `ChangeVillageStateAction.ApplyBySettingToBeingForcedForVolunteers` 和 `ForceVolunteersCompleted` 与强征物资分开，结束时仍在 `OnFinalize` 恢复普通村庄状态。

## 何时使用，何时不要使用

- 活动 Encounter 需要区分强征志愿者时，读取 `PlayerEncounter.Battle?.Component`。
- 让 `PlayerEncounter` 的强征志愿者路径调用 `CreateForceSuppliesEvent`；不要凭语义发明不存在的 `CreateForceVolunteersEvent`。
- 需要 Encounter 完成后处理时订阅 `CampaignEvents.ForceVolunteersCompletedEvent`，不要调用生命周期 hook。
- 强征物资应使用 [ForceSuppliesEventComponent](../ForceSuppliesEventComponent)；两个组件的村庄状态和完成事件不同。
- 不要把组件挂到手工构造的 `MapEvent`，也不要为同一个玩家 Encounter 重复调用工厂。

## 依赖关系

```text
PlayerEncounter.ForceVolunteers
  -> ForceVolunteersEventComponent.CreateForceSuppliesEvent
  -> MapEvent.Initialize(IsForcingVolunteers)
  -> 村庄状态 + 可选民兵 MapEventSide 绑定
  -> ForceVolunteersCompleted + 村庄恢复正常
```

- 事件宿主：[MapEvent](../MapEvent) 持有战斗状态、参战方、定居点和结束顺序。
- 创建入口：[PlayerEncounter](../PlayerEncounter) 选择工厂；[MapEventManager](../MapEventManager) 保存已初始化事件。
- 状态变更：[ChangeVillageStateAction](../../campaign-ext/ChangeVillageStateAction) 进入并离开强征志愿者状态。
- 完成通知：`CampaignEvents.ForceVolunteersCompletedEvent` 经由 Campaign event receiver/dispatcher 链分发。
- 持久化：`CreateComponentForOldSaves` 让已加载事件恢复组件，不创建第二个 Encounter。

## 状态与操作

| 成员 | 含义与时机 |
|---|---|
| `MapEvent` | 继承的事件反向引用，在旧档重建期间重新绑定。 |
| `SimulationContext` | 陆地事件返回 `Village`；被识别为海上劫掠时返回 `NavalRaid`。 |
| `CreateForceSuppliesEvent` | 源码定义的工厂名，但创建的是 `IsForcingVolunteers` 事件。 |
| `CreateComponentForOldSaves` | 为已加载事件重建组件。 |
| `OnInitialize` | 把事件定居点设为强征志愿者状态。 |
| `OnBeforeFinalize` | 用源码定义的胜方分发 `ForceVolunteersCompleted`。 |
| `OnFinalize` | 把事件定居点恢复为普通村庄状态。 |

## 真实示例

从活动玩家 Encounter 读取组件，不构造受保护类型：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Encounters;
using TaleWorlds.CampaignSystem.MapEvents;

MapEvent battle = PlayerEncounter.Battle;
if (battle?.Component is ForceVolunteersEventComponent volunteers && !battle.IsFinalized)
{
    bool isVolunteerEvent = battle.IsForcingVolunteers;
    MapEvent.PowerCalculationContext context = volunteers.SimulationContext;
}
```

源码 `PlayerEncounter.StartBattleInternal` 只有在 `ForceVolunteers` 为真时才调用这个特殊命名的工厂，因此 `battle.IsForcingVolunteers` 是可靠的事件判别条件。

## 风险与存档边界

- 工厂要求 attacker/defender 是村庄形状的参战方。任意定居点或队伍可能让村庄状态操作和民兵绑定落到错误对象上。
- 民兵侧绑定是条件性的。事件可能没有 `MilitiaPartyComponent`，代码应检查实际的事件参战方，不要强假定民兵存在。
- 两次调用 `CreateForceSuppliesEvent` 会创建重复事件状态，它不是幂等的“确保志愿者 Encounter 存在”函数。
- 手动调用 `OnBeforeFinalize` 或 `OnFinalize` 可能重复完成通知，或使村庄停留在错误状态。
- 胜方通知把所有非攻击方胜利结果都映射到防守方；需要关注中断或平局的消费者必须自行读取事件状态。
- 读档时使用 `CreateComponentForOldSaves(MapEvent)`，保持已有事件作为存档身份。

## 版本说明

本页依据 v1.4.5 `ForceVolunteersEventComponent`、`PlayerEncounter.StartBattleInternal`、`MapEvent.OnLateLoad`、`ChangeVillageStateAction` 和 `ForceVolunteersCompleted` 事件路径编写。公开工厂名称是版本相关的源码细节。

## 导航

- 父级：[Campaign API](../)
- 同级：[MapEventComponent](../MapEventComponent) · [ForceSuppliesEventComponent](../ForceSuppliesEventComponent) · [SiegeAmbushEventComponent](../SiegeAmbushEventComponent) · [BlockadeBattleMapEvent](../BlockadeBattleMapEvent)
- 相关：[MapEvent](../MapEvent) · [PlayerEncounter](../PlayerEncounter) · [MapEventManager](../MapEventManager) · [ChangeVillageStateAction](../../campaign-ext/ChangeVillageStateAction)
- English: [ForceVolunteersEventComponent](../../../../en/api/campaign/ForceVolunteersEventComponent)
