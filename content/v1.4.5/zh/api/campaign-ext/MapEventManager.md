---
title: "MapEventManager"
description: "战役里所有进行中地图事件（MapEvent）的登记簿与生命周期协调器：负责创建、维护、推进与终结地图遭遇战，并提供按阵营/攻击方检索的查询入口。"
---
# MapEventManager

**Namespace:** `TaleWorlds.CampaignSystem.MapEvents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class MapEventManager`
**Base:** 无（直接挂属于 `Campaign` 实例）
**源文件路径：** `TaleWorlds.CampaignSystem/MapEvents/MapEventManager.cs`

## 一句话职责

登记并推进战役地图上每一次正在发生的遭遇战（`MapEvent`），让上层行为（Behavior）与玩家遭遇系统只通过它来查询、创建和终结地图事件，而不必自己维护一个全局列表。

## 心智模型

把 `MapEventManager` 想成战役的一本「战场花名册」：它不是战斗本身，而是记录每一场进行中战斗的活页夹，由 `Campaign` 在开局时 `new` 出来并独占持有，挂在 `Campaign.Current.MapEventManager` 上，整局战役只有一个实例。真正的战斗逻辑在 `MapEvent` 内部，而这个管理器只做三件事——把新战斗登记进花名册（`OnMapEventCreated`）、每帧让名册里尚未结束的战斗自行推进（`Tick`）、以及提供按攻击方索引或交战阵营来翻查名册的查询入口（`GetMapEvent` / `GetMapEventsBetweenFactions`）。它处在「Campaign 战役层 → 地图事件编排层」之间：上层 `Encounter` / 各种 `CampaignBehavior` 发现或发起遭遇时，通过该管理器落地为 `MapEvent`；管理器本身不知道谁会赢、也不结算战利品，结算与加载/保存由 `MapEvent` 和 `Campaign` 协作完成。绝大多数修改只能在战役已加载、且管理器随 `Campaign` 存活的期间进行，切勿在战役未初始化或已销毁时触碰它。

### 生命周期（由 Campaign 驱动）

1. **出生**：`Campaign` 构造时执行 `MapEventManager = new MapEventManager()`，内部 `_mapEvents` 初始化为空 `MBList`。整局战役只有一个实例，外部无法自行 `new` 一个可用的替代品。
2. **登记**：上层行为或 `Encounter` 发现遭遇 → 通过某个 `Start*MapEvent` 工厂或从 `MapEvent` 侧调用 `OnMapEventCreated` 把事件写进名册。
3. **推进**：每帧 `Campaign.Tick` 调用 `manager.Tick()`，倒序遍历名册，移除已 `IsFinalized` 的事件，对其余（非突袭且非玩家自身）事件调 `Update()`。`MobileParty.MainParty.MapEvent` 与突袭事件走单独的更新路径，不在此处被推进。
4. **读档**：`Campaign` 加载完成后调 `manager.OnAfterLoad()`，逐个事件 `MapEvent.OnAfterLoad()` 重建运行期引用；`_mapEvents` 本身以 `[SaveableField(1)]` 序列化，因此名册内容会随存档一起持久化。
5. **终结**：事件结算结束后被标记 `IsFinalized`，在下一次 `Tick` 从名册移除；玩家事件则由 `FinalizePlayerMapEvent` 显式收尾并结束 `PlayerEncounter`。

### 典型驱动链路

发现遭遇（如 `MobileParty` 踏上敌方据点/队伍相遇）→ `PlayerEncounter` / 对应 `CampaignBehavior` 决定类型 → 通过 `Start*MapEvent` 或 `MapEvent` 构造 + `OnMapEventCreated` 落地 → 进入名册接受 `Tick` 推进 → 战斗在 `Mission` 中结算 → 回填并 `Finalize` → 移出名册。模组若只关心「现在有哪些战斗、谁在打」，读 `MapEvents` / 两个查询方法即可，无需介入中间链路。

