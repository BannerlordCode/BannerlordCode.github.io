---
title: "RaidEventComponent"
description: "负责村庄或海上劫掠伤害、战利品与生产影响、Settlement 状态和劫掠结束清理的 MapEvent 组件。"
---

# RaidEventComponent

**命名空间：** `TaleWorlds.CampaignSystem.MapEvents`  
**模块：** `TaleWorlds.CampaignSystem`  
**类型：** `public class RaidEventComponent : MapEventComponent`  
**基类：** [`MapEventComponent`](../MapEventComponent)  
**源文件：** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.MapEvents/RaidEventComponent.cs`

## 一句话职责

`RaidEventComponent` 负责劫掠 [`MapEvent`](../MapEvent) 的伤害、生产奖励、Settlement 状态转换和结束通知；它把劫掠的战役模拟与事件清理串在一起，而不是一个可直接写入村庄数值的普通数据容器。

## 心智模型

`CreateRaidEvent` 创建并以 `MapEvent.BattleTypes.Raid` 初始化 `MapEvent`，挂接这个组件；如果防守方有民兵，还会把民兵派对放入防守方，最后注册到 `Campaign.Current.MapEventManager`。初始化时它把 Settlement 标记为正在被劫掠并重置伤害/奖励状态。更新阶段在防守方没有兵力后，使用 `RaidModel` 计算 Settlement 伤害和战利品影响。结算前它恢复或标记 Settlement，触发 `CampaignEvents.RaidCompletedEvent`，清空生产奖励；结算后非玩家劫掠派对可能返回该 Settlement。

因此它不是单纯的类型标签，而是劫掠进度的状态所有者。`RaidDamage` 是模拟和 Settlement 流程产生的结果，不是让村庄立即掉血的公开输入。`CreateComponentForOldSaves` 会恢复存档的中间值，不会创建重复事件。

## 何时使用，何时不要使用

**适合使用：**

- 从活动劫掠读取 `RaidDamage`、目标 Settlement、双方或战斗状态。
- 订阅 `CampaignEvents.RaidCompletedEvent`，在劫掠完成后复制稳定的结果值做后续处理。
- 已有有效进攻/防守 `PartyBase` 时，通过 `CreateRaidEvent` 创建受支持的劫掠。

**不要这样使用：**

- 不要写 `RaidDamage` 或直接设置村庄生命值；让 `RaidModel`、`ChangeVillageStateAction` 和组件更新流程协调后果。
- 不要把劫掠当野战；它的模拟上下文、Settlement 状态、战利品和结束事件都不同。
- 不要手动调用 `OnBeforeFinalize`、`OnFinalize` 或 `Update`，也不要用加载出的组件创建新事件。

## 依赖关系与生命周期

- **基类：** [`MapEventComponent`](../MapEventComponent) 提供事件所有者及完成/结算协议。
- **创建者：** [`DefaultEncounterModel`](../DefaultEncounterModel)、[`PlayerEncounter`](../PlayerEncounter) 和劫掠遭遇代码调用 `CreateRaidEvent`。
- **输入：** 进攻/防守 [`PartyBase`](../PartyBase)、`Settlement`、`RaidModel`、`BattleRewardModel` 和防守方民兵派对。
- **行动/事件：** `ChangeVillageStateAction` 应用 BeingRaided/Looted/Normal 状态；`CampaignEvents.RaidCompletedEvent` 在结算前工作完成后发布胜方和组件。
- **消费者：** 战役 Issue 与战争行为、`StatisticsCampaignBehavior`、`KingdomManager` 和 AI 劫掠逻辑读取组件及结束事件。
- **存档：** 劫掠伤害、下次 Settlement 伤害、战利品数量和生产奖励属于存档图；旧档使用专用兼容工厂。

## 关键成员与调用时机

| 成员 | 用途、副作用与时机 |
|---|---|
| `RaidDamage` | 累积劫掠伤害，应在更新/结果阶段读取；私有 setter，不能当修改旋钮。 |
| `AttackerSide`、`DefenderSide`、`MapEventSettlement`、`BattleState`、`IsPlayerMapEvent` | 快速访问事件双方、Settlement、结果和玩家边界；只在事件活动期间有效。 |
| `SimulationContext` | 普通劫掠返回 `Village`，海上劫掠返回 `NavalRaid`。 |
| `CreateRaidEvent(PartyBase, PartyBase)` | 创建 Raid 事件、挂接并初始化民兵/Settlement 关联、注册事件，返回组件。 |
| `CreateComponentForOldSaves(MapEvent, float, int, float)` | 用存档的下次伤害、战利品数量和 `RaidDamage` 重建组件，不会注册第二个事件。 |
| `OnInitialize()` | 重置伤害、把目标标记为被劫掠，并初始化/清空生产奖励表。 |
| `Update(ref bool finish)` | 防守方撤出后通过 `Campaign.Current.Models.RaidModel` 计算伤害和奖励；只能由宿主在正确阶段调用。 |
| `OnBeforeFinalize()` | 恢复或标记 Settlement、触发 `RaidCompletedEvent`、清生产奖励，并记录民兵抵抗。 |
| `OnFinalize()` | 重置抵抗状态，并可能让非玩家劫掠派对返回目标 Settlement。 |

## 真实获取示例

通过真实的战役事件观察劫掠结束，不要调用组件的结算钩子：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.MapEvents;
using TaleWorlds.Core;

public sealed class RaidAuditBehavior : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        CampaignEvents.RaidCompletedEvent.AddNonSerializedListener(this, OnRaidCompleted);
    }

    public override void SyncData(IDataStore dataStore)
    {
    }

    private void OnRaidCompleted(BattleSideEnum winnerSide, RaidEventComponent raid)
    {
        float damage = raid.RaidDamage;
        CampaignTime now = CampaignTime.Now;
        InformationManager.DisplayMessage(new InformationMessage($"Raid damage: {damage} at {now}"));
    }
}
```

