---
title: "MapEvent"
description: "战役地图上一切交战（野战、攻城、劫掠、突围、封锁）的结算中枢：持有双方阵营、驱动模拟回合、分配战利品与俘虏并收尾。"
---
# MapEvent

**命名空间：** `TaleWorlds.CampaignSystem.MapEvents`
**模块：** `TaleWorlds.CampaignSystem`
**类型：** `public sealed class MapEvent : MBObjectBase`
**基类：** `MBObjectBase`
**源文件：** `bannerlord-1.4.7/TaleWorlds.CampaignSystem/MapEvents/MapEvent.cs`（声明见第 24 行）

## 概述

`MapEvent` 是战役层所有"地图交战"的结算中枢：野战、攻城、劫掠、突围、封锁、海战，只要两支及以上队伍在地图上开打，就会创建一个实例来持有双方阵营（`MapEventSide`）、按 `CombatSimulationModel` 的节奏驱动战斗模拟、结算战利品/俘虏/声望，并在收尾时把结果写回各 `PartyBase`。它位于 `TaleWorlds.CampaignSystem` 命名空间，向上被 `MobileParty`（`MobileParty.MapEvent`）与 `Settlement`（攻城/劫掠）引用，向下把具体玩法规则委托给 `MapEventComponent`；它自己不负责移动、寻路、任务或外交，只负责"这一仗怎么打、怎么算、怎么收场"。

## 心智模型

把 `MapEvent` 想成"一场战斗的裁判席"：它不亲自移动任何部队，只记录三件事——谁和谁打（两个 `MapEventSide`，内部数组索引 0=防守方、1=进攻方）、现在打到哪一步（`MapEventState`：Wait → 交战 → WaitingRemoval）、这一仗是哪种类型（`BattleTypes`）。状态由战役主循环通过内部 `Update` 推进：每 tick 先查逃跑与外交变化，再按模拟节奏跑一个回合，回合内按伤亡差记入 `WonRounds`，全灭或士气归零即定胜负。玩家在场时结果先算后确认（先 `CalculateMapEventResults`，玩家确认后再 `CalculateAndCommitMapEventResults`），AI 对战直接结算。实例由遭遇/攻城系统在开打时创建，`FinalizeEvent` 收尾：发经验、声望、影响力、金币、战利品、俘虏，处理攻城后续，最后把 `State` 置为 `WaitingRemoval` 等移除。`MapEventSide` 是它的阵营账本，每个 `MapEventParty` 记录一个 `PartyBase` 的参战状态、贡献度与伤亡；`StrengthOfSide` 数组缓存两侧战力，供结算分成用。

## 怎么用

**拿到实例：**
- 玩家当前战斗：`MapEvent.PlayerMapEvent`（静态属性，即 `MobileParty.MainParty.MapEvent` 的快捷方式；主队伍不在战斗中返回 null）— MapEvent.cs:161
- 判断某个实例是不是玩家正在打的仗：`IsPlayerMapEvent` — MapEvent.cs:726
- 玩家所在阵营：`PlayerSide`（即 `PartyBase.MainParty.Side`）— MapEvent.cs:176
- 遍历所有参战队伍：`InvolvedParties`（两侧扁平序列）— MapEvent.cs:251

**真实坑：**
1. `Winner` 在未分胜负时返回 null、`WinningSide` 返回 `BattleSideEnum.None`——别把 `Winner` 当"领先方"用，先判 `HasWinner` — MapEvent.cs:780、MapEvent.cs:762
2. `EndedByRetreat` 要求 `PursuitRoundNumber == 0`：追击轮还没跑完时它仍是 false，追击结束那一轮才为 true — MapEvent.cs:283
3. `WasEverInLootingPhase` 的 setter 会让两侧的模拟缓存同时失效（`InvalidateSimulationSetup`），手动改它等于重算整场模拟 — MapEvent.cs:528
4. `IsSiegeAmbush` 不看 `EventType`，而是看 `Component` 是不是 `SiegeAmbushEventComponent` — MapEvent.cs:459
5. `GetPlayerBattleContributionRate()` 的分母是"玩家所在侧"的总贡献，不是全场总贡献 — MapEvent.cs:1746
6. 构造函数是 internal——mod 无法 `new` 一个 `MapEvent`，只能从 `MobileParty.MapEvent` 或 `MapEvent.PlayerMapEvent` 拿现成实例

## 关键成员

