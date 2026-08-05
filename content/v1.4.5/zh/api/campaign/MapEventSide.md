---
title: "MapEventSide"
description: "按进攻方或防守方分组 MapEventParty，并持有事件一方兵力、伤亡和部队分配状态的容器。"
---

# MapEventSide

**命名空间：** `TaleWorlds.CampaignSystem.MapEvents`  
**模块：** `TaleWorlds.CampaignSystem`  
**类型：** `public class MapEventSide`  
**基类：** 无  
**源文件：** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.MapEvents/MapEventSide.cs`

## 一句话职责

`MapEventSide` 聚合一方的 [`MapEventParty`](../MapEventParty) 记录，并协调进攻方或防守方的兵力、伤亡、模拟部队与 Mission 分配状态。

## 心智模型

`MapEventSide` 由 [`MapEvent`](../MapEvent) 内部使用所属事件、`BattleSideEnum` 和 leader `PartyBase` 创建，然后由事件暴露为 `AttackerSide` 或 `DefenderSide`。它的 `Parties` 是该事件的一方视图，不是另一套战役派对集合；`OtherSide` 通过同一个事件取得对方。

这个对象包含两类状态：可存档字段保存 leader/派系身份、伤亡与奖励、比率和派对记录；缓存字段保存部队优先级、已分配/待出场字典、力量缓存、模拟船只和锁定标记。`MakeReadyForSimulation` 与 `MakeReadyForMission` 为宿主的模拟或 Mission supplier 准备缓存，不是通用的 Roster 编辑 API。

## 何时使用，何时不要使用

**适合使用：**

- 读取进攻/防守派对列表、leader、当前健康人数、伤亡力量或一方结果值。
- 检查哪一方包含 `PartyBase.MainParty`，或诊断活动事件的分类。
- 在活动事件期间写诊断逻辑，并在 `MapEventEnded` 时释放引用。

**不要这样使用：**

- 不要直接编辑 `Parties` 添加/移除派对；成员关系属于遭遇和 `MapEvent` 协议。
- 不要调用 `AllocateTroops`、`MakeReadyForMission`、`Clear`、`Surrender` 或 `Route` 强行改写战果；这些调用由 Mission supplier 和事件结算拥有。
- 不要把 `StrengthRatio`、`RenownValue`、`InfluenceValue` 或伤亡字段当成可随意写入的 mod 状态；Model、行动和结算流程会计算并提交后果。

## 依赖关系与所有权

- **所有者：** [`MapEvent`](../MapEvent) 创建双方、把它们纳入存档图并控制生命周期。
- **子记录：** [`MapEventParty`](../MapEventParty) 把每个参与的 [`PartyBase`](../PartyBase) 绑定到这一方。
- **输入：** `BattleSideEnum`、`MapEvent.BattleTypes`、`MilitaryPowerModel`、部队 supplier Model 和派对 Roster。
- **消费者：** `PartyGroupTroopSupplier`、SandBox Mission 设置、战斗模拟、`PlayerEncounter` 与战役奖励行为消费准备好的数据。
- **存档：** 一方的可存档值和派对记录会随战役存档；分配字典和模拟列表属于缓存，会重新建立。

## 关键成员与调用时机

| 成员 | 用途、副作用与时机 |
|---|---|
| `MapEvent`、`MissionSide`、`LeaderParty`、`OtherSide` | 标识所属事件、方向、leader 和对方；只在事件仍有效时使用。 |
| `Parties`、`TroopCount`、`HealthyTroopCountAtMapEventStart` | 读取成员和兵力；列表只读，派对可能在结算前离开。 |
| `StrengthRatio`、`CasualtyStrength`、`RenownValue`、`InfluenceValue`、`TroopCasualties`、`ShipCasualties` | 由事件协议保存的一方结果/奖励输入，不是独立 mod 状态。 |
| `GetTotalHealthyHeroCountOfSide()`、`GetTotalHealthyTroopCountOfSide()`、`RecalculateMemberCountOfSide()`、`RecalculateStrengthOfSide()` | 读取或重新计算当前一方指标；派对 Roster 变化时结果会变化。 |
| `GetTroops()`、`GetAllocatedTroop(...)`、`GetReadyTroop(...)` | 读取模拟/Mission 分配缓存；只能在宿主完成准备后解释。 |
| `MakeReadyForSimulation(...)`、`MakeReadyForMission(...)`、`AllocateTroops(...)` | 为模拟或 Mission 准备并锁定事件兵力；调用阶段有严格宿主前提。 |
| `OnTroopKilled/Wounded/Routed(...)`、`OnTroopScoreHit(...)` | 把战斗回调转给相应 `MapEventParty`，更新伤亡、经验和贡献。 |
| `HandleMapEventEnd()`、`CommitXpGains()`、`CommitRenownChanges()`、`CommitInfluenceChanges()`、`CommitMoraleChanges()`、`CommitGoldChanges()` | 按引擎顺序提交事件结束变化；监听器不要自行重放。 |

## 真实获取示例

下面通过战役管理器取得活动的玩家事件，并只读检查进攻方：

```csharp
using System.Linq;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.MapEvents;

public static int GetPlayerAttackerCount()
{
    MapEvent mapEvent = Campaign.Current.MapEventManager.MapEvents
        .FirstOrDefault(eventRecord => eventRecord.IsPlayerMapEvent);
    MapEventSide side = mapEvent?.AttackerSide;
    return side?.TroopCount ?? 0;
}
```

问题针对防守方时使用 `DefenderSide` 或 `OtherSide`。不要在 Mission supplier 正在分配部队的同一 tick 中遍历并修改一方。

## 风险与崩溃边界

1. 撤退、销毁或结算期间 `Parties` 中的 `PartyBase` 可能正在变化；应先复制需要的标量，并在 `MapEventEnded` 后停止使用这一方。
2. 分配缓存不是可存档事实。在错误阶段调用 `Update`、`Clear` 或分配方法，会让 Mission 出场 Roster 与模拟不一致，或找不到部队。
3. 一方伤亡和奖励字段由事件协议写入；直接修改会绕过派对伤亡 Roster、经验、俘虏、战利品、关系和 Settlement 后果。
4. 原 leader 离开后 `LeaderParty` 可能改变；不要假设它永远是第一个派对，也不要长期保存旧引用。
5. `OtherSide` 需要活动事件和有效的一方；在移除后或对象部分加载时调用可能触及失效事件状态。

## 版本说明

v1.4.5 将可存档的一方状态与 `[CachedData]` 部队/船只分配状态分开。Mission supplier 和海战缓存细节可能跨版本变化；移植时应重新核对 `MapEventSide`、`PartyGroupTroopSupplier` 和目标 Mission。

## 导航

- ↑ 父级：[Campaign API](../)
- ↔ 同区：[`MapEvent`](../MapEvent) · [`MapEventParty`](../MapEventParty) · [`MapEventManager`](../MapEventManager)
- 相关：[`MapEventState`](../MapEventState) · [`MapEventComponent`](../MapEventComponent) · [`PartyBase`](../PartyBase) · [`TroopRoster`](../TroopRoster)
- English: [MapEventSide](../../../../en/api/campaign/MapEventSide)
