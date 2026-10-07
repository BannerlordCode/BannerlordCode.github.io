---
title: "AgentComponent"
description: "挂在单个 Agent 上的行为组件抽象基类：19 个虚回调覆盖命中、上下马、拾取、AI 输入与士气聚合，由 Agent 主动派发，是 mission 内扩展 Agent 行为的官方插槽。"
---

# AgentComponent

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public abstract class AgentComponent`
**Base:** 无（直接继承 `System.Object`）
**File:** `TaleWorlds.MountAndBlade/AgentComponent.cs`

## 概述

`AgentComponent` 是挂在**单个 [Agent](../../mission/Agent/)** 上的行为扩展基类，92 行里除了构造器和一个 `protected readonly Agent Agent` 字段，其余 19 个成员全是**空的虚方法**——每个都是一类事件的接收端。引擎在 [Agent](../../mission/Agent/) 内部逐个遍历 `_components` 列表派发：命中时调 `OnHit`、上下马时调 `OnMount` / `OnDismount`、拾取时调 `OnItemPickup`、AI 决策输入时调 `OnAIInputSet`、每帧调 `OnTick` / `OnTickParallel`。

它是 mission 内给 Agent 挂自定义逻辑的官方插槽，与 [AgentController](../AgentController/) 的区别是：组件**有二十条引擎派发路径**，控制器只有一次 `OnInitialize`。要「某件事发生时响应一下」用组件；要「纯私有状态 + 自己 tick」用控制器。

## 心智模型

把它当成**「Agent 的事件订阅者集合」**，四个推论：

第一，**基类实现全是空的，所以覆写时可以不调 `base`。** 与 `MissionLogic` 家族不同——`AgentHumanAILogic.OnAgentCreated` 里第一行是 `base.OnAgentCreated(agent)`，那是因为基类有实际逻辑；本类不需要这种仪式。

第二，**两个虚方法在 1.4.5 的全树里没有任何调用方**。`GetMoraleDecreaseConstant`（默认返回 `1f`）只出现在本类声明与 `Modules.SandBox/SandBox/Sandbox/CampaignAgentComponent.cs:57` 的一个 override；`OnDisciplineChanged` 只出现在本类声明，**一个 override 都没有**。全树 8,583 个 `.cs` 里找不到调用点。这不是「我 grep 错了」——同一份源码里 `GetMoraleAddition` 有明确调用方（`CommonAIComponent.cs:69` 的 `Agent.Components.Sum(c => c.GetMoraleAddition())`），紧挨着的另一个方法却一次都没被调。**依赖这两个回调等于依赖一个不存在的派发路径。**

第三， **`OnAIInputSet` 的三个形参全是 `ref`，它是能改写 AI 决策的唯一入口**。`Agent.cs:1630` 的派发是 `component.OnAIInputSet(ref eventFlag, ref movementFlag, ref inputVector)`——改这三个值就改了 AI 下一步的行为。这也是最容易出问题的回调：写错会直接让 AI 卡死或抽搐。

第四， **`GetMoraleAddition` 是「求和聚合」语义，不是「设置」语义**。`CommonAIComponent.cs:69` 走的是 `Agent.Components.Sum((AgentComponent c) => c.GetMoraleAddition())`，基类默认返回 `0f`。所以覆写时返回**增量**（可正可负），不要返回绝对士气值。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `Agent` | `protected readonly Agent Agent`（字段） | 宿主 Agent 的只读引用，在 `protected AgentComponent(Agent agent)` 构造器里赋值。**所有组件逻辑都从这里出发**，也是组件与宿主之间唯一的连接（`readonly` 意味着一旦挂上就永远是这个 Agent）。 |
| `AgentComponent(Agent)` | `protected AgentComponent(Agent agent)` | 唯一的构造入口且是 `protected`——**外部不能 `new` 抽象类，派生类必须 `: base(agent)`**。这是 1.4.5 里所有 `AgentComponent` 派生类构造器的固定签名（[CommonAIComponent](../CommonAIComponent/)、[HumanAIComponent](../HumanAIComponent/)、`SandBox.CampaignAgentComponent` 都是）。 |
| `Initialize` | `public virtual void Initialize()` | 组件**全部挂完之后**的统一初始化。调用点在 `Agent.cs:5160` 的 `internal void InitializeComponents()`，由 `Mission.CreateAgent` 在 `agent.InitializeComponents()` 时遍历调用一次。基类空实现。 |
| `OnTick` / `OnTickParallel` | `public virtual void OnTick(float dt)` / `OnTickParallel(float dt)` | 两个不同相位的逐帧回调，派发点在 `Agent.cs:4768` 与 `:4721`。`SandBox.CampaignAgentComponent` 在 `OnTick` 里驱动 `AgentNavigator.Tick(dt)`，并在入口处先判 `base.Agent.Mission.AllowAiTicking && base.Agent.IsAIControlled`——**这是官方示范的守卫写法**，因为布阵/暂停阶段这两个条件都不成立。 |
| `OnHit` | `public virtual void OnHit(Agent affectorAgent, int damage, in MissionWeapon affectorWeapon, in Blow b, in AttackCollisionData collisionData)` | 受击回调，`Agent.cs:5607` 派发。三个 `in` 形参**必须显式传**（调用方写作 `component.OnHit(affectorAgent, inflictedDamage, in affectorWeapon, in b, in collisionData)`）。`affectorAgent` 可能是环境伤害的 null。 |
| `OnMount` / `OnDismount` | `public virtual void OnMount(Agent mount)` / `OnDismount(Agent mount)` | 上马 / 下马，形参是**坐骑 Agent**。派发点在 `Agent.cs:1753` 与 `:1776`。 |
| `OnItemPickup` / `OnWeaponDrop` | `public virtual void OnItemPickup(SpawnedItemEntity item)` / `OnWeaponDrop(MissionWeapon droppedWeapon)` | 拾取掉落物 / 丢下武器。`OnItemPickup` 派发于 `Agent.cs:3527`，注意同名方法 `Agent.OnItemPickup` 是另一个签名（含 `EquipmentIndex` 与 `out bool`），别搞混。 |
| `OnWeaponHPChanged` | `public virtual void OnWeaponHPChanged(ItemObject item, int hitPoints)` | 武器耐久变化，`Agent.cs:4600` 派发。是「武器被打坏」这类 mod 逻辑的标准接入点。 |
| `OnStopUsingGameObject` | `public virtual void OnStopUsingGameObject()` | 停止使用场景物件（旗帜、可搬物体），`Agent.cs:4009` 派发。 |
| `OnRetreating` | `public virtual void OnRetreating()` | 该 Agent 进入撤退状态，`Agent.cs:1809` 派发。 |
| `OnAgentRemoved` | `public virtual void OnAgentRemoved()` | Agent 被移除（阵亡 / 离场）。派发在 `Agent.cs:5155` 附近的清理循环里，**注意无参**——与 `IAgentOriginBase.OnAgentRemoved(float agentHealth)` 不是一回事。 |
| `OnAgentTeleported` | `public virtual void OnAgentTeleported()` | Agent 被传送（`IsTeleportingAgents` 期间或传送指令），`Agent.cs:4266` 派发。 |
| `OnFormationSet` | `public virtual void OnFormationSet()` | Agent 被编入阵型，`Agent.cs:1153` 派发。 |
| `OnAIInputSet` | `public virtual void OnAIInputSet(ref Agent.EventControlFlag eventFlag, ref Agent.MovementControlFlag movementFlag, ref Vec2 inputVector)` | AI 决策输入设置，三个 `ref` 出参。改写它们等于改写 AI 行为。`Agent.cs:1630` 派发。**最容易写坏的回调。** |
| `GetMoraleAddition` | `public virtual float GetMoraleAddition()` | 士气增量，默认 `0f`。**语义是求和**：所有组件的返回值被 `Sum` 起来加到该 Agent 的士气上。覆写时返回值是增量不是绝对值。 |
| `GetMoraleDecreaseConstant` | `public virtual float GetMoraleDecreaseConstant()` | 默认 `1f`。**1.4.5 全树没有任何调用方**，只有一个 override（`SandBox.CampaignAgentComponent`）。不要指望覆写它会生效。 |
| `OnComponentRemoved` | `public virtual void OnComponentRemoved()` | 组件被摘除时的收尾钩子，由 `Agent.RemoveComponent`（`Agent.cs:4393`）在移除成功后调用。**这是注销事件订阅、解绑 delegate 的地方。** |
| `OnDisciplineChanged` | `public virtual void OnDisciplineChanged()` | **1.4.5 全树没有任何调用方，也没有任何 override。** 是一个死回调。 |

## 死成员与陷阱

同一类的兄弟虚方法都被 Agent 调度，唯独它没有任何调用点。

| 成员 | 声明位置 | override | 调用点 | 判定 | 说明 |
|---|---|---:|---:|---|---|
| `OnDisciplineChanged` | bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/AgentComponent.cs:69 | 0 | 0 次（0 行，已复核） | MEASURED | `public virtual void`，但全树仅 1 次出现 = 它自己的声明行，没有任何调用点。正控：同类的 `OnAgentRemoved`(:73) 被 `Agent.cs:5156 component.OnAgentRemoved()` 调用 —— 证明这个类的兄弟虚方法确实会被调度，唯独纪律变化这条回调没接上线。 |

## 真实示例

最简组件——只需 `: base(agent)`，什么 base 都不用调：

```csharp
using TaleWorlds.MountAndBlade;

