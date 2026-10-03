---
title: "CampaignSiegeStateHandler"
description: "攻城战 mission 里的状态记录器：把「玩家是攻方 / 是否撤退 / 是否被守方获胜」三个事实攒起来，在 mission 结束时决定要不要推进围城阶段。"
---

# CampaignSiegeStateHandler

**Namespace:** `SandBox.Missions.MissionLogics`
**Module:** `SandBox`
**Type:** `public class CampaignSiegeStateHandler : MissionLogic`
**Base:** `TaleWorlds.MountAndBlade.MissionLogic`
**File:** `Modules.SandBox/SandBox/SandBox.Missions.MissionLogics/CampaignSiegeStateHandler.cs`

## 概述

攻城战散场时要决定一件事：**围城推进到下一阶段了没有**。这个类就是做这个决定的。它是一个极小的 [MissionLogic](../../mission-ext/MissionLogic)：一个 `readonly MapEvent _mapEvent`（构造时从 `PlayerEncounter.Battle` 抓一份）、两个 `bool` 标志（`_isRetreat` 与 `_defenderVictory`）、三个只读属性（`IsSiege` / `IsSallyOut` / `Settlement`），以及四个 mission 钩子覆盖。它不生成任何单位、不改变任何战场状态、不画任何 UI——**它只在 mission 结束的那一帧写一次战役数据**。

三个性质完全是从 `_mapEvent` 转发出来的：`IsSiege => _mapEvent.IsSiegeAssault`、`IsSallyOut => _mapEvent.IsSallyOut`、`Settlement => _mapEvent.MapEventSettlement`。两个标志则是 mission 生命周期的产物：`OnRetreatMission` 把 `_isRetreat` 置真，`OnMissionResultReady` 把 `(int)missionResult.BattleState == 1` 存进 `_defenderVictory`。

## 心智模型

把它当成「**mission 结束时的单一判定器**」就对了，四个钩子各记一件事，最后在 `OnEndMission` 里合成一个判断：

```csharp
if (IsSiege && (int)_mapEvent.PlayerSide == 1 && !_isRetreat && !_defenderVictory)
{
    Settlement.SetNextSiegeState();
}
```

四个条件逐个翻译成可读的话：**这是一场攻城战**（不是 sally out，不是野战）→ **玩家是攻方**（`BattleSideEnum.Defender = 0` / `Attacker = 1`，所以 `== 1` 就是攻方）→ **玩家没有主动撤退** → **守方没有获胜**（`BattleState.DefenderVictory = 1`，所以 `_defenderVictory` 为真表示守方赢了）。四个全真才推进阶段。反过来说：**玩家是攻方 + 主动撤退**、或者**玩家是攻方但守方赢了**、或者**玩家是守方**——三种情况都不会推进。