需要读取活动劫掠时，从 `Campaign.Current.MapEventManager.MapEvents` 找到 `mapEvent.Component as RaidEventComponent`；事件结束后不要继续持有组件。

## 风险与崩溃边界

1. `RaidCompletedEvent` 在 `OnBeforeFinalize` 期间触发；监听器可以读已提交的劫掠值，但应复制标量/ID，不要把组件或双方对象带到后续 tick。
2. 直接改村庄状态或伤害会绕过生产奖励、战利品数量、民兵抵抗和劫掠派对的后续移动。
3. 旧档工厂必须接收与存档图对应的 `MapEvent` 和中间值；用新事件或错误值创建会使 Settlement 伤害与事件不一致。
4. 劫掠组件假定存在目标 Settlement 和有效双方；用任意派对创建，可能在设置村庄状态或民兵 `MapEventSide` 时空引用。
5. 劫掠可能只在战役地图上模拟，不一定有 Mission。`Update` 或完成监听器不能假设存在 `Mission.Current`、Agent 或玩家 UI。

## 版本说明

v1.4.5 组件保存 Settlement 中间伤害和战利品数据，发送 `RaidCompletedEvent`，并支持旧档重建。Raid Model 公式、海上劫掠判断和 Settlement 行动可能跨版本变化；自定义劫掠逻辑前应重新核对源码。

## 导航

- ↑ 父级：[Campaign API](../)
- ↔ 同区：[`MapEventComponent`](../MapEventComponent) · [`FieldBattleEventComponent`](../FieldBattleEventComponent) · [`MapEvent`](../MapEvent)
- 相关：[`MapEventManager`](../MapEventManager) · [`BattleTypes`](../BattleTypes) · [`CampaignEvents`](../CampaignEvents) · [`Settlement`](../Settlement)
- English: [RaidEventComponent](../../../../en/api/campaign/RaidEventComponent)