> 提示：管理器只认「进行中」的事件。一份事件一旦 `IsFinalized` 并在 `Tick` 中被移除，它就不再出现在 `MapEvents` 与任何查询结果里；若你需要「刚刚结束的那场战斗」的数据，应在事件终结前的回调或 `MapEvent` 内部读取，而不是事后回查管理器。

## 何时用 / 何时不要用

**用它的场景：**
- 只读观察：判断玩家主角是否正在某场地图事件中、某支队伍是否发起了战斗、两阵营间是否有正在进行的战斗。
- 通过 `GetMapEvent` / `GetMapEventsBetweenFactions` 做态势查询，而不是自己遍历所有 `MobileParty` 去猜测。
- 在玩家遭遇结束时，用 `FinalizePlayerMapEvent` 正确地收尾并触发 `PlayerEncounter.Finish()`。

**不要用的场景：**
- 不要手写遭遇结算（胜负、战利品、俘虏、关系变化）——那是 `MapEvent` 与各 `CampaignBehavior` 的职责，直接改字段会跳过全部后续钩子。
- 不要手动往 `MapEvents` 列表塞入一个自己 `new` 的 `MapEvent` 就指望它能被推进——必须经 `OnMapEventCreated` 或被 `Start*MapEvent` 工厂方法封装的初始化路径登记。
- 不要缓存 `MapEvent` 引用长期持有：事件在 `Tick` 中被标记为 `IsFinalized` 后会被从名册移除，悬挂引用会变成空壳。

## 依赖

- ↑ 持有者：[`Campaign`](../../campaign/Campaign) —— 唯一实例 `Campaign.Current.MapEventManager`，由战役构造时创建，`Tick` / `OnAfterLoad` 由 `Campaign` 驱动。
- ↔ 核心对象：[`MapEvent`](../MapEvent) —— 名册中的每一项，管理器只是它的登记簿与查询入口。
- → 参战方：[`MobileParty`](../../campaign/MobileParty) 与 [`PartyBase`](../../campaign/PartyBase) —— `Start*MapEvent` 的攻击/防守方，`GetMapEvent` 用攻击方 `Index` 检索。
- → 收尾协作：[`PlayerEncounter`](../PlayerEncounter) —— `FinalizePlayerMapEvent` 内部调用 `PlayerEncounter.Finish()` 结束玩家遭遇。
- → 阵营查询：[`Hero`](../../campaign/Hero) 的 `MapFaction` 用于 `GetMapEventsBetweenFactions` 的两阵营过滤。

## 风险

- **结算时序**：`Tick()` 中会对名册里除「突袭/玩家自身 `MobileParty.MainParty.MapEvent`」之外的每个事件调用 `Update()`；在自己的 `CampaignBehavior.Tick` 里同时增删 `MapEvent` 或强改其参与方，会与该迭代竞争，破坏推进状态。
- **事件进行中改动队伍**：`MapEvent` 持有 `PartyBase` 引用。若在事件未终结时解散、移除或销毁参战队伍，名册里的事件会留下悬挂引用，下次 `Update`/`OnAfterLoad` 可能空引用崩溃。
- **存档影响**：`_mapEvents` 以 `[SaveableField(1)]` 的 `MBList<MapEvent>` 序列化进存档；加载时 `OnAfterLoad()` 会对每个事件重新 `OnAfterLoad()`。直接操作内部列表结构（绕过 `OnMapEventCreated` / `Tick` 的移除逻辑）会让内存状态与存档快照脱节，读档后事件状态错乱。
- **`FinalizePlayerMapEvent` 会抛异常**：当 `MobileParty.MainParty.MapEvent == null` 时调用会抛出 `MBNotFoundException("Trying to finalize a non-existing map event.")`。仅在确认玩家正处于地图事件内时才调用。
- **`GetMapEvent` 的语义**：它按「攻击方 `LeaderParty.Index`」匹配，是单支队伍索引查找，不是按事件 ID；若攻击方被替换或事件已终结，返回 `null`，调用方必须判空。
- **工厂方法会真正落地战斗**：四个 `Start*MapEvent` 立即 `new MapEvent()` 并 `Initialize` 后登记，返回实时引用。误用（错误的 `BattleTypes`、尚未就绪的 `PartyBase`、重复发起）会创建无法被正常推进或重复的地图事件。

