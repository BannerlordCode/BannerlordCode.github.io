---
title: "Formation"
description: "Mission 中一支队伍（Team）按兵种划分的战术编队：承载排兵布阵与移动/冲锋/阵型指令，并把命令下发给其中的每个 Agent。"
---
# Formation

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public sealed class Formation : IFormation`
**Base:** `IFormation`
**File:** `TaleWorlds.MountAndBlade/Formation.cs`

## 概述

`Formation` 是 Mission 里一支 `Team` 按兵种（步兵/弓箭手/骑兵……）划分出来的**战术编队单元**。它不是一个“实体”，而是把一批 `Agent` 聚成一个整体、统一下达移动、冲锋、阵型、骑乘、开火等指令的**控制面**。

与 `Agent`（场景里具体的单个士兵）不同：`Agent` 是“被指挥的人”，`Formation` 是“指挥这群人的命令板”。同一时刻一个 `Agent` 只属于一个 `Formation`；一个 `Team` 拥有多个 `Formation`（每个 `FormationClass` 一个，外加若干特殊编队）。你几乎不会 `new Formation()`——它由 `Team` 在初始化时按兵种索引创建并持有。

## 心智模型

把 `Formation` 想成 **“队伍里按兵种分组的、可被统一下令的小队”**：

- **生命周期**：随 `Mission` 一起存在。`Team` 构造时为其每个兵种创建一个 `Formation`（`new Formation(team, index)`，`Formation.cs:605`），`Mission` 结束时随 `Team` 一起销毁。
- **谁创建 / 持有**：`Team` 拥有并持有（`Team.FormationsIncludingSpecialAndEmpty` / `Team.FormationsIncludingEmpty`，均为 `MBList<Formation>`）。编队本身不负责创建单位，单位由刷兵系统（见 [FormationSpawnData](./FormationSpawnData/)）经 `Team.AddAgentToTeam` → `Formation.AddUnit` 分配进来。
- **所在层**：纯运行时战斗层（`TaleWorlds.MountAndBlade`），不参与战役存档。它读 `Mission.Current`、`Mission.Current.Mode`、`Mission.Current.IsFormationUnitPositionAvailableMT` 等运行时状态——**脱离了 Mission 上下文，`Formation` 等于零**。
- **如何驱动**：命令以“Order 对象”形式写入（`MovementOrder`、`ArrangementOrder`、`FormOrder`、`RidingOrder`、`FiringOrder`、`FacingOrder`），再由 `Formation.Tick` 每帧把这些 Order 翻译成对每个 `Agent` 的底层设置（`agent.SetRidingOrder` / `agent.SetFiringOrder` / `agent.SetTargetFormationIndex` 等）。

## 如何获取一个 Formation

你永远从一支 `Team` 上取，而不是自己构造。取编队有两种等价方式：

```csharp
// 方式一（推荐）：按兵种直接取，内部就是 FormationsIncludingSpecialAndEmpty[(int)cls]
Team playerTeam = Mission.Current.PlayerTeam;
Formation infantry = playerTeam.GetFormation(FormationClass.Infantry);
Formation archers  = playerTeam.GetFormation(FormationClass.Ranged);

// 方式二：遍历 Team 持有所有编队的列表
foreach (Formation f in playerTeam.FormationsIncludingSpecialAndEmpty)
{
    if (f.CountOfUnits > 0)
    {
        // 该编队有单位
    }
}

