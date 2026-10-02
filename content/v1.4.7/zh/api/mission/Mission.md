---
title: "Mission"
description: "战斗场景的运行时根对象：持有 Scene、队伍、Agent 列表、任务模式与任务逻辑容器，并提供生成、寻路、命中判定、镜头与结束流程的完整 API。Mission.Current 是战斗层唯一的全局入口。"
---
# Mission

**命名空间：** `TaleWorlds.MountAndBlade`
**模块：** `TaleWorlds.MountAndBlade`
**类型：** `public sealed class Mission : DotNetObject, IMission`
**基类：** `TaleWorlds.DotNet.DotNetObject`，实现 `IMission`
**源文件：** `TaleWorlds.MountAndBlade/Mission.cs`（声明见第 42 行）

## 概述

`Mission` 是一场战斗（或一次遭遇、一次过场）的运行时根对象。它把 3D 场景（`Scene`）、两侧队伍（`TeamCollection Teams` / `Sides`）、所有角色（`MissionAgentHandler`）、投射物、边界、导航网格与任务模式（`MissionMode`）绑在一起，并且是**战斗层唯一的全局入口**——通过静态 `Mission.Current` 访问。

它的 API 面极大（400+ 个公开成员），但对 modder 来说真正每天用到的是几组：拿到 Agent（`Agent.MainAgent`、`GetClosestEnemyAgent`、`GetNearbyAllyAgents`）、加行为（`AddMissionBehavior`）、生成单位（`SpawnAgent` / `SpawnMonster`）、查询地形与导航（`IsPositionInsideBoundaries`、`GetPathBetweenPositions`、`IsFormationUnitPositionAvailable`）、以及结束战斗（`EndMission` / `RetreatMission` / `SurrenderMission`）。

