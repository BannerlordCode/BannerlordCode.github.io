---
title: "CautiousBehavior"
description: "「警觉」行为的完整实现：把 agent 的谨慎与巡逻谨慎两种 AI 状态映射成环顾动画、收武器 tick action 与「在可疑点附近随机挪一步」的巡逻逻辑。"
---

# CautiousBehavior

**Namespace:** `SandBox.Missions.AgentBehaviors`
**Module:** `SandBox`
**Type:** `public class CautiousBehavior : AgentBehavior`
**Base:** `SandBox.Missions.AgentBehaviors.AgentBehavior`
**File:** `SandBox.Missions.AgentBehaviors/CautiousBehavior.cs`

## 概述

这是 [AgentBehavior](AgentBehavior) 派生类里逻辑最密的一个，负责一件很具体的事：**让「处于谨慎状态」的 agent 做出符合直觉的表现**。它不移动 agent、不决策、不选目标，只做三件事——播动画（环顾四周 / 待机）、让 agent 把武器收回鞘里、以及在「巡逻时发现了可疑点」的情况下随机往别处挪一小步。

它处理的是**两个独立的 AI 状态**。`OwnerAgent.IsCautious()` 是「站定了，保持警惕」；`OwnerAgent.IsPatrollingCautious()` 是「在巡逻途中对某个可疑位置保持警惕」。前者只播动画，后者才会做随机位移。`GetAvailability` 对两者都给 **10f**（这是行为竞选的权重，不是布尔），对都不是才给 0f 退出竞选。

整个类由一个 `private readonly Timer _waitTimer` 驱动，构造时建成 `new Timer(base.Mission.CurrentTime, 10f, true)`——第三个参数 `autoReset = true`，所以「时间到」之后下次再 `Check` 会自动重新起算。巡逻分支里调用的是 `Reset(CurrentTime, MBRandom.RandomFloat * 4f + 8f)`，也就是把下一次等待重设为 **8~12 秒**的随机值。

## 心智模型

把它当成「**两套表现逻辑共用一个计时器的状态分流器**」。`Tick` 的骨架是：

```csharp
bool flag = true;
if (OwnerAgent.IsCautious())            { /* 分支一：只播动画 + 收武器 */ }
else if (OwnerAgent.IsPatrollingCautious()) { /* 分支二：武器守卫 + 可疑点随机挪步 */ }
if (flag) { _waitTimer.Reset(Mission.CurrentTime); }
```

`flag` 是这套代码的关键。**它初始为 `true`，只有「巡逻谨慎 + 已站到目的地 + 与可疑点距离平方 < 1」这一种情况被置为 `false`**。而 `false` 的唯一后果就是**末尾那句 `if (flag) _waitTimer.Reset(...)` 被跳过**——也就是说：**只有真正走到可疑点跟前的那一帧，计时器才不被重置**；其余所有情况（没在目的地、距离不够、或者根本不是这两种状态）都会每帧把计时器按回当前时间。所以 `_waitTimer` 实际测的是「连续保持这个姿势多久」——只有离开目的地时它才开始真正倒数。

分支一的三小步值得逐字记：到目的地就播 `act_guard_cautious_look_around_1`，否则播 `act_none` 且 `AnimFlags` 是 2；然后 `GetPrimaryWieldedItemIndex() != -1` 才 `Mission.AddTickAction(MissionTickAction.TryToSheathWeaponInHand, OwnerAgent, 0, 1)`；`GetOffhandWieldedItemIndex()` **既不等于 -1 也不等于 4** 才发第二条 tick action。**那个魔数 4 是 `EquipmentIndex.ExtraWeaponSlot`**（`EquipmentIndex` 枚举里 `Weapon0..Weapon3` 是 0~3，`ExtraWeaponSlot = 4`）——额外武器槽不做收武器处理。