| 成员 | 用途 |
| --- | --- |
| `TroopUpgradeTracker` | 本仗的兵种升级追踪器，随参战队伍增删维护，战后结算升级用 — MapEvent.cs:157 |
| `PlayerMapEvent`（static） | 玩家主队伍当前参与的 `MapEvent`；不在战斗中为 null — MapEvent.cs:161 |
| `PlayerSide` | 玩家主队伍在本仗中的阵营（攻/守）— MapEvent.cs:176 |
| `Component` | 本仗的玩法组件（野战/攻城/劫掠等），承载具体规则；为 null 时 `SimulationContext` 按攻城处理 — MapEvent.cs:193 |
| `State` | 战斗生命周期状态；`IsFinalized` 就是判它是否为 `WaitingRemoval` — MapEvent.cs:198 |
| `AttackerSide` / `DefenderSide` | 进攻/防守阵营（`MapEventSide`），内部数组索引 1/0 — MapEvent.cs:219、MapEvent.cs:229 |
| `GetMapEventSide(side)` | 按 `BattleSideEnum` 取对应 `MapEventSide` — MapEvent.cs:238 |
| `PartiesOnSide(side)` | 该侧全部 `MapEventParty`（只读列表）— MapEvent.cs:244 |
| `InvolvedParties` | 两侧所有 `PartyBase` 的扁平序列 — MapEvent.cs:251 |
| `MapEventSettlement` | 本仗关联的聚落（攻城/劫掠/封锁），野战为 null — MapEvent.cs:273 |
| `RetreatingSide` | 正在撤退的一方；`None` 表示无人撤退 — MapEvent.cs:279 |
| `EndedByRetreat` | 是否以撤退结束（撤退方已定且追击轮归零）— MapEvent.cs:283 |
| `PursuitRoundNumber` | 剩余追击轮数 — MapEvent.cs:295 |
| `UpdateCount` | 已进行的回合数（= `WonRounds.Count`）— MapEvent.cs:299 |
| `SimulationContext` | 战力计算语境（地形/攻城/海战）；优先取 `Component`，其次按类型与位置推 — MapEvent.cs:309 |
| `Position` | 战斗发生地坐标；海战时在海上 — MapEvent.cs:329 |
| `EventType` | 战斗类型（`BattleTypes` 枚举原值）— MapEvent.cs:333 |
| `EventTerrainType` | 由位置地形缓存而来 — MapEvent.cs:343 |
| `IsInvulnerable` | 无敌标记（特殊战斗用）— MapEvent.cs:355 |
| `IsFieldBattle` / `IsRaid` / `IsForcingVolunteers` / `IsForcingSupplies` / `IsSiegeAssault` / `IsHideoutBattle` / `IsSallyOut` / `IsSiegeOutside` / `IsBlockade` / `IsBlockadeSallyOut` | 各战斗类型的布尔快捷判断，全部由 `EventType` 推出 — MapEvent.cs:359、MapEvent.cs:369、MapEvent.cs:379、MapEvent.cs:389、MapEvent.cs:399、MapEvent.cs:409、MapEvent.cs:419、MapEvent.cs:429、MapEvent.cs:439、MapEvent.cs:449 |
| `IsSiegeAmbush` | 是否为伏击攻城：看 `Component` 类型而非 `EventType` — MapEvent.cs:459 |
| `IsFinalized` | 是否已收尾（`State == WaitingRemoval`）— MapEvent.cs:475 |
| `BattleStartTime` | 开战时间 — MapEvent.cs:485 |
| `HasWinner` | 是否已分胜负 — MapEvent.cs:495 |
| `IsPlayerSimulation` | 玩家是否以"模拟"方式参战（不实际进场）— MapEvent.cs:507 |
| `WonRounds` | 每回合胜者列表，即回合历史 — MapEvent.cs:513 |
| `IsNavalMapEvent` | 是否海战（位置不在陆地）— MapEvent.cs:517 |
| `WasEverInLootingPhase` | 是否经历过掠夺阶段；setter 会使两侧模拟缓存失效 — MapEvent.cs:528 |
| `IsVisible` | 战斗是否对玩家可见；setter 同步地图可视化，并随参战队伍可见性联动 — MapEvent.cs:655 |
| `IsPlayerMapEvent` | 本实例是否就是玩家正在打的仗 — MapEvent.cs:726 |
| `BattleState` | 战斗结果状态；setter 在分出胜负时触发 `OnBattleWon` — MapEvent.cs:737 |
| `WinningSide` | 胜方阵营；未分胜负为 `None` — MapEvent.cs:762 |
| `Winner` | 胜方 `MapEventSide`；未分胜负为 null — MapEvent.cs:780 |
| `DefeatedSide` | 败方阵营；未分胜负为 `None` — MapEvent.cs:870 |
| `ToString()` | 返回 "Battle: 攻方领袖 x 守方领袖" — MapEvent.cs:901 |
| `BeginWait()` | 把状态切回 `Wait`（暂停等待玩家操作）— MapEvent.cs:1135 |
| `FinishBattleAndKeepSiegeEvent()` | 结束本仗但保留攻城事件（攻城阶段转换用）— MapEvent.cs:1210 |
| `SetOverrideWinner(winner)` | 直接指定胜方（任务/剧情改结果用）— MapEvent.cs:1296 |
| `SetDefenderPulledBack()` | 标记守方被拉回（撤回城内）— MapEvent.cs:1302 |
| `SimulateBattleSetup(priorTroops)` | 用（可选的）先前兵力快照准备模拟，并重置 `BattleState` — MapEvent.cs:1308 |
| `SimulateBattleRound(defenderTicks, attackerTicks)` | 跑一个模拟回合：按 tick 比例随机选边攻击、判胜负、记回合胜者 — MapEvent.cs:1345 |
| `ResetBattleState()` | 把 `BattleState` 重置为 `None`（重新模拟前用）— MapEvent.cs:1528 |
| `IsPlayerSergeant()` | 玩家是否以"非领袖身份"随军参战 — MapEvent.cs:1574 |
| `EndByRunAway()` | 按撤退方推导最终胜负 — MapEvent.cs:1590 |
| `RecalculateStrengthOfSides()` | 重算两侧战力并写入 `StrengthOfSide` — MapEvent.cs:1602 |
| `GetNumberOfInvolvedMen()` | 双方总参战人数 — MapEvent.cs:1637 |
| `GetNumberOfInvolvedMen(side)` | 指定侧参战人数 — MapEvent.cs:1643 |
| `GetOtherSide(side)` | 取对面阵营 — MapEvent.cs:1649 |
| `HasTroopsOnBothSides()` | 双方是否都还有健康士兵 — MapEvent.cs:1659 |
| `GetLeaderParty(side)` | 该侧领袖队伍 — MapEvent.cs:1667 |
| `CanPartyJoinBattle(party, side)` | 该队伍能否加入该侧（需与目标侧无战争、与对面交战）— MapEvent.cs:1711 |
| `GetStrengthsRelativeToParty(partySide, out ...)` | 以某方为基准的双方战力（各含 0.1 底数）— MapEvent.cs:1717 |
| `GetPlayerBattleContributionRate()` | 玩家贡献占本侧总贡献的比例 — MapEvent.cs:1746 |
| `FinalizeEvent()` | 公开收尾入口：结算结果、处理攻城后续、置 `WaitingRemoval` — MapEvent.cs:2367 |
| `RecalculateRenownAndInfluenceValuesOnPartyInvolved(party)` | 队伍参战后重算其战力与两侧声望/影响力份额 — MapEvent.cs:2536 |
| `DoSurrender(side)` | 指定阵营投降并直接定胜负 — MapEvent.cs:2547 |
| `SetPositionAfterMapChange(newPosition)` | 地图变化后迁移战斗位置与参战队伍 — MapEvent.cs:2568 |
| `CheckPositionsForMapChangeAndUpdateIfNeeded()` | 位置不可达时吸附到最近可达点 — MapEvent.cs:2611 |
| `OverrideMapEventSettlementForRaidToFieldBattleSwitch(settlement)` | 劫掠转野战时改关联聚落 — MapEvent.cs:2640 |
| `DiplomaticallyFinished`（field） | 是否因外交变化（停战）而结束 — MapEvent.cs:2654 |
| `MapEventVisual`（field） | 地图可视化代理（旗帜/部队渲染）— MapEvent.cs:2674 |
| `StrengthOfSide`（field） | 两侧战力数组（索引 = 阵营）— MapEvent.cs:2687 |
| `BattleTypes`（enum） | 战斗类型：None/FieldBattle/Raid/IsForcingVolunteers/IsForcingSupplies/Siege/Hideout/SallyOut/SiegeOutside/BlockadeBattle/BlockadeSallyOutBattle — MapEvent.cs:2712 |
| `PowerCalculationContext`（enum） | 战力计算语境：平原/草原/沙漠/沙丘/雪原/森林/渡河/村庄/攻城/海战/开阔海战/河流/海战劫掠/预估 — MapEvent.cs:2739 |

