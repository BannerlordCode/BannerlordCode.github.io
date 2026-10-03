---
title: "AgentPathNavMeshChecker"
description: "城门前用路检测器：Tick 每帧判「有没有人正要走这道门」，命中即置 _isBeingUsed 并给 1 秒宽限期；CastleGate.AutoOpen 靠 HasAgentsUsingPath 决定开关门。"
---

# AgentPathNavMeshChecker

**Namespace:** TaleWorlds.MountAndBlade.Source.Objects.Siege
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class AgentPathNavMeshChecker`
**Base:** 无（仅隐式 `System.Object`）
**File:** `TaleWorlds.MountAndBlade/Source/Objects/Siege/AgentPathNavMeshChecker.cs`（全文 158 行）

## 概述

`AgentPathNavMeshChecker` 回答一个非常具体的攻城问题：**「还有人正打算从这道门穿过吗」**。它的输出只有一个布尔值，供 [CastleGate](../CastleGate) 的自动开门逻辑判断。

全文 158 行，3 个 public 方法（1 个构造器 + `Tick` / `TickOccasionally` / `HasAgentsUsingPath`），13 个 private 字段，外加一个嵌套枚举 `Direction`。

**全 1.3.0 源码树里只有一个消费者**：`CastleGate.cs:259`

```csharp
this._pathChecker = new AgentPathNavMeshChecker(
    Mission.Current, base.GameEntity.GetGlobalFrame(), 2f, this.NavigationMeshId,
    BattleSideEnum.Defender, AgentPathNavMeshChecker.Direction.BothDirections, 14f, 3f);
