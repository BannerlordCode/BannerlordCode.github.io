---
title: "MissionBehavior"
description: "任务行为基类：56 个 public + 4 个 protected/protected internal 回调钩子、零自有状态，只有 BehaviorType 一个抽象成员；OnEndMissionInternal 是唯一有默认实现的转发钩子，IsThereAgentAction 默认 false、GetCompassTargets 默认 null。"
---

# MissionBehavior

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public abstract class MissionBehavior : IMissionBehavior`
**Base:** 无（仅隐式 `System.Object`；实现标记接口 `IMissionBehavior`）
**File:** `TaleWorlds.MountAndBlade/MissionBehavior.cs`（320 行，320 行里没有一个非空方法体超过两行）

## 概述

`MissionBehavior` 是 mod 挂进战斗/对话/攻城任务的那张**订阅表**。整个类没有自己的状态机、不持有引用、连字段都没有；它提供的 56 个 public 虚方法加 4 个 `protected`/`protected internal` 虚方法，全部是**空实现或一行转发**，等任务在正确的时刻挨个叫它们。唯一必须由你实现的成员是 `public abstract MissionBehaviorType BehaviorType { get; }`——因为任务要靠这个值决定把你塞进 `MissionLogics` 还是普通行为列表。

它在源码里的真实体量比看上去还「空」：56 个 public 成员里，53 个是 `public virtual`，其中 50 个方法体是**完全空的 `{}`**（3 行注释 + 大括号），剩下 3 个有内容——`OnEndMissionInternal()` 转发到 `protected virtual void OnEndMission()`，`IsThereAgentAction(Agent, Agent)` `return false;`，`GetCompassTargets()` `return null;`。另有 `public Mission Mission { get; internal set; }`、`public IInputContext DebugInput`（`get { return Input.DebugInput; }`）、`public abstract MissionBehaviorType BehaviorType { get; }`。4 个 `protected` 系列分别是 `OnEndMission()`、`OnGetAgentState(Agent, bool)`、`OnObjectDisabled(DestructableComponent)`、`OnAgentControllerChanged(Agent, AgentControllerType)`。

这个「空」是设计意图而非偷懒。`Mission` 内部维护一个 `List<MissionBehavior> MissionBehaviors`，它就是**唯一的分发中心**：命中判定、队伍增删、每帧 tick、部署阶段完成——引擎在每个节点遍历这个列表调对应钩子。你只需要覆写你关心的那几行。

## 心智模型

把它当成**「任务生命周期的回调数组」**，然后死记两条规则：**谁调你**（引擎）和**什么时候调**（钩子名）。

**第一条规则：注册时的三条路径决定你会收到什么。** `Mission.AddMissionBehavior` 的实现是：`this.MissionBehaviors.Add(missionBehavior);` → `missionBehavior.Mission = this;` → 按 `BehaviorType` 分流——`Logic` 走 `this.MissionLogics.Add(missionBehavior as MissionLogic)`，非 `Logic` 且是 `Other` 走 `this._otherMissionBehaviors.Add(missionBehavior)` → 最后 `missionBehavior.OnCreated();`。所以 `BehaviorType` 返回 `MissionBehaviorType.Logic` 却没继承 [MissionLogic](../../mission-ext/MissionLogic)，`as MissionLogic` 会得到 `null` 并被塞进列表——不崩，但那个对象从此不在任何 `MissionLogic` 专属遍历里。`RemoveMissionBehavior` 则先调 `OnRemoveBehavior()`，再按同样的分流规则移除，最后 `missionBehavior.Mission = null;`；遇到既不是 `Logic` 也不是 `Other` 的 `BehaviorType`，它会打一条 `Debug.FailedAssert("Invalid behavior type", ...)`。

**第二条规则：同名钩子有两种迭代方向，别搞反。** 每帧的四类 tick 在 `Mission` 里都是**倒序**：

```csharp
for (int i = this.MissionBehaviors.Count - 1; i >= 0; i--)
{
    this.MissionBehaviors[i].OnFixedMissionTick(fixedDt);
}
```

`OnPreMissionTick`、`OnPreDisplayMissionTick`、`OnMissionTick` 同样倒序。而启动期的 `Mission.AfterStart()` 里的 `OnBehaviorInitialize` / `EarlyStart` / `AfterStart`，以及 `OnAddTeam` / `AfterAddTeam`，全是**正序 `foreach`**。推论很实用：**同一个列表里，后注册的行为在每帧回调中先跑，在启动回调中后跑**——两个行为互相依赖时，这个不对称就是你要的顺序控制旋钮。

**第三条：`OnEndMission` 为什么是 protected。** `OnEndMissionInternal` 是 public（引擎从 `Mission.EndMissionInternal()` 调它），它的默认实现只有 `this.OnEndMission();` 一句，把调用转进 protected 的空钩子。这套「public 入口 + protected 扩展点」在 `OnGetAgentState` / `OnObjectDisabled` / `OnAgentControllerChanged` 上重复出现：这四个是 `protected internal`，**外部代码调不到它们**，只能覆写后由引擎/基类在合适时机打进来。

**第四条：三个有默认值的钩子，各有各的坑。** `IsThereAgentAction` 返回 `false`，而 `Agent.CanInteractWithAgent` 是 `foreach (MissionBehavior missionBehavior in Mission.Current.MissionBehaviors) flag = (flag || missionBehavior.IsThereAgentAction(this, otherAgent));`——**没人愿意接这个活，玩家就没法和任何 Agent 交互**，包括官方最基础的对话。`GetCompassTargets` 返回 `null`；托管层里我找不到调用点（全树只有 [MissionMultiplayerGameModeFlagDominationClient](../../mission-ext/MissionMultiplayerGameModeFlagDominationClient) 一处 override），消费方在 View 层，判空责任在那边。`OnMissionModeChange(MissionMode oldMissionMode, bool atStart)` 收到的 `oldMissionMode` 是**旧值**——`Mission.SetMissionMode` 先把 `this._missionMode` 存进局部变量再赋值，然后传那个局部变量。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `BehaviorType` | `public abstract MissionBehaviorType BehaviorType { get; }` | **唯一必须实现**的成员。决定 `AddMissionBehavior` 把你放进 `MissionLogics`（必须是 `MissionLogic`）还是 `_otherMissionBehaviors`，也决定 `OnEndMissionRequest` 一类只遍历 `MissionLogics` 的回调会不会经过你。 |
| `Mission` | `public Mission Mission { get; internal set; }` | 任务引用。setter 是 `internal`，只有 `Mission.AddMissionBehavior` / `RemoveMissionBehavior` 会写。`OnCreated()` 里它已经被赋值，`RemoveMissionBehavior` 之后是 `null`。 |
| `DebugInput` | `public IInputContext DebugInput { get { return Input.DebugInput; } }` | 直接转发 `TaleWorlds.InputSystem.Input.DebugInput`。调试专用输入通道。 |
| `OnCreated` | `public virtual void OnCreated()` | `AddMissionBehavior` 的最后一步。`Mission` 已就绪、列表里已登记，但场景可能还没加载完——只适合做纯初始化，不要在这里假设地形/Agent 存在。 |
| `OnBehaviorInitialize` | `public virtual void OnBehaviorInitialize()` | `Mission.AfterStart()` 里调用，且**夹在** `MBSubModuleBase.OnBeforeMissionBehaviorInitialize` 与 `OnMissionBehaviorInitialize` 两轮子模块回调中间。此时 Agent 已生成。 |
| `EarlyStart` | `public virtual void EarlyStart()` | `AfterStart()` 正序遍历，在 `_battleSpawnPathSelector.Initialize()` 和 `_deploymentPlan.Initialize()` **之前**。要抢在部署数据初始化前动手就放这里。 |
| `AfterStart` | `public virtual void AfterStart()` | `EarlyStart` 全部跑完、两条初始化都做完之后。官方大量逻辑选这个时机。 |
| `OnFixedMissionTick` | `public virtual void OnFixedMissionTick(float fixedDt)` | 固定步长帧回调，倒序遍历。物理/网络对齐的确定性逻辑放这里。 |
| `OnPreMissionTick` | `public virtual void OnPreMissionTick(float dt)` | 每帧最前段（`Mission.OnPreTick` 内，先 `WaitTickCompletion()`），倒序。 |
| `OnPreDisplayMissionTick` | `public virtual void OnPreDisplayMissionTick(float dt)` | 渲染/相机更新**之前**（同段里紧跟着是 `_missionState.Handler.UpdateCamera`），倒序。要在画面动之前改状态就放这里。 |
| `OnMissionTick` | `public virtual void OnMissionTick(float dt)` | 相机更新之后、动态实体计时之前，倒序。日常逻辑最常用的钩子。 |
| `OnEndMissionInternal` | `public virtual void OnEndMissionInternal()` | **唯一有默认实现的 public 钩子**，方法体就一句 `this.OnEndMission();`。由 `Mission.EndMissionInternal()` 调用。 |
| `OnEndMission` | `protected virtual void OnEndMission()` | `OnEndMissionInternal` 的默认转发目标，protected ⇒ 外部调不到。想在任务结束时清理资源覆写它（覆写 `OnEndMissionInternal` 也能拿到效果，但会挡掉基类的转发链）。 |
| `OnRemoveBehavior` | `public virtual void OnRemoveBehavior()` | `RemoveMissionBehavior` 的第一步，此时行为**还在列表里**、`Mission` 还非空，适合做反向清理。 |
| `IsThereAgentAction` | `public virtual bool IsThereAgentAction(Agent userAgent, Agent otherAgent)` | 默认 `return false;`。`Agent.CanInteractWithAgent` 会遍历全部行为问一遍，全 false 就完全无法与 Agent 交互。官方 [BattleMissionAgentInteractionLogic](../../mission-ext/BattleMissionAgentInteractionLogic)（命名空间 `TaleWorlds.MountAndBlade.Source.Missions.Handlers.Logic`）与沙盒的搜身/对话逻辑都靠它接管交互。 |
| `GetCompassTargets` | `public virtual List<CompassItemUpdateParams> GetCompassTargets()` | 默认 `return null;`。给罗盘提供标记点；托管层无调用点，消费在 View 层，**覆写时不要返回 null**。 |
| `OnMissionModeChange` | `public virtual void OnMissionModeChange(MissionMode oldMissionMode, bool atStart)` | `Mission.SetMissionMode` 在模式**真的变化**且 `CurrentState != State.Over` 时触发，传的是旧模式值。`atStart` 表示这次变化发生在任务启动瞬间。 |
| `OnAgentHit` | `public virtual void OnAgentHit(Agent affectedAgent, Agent affectorAgent, in MissionWeapon affectorWeapon, in Blow blow, in AttackCollisionData attackCollisionData)` | 受击后的总入口。武器参数类型是 **`MissionWeapon`**（带 UsageItem 的多层结构）。 |
| `OnScoreHit` | `public virtual void OnScoreHit(Agent affectedAgent, Agent affectorAgent, WeaponComponentData attackerWeapon, bool isBlocked, bool isSiegeEngineHit, in Blow blow, in AttackCollisionData collisionData, float damagedHp, float hitDistance, float shotDifficulty)` | 远程命中专用。注意第三个参数是 `WeaponComponentData` 而非 `MissionWeapon`——`Mission.cs:5526` 传的是 `missionWeapon.CurrentUsageItem`。**别把这两个类型的用法互换。** |
| `OnMeleeHit` | `public virtual void OnMeleeHit(Agent attacker, Agent victim, bool isCanceled, AttackCollisionData collisionData)` | 近战命中，`isCanceled` 表示本次被格挡/取消。 |
| `OnMissileHit` | `public virtual void OnMissileHit(Agent attacker, Agent victim, bool isCanceled, AttackCollisionData collisionData)` | 投射物命中。与 `OnMeleeHit` 参数列表完全相同，`isCanceled` 语义一致。 |
| `OnRegisterBlow` | `public virtual void OnRegisterBlow(Agent attacker, Agent victim, WeakGameEntity realHitEntity, Blow b, ref AttackCollisionData collisionData, in MissionWeapon attackerWeapon)` | 伤害**登记**阶段，早于扣血。`collisionData` 是 `ref`，可以改写命中结果。 |
| `OnEarlyAgentRemoved` / `OnAgentRemoved` | `public virtual void OnEarlyAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)` | Agent 离场两阶段。两者参数列表一致，`KillingBlow` 是这里唯一的凭据——它的武器要走 `blow.Weapon`→`WieldedWeapon`→`CurrentUsageItem` 才拿到 `WeaponComponentData`。 |
| `OnAgentDeleted` | `public virtual void OnAgentDeleted(Agent affectedAgent)` | 对象彻底删除时的最后通知，此后再访问 `affectedAgent` 已不安全。 |
| `OnAddTeam` / `AfterAddTeam` | `public virtual void OnAddTeam(Team team)` / `AfterAddTeam(Team team)` | `Mission.Teams.Add(BattleSideEnum, ...)` 在 `base.Add(team)` 之后按**正序**遍历行为调 `OnAddTeam`，在关系设置与 `AdjustPlayerTeams()` 之后调 `AfterAddTeam`。 |
| `OnGetAgentState` / `OnObjectDisabled` / `OnAgentControllerChanged` | `protected internal virtual ...` | 三个 `protected internal` 钩子，**外部调不到**，只能在派生类里覆写、由引擎在内部时机打进来。 |
| `IsThereAgentAction` 之外的两个非空默认值 | — | `OnEndMissionInternal` / `IsThereAgentAction` / `GetCompassTargets` 是 53 个 public 虚方法里仅有的 3 个有实现体的。 |

## 真实示例

最标准的一种：继承 `MissionBehavior`，返回 `Other`，在启动时挂事件、每帧干活。

```csharp
using TaleWorlds.Library;
using TaleWorlds.MountAndBlade;

