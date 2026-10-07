---
title: "MissionAgentSpawnLogic"
description: "1.4.5 起已被移除的 Mission 刷兵逻辑：1.3.0/1.3.15 有完整 API，1.4.5 与之后三棵树均无声明。本页给出版本可用性、替代物与迁移建议。"
---
# MissionAgentSpawnLogic

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionAgentSpawnLogic : MissionLogic, IMissionAgentSpawnLogic, IMissionBehavior`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/MissionAgentSpawnLogic.cs`

> **⚠ 本页的版本前提（先读这一行再看下面的引用）**
>
> `**File:**` 指向的是 **1.3.15** 树的路径。**1.4.5 树里没有这个文件，也没有这个类型。**
> 本页的「关键成员（属性）」与「关键成员（方法）」两节**逐条来自 1.3.15**，不是 1.4.5。
> 唯一的例外是第 ③ 节，那一节引用 1.4.5 是因为**替代类型住在 1.4.5**，页内已逐条标明。

## 概述

`MissionAgentSpawnLogic` 是 1.3.x 时代 Mission 模块的**刷兵总控**：它继承 `MissionLogic`，实现 `IMissionAgentSpawnLogic` 与 `IMissionBehavior`，负责按 BattleSide 分配初始兵力、后续增援批次、骑兵与旗帜手，并把增援频率、每批数量、优先级等一整套刷兵参数包成属性对外暴露。

**但这个类在 1.4.5 里已经不存在。** 本仓库可核的四棵树（1.4.5 / 1.4.6 / 1.4.7 / 1.5.3）里**都没有它的声明**，而 1.3.0 与 1.3.15 都有。所以这一页的用途不是「教你用 1.4.5 的它」——**1.4.5 没有它**——而是告诉你：**如果你从 1.3 升到 1.4，这个类型去哪了、现在该换成什么。**

## 心智模型

读一个「已被移除的类型」的页面，要先把三件事分开：**类型曾经是什么**（1.3.15 的 API，那部分仍然有效且仍在下文逐条列出）、**它在哪个版本区间消失**（这决定你从哪个版本开始需要改）、**消失后你该调什么**（这才是你实际要做的动作）。把这三件事混在一起读，最容易犯的错是**把 1.3 的 API 当成 1.4 还能用**——所以本页把版本信息放在最前面，而不是放在末尾的「跨版本提示」里。

本页刻意**不解释它为什么被移除**：源码能证明「不在了」，但证明不了「为什么」。一个类被删掉通常有多重原因（重构、合并进别的东西、职责转移），源码里没有留下结论，所以这里不猜。

## 怎么用（版本可用性）

### ① 该类型存在于哪些版本

逐版本实测，命令是同一句：

```
grep -rlE "\b(class|struct)[[:space:]]+MissionAgentSpawnLogic\b" --include=*.cs <该版本树>
```

| 版本 | 声明 | 位置 |
| --- | --- | --- |
| 1.3.0 | **有** | `TaleWorlds.MountAndBlade/MissionAgentSpawnLogic.cs:12` → `public class MissionAgentSpawnLogic : MissionLogic, IMissionAgentSpawnLogic, IMissionBehavior` |
| 1.3.15 | **有** | `TaleWorlds.MountAndBlade/MissionAgentSpawnLogic.cs:12`（同上，同一行号） |
| 1.4.5 | **无** | 零命中（见第 ② 节的阳性证据） |
| 1.4.6 | **无** | 零命中 |
| 1.4.7 | **无** | 零命中 |
| 1.5.3 | **无** | 零命中 |

1.3.15 侧该文件的几个可核对锚点（全部属于 **1.3.15**，不是 1.4.5）：

- 类声明：`MissionAgentSpawnLogic.cs:12`
- 初始刷兵入口 `InitWithSinglePhase`：`MissionAgentSpawnLogic.cs:240`
- 逐侧取兵 `GetAllTroopsForSide`：`MissionAgentSpawnLogic.cs:248`
- 每帧驱动 `OnMissionTick`：`MissionAgentSpawnLogic.cs:254`
- 开关刷兵 `SetSpawnTroops`：`MissionAgentSpawnLogic.cs:325`
- 增援重试 `TryReinforcementSpawn`：`MissionAgentSpawnLogic.cs:1120`
- 嵌套结构体 `FormationSpawnData`：`MissionAgentSpawnLogic.cs:976`（**它是嵌套类型，不在 `Missions/Objectives/` 目录里**；[FormationSpawnData](../../mission/FormationSpawnData) 是本页的同族页，也在 1.4.5 已被移除）

