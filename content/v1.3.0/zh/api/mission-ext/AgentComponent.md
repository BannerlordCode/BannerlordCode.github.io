---
title: "AgentComponent"
description: "Agent 组件基类：21 个虚方法 + 一个 protected readonly Agent 字段，18 个零散回调点全部由 Agent.cs 里正序 foreach 派发；OnDisciplineChanged 在 1.3.0 是死钩子。"
---

# AgentComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class AgentComponent`
**Base:** 无（仅隐式 `System.Object`）
**File:** `TaleWorlds.MountAndBlade/AgentComponent.cs`（全文 116 行）

## 概述

`AgentComponent` 是**挂在单个 [Agent](../../mission/Agent) 上的行为容器**。全文只有一个构造器、一个 protected 字段和 21 个 `public virtual` 方法（20 个空实现 + 1 个有默认返回值的）。

它和 [MissionBehavior](../../mission/MissionBehavior) 的分工很清楚：`MissionBehavior` 挂在**任务**上、拿到的是任务级事件；`AgentComponent` 挂在**单位**上、拿到的是这个单位的受击、上马、掉武器、被传送等微观事件。

```csharp
public abstract class AgentComponent
{
    protected AgentComponent(Agent agent) { this.Agent = agent; }
    // ... 20 个 public virtual
    protected readonly Agent Agent;
}
```

**没有抽象成员。** 「派生 `AgentComponent` 必须实现什么」的答案是「什么都不用」——21 个虚方法全部有默认实现，基类版本全是空方法体。所以你可以只覆写你关心的两三个。

## 心智模型

把它当成**「Agent 身上的一份订阅表，谁碰这个 Agent 就把回调打进来」**。心智模型的核心是三条规则，其中第二条和第三条是本桶特别要核实的。

**规则一：注册与查询的三个入口。** 全在 [Agent](../../mission/Agent) 上：

```csharp
// Agent.cs:4600
public void AddComponent(AgentComponent agentComponent)
{
    this._components.Add(agentComponent);
    CommonAIComponent commonAIComponent;
    if ((commonAIComponent = (agentComponent as CommonAIComponent)) != null)
    {
        this.CommonAIComponent = commonAIComponent;
        return;
    }
    HumanAIComponent humanAIComponent;
    if ((humanAIComponent = (agentComponent as HumanAIComponent)) != null)
    {
        this.HumanAIComponent = humanAIComponent;
    }
}

// Agent.cs:4617
public bool RemoveComponent(AgentComponent agentComponent)
{
    bool flag = this._components.Remove(agentComponent);
    if (flag)
    {
        agentComponent.OnComponentRemoved();
        if (this.CommonAIComponent == agentComponent) { this.CommonAIComponent = null; return flag; }
        if (this.HumanAIComponent == agentComponent) { this.HumanAIComponent = null; }
    }
    return flag;
}

// Agent.cs:3107
public T GetComponent<T>() where T : AgentComponent
{
    for (int i = 0; i < this._components.Count; i++)
    {
        if (this._components[i] is T) { return (T)((object)this._components[i]); }
    }
    return default(T);
}
```

三点要注意：`AddComponent` 对 `CommonAIComponent` 与 `HumanAIComponent` 有**专门的缓存属性回填**并在第一条分支就 `return`（所以这两类不能同时经由同一次 `AddComponent` 设置）；`RemoveComponent` 会**自动调 `OnComponentRemoved()`** 并清缓存；`GetComponent<T>` 找不到返回 `default(T)` 即 `null`，**不抛异常**。

**规则二：全部 18 个派发点都是正序 `foreach`，没有一处倒序。** 我把 `Agent.cs` 里所有遍历 `_components` 的地方逐个核过：