public class BleedingComponent : AgentComponent
{
    private float _bleedPerSecond;

    public BleedingComponent(Agent agent, float bleedPerSecond)
        : base(agent)
    {
        _bleedPerSecond = bleedPerSecond;
    }

    public override void OnHit(Agent affectorAgent, int damage, in MissionWeapon affectorWeapon, in Blow b, in AttackCollisionData collisionData)
    {
        // 三个 in 形参在覆写签名里也必须写 in
        _bleedPerSecond += damage * 0.01f;
    }

    public override void OnTick(float dt)
    {
        if (_bleedPerSecond <= 0f || !Agent.IsActive())
        {
            return;
        }
        _bleedPerSecond -= dt * 0.5f;
    }
}
```

士气增量——注意返回的是**增量**，会被 `Sum` 累加：

```csharp
using TaleWorlds.MountAndBlade;

public class UnderArrowsMoraleComponent : AgentComponent
{
    public UnderArrowsMoraleComponent(Agent agent)
        : base(agent)
    {
    }

    public override float GetMoraleAddition()
    {
        // 语义是增量：全树所有组件的返回值会被 Sum 起来
        return Agent.GetComponent<BleedingComponent>() != null ? -6f : 0f;
    }
}
```

AI 输入改写——`OnAIInputSet` 的三个 `ref` 出参就是 AI 的方向盘与油门：

```csharp
using TaleWorlds.Library;
using TaleWorlds.MountAndBlade;

