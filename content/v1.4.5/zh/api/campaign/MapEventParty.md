---
title: "MapEventParty"
description: "v1.4.5 战役层把一个 PartyBase 绑定到 MapEvent 一侧的参战记录；它跟踪战斗 roster、伤亡和贡献，并把结果带入 Campaign 结算。"
---
# MapEventParty

**命名空间：** `TaleWorlds.CampaignSystem.MapEvents`  
**模块：** `TaleWorlds.CampaignSystem`  
**类型：** `public class MapEventParty`  
**基类：** `object`（隐式）  
**源码：** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.MapEvents/MapEventParty.cs`

## 一句话定位

它是一个 `PartyBase` 的战役战斗账本：把队伍绑定到 `MapEventSide`，维护带唯一 descriptor 的扁平部队视图，记录伤亡与贡献，并向所属 `MapEvent` 提供结算时使用的 roster 和奖励数据。

## 心智模型

`MapEventParty` 不是第二个 `PartyBase`，也不是通用 `TroopRoster`。它是 [MapEventSide](../MapEventSide) 中的一条参战记录。side 用真实的 `PartyBase` 创建它，然后把该队伍的 `MemberRoster` 快照成 `FlattenedTroopRoster`。模拟或玩家 Mission 期间，唯一 troop descriptor 标识同一批逻辑部队；此记录再跟踪受伤、死亡、溃逃、命中经验、士气影响、战利品去向和战斗贡献。

它的构造函数是 internal。`MapEvent.Initialize` 创建两侧；`MapEventSide.AddPartyInternal` 用真实队伍创建 `MapEventParty`，加入侧列表，再调用 `MapEvent.AddInvolvedPartyInternal` 完成事件 bookkeeping。这个类型没有 `MapEvent` 或 `MapEventSide` 属性；需要判断归属侧时，应枚举 `mapEvent.PartiesOnSide(BattleSideEnum.Attacker)` 或 `mapEvent.PartiesOnSide(BattleSideEnum.Defender)`，或读取已绑定的 `PartyBase.Side`，不能按列表位置或队伍当前地图位置猜测。

这里有两层 roster。`Party` 及其实时的 `MemberRoster`、`PrisonRoster`、`ItemRoster` 是 Campaign 队伍状态；`Troops` 是事件扁平分配视图，由 `Update()` 重建，并被 `MapEventSide` 和 `PartyGroupTroopSupplier` 消费。Mission Agent 从这个分配视图生成，但最终 roster 的权威仍在 Campaign 队伍。公开的伤亡回调如果由 mod 自己调用，可能把伤亡、经验或士气应用两次；正常调用者是 Mission supplier 和地图事件模拟代码。

适合在活动事件中读取参战记录，或在规定的 Campaign 边界消费最终值。不适合构造它、在最终化后缓存它、把旧 `UniqueTroopDescriptor` 用到下一场战斗，或把公开 setter 和回调当作通用队伍修改 API。

## 依赖图

```text
StartBattleAction / EncounterModel ── MapEvent ── MapEventSide
                                                   └─ MapEventParty ── PartyBase
                                                                    ├─ MemberRoster / PrisonRoster / ItemRoster
                                                                    ├─ FlattenedTroopRoster
                                                                    └─ 伤亡 / 战利品 / 奖励账本