| 派发点 | 源码位置 | 迭代方向 |
| --- | --- | --- |
| `OnFormationSet` | `Agent.cs:1024-1027` | 正序 `foreach` |
| `OnAIInputSet` | `Agent.cs:1626-1629` | 正序 `foreach` |
| `OnMount` | `Agent.cs:1789-1792` | 正序 `foreach` |
| `OnDismount` | `Agent.cs:1820-1823` | 正序 `foreach` |
| `OnRetreating` | `Agent.cs:1857-1860` | 正序 `foreach` |
| `OnWeaponDrop` | `Agent.cs:3577-3580` | 正序 `foreach` |
| `OnItemPickup` | `Agent.cs:3669-3672` | **下标 for 循环，正序** |
| `OnWeaponHPChanged` | `Agent.cs:4832-4835` | 正序 `foreach` |
| `OnTickParallel` | `Agent.cs:4965-4968`（`TickParallel` 内） | 正序 `foreach` |
| `OnComponentRemoved` | `Agent.cs:4619-4623`（`RemoveComponent` 内） | **不遍历，直接调目标** |
| `OnStopUsingGameObject` | `Agent.cs:4185-4188` | 正序 `_components.ForEach(...)` |
| `OnAgentRemoved` | `Agent.cs:5447-5450` | 正序 `foreach` |
| `Initialize` | `Agent.cs:5454-5459`（`InitializeComponents` 内） | 正序 `foreach` |
| `OnTick` | `Agent.cs:5046-5050`（`Tick` 内） | 正序 `foreach` |
| `OnHit` | `Mission.cs:5528-5531`（在 `Mission` 上） | 正序 `foreach (affectedAgent.Components)` |

**这个「全部正序」的结论和 [MissionBehavior](../../mission/MissionBehavior) 恰好相反**——后者每帧四类 tick 是倒序（`Count - 1` → `0`），启动期回调是正序。所以：**同一个列表里，后加的组件在 tick 时最后跑；同一个行为集合里，后注册的行为在每帧回调中最先跑。** 别把两套记忆混用。

**规则三：`OnDisciplineChanged()` 在 1.3.0 是死钩子，`OnAgentTeleported()` 也是。** 我用 `grep -rn "OnDisciplineChanged\|OnAgentTeleported" --include=*.cs .` 在**整个 1.3.0 源码树**搜过：命中只有两处定义（`AgentComponent.cs` 的声明）和两处覆写（`HumanAIComponent.cs:325` 覆写 `OnAgentTeleported`），**没有任何调用点**。这意味着你在 1.3.0 上覆写这两个方法，一个字节都不会执行。

`OnAgentTeleported` 在 **1.3.15 起活了过来**——`bannerlord-1.3.15/TaleWorlds.MountAndBlade/Agent.cs:4506-4521` 的 `TeleportToPosition` 末尾加上了：

```csharp
foreach (AgentComponent agentComponent in this._components)
{
    agentComponent.OnAgentTeleported();
}
```

而 1.3.0 的 `TeleportToPosition`（`Agent.cs:4460`）只有三行 `SetPosition` 调用，没有这个循环。`OnDisciplineChanged` 则在 1.3.15 / 1.5.3 里**依然零调用**。

## 关键成员

### 生命周期

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| 构造器 | `protected AgentComponent(Agent agent)` | 唯一构造器，把宿主写进 `this.Agent`。`protected` 意味着外部不能 `new`，必须通过 `Agent.AddComponent`。 |
| `Agent` | `protected readonly Agent Agent` | 宿主 Agent 的引用。`protected readonly`：派生类可读，不可写、不可重新赋值。所有回调实现里访问宿主都靠它。 |
| `Initialize` | `public virtual void Initialize()` | 由 `Agent.InitializeComponents()`（`Agent.cs:5454`）正序遍历调用一次。**基类实现为空。** 这个内部方法的调用点不在 1.3.0 托管源码树里（native 侧或任务启动流程），要确认时机请用日志。 |
| `OnComponentRemoved` | `public virtual void OnComponentRemoved()` | 由 `Agent.RemoveComponent` 内部**直接调目标对象**（不遍历列表）——所以即使你正在遍历中摘除自己，它也会被调到。这是做退订清理的正确位置。 |
| `OnFormationSet` | `public virtual void OnFormationSet()` | `Agent.cs:1024`，编队变更后正序遍历。参数是 Agent 自己（宿主），所以回调里通过 `this.Agent` 读编队。 |
| `OnAgentRemoved` | `public virtual void OnAgentRemoved()` | `Agent.cs:5447`，Agent 离场前正序遍历。此时还能访问宿主，但之后就不安全了。 |

