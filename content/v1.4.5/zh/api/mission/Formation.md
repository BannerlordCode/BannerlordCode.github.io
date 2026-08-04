---
title: "Formation"
description: "Team 在 Mission 中持有的临时编队：组织 Agent、订单、队形布局、脱离单位与战术缓存，并与 Agent.Formation 反向引用保持一致。"
---

# Formation

**命名空间：** `TaleWorlds.MountAndBlade`  
**模块：** `TaleWorlds.MountAndBlade`  
**类型：** `public sealed class Formation : IFormation`  
**基类/契约：** [`IFormation`](../../mission-ext/IFormation)  
**源文件：** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/Formation.cs`

## 一句话定位

在一个 Team 内把一组 Agent 的身份类别、队形布局、移动/射击订单、脱离状态和位置缓存组织成可被 Mission tick 的临时编队，并让 Agent 的反向 Formation 引用、原生同步、Detachment 和位置缓存随成员变化一起更新。

## 心智模型

`Formation` 不是独立的战役对象，而是 Team 在 Mission 创建时持有的运行时子对象。一个 Team 会初始化普通和特殊 Formation；mod 通常通过 `team.GetFormation(FormationClass.Infantry)` 或 `team.FormationsIncludingEmpty` 取得它。Formation 的 `Team`、`Index` 和 `FormationIndex` 表示它属于哪一个 Team、处于哪个槽位；Mission 结束时 Team 清理这些对象。

Formation 同时有两条状态线：一条是 Agent 成员与 Captain/PlayerOwner，另一条是 Arrangement、订单、逻辑/物理类别、QuerySystem 和位置缓存。把 Agent 加入编队必须同时更新 Agent 的反向 `Formation` 属性、native/network 状态、Detachment 和缓存；因此不要只操作 Formation 的内部列表，也不要在 Mission 之外手动 tick。

## 何时使用，何时不要使用

**适合使用：**

- 在 Mission 的行为回调中读取编队人数、Captain、位置、逻辑/物理类别和当前订单。
- 通过 `Agent.Formation = target` 让真实 Agent 转入另一编队，或通过 `SetMovementOrder`、`SetFacingOrder` 等入口改变当前编队订单。
- 需要监视 `OnUnitAdded`、`OnUnitRemoved`、`OnTick` 或部署结束状态时。

**不要使用：**

- 不要直接 `new Formation` 取代 Team 初始化；模拟 Formation 是引擎内部用途，普通编队应从 Team 获取。
- 不要用 `AddUnit`/`RemoveUnit` 单独改变 Agent 所属；使用 `agent.Formation = target` 让 setter 完成双向维护。
- 不要在不同 Team 之间直接 `Split` 或 `TransferUnits`，也不要绕过 OrderController 改 Arrangement 来“瞬移”单位。
- 不要把 Formation 存进存档或跨 Mission 缓存；存稳定的编队意图，在新 Mission 中重新取得 Formation。

## 创建、所有权与编队类别

`Team` 初始化普通和特殊 Formation，并以 `FormationClass` 与索引管理它们。通常的 Infantry、Ranged、Cavalry、HorseArcher 等类别与特殊槽位不能只靠整数猜测；使用 `FormationClass` 和 `Team.GetFormation`。`Formation.Team` 是只读所有权，`Index`/`FormationIndex` 只用于当前 Team 的运行时定位。

Agent 通过 `AgentBuildData.AgentFormation` 在构建时取得初始编队，之后 `Agent.Formation` setter 处理迁移。Agent 被移除或逃跑时会离开 Formation；死亡/移除回调后，缓存的 Agent 可能已经不再属于本编队。

## 关键成员与副作用

### 所有权、成员与角色

- `Team`、`Index`、`FormationIndex`、`CountOfUnits` 描述编队身份和成员规模；它们只在所属 Mission 有效。
- `Captain`、`PlayerOwner`、`HasPlayerControlledTroop` 和 `IsPlayerTroopInFormation` 反映角色分配，可能随 Agent 移除或控制权变化而更新。
- `DetachedUnits` 和 `LooseDetachedUnits` 是脱离主布局但仍受编队管理的单位集合，不等于“已经离开 Formation”。
- `GetFirstUnit`、`GetUnitWithIndex`、`GetCountOfUnitsWithCondition` 和 `ApplyActionOnEachUnit` 是读取/遍历入口；遍历回调中不要同步改变同一集合，除非使用源码提供的 backup-list 形式。

### 类别、查询与位置

- `LogicalClass`/`SecondaryLogicalClasses` 是 AI 逻辑分类；`PhysicalClass`/`SecondaryPhysicalClasses` 来自当前单位的物理构成；`RepresentativeClass` 是代表性分类。不要用其中一个替代另一个做所有战术判断。
- `QuerySystem`、`GetAveragePositionOfUnits`、`GetMedianAgent`、`GetCurrentGlobalPositionOfUnit` 和 `GetUnderAttackTypeOfUnits` 依赖 Mission 场景与缓存时序。
- `CurrentPosition`、`OrderPosition`、`Direction`、`OrderPositionIsValid` 可能在部署或订单更新之间短暂无效；先检查状态再把它们交给场景/导航 API。

### 订单、布局与 AI

- `Arrangement` 是布局实现；优先通过 `Rearrange` 替换布局，让单位迁移和相关事件走完整路径。
- `SetMovementOrder`、`SetFacingOrder`、`SetArrangementOrder`、`SetFormOrder`、`SetRidingOrder` 和 `SetFiringOrder` 分别改变不同订单维度，调用时机会触发位置和缓存更新。
- `SetControlledByAI`、`IsAIControlled`、`IsSplittableByAI` 和 `TargetFormation` 控制 AI 归属与拆分目标；玩家订单和 AI 订单不要在同一时机互相覆盖。
- `Split` 和 `TransferUnits` 依赖所属 Team 的 `MasterOrderController`；它们不是通用的跨 Team 复制工具。

### 事件与时序

- `OnUnitAdded`、`OnUnitRemoved`、`OnUnitAttached`、`OnUnitCountChanged` 和 `OnUnitSpacingChanged` 适合更新 mod 的观察状态，不应在回调中保存已经离开的 Agent。
- `OnBeforeMovementOrderApplied`、`OnAfterArrangementOrderApplied` 能观察订单边界；回调中不要重入同一订单 setter。
- `OnTick` 与 `Tick(float dt)` 由 Mission 的队伍更新阶段驱动。`Reset`、`OnFormationDispersed`、批量增删事件是重建/清理边界，不能在结束阶段继续创建战斗对象。

## 依赖图

- **宿主：** [`Team`](../../mission-ext/Team) 创建并持有 Formation；[`Mission`](../Mission) 决定 Team 和 Formation 的有效生命周期。
- **成员：** [`Agent`](../Agent) 通过 `Agent.Formation` setter 加入、转移或离开；不要绕过这个反向引用。
- **分类与契约：** [`FormationClass`](../../core-extra/FormationClass)、[`IFormation`](../../mission-ext/IFormation) 和 [`FormationAI`](../../mission-ext/FormationAI) 定义类别、布局和 AI 边界。
- **规则下游：** [`MissionBehavior`](../MissionBehavior) 和 [`MissionLogic`](../../mission-ext/MissionLogic) 在有效 Mission 回调中读取编队状态；不要把 Formation 作为 Campaign 存档字段。
- **查询/相关系统：** [`FormationQuerySystem`](../../mission-ext/FormationQuerySystem) 消费编队的单位和位置状态，具体过期行为以目标版本源码为准。

## 真实获取与迁移示例

以下示例从当前 Mission 的玩家队伍取得普通步兵编队，再通过真实 Agent setter 转移一个已存在的 Agent。它没有直接调用 Formation 的内部成员列表，也没有在 Mission 之外构造编队。

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public sealed class FormationReassignmentBehavior : MissionBehavior
{
    protected override void OnBehaviorInitialize()
    {
        Team playerTeam = Mission.PlayerTeam;
        if (playerTeam == null || !playerTeam.IsValid)
        {
            return;
        }

        Formation infantry = playerTeam.GetFormation(FormationClass.Infantry);
        Agent mainAgent = Mission.MainAgent;
        if (infantry != null && mainAgent != null && mainAgent.IsActive())
        {
            mainAgent.Formation = infantry;
        }
    }
}
```