分支二的挪步逻辑是纯几何：把 `GetMovementDirection()` **逆时针随机旋转一个整圈**（`MBRandom.RandomFloat * MathF.PI * 2f`），按 `Monster.BodyCapsuleRadius * MBRandom.RandomFloatRanged(20f, 35f)` 也就是**20~35 倍身位半径**跳出去，再用 `FindLongestDirectMoveToPosition(Vec2 target, bool checkBoundaries, bool checkFriendlyAgents, out bool isCollidedWithAgent)` 找能走到的最远点，最后如果新位置离原地超过 `半径 * 10 * 10` 就夹回 `半径 * 10` 的范围内再 `SetAILastSuspiciousPosition(WorldPosition, bool checkNavMeshForCorrection)`。

分支二开头还有一句 `OwnerAgent.SetWeaponGuard((UsageDirection)3)`——**这个魔数 3 在 `UsageDirection` 枚举里是 `AttackRight`**（`None=-1, AttackUp=0, AttackDown=1, AttackLeft=2, AttackRight=3, DefendUp=4, ... DefendAny=8`）。它不是任何 `Defend*` 取值，读源码时很容易误读成「防御姿态」。

最后一个心智锚点：**`GetDebugInfo()` 返回 `string.Empty`**。它实现了抽象成员，但什么都没报——所以在调试面板里这条行为是「哑」的。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `_waitTimer` | `private readonly Timer _waitTimer` | 唯一的内部状态，`readonly` 私有。构造时 `new Timer(base.Mission.CurrentTime, 10f, true)`（autoReset = true）。巡逻分支用 `Reset(CurrentTime, MBRandom.RandomFloat * 4f + 8f)` 把它重设为 8~12 秒随机值。`Tick` 末尾的 `if (flag) _waitTimer.Reset(Mission.CurrentTime)` 意味着**它测的是「连续保持姿势的时长」，而不是「距上次动作的时长」**。 |
| 构造函数 | `public CautiousBehavior(AgentBehaviorGroup behaviorGroup) : base(behaviorGroup)` | 只做一件事：`new Timer(base.Mission.CurrentTime, 10f, true)`。**注意它读的是 `base.Mission.CurrentTime`**——mission 为 null 时（组没接上 mission）构造就炸。 |
| `Tick` | `public override void Tick(float dt, bool isSimulation)` | 全部表现逻辑。`dt` 参数**只被基类吞掉、本类一次都没用**——所有节奏都靠 `_waitTimer` 与 `Mission.CurrentTime`，与帧长无关。两个分支互斥（`if / else if`），末尾统一处理 `flag`。 |
| `GetAvailability` | `public override float GetAvailability(bool isSimulation)` | `!IsCautious() && !IsPatrollingCautious()` 时返回 **0f**（退出竞选），否则返回 **10f**。**`isSimulation` 参数一次都没用**——后台模拟与实时渲染的权重完全相同。 |
| `OnDeactivate` | `protected override void OnDeactivate()` | 停用时收尾：**`!OwnerAgent.IsAlarmed()` 才继续**。然后播 `act_none`（AnimFlags 2），并在主手有武器时发 `Mission.AddTickActionMT(MissionTickAction.TryToSheathWeaponInHand, OwnerAgent, 0, 0)`、副手（同样排除 -1 与 4）发 `AddTickActionMT(..., 1, 0)`。注意是 `AddTickActionMT` 而非 `Tick` 里的 `AddTickAction`——最后一个参数从 1 变成 0。 |
| `OnActivate` | `protected override void OnActivate()` | 只做 `_waitTimer.Reset(Mission.CurrentTime)`——**不带新时长**，所以沿用构造时的 10 秒。这是本类唯一一处写入「连续时长」起点的地方。 |
| `GetDebugInfo` | `public override string GetDebugInfo()` | 实现抽象成员，但**返回 `string.Empty`**。调试面板里这条行为不输出任何信息。 |

## 真实示例