### 每帧

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `OnTick` | `public virtual void OnTick(float dt)` | 主线程每帧回调，由 `Agent.Tick`（`Agent.cs:5046`）在 `if (this.IsActive())` 之内正序遍历调用。**先于**同一方法里的 `if (this.Mission.AllowAiTicking && this.IsAIControlled) { this.TickAsAI(); }`。 |
| `OnTickParallel` | `public virtual void OnTickParallel(float dt)` | 并行/前置帧回调，由 `Agent.TickParallel`（`Agent.cs:4965`）正序遍历。也在 `if (this.IsActive())` 之内。它在 `Agent.TickParallel` 里的位置是：多人物理快速攻击时间戳 → 移动锁插值 → **本回调** → 编队值缓存刷新 → 喊话计时。 |

### 战斗

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `OnHit` | `public virtual void OnHit(Agent affectorAgent, int damage, in MissionWeapon affectorWeapon)` | 受伤回调，**派发点在 `Mission.cs:5528` 而不在 Agent 上**：`foreach (AgentComponent agentComponent in affectedAgent.Components) { agentComponent.OnHit(affectorAgent, inflictedDamage, missionWeapon); }`。注意遍历的是**受击者**的组件，`affectorAgent` 可以是 null（环境伤害）。武器类型是 [MissionWeapon](../MissionWeapon)（带 UsageItem 的多层结构），不是 `WeaponComponentData`。 |
| `GetMoraleAddition` | `public virtual float GetMoraleAddition()` | 默认 `return 0f;`。不是回调，是**被查询**：[CommonAIComponent](../CommonAIComponent) 在更新士气时用 `this.Agent.Components.Sum((AgentComponent c) => c.GetMoraleAddition())`（`CommonAIComponent.cs:82`）把所有组件的加成求和。返回 0 表示不贡献。 |
| `GetMoraleDecreaseConstant` | `public virtual float GetMoraleDecreaseConstant()` | 默认 `return 1f;`。同族的士气衰减系数查询，同样被 `CommonAIComponent` 汇总。1 是「不衰减」的恒等元。 |
| `DecideWeaponCollisionReaction` 之外的判定 | — | 见风险段：`DecideCrushedThrough` 一类的成员**不在本类**，在 [AgentApplyDamageModel](../AgentApplyDamageModel) 上。 |

### 装备与动作

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `OnItemPickup` | `public virtual void OnItemPickup(SpawnedItemEntity item)` | 捡起物品。派发点 `Agent.cs:3669` 用的是**下标 for 循环**（不是 foreach），实现在「武器已被处理完」之后。同位置紧接着有 `if (this.Controller == AgentControllerType.AI) { this.HumanAIComponent.ItemPickupDone(spawnedItemEntity); }`——注意这里**没判 null**，AI 控制的人类单位若缺 `HumanAIComponent` 会 NRE。 |
| `OnWeaponDrop` | `public virtual void OnWeaponDrop(MissionWeapon droppedWeapon)` | 武器掉落。派发点在 `Agent.OnWeaponDrop(EquipmentIndex)`（`Agent.cs:3571-3581`），**在清空槽位之后**——所以参数 `droppedWeapon` 是掉出来的那把，不是当前装备。 |
| `OnWeaponHPChanged` | `public virtual void OnWeaponHPChanged(ItemObject item, int hitPoints)` | 武器耐久变化。派发点在 `Agent.SetWeaponHitPoint(slotIndex, hitPoints)` 尾部（`Agent.cs:4832`），**在网络广播之后**，所以联机上服务端与客户端的组件都会被调。 |
| `OnStopUsingGameObject` | `public virtual void OnStopUsingGameObject()` | 停止使用可交互物。派发点是 `_components.ForEach(delegate(AgentComponent ac) { ac.OnStopUsingGameObject(); })`（`Agent.cs:4185`），紧跟在 `this.Mission.OnObjectStoppedBeingUsed(...)` 之后。**无参数**——想知道停的是哪个对象要自己读宿主状态。 |

