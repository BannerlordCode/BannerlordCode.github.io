---
title: "Mission"
description: "战场推演与战斗模拟的运行时容器：由 MissionState 创建，承载 Agents / Teams / MissionBehaviors，并在 EndMission 后收尾的唯一上下文。本文讲清它的生命周期、获取方式、依赖与崩溃边界。"
---

# Mission

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public sealed class Mission : DotNetObject, IMission`
**Base:** `DotNetObject`
**Source:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/Mission.cs`

---

## 一句话职责

`Mission` 是一场战斗/场景推演的**运行时容器**：它把原生场景（Scene）、所有参战单位（`Agent`）、阵营（`Team`）、以及挂载的行为逻辑（`MissionBehavior` / `MissionLogic`）绑在一起，并在一帧帧的 tick 中驱动整场模拟，直到 `EndMission` 收尾。

---

## 心智模型

### 它是什么 / 在哪一层

- `Mission` 属于 **Mount & Blade 模拟层**，不是 Campaign（大地图）层。所有“场上正在发生什么”的状态都挂在它身上；Campaign 层只负责决定“要开一场什么内容的战斗”，并通过 `CampaignMission.OpenBattleMission(...)` 这类入口把控制权交给 `Mission`。
- 它是 `sealed`，你**不能继承它**。要往一场战斗里加逻辑，写 `MissionBehavior`（表现/监听）或 `MissionLogic`（规则/胜负）子类，再由引擎在开局时注册进去（`AddMissionBehavior` 会把 `Mission` 反向引用设到 behavior 上）。
- 它实现 `IMission`，所以 `CampaignMission` 的打开方法返回的是 `IMission` 接口；需要具体类型时再转回 `Mission`。

### 生命周期（从生到死）

1. **创建**：`MissionState.CreateMission`（`MissionState.cs:248`）用 `new Mission(rec, this, needsMemoryCleanup)` 构造，`CurrentState = State.NewlyCreated`。`rec` 是 `MissionInitializerRecord`，携带场景名、关卡、伤害倍率等。
2. **进入 GameState**：`MissionState.OpenNew(...)`（`MissionState.cs:302`）创建 `MissionState` 并 push 到 `GameStateManager`；随后 `OnMissionStateActivate` 触发，加载场景，`CurrentState` 进入 `Initializing`。
3. **运行中**：场景资源就绪、`IsLoadingFinished` 为真后，`CurrentState = State.Continuing`，每帧 `Tick` 驱动 `Agents` / `Teams` / 各 `MissionBehavior` 的回调。这就是你 99% 的逻辑所在阶段。
4. **请求结束**：任意处调用 `EndMission()` → `MissionEnded = true`、`CurrentState = State.EndingNextFrame`（不是立刻销毁，而是“下一帧收尾”）。
5. **真正收尾**：下一帧 `EndMissionInternal()` 依次调用监听者 `OnEndMission`、`MissionBehavior.OnEndMissionInternal()`，对每个 `Agent` 调 `OnRemove()`，再对 `AllAgents` 调 `OnDelete()` + `Clear()`，然后 `Teams.Clear()`、`MissionObjects.OnEndMission()`，最后 `CurrentState = State.Over` 并释放资源、`FinalizeMission()`，`MissionResult` 在此阶段成形。

### 谁创建 / 谁持有

- **创建者**：`MissionState`（引擎层），由 `CampaignMission` / `MissionState.OpenNew` 间接驱动。
- **持有者**：当前 `Mission` 同时被两处引用——静态 `Mission.Current`（活动 mission 的全局句柄）和 `MissionState.Current.CurrentMission`（GameState 视角）。两者在 mission 运行期为同一对象；mission 结束后 `Mission.Current` 被置空。
- **你**通常**不要** `new Mission(...)`。通过 `CampaignMission.OpenXxxMission(...)` 或引擎在开局注入的行为去拿它。

### 什么时候用 / 什么时候**不要**用