### ② 从哪一版起被移除

**可核的结论只有区间，不是确切版本号**：**1.3.15 之后、1.4.5 之前（含）之间被移除。** 1.4.0–1.4.4 在本仓库**没有对应的源码树**，所以**不能**写「从 1.4.0 起移除」——那是我核不到的断言。

「1.4.5 没有它」这件事的阳性证据（三条，缺一不可）：

```
① 声明级 grep 在 1.4.5 整棵树零命中：
   grep -rlE "\b(class|struct)[[:space:]]+MissionAgentSpawnLogic\b" --include=*.cs <1.4.5 bin>   → 0 files
② 裸名字 grep 在 1.4.5 命中 3 个文件，但逐条看全部是【引用】不是声明：
   DefaultBattleMissionAgentSpawnLogic（另一个类）/ IMissionAgentSpawnLogic（另一个接口）/ 同名字段
③ 页面声称的路径在 1.4.5 零命中：原样、去 .2、只用 basename 三种拼法都试过
```

第 ② 条是这里最容易踩的：**用 `grep -rl "名字"` 判断「类型在不在」会得到相反的结论**，它数的是引用。

### ③ 移除后由什么替代

有替代物。**下面这一段是本页唯一引用 1.4.5 的地方，引用的是替代类型，不是本页主体**（本页主体在 1.4.5 里不存在）：

| 类型（1.4.5） | 位置 | 说明 |
| --- | --- | --- |
| `DefaultBattleMissionAgentSpawnLogic` | `TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/DefaultBattleMissionAgentSpawnLogic.cs:10` | 继承同一个 `MissionLogic`，并同时实现 `IMissionAgentSpawnLogic` 与 `IMissionBehavior`，与 1.3.15 那个类**多了** `IBattleMissionAgentSpawnLogic` |
| `IMissionAgentSpawnLogic` | `TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/IMissionAgentSpawnLogic.cs:6` | **接口活下来了**（`public interface IMissionAgentSpawnLogic : IMissionBehavior`），1.3.15 那个类实现的正是它 |
| `IBattleMissionAgentSpawnLogic` | `TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/IBattleMissionAgentSpawnLogic.cs:3` | 1.4.5 新增的接口，替代物实现它而旧类没有 |

**能断言的**：接口 `IMissionAgentSpawnLogic` 与基类 `MissionLogic` 在 1.4.5 都在，所以 1.3.15 时代「面向这个接口编程」的部分不受影响；消失的是**那个具体类**。
**不能断言的**：源码里没有任何注释或标记说「`DefaultBattleMissionAgentSpawnLogic` 就是 `MissionAgentSpawnLogic` 的继任者」。上面这条对应关系是**从「基类相同 + 接口相同/新增」推出来的**，不是从源码的继任声明读出来的。

### ④ 迁移建议

有依据的部分：

1. **不要 new 那个类，改成向 Mission 取 behavior。** 1.4.5 侧的取得方式有实证：`base.Mission.GetMissionBehavior<DefaultBattleMissionAgentSpawnLogic>()`（`TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/BattleDeploymentMissionController.cs:22`）。
2. **如果你的代码是面向接口写的，不用改。** `IMissionAgentSpawnLogic`（`IMissionAgentSpawnLogic.cs:6`）在 1.4.5 仍然存在。
3. **同名成员大概率需要逐个核对。** 1.3.15 那个类有 30 余个公开成员（见下文两节），而替代物多实现了一个接口、且本页**没有**逐个核对过成员签名——**所以「哪些成员改名或消失」属于我没有证据的部分，不在这里猜**。

无迁移建议的部分：

