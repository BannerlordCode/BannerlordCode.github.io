---
title: "StandingPoint"
description: "由 UsableMachine 管理的 Mission 场景交互站位点：负责 Agent 选择、定位、占用和释放的真实生命周期。"
---
# StandingPoint

**命名空间：** `TaleWorlds.MountAndBlade`  
**模块：** `TaleWorlds.MountAndBlade`  
**类型：** `public class StandingPoint : UsableMissionObject`  
**基类：** `UsableMissionObject`  
**源码：** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/StandingPoint.cs`

## 这类点做什么

这是场景中一个 [`Agent`](../../mission/Agent) 可以使用机器的位置槽，负责资格判断、目标位置、基于路径的 AI 评分以及停止使用时的清理。

## 概述

`StandingPoint` 通常作为脚本组件挂在机器场景实体上。宿主 [`UsableMachine`](../UsableMachine) 在 `OnInit` 中递归收集这些组件，初始化防守 Agent 状态，并逐点询问候选 Agent 是否可以使用。派生点只改变选择规则，不接管机器所有权，也不创建第二套 Mission 注册表。

## 心智模型

可以把站位点理解为**占用与移动契约**，而不是实际的游戏动作。`UsableMachine` 会按停用状态、当前使用者、战斗方和 `IsDisabledForAgent` 过滤点，再用 `GetUserFrameForAgent` 与 `GetUsageScoreForAgent` 选择 Agent 应移动到的位置。`OnUse` 与 `OnUseStopped` 是宿主发出的生命周期回调；装填、攻城或攻击的具体行为仍由机器及其组件负责。

`OnInit` 会创建路径距离缓存，并根据实体上的 `attacker`、`defender` 标签推断 `StandingPointSide`。因此，站位点只有在场景实体进入当前 [`Mission`](../../mission/Mission) 后才有意义。不要用 `new` 创建一个孤立点来取得可用槽位，这会绕过场景挂载和 `UsableMachine` 的收集过程。

## 依赖关系

- [`UsableMachine`](../UsableMachine) 持有 `StandingPoints` 集合，并调用选择、使用和 Mission 结束流程。
- [`UsableMissionObject`](../UsableMissionObject) 提供 `UserAgent`、`MovingAgent`、锁定标志、占用状态和基础可用性检查。
- [`Mission`](../../mission/Mission) 与 [`Agent`](../../mission/Agent) 提供目标帧和路径计算所需的实时场景、角色状态。
- [`StandingPointWithWeaponRequirement`](../StandingPointWithWeaponRequirement)、[`StandingPointWithAgentLimit`](../StandingPointWithAgentLimit)、[`StandingPointWithTeamLimit`](../StandingPointWithTeamLimit) 为常见机器布局增加专门限制。

## 何时使用，何时不用

**适合使用：**

- 场景机器需要一个或多个 Agent 交互位置。
- Mission 对象需要检查或配置已经从 `GameEntity` 收集到的点。
- 自定义点需要覆盖资格、评分、目标帧或停止行为，同时保留机器契约。

**不适合使用：**

- 要监听整个 Mission；应使用 [`MissionBehavior`](../../mission/MissionBehavior)。
- 要修改战役状态；应在 Mission 事件之后使用对应的战役 Action 或 Behavior，不要把战役变更藏在站位点回调里。
- 点没有场景实体支撑时。孤立 C# 对象没有有效 `GameEntity`、Mission 注册或宿主选择循环。

## 选择与使用生命周期

`UsableMachine` 在分遣槽位选择时调用 `IsUsableBySide`，在逐个 Agent 选择时调用 `IsDisabledForAgent`。基类的 `GetUsageScoreForAgent` 计算导航网格路径距离的负值；不可达路径变成 `float.MinValue`。`FavoredUser` 会改变评分，使机器偏好指定 Agent，但不会绕过其他限制。

`OnUse` 在自动重新挂接被关闭时先释放原来正在移动的 Agent，然后执行基类占用逻辑；锁定标志要求时还会设置目标帧或目标位置。`OnUseStopped` 清除目标帧。存在权威使用者时，`GetTickRequirement` 增加 tick；tick 逻辑会在动作不再兼容时停止 Agent，并把收起或拔出武器的单线程操作放到正确线程。

## 关键成员

### 资格与所有权

- `FavoredUser` 是可选的评分偏好。`OnEndMission` 会把它清空；它不会让一个已停用或错误阵营的点变得可用。
- `SetUsableByAIOnly`、`SetUsableByPlayerOnly`、`SetUsableByPlayerOrAI` 修改 `IsUsableByAgent` 使用的控制器过滤器。
- `IsUsableBySide` 还会检查停用状态、即时使用状态和当前占用状态。

这些成员应在场景组件可用后、机器开始分配 Agent 前配置。基类的 `GetDescriptionText` 明确返回 `null`，所以 UI 文本应由所属机器或派生类型提供。

### 位置与武器处理

- `GetUserFrameForAgent` 根据 Mission 传送状态、锁定标志、交互距离和 Agent 朝向计算目标。
- `AutoSheathWeapons`、`AutoEquipWeaponsOnUseStopped`、`AutoWieldWeapons` 控制基类 tick 的装备变化。`StandingPointForRangedArea` 会关闭自动收武器，因为手中远程武器本身是资格条件。
- `SetupOnUsingStoppedBehavior` 设置停止后是否自动重新挂接，并登记宿主回调；回调来自停止处理，不是任意 Mission 代码主动触发。
- `HasAlternative` 告诉机器能否考虑其他站位点；基类返回 `false`。

### 生命周期回调

`OnInit`、`OnUse`、`OnUseStopped`、`OnTick`、`OnTickParallel3`、`OnEndMission` 都由宿主调用。父机器物理状态变化时，`OnParentMachinePhysicsStateChanged` 会使实体世界坐标缓存失效。自定义覆盖应保留基类调用，除非自己完整接管对应的占用或清理契约。

## 真实获取示例

下面从当前 Mission 的活动对象集合取得真实站位点；Agent 由机器或 Mission 回调传入，因此没有创建脱离宿主的点或假角色：

```csharp
using TaleWorlds.MountAndBlade;