- **用**：任何“战斗正在进行时”的逻辑——单位增删、阵营状态、命中结算、胜负判定、镜头与 UI 叠加。都用 `MissionBehavior` / `MissionLogic` 挂在 `Mission` 上。
- **不要**在 Campaign 代码、`OnSessionLaunched` 之外的地图逻辑、或存档读写里直接持有 `Mission` 引用。Campaign 与 Mission 生命周期完全分离：在大地图上 `Mission.Current == null`，此时访问它会空引用崩溃。
- **不要**把 `Agent` / `Team` 引用当“永久句柄”缓存到 Mission 之外。Mission 一结束，这些对象会被 `Clear()`，悬空引用会读到已释放的原生指针。

---

## 依赖关系

`Mission` 是中心枢纽，四周是它直接持有或驱动的类型。带链接的是本仓库已有页面，其余是真实存在但本周期尚未建页的类型（仅作说明，不指向缺失页面）。

```
                 CampaignMission / MissionState.OpenNew
                          │ 创建
                          ▼
                       Mission  ◄── Mission.Current (静态句柄)
                  ┌───────┼───────────────┬──────────────┐
                  ▼       ▼               ▼              ▼
            MissionBehaviors   Agents          Teams        MissionLogics
            (List<Behavior>)  (AgentReadOnlyList) (TeamCollection) (List<MissionLogic>)
                  │               │               │              │
                  ├──► [MissionBehavior](./MissionBehavior)   (规则/监听)
                  ├──► Agent (./Agent)            ├──► Team
                  └──► Formation (./Formation)    └──► Team 内部 Formation
                  ▼
            MissionState ── 持有 CurrentMission；MissionResult 在结束时成形
                  ▼
            Scene (原生场景) / Screen (UI 叠加) / Save (不序列化 Mission 本身)
```

- 上游 / 创建：`MissionState`（`: GameState`）、`CampaignMission`（静态打开入口）、`MissionInitializerRecord`。
- 集合依赖（运行时持有）：[`MissionBehavior`](./MissionBehavior)、[`Agent`](./Agent)、`Team`、`Formation`（[`Formation`](./Formation)）、`MissionLogic`、`MissionObject`。
- 结果 / 状态：`MissionState.Current.CurrentMission`、`MissionResult`、`State` 枚举（`NewlyCreated`/`Initializing`/`Continuing`/`EndingNextFrame`/`Over`）。
- 周边：`Scene`（原生场景）、`Screen`（Gauntlet UI 叠加层）、存档系统（**不**直接序列化 `Mission` 实例，见风险）。

---

## 风险（Risks）

1. **Agent 死亡/移除后的悬空引用**：`OnAgentRemoved` 触发时 `Agent` 对象还在 `AllAgents` 里没被 `Clear()`；但在 `EndMissionInternal` 之后所有 `AllAgents` 都会被 `OnDelete()` + `Clear()`。把 `Agent` 存进静态字段、事件订阅、或跨 mission 的列表，mission 结束后就会指向已释放指针。正确做法：在回调里用完即弃，或始终先判 `agent.State == AgentState.Active` / `agent.IsValid`。
2. **Mission 生命周期 vs Campaign**：`Mission` 只在战斗中存在。Campaign 的 `OnSessionLaunched`、`DailyTick` 等阶段 `Mission.Current` 为 `null`。任何“在地图上”的代码访问 `Mission.Current` 都会 `NullReferenceException`。
3. **在 Mission 之外访问 `Mission.Current`**：即使判断了非 null，也只应在 `State.Continuing` 阶段读 `Agents` / `Teams`。在 `EndingNextFrame` / `Over` 阶段集合正在被清空，遍历会得到半销毁状态。
4. **错误阶段的逻辑**：在 `Initializing` 阶段 `Agents` 还没补全、队伍未就绪；在 `Over` 之后再调 `EndMission()` 无意义且可能重复触发收尾。需要“开局完成”再动手的逻辑，请等 `IsLoadingFinished` 为真或 `OnMissionStart` 回调。
5. **重复 / 提前 EndMission**：`EndMission()` 幂等性不强——多次调用会把 `CurrentState` 反复置 `EndingNextFrame` 并可能重入收尾。需要结束时先判 `if (!Mission.Current.MissionEnded)`。
6. **不要在 Mission 层写“应属于 Campaign”的逻辑**：胜负结果要回写 Campaign 时，通过 `MissionLogic` 在 `OnMissionEnd` 阶段调用 Campaign API，而不是在 tick 里直接改大地图状态——否则读档/快进会错位。

