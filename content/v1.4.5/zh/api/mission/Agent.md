---
title: "Agent"
description: "战场中一个可被操控、编入阵形、参与战斗并经历创建到移除生命周期的运行时单位。"
---

# Agent

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public sealed class Agent : DotNetObject, IAgent, IFocusable, IUsable, IFormationUnit, ITrackableBase`
**Base:** `DotNetObject`
**Source:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/Agent.cs`

## 一句话职责

它把一个已经进入 Mission 的人、马或其他战斗实体连接到原生实体、装备、AI 控制器、Team、Formation 和战斗回调，并定义该实例从创建、构建、活动到死亡、删除和 Mission 清理的有效边界。

## 概述

在一场 Mission 中，`Agent` 是从生成、构建、加入活动集合到死亡或移除的运行时战斗实体。它把 `Character` 与 `Origin` 提供的身份转换成可被原生引擎驱动的移动、动画、装备、生命和 AI 状态，并把 Team、Formation、MissionBehavior 与组件生命周期连接起来。理解这些时序比记忆单个成员签名更重要：同一个 Agent 只能在所属 Mission 仍然有效时使用，不能当作 Campaign 存档对象。

## 心智模型

### 它是什么

`Agent` 是 Mount & Blade 战场层的短生命周期对象，不是 Campaign 层的 `Hero`，也不是队伍编制中的兵力数字。`Mission` 创建它，`AgentBuildData` 决定它的角色、Team、Formation、出生位置、装备和 Origin；随后原生引擎驱动它移动、攻击、受伤、死亡和淡出。一个 `Agent` 通常只代表当前这一次 Mission 中的实体。

`Agent.Mission`、`Agent.Team` 和 `Agent.Formation` 是它在运行时上下文中的反向引用。`Team` 代表敌我阵营与命令系统，`Formation` 代表阵形与编队 AI；Formation 不是 Agent 的所有者，而是 Agent 被编入后管理它的单位位置、订单和跟随关系。坐骑是另一种 Agent，通过骑手的 `MountAgent` 与坐骑的 `RiderAgent` 相连。

### 创建、构建与拥有者

1. `Mission.CreateAgent` 创建对象并立即遍历 `MissionBehaviors` 调用 `OnAgentCreated(agent)`。此时对象已经有 `Index`、`Mission`、原生指针和 `Character`，但还没有完成装备、Formation 编入和活动集合注册。
2. `Mission.SpawnTroop` 等入口构造 `AgentBuildData`，将 `Team`、`Formation`、`IAgentOriginBase`、出生框架、是否增援和装备偏好放进去。战役中的起源对象通常由 `PartyAgentOrigin` 或其他 `IAgentOriginBase` 实现持有。
3. `Mission.BuildAgent` 调用 `Agent.Build`。`Build` 设置 `HasBeenBuilt`，选择 Controller，给非坐骑设置 Formation，初始化 MissionEquipment 和 AI 属性。随后 Mission 装备武器、初始化组件，再把 Agent 加入 `Mission.Agents` 与 `Mission.AllAgents`，最后调用各个 behavior 的 `OnAgentBuild`。
4. 因此，组件应在 `OnAgentCreated` 添加，依赖装备、Formation 或已初始化视觉资源的逻辑应等到 `OnAgentBuild` 或更晚的 Mission 回调。不要在构造时自行 `new Agent`；构造函数是内部的，原生指针和 Mission 注册必须由引擎完成。

### 活动、死亡与移除

- `Mission.Agents` 是活动集合；`Agent.IsActive()` 或 `State == AgentState.Active` 才表示当前可参与模拟。死亡、昏迷、溃逃或其他引擎移除都会使它离开这个集合。
- 原生回调进入 `Mission.OnAgentRemoved` 后，Mission 先写入 `State`、停用 Team、调用所有 behavior 的 `OnEarlyAgentRemoved` 和 `OnAgentRemoved`，然后从活动集合移除并调用 `Agent.OnRemove`。`OnRemove` 会通知 `Origin`、Team、Formation 和每个 `AgentComponent`。
- 被移除的对象可能仍留在 `Mission.AllAgents`，直到 `OnAgentDeleted` 或 Mission 重置/结束。最终 `Agent.OnDelete` 标记删除，`Mission` 清空对象指针；此后继续读 `Mission`、`Team`、`Formation`、`Equipment` 或 `AgentVisuals` 都是不安全的。
- `Die` 把 Blow 交给原生战斗系统，`MakeDead` 执行死亡表现；它们不是“通知 mod 某人死了”的推荐入口。观察死亡、击杀来源和移除时机应在 `MissionBehavior.OnAgentRemoved` 中完成。

### 什么时候用 / 什么时候不要用

**适合使用：**