- **无依据的**：`MissionAgentSpawnLogic` → `DefaultBattleMissionAgentSpawnLogic` 是不是官方的一对一继任关系（源码无此声明）。
- **无依据的**：1.3.x → 1.4.x 的具体升级步骤（1.4.0–1.4.4 无源码树可核）。

## 依赖关系

> 本页主体在 1.4.5 不存在，所以下面链接的是**同属「1.3.x 有、1.4.5 移除」这一族**的页面，而不是它的运行时依赖。

- 同族页（同样已从 1.4.5 移除）：[FormationSpawnData](../../mission/FormationSpawnData) —— 嵌套在 1.3.15 那个类里的结构体（`MissionAgentSpawnLogic.cs:976`）
- 同族页（同样已从 1.4.5 移除）：[MissionObjectiveTarget](../MissionObjectiveTarget)、[MPPerkCondition](../MPPerkCondition)
- 同族页（同样已从 1.4.5 移除）：[ItemVisibility](../ItemVisibility)、[ToolTask](../ToolTask)
- 版本判定的依据：1.3.0 与 1.3.15 树（前者扁平、后者同样是扁平布局），1.4.5 树在 `bannerlord-1.4.5/Bannerlord.Source/bin`
- 体系全貌：../../../architecture/save-system 之外的 Mission 模块文档，见 ../../../architecture/crash-boundaries

## 关键成员（属性）

| Name | Signature |
|------|-----------|
| `MaxNumberOfAgentsForMission` | `public static int MaxNumberOfAgentsForMission { get; }` |
| `NumberOfAgents` | `public int NumberOfAgents { get; }` |
| `NumberOfRemainingTroops` | `public int NumberOfRemainingTroops { get; }` |
| `NumberOfActiveDefenderTroops` | `public int NumberOfActiveDefenderTroops { get; }` |
| `NumberOfActiveAttackerTroops` | `public int NumberOfActiveAttackerTroops { get; }` |
| `NumberOfRemainingDefenderTroops` | `public int NumberOfRemainingDefenderTroops { get; }` |
| `NumberOfRemainingAttackerTroops` | `public int NumberOfRemainingAttackerTroops { get; }` |
| `BattleSize` | `public int BattleSize { get; }` |
| `IsInitialSpawnOver` | `public bool IsInitialSpawnOver { get; }` |
| `IsDeploymentOver` | `public bool IsDeploymentOver { get; }` |
| `ReinforcementSpawnSettings` | `public readonly ref MissionSpawnSettings ReinforcementSpawnSettings { get; }` |
| `NumTroops` | `public int NumTroops { get; }` |
| `TroopSpawnActive` | `public bool TroopSpawnActive { get; }` |
| `IsPlayerSide` | `public bool IsPlayerSide { get; }` |
| `ReinforcementSpawnActive` | `public bool ReinforcementSpawnActive { get; }` |
| `SpawnWithHorses` | `public bool SpawnWithHorses { get; }` |
| `ReinforcementsNotifiedOnLastBatch` | `public bool ReinforcementsNotifiedOnLastBatch { get; }` |
| `NumberOfActiveTroops` | `public int NumberOfActiveTroops { get; }` |
| `ReinforcementQuotaRequirement` | `public int ReinforcementQuotaRequirement { get; }` |
| `ReinforcementsSpawnedInLastBatch` | `public int ReinforcementsSpawnedInLastBatch { get; }` |
| `ReinforcementBatchSize` | `public float ReinforcementBatchSize { get; }` |
| `HasReservedTroops` | `public bool HasReservedTroops { get; }` |
| `ReinforcementBatchPriority` | `public float ReinforcementBatchPriority { get; }` |
| `ReservedTroopsCount` | `public int ReservedTroopsCount { get; }` |
| `HasSpawnableReinforcements` | `public bool HasSpawnableReinforcements { get; }` |

## 关键成员（方法）

> 以下签名逐条来自 **1.3.15** 的 `TaleWorlds.MountAndBlade/MissionAgentSpawnLogic.cs`，**不是 1.4.5**。

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** 调用 AfterStart 对应的操作。

```csharp
// 先通过子系统 API 拿到 MissionAgentSpawnLogic 实例
MissionAgentSpawnLogic missionAgentSpawnLogic = ...;
missionAgentSpawnLogic.AfterStart();
```