由此推出三个必须记住的坑。第一，**构造函数会读 `PlayerEncounter.Battle`，而这个属性在 `Current == null` 时返回 null**。在非战斗上下文里 `new CampaignSiegeStateHandler()` 不报错（`_mapEvent` 就是 null），但之后访问 `IsSiege` / `IsSallyOut` / `Settlement` 任意一个都会 NRE，`OnEndMission` 也会在 `IsSiege` 上炸——**错误被推迟到 mission 结束才爆**。官方把它加在 `SandBoxMissions.OpenSiegeMissionWithDeployment`（:1448）、`OpenSiegeMissionNoDeployment`（:1583）、`OpenSiegeLordsHallFightMission`（:1694）三处构造的 behavior 列表里，都是在遭遇已经建立之后。第二，**它是 `MissionLogic` 而不是 `MissionBehavior`**，靠 `MissionBehavior.BehaviorType` 的重写被 `Mission.AddMissionBehavior` 分流进 `MissionLogics` 列表，所以它享受 `Mission.GetMissionLogic<T>()` 系列的查找。第三，**`OnSurrenderMission` 写的不是本地字段**——它直接设 `PlayerEncounter.PlayerSurrender = true`，一个跨 mission 的静态属性。这是「投降」这件事唯一的落点。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `_mapEvent` | `private readonly MapEvent _mapEvent` | 构造时从 `PlayerEncounter.Battle` 抓的**快照**。三个只读属性全部转发自它。**构造时为 null 不会立刻报错，但之后每次访问都会 NRE**——这是本类唯一的延迟失败点。 |
| `IsSiege` | `public bool IsSiege => _mapEvent.IsSiegeAssault` | 判断当前战局是不是攻城战（区别于 sally out）。`OnEndMission` 的第一个条件，也是从 mission 侧读战局类型的便宜方式。 |
| `IsSallyOut` | `public bool IsSallyOut => _mapEvent.IsSallyOut` | 判断是不是「出城反击」（sally out）。本类不用它做判定，它只是把战局类型暴露给需要区分两种围城玩法的 mission logic。 |
| `Settlement` | `public Settlement Settlement => _mapEvent.MapEventSettlement` | 被围的城镇。`OnEndMission` 里 `Settlement.SetNextSiegeState()` 的落点。**野战战局下 `_mapEvent.MapEventSettlement` 为 null**，此时读它得到 null。 |
| 构造函数 | `public CampaignSiegeStateHandler()` | 无参，只做一件事：`_mapEvent = PlayerEncounter.Battle`。**没有 null 检查、没有重试**。官方在三处 `SandBoxMissions.Open*Mission` 里把它塞进 `List<MissionBehavior>`。 |
| `OnRetreatMission` | `public override void OnRetreatMission()` | 玩家点撤退时把 `_isRetreat = true`。**撤退会阻断阶段推进**——这是「攻城战里撤退不等于推进」这条规则的唯一实现。 |
| `OnMissionResultReady` | `public override void OnMissionResultReady(MissionResult missionResult)` | 结算就绪时记下胜负：`_defenderVictory = (int)missionResult.BattleState == 1`。`BattleState` 枚举是 `None=0 / DefenderVictory=1 / AttackerVictory=2 / DefenderPullBack=3`，所以**只有守方获胜为真**；守方主动撤（`DefenderPullBack`）**不算守方获胜，会推进阶段**。 |
| `OnSurrenderMission` | `public override void OnSurrenderMission()` | 玩家投降时设 `PlayerEncounter.PlayerSurrender = true`。**注意它不改任何本地字段**，所以投降之后 `_isRetreat` 与 `_defenderVictory` 仍是默认值，阶段推进与否完全取决于 `BattleState` 是什么。 |
| `OnEndMission` | `protected override void OnEndMission()` | 唯一的写操作点：四条件全真则 `Settlement.SetNextSiegeState()`。这是 `protected virtual`，官方没有额外调用点，只能被 mission 生命周期触发。 |

## 真实示例

把官方 handler 加进一场攻城战 mission（这是 `SandBoxMissions` 自己的做法）。**时机很关键：必须等 `PlayerEncounter.Battle` 已建立**：

```csharp
public class MySiegeMissionHook : MissionLogic
{
    public override void OnAfterMissionCreated()
    {
        base.OnAfterMissionCreated();

        // PlayerEncounter.Battle 此时应已存在；早一步构造会让 _mapEvent 存成 null，
        // 错误要等到 mission 结束访问 IsSiege 时才爆出来
        this.Mission.AddMissionBehavior(new CampaignSiegeStateHandler());
    }
}
```

读战局类型与被围城镇（三个属性全部转发自构造时抓的那份 `MapEvent`）：

```csharp
CampaignSiegeStateHandler siegeState = new CampaignSiegeStateHandler();

if (siegeState.IsSiege)
{
    Debug.Print("besieging " + siegeState.Settlement.StringId, 0);
}

Debug.Print("sally out = " + siegeState.IsSallyOut, 0);
```

把「推进围城阶段」的四条件原样写出来，方便在自己的战局里做一致判定：

```csharp
MapEvent mapEvent = PlayerEncounter.Battle;

bool isSiege = mapEvent.IsSiegeAssault;
bool isSallyOut = mapEvent.IsSallyOut;
bool playerWasAttacker = (int)mapEvent.PlayerSide == (int)BattleSideEnum.Attacker;

// 这三项就是 OnEndMission 里除两个本地 bool 之外的全部输入
Debug.Print("siege=" + isSiege + " sallyOut=" + isSallyOut, 0);
Debug.Print("player side = " + mapEvent.PlayerSide + " (attacker=" + playerWasAttacker + ")", 0);
```

在结算回调里抢先一步看最终胜负（`MissionResult.BattleState` 就是本类 `OnMissionResultReady` 读的那个值）：