它与 [Campaign](../../campaign/Campaign) 是两个**独立的生命周期**：任务由 [MissionState(../MissionState) 打开，结束时 `Mission.Current` 变为 null，而 `Campaign.Current` 通常仍然有效。这条边界决定了所有跨层逻辑的正确写法。

## 心智模型

**心智模型一：Mission 是一个「易失的对象图」。** 任务结束时它被整体销毁，`Mission.Current` 变 null，它内部的一切（`Agent`、`MissionWeapon`、`Missile`、`GameEntity`、`Team`）同时失效。因此：

1. **永远不要把 `Mission` 或 `Agent` 的引用存进跨任务的静态字段 / Behavior 字段。** 需要长期保存的是**数据**（`Hero`、`Settlement`、字符串 ID），不是运行时对象。
2. **任务结束回调里不要再改世界**。`MissionBehavior.OnMissionEnded` / `OnEndMission` 触发时，清理已经开始，此刻写世界可能无效或抛异常。

**心智模型二：所有战斗逻辑挂在 `MissionBehavior` 上，而不是轮询。** `AddMissionBehavior` 是官方扩展点；`MissionBehavior` 的 `OnMissionTick` / `OnAgentHit` / `OnScoreHit` 等回调覆盖了绝大多数需求。轮询 `Mission.Agents` 找目标既慢又容易在遍历中被销毁的 Agent 打断。

**心智模型三：三个坐标/时钟不要混。**
- `Mission.FixedDeltaTime` 是固定的物理步长（战斗逻辑用）。
- `Mission.CurrentState`（`Mission.State` 枚举）是任务的状态（`NotStarted` / `InProgress` / `Ending` / `Ended`）。
- `MissionMode` 是任务的「玩法模式」（对话、赌博、攻城…），由 `SetMissionMode` 切换。

**常见错误**：在 `OnMissionTick` 里调用 `EndMission`；在 `Mission.Current == null` 时访问 `MainAgent`；用 `Mission.Current.Agents` 全表遍历找最近敌人（应该用 `GetClosestEnemyAgent`）；在任务行为里缓存 `Hero` 的位置当作战斗坐标。

## 何时使用 / 何时不要使用

- **使用**：任何战斗内逻辑的入口（通过 `Mission.Current`，先判空）。
- **使用**：注册 `MissionBehavior`（`AddMissionBehavior`）而不是在别处轮询。
- **使用**：生成单位与投射物（`SpawnAgent`、`CreateMissionObjectFromPrefab`）。
- **使用**：查询地形、边界与导航（`IsPositionInsideBoundaries`、`IsPositionInsideAnyBlockerNavMeshFace2D`、`GetPathBetweenPositions`）。
- **使用**：结束战斗（`EndMission(MissionEndType...)`）——**结束方式是策略决定，不是代码决定**。
- **不要**：不要从任务里访问 `Campaign.Current` 并写入地图状态——跨层写入要么无效要么让地图与战斗脱节。
- **不要**：不要在任务结束后使用任何取自本任务的引用。
- **不要**：不要为了「获取目标」而遍历 `Agents`；`GetClosestEnemyAgent(agent)` 是优化过的路径查找。

## 成员说明

公开成员超过 400 项，按用途分成九组。

### 一、全局入口与生命周期

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `static Mission Current` | 当前任务实例。**任务结束后为 null**。战斗层唯一的全局入口。 |
| `Scene Scene` | 任务所处的 3D 场景。所有 `GameEntity`、`Vec3` 坐标都在这个场景里。 |
| `Mission.State CurrentState` | 任务状态。枚举值为 `NewlyCreated` → `Initializing` → `Continuing` → `EndingNextFrame` → `Over`。**`EndingNextFrame` 与 `Over` 期间不要再改世界**。 |
| `void Initialize()` / `void ResetMission()` | 初始化 / 重置任务。由引擎在创建与复用场景时调用。 |
| `void EndMission(...)` / `RetreatMission()` / `SurrenderMission()` | 结束战斗的三条路径（正常 / 撤退 / 投降）。**它们会触发结束事件并最终让 `Mission.Current` 变 null**——在任务行为里调用是允许的，但不要在遍历中调用。 |
| `bool MissionIsEnding` | 任务是否已进入结束流程。结束流程开始后，所有写操作应停止。 |
| `bool IsDeploymentFinished` | 部署阶段是否结束。战斗真正开始前是 `false`。 |
| `float FixedDeltaTime` / `FixedDeltaTimeMode FixedDeltaTimeMode` | 固定的物理步长与模式。战斗逻辑的时间基准。 |
| `void OnTick(float dt)` / `void AddTickAction(...)` / `RemoveTickAction` | 任务 tick 与 tick 动作注册。业务逻辑应走 `MissionBehavior.OnMissionTick`。 |
| `void OnEndMissionRequest()` / `void OnEndMissionResult(...)` | 结束请求与结束结果回调。 |
| `float GetAverageFps()` | 平均帧率。性能诊断用。 |
| `bool NeedsMemoryCleanup` | 任务结束后是否需要内存清理。 |

### 二、队伍与阵营

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `TeamCollection Teams` / `Team Team` / `BattleSideEnum` 系列 | 队伍集合与所属侧。`Teams` 是 `List<Team>` 派生类型。 |
| `Team SpectatorTeam` | 观战队伍。 |
| `BattleSideEnum Sides` | 双方阵营标识。 |
| `bool IsFriendlyMission` | 是否为友方任务（不打）。 |
| `void JoinEnemyTeam(Agent agent)` | 把 Agent 划入敌方。**会改变队伍关系**，慎用于事件驱动。 |
| `int GetMemberCountOfSide(BattleSideEnum side)` | 某侧人数。 |
| `Agent GetAgentTeam(...)` / `Team GetTeam(...)` / `List<Team> GetTeamsOfSide(...)` | 队伍反查。 |
| `void OnTeamDeployed(Team team)` / `void OnBattleSideDeployed(BattleSideEnum side)` | 部署完成事件转发。 |
| `bool CanAgentRout(...)` | 该 Agent 能否溃逃。 |
| `RetreatSide` | 撤退侧状态。 |

### 三、Agent 查询与操控

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `MissionAgentHandler`（经 `Agents`） | 全部 Agent 的容器。**遍历时 Agent 可能被击杀移除**，先复制。 |
| `Agent MainAgent` / `Agent MainAgentServer` | 玩家 Agent / 服务器侧玩家 Agent。联机时本地客户端的 `MainAgent` 可能为代理对象。 |
| `void TakeControlOfAgent(Agent agent)` / `bool CanTakeControlOfAgent(...)` | 接管控制权（切换可玩单位）。 |
| `Agent GetClosestEnemyAgent(Agent agent)` | **最常用**：离给定 Agent 最近的敌人。走优化过的查找路径。 |
| `Agent GetClosestAllyAgent(Agent agent)` | 最近的友军。 |
| `Agent[] GetNearbyEnemyAgents(Agent agent, float radius)` / `GetNearbyAllyAgents` / `GetNearbyAllyAgentsCount` / `GetNearbyEnemyAgentsCount` | 半径范围内的敌 / 友集合。**比遍历全表快得多**。 |
| `bool HasAnyAgentsOfSideInRange(...)` / `int GetNearbyEnemyAgentCount(...)` | 快速的存在性 / 计数查询，不分配数组。 |
| `bool IsAgentInProximityMap(...)` | Agent 是否进入了邻近交互范围（对话 / 交互触发）。 |
| `bool IsAgentInteractionAllowed(...)` | 当前是否允许交互。 |
| `bool IsOrderGesturesEnabled()` | 是否启用指令手势（联机表现层）。 |
| `bool IsPlayerCloseToAnEnemy(...)` | 玩家是否贴近敌人（用于潜行 / 警戒判定）。 |
| `bool IsPlayerCloseToAnEnemy(...)` → `GetExtraEquipmentElementsForCharacter(...)` | 按角色取额外装备元素（护盾等）。 |

### 四、生成与销毁

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `void SpawnAgent(...)` | 生成一个 Agent。签名参数很长（初始装备、位置、方向、队伍、可为 AI 等）。 |
| `void SpawnMonster(...)` | 生成怪物 / 野兽。 |
| `void SpawnTroop(...)` | 按兵种生成部队。 |
| `void SpawnWeaponWithNewEntity(...)` / `SpawnWeaponAsDropFromAgentAux(...)` / `SpawnAttachedWeaponOnCorpse(...)` | 生成武器实体与掉落。 |
| `GameEntity CreateMissionObjectFromPrefab(string prefabName)` | 从 prefab 创建场景物件（可破坏物、可交互物）。 |
| `void AddDynamicallySpawnedMissionObjectInfo(...)` / `GetFreeRuntimeMissionObjectId()` / `GetFreeSceneMissionObjectId()` | 动态物件的 ID 分配。 |
| `GameEntity GetMissionObjectFromMissionObjectId(MissionObjectId id)` | 按 ID 取回场景物件。 |
| `void RemoveSpawnedItemsAndMissiles()` | 清空生成物。**在生成大量物件的任务里做收尾用**，否则会残留到场景复用。 |
| `void KillAgent(Agent agent, bool ...)` / `void KillAgentsOnEntity(...)` | 击杀。**会触发 `OnAgentRemoved` / `OnAgentDeleted` 回调**，在这些回调里遍历 Agent 列表会抛异常。 |
| `void KillAgentCheat(...)` / `MakeEnemiesFleeCheat()` / `MakeTeamFleeCheat(...)` | 作弊级强制操作。 |
| `void ClearMissiles()` / `void ClearCorpses()` / `void ClearAgentActions()` | 清理投射物 / 尸体 / 动作。 |
| `void SetOverrideCorpseCount(...)` / `void SetMissionCorpseFadeOutTimeInSeconds(...)` | 尸体上限与淡出时间。 |

### 五、地形、导航与寻路

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `MBBoundaryCollection Boundaries` | 战斗边界。多边形的活视图。 |
| `bool IsPositionInsideBoundaries(Vec3 position)` | 位置是否在战斗区域内。 |
| `bool IsPositionInsideHardBoundaries(Vec3 position)` | 是否在硬边界内（更严格）。 |
| `bool IsPositionInsideAnyBlockerNavMeshFace2D(...)` | 是否落在阻挡导航网格面上（墙、障碍）。 |
| `bool IsPositionOnAnyBlockerNavMeshFace(...)` | 同上，另一条路径。 |
| `Vec3 GetClosestBoundaryPosition(...)` | 取边界上最近点。越界时用来把单位拉回场内。 |
| `bool GetPathBetweenPositions(...)` | 两点间寻路。**返回值只在本帧有效**——不要缓存 `Path` 对象跨帧使用。 |
| `bool IsFormationUnitPositionAvailable(ref WorldPosition unitPosition, Team team)` / `bool IsOrderPositionAvailable(...)` | 编队位置 / 指令位置是否可用。生成前必查。另有 `...MT` 后缀的多线程版本。 |
| `void SetNavigationFaceCostWithIdAroundPosition(...)` | 临时抬高某区域的寻路代价（用于「绕开危险区」）。**会影响全局寻路**，慎用。 |
| `float GetWaterLevelAtPosition(Vec3)` | 水位高度。判断浅水 / 深水。 |
| `Scene, Vec3 GetWaterLevelAtPositionMT(...)` | 多线程版本。 |
| `void RayCastForClosestAgent(...)` / `RayCastForClosestAgentsLimbs(...)` / `RayCastForGivenAgentsLimbs(...)` | 射线检测（命中最近的 Agent / 指定肢体）。 |
| `Vec3 GetBestSlopeTowardsDirection(...)` / `GetBestSlopeAngleHeightPosForDefending(...)` / `FindPositionWithBiggestSlopeTowardsDirectionInSquare(...)` | 找最佳坡位。防守 AI 的标准工具。 |
| `Vec3 GetWeightedPointOfEnemies(...)` / `GetWeightedPointOfEnemies(...)` | 敌方加权质心。 |
| `MissionNavigationFace` / `GetCurrentNavigationFaceId()` 相关 | 导航面查询。 |

### 六、武器、命中与伤害

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `void RegisterBlow(...)` / `Blow CreateBlowFromBlowAsReflection(...)` | 构造命中事件。伤害类 mod 的核心入口。 |
| `WeaponComponentData GetAttackerWeaponsForFriendlyFirePreventing(...)` | 取有效攻击武器（排除友伤豁免）。 |
| `float GetDamageMultiplierOfCombatDifficulty()` / `float GetShootDifficulty` | 难度系数。 |
| `void KillAgentCheat(...)` | 见上。 |
| `void CreateCombatLogSafe(...)` | 写战斗日志。联机同步用。 |
| `void SpawnAttachedWeaponOnSpawnedWeapon(...)` / `AttachWeaponWithNewEntityToSpawnedWeapon(...)` | 武器挂载。 |
| `void AddToWeaponListForFriendlyFirePreventing(...)` | 友伤豁免列表。 |

### 七、镜头与表现

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `SetCustomCameraLocalOffset / SetCustomCameraTargetLocalOffset / SetCustomCameraLocalOffset2 / SetCustomCameraGlobalOffset / SetCustomCameraLocalRotationalOffset`（各带一个 setter） | 镜头偏移控制。**同时只能有一个来源在改镜头**——与任务相机脚本冲突时表现为抖动。 |
| `void SetCustomCameraFovMultiplier(float)` / `SetCustomCameraFixedDistance(float)` / `SetCustomCameraIgnoreCollision(bool)` | 镜头 FOV、距离与穿墙。 |
| `void SetCameraFrame(MatrixFrame)` / `GetCameraFrame()` | 直接设置 / 读取镜头位姿。 |
| `void ResetFirstThirdPersonView()` | 恢复第一 / 第三人称。**任务结束时不要忘记调用**，否则下一个任务继承旧镜头。 |
| `SetListenerAndAttenuationPosBlendFactor(...)` | 音频监听点混合。 |
| `void ForceDisableOcclusion(bool)` | 关闭遮挡剔除（调试视野问题用）。 |
| `void MakeSound(...)` / `MakeSoundOnlyOnRelatedPeer(...)` | 播放音效。 |

### 八、时间控制与重放

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `void AddTimeSpeedRequest(...)` / `RemoveTimeSpeedRequest(...)` / `float GetRequestedTimeSpeed()` | 时间流速请求（慢动作 / 加速）。**请求是引用计数的**——加了不删会让战斗永远慢放。 |
| `void ClearUnreferencedResources()` | 清理未被引用的资源。生成大量物件的任务收尾用。 |
| `void SkipForwardMissionReplay()` | 快进回放。 |
| `MissionTimeTracker`（成员） | 任务内计时器（比赛 / 攻城倒计时）。 |
| `bool ShowInMissionLoadingScreen` | 是否显示加载画面。 |

### 九、行为与事件

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `void AddMissionBehavior(MissionBehavior behavior)` | **注册战斗扩展点**。对应 [MissionBehavior(../MissionBehavior)。 |
| `bool RemoveMissionBehavior(MissionBehavior behavior)` | 移除行为。 |
| `void InitializeStartingBehaviors(...)` | 初始化起始行为。 |
| `MissionLogics` / `List<MissionBehavior> MissionBehaviors` | 任务逻辑容器与行为列表。 |
| `IMissionSystemHandler` / `InputManager` | 系统处理器与输入管理器。 |
| `IsQuestScreenAccessible()` / `IsCharacterWindowAccessible()` / `IsPartyWindowAccessible()` / `IsKingdomWindowAccessible()` / `IsClanWindowAccessible()` / `IsEncyclopediaWindowAccessible()` / `IsBannerWindowAccessible()` | **UI 可用性查询**。在战斗中打开这些界面前必须先问，否则会打开一个没有背景的任务 UI。 |
| `bool IsInventoryAccessible()` | 物品栏是否可打开。 |
| `FocusableObjectInformationProvider` | 焦点对象信息（交互提示用）。 |
| `void AddListener(...)` / `RemoveListener(...)` | 任务级监听。 |

### 十、类型内的辅助结构

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `MBBoundaryCollection` / `Missile` / `DynamicallyCreatedEntity` / `TeamCollection` | 本类内部声明的辅助类型。`Missile` 继承 `MBMissile`；`TeamCollection` 继承 `List<Team>`。 |
| `enum WeaponSpawnFlags` / `MissionCombatType` / `BattleSizeType` / `BattleSizeQualifier` / `MissionTeamAITypeEnum` / `MissileCollisionReaction` / `MissionTickAction` / `State` | 本类内的枚举类型，用于各方法的参数与属性。 |

## 示例

### 示例 1：注册 MissionBehavior（战斗逻辑的正规入口）

不要在别处轮询任务状态——把逻辑挂到 `MissionBehavior` 上。

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public class MyMissionBehavior : MissionBehavior
{
    // MissionBehaviorType 只有 Logic 与 Other 两个值
    public override MissionBehaviorType BehaviorType => MissionBehaviorType.Logic;

    public override void OnMissionTick(float dt)
    {
        Mission mission = Mission.Current;
        if (mission == null) return;

        Agent player = Agent.MainAgent;
        if (player == null) return;

        // 用优化过的查找而不是遍历全表
        Agent nearestEnemy = mission.GetClosestEnemyAgent(player);
    }

    public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)
    {
        // 注意：此刻不要遍历 mission.Agents，会抛集合修改异常
    }
}

// 在任务创建后注册
Mission mission = Mission.Current;
if (mission != null)
{
    mission.AddMissionBehavior(new MyMissionBehavior());
}
```

### 示例 2：地形与导航查询

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

Mission mission = Mission.Current;
if (mission == null) return;

Vec3 pos = Agent.MainAgent.Position;

// 边界与阻挡
bool inBounds = mission.IsPositionInsideBoundaries(pos);
bool onWall = mission.IsPositionInsideAnyBlockerNavMeshFace2D(pos);

// 编队位置是否可用（生成前必查）。参数是 WorldPosition 引用 + 队伍
WorldPosition pos = Agent.MainAgent.GetWorldFrame().GetPosition().ToWorldPosition();
bool canStand = mission.IsFormationUnitPositionAvailable(ref pos, Agent.MainAgent.Team);

// 水位：判断浅水
float waterLevel = mission.GetWaterLevelAtPosition(pos);
```

### 示例 3：结束后清理镜头与生成物

任务结束前后容易残留状态，尤其是镜头和动态生成的物件。

```csharp
using TaleWorlds.MountAndBlade;

public class CleanupBehavior : MissionBehavior
{
    public override void OnEndMission()
    {
        Mission mission = Mission.Current;
        if (mission == null) return;

        // 关键：恢复镜头，否则下一个任务继承旧视角
        mission.ResetFirstThirdPersonView();

        // 清理生成物，否则会残留在复用的场景里
        mission.RemoveSpawnedItemsAndMissiles();
    }

    public override void OnRemoveBehavior()
    {
        base.OnRemoveBehavior();
    }
}
```

## 风险与边界

- **任务结束后一切失效**。`EndMission` 之后 `Mission.Current` 为 null，任务里取出的 `Agent`、`MissionWeapon`、`GameEntity`、`Team` 全部不可用。**任何跨任务的缓存都会变成悬空引用**。
- **结束流程中不要再改世界**。`MissionIsEnding` 为 true 后写操作可能无效或抛异常；这包括 `SpawnAgent`、`KillAgent`、镜头设置。
- **遍历 `Agents` 时 Agent 可能被移除**。击杀会在遍历中从集合里删除元素——在 `foreach` 里调用 `KillAgent` 抛 `InvalidOperationException`。先复制。
- **寻路结果不跨帧有效**。`GetPathBetweenPositions` 返回的路径依赖当帧的导航状态，缓存后使用会给出错误结果。
- **时间流速是引用计数**。`AddTimeSpeedRequest` 不配对 `RemoveTimeSpeedRequest`，战斗会永久停在慢放。
- **镜头是独占资源**。多个系统同时改镜头（任务相机脚本 + 你的 setter）表现为抖动。任务结束务必恢复。
- **UI 可用性必须查询**。战斗中直接打开角色 / 队伍 / 百科界面会得到一个无背景的任务 UI。先问 `IsCharacterWindowAccessible()` 之类。
- **`SetNavigationFaceCostWithIdAroundPosition` 影响全局寻路**：它不是局部修改，会让 AI 与玩家的路径一起变。
- **联机下的差异**。`MainAgent` 在客户端可能是代理对象；`MainAgentServer` 才是权威。判定与伤害类逻辑应放在服务器侧。
- **单线程 + 原生互操作**。`Mission` 的 `DotNetObject` 基类意味着大量成员穿透到 native 层（`Vec3` / `MatrixFrame` / 物理网格）。这些调用必须在主线程，且在场景已加载的前提下执行。
- **场景复用**。任务场景可能被复用（返回同一 Scene）。任务结束时不清生成物，下一个任务会看到上一个任务的残留。

## 依赖关系

- 上游 / 提供者：
  - [MissionState(../MissionState) 通过 `OpenNew(...)` 创建本类，并在任务结束时销毁。
  - [MBSubModuleBase](../../core/MBSubModuleBase) 的 `OnBeforeMissionBehaviorInitialize` / `OnMissionBehaviorInitialize` 是任务行为初始化钩子。
- 相互 / 下游：
  - [Agent(../Agent) 是战斗中的可操作单位，由本类生成与管理。
  - [MissionBehavior(../MissionBehavior) 是战斗扩展点，通过 `AddMissionBehavior` 注册。
  - [Campaign](../../campaign/Campaign) 通过 `CampaignMissionManager` 调度进入 / 退出任务。
  - [ScreenManager](../../gui/ScreenManager) / [ScreenBase](../../gui/ScreenBase) 管理任务期间可能出现的界面。

## 参见

- ↑ 父级：[mission 索引](../)
- ↔ 相关：[MissionState](../MissionState) · [MissionBehavior](../MissionBehavior) · [Agent](../Agent) · [Campaign](../../campaign/Campaign) · [MBSubModuleBase](../../core/MBSubModuleBase)