### GetNumberOfPlayerControllableTroops
`public int GetNumberOfPlayerControllableTroops()`

**用途 / Purpose:** 读取并返回当前对象中 number of player controllable troops 的结果。

```csharp
// 先通过子系统 API 拿到 MissionAgentSpawnLogic 实例
MissionAgentSpawnLogic missionAgentSpawnLogic = ...;
var result = missionAgentSpawnLogic.GetNumberOfPlayerControllableTroops();
```

### InitWithSinglePhase
`public void InitWithSinglePhase(int defenderTotalSpawn, int attackerTotalSpawn, int defenderInitialSpawn, int attackerInitialSpawn, bool spawnDefenders, bool spawnAttackers, in MissionSpawnSettings spawnSettings)`

**用途 / Purpose:** 为 with single phase 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 MissionAgentSpawnLogic 实例
MissionAgentSpawnLogic missionAgentSpawnLogic = ...;
missionAgentSpawnLogic.InitWithSinglePhase(0, 0, 0, 0, false, false, spawnSettings);
```

### GetAllTroopsForSide
`public IEnumerable<IAgentOriginBase> GetAllTroopsForSide(BattleSideEnum side)`

**用途 / Purpose:** 读取并返回当前对象中 all troops for side 的结果。

```csharp
// 先通过子系统 API 拿到 MissionAgentSpawnLogic 实例
MissionAgentSpawnLogic missionAgentSpawnLogic = ...;
var result = missionAgentSpawnLogic.GetAllTroopsForSide(side);
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**用途 / Purpose:** 在 mission tick 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionAgentSpawnLogic 实例
MissionAgentSpawnLogic missionAgentSpawnLogic = ...;
missionAgentSpawnLogic.OnMissionTick(0);
```

### SetCustomReinforcementSpawnTimer
`public void SetCustomReinforcementSpawnTimer(ICustomReinforcementSpawnTimer timer)`

**用途 / Purpose:** 为 custom reinforcement spawn timer 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MissionAgentSpawnLogic 实例
MissionAgentSpawnLogic missionAgentSpawnLogic = ...;
missionAgentSpawnLogic.SetCustomReinforcementSpawnTimer(timer);
```

### SetSpawnTroops
`public void SetSpawnTroops(BattleSideEnum side, bool spawnTroops, bool enforceSpawning = false)`

**用途 / Purpose:** 为 spawn troops 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MissionAgentSpawnLogic 实例
MissionAgentSpawnLogic missionAgentSpawnLogic = ...;
missionAgentSpawnLogic.SetSpawnTroops(side, false, false);
```

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**用途 / Purpose:** 在 behavior initialize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionAgentSpawnLogic 实例
MissionAgentSpawnLogic missionAgentSpawnLogic = ...;
missionAgentSpawnLogic.OnBehaviorInitialize();
```

### SetSpawnHorses
`public void SetSpawnHorses(BattleSideEnum side, bool spawnHorses)`

**用途 / Purpose:** 为 spawn horses 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MissionAgentSpawnLogic 实例
MissionAgentSpawnLogic missionAgentSpawnLogic = ...;
missionAgentSpawnLogic.SetSpawnHorses(side, false);
```

### StartSpawner
`public void StartSpawner(BattleSideEnum side)`

**用途 / Purpose:** 启动spawner流程或状态机。

```csharp
// 先通过子系统 API 拿到 MissionAgentSpawnLogic 实例
MissionAgentSpawnLogic missionAgentSpawnLogic = ...;
missionAgentSpawnLogic.StartSpawner(side);
```

### StopSpawner
`public void StopSpawner(BattleSideEnum side)`

**用途 / Purpose:** 停止spawner流程或状态机。

```csharp
// 先通过子系统 API 拿到 MissionAgentSpawnLogic 实例
MissionAgentSpawnLogic missionAgentSpawnLogic = ...;
missionAgentSpawnLogic.StopSpawner(side);
```

### IsSideSpawnEnabled
`public bool IsSideSpawnEnabled(BattleSideEnum side)`

**用途 / Purpose:** 判断当前对象是否处于 side spawn enabled 状态或条件。

```csharp
// 先通过子系统 API 拿到 MissionAgentSpawnLogic 实例
MissionAgentSpawnLogic missionAgentSpawnLogic = ...;
var result = missionAgentSpawnLogic.IsSideSpawnEnabled(side);
```

### OnSideDeploymentOver
`public void OnSideDeploymentOver(BattleSideEnum battleSide)`

**用途 / Purpose:** 在 side deployment over 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionAgentSpawnLogic 实例
MissionAgentSpawnLogic missionAgentSpawnLogic = ...;
missionAgentSpawnLogic.OnSideDeploymentOver(battleSide);
```