public class CowardComponent : AgentComponent
{
    public CowardComponent(Agent agent)
        : base(agent)
    {
    }

    public override void OnAIInputSet(ref Agent.EventControlFlag eventFlag, ref Agent.MovementControlFlag movementFlag, ref Vec2 inputVector)
    {
        if (!Agent.IsActive())
        {
            return;
        }
        Agent nearestEnemy = Agent.Mission.GetClosestEnemyAgent(Agent.Team, Agent.Position, 12f);
        if (nearestEnemy == null)
        {
            return;
        }
        // 强制后退：把移动输入指向远离敌人的方向，并关掉攻击意图
        // MovementControlFlag 是位标记枚举：Forward/Backward/StrafeLeft/... 可以叠加
        Vec2 away = (Agent.Position.AsVec2 - nearestEnemy.Position.AsVec2).Normalized();
        inputVector = away;
        movementFlag = Agent.MovementControlFlag.Backward;
        eventFlag = Agent.EventControlFlag.None;
    }
}
```

挂上去并读回——`AddComponent` 会额外把 `CommonAIComponent` / `HumanAIComponent` 两个快捷属性填好，其余类型只进 `_components` 列表：

```csharp
using TaleWorlds.MountAndBlade;

Agent agent = Mission.Current.MainAgent;
agent.AddComponent(new BleedingComponent(agent, bleedPerSecond: 3f));
BleedingComponent bleeding = agent.GetComponent<BleedingComponent>();
if (bleeding != null)
{
    Debug.Print("component attached to agent " + agent.Index, 0);
}