```

以及 `CastleGate.cs:746-758` 的每帧调用：

```csharp
if (this.AutoOpen && this._pathChecker != null)
{
    this._pathChecker.Tick(dt);
    if (this._pathChecker.HasAgentsUsingPath())
    {
        if (this.State != CastleGate.GateState.Open) { this.OpenDoor(); }
    }
    else if (this.State != CastleGate.GateState.Closed) { this.CloseDoor(); }
}
```

## 心智模型

把它当成**「一个带滞回（hysteresis）的占用标志生成器」**。心智模型分四块，第四块是这个类的设计核心。

**第一块：`Tick(float)` 做两件事，两件都别跳过。** 完整流程（`:24-97`）：

```csharp
public void Tick(float dt)
{
    float currentTime = this._mission.CurrentTime;
    // —— 第一段：维护范围查询缓存 ——
    if (this._tickOccasionallyTimer == null || this._tickOccasionallyTimer.Check(currentTime))
    {
        float dt2 = dt;
        if (this._tickOccasionallyTimer != null) { dt2 = this._tickOccasionallyTimer.ElapsedTime(); }
        this._tickOccasionallyTimer = new Timer(currentTime, 0.1f + MBRandom.RandomFloat * 0.1f, true);
        this.TickOccasionally(dt2);
    }
    // —— 第二段：判定占用 ——
    bool flag = false;
    foreach (Agent agent in this._nearbyAgents) { /* ... 见第三块 ... */ }
    // —— 第三段：滞回 ——
    if (flag) { this._isBeingUsed = true; this._setBeingUsedToFalseTimer = null; }
    else if (this._setBeingUsedToFalseTimer == null) { this._setBeingUsedToFalseTimer = new Timer(currentTime, 1f, true); }
    if (this._setBeingUsedToFalseTimer != null && this._setBeingUsedToFalseTimer.Check(currentTime))
    {
        this._setBeingUsedToFalseTimer = null;
        this._isBeingUsed = false;
    }
}
```

第一段负责刷新 `_nearbyAgents`，**只有在随机 0.1~0.2 秒的定时器到期时才做**（间隔带随机抖动，避免所有城门同帧查询）。首次调用时 `_tickOccasionallyTimer == null`，条件短路成立，所以**第一次 `Tick` 一定会刷新缓存**。

**第二块：`TickOccasionally(float dt)` 的参数 `dt` 完全没被用到。**

```csharp
public void TickOccasionally(float dt)
{
    this._nearbyAgents = this._mission.GetNearbyAgents(
        this._pathFrameToCheck.origin.AsVec2, this._maxDistanceCheck, this._nearbyAgents);
}
```

它只是把 `Mission.GetNearbyAgents(Vec2, float, MBList<Agent>)`（[Mission](../../mission/Mission) `:6614`）的返回值赋回去——**注意那个重载是把传入的列表复用并返回**，所以这里没有分配。`dt` 是纯粹为了与 `Tick` 的调用形状对齐而存在的。**这个方法可以公开调用来手动强制刷新**（比如在你改了 `_maxDistanceCheck` 之后）。

**第三块：占用判定有四条并列路径，任一命中即 `flag = true`。** 逐条（`:41-81`）：

外层三重守卫：`(_teamToCollect == BattleSideEnum.None || (agent.Team != null && agent.Team.Side == _teamToCollect)) && agent.IsAIControlled`。

1. **同导航面**：`agent.GetCurrentNavigationFaceId() == _navMeshId` → 命中并 `break`。
2. **贴近门口**：`this._isBeingUsed && position.DistanceSquared(_pathFrameToCheck.origin) < _radiusToCheck * _radiusToCheck` → 命中并 `break`。注意这里读的是**上一次的 `_isBeingUsed`**，且乘的是 `_radiusToCheck` 的一次方（`2f`），不是平方半径常量。
3. **方向性路径**：`agent.MovementVelocity.LengthSquared > 0.01f` 且 `agent.HasPathThroughNavigationFaceIdFromDirection(_navMeshId, direction)`。`direction` 由 `Direction` 决定——`ForwardOnly` 取 `_pathFrameToCheck.rotation.f.AsVec2`、`BackwardOnly` 取其相反数、`BothDirections` 取 `Vec2.Zero`。命中后再算距离：`agent.GetPathDistanceToPoint(ref _pathFrameToCheck.origin)`，若返回值 `>= 100000f`（引擎表示「无路径」的哨兵）则退化成直线距离 `agent.Position.Distance(_pathFrameToCheck.origin)`。然后判 `num < _radiusToCheck * 2f || num / agent.GetMaximumForwardUnlimitedSpeed() < _agentMoveTime`。**第二个条件是「按最高速度跑完这段路要花的时间短于 `_agentMoveTime`」**——这才是这个类的真正用途：不是判断「有人在门口」，而是判断「有人正在快速穿过」。
4. 命中这条路径时**不 `break`**（继续扫完整个列表），因为 `flag` 已经是 true 了但代码没提前退出——这只是效率损失，不影响正确性。

**第四块：滞回是双向的，但宽限期只在「空」这一侧。** 第三段代码给出：

- 命中（`flag == true`）→ 立即 `_isBeingUsed = true`，并把 `_setBeingUsedToFalseTimer` 置 `null`（**取消宽限期**）。
- 未命中且宽限计时器为 `null` → 启动一个 `Timer(currentTime, 1f, true)`（1 秒）。
- 宽限计时器到期 → `_isBeingUsed = false`，计时器置 `null`。

所以：**有人要用门立刻开，没人要用也要等 1 秒才关。** 这个 1 秒是硬编码字面量（不是常量）。它的效果是防止「一帧内路径数据抖动导致门反复开关」。

## 关键成员

### 嵌套枚举

| 成员 | 值 | 这个成员是做什么用的 |
| --- | --- | --- |
| `Direction.ForwardOnly` | 0 | 只接受「顺着门朝向穿过」的路径。`Tick` 里 `direction = this._pathFrameToCheck.rotation.f.AsVec2;` |
| `Direction.BackwardOnly` | 1 | 只接受反向路径。`direction = -this._pathFrameToCheck.rotation.f.AsVec2;` |
| `Direction.BothDirections` | 2 | 两个方向都接受。`direction = Vec2.Zero;` —— **零向量被 native 当作「不限方向」**。官方城门用的是这个。 |

枚举是 `AgentPathNavMeshChecker` 的嵌套类型，写全名要带外层。

### 公开成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| 构造器 | `public AgentPathNavMeshChecker(Mission mission, MatrixFrame pathFrameToCheck, float radiusToCheck, int navMeshId, BattleSideEnum teamToCollect, AgentPathNavMeshChecker.Direction directionToCollect, float maxDistanceCheck, float agentMoveTime)` | 八个参数全部存进对应 private 字段，函数体是八行顺序赋值，**没有任何校验**。`radiusToCheck` 一字面意思是「贴近半径」与「路径距离阈值」两处共用的值；`maxDistanceCheck` 是范围查询半径；`agentMoveTime` 是「跑完要花多久」的时间阈值。官方的实参是 `(Mission.Current, gateFrame, 2f, NavigationMeshId, BattleSideEnum.Defender, BothDirections, 14f, 3f)`。 |
| `Tick` | `public void Tick(float dt)` | 每帧入口。三段逻辑：刷新缓存（随机 0.1~0.2 秒一次）→ 扫 `_nearbyAgents` 判定占用 → 更新滞回状态机。`dt` **只在第一段被用来覆盖 `dt2` 的初值**，且仅在定时器已存在时才有意义；判定逻辑完全不看 `dt`。 |
| `TickOccasionally` | `public void TickOccasionally(float dt)` | 强制刷新 `_nearbyAgents`。函数体只有一句 `this._nearbyAgents = this._mission.GetNearbyAgents(origin.AsVec2, _maxDistanceCheck, _nearbyAgents);`。**`dt` 参数未被使用。** 返回 `void`，无法判断刷新到了多少人。 |
| `HasAgentsUsingPath` | `public bool HasAgentsUsingPath()` | 返回 `_isBeingUsed`。**纯查询，不改状态、不刷新缓存**——如果上一帧没调 `Tick`，它给的是上次的判定结果。 |

### private 字段

| 字段 | 类型 | 用途 |
| --- | --- | --- |
| `_mission` | `Mission` | `CurrentTime` 来源与 `GetNearbyAgents` 的宿主 |
| `_pathFrameToCheck` | `MatrixFrame` | 判定中心点用 `origin`，朝向用 `rotation.f.AsVec2` |
| `_radiusToCheck` | `float` | 贴近判定用它的**一次方平方**；路径距离判定用 `× 2f` |
| `_navMeshId` | `int` | 目标导航面 ID，来自 `CastleGate.NavigationMeshId` |
| `_teamToCollect` | `BattleSideEnum` | 只统计这一侧；`None` 表示不限 |
| `_directionToCollect` | `Direction` | 决定 `HasPathThroughNavigationFaceIdFromDirection` 的方向参数 |
| `_maxDistanceCheck` | `float` | 范围查询半径（官方 14 米） |
| `_agentMoveTime` | `float` | 时间阈值（官方 3 秒） |
| `_tickOccasionallyTimer` | `Timer` | 缓存刷新节流器，首次为 `null` |
| `_nearbyAgents` | `MBList<Agent>` | 缓存字段，**有初始化器** `new MBList<Agent>()`，所以首次 `Tick` 前也非 null |
| `_isBeingUsed` | `bool` | 输出标志，默认 `false` |
| `_setBeingUsedToFalseTimer` | `Timer` | 1 秒宽限计时器，默认 `null` |

## 真实示例

官方 [CastleGate](../CastleGate) 的用法——构造 + 每帧 tick + 查询：

```csharp
using TaleWorlds.Core;
using TaleWorlds.Engine;
using TaleWorlds.Library;
using TaleWorlds.MountAndBlade;
using TaleWorlds.MountAndBlade.Source.Objects.Siege;