// 只想要“非空”的常规编队时用 FormationsIncludingEmpty
foreach (Formation f in playerTeam.FormationsIncludingEmpty) { /* ... */ }
```

> 注意：`GetFormation` 的实参是 `FormationClass` 枚举值（见下），它的整数值正好就是该编队在列表中的下标。`Team` 上**没有**名为 `Formations` 的属性、也没有 `Formations.GetFormation(...)` 这种写法——直接调用 `team.GetFormation(...)`。

## 编队类别 FormationClass

`FormationClass`（`TaleWorlds.Core`）是编队的“兵种槽位”，同时是 `Team` 内编队数组的下标：

| 值 | 含义 |
|----|------|
| `Infantry = 0` | 步兵 |
| `Ranged = 1` | 弓/弩手 |
| `Cavalry = 2` | 骑兵 |
| `HorseArcher = 3` | 弓骑兵 |
| `Skirmisher = 4` | 游击兵（投矛等） |
| `HeavyInfantry = 5` | 重步兵 |
| `LightCavalry = 6` | 轻骑兵 |
| `HeavyCavalry = 7` | 重骑兵 |
| `NumberOfAllFormations = 10` / `Unset = 10` | 哨兵值，表示“无/未分配” |

一个编队有 `LogicalClass`（它“应该”是什么兵种，由当前单位构成推算）和 `PhysicalClass`（实际占多数的兵种，`QuerySystem.MainClass`）。`RepresentativeClass` / `SecondaryLogicalClasses` / `SecondaryPhysicalClasses` 让你在不遍历单位的情况下快速知道“这队里混了什么兵”。

## 何时用 / 何时不要用

**用 `Formation` 当：**

- 你想**整队下达战术指令**：让某队移动到某点、冲锋、变换阵型、下马/上马、停火/开火。
- 你想**批量查询/操作一队人**：统计人数、按条件筛选单位、对全队每个 `Agent` 执行同一动作（`ApplyActionOnEachUnit`）。
- 你想**读取队伍态势**：平均位置、最近敌队、阵型宽度、单位数、是否全骑兵等（`QuerySystem` + 各 `CountOf*` 属性）。

**不要用 `Formation` 当：**

- 你想改某个**单独士兵**的瞬时状态——直接操作那个 `Agent`，不要为一个人去碰编队 Order。
- 你想在**战役（Campaign）层**、即 `Mission` 不存在时持有或下令 `Formation`。正确做法：把决策存成 `FormationClass` + 队内下标或 `OrderType`，等进入 Mission 后再通过 `MissionBehavior` 下发。
- 你想**序列化/存档一个 `Formation` 引用**。它是纯运行时对象，Mission 结束后实例失效；存档里应保存“兵种 + 队伍”这类可重建的键，而非对象引用。
- 你假设**同一个 `Formation` 实例跨 Mission 仍然有效**。每次开局都是全新实例。

## 依赖图（可点击）

- **上游（创建 / 拥有 / 驱动）**
  - [Team](./Team/) — 创建并持有所有编队；`GetFormation`、`FormationsIncludingSpecialAndEmpty`。
  - [Mission](./Mission/) — 提供 `Mission.Current`、运行 `Formation.Tick`、决定 `Mode`（部署/战斗）。
  - [OrderController](../mission-ext/OrderController/) — `Team.MasterOrderController` / `PlayerOrderController` 实际执行 `Split` / `TransferUnits` / 玩家下令。
- **下游（被指挥 / 被查询）**
  - [Agent](./Agent/) — 编队内的单位；编队通过 `AddUnit` 纳入，并通过 `agent.SetTargetFormationIndex` / `SetRidingOrder` / `SetFiringOrder` 下发命令。
  - `FormationQuerySystem`（`QuerySystem`）— 每编队的态势缓存（敌我距离、兵种比例、平均位置）。
  - `FormationAI`（`AI`）— 该编队的 AI 行为（由 `Team.TeamAI` 驱动）。
- **相关 Events**
  - 编队自身：`OnUnitAdded` / `OnUnitRemoved` / `OnUnitAttached` / `OnUnitCountChanged` / `OnUnitSpacingChanged` / `OnTick` / `OnWidthChanged` / `OnBeforeMovementOrderApplied` / `OnAfterArrangementOrderApplied`。
  - 队伍层：[Team](./Team/) 的 `OnFormationsChanged`、`OnOrderIssued`；[OrderController](../mission-ext/OrderController/) 的 `OnOrderIssued`。
- **相关 Behaviors / Models**
  - `BehaviorGeneral`、`BehaviorCharge`、`TeamAIGeneral` 等战斗 AI 会读写编队 Order。
  - `BattleBannerBearersModel`（在 `TransferUnits` 中用于搬运旗手）、`AgentStatCalculateModel`（按 Order 攻防性刷新 `DrivenProperty`）。
- **存档点**
  - `Formation` 本身**不进存档**。但 `OrderController` 会记录当前 Order 状态；若你的 `MissionLogic` 把 `Formation`/`Team` 引用塞进可被序列化的字段，会在读档时得到悬空/错误引用（见风险段）。

## 风险（崩溃与坏档）

`Formation` 是最容易“拿了就崩”的类型之一，因为它深度绑定当前 `Mission`：

1. **在 Mission 之外调用会空引用崩溃。** 大量成员读取 `Mission.Current`：`Reset()`、`Tick()`、`IsDeployment => Mission.Current.Mode`、`IsConvenientForTransfer => Mission.Current.MissionTeamAIType`、`CreateNewOrderWorldPosition` 等。在任何 `Mission == null` 的作用域（战役地图 tick、菜单、存档读入早期）调用 `formation.Xxx` 会直接 `NullReferenceException`。**只在 `Mission.Current != null` 且 Mission 活跃时操作。**

2. **Mission 结束后持有旧 `Formation` 引用 = 悬空引用。** Mission 结束时 `Team` 与它的编队一起作废；你缓存的字段会变成指向已失效对象的引用。再次调用会读到 `Mission.Current` 为 null 或错误 Mission 的状态。使用事件/局部变量，不要长期持有。

3. **部署阶段 vs 战斗阶段下错指令会“静默无效或被改写”。** `SetMovementOrder` 在 `Tick` 里有 `while (!_movementOrder.IsApplicable(this))` 的自动替换循环：在部署阶段下达不适用于当时的 Order（如 `Charge` 缺少有效目标位）会被悄悄换成 `Move` 或 `Stop`。需要玩家在部署阶段摆位时，用 `MovementOrder.MovementOrderMove(pos)`；真正“冲锋”应在 `OnDeploymentFinished` 之后或战斗逻辑里下发。

4. **`Split` / `TransferUnits` 会重排单位并触发 `OnFormationsChanged`。** 在遍历 `FormationsIncludingSpecialAndEmpty` 的 `foreach` 中途调用它们会修改正在遍历的列表，可能导致跳过/重复。先收集目标再操作，或在 `MissionLogic` 的合适回调里做。

5. **`SetControlledByAI(false)` 会把编队交给玩家，并可能重新触发 AI 行为激活。** 把原本 AI 控制的编队切到手动、又同时被 `TeamAI` 接管，会造成指令“打架”。混合控制前先明确 `PlayerOwner` 与 `IsAIOwned` 的语义（`SetControlledByAI` 内部会调用 `AI.ActiveBehavior.OnLostAIControl()` / 重新 `OnBehaviorActivated()`）。

6. **不要把 `Formation`/`Team` 写进可序列化字段（坏档风险）。** 它们是运行时瞬态对象，存档再读会得到错误/空引用，严重时破坏 Mission 初始化。改用 `FormationClass` + 队内枚举等可重建键。

7. **多人游戏下 `BannerCode` 赋值会广播网络消息。** 设 `formation.BannerCode` 时若在服务端会 `GameNetwork.BeginBroadcastModuleEvent` 发出 `InitializeFormation`；在客户端-only 上下文赋值不会同步。修改旗号请走服务端权威路径。

## 核心属性

| 属性 | 类型 | 含义与注意 |
|------|------|-----------|
| `Team` | `Team`（`readonly`） | 拥有该编队的队伍。 |
| `Index` | `int`（`readonly`） | 编队在队伍中的下标，等于 `(int)FormationIndex`。 |
| `FormationIndex` | `FormationClass`（`readonly`） | 该编队对应的兵种槽位。 |
| `CountOfUnits` | `int` | 在编单位 + 脱离（detached）单位总数。 |
| `CountOfUnitsWithoutDetachedOnes` | `int` | 仅排列中的单位数（不含 detached）。 |
| `DetachedUnits` / `LooseDetachedUnits` | `MBReadOnlyList<Agent>` | 被 `DetachUnit` 抽离出阵型的单位。 |
| `QuerySystem` | `FormationQuerySystem` | 态势缓存：兵种比例、最近敌队、平均/中位位置、移动速度。 |
| `AI` | `FormationAI` | 该编队的 AI 控制器。 |
| `OrderPosition` / `OrderGroundPosition` / `OrderPositionIsValid` | `Vec2` / `Vec3` / `bool` | 当前指令目标点；无效时 `CreateNewOrderWorldPosition` 会打印黄色警告。 |
| `CurrentPosition` | `Vec2` | 编队当前实际中心（平均位置 + 朝向换算）。 |
| `Direction` / `CurrentDirection` | `Vec2` | 编队正面朝向。 |
| `LogicalClass` / `PhysicalClass` | `FormationClass` | 逻辑兵种 / 物理主兵种。 |
| `ArrangementOrder` / `FormOrder` / `RidingOrder` / `FiringOrder` / `FacingOrder` | 对应 Order 类型 | 当前阵型/成形/骑乘/开火/朝向指令（只读；改它们要走 `Set*` 方法）。 |
| `IsDeployment` | `bool` | `Mission.Current.Mode == MissionMode.Deployment`。 |
| `IsAIControlled` | `bool` | 是否由 AI 接管。 |
| `Captain` | `Agent` | 编队队长；赋值会触发 `OnCaptainChanged`。 |
| `PlayerOwner` | `Agent` | 玩家指挥官；赋值时**自动** `SetControlledByAI(value == null)`。 |
| `IsSpawning` | `bool` | 是否处于刷兵阶段（`BeginSpawn`/`EndSpawn` 之间）。 |
| `TargetFormation` | `Formation` | 锁定的敌方/友方目标编队；赋值会把 `agent.SetTargetFormationIndex` 下发到全队。 |

## 指令系统（下达命令）

所有“下令”都先构造一个对应的 Order 对象，再交给 `Set*` 方法。Order 在 `Tick` 中落实为对各单位的具体行为。

### `public void SetMovementOrder(MovementOrder input)`
设置移动/冲锋指令。**副作用**：触发 `OnBeforeMovementOrderApplied`；若新旧指令“攻防性”不同会刷新全队 `DrivenProperty`；最后 `SetTargetFormation(null)` 清空锁定目标；若新指令当前不适用会在 `Tick` 里被自动替换为可用指令。**何时调用**：战斗中或部署摆位时，作为统一指挥入口。

```csharp
// 移动到指定世界坐标
WorldPosition pos = new WorldPosition(Mission.Current.Scene, new Vec3(120f, 40f, 0f));
formation.SetMovementOrder(MovementOrder.MovementOrderMove(pos));