### GetReinforcementInterval
`public float GetReinforcementInterval()`

**用途 / Purpose:** 读取并返回当前对象中 reinforcement interval 的结果。

```csharp
// 先通过子系统 API 拿到 MissionAgentSpawnLogic 实例
MissionAgentSpawnLogic missionAgentSpawnLogic = ...;
var result = missionAgentSpawnLogic.GetReinforcementInterval();
```

### SetReinforcementsSpawnEnabled
`public void SetReinforcementsSpawnEnabled(bool value, bool resetTimers = true)`

**用途 / Purpose:** 为 reinforcements spawn enabled 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MissionAgentSpawnLogic 实例
MissionAgentSpawnLogic missionAgentSpawnLogic = ...;
missionAgentSpawnLogic.SetReinforcementsSpawnEnabled(false, false);
```

### GetTotalNumberOfTroopsForSide
`public int GetTotalNumberOfTroopsForSide(BattleSideEnum side)`

**用途 / Purpose:** 读取并返回当前对象中 total number of troops for side 的结果。

```csharp
// 先通过子系统 API 拿到 MissionAgentSpawnLogic 实例
MissionAgentSpawnLogic missionAgentSpawnLogic = ...;
var result = missionAgentSpawnLogic.GetTotalNumberOfTroopsForSide(side);
```

### GetGeneralCharacterOfSide
`public BasicCharacterObject GetGeneralCharacterOfSide(BattleSideEnum side)`

**用途 / Purpose:** 读取并返回当前对象中 general character of side 的结果。

```csharp
// 先通过子系统 API 拿到 MissionAgentSpawnLogic 实例
MissionAgentSpawnLogic missionAgentSpawnLogic = ...;
var result = missionAgentSpawnLogic.GetGeneralCharacterOfSide(side);
```

### GetSpawnHorses
`public bool GetSpawnHorses(BattleSideEnum side)`

**用途 / Purpose:** 读取并返回当前对象中 spawn horses 的结果。

```csharp
// 先通过子系统 API 拿到 MissionAgentSpawnLogic 实例
MissionAgentSpawnLogic missionAgentSpawnLogic = ...;
var result = missionAgentSpawnLogic.GetSpawnHorses(side);
```

### IsSideDepleted
`public bool IsSideDepleted(BattleSideEnum side)`

**用途 / Purpose:** 判断当前对象是否处于 side depleted 状态或条件。

```csharp
// 先通过子系统 API 拿到 MissionAgentSpawnLogic 实例
MissionAgentSpawnLogic missionAgentSpawnLogic = ...;
var result = missionAgentSpawnLogic.IsSideDepleted(side);
```

### AddPhaseChangeAction
`public void AddPhaseChangeAction(BattleSideEnum side, MissionAgentSpawnLogic.OnPhaseChangedDelegate onPhaseChanged)`

**用途 / Purpose:** 将 phase change action 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 MissionAgentSpawnLogic 实例
MissionAgentSpawnLogic missionAgentSpawnLogic = ...;
missionAgentSpawnLogic.AddPhaseChangeAction(side, onPhaseChanged);
```

### GetNumberOfPlayerControllableTroops
`public int GetNumberOfPlayerControllableTroops()`

**用途 / Purpose:** 读取并返回当前对象中 number of player controllable troops 的结果。

```csharp
// 先通过子系统 API 拿到 MissionAgentSpawnLogic 实例
MissionAgentSpawnLogic missionAgentSpawnLogic = ...;
var result = missionAgentSpawnLogic.GetNumberOfPlayerControllableTroops();
```

