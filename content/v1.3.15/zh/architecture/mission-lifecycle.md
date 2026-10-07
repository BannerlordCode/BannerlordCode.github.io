---
title: "Mission 生命周期"
description: "Bannerlord 的 Mission 从创建到销毁的完整生命周期：MissionState.OpenNew 工厂、Mission 状态机、MissionBehavior 注册时机、Agent 死亡回调链，以及每个阶段能安全地做什么。"
---

# Mission 生命周期

> Mission 生命周期回答 mod 的核心问题：**一场战斗从开始到结束，我的代码在哪些时刻被调用？** 答案是：`MissionState.OpenNew` 创建 Mission，Mission 经历 NewlyCreated → Initializing → Continuing → EndingNextFrame → Over 五个状态，每个状态转换都触发 MissionBehavior 的对应回调。

## 一句话定位

`Mission` 是战斗场景的**运行时容器**：它持有 Agent、Team、MissionBehavior 列表和场景状态，由 `MissionState.OpenNew` 工厂创建，经历五个状态后销毁；mod 通过派生 `MissionBehavior` 钩入每个状态转换点。

## 心智模型

把 Mission 生命周期想成一场**戏剧演出**：

1. **建舞台（NewlyCreated）**。`MissionState.OpenNew`（`MissionState.cs:318`）调用 `Game.Current.GameStateManager.CreateState<MissionState>()` 创建 MissionState，再调 `HandleOpenNew`（`MissionState.cs:270`）创建 Mission 对象。此时 Mission 刚构造（`Mission.cs:2306`），`CurrentState = NewlyCreated`，场景还未加载。
2. **搭布景（Initializing）**。MissionState 的 `OnTick`（`MissionState.cs:88`）检测到 `CurrentState == NewlyCreated`，调 `LoadMission`（`MissionState.cs:252`）触发所有 Behavior 的 `OnMissionScreenPreLoad`，然后调 `Mission.Initialize`（`Mission.cs:604`）把 `CurrentState` 设为 `Initializing`，场景开始异步加载。
3. **开演（Continuing）**。场景加载完成后 `FinishMissionLoading`（`MissionState.cs:351`）调 `Mission.AfterStart`（`Mission.cs:3455`），依次触发 `OnBehaviorInitialize` → `EarlyStart` → `AfterStart`，最后把 `CurrentState` 设为 `Continuing`。此后每帧 `MissionState.TickMission`（`MissionState.cs:142`）调 `Mission.OnTick`（`Mission.cs:3306`）驱动战斗逻辑。
4. **谢幕（EndingNextFrame）**。当胜负条件满足时 `Mission.EndMission`（`Mission.cs:4315`）把 `CurrentState` 设为 `EndingNextFrame`，下一帧 `EndMissionInternal`（`Mission.cs:4325`）依次调 `OnEndMissionInternal` → `OnEndMission`，然后对所有 Agent 调 `OnRemove` 和 `OnDelete`。
5. **拆舞台（Over）**。`EndMissionInternal` 最后把 `CurrentState` 设为 `Over`，MissionState 的 `OnTick` 检测到后调 `Game.Current.GameStateManager.PopState(0)` 弹出 MissionState，触发 `Mission.OnMissionStateFinalize`（`Mission.cs:1123`）清理所有 Behavior 和资源。

```
MissionState.OpenNew
    │
    ▼
Mission 构造 (NewlyCreated)
    │
    ▼
Mission.Initialize (Initializing) ← 场景异步加载
    │
    ▼
Mission.AfterStart (Continuing) ← 每帧 Tick
    │
    ▼
Mission.EndMission (EndingNextFrame)
    │
    ▼
Mission.EndMissionInternal (Over)
    │
    ▼
Mission.OnMissionStateFinalize ← 清理
```

### 状态机：Mission.State 枚举

`Mission.State`（`Mission.cs:8209`）定义五个状态：