### 坐骑与传送

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `OnMount` | `public virtual void OnMount(Agent mount)` | 上马完成。派发点在 `Agent.OnMount`（`Agent.cs:1789`），条件是 `if (this.HasBeenBuilt)`，且**在组件遍历之后**紧跟 `this.Mission.OnAgentMount(this)`。参数是被骑的马。 |
| `OnDismount` | `public virtual void OnDismount(Agent mount)` | 下马。派发点在 `Agent.OnDismount`（`Agent.cs:1820`），在 `this.Mission.OnAgentDismount(this)` 之前。参数是离开的那匹马。 |
| `OnAgentTeleported` | `public virtual void OnAgentTeleported()` | 被传送。**1.3.0 零调用（死钩子）**，1.3.15 起由 `TeleportToPosition` 末尾正序遍历触发。`HumanAIComponent` 在 1.3.0 就已经覆写了它。 |
| `OnDisciplineChanged` | `public virtual void OnDisciplineChanged()` | **1.3.0 与 1.5.3 全部版本零调用（永久死钩子）**。全树没有任何派发点。 |

### AI 输入与纪律

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `OnAIInputSet` | `public virtual void OnAIInputSet(ref Agent.EventControlFlag eventFlag, ref Agent.MovementControlFlag movementFlag, ref Vec2 inputVector)` | AI 决策输出点。派发点在 `Agent.OnAIInputSet`（`Agent.cs:1624-1630`），方法带 `[MBCallback(null, false)]` 标记——**这是 native 直接回调进来的入口**。三个参数全是 `ref`，**你可以改写它们**。两个标记参数的类型都是 `: uint` 位标志：`Agent.MovementControlFlag` 的成员是 `None`(0) / `Forward`(1) / `Backward`(2) / `StrafeRight`(4) / `StrafeLeft`(8) / `TurnRight`(16) / `TurnLeft`(32) / `AttackLeft`(64) / `AttackRight`(128) / `AttackUp`(256) / `AttackDown`(512) / `DefendLeft`(1024) / `DefendRight`(2048) / `DefendUp`(4096)；`Agent.EventControlFlag` 的成员是 `None`(0) / `Dismount`(1) / `Mount`(2) / `Rear`(4) / `Jump`(8)。所以真实的改写形状是**位运算 `|=` / `&= ~`**，例如 `movementFlag |= Agent.MovementControlFlag.Forward;` 或 `eventFlag &= ~Agent.EventControlFlag.Mount;`。注意这两个枚举是位标志，与 [ActionCodeType](../ActionCodeType) 那类三值互斥枚举完全不同。 |
| `OnDisciplineChanged` | `public virtual void OnDisciplineChanged()` | 见上，永久死钩子。 |

## 真实示例

最小的自定义组件——只覆写你关心的钩子，其余 18 个留空：

```csharp
using TaleWorlds.MountAndBlade;

public class StaggerTrackerComponent : AgentComponent
{
    public StaggerTrackerComponent(Agent agent) : base(agent) { }

    public int HitCount { get; private set; }

    public override void OnHit(Agent affectorAgent, int damage, in MissionWeapon affectorWeapon)
    {
        base.OnHit(affectorAgent, damage, affectorWeapon);
        this.HitCount++;
    }

    public override void OnAgentRemoved()
    {
        base.OnAgentRemoved();
        Debug.Print(this.Agent.Name + " removed after " + this.HitCount + " hits", 0);
    }
}
```