### TryReinforcementSpawn
`public int TryReinforcementSpawn()`

**用途 / Purpose:** 尝试获取 reinforcement spawn 的值，通常通过 out 参数返回是否成功。

```csharp
// 先通过子系统 API 拿到 MissionAgentSpawnLogic 实例
MissionAgentSpawnLogic missionAgentSpawnLogic = ...;
var result = missionAgentSpawnLogic.TryReinforcementSpawn();
```

### GetTeamFormationsSpawnData
`public void GetTeamFormationsSpawnData( { "team", "formationSpawnData" })`

**用途 / Purpose:** 读取并返回当前对象中 team formations spawn data 的结果。

```csharp
// 先通过子系统 API 拿到 MissionAgentSpawnLogic 实例
MissionAgentSpawnLogic missionAgentSpawnLogic = ...;
missionAgentSpawnLogic.GetTeamFormationsSpawnData("team", });
```

### ReserveTroops
`public void ReserveTroops(int number)`

**用途 / Purpose:** 调用 ReserveTroops 对应的操作。

```csharp
// 先通过子系统 API 拿到 MissionAgentSpawnLogic 实例
MissionAgentSpawnLogic missionAgentSpawnLogic = ...;
missionAgentSpawnLogic.ReserveTroops(0);
```

### GetGeneralCharacter
`public BasicCharacterObject GetGeneralCharacter()`

**用途 / Purpose:** 读取并返回当前对象中 general character 的结果。

```csharp
// 先通过子系统 API 拿到 MissionAgentSpawnLogic 实例
MissionAgentSpawnLogic missionAgentSpawnLogic = ...;
var result = missionAgentSpawnLogic.GetGeneralCharacter();
```

### CheckReinforcementBatch
`public unsafe bool CheckReinforcementBatch()`

**用途 / Purpose:** 检查reinforcement batch在当前对象中是否成立。

```csharp
// 先通过子系统 API 拿到 MissionAgentSpawnLogic 实例
MissionAgentSpawnLogic missionAgentSpawnLogic = ...;
var result = missionAgentSpawnLogic.CheckReinforcementBatch();
```

### GetAllTroops
`public IEnumerable<IAgentOriginBase> GetAllTroops()`

**用途 / Purpose:** 读取并返回当前对象中 all troops 的结果。

```csharp
// 先通过子系统 API 拿到 MissionAgentSpawnLogic 实例
MissionAgentSpawnLogic missionAgentSpawnLogic = ...;
var result = missionAgentSpawnLogic.GetAllTroops();
```

### SpawnTroops
`public int SpawnTroops(int number, bool isReinforcement)`

**用途 / Purpose:** 调用 SpawnTroops 对应的操作。

```csharp
// 先通过子系统 API 拿到 MissionAgentSpawnLogic 实例
MissionAgentSpawnLogic missionAgentSpawnLogic = ...;
var result = missionAgentSpawnLogic.SpawnTroops(0, false);
```

### SetSpawnWithHorses
`public void SetSpawnWithHorses(bool spawnWithHorses)`

**用途 / Purpose:** 为 spawn with horses 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MissionAgentSpawnLogic 实例
MissionAgentSpawnLogic missionAgentSpawnLogic = ...;
missionAgentSpawnLogic.SetSpawnWithHorses(false);
```

### SetBannerBearerLogic
`public void SetBannerBearerLogic(BannerBearerLogic bannerBearerLogic)`

**用途 / Purpose:** 为 banner bearer logic 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MissionAgentSpawnLogic 实例
MissionAgentSpawnLogic missionAgentSpawnLogic = ...;
missionAgentSpawnLogic.SetBannerBearerLogic(bannerBearerLogic);
```

### SetReinforcementsNotifiedOnLastBatch
`public void SetReinforcementsNotifiedOnLastBatch(bool value)`

**用途 / Purpose:** 为 reinforcements notified on last batch 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MissionAgentSpawnLogic 实例
MissionAgentSpawnLogic missionAgentSpawnLogic = ...;
missionAgentSpawnLogic.SetReinforcementsNotifiedOnLastBatch(false);
```

### SetSpawnTroops
`public void SetSpawnTroops(bool spawnTroops)`

**用途 / Purpose:** 为 spawn troops 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MissionAgentSpawnLogic 实例
MissionAgentSpawnLogic missionAgentSpawnLogic = ...;
missionAgentSpawnLogic.SetSpawnTroops(false);
```