---

## 成员要点（Member Notes）

按使用频率分组。每个成员给出**用途 + 副作用 + 何时调用**。

### 获取与状态

- **`static Mission Current`**
  - 用途：全局句柄，拿到“当前正在跑的 mission”。
  - 副作用：无；但 mission 结束被置 `null`。
  - 何时调用：仅在确认处于一场 mission 内时（通常是某个 `MissionBehavior` 的方法体里）。不要在大地图代码里用它。
- **`State CurrentState`**（枚举）
  - 用途：判断 mission 处在 `NewlyCreated` / `Initializing` / `Continuing` / `EndingNextFrame` / `Over` 哪一阶段。
  - 副作用：只读。
  - 何时调用：任何需要按阶段分支的逻辑前先读它。
- **`bool MissionEnded` / `bool IsMissionEnding`**
  - 用途：`MissionEnded` 表示已调用过 `EndMission`；`IsMissionEnding` 表示即将收尾但资源尚未清空。
  - 何时调用：决定“还能不能安全操作集合”前检查。
- **`bool IsLoadingFinished`**
  - 用途：场景与单位是否加载完毕。为 `false` 时 `Agents` 可能不全。
  - 何时调用：`OnMissionTick` 开头或 spawn 逻辑前。

### 集合（运行时持有）

- **`AgentReadOnlyList Agents`**
  - 用途：当前**存活/在场**的单位列表（不含已移除未删除的）。
  - 副作用：每帧随增删变化；遍历中移除单位要小心枚举器。
  - 何时调用：tick、命中结算、计数等需要“现在场上有哪些人”的地方。
- **`AgentReadOnlyList AllAgents`**
  - 用途：包含已 `OnRemove` 但还没 `OnDelete` 的单位（移除瞬间到真正销毁之间的窗口）。
  - 何时调用：需要在单位刚死但对象还在时做清理/统计。
- **`TeamCollection Teams`**
  - 用途：所有阵营；并暴露 `AttackerTeam` / `DefenderTeam` / `PlayerTeam` / `PlayerEnemyTeam` / `PlayerAllyTeam` 等快捷属性。
  - 何时调用：按阵营做逻辑、找玩家敌队、判断胜负。
- **`List<MissionBehavior> MissionBehaviors`** / **`List<MissionLogic> MissionLogics`**
  - 用途：当前挂载的全部行为/逻辑。
  - 何时调用：需要跨 behavior 协作时（例如某个逻辑去读另一个 behavior 的状态）。正常情况下你不需要遍历它。

### 关键方法

- **`void EndMission()`**
  - 用途：请求结束本场 mission。
  - 副作用：置 `MissionEnded = true`、`CurrentState = State.EndingNextFrame`；**下一帧**才真正销毁资源。会经过各 behavior 的 `OnEndMission` / `OnEndMissionInternal`。
  - 何时调用：胜负已定或玩家选择撤退时。调用前先判 `!MissionEnded`。
- **`Agent MainAgent`**
  - 用途：玩家当前操控的单位（可能为 `null`，例如观战或主角阵亡）。
  - 何时调用：需要“玩家单位”时先判非 null 再读 `State`。
- **事件 `OnBeforeAgentRemoved`**（委托 `OnBeforeAgentRemovedDelegate`）
  - 用途：在 behavior 的 `OnAgentRemoved` 之前触发，可在单位被正式移除前做最后处理。
  - 何时调用：需要“抢在 behavior 之前”反应的场景（如记录击杀来源）。

### MissionBehavior 回调（由 Mission 主动调用）