## 真实示例

```csharp
// 场景一：玩家正在战斗，读取胜负双方领袖
MapEvent battle = MapEvent.PlayerMapEvent;
if (battle == null)
{
    Debug.Print("玩家当前不在战斗中");
}
else if (battle.HasWinner)
{
    PartyBase winnerLeader = battle.Winner.LeaderParty;
    PartyBase loserLeader = battle.GetLeaderParty(battle.DefeatedSide);
    Debug.Print($"{battle} 结束，胜方 {winnerLeader?.Name}，败方 {loserLeader?.Name}");
}

// 场景二：玩家以随军身份参战（不是军团领袖）
bool isSergeant = battle != null && battle.IsPlayerSergeant();

// 场景三：玩家在本侧的贡献占比（声望/影响力分成依据）
float contributionRate = battle?.GetPlayerBattleContributionRate() ?? 0f;

// 场景四：遍历守方全部参战队伍
if (battle != null)
{
    foreach (MapEventParty mapEventParty in battle.PartiesOnSide(BattleSideEnum.Defender))
    {
        Debug.Print($"守方参战：{mapEventParty.Party.Name}");
    }
}
```

## 参见

- [MobileParty](../MobileParty) — 参战队伍的载体，`MobileParty.MapEvent` 反向引用本实例
- [PartyBase](../PartyBase) — 每个 `MapEventParty` 包裹的队伍
- [Settlement](../Settlement) — 攻城/劫掠/封锁的关联聚落
- [MBObjectBase](../../campaign-ext/MBObjectBase) — 基类，提供存档与对象系统支持
- [CampaignEvents](../CampaignEvents) — 战斗开始/结束等事件的订阅入口

## 导航
- ↑ [campaign 桶索引](../)
- ↑ [API 参考](../../)
- ↑ [v1.4.7 中文首页](../../../)
- ↔ [架构总览](../../../architecture/)