public class MyBuffBehavior : MissionBehavior
{
    // 真实存在的抽象成员，必须实现
    public override MissionBehaviorType BehaviorType
    {
        get { return MissionBehaviorType.Other; }
    }

    // EarlyStart 是 MissionBehavior 真实提供的钩子（MissionBehavior.cs 里 public virtual void EarlyStart()）
    protected override void EarlyStart()
    {
        base.EarlyStart();
        ReportNearbyEnemies();
    }

    // OnAfterMissionCreated 同为真实钩子
    protected override void OnAfterMissionCreated()
    {
        base.OnAfterMissionCreated();
        ReportNearbyEnemies();
    }

    public override bool IsThereAgentAction(Agent userAgent, Agent otherAgent)
    {
        return otherAgent.IsHuman && otherAgent.Team != userAgent.Team
            && this.Mission.IsAgentInteractionAllowed();
    }

    private void ReportNearbyEnemies()
    {
        Agent main = this.Mission.MainAgent;
        if (main == null)
        {
            return;
        }

        // GetNearbyEnemyAgents 会先 Clear 传入的列表再填充，直接复用缓存列表免去每次分配
        MBList<Agent> nearby = new MBList<Agent>();
        this.Mission.GetNearbyEnemyAgents(main.Position.AsVec2, 30f, main.Team, nearby);
        Debug.Print("nearby enemies: " + nearby.Count, 0);
    }
}
```

第二种形状是「任务逻辑」，必须继承 [MissionLogic](../../mission-ext/MissionLogic) 而不是直接继承 `MissionBehavior`，否则 `BehaviorType` 返回 `Logic` 时 `as MissionLogic` 得到 null：

```csharp
using TaleWorlds.MountAndBlade;

