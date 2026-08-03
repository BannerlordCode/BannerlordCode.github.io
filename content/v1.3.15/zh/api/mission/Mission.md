---
title: "Mission"
description: "当前战斗或场景的运行时容器：管理 Agent、Team、Formation、MissionBehavior 和场景清理。"
---
# Mission

**Namespace:** `TaleWorlds.MountAndBlade`  
**Module:** `TaleWorlds.MountAndBlade`  
**Type:** `public sealed class Mission : DotNetObject, IMission`  
**Base:** `DotNetObject`, `IMission`  
**Source:** `TaleWorlds.MountAndBlade/Mission.cs`

## 一句话职责

它把一个正在运行的战斗、竞技场、城镇场景或其他任务场景的原生资源、运行状态和所有场景对象绑定在一起，并在 `Mission.Current` 作用域内驱动行为、单位、队伍、编队和最终清理。

## 心智模型

`Mission` 是 **Mission 层的短寿命运行时容器**，不是战役世界对象，也不是可长期保存的服务。

- 引擎通过 `MissionState.OpenNew` 创建任务，并把行为工厂返回的 `MissionBehavior` 集合交给新 Mission；模组通常不应自己 `new Mission`。
- `Mission.Initialize` 把当前实例设为 `Mission.Current`。进入另一场景后会有新的实例，旧实例会经过 `EndMissionInternal` 和 `OnMissionStateFinalize` 清理。
- `MissionBehaviors` 是所有附加行为；其中 `BehaviorType == Logic` 的 `MissionLogic` 还会进入 `MissionLogics`，供结束判定轮询。
- `Agent`、`Team` 和 `Formation` 都属于当前场景。它们能读到实时状态，但不能跨 Mission 缓存。

战役层的 `Campaign`、`MapEvent` 和 `Hero` 可以决定为什么进入一场战斗，却不拥有这场战斗里的临时 Agent。需要跨场景保存的数据应写回战役对象或存档系统，而不是挂在 Mission 上。

## 访问与状态边界

```csharp
Mission mission = Mission.Current;
if (mission == null || mission.CurrentState != Mission.State.Continuing)
{
    return;
}

Agent mainAgent = mission.MainAgent;
Team playerTeam = mission.PlayerTeam;
if (mainAgent == null || playerTeam == null || !mainAgent.IsActive())
{
    return;
}

MissionBehavior behavior = mission.GetMissionBehavior<MyMissionBehavior>();
```

`Mission.Current` 只能回答“当前帧是否有可用的场景”。菜单、大地图、加载阶段和 Mission 结束后的回调都可能得到 `null` 或一个正在结束的实例。先保存局部 `mission`，再在同一段操作中使用它，可以避免多次读取静态入口时跨过场景切换。

## 关键成员与调用时机

| 成员 | 什么时候使用 | 重要副作用或边界 |
|---|---|---|
| `Current` | 在 MissionBehavior 的回调、UI 任务回调或已确认的 Mission 作用域内取得当前实例 | 可能为 `null`；不要把它作为战役级单例保存 |
| `CurrentState`、`Mode`、`CurrentTime` | 判断初始化、部署、持续运行、结束和模式切换 | `CurrentTime` 是当前 Mission 时间，不是战役时间 |
| `Agents`、`AllAgents` | `Agents` 用于当前活动集合；`AllAgents` 用于仍被 Mission 记录的全部 Agent | Agent 可能随后进入 removed/deleted 状态；遍历时不要把引用交给下一场 Mission |
| `Teams`、`PlayerTeam`、`PlayerEnemyTeam` | 找到当前阵营和其编队 | Team/Formation 会在 teardown 时清空；不要用固定下标猜阵营 |
| `MissionBehaviors`、`MissionLogics` | 查询已注册行为或理解结束判定顺序 | 运行中改集合会影响当帧回调和结束检查；优先在创建工厂中注册 |
| `GetMissionBehavior<T>()` | 从当前 Mission 找已注册的具体 behavior | 找不到时返回 `null`；不能把 `MissionObject` 当成 behavior 获取 |
| `AddMissionBehavior`、`RemoveMissionBehavior` | 只有确实需要运行时插拔时使用 | 添加会设置 behavior 的 `Mission` 并调用 `OnCreated`；移除会调用 `OnRemoveBehavior`，再把 `Mission` 置空 |
| `EndMission`、`EndMissionAsVictorious`、`EndMissionAsDefeated` | 任务目标已完成或明确要结束场景时使用 | 结束是状态转换，不是立即销毁；后续仍会经过逻辑结果、behavior 清理和原生资源释放 |