复刻「是否参与竞选」这条判定——权重是 10f 不是 true：

```csharp
public static float AvailabilityFor(Agent agent)
{
    // 0f 是「退出竞选」的约定，不是「权重为零但仍参与」
    if (agent.IsCautious() || agent.IsPatrollingCautious())
    {
        return 10f;
    }

    return 0f;
}
```

复刻收武器的两个分支（含 `EquipmentIndex.ExtraWeaponSlot == 4` 那个魔数）：

```csharp
public static void SheatheWeapons(Mission mission, Agent agent)
{
    if (agent.GetPrimaryWieldedItemIndex() != (int)EquipmentIndex.None)
    {
        // MissionTickAction 枚举的第 0 项是 TryToSheathWeaponInHand
        mission.AddTickAction(
            Mission.MissionTickAction.TryToSheathWeaponInHand, agent, 0, 1);
    }

    EquipmentIndex offhand = agent.GetOffhandWieldedItemIndex();
    if ((int)offhand != (int)EquipmentIndex.None && (int)offhand != (int)EquipmentIndex.ExtraWeaponSlot)
    {
        mission.AddTickAction(
            Mission.MissionTickAction.TryToSheathWeaponInHand, agent, 1, 1);
    }
}
```

复刻巡逻时的随机挪步——注意半径倍数 20~35 与最后的 10 倍夹取：

```csharp
public static Vec2 PickWanderOffset(Agent agent)
{
    Vec2 direction = agent.GetMovementDirection();
    direction.RotateCCW(MBRandom.RandomFloat * (MathF.PI * 2f));

    float radius = agent.Monster.BodyCapsuleRadius;
    return direction * radius * MBRandom.RandomFloatRanged(20f, 35f);
}

public static float ClampRadius(Agent agent)
{
    return agent.Monster.BodyCapsuleRadius * 10f;
}
```

复刻「是否已经站到可疑点跟前」的判定——距离平方小于 1 才算到位：

```csharp
public static bool ArrivedAtSuspiciousPoint(Agent agent)
{
    Vec2 destination = agent.GetAIMoveDestination().AsVec2;
    WorldPosition suspiciousPosition = agent.GetAILastSuspiciousPosition();
    Vec2 suspicious = suspiciousPosition.AsVec2;

    if (destination.DistanceSquared(suspicious) >= 1f)
    {
        return false;
    }

    // 到位之后把可疑点推到 10 倍身位半径之内；
    // 第二个参数是「是否按 navmesh 修正」
    agent.SetAILastSuspiciousPosition(suspiciousPosition, false);
    return true;
}
```

派生一个自己的「原地警戒」行为——注意必须实现 `GetDebugInfo`，而 `GetAvailability` 不覆盖就是永不参与：

```csharp
public class MyAlertStanceBehavior : AgentBehavior
{
    private readonly Timer _stanceTimer;

    public MyAlertStanceBehavior(AgentBehaviorGroup behaviorGroup)
        : base(behaviorGroup)
    {
        _stanceTimer = new Timer(this.Mission.CurrentTime, 6f, true);
    }

    public override float GetAvailability(bool isSimulation)
    {
        return this.OwnerAgent.IsAlarmed() ? 20f : 0f;
    }

    public override void Tick(float dt, bool isSimulation)
    {
        if (_stanceTimer.Check(this.Mission.CurrentTime))
        {
            // 注意：官方 CautiousBehavior 里写的是 (UsageDirection)3，
            // 而 UsageDirection 枚举的 3 是 AttackRight，不是任何一个 Defend*
            this.OwnerAgent.SetWeaponGuard(UsageDirection.AttackRight);
        }
    }

    protected override void OnActivate()
    {
        _stanceTimer.Reset(this.Mission.CurrentTime);
    }

    public override string GetDebugInfo()
    {
        return "MyAlertStance";
    }
}
```

## 风险与边界

