---
title: "MapEvents 地图事件家族"
description: "战役地图战斗、参与方和组件、存档所有权，以及进入 Mission 战斗的转换。"
---

# MapEvents 地图事件家族

**一句话职责：** `MapEvent` 是战役所有的战斗记录：它把部队集合为攻守双方，推进遭遇，并在 Mission 战果提交回世界前持续存在。

## 心智模型

事件既不是菜单，也不是 Mission。`MapEventManager` 所有可保存列表并 tick；`MapEvent` 所有两个 `MapEventSide`、其中的 `MapEventParty`、战斗状态与事件组件。主部队参战时，`PlayerEncounter` 是桥梁：它打开战斗或模拟，然后让地图事件终结并脱离参与者。

响应玩家战斗时经 `MapEvent.PlayerMapEvent` 读取既有状态。创建或解决世界冲突应通过 [Actions](../actions)、`EncounterManager` 和对应 Model 边界。不要在菜单回调中裸建 `MapEvent`，也不要在 Mission/战果管线仍在消费它时调用 `FinalizeEvent`。

## 依赖关系

- 上游：`PartyBase`、`MobileParty`、据点、[Encounters](../encounters)、`StartBattleAction` 和 Campaign Models。
- 所有权：`Campaign.Current.MapEventManager` 保存并更新已注册地图事件；每一 side 所有部队的战斗结算数据。
- 下游：Mission 部署/模拟、地图事件结果、奖励、士气、伤亡、围城和玩家遭遇菜单。
- 相关：[Party](../party)、[Settlements](../settlements)、[GameMenus](../gamemenus) 与 [Campaign events](../CampaignEvents)。

## 真实读取入口

```csharp
MapEvent mapEvent = MapEvent.PlayerMapEvent;
if (mapEvent != null && !mapEvent.IsFinalized)
{
    MapEventSide playerSide = mapEvent.GetMapEventSide(mapEvent.PlayerSide);
    int involved = mapEvent.GetNumberOfInvolvedMen(playerSide.MissionSide);
}
```

`PlayerMapEvent` 在玩家未参战时为 null。Mission 完成回到 Campaign 时事件可立即终结，应只在需要它的事件/Behavior 回调内读取，不能保存到后续 tick。

## 时机与风险边界

`MapEventManager.OnMapEventCreated` 把新事件放入可保存列表，管理器在反向 tick 中移除已终结事件。`MapEvent` 保存 side、party、状态和战斗数据；在结算期间直接改 roster 会跳过伤亡、奖励和事件分发账本。Mission Agent 不是地图事件的 troop，Mission 结束后会失效。为保证存档兼容性，自定义持久后果应由 Behavior 所有，并在 Campaign 事件或 Action 完成边界响应，不能序列化对瞬态事件组件的引用。

## MapEvent 条目

| Namespace | Type | Purpose | Timing |
| --- | --- | --- | --- |
| TaleWorlds.CampaignSystem.MapEvents | [MapEvent](../MapEvent) | 所有一次战役冲突的战斗类型、双方、状态、据点上下文和终结。 | 从注册创建到终结。 |
| TaleWorlds.CampaignSystem.MapEvents | [MapEventManager](../MapEventManager) | 保存、查找、启动特殊事件、更新活动事件并移除已终结项。 | Campaign tick 和 Action 驱动的创建时。 |
| TaleWorlds.CampaignSystem.MapEvents | [MapEventSide](../MapEventSide) | 汇总一方的部队、兵力分配、强度和投降状态。 | 设置、模拟、Mission 回报和结算期间。 |
| TaleWorlds.CampaignSystem.MapEvents | [MapEventParty](../MapEventParty) | 跟踪一支部队在其 side 中的贡献、伤亡、奖励和 roster 分配。 | 加入后到战斗账本完成。 |
| TaleWorlds.CampaignSystem.MapEvents | [MapEventComponent](../MapEventComponent) | 提供区分野战、劫掠、匪巢或特殊遭遇的行为。 | 初始化事件时选择。 |
| TaleWorlds.CampaignSystem.MapEvents | [FieldBattleEventComponent](../FieldBattleEventComponent) | 提供普通露天战斗行为。 | 野战初始化和完成时。 |
| TaleWorlds.CampaignSystem.MapEvents | [RaidEventComponent](../RaidEventComponent) | 应用村庄劫掠进度和独立的结果路径。 | 劫掠事件活动期间。 |
| TaleWorlds.CampaignSystem.MapEvents | [ForceSuppliesEventComponent](../ForceSuppliesEventComponent) | 表示强索村庄补给，而不是完整战斗。 | 强索补给遭遇分支中。 |
| TaleWorlds.CampaignSystem.MapEvents | [ForceVolunteersEventComponent](../ForceVolunteersEventComponent) | 表示从村庄强征志愿兵。 | 强征志愿兵分支中。 |
| TaleWorlds.CampaignSystem.MapEvents | [HideoutEventComponent](../HideoutEventComponent) | 标记匪巢战斗及其专用 Mission/结算处理。 | 匪巢攻击设置到得到结果。 |
| TaleWorlds.CampaignSystem.MapEvents | [SiegeAmbushEventComponent](../SiegeAmbushEventComponent) | 标记持续围城中的伏击阶段。 | 仅围城伏击设置与结算时。 |
| TaleWorlds.CampaignSystem.MapEvents | [BlockadeBattleMapEvent](../BlockadeBattleMapEvent) | 为组件层次加入封锁战特定行为。 | 初始化封锁战时。 |
| TaleWorlds.CampaignSystem.MapEvents | [MapEventState](../MapEventState) | 命名 update 和战斗处理使用的事件生命周期状态。 | 事件状态推进时。 |
| TaleWorlds.CampaignSystem.MapEvents | [MapEventResultExplainer](../MapEventResultExplainer) | 为战斗结果展示产生解释性数值。 | UI 或奖励反馈需要结果之后。 |
| TaleWorlds.CampaignSystem.MapEvents | [IMapEventVisual](../IMapEventVisual) | 定义地图层渲染活动事件的可视化契约。 | 地图层绘制活动事件时。 |
| TaleWorlds.CampaignSystem.MapEvents | [BattleTypes](../BattleTypes) | 命名战斗类别，供事件选择对应的组件和 Mission 行为。 | 创建并分类 MapEvent 时。 |
| TaleWorlds.CampaignSystem.MapEvents | [PowerCalculationContext](../PowerCalculationContext) | 携带战斗力量模型所需的双方部队和修正项。 | 设置或模拟力量时。 |

## 导航

- [父级：Campaign-Ext](..)
- [同级：Encounters](../encounters)、[Party](../party) 与 [Settlements](../settlements)
- [相关：Actions](../actions)、[GameMenus](../gamemenus) 与 [Mission](../../mission)