## 真实的行为注册路径

源码中的 `SandBoxMissions.OpenTownCenterMission` 使用 `MissionState.OpenNew`，把 `MissionBehavior` 数组作为 `InitializeMissionBehaviorsDelegate` 返回值。自定义 Mission 可以沿用同一条路径：

```csharp
Mission mission = MissionState.OpenNew(
    "TownCenter",
    SandBoxMissions.CreateSandBoxMissionInitializerRecord(
        scene,
        "",
        doNotUseLoadingScreen: false,
        (DecalAtlasGroup)3),
    (Mission currentMission) => new MissionBehavior[]
    {
        new CampaignMissionComponent(),
        new BasicLeaveMissionLogic(),
        new MyMissionBehavior()
    },
    addDefaultMissionBehaviors: true,
    needsMemoryCleanup: true);
```

如果已经在场景中，源码使用的运行时入口是：

```csharp
Mission mission = Mission.Current;
if (mission != null && mission.CurrentState == Mission.State.Continuing)
{
    mission.AddMissionBehavior(new MyMissionBehavior());
}
```

`MissionGameStarter` 不是 `TaleWorlds.MountAndBlade` 源码中的 Mission 注册类型；不要把战役的 `CampaignGameStarter.AddBehavior` 例子复制到 Mission 页。运行时添加 behavior 也不会回放已经错过的完整启动阶段，因此依赖 `OnBehaviorInitialize` 的行为应走 `OpenNew` 工厂。

## 依赖关系：Agent、Team 与场景对象

- [`Agent`](../Agent/) 是场景中的单个单位，受 Mission 创建和移除流程驱动。
- [`Team`](../Team/) 是阵营容器；它拥有 `Formation` 集合、OrderController 和 Team AI。
- [`Formation`](../Formation/) 是 Team 内部的编队状态和指令边界。
- [`MissionBehavior`](../MissionBehavior/) 接收 Mission 的 Agent、Team、tick 和 teardown 回调。
- [`MissionLogic`](../../mission-ext/MissionLogic/) 是参与 Mission 结束裁决的 behavior 子类。
- [`MissionObject`](../../mission-ext/MissionObject/) 是门、攻城器械、触发器等场景对象，不应通过 `GetMissionBehavior<T>` 获取。

## 风险与 teardown

1. **空入口风险：** 在 `Mission.Current == null` 时读取 `Scene`、`Teams` 或 `MainAgent` 会崩溃；在结束/加载阶段还要检查 `CurrentState`。
2. **旧引用风险：** `EndMissionInternal` 会通知 behaviors，移除 Agent，清理 Team 和 MissionObject，最后释放原生 Mission；清理后继续访问旧 Agent、Team、Formation 或 Scene 可能崩溃或读到无效原生句柄。
3. **死亡回调风险：** `OnAgentRemoved` 发生在 Agent 已从活动 Team 集合停用之后。应立即读取需要的身份/阵营信息，不能把被移除 Agent 作为长期状态保存。
4. **结束竞态：** `EndMission` 只把状态推进到结束流程。不要在 `OnEndMissionInternal` 中重新加入行为、创建依赖旧 Scene 的对象，或把场景对象写入 Campaign 存档。
5. **集合修改风险：** tick 和 Agent 通知正在遍历 `MissionBehaviors`。在回调里直接增删多个 behavior 可能改变同一帧的调用集合；能在创建工厂注册的行为不要延迟到运行时。

## 跨版本提示

- 1.3.15 与 1.4.5 都使用 `Mission.Current`、`MissionState.OpenNew`、`AddMissionBehavior` 和 `InitializeStartingBehaviors` 这条核心路径。
- 1.4.5 的 `Mission` 源码明确显示结束时会清理 Agent、Team、MissionObject，并把当前 Mission 置空；跨版本代码都应按“单场景、短寿命”处理引用。
- 业务代码应依赖公开的 `Mission`/`MissionBehavior` API，不要依赖反编译文件中的私有字段或原生指针。

## 导航

- [↑ Mission API 模块](../)
- [↔ MissionBehavior](../MissionBehavior/)
- [↔ Agent](../Agent/) · [Team](../Team/) · [Formation](../Formation/)
- [↓ MissionLogic](../../mission-ext/MissionLogic/)
- [架构：崩溃与存档边界](../../../architecture/crash-boundaries/)