- **`Tick` 不用 `dt`。** 所有节奏由 `Mission.CurrentTime` 与 `_waitTimer` 决定。想改节奏只能改计时器，帧率无关。
- **`GetAvailability` 不用 `isSimulation`。** 后台模拟期间这条行为照样竞争权重。
- **魔数 4 是 `EquipmentIndex.ExtraWeaponSlot`。** `Tick` 与 `OnDeactivate` 各判一次这个值；读源码时不知道它是什么会以为「4 是随便写的」。
- **`Tick` 用 `AddTickAction`、`OnDeactivate` 用 `AddTickActionMT`。** 最后一个参数从 1 变成 0，两个 API 名字只差两个字母但语义不同，混用会导致武器收回行为不一致。
- **`_waitTimer` 测的是「连续时长」。** 末尾 `if (flag) Reset(CurrentTime)` 让绝大多数情况每帧重置；只有走到可疑点跟前那一帧才真正开始倒数。理解这一点才能读懂巡逻节奏。
- **`GetDebugInfo` 返回空串。** 调试面板上这条行为是哑的，别以为「没输出」意味着没运行。
- **`OnDeactivate` 有 `IsAlarmed()` 守卫。** 警戒状态下停用这条行为**什么都不做**——动画与收武器都被跳过。
- **`GetAvailability` 返回 10f，与其它行为同分时裁决在组那一层。** 本类不参与 tie-break。
- **构造时读 `base.Mission.CurrentTime`。** 组没接上 mission 就构造会立刻 NRE。
- **挪步幅度是身位半径的 20~35 倍。** 依赖 `OwnerAgent.Monster.BodyCapsuleRadius`；骑乘单位的半径与步行不同，同一套代码在不同体型上的实际位移差很多。
- **`SetAILastSuspiciousPosition` 会改 AI 的持久状态。** 本类每 8~12 秒可能改一次它，影响该 agent 之后整段巡逻路线。
- **不参与存档。** 行为对象随 mission 生死。

## 依赖关系

- 基类：[AgentBehavior](AgentBehavior) 的 `OwnerAgent` / `Mission` / `Navigator` 三个转发成员与 `IsActive` 的启用停用钩子，是本类全部上下文的来源
- 调度方：[AgentBehaviorGroup](AgentBehaviorGroup) 的 `AddBehavior<T>()` 用 `Activator.CreateInstance(typeof(T), this)` 实例化本类，`GetScore` 拿 `GetAvailability` 的返回值做权重
- 装配入口：[BehaviorSets](BehaviorSets) 与 [AgentBehaviorManager](AgentBehaviorManager) 决定哪些角色会拿到这条行为
- AI 状态：`Agent.IsCautious()` / `IsPatrollingCautious()` / `IsAlarmed()` / `IsAIAtMoveDestination()` 四个判断来自 `TaleWorlds.MountAndBlade.Agent`，本类不自己判断状态
- 动画：`ActionIndexCache.act_guard_cautious_look_around_1` / `act_guard_patrolling_cautious_look_around_1` / `act_none` 与 `Agent.SetActionChannel(...)` 是全部视觉输出
- 计时：[Timer](../../core-extra/Timer) 的 `Check(float)` / `Reset(float)` / `Reset(float, float)` 三个方法构成本类的时间轴
- 枚举判据：`EquipmentIndex`（`None = -1`、`ExtraWeaponSlot = 4`）与 `Mission.MissionTickAction`（第 0 项 `TryToSheathWeaponInHand`）是两个魔数的解释
- 移动：[Mission](../../mission-ext/Mission) 的 `AddTickAction` / `AddTickActionMT` / `CurrentTime` 与 `Agent.FindLongestDirectMoveToPosition` / `SetAILastSuspiciousPosition` / `GetAILastSuspiciousPosition` 一起构成挪步的落点
- 桶首页：[campaign-ext API 分区](../)
