---
title: "UsableMachine"
description: "由场景驱动的 Mission 机器宿主：收集 StandingPoint，协调 Agent 分遣槽位，并委托具体机器的 AI 行为。"
---
# UsableMachine

**命名空间：** `TaleWorlds.MountAndBlade`  
**模块：** `TaleWorlds.MountAndBlade`  
**类型：** `public abstract class UsableMachine : SynchedMissionObject, IFocusable, IOrderable, IDetachment`  
**基类：** [`SynchedMissionObject`](../SynchedMissionObject)  
**源码：** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/UsableMachine.cs`

## 这类对象做什么

这是 Mission 场景中机器实体的所有者：它发现实体上的 [`StandingPoint`](../StandingPoint)，把这些点暴露为分遣槽位，并把 Agent 移动、使用、同步和清理交给具体机器。

## 概述

`UsableMachine` 是梯子、攻城器械、城门、石堆等场景组件的抽象基类。它不定义动作文本或机器动画；派生类提供这些契约，并通常覆盖 `CreateAIBehaviorObject()` 返回机器专用的 [`UsableMachineAIBase`](../UsableMachineAIBase)。基类统一管理站位集合和占用规则，使所有机器都能参与 Team 的分遣评估。

## 心智模型

应把可用机器理解为**带场景几何的分遣对象**。`OnInit` 会从带 `machine_parent` 标签的父实体，或机器自身实体递归收集 `StandingPoint`，按实体标签分类驾驶点与弹药点，初始化防守 Agent 列表，并记录活动等待实体。随后 `IDetachment` 实现按阵营、占用、Agent 资格、导航网格和装弹状态过滤这些点。

`Ai` 属性是延迟创建的：第一次读取时调用派生类的 `CreateAIBehaviorObject()`。返回的 AI 对象通过受保护构造函数绑定到这台机器，并由宿主驱动 tick。基类实现若返回 `null`，表示该派生机器没有专用 AI；这不同于调用方手动创建一个脱离机器的 AI。

这是实时 Mission 对象，不是 Campaign 存档实体。它必须先挂载到场景 `GameEntity`，才能读取 `StandingPoints`、`GameEntity`、`Mission` 或原生物理状态。

## 依赖关系

- [`SynchedMissionObject`](../SynchedMissionObject) 提供场景注册以及可见性/物理同步边界。
- [`StandingPoint`](../StandingPoint) 提供从实体层级收集到的交互槽位。
- [`UsableMachineAIBase`](../UsableMachineAIBase) 负责机器专用的 AI 移动、替代点和停止逻辑。
- [`Mission`](../../mission/Mission)、[`Agent`](../../mission/Agent)、[`Team`](../Team)、[`Formation`](../../mission/Formation) 提供实时分遣参与者。
- [`UsableMissionObjectComponent`](../UsableMissionObjectComponent) 接收机器级添加、tick、停用、重置、编辑器和移除回调。

## 何时使用，何时不用

**适合使用：**

- 场景对象有一个或多个 `StandingPoint` 子实体，需要被玩家或 AI 阵形使用。
- 自定义机器需要一个统一位置处理组件生命周期、同步物理、分遣选择和 Mission 清理。
- 派生类能够实现 `GetActionTextForStandingPoint`、`GetDescriptionText` 及机器专用 AI 工厂。

**不适合使用：**

- 只有一个交互位置、没有机器级分遣；使用 [`StandingPoint`](../StandingPoint)。
- 需要 Mission 范围的规则或回调；使用 [`MissionBehavior`](../../mission/MissionBehavior) 或 [`MissionLogic`](../MissionLogic)。
- 状态必须跨存档或 Campaign 转场保留。机器会随 Mission 拆除，不是持久化边界。

## 发现与生命周期

`CollectAndSetStandingPoints()` 在父实体有效且带 `machine_parent` 标签时使用父实体，否则从机器实体递归收集。`OnInit` 识别第一个带 `Pilot` 标签的点，把带 `ammopickup` 标签的点加入 `AmmoPickUpPoints`，初始化每个点的防守 Agent，并选择第一个带 `Wait` 标签的子实体作为 `ActiveWaitStandingPoint`。

当组件需要 tick、权威端正在拾取弹药或实体正在下沉时，机器会请求 tick。`OnTick` 在 `MakeVisibilityCheck` 开启且实体不可见时跳过后续处理；实体越过水面时调用 `Disable`，结束的弹药移动会清除 `CurrentlyUsedAmmoPickUpPoint`，然后逐个 tick 附加组件。

`OnMissionEnded` 停止使用者并停用所有站位点。`Disable` 更强：停止当前和移动中的 Agent，销毁 Team 分遣注册，停用非弹药点，通知组件，可选地移除 tick，最后调用 `SetDisabled`。`OnRemoved` 通过 `OnRemoved` 通知组件释放引用，不应在这里开始新的 Agent 分配。

## 点选择与分遣

- `GetVacantStandingPointForAI` 在有驾驶点且有效时优先返回驾驶点，然后按距离选择其他有效点；正在装弹时会保护武器要求点，避免弹药点绕过机器状态。
- `GetValidVacantReachableStandingPointForAgent` 与 `GetValidStandingPointForAgentWithoutDistanceCheck` 返回 `WeakGameEntity` 而不是 `StandingPoint`，分别用于不同的移动查询。
- `GetTargetStandingPointOfAIAgent` 找到 Agent 当前正在移动到的点。
- `IsStandingPointAvailableForAgent` 检查停用、占用/移动归属、点资格以及弹药加载排除规则。
- 显式 `IDetachment` 方法计算阵营权重、槽位代价、候选 Agent、占用、阵形关系和脚本移动；`AddAgentAtSlotIndex` 会先移除冲突的移动或防守 Agent，再分配目标槽位。

`GetBestPointAlternativeTo` 默认返回原点。弹药系统等机器可以覆盖它；`UsableMachineAIBase` 只有在站位点报告 `HasAlternative()` 且 Agent 进入 `IsInRangeToCheckAlternativePoints` 范围时才询问替代点。

## 状态与机器策略

- `StandingPoints`、`PilotStandingPoint`、`PilotAgent`、`WaitEntity`、`WaitFrame` 在 `OnInit` 后暴露场景内的角色。
- `Ai` 缓存 `CreateAIBehaviorObject` 的结果；`SetAI` 替换该缓存，应由机器所有者使用。
- `CurrentlyUsedAmmoPickUpPoint` 在 Agent 移向弹药点时驱动机器 tick。
- `UserCountNotInStruckAction` 与 `UserCountIncludingInStruckAction` 采用不同的受击动作口径统计当前使用者。
- `IsDestroyed` 反映 `DestructionComponent`；`IsDeactivated` 还包含显式 `Deactivate()` 闩锁。
- `IsDisabledForBattleSideAI` 会拒绝基类停用、AI 停用或机器停用；设置 `EnemyRangeToStopUsing` 后，还会通过缓存的 `QueryData<bool>` 判断对应阵营附近是否有敌人。
- `Activate` 与 `Deactivate` 同时更新机器和每个点的 `IsDeactivated`；`SetIsDisabledForAI` 只影响 AI 选择，不销毁场景实体。

## 真实获取示例

机器从当前 Mission 的活动对象集合取得。下面让机器为一个真实 Agent 选择站位点，移动和占用仍由分遣宿主负责：

```csharp
using TaleWorlds.MountAndBlade;