public static AgentPathNavMeshChecker BuildGateChecker(Mission mission, GameEntity gate, int navMeshId)
{
    return new AgentPathNavMeshChecker(
        mission,
        gate.GetGlobalFrame(),
        2f,
        navMeshId,
        BattleSideEnum.Defender,
        AgentPathNavMeshChecker.Direction.BothDirections,
        14f,
        3f);
}
```

在自己的逻辑里每帧驱动它（注意 `Tick` 需要一个真实的 [Mission](../../mission/Mission)，否则 `_mission.CurrentTime` 会 NRE）：

```csharp
using TaleWorlds.MountAndBlade;

public class GateAutoOpenBehavior : MissionBehavior
{
    private AgentPathNavMeshChecker _checker;

    public override MissionBehaviorType BehaviorType
    {
        get { return MissionBehaviorType.Other; }
    }

    public override void AfterStart()
    {
        base.AfterStart();
    }

    public override void OnMissionTick(float dt)
    {
        base.OnMissionTick(dt);
        if (this._checker == null)
        {
            return;
        }
        this._checker.Tick(dt);
        if (this._checker.HasAgentsUsingPath())
        {
            Debug.Print("gate in use", 0);
        }
    }
}
```

**注意最后这一点：`MissionBehavior` 的 tick 是倒序遍历的**（`Mission.OnPreTick` / `OnMissionTick` 都是 `for (int i = this.MissionBehaviors.Count - 1; i >= 0; i--)`），而 `AgentComponent` 的 tick 派发是**正序** `foreach`。同样的「后注册先跑」直觉在这两套体系里方向相反，见 [MissionBehavior](../../mission/MissionBehavior) 与 [AgentComponent](../AgentComponent)。

## 风险与边界

- **构造器零校验。** `mission` 为 null 会在第一次 `Tick` 的 `this._mission.CurrentTime` 上 NRE；`navMeshId` 传错值会让第一条判定路径永不命中；`radiusToCheck` 传 0 会让贴近判定退化成「距离严格小于 0」即永不命中。
- **`dt` 参数在 `Tick` 里几乎无用。** 它只作为 `dt2` 的初值，而 `dt2` 只在 `_tickOccasionallyTimer != null` 时被 `ElapsedTime()` 覆盖，最后传给 `TickOccasionally(float dt)`——**而那个参数又完全不用**。所以 `Tick(dt)` 里的 `dt` 是彻头彻尾的死参数。
- **`_radiusToCheck` 一字面两义。** 贴近判定用 `DistanceSquared < _radiusToCheck * _radiusToCheck`（等价于距离 < radius），路径距离判定用 `num < _radiusToCheck * 2f`（等价于距离 < 2×radius）。**同一字段两种尺度，改一个会同时影响两条路径。**
- **1 秒宽限是硬编码字面量**，不是常量，没有配置入口。它只保护「关」这一侧：命中时立刻把计时器置 `null`，不会有延迟开门。
- **刷新间隔带随机抖动（0.1 + `MBRandom.RandomFloat` × 0.1）。** 所以**从构造到第一次判定之间可能有最多 0.2 秒的延迟**——但首次 `Tick` 因为 `_tickOccasionallyTimer == null` 会立刻刷新，所以实际延迟只在「构造后第一次 `Tick` 之前」这一窗口内存在。
- **`HasAgentsUsingPath()` 不刷新缓存。** 单独调用它得到的是上一次 `Tick`（或上一次 `TickOccasionally`）的快照。想拿最新结果必须先 `Tick` 或 `TickOccasionally`。
- **只统计 `IsAIControlled` 的单位。** 玩家自己控制的单位走到城门前不会触发开门判定——这是官方设计（玩家自己会开门），但你复用这个类时要清楚。
- **`_teamToCollect` 的 `None` 分支是真的「不限」。** 条件是 `_teamToCollect == BattleSideEnum.None || (agent.Team != null && agent.Team.Side == _teamToCollect)`。传 `None` 时连 `agent.Team != null` 都不检查。
- **路径距离的 100000 哨兵要靠手写兜底。** `GetPathDistanceToPoint` 返回 `>= 100000f` 时改用直线距离。**如果你自己重写这段判定而忘了这个兜底，拿到的就是一个无意义的大数**，「跑完要 3 秒内」的条件永远为 false。
- **`GetMaximumForwardUnlimitedSpeed()` 可能返回 0。** 极端情况下（Agent 未激活）除法会得到 `Infinity` 或 `NaN`——本类没有防御。`NaN` 与任何数比较都是 false，等于永不命中。
- **命名空间带 `Source` 一层。** `TaleWorlds.MountAndBlade.Source.Objects.Siege`，需要 `using TaleWorlds.MountAndBlade.Source.Objects.Siege;`。这个命名空间下的类型属于攻城内部实现，跨程序集引用时注意程序集边界。
- **类不继承任何东西，也没有接口。** 你无法用继承加拦截，只能构造后自己包一层。

## 跨版本提示

`AgentPathNavMeshChecker` 的 158 行在 1.3.0 / 1.3.15 / 1.4.6 / 1.4.7 / 1.5.3 里一致：三个公开方法、十三个 private 字段、三个 `Direction` 枚举值全部未变。唯一消费者 [CastleGate](../CastleGate) 的构造实参 `(2f, NavigationMeshId, BattleSideEnum.Defender, BothDirections, 14f, 3f)` 也保持不变。

会变的是**它依赖的导航 API**：`Agent.GetCurrentNavigationFaceId()` / `HasPathThroughNavigationFaceIdFromDirection(int, Vec2)` / `GetPathDistanceToPoint(ref Vec3)` 这三个在后续版本里签名稳定，但**navMeshId 的分配策略随场景变化**——同一张地图在不同版本里同一个门的 `NavigationMeshId` 数值可能不同。所以**不要把 navMeshId 硬编码进你的数据文件**，从 `MissionObject.NavigationMeshId` 现取。

另外注意 MT 变体：`Agent` 上还有 `HasPathThroughNavigationFaceIdFromDirectionMT(int, Vec2)`（`Agent.cs:4508`），它在内部加了锁。本类用的是**非 MT** 版本 `HasPathThroughNavigationFaceIdFromDirection`（`Agent.cs:4520`）——**这意味着从多个线程调用同一个检测器的 `Tick` 是不安全的**，而 `CastleGate` 本身是场景物体、单线程驱动，所以没问题。你若放进多线程逻辑要自己小心。

## 依赖关系

- 唯一消费者：[CastleGate](../CastleGate) 的 `AutoOpen` 分支（构造在 `CastleGate.cs:259`，每帧驱动在 `:746-758`），判定结果控制 `OpenDoor()` / `CloseDoor()`
- 查询来源：[Mission](../../mission/Mission) 的 `CurrentTime` 与 `GetNearbyAgents(Vec2, float, MBList<Agent>)`（`:6614`）
- 被查询对象：[Agent](../../mission/Agent) 的 `IsAIControlled` / `Position` / `MovementVelocity` / `GetCurrentNavigationFaceId()` / `HasPathThroughNavigationFaceIdFromDirection(int, Vec2)` / `GetPathDistanceToPoint(ref Vec3)` / `GetMaximumForwardUnlimitedSpeed()`
- 数据结构：`TaleWorlds.Core.Timer`（节流与宽限）、`TaleWorlds.Library.MBList<Agent>`（缓存）、`TaleWorlds.Engine.MatrixFrame`（判定中心与朝向）、`TaleWorlds.Core.BattleSideEnum`（侧筛选）
- 同目录同族：`TaleWorlds.MountAndBlade.Source.Objects.Siege` 下的其它攻城对象（`SiegeTower` / `SiegeLadder` / `CastleGate`）
- 桶首页：[mission-ext API 分区](../)