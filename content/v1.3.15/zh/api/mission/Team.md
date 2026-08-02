---
title: "Team"
description: "Mission 内部的一方阵营：归属同一 Mission、持有一组 Formation 与若干 Agent、拥有独立 OrderController 与 TeamAI 的作战/外交单位集合（攻方、守方、中立等）。"
---
# Team

**Namespace:** TaleWorlds.MountAndBlade  
**Module:** TaleWorlds.MountAndBlade  
**Type:** `public class Team : IMissionTeam`  
**Base:** `IMissionTeam`  
**File:** `TaleWorlds.MountAndBlade/Team.cs`

## 概述

`Team` 代表 **一场 `Mission` 内部的一个阵营单位集合**：攻方、守方、玩家一方、玩家盟友、乃至中立旁观者，都是一支 `Team`。一支 `Team` 同时是：

- 一组 `Agent`（士兵、玩家、坐骑）的归属容器；
- 一组 `Formation`（步兵/弓箭/骑兵/特殊编队）的拥有者；
- 一套指挥系统（`OrderController`，主控/玩家控制）和一套 AI 战术系统（`TeamAIComponent`）的挂载点；
- 阵营关系（敌/友）与视觉标识（`Color`/`Banner`）的载体。

它向下通过 `Agent.Team` 与成千上万个战斗实体相连，向上由 `Mission.Teams` 统一管理。大多数战斗 mod 的“敌我判断、编队指挥、战力统计”都从 `Team` 出发。

## 一句话职责

一支在单场战斗中被统一指挥、共享阵营关系与配色的作战单位集合；对外用“敌方/友方/玩家方”来描述，对内用“攻方/守方/中立”来归类。

## 心智模型

把 `Team` 想象成**“战场上的一面旗帜下的所有单位”**：

- **它活多久**：只存在于一场 `Mission` 的存活期间。任务加载时由 `Mission.Teams` 创建，任务结束时被 `Mission.Teams.Clear()` 逐个销毁。切换场景会创建全新的 `Mission` 与全新的 `Team` 集合。
- **谁创建它**：不要自己 `new Team()`。`Team` 是对原生 `MBTeam` 的托管包装（字段 `MBTeam`），实际创建入口只有 `Mission.Teams.Add(BattleSideEnum side, ...)`，由战役/任务启动逻辑（如战斗 spawn 逻辑）在初始化阶段调用。引擎随后对每支队伍触发 `MissionBehavior.OnAddTeam` / `AfterAddTeam`。
- **它在哪一层**：属于 `TaleWorlds.MountAndBlade` 的**运行期战斗层**，与战役层（`Campaign`/`Hero`）解耦。同一个 `Hero` 在不同战斗里属于不同 `Team` 实例。
- **它和 Agent 的关系**：每个 `Agent` 在生成时被加入唯一一支队伍（`Team.AddAgentToTeam`），通过 `agent.Team` 反向引用；换队用 `agent.SetTeam(...)`，会同步原生侧并广播。
- **它和 Formation 的关系**：一支队伍在 `Initialize()` 中预先创建 10 个 `Formation`（8 个标准 + 2 个特殊），按 `FormationClass` 索引；`GetFormation(FormationClass)` 直接下标取用。
- **它和指令系统的关系**：默认持有 2 个 `OrderController`——`MasterOrderController`（索引 0，指挥官/AI 下达）与 `PlayerOrderController`（索引 1，玩家下达）；为某个具体 `Agent` 还会惰性创建更多控制器。

## 如何获取 Team（真实获取路径）