public class MyMissionLogic : MissionLogic
{
    public override void OnEndMissionRequest()
    {
        base.OnEndMissionRequest();
        // OnEndMissionRequest 只遍历 MissionLogics —— 这就是 BehaviorType 必须返回 Logic 的理由
        Team defenders = this.Mission.DefenderTeam;
        if (defenders != null)
        {
            defenders.ResetTactic();
            defenders.ClearTacticOptions();
        }
    }
}
```

第三种形状是挂单个 [Agent](../Agent) 上的事件。`Agent.OnAgentHealthChanged` 是 `public event Agent.OnAgentHealthChangedDelegate OnAgentHealthChanged`，委托签名 `(Agent agent, float oldHealth, float newHealth)`——注意它是**每个 Agent 实例一个事件**，不是任务级事件：

```csharp
public override void OnAgentCreated(Agent agent)
{
    agent.OnAgentHealthChanged += this.OnAnyAgentHealthChanged;
}

public override void OnAgentDeleted(Agent agent)
{
    agent.OnAgentHealthChanged -= this.OnAnyAgentHealthChanged;
}

private void OnAnyAgentHealthChanged(Agent agent, float oldHealth, float newHealth)
{
    if (newHealth <= 0f)
    {
        Debug.Print("unit down: " + agent.Name, 0);
    }
}
```

订阅和退订必须成对挂在 `OnAgentCreated` / `OnAgentDeleted` 上。写错退订时的方法名不会有任何提示，只会让事件永远解不掉——旧对象被引用，回调持续触发。

## 风险与边界

- **`IMissionBehavior` 是空标记接口。** 整个文件只有 `public interface IMissionBehavior { }`，零成员。它唯一的用处是让 `Mission.GetMissionBehavior<T>()` 的约束 `where T : class, IMissionBehavior` 成立，从而**允许你传入不继承 `MissionBehavior` 的类**——但那种对象不会被加进任何 tick 循环，钩子永远不会被调。实际用法是继承 `MissionBehavior`。
- **`BehaviorType` 返回 `Logic` 但没继承 `MissionLogic` = 静默半失效。** `AddMissionBehavior` 里 `this.MissionLogics.Add(missionBehavior as MissionLogic)` 会塞进去一个 null，而 `MissionLogics` 只被 `OnEndMissionRequest` 这类局部遍历用。你会得到「行为活着但只在少数回调里可见」的诡异局面。
- **迭代方向不对称。** 每帧四类 tick 倒序（`Count - 1` → `0`），启动三钩子与队伍两钩子正序。同一列表里的两个行为不能假设「注册顺序 = 执行顺序」。
- **`GetCompassTargets()` 的默认值是 `null`。** 官方只有一处 override。覆写它时返回空列表比返回 null 安全。
- **`Mission` 的 setter 是 `internal`。** 你不能自己把行为挂到别处或换掉 `Mission` 引用；`RemoveMissionBehavior` 之后它是 `null`，在 `OnEndMissionInternal` 之后再访问要防 NRE。
- **`OnScoreHit` 的武器参数不是 `MissionWeapon`。** 它是 `WeaponComponentData`，来自 `missionWeapon.CurrentUsageItem`。`OnAgentHit` / `OnRegisterBlow` / `OnAgentShootMissile` 才用 `MissionWeapon`。混用会编译失败或取到错误层级。
- **`KillingBlow` 里取武器要走三层。** 参数类型是 `KillingBlow`，它内部是 `WieldedWeapon`，真正的 `ItemObject`/组件数据在 `CurrentUsageItem` 上。直接 `blow.Weapon` 当 `MissionWeapon` 用是错的。
- **`protected internal` 的三个钩子外部不可调。** `OnGetAgentState(Agent, bool)`、`OnObjectDisabled(DestructableComponent)`、`OnAgentControllerChanged(Agent, AgentControllerType)` 只能在派生类里覆写；mod 想「主动触发」它们没有公开入口。
- **`OnCreated` 里场景还没准备好。** 它由 `AddMissionBehavior` 触发，此时 `OnAfterMissionCreated`（由 `MissionState` 调）尚未发生、`AfterStart` 尚未发生。想摸地形/Agent 请用 `OnAfterMissionCreated` 或 `AfterStart`。
- **`OnMissionModeChange` 传旧值。** 想知道「新模式」只能读 `this.Mission.Mode`。
- **50 个钩子的方法体全是空的。** 「调用了这个钩子」不等于「有人处理了它」——基类版本是 no-op，覆写前先确认没人已经在链上处理过，否则你会和官方逻辑各做一次。

## 跨版本提示

`MissionBehavior` 是 mod 生态里被引用最多的基类之一，跨 1.3 → 1.5 的变化集中在**加钩子**而不是**改签名**。已覆写的签名在新版本被改动（例如加参数、改 `in`/值语义）时才会编译失败；引擎新增钩子时你的子类不受影响（`virtual` 且有默认实现）。

需要盯的具体成员是新增的回调族：1.3.0 这里已经有 `OnAgentAlarmedStateChanged(Agent, Agent.AIStateFlag)`、`OnDeploymentFinished` / `OnAfterDeploymentFinished` / `OnTeamDeployed` / `OnBattleSideDeployed`、`OnObjectUsed` / `OnObjectStoppedBeingUsed`、`OnRenderingStarted`、`OnMissionStateActivated` / `Finalized` / `Deactivated`、`OnMissileCollisionReaction`、`OnMissileRemoved`。往后版本在这张表上继续追加（航海、云端同步相关内容尤其多）。**追加不影响你，但重命名或改签名会影响。** 建议只覆写你真正需要的钩子，少写一大坨空 override——那会放大升级时的编译面。

另一个跨版本要点：`BehaviorType` 的两个取值 `Logic` / `Other`（[MissionBehaviorType](../../mission-ext/MissionBehaviorType) 只有这两个成员）在这段时间里是稳定的，可以放心用它做分支。

## 依赖关系

- 宿主：[Mission](../Mission) 持有 `List<MissionBehavior> MissionBehaviors`，`AddMissionBehavior` / `RemoveMissionBehavior` / `GetMissionBehavior<T>` / `HasMissionBehavior<T>` 是全部挂载入口
- 标记接口：[IMissionBehavior](../../mission-ext/IMissionBehavior) 是空接口，只为 `GetMissionBehavior<T>` 的泛型约束存在
- 官方子类：[MissionLogic](../../mission-ext/MissionLogic) 是 `BehaviorType => Logic` 的那一条线；[AmmoSupplyLogic](../../mission-ext/AmmoSupplyLogic) 等具体行为可作为覆写范本
- 枚举：[MissionBehaviorType](../../mission-ext/MissionBehaviorType) 决定分流到 `MissionLogics` 还是普通行为列表
- 事件源：[Agent](../Agent) 提供 `OnAgentHealthChanged` / `OnMountHealthChanged` / `OnAgentWieldedItemChange` / `OnAgentMountedStateChanged`，以及 `CanInteractWithAgent` 对 `IsThereAgentAction` 的消费
- 动作常量：[ActionIndexCache](../ActionIndexCache) 常在 `OnMissionTick` 里配合 `Agent.SetActionChannel` 一起用
- 枚举来源：[MissionMode](../../core-extra/MissionMode) 是 `OnMissionModeChange` 的参数类型
- 桶首页：[mission API 分区](../)