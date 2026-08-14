---
title: "Encounters 遭遇家族"
description: "玩家遭遇状态、地点遭遇、战役战斗结果，以及地图、菜单和 Mission 之间的交接。"
---

# Encounters 遭遇家族

**一句话职责：** Encounter API 协调玩家短暂经历部队冲突或据点访问：把地图状态转换为菜单和 Mission，并在结算后把结果交回 Campaign。

## 心智模型

`PlayerEncounter.Current` 是围绕 `MapEvent` 的玩家状态机，不是持久世界实体。它所有玩家当前 side、战斗模拟、战利品和俘虏进度，以及转至 `End` 的流程；`LocationEncounter` 单独表示据点访问，为城镇、村庄、城堡或匪巢创建正确的 Mission controller。`CampaignBattleResult` 是 Mission 报告胜方后使用的可保存摘要。

主部队确实进入部队或据点交互时才使用 Encounter 边界。战役战斗数据由 [MapEvents](../mapevents) 承担，选项由 [GameMenus](../gamemenus) 承担，Mission 创建交给 `CampaignMission`。`Finish`、`LeaveBattle` 或 `LeaveSettlement` 清理后，不能保留 `PlayerEncounter.Current`、`LocationEncounter` 或 Mission controller。

## 依赖关系

- 上游：`EncounterManager.StartPartyEncounter` / `StartSettlementEncounter`、`PartyBase.MainParty`、`MobileParty.MainParty`、据点状态和 [MapEvents](../mapevents)。
- 运行时：`PlayerEncounter` 选择菜单，打开 Mission 或模拟，处理结果状态、战利品、俘虏和返回路径。
- 下游：`CampaignMission`、`GameMenu`、Campaign Actions、roster、关系/奖励 Model 与地图事件终结。
- 持久化：战役战斗结果和 Encounter 所有的战役数据走 Save System；活动 Mission 和地点 controller 是生命周期绑定的运行时对象。

## 真实入口

```csharp
if (MobileParty.MainParty != null && Settlement.CurrentSettlement != null)
{
    EncounterManager.StartSettlementEncounter(MobileParty.MainParty, Settlement.CurrentSettlement);
}
```

这是据点交互流程使用的 Campaign 入口。它建立 Encounter/菜单上下文，不是传送部队或创建脱离战役的城镇 Mission 的通用方法。

## 时机与风险边界

管理器可能加入既有战斗，而不是创建一个新战斗；Mission 返回或读档后，`PlayerEncounter` 也可能重访菜单、战斗、俘获、战利品和结束状态。假定 Mission 结束后 `Current` 仍不为 null 的 consequence 会失败。不能在对话条件中调用 `Finish` 或 `FinalizeBattle`：两者都会清理或终结 Campaign 所有的状态，可能让活动菜单无处返回。LocationEncounter 列表持有 `LocationCharacter` 引用，地点场景改变时应重建 mod 所有的地点状态，不能保存 Mission 局部引用。

## Encounter 条目

| Namespace | Type | Purpose | Timing |
| --- | --- | --- | --- |
| TaleWorlds.CampaignSystem.Encounters | [PlayerEncounter](../PlayerEncounter) | 驱动主部队的战斗或访问状态机，包括 Mission、模拟、战利品和清理。 | 从开始遭遇到返回 Campaign 流程。 |
| TaleWorlds.CampaignSystem.Encounters | [PlayerEncounterState](../PlayerEncounterState) | 命名准备结果、俘获英雄、分配战利品和结束等进度阶段。 | `PlayerEncounter.Update` 转换期间。 |
| TaleWorlds.CampaignSystem.Encounters | [CampaignBattleResult](../CampaignBattleResult) | 保存战斗结算返回的玩家胜利、失败、撤退和敌方退却结果。 | Mission/模拟产生结果之后。 |
| TaleWorlds.CampaignSystem.Encounters | [LocationEncounter](../LocationEncounter) | 持有据点访问、陪同角色和 Mission controller 创建契约。 | 玩家处于据点遭遇期间。 |
| TaleWorlds.CampaignSystem.Encounters | [TownEncounter](../TownEncounter) | 从城镇地点打开城镇中心、竞技场、伪装或室内 Mission。 | 在城镇地点之间移动时。 |
| TaleWorlds.CampaignSystem.Encounters | [VillageEncounter](../VillageEncounter) | 打开村庄地点 Mission controller 和访问流程。 | 进入或穿过村庄时。 |
| TaleWorlds.CampaignSystem.Encounters | [CastleEncounter](../CastleEncounter) | 为城堡场景专用化地点遭遇。 | 城堡访问建立地点流程时。 |
| TaleWorlds.CampaignSystem.Encounters | [HideoutEncounter](../HideoutEncounter) | 将匪巢标记为活动地点遭遇，以走专用战斗/菜单路线。 | 进入匪巢和处理后果时。 |
| TaleWorlds.CampaignSystem.Encounters | [RetirementEncounter](../RetirementEncounter) | 表示退隐流程使用的地点式遭遇。 | 仅退隐交互活动期间。 |

## 导航

- [父级：Campaign-Ext](..)
- [同级：MapEvents](../mapevents)、[GameMenus](../gamemenus) 与 [Dialogs](../dialogs)
- [相关：Actions](../actions)、[Settlements](../settlements) 与 [Mission](../../mission)