- 在 `MissionBehavior` / `MissionLogic` 的 `OnAgentCreated`、`OnAgentBuild`、`OnMissionTick`、`OnAgentRemoved` 中观察或调整当前战场实体。
- 读取场上单位的位置、阵营、阵形、装备、生命、控制器和 AI 状态，或在明确的 Mission 阶段调用动作、移动和装备 API。
- 为每个 Agent 添加短生命周期的 `AgentComponent`，让组件随着 Agent 的创建、初始化和移除得到通知。

**不适合使用：**

- 用它代替 Campaign 中的 `Hero`、`MobileParty` 或兵力 roster。Agent 被移除不会自动等同于你可以安全地修改 Campaign 数据；应让真实的 Origin、Campaign behavior 和结果逻辑处理持久化变化。
- 在大地图、存档加载、`Mission.Current == null` 或 Mission 已结束时缓存并访问 Agent。需要跨场景保存的是可存档的 Campaign 身份或 `StringId`，不是原生 Agent 引用。
- 直接修改 `Team` 内部列表或把一个 Agent 塞进 Formation 的内部 arrangement。使用 `Agent.SetTeam`、`Agent.Formation` 或 Team/Formation 的公开入口，让它们同步索引、订单、AI 和网络状态。

## 依赖关系

`Agent` 的上游是 [Mission](../Mission) 的创建与 tick；它由 [MissionBehavior](../MissionBehavior) 的生命周期回调观察，并向下连接到 [Team](../../mission-ext/Team)、[Formation](../Formation) 和 [AgentComponent](../../mission-ext/AgentComponent)。战役来源还会通过 [CampaignAgentComponent](../../campaign-ext/CampaignAgentComponent) 把场上实体与 Campaign 语义连接起来。

### 关键关系

- **上游创建：** `Mission.CreateAgent` → `OnAgentCreated` → `SpawnTroop` / `SpawnMonster` → `BuildAgent` → `OnAgentBuild`。
- **集合所有权：** `Mission.Agents` 只描述当前活动单位；`Mission.AllAgents` 在删除前还可能保留已移除单位。`Team.TeamAgents` 是阵营成员集合，`Team.ActiveAgents` 是阵营当前活动集合。
- **编队关系：** `Agent.Team` 指向阵营；`Agent.Formation` 指向该 Team 的一个 Formation。设置 Formation 会先从旧 Formation 移除，再向新 Formation 添加，并触发编队状态更新。
- **组件关系：** `Agent.AddComponent` 把组件挂到实体；构建时 `InitializeComponents`，移除时 `AgentComponent.OnAgentRemoved`。组件不能把 Agent 当成 Mission 结束后的永久引用。
- **战役关系：** `Origin.OnAgentRemoved(Health)` 是起源对象的收尾入口；战役任务通常还会通过 `CampaignAgentComponent` 处理主人 Party、导航和地点行为。

## 风险与崩溃边界

1. **Mission 结束后的悬空引用。** `OnAgentRemoved` 中可以读取被移除 Agent 的最后状态，但不能把它放进静态缓存、异步任务或下一场 Mission 使用。Mission 最终会调用 `OnDelete` 和 `Clear`，把 `Agent.Mission` 和原生指针清空。
2. **把 `Agents` 与 `AllAgents` 混为一谈。** `Agents` 遍历的是当前活动单位；死亡回调运行时对象可能还在 `AllAgents`，但它已不应被当作活动战斗者。统计存活人数时检查 `IsActive()`，处理死亡来源时使用 `OnAgentRemoved` 参数。
3. **错误阶段调用。** `OnAgentCreated` 早于装备和组件初始化，不能在那里依赖 `Equipment` 或 `AgentVisuals`；`OnAgentBuild` 之后才适合这些操作。`Mission.Current` 在 Mission 结束或 Campaign 大地图上可能为 `null`。
4. **死亡处理重复记账。** `Mission.OnAgentRemoved` 已经停用 Team、移除活动索引并调用 Origin/Components。若 mod 又无条件减少 Party roster，可能和 Origin 或 Campaign behavior 重复扣除兵力。
5. **Team/Formation 关系失配。** `SetTeam` 会更新 Team 列表并通知 `OnAgentTeamChanged`；`Formation` setter 会更新旧、新 Formation 的 arrangement 和订单。直接写内部集合会留下“Agent.Formation 指向 A、A 却不含该单位”的不一致状态。
6. **主线程与原生对象。** 位置、装备、动作、AI 和视觉 API 都绑定原生实体与 Mission tick。不要从后台线程调用 `SetActionChannel`、`SetMovementFlags`、`Formation` 或 `AgentVisuals`，也不要在 `MissionEnded` 后调用 `Die`、`MakeDead` 或 `SetTeam`。
7. **网络语义。** `Health`、`Controller`、`Formation`、`SetTeam` 等成员在服务器、客户端和回放中的同步规则不同。战役 mod 不应通过客户端直接伪造击杀或阵营变化；应在具有权威的 Mission 逻辑中调用 API。