| 状态 | 含义 | 触发时机 |
|------|------|----------|
| `NewlyCreated` | 刚构造，场景未加载 | Mission 构造函数（`Mission.cs:2306`） |
| `Initializing` | 场景加载中 | `Mission.Initialize`（`Mission.cs:604`） |
| `Continuing` | 正常运行 | `Mission.AfterStart`（`Mission.cs:3455`） |
| `EndingNextFrame` | 即将结束 | `Mission.EndMission`（`Mission.cs:4315`） |
| `Over` | 已结束，等待清理 | `EndMissionInternal`（`Mission.cs:4325`） |

### MissionBehavior 注册时机

MissionBehavior 的注册发生在 `MissionState.HandleOpenNew`（`MissionState.cs:270`）中：

1. `handler(this.CurrentMission)` 委托返回 mod 注册的 Behavior 列表；
2. 如果 `addDefaultMissionBehaviors` 为 true，`AddDefaultMissionBehaviorsTo`（`MissionState.cs:333`）在前面插入 `BasicMissionHandler`、`CasualtyHandler`、`AgentCommonAILogic` 等默认 Behavior；
3. 每个 Behavior 调 `OnAfterMissionCreated`（`MissionBehavior.cs:33`）；
4. `AddBehaviorsToMission`（`MissionState.cs:299`）把 Behavior 分类为 Logic / Other / Network，调 `Mission.InitializeStartingBehaviors`（`Mission.cs:4850`）逐个调 `AddMissionBehavior`（`Mission.cs:4369`），后者触发 `OnCreated`（`MissionBehavior.cs:43`）。

**关键区别**：`OnAfterMissionCreated` 在场景加载前调用，`OnCreated` 在 Behavior 加入 Mission 时调用，`OnBehaviorInitialize` 在场景加载完成后调用。三者时机不同，能安全做的事也不同。

## 真实最小示例

### 示例 1：注册一个 MissionBehavior

```csharp
using TaleWorlds.MountAndBlade;

namespace MyMissionMod;

public class MyMissionBehavior : MissionBehavior
{
    public override MissionBehaviorType BehaviorType => MissionBehaviorType.Other;

    // 场景加载前调用：可以设置初始状态，不能访问 Agent
    public override void OnAfterMissionCreated()
    {
        // 此时 Mission.Current 已存在，但 Agents 列表为空
    }

    // Behavior 加入 Mission 时调用：可以缓存 Mission 引用
    public override void OnCreated()
    {
        // 此时可以安全地缓存 Mission.Current
    }

    // 场景加载完成后调用：可以访问 Agent、Team
    public override void OnBehaviorInitialize()
    {
        // 此时 Mission.Current.Agents 已填充
    }

    // 每帧调用：战斗逻辑写在这里
    public override void OnMissionTick(float dt)
    {
        // 每帧执行，dt 是帧间隔
    }

    // Agent 死亡时调用
    public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)
    {
        // 处理死亡逻辑
    }

    // 任务结束时调用
    public override void OnEndMission()
    {
        // 清理逻辑
    }
}
```

在 `MBSubModuleBase.OnGameStart` 中注册：

```csharp
protected override void OnGameStart(Game game, IGameStarter starter)
{
    base.OnGameStart(game, starter);
    // MissionBehavior 由游戏在 MissionState.OpenNew 时通过 handler 委托收集
    // 通常通过 MBSubModuleBase 的 OnBeforeMissionBehaviorInitialize 钩子注入
}
```

### 示例 2：监听 Agent 死亡链

Agent 死亡时回调链的顺序是：