## 主要成员

### 名册与查询

- `MBReadOnlyList<MapEvent> MapEvents { get; }`
  - **用途**：当前所有尚未终结的地图事件只读快照。
  - **副作用**：无（只读视图）；但它包裹的内部 `MBList` 会在 `Tick` 中被就地增删。
  - **何时调用**：观察全局战场态势时遍历；不要对其做结构性修改。

- `MapEvent GetMapEvent(int attackerPartyIndex)`
  - **用途**：按攻击方队伍的 `Index` 找出其发起的地图事件。
  - **副作用**：无副作用，纯查询；查不到返回 `null`。
  - **何时调用**：已知某支敌方/友方队伍索引、想确认它是否正卷入一场由它发起的战斗时。

- `List<MapEvent> GetMapEventsBetweenFactions(IFaction faction1, IFaction faction2)`
  - **用途**：枚举攻击方与防守方分别归属于这两个阵营的所有进行中事件（双向，f1 攻 f2 守或 f2 攻 f1 守都命中）。
  - **副作用**：无；每次调用新建 `List<MapEvent>` 返回。
  - **何时调用**：想统计两个阵营之间当前爆发了多少场战斗（如战争态势面板、AI 决策）时。

### 生命周期与推进

- `void OnMapEventCreated(MapEvent mapEvent)`
  - **用途**：把一个已初始化的 `MapEvent` 登记进名册，使其进入后续 `Tick` 推进。
  - **副作用**：向内部 `_mapEvents` 追加一项；该事件从此会被每帧 `Update()`。
  - **何时调用**：由 `Start*MapEvent` 及各上层行为在合法地创建出新地图事件后调用；模组通常不应直接调用，应走工厂或 `Encounter` 路径。

- `void Tick()`（`internal`）
  - **用途**：每帧推进名册。倒序遍历，移除 `IsFinalized` 的事件，对其它（非突袭且非玩家自身）事件调用 `Update()`。
  - **副作用**：可能改变名册长度、推进各事件内部状态。
  - **何时调用**：由 `Campaign.Tick` 驱动，模组不应手动调用。

- `void OnAfterLoad()`（`internal`）
  - **用途**：读档后对每个已恢复的事件调用 `MapEvent.OnAfterLoad()` 重建运行期状态。
  - **副作用**：重初始化内存引用。
  - **何时调用**：由 `Campaign` 在加载流程中调用。

### 玩家遭遇收尾

- `void FinalizePlayerMapEvent(MapEvent mapEvent = null)`
  - **用途**：终结玩家主角当前的地图事件，并调用 `PlayerEncounter.Finish()` 收尾玩家遭遇。
  - **副作用**：对 `PartyBase.MainParty.MapEvent` 调 `FinalizeEvent()`，再结束 `PlayerEncounter`。
  - **何时调用**：玩家遭遇应当结束时（如战斗结束、玩家选择撤退）。参数可省略，方法内部始终取 `MobileParty.MainParty.MapEvent`；玩家不在事件中会抛 `MBNotFoundException`。

### 工厂：创建特定类型的地图事件

以下四个方法签名一致，均接收 `PartyBase attackerParty`、`PartyBase defenderParty`，区别仅在 `MapEvent.BattleTypes`：

- `MapEvent StartSiegeMapEvent(attackerParty, defenderParty)` —— `BattleTypes.Siege`（攻城）。
- `MapEvent StartSallyOutMapEvent(attackerParty, defenderParty)` —— `BattleTypes.SallyOut`（守军出城突袭）。
- `MapEvent StartSiegeOutsideMapEvent(attackerParty, defenderParty)` —— `BattleTypes.SiegeOutside`（城外攻城接战）。
- `MapEvent StartBlockadeBattleMapEvent(attackerParty, defenderParty)` —— `BattleTypes.BlockadeBattle`（封锁战）。