编队订单也应从当前 Team 的真实 Formation 发出，并保持在 Mission 的行为时序内：

```csharp
public sealed class FormationOrderBehavior : MissionBehavior
{
    protected override void OnBehaviorInitialize()
    {
        Formation ranged = Mission.PlayerTeam?.GetFormation(FormationClass.Ranged);
        if (ranged != null && ranged.IsValid)
        {
            ranged.SetControlledByAI(false);
            ranged.SetMovementOrder(MovementOrder.MovementOrderMove);
        }
    }
}
```

## 风险与崩溃边界

1. **绕过 Agent 反向引用：** 直接调用 `Formation.AddUnit`/`RemoveUnit` 不会替代 `Agent.Formation` setter，可能留下 Team/Formation/Agent 不一致的关系、脱离状态和 QuerySystem 缓存。
2. **跨 Team 迁移：** `Split`/`TransferUnits` 依赖当前 Team 的 `MasterOrderController`、Formation 类别和订单状态；跨 Team 或错误 Mission 阶段调用会破坏订单、Detachment 和网络状态。
3. **结束后引用：** Mission 结束时 Team 会清理 Formation，Agent 也可能被移除。延迟回调、UI 或后台任务保留旧 Formation 会读到无效 native/scene 状态。
4. **错误阶段 tick：** `Tick`、位置计算、布局更新和查询缓存依赖活动的 `Mission.Current`。不要在 `EndMission` 后手动 tick 或从 Campaign 线程调用。
5. **缓存和重入：** 位置/敌人/单位数量数据可能经过缓存；不要在订单事件里再次调用同一订单 setter，避免重入和重复布局计算。
6. **网络同步：** Agent 归属、attach/detach、订单和 Formation 创建可能触发 native/network 消息。多人模式中不要只修改本地状态，也不要在非权威线程迁移单位。

## 版本注记

1.4.5 的 Formation 位于 `TaleWorlds.MountAndBlade`，其 Team/Agent 所有权、普通/特殊 Formation 槽位和订单接口来自目标版本的 `Formation.cs`。1.3.15 的核心使用方式相近，但布局、AI 和网络成员可能不同；mod 应按编译目标版本确认公开成员和事件。

## 参见与双向导航

- ↑ 父级模块：[Mission API](../)
- ↔ 同级：[Mission](../Mission) · [Agent](../Agent) · [MissionBehavior](../MissionBehavior)
- ↔ 跨模块：[Team](../../mission-ext/Team) · [TeamQuerySystem](../../mission-ext/TeamQuerySystem)
- 类别与 AI：[FormationClass](../../core-extra/FormationClass) · [FormationAI](../../mission-ext/FormationAI)
- 规则入口：[MissionLogic](../../mission-ext/MissionLogic)
- 文档契约：[Doc Contract](../../../architecture/doc-contract)