```
Agent.OnRemove (Agent.cs:5481)
    │
    ├── Team.OnAgentRemoved
    ├── Formation.DetachmentManager.OnAgentRemoved
    ├── AgentComponent.OnAgentRemoved (每个组件)
    │
    ▼
Mission.OnAgentRemoved (Mission.cs:2563) ← MBCallback，由原生代码触发
    │
    ├── OnBeforeAgentRemoved 事件
    ├── 设置 Agent.State
    ├── Team.DeactivateAgent
    ├── OnEarlyAgentRemoved (所有 Behavior)
    ├── OnAgentRemoved (所有 Behavior)
    ├── 从 _activeAgents 移除
    │
    ▼
Mission.OnAgentDeleted (Mission.cs:2545) ← 延迟到帧末
    │
    ├── 设置 Agent.State = Deleted
    ├── OnAgentDeleted (所有 Behavior)
    ├── 从 _allAgents 移除
    ├── Agent.OnDelete
    ├── Agent.SetTeam(null)
```

```csharp
public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)
{
    // 此时 Agent 还在 _allAgents 中，但已从 _activeAgents 移除
    // agentState 可能是 Dead、Unconscious、Killed 等
    if (agentState == AgentState.Dead)
    {
        // 处理死亡
    }
}

public override void OnAgentDeleted(Agent affectedAgent)
{
    // 此时 Agent 已从 _allAgents 移除，即将被 GC
    // 这是清理引用的最后时机
}
```

### 示例 3：Mission 状态查询

```csharp
// 在 MissionBehavior 中
if (Mission.Current != null)
{
    // 当前状态
    Mission.State state = Mission.Current.CurrentState;
    
    // 是否已结束
    bool ended = Mission.Current.MissionEnded;
    
    // 当前时间
    float time = Mission.Current.CurrentTime;
    
    // 所有 Agent（只读）
    foreach (Agent agent in Mission.Current.Agents)
    {
        // 只读遍历
    }
    
    // 所有 Agent（含已死亡）
    foreach (Agent agent in Mission.Current.AllAgents)
    {
        // 包含已移除的 Agent
    }
    
    // 查找特定 Behavior
    var myBehavior = Mission.Current.GetMissionBehavior<MyMissionBehavior>();
}
```

## 关键成员说明

### Mission 类关键成员

| 成员 | 用途 | 调用时机 |
|------|------|----------|
| `Mission.Current` | 静态属性，获取当前 Mission | 任何时刻，但只在 Continuing 状态安全 |
| `CurrentState` | 当前状态枚举 | 任何时刻 |
| `CurrentTime` | 战斗进行时间（秒） | Continuing 状态 |
| `Agents` | 活跃 Agent 列表（只读） | Continuing 状态 |
| `AllAgents` | 所有 Agent 列表（含已死亡，只读） | Continuing 状态 |
| `MainAgent` | 玩家控制的 Agent | Continuing 状态 |
| `Teams` | Team 集合 | Continuing 状态 |
| `MissionBehaviors` | Behavior 列表 | 任何时刻 |
| `MissionLogics` | Logic Behavior 列表 | 任何时刻 |
| `MissionEnded` | 是否已结束 | 任何时刻 |
| `IsLoadingFinished` | 场景是否加载完成 | Initializing 状态后 |
| `Scene` | 引擎场景引用 | Initializing 状态后 |
| `NeedsMemoryCleanup` | 是否需要清理内存 | 任何时刻 |

### MissionState 类关键成员

| 成员 | 用途 | 调用时机 |
|------|------|----------|
| `MissionState.Current` | 静态属性，获取当前 MissionState | 任何时刻 |
| `CurrentMission` | 当前 Mission 实例 | 任何时刻 |
| `MissionName` | 任务名称 | 任何时刻 |
| `Paused` | 是否暂停 | 任何时刻 |
| `Handler` | 任务系统处理器 | 任何时刻 |
| `OpenNew` | 静态工厂方法，创建新 Mission | 游戏逻辑需要新任务时 |

### MissionBehavior 类关键成员

| 成员 | 用途 | 调用时机 |
|------|------|----------|
| `Mission` | 所属 Mission 实例 | OnCreated 之后 |
| `BehaviorType` | Behavior 类型（Logic/Other/Network） | 任何时刻 |
| `DebugInput` | 调试输入上下文 | 任何时刻 |