```csharp
// 1) 玩家自己的队伍（最常见入口）
Team playerTeam = Mission.Current?.PlayerTeam;

// 2) 遍历当前 Mission 的所有队伍
foreach (Team team in Mission.Current.Teams)
{
    // ...
}

// 3) 按“相对玩家”的阵营取：玩家、玩家敌人、玩家盟友
Team enemy = Mission.Current.PlayerEnemyTeam;
Team ally  = Mission.Current.PlayerAllyTeam;
Team enemy2 = Mission.GetTeam(TeamSideEnum.EnemyTeam);   // 静态便捷方法

// 4) 按“攻/守方”取（一场战斗可能有多个攻方/守方队伍）
foreach (Team t in Mission.GetTeamsOfSide(BattleSideEnum.Attacker))
{
    // ...
}

// 5) 从某个 Agent 取它所属队伍
Team team = someAgent.Team;

// 6) 由 team index 反查（网络/原生回调里常用）
Team t = Mission.GetTeamFromTeamIndex(agent.TeamIndex);
```

> **哨兵陷阱**：`Mission.Teams.Find(MBTeam)` 在找不到时返回 `Team.Invalid`（一个 `Mission == null` 的静态哨兵），**不是 `null`**。判断有效性永远用 `team.IsValid`（即 `MBTeam.IsValid`），不要写 `team == null`。

## 何时用 / 何时不要用

**用：**
- 用 `Mission.Current.Teams` 做遍历、`agent.Team` 读取所属队伍；
- 用 `Mission.Current.PlayerTeam` / `PlayerEnemyTeam` / `PlayerAllyTeam` 取玩家相关方；
- 用 `team.ActiveAgents` 枚举当前存活单位、`team.GetFormation(FormationClass.X)` 操作编队；
- 用 `team.IsEnemyOf(other)` / `team.IsFriendOf(other)` 做敌我判断；
- 用 `team.QuerySystem` 读取聚合战力/位置统计。

**不要用：**
- **不要 `new Team(...)`**：构造函数不是给 mod 准备的；`TeamCollection.Add(Team)` 会打印 `"Pre-created Team can not be added to TeamCollection!"` 的警告且什么都不做。创建队伍只能用 `Mission.Teams.Add(BattleSideEnum, ...)`。
- **不要跨 Mission 缓存 Team 引用**：任务结束后 `Team`/`MBTeam` 失效，`IsValid` 变 `false`，再访问会读到脏数据或崩溃。每帧从 `Mission.Current` 重新取。
- **不要用 `Teams[0]`、`Teams[1]` 之类硬编码下标**：攻方/守方可能各有多支（Attacker / AttackerAlly / Defender / DefenderAlly），顺序也不保证。用 `Mission.Current.PlayerTeam` 或 `Mission.GetTeamsOfSide(...)`。
- **不要在 Mission tick 之外手动增删队伍成员**：`AddAgentToTeam` / `RemoveAgentFromTeam` / `DeactivateAgent` 由引擎在 spawn/死亡时调用，手调会破坏 `_activeAgents` / `_teamAgents` 一致性。换队请用 `agent.SetTeam(...)`。
- **不要在客户端随意改敌我关系**：`SetIsEnemyOf` 只在 `GameNetwork.IsServerOrRecorder` 时广播，服务端调用才正确。

## 依赖图（可点击）

**上游（创建 / 持有）**
- [Mission](./Mission/) — 全局场景，持有 `Teams` 集合并在每帧 `Team.Tick`
- [TeamCollection](../mission-ext/TeamCollection/) — `Mission.Teams` 的具体类型，提供 `Add(BattleSideEnum)` 创建入口
- [MBTeam](../mission-ext/MBTeam/) — 原生（C++）侧队伍，Team 的 `MBTeam` 字段是其托管包装

**下游 / 持有**
- [Agent](./Agent/) — 通过 `agent.Team` 归属；`ActiveAgents` / `TeamAgents` 反向列出成员
- [Formation](./Formation/) — 每队 10 个，按 `FormationClass` 索引
- [OrderController](../mission-ext/OrderController/) — `MasterOrderController` / `PlayerOrderController` / 惰性创建
- [TeamAIComponent](../mission-ext/TeamAIComponent/) — 战术 AI 挂载点（`TeamAI`）
- [TeamQuerySystem](../mission-ext/TeamQuerySystem/) — 聚合查询（战力、位置）
- [Banner](../core-extra/Banner/) — 队伍旗帜；`Color` / `Color2` 为 `uint` ARGB
- [BattleSideEnum](../core-extra/BattleSideEnum/) / [TeamSideEnum](../core-extra/TeamSideEnum/) / [FormationClass](../core-extra/FormationClass/) — 阵营/身份/编队枚举