## 成员要点

下面按 mod 实际使用时机分组，而不是列出整面签名表。

### 获取、身份与生命周期

- **`Mission` / `Index`：** `Mission` 是当前运行时容器，`Index` 是 Mission 内的引擎索引。只在 Agent 已由 Mission 创建且 Mission 尚未清理时使用；需要重新取得实体时，可在当前 Mission 中用 `Mission.FindAgentWithIndex`，不要跨 Mission 保存索引对应的 Agent。
- **`HasBeenBuilt`：** `false` 表示只创建了实体，还没完成装备、Controller、Formation 和组件初始化；依赖这些状态的代码应等待 `OnAgentBuild`。
- **`State`、`CurrentMortalityState`、`IsActive()`、`IsFadingOut()`、`IsRetreating()`：** 用于区分活动、死亡、昏迷、溃逃和淡出阶段。Tick 中先检查 `IsActive()`，移除回调中使用传入的 `agentState`，不要只用 `Health == 0` 推断全部死亡语义。
- **`Origin`、`Character`、`IsHero`：** `Character` 是这次 Mission 使用的 `BasicCharacterObject`，`Origin` 是把它和 Campaign/其他来源连接起来的对象；`IsHero` 只说明 Character 是否对应 Hero，不代表 Agent 可以脱离 Mission 长期保存。

### Mission、Team、Formation 与坐骑

- **`Team`：** 只读引用当前阵营。用 `SetTeam(Team team, bool sync)` 改队伍，它会更新双方活动/成员列表并广播 `OnAgentTeamChanged`；调用时必须保证 Agent 仍属于一个有效 Mission。
- **`Formation`：** 读写当前编队。赋值会调用旧 Formation 的 `RemoveUnit` 和新 Formation 的 `AddUnit`，并更新 detachment、目标编队、射击/骑乘订单。坐骑在构建时通常没有 Formation，不能假设所有 Agent 都非空。
- **`MountAgent` / `RiderAgent`：** 描述骑手和坐骑的互相引用。坐骑移除、下马和骑手死亡都会改变关系；在 `OnAgentRemoved` 后不要继续沿着旧的 mount/rider 链操作视觉或动作。
- **`Controller`：** `Player`、`AI` 或其他控制来源。切换 Controller 会改变主控 Agent、脱离状态并通知 MissionBehaviors；应在 Mission 运行期、确认 Agent 有效时切换。

### 生命、装备与战斗

- **`Health` / `HealthLimit` / `BaseHealthLimit`：** 当前生命与上限。设置生命会触发 `OnAgentHealthChanged`，服务器还可能同步客户端；它本身不是完整的击杀流程，不能用赋值替代原生 Blow、`Die` 和移除回调。
- **`OnAgentHealthChanged`：** 适合在已构建期间观察生命变化。订阅者应在自己的 MissionBehavior 结束或 Agent 移除时解除，避免保留跨场景对象。
- **`Equipment` / `SpawnEquipment` / `WieldedWeapon` / `WieldedOffhandWeapon`：** `SpawnEquipment` 是出生配置，`Equipment` 是构建后可变的战场装备；前者用于理解初始状态，后者用于当前武器和弹药。读取或修改装备应在 `OnAgentBuild` 之后。
- **`Die(Blow, KillInfo)` / `MakeDead(...)`：** 前者交给原生战斗结算，后者推进死亡表现。除非实现明确的战斗系统并能提供正确 Blow，否则不要直接调用它们来“删除” Agent。
- **`KillCount`、`LastBlowOwnerId`、`LastBlowAttackType`、`Damage`：** 用于战斗统计和击杀归因；击杀数由 `Mission.OnAgentRemoved` 在敌我 Team 不同且有 affector 时递增，不要在普通 UI tick 中自行重复加一。

### AI、移动与编队帧

- **`AIStateFlags`、`CommonAIComponent`、`HumanAIComponent`：** 读取或调整 AI 警戒、寻路和人形控制状态。组件可在 `OnAgentCreated` 添加，但必须等 `InitializeComponents` 后才依赖初始化完成的组件行为。
- **`MovementFlags`、`MovementInputVector`、`LookDirection`、`Frame`、`Velocity`：** 分别表示引擎移动输入、朝向、空间帧和速度。读取适合 Mission tick 或查询；写入应在主线程和正确的 Controller/AI 状态下进行。
- **`SetActionChannel`、`SetMaximumSpeedLimit`、`TrySetFormationFrame`：** 分别作用于动画通道、速度限制和编队位置。它们会影响原生模拟或 Formation 约束，适合在行为回调、任务动画或明确的编队阶段调用，不适合作为后台状态同步手段。
- **`AgentDrivenProperties`、`CharacterPowerCached`、`WalkSpeedCached`：** 是构建和模型初始化后使用的驱动属性/缓存。改变 Campaign 的角色数据不会自动刷新当前 Agent；需要重新初始化或重新生成实体时遵循 Mission 的模型和构建流程。