### MissionBehavior 生命周期回调

| 回调 | 调用时机 | 能安全做的事 |
|------|----------|-------------|
| `OnAfterMissionCreated` | Behavior 创建后，场景加载前 | 设置初始状态，不能访问 Agent |
| `OnCreated` | Behavior 加入 Mission 时 | 缓存 Mission 引用 |
| `OnBehaviorInitialize` | 场景加载完成后 | 访问 Agent、Team |
| `EarlyStart` | AfterStart 早期 | 初始化逻辑 |
| `AfterStart` | AfterStart 晚期 | 最终初始化 |
| `OnMissionTick` | 每帧 | 战斗逻辑 |
| `OnPreMissionTick` | MissionTick 前 | 预处理 |
| `OnFixedMissionTick` | 固定时间步长 | 确定性逻辑 |
| `OnAgentCreated` | Agent 创建时 | 初始化 Agent 相关状态 |
| `OnAgentRemoved` | Agent 从活跃列表移除时 | 处理死亡/移除 |
| `OnAgentDeleted` | Agent 从所有列表移除时 | 清理引用 |
| `OnEndMissionInternal` | 任务结束内部 | 清理 |
| `OnEndMission` | 任务结束 | 最终清理 |
| `OnRemoveBehavior` | Behavior 移除时 | 清理 |

## 常见误用

1. **在 `OnAfterMissionCreated` 中访问 Agent**。此时场景还未加载，`Mission.Current.Agents` 为空。必须等到 `OnBehaviorInitialize` 或 `AfterStart` 才能安全访问 Agent。

2. **在 `OnMissionTick` 中创建或销毁 Agent**。每帧调用频繁，频繁创建/销毁会导致性能问题和状态不一致。Agent 的创建和销毁应由游戏逻辑在特定时刻触发。

3. **在 `OnAgentRemoved` 中访问已移除 Agent 的 Team**。Agent 已从 Team 移除，`agent.Team` 可能为 null。应在 `OnEarlyAgentRemoved` 中缓存 Team 引用。

4. **在 `OnEndMission` 中保存数据到 Campaign**。此时 Mission 即将销毁，Campaign 状态可能已切换。应在 `OnEndMissionInternal` 或更早的回调中保存。

5. **忘记 `Mission.Current` 可能为 null**。在 Mission 外部（如 Campaign 逻辑中）访问 `Mission.Current` 时，必须检查 null，因为当前可能不在任务中。

6. **在 `OnMissionTick` 中执行耗时操作**。每帧调用，耗时操作会阻塞主线程。应使用 `OnFixedMissionTick` 或将操作分散到多帧。

7. **混淆 `Agents` 和 `AllAgents`**。`Agents` 只包含活跃 Agent，`AllAgents` 包含所有（含已死亡）。遍历 `AllAgents` 时可能访问到已移除的 Agent，需要检查 `agent.IsActive()`。

## 节 schema 声明

本页使用架构 hub 页形态，节 → 规范六节映射如下：

| 实际节 | 承担的规范节 |
|--------|-------------|
| `## 一句话定位` | 概述 |
| `## 心智模型` | 心智模型 |
| `## 真实最小示例` | 怎么用 + 真实示例 |
| `## 关键成员说明` | 关键成员（逐成员说明用途） |
| `## 常见误用` | 心智模型（何时不要用）的展开 |
| `## 节 schema 声明` | 元数据 |
| `## 导航` | 参见 |

## 导航

- [↑ 架构总览](../)
- [↔ 模块系统](../module-system) · [↔ GameModel 装饰模式](../gamemodel-decorator) · [↔ 存档系统](../save-system) · [↔ 崩溃与存档边界](../crash-boundaries)
- 相关类页：[Mission](../../api/mission/Mission/) · [MissionBehavior](../../api/mission/MissionBehavior/) · [Agent](../../api/mission/Agent/) · [MissionState](../../api/mission-ext/MissionState/)