**相关 Events · Behaviors · Models**
- `MissionBehavior.OnAddTeam` / `AfterAddTeam`（在 [MissionBehavior](./MissionBehavior/) 中重写）——队伍被加入时回调
- 本类事件：`OnFormationsChanged`、`OnOrderIssued`、`OnFormationAIActiveBehaviorChanged`、`OnFormationsChangedInDeployment`
- [TacticComponent](../mission-ext/TacticComponent/) — 经 `AddTacticOption` 注册到 `TeamAI`
- [MissionObject](../mission-ext/MissionObject/) — 旗帜、据点等通过 `Side` 与队伍关联
- [MissionState](../mission-ext/MissionState/) — 任务进行中才允许写阵营关系

## 风险段（可能导致崩溃 / 坏档）

1. **任务结束后引用 Team**：`Mission` 结束会走 `Teams.Clear()` → 逐个 `Team.Clear()` → 原生 `ResetTeams`，并且 `Team.Invalid` 被重置为 `null`。若 mod 把 `Team` 存为字段并在 `OnMissionEnded` 之后访问，其 `MBTeam` 已失效，读 `ActiveAgents` / `Formations` / `QuerySystem` 会空引用或读脏数据。  
   **正确做法**：在 `MissionBehavior.OnMissionEnded` 中清空引用；任何访问前先判断 `Mission.Current != null` 与 `team.IsValid`。

2. **假设 team index / 队伍顺序稳定**：`TeamIndex` 由 `MBTeam.Index` 决定（原生创建顺序），且有 Attacker/AttackerAlly/Defender/DefenderAlly 多支可能。硬编码下标会让盟友/敌方判断错位。

3. **从 Mission tick 之外变更队伍组成**：手动调 `AddAgentToTeam` / `RemoveAgentFromTeam` 会跳过 `Agent.SetTeam` 的原生同步与网络广播；`DeactivateAgent` 只从 `_activeAgents` 移除、不从 `_teamAgents` 移除，导致两者不一致（例如 `TeamAgents` 仍含已停用的单位）。要换队用 `agent.SetTeam(...)`。

4. **敌我关系只能在服务端改**：`SetIsEnemyOf` 在 `!IsServerOrRecorder` 时不会广播，客户端调用会造成客户端/服务端阵营不一致。`PlayerEnemy/PlayerAlly` 也会随之重算。务必在服务端、且 `Mission` 处于进行态时调用。

5. **`Team.Invalid` 不是 `null`**：`Find()` 与 `GetTeamFromTeamIndex(-1)` 返回哨兵而非 `null`；用 `== null` 判断会误以为“有效”。统一用 `IsValid`。

6. **Replay 模式下对象为空**：`Initialize()` 在 `GameNetwork.IsReplay` 时跳过创建 `FormationsIncludingEmpty`、`_orderControllers`、`QuerySystem`、`DetachmentManager`。Replay 中访问这些字段可能为 `null`/空，`Tick` 内多数逻辑也受 `IsReplay` 保护；不要在 replay 下假定 formation / order controller 已存在。

## 成员说明

> 下面按主题分组列出 mod 可见的关键成员。每个成员标注**用途 + 副作用 + 调用时机**。纯内部字段不逐一罗列。

### 一、阵营与身份