每个方法都：`new MapEvent()` → `Initialize(attacker, defender, null, 对应类型)` → `OnMapEventCreated` 登记 → 返回该事件。
  - **用途**：为对应战斗类型落地一个已初始化的地图事件。
  - **副作用**：立即在名册中新增一项并进入 `Tick` 推进。
  - **何时调用**：仅在需要程序化发起这类战斗时（如自定义据点战脚本），且攻击/防守 `PartyBase` 已就绪；正常游戏流程由原生行为通过 `Encounter` 调用，模组手搓需谨慎处理后续结算钩子。
  - **注意**：`Initialize` 的第三个参数（额外上下文）在这里恒为 `null`，发起时无法注入自定义上下文；若你的流程依赖上下文数据，应在拿到返回的 `MapEvent` 后立刻设置，再让其进入 `Tick`。

## 最小真实示例

下面演示在战役运行期通过 `Campaign.Current.MapEventManager` 做只读观察与玩家遭遇收尾，全部使用真实 API，无任何占位符：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.MapEvents;
using TaleWorlds.CampaignSystem.Party;

// 战役加载后，管理器唯一实例挂在 Campaign.Current 上
MapEventManager manager = Campaign.Current.MapEventManager;

// 1) 观察玩家主角当前卷入的地图事件
MapEvent playerEvent = MobileParty.MainParty.MapEvent;
if (playerEvent != null)
{
    // 直接读交战双方阵营，而不是自己重新解析 parties
    IFaction attackerFaction = playerEvent.AttackerSide.LeaderParty.MapFaction;
    IFaction defenderFaction = playerEvent.DefenderSide.LeaderParty.MapFaction;

    // 查询这两个阵营之间所有正在进行的地图事件
    List<MapEvent> openBetween = manager.GetMapEventsBetweenFactions(attackerFaction, defenderFaction);
    int battleCount = openBetween.Count;

    // 2) 按敌方队伍索引确认它由谁发起
    MapEvent eventByAttacker = manager.GetMapEvent(enemyParty.Index);
    if (eventByAttacker != null)
    {
        // 注意：返回的是实时引用，事件可能在下个 Tick 被移除，不要长期缓存
        int involved = eventByAttacker.InvolvedParties.Count;
    }
}

// 3) 玩家遭遇结束时正确收尾（玩家必须在事件中，否则抛 MBNotFoundException）
if (MobileParty.MainParty.MapEvent != null)
{
    manager.FinalizePlayerMapEvent();
}
```

若要在自定义流程中程序化发起一场攻城（需自行负责后续结算钩子），可这样拿到事件引用：

```csharp
using TaleWorlds.CampaignSystem.Party;

PartyBase attacker = besiegerParty.Party;
PartyBase defender = settlement.Party;
MapEvent siege = Campaign.Current.MapEventManager.StartSiegeMapEvent(attacker, defender);
// siege 已进入管理器名册，会在 Tick 中被推进；后续需按原生战斗流程接管结算
```

## 导航

- ↑ 父级：[campaign-ext 模块索引](../)
- ↔ 同级：[MapEvent](../MapEvent)（名册中的单场战斗）
- 相关类：[Campaign](../../campaign/Campaign) · [MobileParty](../../campaign/MobileParty) · [PartyBase](../../campaign/PartyBase) · [PlayerEncounter](../PlayerEncounter)
- 规范：[文档契约](../../../architecture/doc-contract)

> **版本注记**：本页以 v1.3.15 语义为准，已对照 v1.4.5 源码复核——`MapEventManager` 的公共成员与 `Campaign.Current.MapEventManager` 持有方式在两个版本中一致，无破坏性差异。