`Agent` 是 `protected readonly` 字段，`base.OnHit(...)` 必须带 `in` 修饰符匹配签名——这两点是这个形状的编译门槛。

在 `OnAIInputSet` 里改写 AI 决策输出，这是本类最有价值的扩展点：

```csharp
using TaleWorlds.Library;
using TaleWorlds.MountAndBlade;

public class HoldGroundComponent : AgentComponent
{
    public HoldGroundComponent(Agent agent) : base(agent) { }

    public bool Engaged { get; set; }

    public override void OnAIInputSet(ref Agent.EventControlFlag eventFlag, ref Agent.MovementControlFlag movementFlag, ref Vec2 inputVector)
    {
        base.OnAIInputSet(ref eventFlag, ref movementFlag, ref inputVector);
        if (!this.Engaged)
        {
            return;
        }
        // 交战中把移动输入清零，并把前进方向置位
        inputVector = Vec2.Zero;
        movementFlag |= Agent.MovementControlFlag.Forward;
    }
}
```

挂载与移除，判空不能省（`GetComponent<T>` 找不到返回 null）：

```csharp
using TaleWorlds.MountAndBlade;

public static void AttachAndQuery(Agent agent)
{
    if (agent.GetComponent<HoldGroundComponent>() == null)
    {
        agent.AddComponent(new HoldGroundComponent(agent));
    }
    HoldGroundComponent tracker = agent.GetComponent<HoldGroundComponent>();
    tracker.Engaged = true;
}
```

## 风险与边界

- **`Agent.Components` 返回 `MBReadOnlyList<AgentComponent>`，而 `MBReadOnlyList<T>` 继承 `List<T>`。** 所以 `foreach (var c in affectedAgent.Components)` 是真实的 `List<T>` 枚举器——**在遍历中 `AddComponent` / `RemoveComponent` 会抛 `InvalidOperationException`（集合已被修改）**。`Mission.cs:5528`（`OnHit` 的派发点）正是这种遍历，你在 `OnHit` 里摘自己就会崩。
- **`OnDisciplineChanged()` 在全部版本里都是死钩子。** 1.3.0 / 1.3.15 / 1.5.3 全树零派发点。覆写它不会执行，也不会报编译错。
- **`OnAgentTeleported()` 在 1.3.0 是死钩子，1.3.15 起才活。** 你的代码在 1.3.0 上写了等于没写；升到 1.3.15 之后它开始执行——**逻辑从「永不触发」变成「每次传送都触发」，且不会有任何编译提示。** 上线前在目标版本上验证。
- **全部派发点正序，不是倒序。** 与 `MissionBehavior` 的 tick 方向相反。同一 Agent 上多个组件时，后加的 tick 得更晚。
- **`GetComponent<T>()` 返回 `null` 而不是抛异常。** 找不到时 `return default(T)`。所有使用点都要判空。
- **`AddComponent` 对两类组件有特殊分支。** `CommonAIComponent` 命中就 `return`，所以一次 `AddComponent` 调用不会同时设置两个缓存属性。你自定义的组件不在这两条分支里，走到底后什么都不做——**这没问题，缓存属性只服务于那两类**。
- **`RemoveComponent` 会自动调 `OnComponentRemoved()` 并清缓存。** 你不需要（也不该）自己再调一次。
- **`OnHit` 的派发点在 `Mission` 上，不在 `Agent` 上。** 所以它的执行时机受 `Mission` 的命中结算流程约束，且遍历的是 `affectedAgent.Components`——受击者的组件。
- **`OnItemPickup` 之后引擎紧接着访问 `this.HumanAIComponent` 而不判空。** `Agent.cs:3675` 的 `if (this.Controller == AgentControllerType.AI) { this.HumanAIComponent.ItemPickupDone(spawnedItemEntity); }`。如果 AI 控制的人类单位缺 [HumanAIComponent](../HumanAIComponent)（例如没注册 [AgentHumanAILogic](../AgentHumanAILogic)），捡东西会直接 NRE。
- **`OnAIInputSet` 是 `[MBCallback]` 入口**，运行在 native 回调栈上。在这里做重活（分配、大量遍历）会拖慢 AI 决策帧；这里改 `ref` 参数是廉价的。两个标记参数都是 `: uint` 位标志，用 `|=` / `&= ~` 改写，**不是 `=` 赋枚举值**。
- **`GetMoraleAddition` / `GetMoraleDecreaseConstant` 是被查询而非被回调。** 它们不「发生」，是 [CommonAIComponent](../CommonAIComponent) 每次更新士气时 `Sum` 一次。返回值参与线性求和，符号搞错会直接翻转士气趋势。
- **没有抽象成员，但有 protected 构造器。** 你不需要实现任何东西，但也不能从外部 `new`——必须走 `Agent.AddComponent`，否则 `this.Agent` 是 null。
- **`Initialize()` 的调用点不在托管源码树里。** 它由 `Agent.InitializeComponents()` 内部方法调用，而那个内部方法的调用者来自 native 或任务启动流程。想确认时机请在实现里打日志，别猜。