| 成员 | 类型 | 说明 / 何时调用 |
|------|------|----------------|
| `Side` | `BattleSideEnum` | 攻方/守方/中立（`Attacker`/`Defender`/`None`）。构造时由 `Teams.Add` 的 `side` 参数定，之后只读。区分“物理方”。 |
| `TeamSide` | `TeamSideEnum` | 相对玩家推导出的身份：`PlayerTeam` / `PlayerAllyTeam` / `EnemyTeam`（既非玩家也非盟友即视为敌方，含中立）。只读。 |
| `IsPlayerTeam` / `IsPlayerAlly` | `bool` | 分别等价于 `Mission.PlayerTeam == this` 与“同 Side 且非玩家”。用于 UI 高亮与指挥权限。 |
| `IsAttacker` / `IsDefender` | `bool` | `Side` 的直接派生。 |
| `IsValid` | `bool` | `MBTeam.IsValid`。**判断队伍是否仍有效**（任务结束后为 `false`）。替代 `== null`。 |
| `TeamIndex` | `int` | `MBTeam.Index`。用于网络消息与 `GetTeamFromTeamIndex` 反查。 |
| `Color` / `Color2` | `uint` | 队伍主/次色（ARGB）。构造时传入，`Add` 默认 `uint.MaxValue`（引擎取阵营默认色）。 |
| `Banner` | `Banner` | 队伍旗帜对象，可能为 `null`。 |
| `MoraleChangeFactor` | `float` | 士气变化系数（默认 `1f`），影响该队士气增减幅度。 |

### 二、编队 Formations

- **`FormationsIncludingEmpty`**（`MBList<Formation>`，8 个）：标准编队（Infantry/Ranged/Cavalry/HorseArcher/…），含空编队。
- **`FormationsIncludingSpecialAndEmpty`**（`MBList<Formation>`，10 个）：在 8 个基础上再加 2 个特殊编队（如 Reserve/Unset）。`Initialize()` 中创建，replay 下为空。
- **`GetFormation(FormationClass formationIndex)`**：按下标（即 `FormationClass` 枚举值）返回对应 `Formation`，`Team` 自身不做越界保护，传入值需在枚举范围内。
- **`HasAnyFormationsIncludingSpecialThatIsNotEmpty()`**：是否存在任一非空编队——常用于判断“该队是否还有兵”。
- **`GetFormationCount()`** / **`GetAIControlledFormationCount()`**：非空编队数 / 其中由 AI 控制的编队数。

### 三、成员 Agent

- **`ActiveAgents`**（`MBReadOnlyList<Agent>`）：当前存活且激活的成员（不含已被 `DeactivateAgent` 移出的）。
- **`TeamAgents`**（`MBReadOnlyList<Agent>`）：**所有曾加入该队**的成员，包括已停用/阵亡但还没走完移除流程的。统计“曾经属于”时用它，统计“还能打”时用 `ActiveAgents`。
- **`Heroes`**（`IEnumerable<Agent>`）：若 `Agent.Main.Team == this` 则 yield 返回玩家英雄 `Agent.Main`（仅玩家主英雄会被纳入，并非全队英雄）。
- **`Leader`**（`Agent`）：玩家主英雄（若属于本队）优先，否则取第一个 `IsHero` 的活跃单位；都没则返回 `null`。
- **`HasBots`**（`bool`）：是否存在非坐骑、非玩家控制的 AI 单位——决定是否走 `TeamAI.Tick`。
- `AddAgentToTeam` / `RemoveAgentFromTeam` / `DeactivateAgent`：引擎在 `Agent.SetTeam` / 阵亡时调用，**mod 不应手调**（见风险段 3）。

### 四、指令与 AI