MapEventSide ── PartyGroupTroopSupplier ── Mission Agent
MapEvent ── BattleRewardModel / CombatXpModel / PartyTrainingModel
MapEvent ── CampaignEvents.MapEventStarted / MapEventEnded
MapEventSide.Clear ── 移除事件期间的 MapEventParty 记录
```

**创建与 side 绑定：** [MapEvent](../MapEvent) 创建 [MapEventSide](../MapEventSide)；side 用真实的 [PartyBase](../PartyBase) 创建本记录。  
**Roster 与 Mission 桥接：** [PartyGroupTroopSupplier](../PartyGroupTroopSupplier) 调用 side 的 Mission 准备与分配方法；`PartyGroupAgentOrigin` 将 Agent 的伤亡和命中回调沿 supplier 送回本记录。  
**结果规则：** [BattleRewardModel](../BattleRewardModel) 计算士气与战利品选择；[CombatXpModel](../CombatXpModel) 计算命中经验；提交经验时会使用 [PartyTrainingModel](../PartyTrainingModel)。  
**Action、事件与存档：** `StartBattleAction` 启动外层事件；Campaign 事件包住生命周期；`MapEventSide` 把这些记录放在可存档的事件图中，并在最终化时清空。

## 创建、绑定与 side 语义

绑定链是具体且单向的：

1. 支持的战斗开始路径创建或找到 `MapEvent`。在事件尚不存在时，`StartBattleAction` 可能先调用 `EncounterModel` 和具体 component 工厂。
2. `MapEvent.Initialize` 创建防守方 `MapEventSide` 与攻击方 `MapEventSide`，每侧都有一个领导 `PartyBase`。
3. `MapEventSide.AddPartyInternal(party)` 执行 `new MapEventParty(party)`，把它加入 `_battleParties`，再调用 `MapEvent.AddInvolvedPartyInternal`。
4. 地图事件和 side 继续计算力量、可见性、部队准备和事件位置。后续加入的队伍也通过同样的 side/遭遇流程完成绑定。
5. `Party` 没有公开 setter；`MapEventParty` 本身也没有公开 side 引用。需要 side 身份时，始终从所属事件和 `BattleSideEnum` 获取。

所以，队伍 roster 与地图事件 roster 有关系，但不能互换。队伍可能在事件结算期间离场、变为 inactive，或把俘虏改送到据点 prison roster。需要数据时，应在活动 `MapEvent` 上重新获取当前记录。

## 状态与 roster 成员

| 成员 | 含义与时机 |
|---|---|
| `Party`、`IsNpcParty` | 真实的 `PartyBase` 参战者，以及它是否不是 `PartyBase.MainParty`。`Party` 是 side 和奖励分配使用的身份键。 |
| `HealthyManCountAtStart` | internal 构造函数第一次 `Update()` 后记录的健康人数。它用于分配 Mission 或模拟部队容量，不是当前人数。 |
| `Troops` | 当前事件的 `FlattenedTroopRoster` 视图。其 `UniqueTroopDescriptor` 是 supplier 和伤亡回调使用的键，只在本事件当前分配阶段有效。 |
| `ParticipatingTroopCount`、`HasTroopLimit` | Mission/模拟准备阶段写入参与人数；只有参与人数非负且小于开始时健康人数时，`HasTroopLimit` 才为真。应在准备完成后读取。 |
| `WoundedInBattle`、`DiedInBattle`、`RoutedInBattle` | 事件伤亡 roster。对应 troop 回调会更新它们，Campaign 结算和战后逻辑会读取。 |
| `ContributionToBattle` | 初始值为 `1`，随后由命中经验和船只命中分数增加。它用于奖励和战利品分配，不是通用队伍力量值。 |
| `Ships` | 从 `Party.Ships` 读取的只读船只集合，只在海战且队伍和事件有效时有意义。 |
| `GainedRenown`、`GainedRenownExplained` | 事件计算胜者份额后的最终影响力结果及解释；Campaign 会通过 `GainRenownAction` 提交正值。 |
| `GainedInfluence`、`GainedInfluenceExplained` | 最终影响力结果及解释；Campaign 会通过战斗专用 influence Action 提交。 |
| `GainedMorale`、`GainedMoraleExplained` | 最终士气结果及解释；提交后，移动队伍会增加 recent-events morale。 |
| `PlunderedGold`、`GoldLost` | 等待结算的金币数。`MapEvent` 会通过 `GiveGoldAction` 或 party-trade gold 处理并提交，然后把两个值重置为零。不要只为显示数字而写入。 |

### 战利品目标 roster

三个战利品目标属性 `RosterToReceiveLootMembers`、`RosterToReceiveLootPrisoners` 和 `RosterToReceiveLootItems` 会按队伍身份切换目标：

- 对 `PartyBase.MainParty`，`RosterToReceiveLootMembers`、`RosterToReceiveLootPrisoners` 和 `RosterToReceiveLootItems` 分别返回 `PlayerEncounter.Current` 中对应的 roster。
- 对 NPC 队伍，成员进入 `Party.MemberRoster`，物品进入 `Party.ItemRoster`，俘虏进入 `Party.PrisonRoster`；但 militia 或 garrison 的俘虏会改送到其 home settlement party 的 prison roster。

这些属性说明 Campaign 结算会把战利品放到哪里，不是通用 inventory 服务；读取它们时必须处于对应的玩家遭遇或队伍活动阶段。

## 方法：按职责使用

### 读取事件账本

`ToString()` 返回 `Party.Name`。`GetTroop(UniqueTroopDescriptor)` 返回 descriptor 对应的 `CharacterObject`，`GetTroopState(UniqueTroopDescriptor)` 返回对应的 `RosterTroopState`。descriptor 应来自当前 `PartyGroupTroopSupplier` 或事件 side；不要把一个 descriptor 存档后用于下一场事件。

`Update()` 从 `Party.MemberRoster` 重建 `_roster`。已经出现在 `WoundedInBattle` 或 `DiedInBattle` 中的 Hero 会被排除；普通 troop 则按当前数量和受伤数量加入。除非 troop allocation 已锁定，否则 side 会在准备 Mission 或模拟时调用它。在分配完成后调用，可能破坏 ready troop、allocated descriptor 和 Mission Agent 之间的关系。

### 接收 Mission 与模拟回调

`OnTroopKilled`、`OnTroopWounded` 和 `OnTroopRouted` 同时更新扁平 roster 与实时队伍 roster，并填充对应伤亡 roster；Hero 与普通 troop 的处理有意不同。`OnTroopScoreHit` 查询 `Campaign.Current.Models.CombatXpModel`，为非 team-kill 的命中记录经验，为 Hero 分发 combat-hit 事件，并增加贡献。`OnRoundEnd` 通过 `BattleRewardModel` 计算移动队伍的士气变化。

海战回调也在同一个 Campaign 边界内工作：`OnShipSunk` 通过 `BattleRewardModel` 修改移动队伍士气，`OnShipDamaged` 处理船只伤害与士气，`OnShipScoreHit` 根据伤害和 crew capacity 增加贡献。

`SetRenownInfluenceAndMoraleOnBattleEnd` 保存 `MapEvent` 在奖励计算后传入的三个解释结果。它是结果传递方法，不是立即发放 renown、influence 或 morale 的入口。随后 internal 的提交方法会使用 `GainRenownAction`、战斗 influence Action、移动队伍士气、`GiveGoldAction`、`PartyTrainingModel` 和其他 Campaign 逻辑。

## 真实获取路径

从玩家当前 `MapEvent` 的 side 列表读取参战记录，既保留事件到 side 再到队伍的关系，也绕过 internal 构造函数：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.MapEvents;
using TaleWorlds.CampaignSystem.Party;

public static void PrintAttackerLedger()
{
    MapEvent mapEvent = MapEvent.PlayerMapEvent;
    if (mapEvent == null || mapEvent.IsFinalized)
    {
        return;
    }

    foreach (MapEventParty participant in mapEvent.PartiesOnSide(BattleSideEnum.Attacker))
    {
        PartyBase party = participant.Party;
        Debug.Print($"{party.Name}: start={participant.HealthyManCountAtStart}, wounded={participant.WoundedInBattle.TotalManCount}, killed={participant.DiedInBattle.TotalManCount}");
    }
}
```