- **`OnEarlyAgentRemoved(Agent, Agent, AgentState, KillingBlow)`** 与 **`OnAgentRemoved(Agent, Agent, AgentState, KillingBlow)`**
  - 由 `Mission.OnAgentRemoved`（内部，`Mission.cs:2986`）在遍历 `MissionBehaviors` 时分别调用 `OnEarlyAgentRemoved` 与 `OnAgentRemoved`。
  - 用途：单位被移除时你的逻辑入口；`affectedAgent` 是被移除者，`agentState` 区分 `Killed` / `Unconscious` / `Routed`。
  - 何时调用：命中结算后自动触发，你只需 override。

---

## 真实示例（Real Example）

### 获取一场 Mission

战役层用 `CampaignMission` 打开战斗（返回 `IMission`，可转 `Mission`）；在行为内部则通过 `Mission.Current` 或 behavior 自带的 `Mission` 属性拿到它——**不要自己 `new`**。

```csharp
// 战役层：打开一场遭遇战（真实入口，来自 CampaignMission.OpenBattleMission）
IMission opened = CampaignMission.OpenBattleMission("battle_scene_001", usesTownDecalAtlas: false);
// 想拿到具体 Mission 类型时再转：
if (opened is Mission mission)
{
    // mission 此时大概率仍在 Initializing，Agents 尚未就绪
}
```

### 在 MissionBehavior 中读取 Agents 并处理 OnAgentRemoved

下面这个类统计玩家敌队的阵亡数，并每秒清点存活敌军——全部用**真实存在的 API 名**（`Mission.Current.Agents`、`Agent.State`、`AgentState.Active` / `AgentState.Killed`、`PlayerTeam`、`OnAgentRemoved` 签名与 `MissionBehavior.cs:81` 一致）。

```csharp
using TaleWorlds.MountAndBlade;

public class KillTrackingBehavior : MissionLogic
{
    private int _enemyKills;

    // Mission 在单位被移除时回调（签名见 MissionBehavior.cs:81）
    public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent,
                                         AgentState agentState, KillingBlow blow)
    {
        base.OnAgentRemoved(affectedAgent, affectorAgent, agentState, blow);

        // agentState 区分死亡/昏迷/溃逃；只统计真正的阵亡
        if (agentState != AgentState.Killed)
            return;

        Team playerTeam = Mission.Current.PlayerTeam;
        if (playerTeam != null && affectedAgent.Team != null &&
            affectedAgent.Team.IsEnemyOf(playerTeam))
        {
            _enemyKills++;
        }
        // 注意：此时 affectedAgent 仍在 AllAgents 中，不要长期缓存它
    }

    // 每帧清点存活敌军（OnMissionTick 仅在 CurrentState == Continuing 时被调用）
    public override void OnMissionTick(float dt)
    {
        int aliveEnemies = 0;
        foreach (Agent agent in Mission.Current.Agents)
        {
            if (agent.State == AgentState.Active &&
                agent.Team != null &&
                agent.Team.IsEnemyOf(Mission.Current.PlayerTeam))
            {
                aliveEnemies++;
            }
        }
        // aliveEnemies 即当前场上存活的敌方战斗人员数量
    }
}
```

> 获取小结：手动 `new Mission` 是被禁止的写法；要么经 `CampaignMission.OpenXxxMission` 由引擎开，要么在已挂载的 `MissionBehavior` / `MissionLogic` 里用 `Mission.Current` 或 `this.Mission` 访问。

---

## 参见（See Also）

- ↑ 父级（模块索引）：[Mission 模块首页](./)
- ↔ 同级：[MissionBehavior](./MissionBehavior) · [Agent](./Agent) · [Formation](./Formation)
- 上游枢纽：[Campaign](../campaign/Campaign)（决定开什么战斗）· [MBSubModuleBase](../core/MBSubModuleBase)（行为注册入口）
- 规范：[Doc Contract](../../architecture/doc-contract)（手写文档与崩溃边界总约束）

> 说明：`Team`、`MissionState`、`MissionResult`、`Screen`、存档系统在本周期尚未建独立页面，故此处不指向缺失文件；其真实类型名与关系已在上文“依赖关系 / 风险”中说明。
