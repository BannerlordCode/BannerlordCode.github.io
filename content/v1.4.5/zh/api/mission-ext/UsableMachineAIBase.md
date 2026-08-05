---
title: "UsableMachineAIBase"
description: "Mission 范围内的机器 AI 协调器：驱动 Agent 前往 StandingPoint，切换替代点，并停止失效使用者。"
---
# UsableMachineAIBase

**命名空间：** `TaleWorlds.MountAndBlade`  
**模块：** `TaleWorlds.MountAndBlade`  
**类型：** `public abstract class UsableMachineAIBase`  
**基类：** `object`  
**源码：** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/UsableMachineAIBase.cs`

## 这类对象做什么

这是 [`UsableMachine`](../UsableMachine) 的 AI 侧协调器：驱动 Agent 移向 [`StandingPoint`](../StandingPoint)，到达且可用时开始使用，并在机器状态改变时停止或改向。

## 概述

基类不是全局 AI 服务。具体机器通过 `CreateAIBehaviorObject()` 创建它，并把 `this` 传给受保护构造函数。控制器保存所属机器引用，读取该机器的站位点和策略，通常由 Mission 的机器/Team AI 循环驱动。

## 心智模型

`Tick` 是一次**状态协调**，不是路径规划器。它遍历机器持有的每个点，处理三类状态：Agent 已经使用某点、Agent 正在移动到某点、点上记录的防守 Agent。动作完成、机器对 Team 阵营不可用或 Agent 正在逃跑时，它会停止使用者；对移动中的 Agent，它可能选择替代点、更新锁定目标帧，或在可达且可使用时调用 `UseGameObject`。

静态选择 helper 是移动开始前的分配边界。它会排除已使用、不活跃、逃跑、正在与其他物体交互、脱离阵形或被点禁用的 Agent，并按站位点评分选择候选者。`TeleportUserAgentsToMachine` 是特殊同步路径，可以把 AI Agent 移到目标帧，并在服务器/记录器上广播传送消息。

## 依赖关系

- [`UsableMachine`](../UsableMachine) 持有点、阵营策略、替代点、挂接标志和等待实体，控制器读取这些状态。
- [`StandingPoint`](../StandingPoint) 提供使用状态、目标帧、替代标志、可达性和评分。
- [`Agent`](../../mission/Agent)、[`Formation`](../../mission/Formation)、[`Team`](../Team) 是传给 `Tick` 和选择 helper 的实时参与者。
- [`Mission`](../../mission/Mission) 驱动生命周期；[`BatteringRamAI`](../BatteringRamAI) 与 [`SiegeTowerAI`](../SiegeTowerAI) 等具体控制器扩展完成条件和移动顺序。

## 何时使用，何时不用

**适合使用：**

- 自定义 `UsableMachine` 需要超出基类协调循环的 AI 行为。
- 机器 AI 需要定义 `HasActionCompleted`、`NextOrder`、脚本帧标志或停止策略，同时保留共同站位过滤。
- 代码需要通过 `machine.Ai` 检查已挂载在实时机器上的 AI 对象。

**不适合使用：**

- 只需要为玩家或单个 Agent 找点；使用机器公开选择方法，不要自行驱动 `Tick`。
- 需要通用 Agent 行为或阵形命令；使用 [`MissionBehavior`](../../mission/MissionBehavior)、Formation 或 Team AI 层。
- 需要持久 Campaign 服务。该控制器随 Mission 机器一起销毁。

## 协调与停止行为

`OnTick` 是 `Tick` 背后的受保护扩展点。对已经使用的 Agent，当 `HasActionCompleted`、机器对 Team 阵营不可用或 Agent 逃跑时调用 `HandleAgentStopUsingStandingPoint`。对移动中的 Agent，只有当前点允许替代且 Agent 足够接近时，才先通过 `GetBestPointAlternativeTo` 搜索；若替代点是弹药点，还会更新 `CurrentlyUsedAmmoPickUpPoint`。

当点锁定帧或位置时，控制器会在 Agent 位置发生变化时刷新脚本目标。点启用、空闲且可达后，它调用 `UseGameObject`，并移除该点禁止的脚本标志。等待实体改变时，正在跟随旧等待实体的阵形会收到下一条移动命令；`SiegeTowerAI` 在这里使用自己的 `NextOrder` 覆盖值。

`GetStopUsingStandingPointFlags` 询问机器停止后是否把 Agent 自动挂回阵形，或让它继续防守机器。`StopUsingStandingPoint` 从点的当前使用者或移动者中选出 Agent，再按该策略处理。自定义停止覆盖必须保留机器所有权和 Agent 生命周期假设。

## 选择 helper

- `GetSuitableAgentForStandingPoint(UsableMachine, StandingPoint, IEnumerable<Agent>, List<Agent>)` 过滤实时 AI 候选者，并返回 `GetUsageScoreForAgent` 最高的 Agent。
- 带权重的重载还检查分遣权重，并排除被机器装弹规则占用的候选者。
- `TeleportUserAgentsToMachine` 在 AI 移动仍有效时最多重复十轮，根据 `GetTargetStandingPointOfAIAgent` 更新位置和方向；只有服务器/记录器路径发送 `AgentTeleportToFrame`。
- `GetScriptedFrameFlags` 允许具体 AI 增加 `NoAttack` 等标志；基类值为 `None`。
- `HasActionCompleted` 默认 `false`，`NextOrder` 默认 `MovementOrderStop`。

构造函数会把机器当前 `WaitEntity` 保存到 `_lastActiveWaitStandingPoint`。该字段受保护，因此派生控制器可以使用机器关系，但不能脱离机器创建本类。

## 真实获取示例

Mission 打开后，可以从实时场景机器取得已经挂载的 AI。读取 `Ai` 会走具体机器的工厂；这里不调用 `Tick`，因为更新节奏由宿主拥有：

```csharp
using TaleWorlds.MountAndBlade;