static StandingPoint FindPointForAgent(Agent agent)
{
    Mission mission = Mission.Current;
    if (mission == null || agent == null)
    {
        return null;
    }

    foreach (StandingPoint point in
             mission.ActiveMissionObjects.FindAllWithType<StandingPoint>())
    {
        if (!point.IsDisabledForAgent(agent) && point.IsUsableByAgent(agent))
        {
            return point;
        }
    }

    return null;
}
```

这段代码只找候选点；移动和占用仍必须由所属 `UsableMachine` 完成。手动调用 `OnUse` 会跳过机器的分遣与占用 bookkeeping。

## 风险与崩溃边界

- `Mission.Current`、`Scene`、`GameEntity`、`UserAgent` 都受生命周期约束。`OnEndMission` 或实体移除后的延迟回调不能继续使用它们。
- `GetUserFrameForAgent` 和路径评分依赖有效 Mission 场景。在模块加载阶段或 Mission 结束后调用，可能进入失效的原生场景访问。
- `FavoredUser` 与距离缓存保存实时 Agent 引用，不能带到下一场 Mission。
- `StandingPointWithTeamLimit` 在阵营检查中直接读取 `UsableTeam.Side`，未配置 Team 的派生点在分遣评估期间有空引用风险。
- 站位点不是可存档的战役对象。不要用它保存世界状态，也不要从 Mission 结束回调修改战役实体。

## 参见与双向导航

- ↑ 父级：[Mission-ext 模块索引](../)
- ↔ 同级：[StandingPointForRangedArea](../StandingPointForRangedArea) · [StandingPointWithAgentLimit](../StandingPointWithAgentLimit) · [StandingPointWithTeamLimit](../StandingPointWithTeamLimit)
- 专用派生点：[StandingPointWithVolumeBox](../StandingPointWithVolumeBox) · [StandingPointWithWeaponRequirement](../StandingPointWithWeaponRequirement)
- 宿主与基类：[UsableMachine](../UsableMachine) · [UsableMissionObject](../UsableMissionObject) · [Mission](../../mission/Mission)
- 文档契约：[文档契约](../../../architecture/doc-contract)
- 中文/English：[StandingPoint](../../../../en/api/mission-ext/StandingPoint)