若需要判断某个记录的 side，应从事件的 side 集合读取，而不是缓存 `MapEventParty`：

```csharp
MapEvent mapEvent = MobileParty.MainParty?.MapEvent;
if (mapEvent != null && !mapEvent.IsFinalized)
{
    foreach (MapEventParty participant in mapEvent.PartiesOnSide(BattleSideEnum.Defender))
    {
        if (participant.Party.Side == BattleSideEnum.Defender)
        {
            int allocatedAtStart = participant.HealthyManCountAtStart;
            Debug.Print($"Defender {participant.Party.Name}: {allocatedAtStart}");
        }
    }
}
```

第二个判断对正常事件来说是冗余的；它特意展示了 side 身份来自所属事件和已绑定的 `PartyBase`，而不是来自 `MapEventParty` 自身的属性。

## Mission 与 Campaign 结算边界

`SandBoxMissions` 提供了真实的 Mission 桥。它的战斗、藏身处和围城入口会构造类似下面的 supplier：

```csharp
IMissionTroopSupplier attackers = new PartyGroupTroopSupplier(
    MapEvent.PlayerMapEvent,
    BattleSideEnum.Attacker,
    null,
    null);
```

v1.4.5 源码还会用 `BattleSideEnum.Defender` 创建防守方 supplier，并传入真实的优先级 `FlattenedTroopRoster` 或接收 `UniqueTroopDescriptor` 与 `MapEventParty` 的分配谓词。supplier 解析事件 side，调用 `MakeReadyForMission`，分配 descriptor，再创建 `PartyGroupAgentOrigin`。Agent 死亡、受伤、溃逃和命中会沿 `PartyGroupTroopSupplier` 回到 `MapEventSide` 与本记录。

因此边界是：

- **Mission：** 场景、Agent、Team、分配和战斗表现。Mission 回调可以通过 `PartyGroupAgentOrigin.Party` 找到来源队伍，但不能把 Agent roster 当成持久化 Campaign roster。
- **Campaign：** `MapEventParty` 伤亡 roster、`Party.MemberRoster`、贡献、奖励份额、战利品目标、经验、士气、金币和最终队伍清理。
- **最终化：** `MapEvent` 计算奖励，调用 `SetRenownInfluenceAndMoraleOnBattleEnd`，通过 Action 与 Model 提交结果，分发 `MapEventEnded`，最后清空两侧列表。应在丢弃事件引用前读取并复制需要的值。