static StandingPoint FindMachinePointForAgent(Agent agent)
{
    Mission mission = Mission.Current;
    if (mission == null || agent == null)
    {
        return null;
    }

    foreach (UsableMachine machine in
             mission.ActiveMissionObjects.FindAllWithType<UsableMachine>())
    {
        BattleSideEnum side = agent.Team?.Side ?? BattleSideEnum.None;
        if (!machine.IsDisabledForBattleSideAI(side))
        {
            StandingPoint point = machine.GetVacantStandingPointForAI(agent);
            if (point != null)
            {
                return point;
            }
        }
    }

    return null;
}
```

不要手动调用 `OnInit`、`OnMissionEnded` 或显式 `IDetachment` 方法来模拟生命周期；这些转换由 Mission 和 Team 系统拥有。

## 风险与崩溃边界

- `StandingPoints` 在 `OnInit` 中填充；构造函数、场景挂载前或实体移除后读取都不安全。
- 派生机器的 `CreateAIBehaviorObject` 可以有意返回 `null`，所以不能假定所有抽象/基类实例都有 AI 控制器。
- `Disable` 会影响当前使用者、分遣注册、点停用、组件回调和 tick。只能由掌握机器生命周期的所有者调用。
- `SetPhysicsStateSynched` 还会切换导航面能力并使所有点的世界位置缓存失效。在客户端或错误阶段修改物理，可能导致移动状态与原生场景不同步。
- `CurrentlyUsedAmmoPickUpPoint`、`UserFormations` 和站位点 Agent 引用都属于当前 Mission，结束前必须停止或清理，不能当作可存档引用。
- 机器可用不代表某个 Agent 一定能使用某个槽位；Team 限制和点级武器/角色规则仍会拒绝候选者。

## 参见与双向导航

- ↑ 父级：[Mission-ext 模块索引](../)
- ↔ 同级：[StandingPoint](../StandingPoint) · [UsableMachineAIBase](../UsableMachineAIBase) · [SynchedMissionObject](../SynchedMissionObject)
- 组件：[UsableMissionObjectComponent](../UsableMissionObjectComponent)
- Mission 上下文：[Mission](../../mission/Mission) · [MissionBehavior](../../mission/MissionBehavior) · [Agent](../../mission/Agent)
- 具体消费者：[Ballista](../Ballista) · [SiegeTower](../SiegeTower) · [StonePile](../StonePile)
- 中文/English：[UsableMachine](../../../../en/api/mission-ext/UsableMachine)