- **`MasterOrderController`** / **`PlayerOrderController`**：默认两个 `OrderController`（索引 0 / 1）。前者 AI/指挥官下达，后者玩家下达。列表为空时访问会越界——replay/未初始化时勿用。
- **`GetOrderControllerOf(Agent agent)`**：取某 `Agent` 专属的 `OrderController`，不存在则惰性 `new` 一个并挂上事件。用于给单个单位单独下令。
- **`SetCustomOrderController(OrderController, OrderController)`**：替换默认的 master/player 控制器，并把旧控制器上的委托嫁接到新控制器；会置 `_alreadyHasCustomOrderController`。
- **`TeamAI`**（`TeamAIComponent`）/ **`HasTeamAi`**（`bool`）：战术 AI 组件及其是否存在标记。
- **`AddTeamAI(TeamAIComponent teamAI, bool forceNotAIControlled = false)`**：挂上 `TeamAI` 并对编队设 AI 控制、初始化 detachments、重置战术、立即 tick 一次有兵的编队。**副作用大**，通常在任务初始化时由行为调用。
- **`AddTacticOption` / `RemoveTacticOption` / `ClearTacticOptions` / `ResetTactic`**：对 `TeamAI` 的战术表操作；无 `TeamAI` 时全部静默 no-op。
- **`DelegateCommandToAI()`**：把所有编队重新交还 AI 控制（`SetControlledByAI(true)`）。玩家放弃手动指挥时用。
- **`SetPlayerRole(bool isPlayerGeneral, bool isPlayerSergeant)`**：设置“玩家是主将/军士”，并据此决定玩家队编队是否由 AI 控制（`!IsPlayerGeneral` 时由 AI 接管）。
- **`AssignPlayerAsSergeantOfFormation(MissionPeer peer, FormationClass formationClass)`**：把某联机玩家指派为某编队军士，接管该编队指挥权（服务端下还会向该玩家网络推送 `AssignFormationToPlayer`）。

### 五、空间、查询与战术统计

- **`QuerySystem`**（`TeamQuerySystem`）：聚合查询（平均战力、单位数、编队状态等）。replay 下为 `null`。
- **`GetAveragePosition()`** / **`GetAveragePositionOfEnemies()`**：本队 / 敌方所有活跃单位的平均地面坐标（`Vec2`）；无单位返回 `Vec2.Invalid`。
- **`GetMedianPosition(Vec2 averagePosition)`**：返回离平均点最近的成员的世界坐标（`WorldPosition`），用于找“阵眼”。
- **`GetWeightedAverageOfEnemies(Vec2 basePoint)`**：以到 `basePoint` 距离平方为权重的敌方加权中心，常用于“最近威胁方向”。
- **`HasAnyEnemyTeamsWithAgents(bool ignoreMountedAgents)`**：是否存在仍有活跃单位的敌方队伍；`ignoreMountedAgents=true` 时只看步兵。
- **`CachedEnemyDataForFleeing`** / **`UpdateCachedEnemyDataForFleeing()`**：逃跑 AI 缓存的敌方编队数据；仅在列表为空时重新计算，且 `Tick` 每帧清空缓存以触发重算。
- **`DetachmentManager`** / **`DisableDetachmentTicking()`**：管理编队 detachment（如散兵小组）；后者把 `_tickDetachments` 置 `false`，停止 `Tick` 中对 detachment 的推进。

### 六、阵营关系与生命周期

- **`IsEnemyOf(Team other)`** / **`IsFriendOf(Team other)`**：基于 `MBTeam` 的敌友关系。注意 `IsFriendOf` 对自己返回 `true`。
- **`SetIsEnemyOf(Team otherTeam, bool isEnemyOf)`**：改写敌友关系并同步 `MBTeam`；仅服务端/录制端会广播 `TeamSetIsEnemyOf` 网络消息（见风险段 4）。
- **`Tick(float dt)`**：引擎在 `Mission.TickAgentsAndTeams` 中每帧调用——推进 `TeamAI`、detachment、各编队；会处理撤退（`Mission.RetreatSide`）、清空逃跑缓存。**mod 不要手调**。
- **`OnMissionEnded()`**：任务结束时由 `Mission` 调用，转发给 `TeamAI.OnMissionEnded`。
- **`OnAgentRemoved(Agent agent)`**：引擎在 `Agent` 移除时调用（客户端/replay 下直接返回），通知各编队 AI 清理。
- **`Reset()`** / **`Clear()`**：`Reset` 重置编队、裁掉额外 order controller、重建 `QuerySystem`；`Clear` 先解绑编队事件再 `Reset`。任务重开/内部重置用，mod 一般不直接调。
- **`TriggerOnFormationsChanged(Formation)`** / **`TriggerOnFormationsChangedInDeployment()`**：触发对应事件（编队变化、部署阶段编队变化）。
- **`Invalid`**（静态）：哨兵 `Team`（`Mission==null`），找不到队伍时返回它；`IsValid` 为 `false`。
- **静态辅助**：`DoesFirstFormationClassContainSecond(f1, f2)`（位与判断）、`GetFormationFormationClass(Formation)`（按 query system 推断兵种）、`GetPlayerTeamFormationClass(Agent)`（按主英雄装备推断应归入的 `FormationClass`）。