```csharp
public class MySiegeOutcomeWatcher : MissionLogic
{
    private readonly CampaignSiegeStateHandler _siegeState = new CampaignSiegeStateHandler();

    public override void OnMissionResultReady(MissionResult missionResult)
    {
        base.OnMissionResultReady(missionResult);

        bool defenderVictory = (int)missionResult.BattleState == (int)BattleState.DefenderVictory;

        Debug.Print("defender won = " + defenderVictory, 0);
        Debug.Print("in a siege at " + _siegeState.Settlement, 0);
    }
}
```

## 风险与边界

- **构造函数不校验 `PlayerEncounter.Battle`。** `PlayerEncounter.Battle` 在 `Current == null` 时返回 null，于是 `_mapEvent` 为 null。**不立刻报错**，直到 `IsSiege` / `IsSallyOut` / `Settlement` 或 `OnEndMission` 被触发才 NRE。
- **判断用的全是魔数。** `(int)_mapEvent.PlayerSide == 1` 与 `(int)missionResult.BattleState == 1` 都是硬编码整型，没有写成 `BattleSideEnum.Attacker` / `BattleState.DefenderVictory`。读源码时务必对照枚举：`BattleSideEnum { None = -1, Defender = 0, Attacker = 1, NumSides = 2 }`、`BattleState { None, DefenderVictory, AttackerVictory, DefenderPullBack }`。
- **`DefenderPullBack` 会推进阶段。** 守方主动撤（值 3）不等于 `_defenderVictory`，四条件里的 `!_defenderVictory` 仍然成立，阶段照推。
- **投降不会置 `_isRetreat`。** `OnSurrenderMission` 只写静态属性 `PlayerEncounter.PlayerSurrender`，两个本地 bool 保持 false。玩家投降后的阶段推进完全由 `MissionResult.BattleState` 决定。
- **`OnEndMission` 是 `protected`。** 外部无法手动调用；也**不要试图在 mission 中途调用它**——那是唯一写 `SetNextSiegeState` 的地方，重复调用会多推一次阶段。
- **`Settlement` 在野战战局下是 null。** 依赖它的代码要么判空，要么只保证在围城战局里使用。
- **只被加进三种 mission。** `OpenSiegeMissionWithDeployment` / `OpenSiegeMissionNoDeployment` / `OpenSiegeLordsHallFightMission`；野战与其它 mission 类型里没有它，此时类不存在、也不需要它。
- **`MapEvent` 是快照语义。** `_mapEvent` 在构造时抓一次，之后不更新。战局在 mission 期间发生的变化不会反映到这三个属性上。
- **不参与存档。** 两个 bool 与 `_mapEvent` 引用都不进存档——mission 结束即销毁。

## 依赖关系

- 战局快照：[MapEvent](MapEvent) 的 `IsSiegeAssault` / `IsSallyOut` / `MapEventSettlement` / `PlayerSide` 是本类三个属性的全部数据源，细节见同桶的 [MapEventSide](MapEventSide)
- 遭遇上下文：[PlayerEncounter](../PlayerEncounter) 的静态 `Battle` 提供构造所需的 `MapEvent`，静态 `PlayerSurrender` 是投降的唯一落点
- 生命周期宿主：[MissionLogic](../../mission-ext/MissionLogic) 提供 `OnRetreatMission` / `OnSurrenderMission` / `OnMissionResultReady` 三个 `public virtual` 与 `OnEndMission` 这个 `protected virtual`，本类只覆盖、不新增
- 枚举判据：`TaleWorlds.Core.BattleSideEnum` 与 `TaleWorlds.Core.BattleState` 两个枚举的整数值是四个魔数条件的唯一解释
- 结算数据：[MissionResult](../../core-extra/MissionResult) 的 `BattleState` 属性提供胜负
- 唯一写操作：[Settlement](../../campaign/Settlement) 的 `SetNextSiegeState()` 是本类改变战役状态的全部手段，围城上下文见 [SiegeEvent](../SiegeEvent)
- 注册方：`SandBoxMissions.OpenSiegeMissionWithDeployment:1448` / `OpenSiegeMissionNoDeployment:1583` / `OpenSiegeLordsHallFightMission:1694` 三处把它加进 `List<MissionBehavior>`
- 相邻动作：[BreakInOutBesiegedSettlementAction](BreakInOutBesiegedSettlementAction) 处理围城战里另一条出路（突围 / 突入），两者共同构成围城战的收尾
- 桶首页：[campaign-ext API 分区](../)