// 直接冲锋（无参静态只读实例）
formation.SetMovementOrder(MovementOrder.MovementOrderCharge);

// 冲向某个敌队
formation.SetMovementOrder(MovementOrder.MovementOrderChargeToTarget(enemyFormation));

// 跟随某个 Agent / 某个场景实体 / 攻击某个实体
formation.SetMovementOrder(MovementOrder.MovementOrderFollow(someAgent));
formation.SetMovementOrder(MovementOrder.MovementOrderFollowEntity(someGameEntity));
formation.SetMovementOrder(MovementOrder.MovementOrderAttackEntity(someGameEntity, surroundEntity: true));
```

可用的静态工厂/只读实例（`MovementOrder`，位于 [mission-ext](../mission-ext/MovementOrder/)）：`MovementOrderCharge`、`MovementOrderStop`、`MovementOrderRetreat`、`MovementOrderAdvance`、`MovementOrderFallBack`（均为只读实例），以及 `MovementOrderMove(WorldPosition)`、`MovementOrderChargeToTarget(Formation)`、`MovementOrderFollow(Agent)`、`MovementOrderFollowEntity(GameEntity)`、`MovementOrderAttackEntity(GameEntity, bool)`。

> 没有 `Formation.MoveTo(...)` / `Formation.Charge()` 这种直接方法——必须经由 `MovementOrder` + `SetMovementOrder`。

### `public void SetArrangementOrder(ArrangementOrder order)`
设置阵型：线 `ArrangementOrderLine`、纵列 `ArrangementOrderColumn`、圆 `ArrangementOrderCircle`、方阵 `ArrangementOrderSquare`、盾墙 `ArrangementOrderShieldWall`、散兵 `ArrangementOrderScatter`、松散 `ArrangementOrderLoose`、楔形 `ArrangementOrderSkein`。**副作用**：切换会重算 `Width`/防御系数、使 `QuerySystem` 失效并 `ForceCalculateCaches`。详见 [ArrangementOrder](../mission-ext/ArrangementOrder/)。

```csharp
formation.SetArrangementOrder(ArrangementOrder.ArrangementOrderLine);
formation.SetArrangementOrder(ArrangementOrder.ArrangementOrderShieldWall);
```

### `public void SetFormOrder(FormOrder order, bool updateDesiredFileCount = true)`
设置“成形”方式（如 `FormOrder.FormOrderCustom(width)` 自定义宽度）。**副作用**：触发 `FormOrder.OnApply`、使 `QuerySystem` 失效。

### `public void SetRidingOrder(RidingOrder order)`
上马/下马。**副作用**：遍历全队调用 `agent.SetRidingOrder(order.OrderEnum)`，并触发阵型形状变化。

### `public void SetFiringOrder(FiringOrder order)`
开火/停火。**副作用**：遍历全队调用 `agent.SetFiringOrder(order.OrderEnum)`。

### `public void SetFacingOrder(FacingOrder order)`
设置正面朝向指令（如 `FacingOrderLookAtEnemy`、`FacingOrderLookAtDirection`）。

### `public void SetTargetFormation(Formation targetFormation)`
锁定一个目标编队（用于冲锋/交战）。**副作用**：写 `TargetFormation`，进而把 `agent.SetTargetFormationIndex` 下发到全队；传 `null` 即取消锁定。

### `public void SetControlledByAI(bool isControlledByAI, bool enforceNotSplittableByAI = false)`
切换 AI 接管。**副作用**：由 AI 接管且已有单位时会立即 `AI.Tick()` 并把当前 `AI.ActiveBehavior.CurrentOrder` 作为移动指令下发；交还玩家时调用 `AI.ActiveBehavior.OnLostAIControl()`。与 `PlayerOwner` 赋值联动。

## 查询与批量操作

### `public int CountOfUnits` / `CountOfUnitsWithoutDetachedOnes` / `CountOfDetachedUnits`
当前单位规模，区分“是否含被脱离的单位”。

### `public int GetCountOfUnitsWithCondition(Func<Agent, bool> function)`
统计满足条件的单位（排列中 + detached 都算）。

```csharp
int mounted = formation.GetCountOfUnitsWithCondition(a => a.HasMount);
```

### `public bool HasUnitsWithCondition(Func<Agent, bool> function, out Agent result)`
是否存在满足条件的单位；有则通过 `out` 返回其中一个。

### `public void ApplyActionOnEachUnit(Action<Agent> action, Agent ignoreAgent = null)`
对编队内每个 `Agent` 执行同一动作（不含 detached）。还有 `ApplyActionOnEachAttachedUnit`、`ApplyActionOnEachDetachedUnit`、`ApplyActionOnEachUnitViaBackupList` 变体，分别覆盖“附着单位/脱离单位/用备份列表避免遍历中被改”。

```csharp
formation.ApplyActionOnEachUnit(a =>
{
    if (a.Health < a.HealthLimit)
        a.Health = Math.Min(a.Health + 10f, a.HealthLimit);
});
```

### `public Agent GetFirstUnit()` / `public Agent GetUnitWithIndex(int unitIndex)`
按下标取单位（先排列中、后 detached）。下标不跨 Mission 稳定。

### `public FormationQuerySystem QuerySystem`
态势查询入口：兵种比例（`CavalryUnitRatioReadOnly` 等）、最近敌队、平均/中位位置、移动速度、城堡内外单位数等。读取前若数据可能过期，调用 `QuerySystem.Expire()` 使其重算。

## 编队内的单位管理

### `public void TransferUnits(Formation target, int unitCount)`
把一个编队的 `unitCount` 个单位转移给另一个编队。**副作用**：经 `Team.MasterOrderController.TransferUnits` 实际搬移；双方 `CalculateLogicalClass`、失效 `QuerySystem`、触发 `Team.QuerySystem.ExpireAfterUnitAddRemove`。被转移单位会带上原编队的 Order 与摆位（当目标原本为空时）。注意 `TransferUnitsAux` 有 `IsSplittableByAI` 守卫。

### `public IEnumerable<Formation> Split(int count = 2)`
把当前编队拆成 `count` 个（经 `Team.MasterOrderController.SplitFormation`）。**副作用**：拆分期间 `PostponeCostlyOperations = true`，拆分后各新编队 `QuerySystem.Expire()`、重算 `LogicalClass`。返回拆分出的编队枚举。

### `public void DetachUnit(Agent unit, bool isLoose)` / `public void AttachUnit(Agent unit)`
把单个单位临时脱离/重新归队（脱离后仍属该 `Team`，但不参与阵型排列，可单独下令）。

### `public void BeginSpawn(int unitCount, bool isMounted)` / `public void EndSpawn()`
标记刷兵开始/结束，`IsSpawning` 在两者之间为 `true`。刷兵期间单位陆续经 `AddUnit` 进入编队，`EndSpawn` 后认为编制齐整。

### `public void AddUnit(Agent unit)` / `public void RemoveUnit(Agent unit)`
把单位加入/移出编队；会触发 `OnUnitAdded` / `OnUnitRemoved` 与 `OnUnitCountChanged`。

## 生命周期与每帧

### `public void Tick(float dt)`
`Mission` 每帧调用，驱动整个编队：刷新平均/中位位置与速度缓存、推进 `AI.Tick()`（若 `Team.HasTeamAi` 且由 AI 或玩家军士控制）、把当前 `MovementOrder` 落实为摆位（`SetPositioning`）、清理已空的目标编队、触发 `OnTick`。**不要手动频繁调用**——它由引擎在战斗循环中调用；你通常只在自定义 `MissionBehavior` 的 `OnMissionTick` 里读取状态或下达 Order。

### `public void Reset()`
复位为初始状态（`LineFormation`、默认朝向 `FacingOrderLookAtEnemy`、清空玩家拥有等）。构造时调用一次；一般不会由 mod 再调。

### `public void OnDeploymentFinished()`
部署阶段结束的钩子：**副作用**：`AI.OnDeploymentFinished()` 并 `OrderController.TryCancelStopOrder(this)` 取消部署期的停步指令。由部署控制器在切战斗时调用。

### `public void SetPositioning(WorldPosition? position = null, Vec2? direction = null, int? unitSpacing = null)`
设置编队的指令点与朝向/间距。**副作用**：越界时夹到 `Mission.Current.GetClosestBoundaryPosition`；离原位置过远会触发 `Arrangement.UpdateLocalPositionErrors`；写 `OrderPosition`/`Direction`/`UnitSpacing`，必要时翻转阵型。多由 `MovementOrder.Tick` 内部调用，mod 也可直接用来摆位。

### `public void Rearrange(IFormationArrangement arrangement)`
整体替换底层排列算法（如 `LineFormation`/`ColumnFormation`），切换 `Arrangement` 会重订阅 `OnWidthChanged`/`OnShapeChanged`。

## 真实示例

### 示例 1：让玩家的步兵队移动到某点（真实获取路径）

```csharp
// 在自定义 MissionBehavior / MissionLogic 内、Mission 活跃时调用
if (Mission.Current?.PlayerTeam == null) return;