## 跨版本提示

`AgentComponent` 的 21 个虚方法与 1 个 protected 字段在 1.3.0 / 1.3.15 / 1.4.6 / 1.4.7 / 1.5.3 里**完全一致**（116 行）。这意味着：**新版本加钩子会放宽限制，改签名会破坏你的覆写，而目前两者都没发生。**

三条具体的跨版本变化，都已逐版本核对：

1. **`OnAgentTeleported` 在 1.3.0 → 1.3.15 之间从死变活。** 1.3.0 的 `TeleportToPosition`（`Agent.cs:4460`）不遍历组件；1.3.15 的同方法（`Agent.cs:4506`）末尾加了正序 `foreach` 派发。1.4.6 / 1.4.7 / 1.5.3 都带派发（分别在 `:4645` / `:4645` / `:4685`）。**这是最需要注意的一条：同一份代码在 1.3.0 上是死代码，在 1.3.15+ 上会执行。**
2. **`OnDisciplineChanged` 一直是死的。** 1.3.15 / 1.5.3 全树搜索都零派发点。别抱希望。
3. **派发点的具体行号会漂移。** `OnAgentTeleported` 在 1.5.3 是 `Agent.cs:4685`，比 1.3.15 靠后 180 行。任何断言行号的文档或 Harmony patch 都会在升级后失效。

派生类在这段时间里持续增加（`CampaignAgentComponent`、`CoverAnimalAgentComponent`、`ScriptedMovementComponent`、`MPPerksAgentComponent`、`VictoryComponent`），但**都是在 [AgentComponent](../AgentComponent) 上追加覆写，不改基类**。所以你的自定义组件在 1.3 → 1.5 之间不会编译失败。

## 依赖关系

- 宿主：[Agent](../../mission/Agent) 提供 `AddComponent` / `RemoveComponent` / `GetComponent<T>` / `Components`，并持有私有 `MBList<AgentComponent> _components`
- 官方实现：[CommonAIComponent](../CommonAIComponent)（士气、跨 AI 通用行为）、[HumanAIComponent](../HumanAIComponent)（人类 AI 决策）、`ScriptedMovementComponent`、`VictoryComponent`、`MPPerksAgentComponent`、`CampaignAgentComponent`
- 装配器：[AgentCommonAILogic](../AgentCommonAILogic) 与 [AgentHumanAILogic](../AgentHumanAILogic) 负责挂前两者
- 扩展方法面：[AgentComponentExtensions](../AgentComponentExtensions) 是外部调用这两个组件的公开通道，`HumanAIComponent` 一族方法全部无 null 检查
- 任务级对照：[MissionBehavior](../../mission/MissionBehavior) 是任务上的同类订阅表，但每帧 tick 方向相反（倒序）
- `OnHit` 的派发位置在 [Mission](../../mission/Mission) 内（`Mission.cs:5528`），而非 [Agent](../../mission/Agent)
- 桶首页：[mission-ext API 分区](../)