AI 模拟可以使用同一套 `MapEventSide` 和 `MapEventParty` 回调而不打开 Mission。存在 Mission 不代表 `MapEventParty` 拥有战斗；Mission 只是 Campaign 事件账本的一个消费者。

## Events、Action、Model 与存档

- **Action：** [StartBattleAction](../../campaign-ext/StartBattleAction) 启动外层 `MapEvent`；它不公开 `MapEventParty` 构造函数。队伍 roster 变化以及金币/奖励提交仍属于所属 Campaign 协议和 Action。
- **Events：** `CampaignEvents.MapEventStarted`、加队伍的 dispatcher 调用和 `CampaignEvents.MapEventEnded` 定义事件窗口。应在开始或活动事件回调中读取参战者，在结束边界消费最终伤亡和奖励数据。
- **Models：** `CombatXpModel.GetXpFromHit` 提供命中经验；`BattleRewardModel` 提供回合/船只士气与战利品计算；internal 经验提交会使用 `PartyTrainingModel`。本记录存储结果，但不取代这些 Model。
- **Actions：** 最终提交会使用 `GainRenownAction`、战斗 influence Action 和 `GiveGoldAction`；直接改变本记录的暂存值不能代替这些副作用。
- **存档：** `MapEventSide._battleParties` 可存档，`MapEventParty` 也为 `Party`、`_roster`、伤亡 roster、参与人数和金币字段标记了存档元数据。源码还包含旧版本 routed 和 explained reward 数据的兼容加载。不要序列化对本对象的自定义引用；保存稳定的队伍标识，Campaign 加载后重新获取当前记录。

## 风险与清理

- **descriptor 失效：** `GetTroop`、`GetTroopState` 和回调都会索引当前扁平 roster。来自别的事件、`Update()` 之前或 allocation 清理之后的 descriptor，可能失败或更新错误阶段。
- **手动调用伤亡回调：** 在 Behavior 中调用 `OnTroopKilled`、`OnTroopWounded`、`OnTroopRouted` 或 `OnTroopScoreHit`，会与 Mission/模拟结果重复，导致同一 troop 被重复移除、受伤、获得经验或计入奖励。
- **不安全的 `Update()`：** `PartyGroupTroopSupplier` 分配部队后重建扁平 roster，可能使 `_allocatedTroops`、`PartyGroupAgentOrigin` 与伤亡回调失去对应关系。
- **玩家战利品 roster：** 主队的战利品属性会直接访问 `PlayerEncounter.Current`，只能在玩家遭遇活动期间读取。NPC militia 与 garrison 的俘虏使用 home settlement prison roster，不一定是 `Party.PrisonRoster`。
- **直接写结果：** 设置 `PlunderedGold` 或 `GoldLost`，或把 explained reward 当作即时货币，可能让后续 `MapEvent` 提交重复发放或绕过副作用。除非由完整且兼容引擎流程的扩展负责，否则应只在奖励边界读取。
- **最终化：** `MapEventEnded` 之后 `MapEventSide.Clear` 会移除这些记录。不要把 `MapEventParty`、其 roster 或 `PartyGroupTroopSupplier` 缓存到后续 tick、存档或下一场战斗。
- **混淆 Mission：** AI 模拟中 Mission 可能为 null，但 `MapEventParty` 仍然活动；反过来 Mission Agent 也可能早于 Campaign 结果提交被移除。持久化结果应使用 Campaign 回调链。

## 版本说明

本文按 v1.4.5 反编译源码撰写。海战回调、奖励 Model、存档迁移字段和 Mission supplier 行为可能跨版本变化；面向其他版本发布前，应重新核对 `MapEventParty`、`MapEventSide`、`PartyGroupTroopSupplier` 和 `SandBoxMissions`。

## 导航

- ↑ 父级：[Campaign API](../)
- ↔ 同级：[MapEvent](../MapEvent) · [MapEventSide](../MapEventSide) · [PartyBase](../PartyBase)
- Roster 与 Mission 桥：[TroopRoster](../TroopRoster) · [PartyGroupTroopSupplier](../PartyGroupTroopSupplier) · [Mission](../../mission/Mission)
- 结果规则：[BattleRewardModel](../BattleRewardModel) · [CombatXpModel](../CombatXpModel) · [PartyTrainingModel](../PartyTrainingModel)
- 相关：[Campaign](../Campaign) · [CampaignEvents](../CampaignEvents) · [StartBattleAction](../../campaign-ext/StartBattleAction)
- English: [MapEventParty](../../../../en/api/campaign/MapEventParty)