// 从 Team 按兵种取出编队（不要自己 new）
Formation infantry = Mission.Current.PlayerTeam.GetFormation(FormationClass.Infantry);
if (infantry == null || infantry.CountOfUnits == 0) return;

// 构造一个世界坐标作为移动目标
WorldPosition target = new WorldPosition(Mission.Current.Scene, new Vec3(120f, 40f, 0f));
infantry.SetMovementOrder(MovementOrder.MovementOrderMove(target));
```

### 示例 2：命令全军列成盾墙并冲锋（在部署结束/战斗开始时）

```csharp
public override void OnMissionTick(float dt)
{
    Mission mission = Mission.Current;
    if (mission == null || mission.PlayerTeam == null) return;

    foreach (Formation f in mission.PlayerTeam.FormationsIncludingSpecialAndEmpty)
    {
        if (f.CountOfUnits == 0) continue;

        // 步兵/重步兵列盾墙，骑兵直接冲锋
        if (f.LogicalClass == FormationClass.Infantry || f.LogicalClass == FormationClass.HeavyInfantry)
        {
            f.SetArrangementOrder(ArrangementOrder.ArrangementOrderShieldWall);
        }
        f.SetMovementOrder(MovementOrder.MovementOrderCharge);
    }
}
```

> 关键：示例全部经由 `Mission.Current.PlayerTeam.GetFormation(...)` + `MovementOrder` 工厂，没有任何省略号占位或虚拟取值名。

## 跨版本提示

- 本页以 `bannerlord-1.4.5` 源码为准核对；`1.3.15` 的 `Team.GetFormation` / `FormationsIncludingSpecialAndEmpty` / `MovementOrder.MovementOrderMove` / `MovementOrder.MovementOrderCharge` 等 API 一致，可直接套用。
- `1.3.15` 中 `MovementOrder` 同样提供 `MovementOrderCharge` 等静态只读实例与 `MovementOrderMove(WorldPosition)` 工厂，命名与 1.4.5 相同。
- 各 Order 子类型（`ArrangementOrder`/`FormOrder`/`RidingOrder`/`FiringOrder`/`FacingOrder`）的静态工厂形态在 1.3.15→1.4.5 间保持稳定，详见各自的 [mission-ext](../mission-ext/MovementOrder/) 页面。

## 参见

- [↑ Mission](./Mission/) — Formation 所在场景与驱动者
- [↔ Team](./Team/) — 拥有并创建所有编队
- [↔ Agent](./Agent/) — 编队内的单位
- [↔ MissionBehavior](./MissionBehavior/) — 在战斗中读取/下发编队指令的回调入口
- [↔ FormationSpawnData](./FormationSpawnData/) — 单位如何被刷入编队
- [相关 OrderController](../mission-ext/OrderController/) — 实际执行 Split/Transfer/玩家下令
- [相关 MovementOrder](../mission-ext/MovementOrder/) — 移动/冲锋指令工厂
- [相关 ArrangementOrder](../mission-ext/ArrangementOrder/) — 阵型指令