## 最小真实示例

### 示例 1：遍历敌人队伍并读取其平均位置（在 MissionBehavior 的每帧 tick 中）

```csharp
public override void OnMissionTick(float dt)
{
    base.OnMissionTick(dt);

    Mission mission = Mission.Current;
    if (mission == null || mission.PlayerTeam == null) return;

    Team playerTeam = mission.PlayerTeam;
    int aliveFriendCount = playerTeam.ActiveAgents.Count;

    // 找出所有与玩家为敌、且仍有活跃单位的队伍
    foreach (Team team in mission.Teams)
    {
        if (team.IsEnemyOf(playerTeam) && team.ActiveAgents.Count > 0)
        {
            Vec2 enemyAverage = team.GetAveragePosition();
            // 用 enemyAverage 做 UI 标记或 AI 决策
        }
    }
}
```

### 示例 2：给玩家队伍步兵编队下达“推进”指令（真实获取路径）

```csharp
// 在 MissionBehavior 中，确保玩家是主将
Team playerTeam = Mission.Current.PlayerTeam;
if (playerTeam != null && playerTeam.IsPlayerGeneral)
{
    Formation infantry = playerTeam.GetFormation(FormationClass.Infantry);
    if (infantry != null && infantry.CountOfUnits > 0)
    {
        // MasterOrderController 代表指挥官/AI 下达的指令
        playerTeam.MasterOrderController.SetOrder(OrderType.Advance);
    }
}
```

> 注意：以上两个示例都不缓存 `Team`——每次都从 `Mission.Current` 现取，避免任务切换后引用失效。

## 跨版本提示

- 本页语义以完整 `bannerlord-1.4.5` 源码为准。`Team` 的核心 API（`Side`/`TeamSide`/`ActiveAgents`/`GetFormation`/`IsEnemyOf`/`OrderController`/`TeamAI`/`Tick`）在 v1.3.0 / v1.3.15 / v1.4.5 之间保持一致。
- v1.4.5 主要把网络同步细节进一步下沉到 `MissionNetworkHelper` 与 `OrderController`，对 `Team` 的公开表面影响极小；跨版本兼容写法始终是“通过 `Mission.Current` / `agent.Team` 取，不要自己 `new`”。

## 参见

- ↑ 父级：[任务 API 索引](../)
- ↔ 同级：[Mission](./Mission/) · [Agent](./Agent/) · [Formation](./Formation/) · [MissionBehavior](./MissionBehavior/) · [MissionObjective](../mission-ext/MissionObjective/) · [TacticOption](./TacticOption/)
- 相关类（跨桶）：[TeamCollection](../mission-ext/TeamCollection/) · [MBTeam](../mission-ext/MBTeam/) · [TeamAIComponent](../mission-ext/TeamAIComponent/) · [TeamQuerySystem](../mission-ext/TeamQuerySystem/) · [OrderController](../mission-ext/OrderController/) · [TacticComponent](../mission-ext/TacticComponent/) · [MissionObject](../mission-ext/MissionObject/) · [Banner](../core-extra/Banner/) · [BattleSideEnum](../core-extra/BattleSideEnum/) · [TeamSideEnum](../core-extra/TeamSideEnum/) · [FormationClass](../core-extra/FormationClass/)