## 真实获取与调用示例

### 在真实 MissionBehavior 回调中添加组件

`Mission.CreateAgent` 会先调用每个 behavior 的 `OnAgentCreated`，之后 `Mission.BuildAgent` 才会执行 `Agent.Build` 和 `InitializeComponents`。SandBox 的 `CampaignMissionComponent` 正是利用这个时机把 `CampaignAgentComponent` 挂到每个新 Agent 上：

```csharp
using TaleWorlds.MountAndBlade;

public override void OnAgentCreated(Agent agent)
{
    base.OnAgentCreated(agent);
    agent.AddComponent(new CampaignAgentComponent(agent));
}
```

这个回调适合安装组件和记录身份，不适合读取已装备的 `Equipment`。如果需要在组件初始化完成后读取装备或 Formation，应把逻辑放进 `OnAgentBuild(Agent agent, Banner banner)` 或更晚的 Mission 回调。

### 通过 Mission.SpawnAgent 创建单位

动态加入场景时，mod 不构造 `Agent`，而是把真实的角色和 Team 放入 `AgentBuildData`，交给当前 Mission 完成创建与构建：

```csharp
AgentBuildData buildData = new AgentBuildData(Game.Current.PlayerTroop)
    .Team(Mission.Current.PlayerTeam)
    .InitialPosition(new Vec3(120f, 80f, 0f))
    .InitialDirection(Vec2.Forward);

Agent spawnedAgent = Mission.Current.SpawnAgent(buildData);
if (spawnedAgent != null && spawnedAgent.HasBeenBuilt)
{
    spawnedAgent.SetWatchState(Agent.WatchState.Alarmed);
}
```

`SpawnAgent` 会继续执行装备、视觉、组件和活动列表构建；需要区分“已创建”和“已构建”时分别使用 `OnAgentCreated` 与 `OnAgentBuild`。

### 从 Mission.Current 读取活动 Agent，并在移除时清理

`Mission.Current` 只在当前 Mission 存在；`Mission.Current.Agents` 是动态活动集合。下面的逻辑展示真实可用的获取路径，并在回调中只使用被移除者的状态，不缓存旧 Agent：

```csharp
using TaleWorlds.MountAndBlade;

public sealed class AgentMonitor : MissionLogic
{
    public override void OnMissionTick(float dt)
    {
        Mission mission = Mission.Current;
        if (mission == null || mission.MissionEnded)
        {
            return;
        }

        foreach (Agent agent in mission.Agents)
        {
            if (agent.IsActive() && agent.Team != null && agent.Formation != null)
            {
                Vec3 position = agent.Position;
                Formation formation = agent.Formation;
                _ = position;
                _ = formation;
            }
        }
    }

    public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent,
        AgentState agentState, KillingBlow killingBlow)
    {
        base.OnAgentRemoved(affectedAgent, affectorAgent, agentState, killingBlow);
        if (agentState == AgentState.Killed && affectorAgent != null)
        {
            int killerIndex = affectorAgent.Index;
            _ = killerIndex;
        }
    }
}
```

`OnAgentRemoved` 发生在 Agent 从 `Mission.Agents` 移除的收尾窗口；回调结束后不要把 `affectedAgent`、`affectorAgent` 或其 `Formation` 保存到下一场 Mission。若要处理战役兵力或地点后果，应交给对应 Origin/Campaign behavior，而不是在这个示例中直接改 roster。

## 版本注记

本文以 v1.4.5 的 `TaleWorlds.MountAndBlade` 源码为准。v1.3.x 也有相同的 Mission/Agent 分层，但具体的构建模型、网络同步和 Campaign 组件可能不同；跨版本 mod 应以目标版本的 `AgentBuildData`、`MissionBehavior` 回调签名和来源对象为准。

## 导航

- ↑ [Mission 模块首页](../)
- ↔ [Mission](../Mission) · [MissionBehavior](../MissionBehavior) · [Formation](../Formation)
- ↓ [Team](../../mission-ext/Team) · [AgentComponent](../../mission-ext/AgentComponent) · [CampaignAgentComponent](../../campaign-ext/CampaignAgentComponent)
- 相关上游：[Campaign](../../campaign/Campaign) · [MBSubModuleBase](../../core/MBSubModuleBase)
- 风险专题：[崩溃边界](../../architecture/crash-boundary) · [文档契约](../../architecture/doc-contract)