static UsableMachineAIBase FindAIForAgent(Agent agent)
{
    Mission mission = Mission.Current;
    if (mission == null || agent == null)
    {
        return null;
    }

    foreach (UsableMachine machine in
             mission.ActiveMissionObjects.FindAllWithType<UsableMachine>())
    {
        if (machine.GetVacantStandingPointForAI(agent) != null)
        {
            return machine.Ai;
        }
    }

    return null;
}
```

源码中的具体消费者遵循相同工厂边界，例如 `Ballista.CreateAIBehaviorObject()` 返回 `new BallistaAI(this)`，`BatteringRam.CreateAIBehaviorObject()` 返回 `new BatteringRamAI(this)`。这里的 `new` 属于机器工厂，而不是缺少所属机器的调用方。

## 风险与崩溃边界

- `Tick` 假定所属机器、站位集合和 Mission 参与者都有效。在第二个自定义循环中手动调用，可能重复推进移动与占用。
- 等待实体协调的末段需要真实的 `potentialUsersTeam` 及其阵形。不要把空 Team 传入会走到该循环的宿主路径。
- `TeleportUserAgentsToMachine` 修改原生 Agent 位置并有网络副作用，只能在权威同步阶段使用，不是通用传送捷径。
- 停止处理会读取 Agent Team、逃跑状态、阵形和机器策略。Agent 移除或 Mission 结束后调用，可能访问失效引擎对象。
- 替代点选择不会绕过 `StandingPoint.IsDisabledForAgent` 或机器装弹规则。自定义覆盖若返回无效点，会让 Agent 卡住或反复改向。
- AI 控制器没有存档契约。机器移除时应清理外部引用，让 Mission 释放控制器。

## 参见与双向导航

- ↑ 父级：[Mission-ext 模块索引](../)
- ↔ 所属者：[UsableMachine](../UsableMachine) · [StandingPoint](../StandingPoint)
- 具体 AI：[BatteringRamAI](../BatteringRamAI) · [BallistaAI](../BallistaAI) · [SiegeTowerAI](../SiegeTowerAI)
- 运行时参与者：[Mission](../../mission/Mission) · [Agent](../../mission/Agent) · [Formation](../../mission/Formation) · [Team](../Team)
- 中文/English：[UsableMachineAIBase](../../../../en/api/mission-ext/UsableMachineAIBase)