### OnInitialSpawnOver
`public void OnInitialSpawnOver()`

**用途 / Purpose:** 在 initial spawn over 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionAgentSpawnLogic 实例
MissionAgentSpawnLogic missionAgentSpawnLogic = ...;
missionAgentSpawnLogic.OnInitialSpawnOver();
```

### OnInitialTroopsSpawned
`public void OnInitialTroopsSpawned()`

**用途 / Purpose:** 在 initial troops spawned 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionAgentSpawnLogic 实例
MissionAgentSpawnLogic missionAgentSpawnLogic = ...;
missionAgentSpawnLogic.OnInitialTroopsSpawned();
```

### OnPhaseChangedDelegate
`public delegate void OnPhaseChangedDelegate()`

**用途 / Purpose:** 在 phase changed delegate 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionAgentSpawnLogic 实例
MissionAgentSpawnLogic missionAgentSpawnLogic = ...;
missionAgentSpawnLogic.OnPhaseChangedDelegate();
```

## 真实示例（1.3.15 写法，在 1.4.5 编译不过）

> ⚠ **下面这段代码只能在 1.3.x 上编译。** 1.4.5 树里没有 `MissionAgentSpawnLogic` 这个类型，
> 照抄到 1.4.5 会报「找不到类型」。它在 1.3.15 的实际取得方式可核对：
> `BannerBearerLogic.cs:163`（1.3.15）写的是 `base.Mission.GetMissionBehavior<MissionAgentSpawnLogic>()`。

```csharp
// —— 1.3.15 写法（该树确有 MissionAgentSpawnLogic，MissionAgentSpawnLogic.cs:12，1.3.15）
var behavior = Mission.Current.GetMissionBehavior<MissionAgentSpawnLogic>();
```

## 风险与边界

**① 最致命的一条：本页所有成员与示例都指向 1.3.x，直接抄进 1.4.5 会编译失败。**
`MissionAgentSpawnLogic` 在 1.4.5 树里没有声明，所以上面每一份签名、每一个示例都只在 1.3.0 / 1.3.15 上成立。
特别提醒：**本节之前那个未标注版本的示例片段**是这类页面最容易残留的错——它看起来能用，但在 1.4.5 上直接报「找不到类型」。

**② 本页在 v1.4.5 树里的存在，只表示「版本变更记录」，不表示 1.4.5 有这个类型。**
一棵版本树的职责不只是描述「现在有什么」，还包括描述「相对于上一版变了什么」。被移除的类属于「变了什么」，它在这棵树里有位置——**但它的 API 不属于 1.4.5**。若你不点进「怎么用」那一节，只看下面 445 行成员清单，很容易误以为这页讲的是 1.4.5。

**③ 同族的 `FormationSpawnData` 同样在 1.4.5 被移除，而且它是嵌套类型。**
它在 1.3.15 里写在 `MissionAgentSpawnLogic.cs:976`（1.3.15），是**嵌套**在那个类里的 `internal struct`，**不在 `Missions/Objectives/` 目录**。找它时用类型名当文件名去搜必然搜不到。

**④ 本页的 `**File:**` 字段指向一棵【本页自己版本树里没有】的文件——这是本页唯一一个字段例外。**
`**File:** \`TaleWorlds.MountAndBlade/MissionAgentSpawnLogic.cs\`` 是 **1.3.15** 树的路径，在 1.4.5 树里必然打不开。**保留原值而不改成 1.3.15 的绝对相对路径**，是因为该字段是机器读的（门禁、路径普查都依赖它），改掉会让「这一页属于哪棵树」变得不可读。**字段保持原样 + 紧邻处声明版本**，是这一页唯一成立的处理方式。

**⑤ 不要在这页寻找「它为什么被移除」。** 源码能证明「不在了」，但证明不了「为什么」；本页刻意不解释原因，也不用推测性说法填空。

## 参见

- [本区域目录](../)