bool removed = agent.RemoveComponent(bleeding);
Debug.Print("removed = " + removed + " (OnComponentRemoved already fired)", 0);
```

## 风险与边界

- **抽象类 + `protected` 构造器。** 不能 `new`，也不能被不继承它的代码实例化。派生类必须写 `: base(agent)`。
- **两个死回调。** `GetMoraleDecreaseConstant` 与 `OnDisciplineChanged` 在 1.4.5 全树无调用方（后者连 override 都没有）。依赖它们的功能等于不生效。
- **`GetMoraleAddition` 是求和语义。** 返回绝对值会把所有组件的贡献叠成天文数字。
- **`OnAIInputSet` 的 `ref` 形参改错会让 AI 行为异常。** 三个出参分别管事件（攻击/防御意图）、移动模式、方向输入；写入未定义组合值可能让 AI 停止响应指令。
- **`OnHit` 的三个 `in` 形参不能省。** 覆写签名里也必须写 `in`，调用时也必须写 `in`。另注意 `affectorAgent` 可能是 null（环境伤害）。
- **`OnAgentRemoved` 无参。** 它和 `IAgentOriginBase.OnAgentRemoved(float agentHealth)` 名字相同签名不同，别照抄。
- **`Agent` 是 `protected readonly`，组件没有公开的宿主访问器。** 外部拿到组件后想读宿主只能自己额外存一份 `Agent` 引用。
- **`AddComponent` 不去重。** 挂两次同一个组件实例会进两次列表，`GetComponent<T>` 只返回第一个，`RemoveComponent` 按引用相等只摘一个。
- **不存档、不跨任务。** 组件随任务销毁；[AgentSpawnData](../AgentSpawnData/) 那种创建时参数表与它无关。
- **`RemoveComponent` 只对 `CommonAIComponent` / `HumanAIComponent` 做字段清理**（`Agent.cs:4394` 用引用相等判定）。自定义组件摘除后不会有任何字段联动。

## 依赖关系

- 宿主：[Agent](../../mission/Agent/) 持有 `_components` 列表并在 `AddComponent`（`:4375`）/ `RemoveComponent`（`:4388`）/ `GetComponent<T>`（`:2949`）上操作它；派发点散布在 `Agent.cs` 的 1153 / 1630 / 1753 / 1776 / 1809 / 3431 / 3527 / 4009 / 4266 / 4393 / 4600 / 4721 / 4768 / 5155 / 5160 / 5607 各行
- 事件负载类型：`MissionWeapon`、`Blow`、`AttackCollisionData`、`SpawnedItemEntity`、`MissionWeapon`、`ItemObject`（均在 `TaleWorlds.MountAndBlade`）
- 派生实现：[CommonAIComponent](../CommonAIComponent/)（士气 / 恐慌 / 撤退 / 坐骑预留）、[HumanAIComponent](../HumanAIComponent/)（行为参数 / 跟随 / 物件兴趣）、[VictoryComponent](../VictoryComponent/)（欢呼计时）、`SandBox.CampaignAgentComponent`（地图导航与士气衰减）
- 装配入口：[AgentCommonAILogic](../AgentCommonAILogic/) 与 [AgentHumanAILogic](../AgentHumanAILogic/) 是官方唯二的批量装配器；自定义组件通常在 `MissionLogic.OnAgentCreated` 里 `agent.AddComponent(...)`
- 平行插槽：[AgentController](../AgentController/) 同为「挂到 Agent 上」但只有一次 `OnInitialize`，两者不冲突、可共存
- 桶首页：[mission-ext API 分区](../)
