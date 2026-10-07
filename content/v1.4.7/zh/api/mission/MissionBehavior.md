---
title: "MissionBehavior"
description: "战斗层的行为基类：60 多个生命周期与事件回调覆盖任务创建、部署、每 tick、命中、Agent 生成 / 死亡、上下马、交互、任务状态与结束。所有战斗内 mod 逻辑的标准挂载点。"
---
# MissionBehavior

**命名空间：** `TaleWorlds.MountAndBlade`
**模块：** `TaleWorlds.MountAndBlade`
**类型：** `public abstract class MissionBehavior : IMissionBehavior`
**基类：** 无，实现 `TaleWorlds.MountAndBlade.IMissionBehavior`
**源文件：** `bannerlord-1.4.7/TaleWorlds.MountAndBlade/MissionBehavior.cs`（声明见第 11 行）

## 概述

`MissionBehavior` 是战斗层唯一的官方扩展载体，地位等同于战役层的 [CampaignBehaviorBase](../../campaign/CampaignBehaviorBase)。它不持有游戏状态，**只有 60 多个全为 `virtual` 的回调**——任务被创建、部署完成、每帧 tick、Agent 被命中 / 击杀、上下马、使用物件、任务状态切换、任务结束，每一个都是一条独立的回调。

它与 [Mission(../Mission) 的关系是「观察者 + 参与者」：通过 `mission.AddMissionBehavior(this)` 注册后，引擎会在对应时机调用你的回调，并把它放进 `Mission.MissionBehaviors` 列表。

关键差异必须讲清楚：**`MissionBehavior` 不参与存档**。战役层的 Behavior 有 `SyncData`，战斗层的没有——任务结束时它连同整个 `Mission` 一起被销毁。需要跨任务保存的东西必须写回战役层（`Hero`、`Settlement`、`Campaign` 字段）。

`Mission` 属性由引擎在注册后注入（`internal set`），所以构造时它是 null，`OnBehaviorInitialize` 之后才可用。

## 心智模型

**心智模型一：它是「战斗期间的订阅者」，不是全局服务。**

1. **注册 → 回调 → 移除。** 在 `MBSubModuleBase.OnMissionBehaviorInitialize(Mission)` 或 `MissionGameStarter` 的任务启动流程里 `AddMissionBehavior`。任务结束时会自动移除，也可以在 `OnEndMission` 里提前清理。
2. **不要缓存 `Mission` 或 `Agent` 到跨任务的存储。** 任务结束时它们全部失效。需要长期数据就写回战役层。
3. **`BehaviorType` 决定分组**。枚举只有 `Logic` 与 `Other` 两个值，用于引擎区分「决策类行为」与「其它行为」，影响它的排序与调用分组。
4. **回调期间的世界处于变动中**。`OnAgentRemoved` 触发时，Agent 已从场景移除但可能尚未 `Deleted`；`OnEarlyAgentRemoved` 更早。只在回调里打标记，处理逻辑放到下一个 `OnMissionTick`。

**回调选择速查**：
- 每帧逻辑 → `OnMissionTick(float dt)` / `OnPreMissionTick` / `OnPreDisplayMissionTick`
- 固定步长物理 → `OnFixedMissionTick(float fixedDt)`
- 命中判定 → `OnMeleeHit` / `OnMissileHit` / `OnAgentHit` / `OnScoreHit` / `OnRegisterBlow`
- Agent 生死 → `OnEarlyAgentRemoved` / `OnAgentRemoved` / `OnAgentDeleted`
- 部署 → `OnTeamDeployed` / `OnBattleSideDeployed` / `OnDeploymentFinished` / `OnAfterDeploymentFinished`
- 结束 → `OnEndMissionInternal` / `OnEndMission` / `OnRemoveBehavior`

**常见错误**：在 `OnAgentRemoved` 里遍历 `Mission.Agents`（集合正在变更）；覆写回调不调 `base`；在 `OnMissionTick` 里每帧做 O(n) 扫描；以及用 `MissionBehavior` 存需要跨任务的数据（读档后归零）。

## 何时使用 / 何时不要使用

- **怎么拿到它**：`MissionBehavior` 是抽象类且没有公开构造函数（`MissionBehavior.cs:11`），只能派生。实例化之后交给当前任务注册：`Mission.Current.AddMissionBehavior(myBehavior)`（`Mission.cs:4472`）。引擎自己的调用点就是这个形状——`Mission.Current.AddMissionBehavior(statisticsMissionLogic);`（`SandBox/CampaignBehaviors/StatisticsCampaignBehavior.cs:205`）。注册时引擎才回填 `Mission` 属性（`MissionBehavior.cs:16`，setter 是 `internal`），所以构造期间它还是 null。
- **典型用法**：派生类覆写 `BehaviorType` 与你关心的那几个回调（`OnMissionTick(float dt)` 在 `MissionBehavior.cs:194`，`OnAgentDeleted(Agent affectedAgent)` 在 `:118`），构造好实例后 `Mission.Current.AddMissionBehavior(behavior)`，之后逻辑全靠回调推进，不用外部轮询。
- **最容易踩的坑**：忘了覆写 `public abstract MissionBehaviorType BehaviorType { get; }`（`MissionBehavior.cs:30`）——它是抽象成员，不覆写直接编译不过；而枚举只有 `Logic` 与 `Other` 两个值（`MissionBehaviorType.cs:9`、`:11`），选错会让引擎按另一类归置你的行为。另一个同形的坑在收尾：引擎调用的是 `public virtual void OnEndMissionInternal()`（`MissionBehavior.cs:163`），它的方法体只有一句 `this.OnEndMission();`——你要覆写的是 `protected virtual void OnEndMission()`（`:169`）。覆写 `OnEndMissionInternal` 而不调 base，会把你的清理代码与基类派发整个切断。
- **使用**：任何战斗内逻辑（伤害修正、命中反馈、AI 补丁、UI 提示、战斗 UI 覆盖）。
- **使用**：需要「战斗开始 / 结束」钩子而不改动本体时。
- **使用**：在 `OnEndMission` 里做清理（镜头、生成物、事件订阅）。
- **不要**：用它保存跨任务状态——它不参与存档。用 [CampaignBehaviorBase](../../campaign/CampaignBehaviorBase)。
- **不要**：在 `OnMissionTick` 里做每帧 O(n) 全表扫描。
- **不要**：覆写回调时忘记调 `base`。

## 成员说明

### 一、生命周期

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `Mission Mission { get; internal set; }` | 所属任务。**`internal set`——由引擎在注册时注入，构造时为 null**。在 `OnBehaviorInitialize` 之后使用。 |
| `public abstract MissionBehaviorType BehaviorType { get; }` | 行为分组。枚举值只有 `Logic` 与 `Other`。**必须覆写**（抽象成员）。 |
| `OnAfterMissionCreated()` | 任务对象已创建（场景可能尚未加载完）。 |
| `OnBehaviorInitialize()` | 行为被引擎初始化。**`Mission` 可用、`RegisterEvents` 逻辑已就绪**的第一个可靠点。 |
| `OnCreated()` | 行为创建完成。 |
| `EarlyStart()` / `AfterStart()` | 任务启动的前 / 后。`EarlyStart` 在部署前，`AfterStart` 在任务正式运行后。 |
| `OnRenderingStarted()` | 场景渲染已开始。 |
| `OnClearScene()` | 场景清理。**在这里解除所有场景级引用**。 |
| `OnEndMissionInternal()` | 任务结束流程开始（引擎侧）。 |
| `protected virtual void OnEndMission()` | 任务结束。**这是做收尾清理的正确位置**（镜头、生成物、订阅）。 |
| `OnRemoveBehavior()` | 行为被移除。最后一次回调。 |

### 二、Tick

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `OnFixedMissionTick(float fixedDt)` | 固定步长 tick。物理 / 数值同步逻辑放这里，参数是固定 `dt`。 |
| `OnPreMissionTick(float dt)` | 任务 tick 之前。用于「本帧即将发生什么」的预处理。 |
| `OnPreDisplayMissionTick(float dt)` | 显示 tick 之前。 |
| `OnMissionTick(float dt)` | **主 tick**。绝大多数每帧逻辑放这里。**性能敏感**。 |

### 三、命中与伤害

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `OnMeleeHit(Agent attacker, Agent victim, bool isCanceled, AttackCollisionData collisionData)` | 近战命中。`isCanceled` 为 true 表示被格挡 / 取消。 |
| `OnMissileHit(Agent attacker, Agent victim, bool isCanceled, AttackCollisionData collisionData)` | 投射物命中。 |
| `OnMissileCollisionReaction(Mission.MissileCollisionReaction, Agent attackerAgent, Agent attachedAgent, sbyte attachedBoneIndex)` | 投射物碰撞反应（直飞 / 穿透 / 反弹）。 |
| `OnAgentHit(Agent affectedAgent, Agent affectorAgent, in MissionWeapon affectorWeapon, in Blow blow, in AttackCollisionData attackCollisionData)` | **通用命中回调**——近战与投射物都会走到这里。伤害类逻辑的首选。 |
| `OnScoreHit(Agent affectedAgent, Agent affectorAgent, WeaponComponentData attackerWeapon, bool isBlocked, bool isSiegeEngineHit, in Blow blow, in AttackCollisionData collisionData, float damagedHp, float hitDistance, float shotDifficulty)` | 命中计分（决定是否算有效命中 / 是否触发命中提示）。 |
| `OnRegisterBlow(Agent attacker, Agent victim, WeakGameEntity realHitEntity, Blow b, ref AttackCollisionData collisionData, in MissionWeapon attackerWeapon)` | **命中事件注册阶段**——在这里改 `collisionData` 可以改变实际伤害。这是伤害 mod 最强的入口。 |
| `OnAgentShootMissile(Agent shooterAgent, EquipmentIndex weaponIndex, Vec3 position, Vec3 velocity, Mat3 orientation, bool hasRigidBody, int forcedMissileIndex)` | 射击瞬间。可用于改弹道初速。 |
| `OnMissileRemoved(int missileIndex)` | 投射物被移除。 |

### 四、Agent 生命周期

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `OnAgentCreated(Agent agent)` | Agent 生成。**刷兵 / 初始化属性类 mod 的入口**。 |
| `OnAgentBuild(Agent agent, Banner banner)` | Agent 外观构建完成。 |
| `OnAgentTeamChanged(Team prevTeam, Team newTeam, Agent agent)` | 换队。 |
| `OnAgentControllerSetToPlayer(Agent agent)` | 控制器变成玩家（切人 / 夺回控制）。 |
| `OnEarlyAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)` | 死亡流程早期。 |
| `OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)` | 死亡流程。**此刻不要遍历 `Mission.Agents`**。 |
| `OnAgentDeleted(Agent affectedAgent)` | Agent 已从场景彻底删除。**此刻该 Agent 引用彻底失效**。 |
| `OnAgentDeleted` 之外的 `OnAgentFleeing(Agent)` / `OnAgentPanicked(Agent)` | 逃跑 / 恐慌。 |
| `OnAgentMount(Agent agent)` / `OnAgentDismount(Agent agent)` | 上马 / 下马。 |
| `OnAgentControllerChanged(Agent agent, AgentControllerType oldController)` | 控制器变更（`protected internal`）。 |
| `OnAgentAlarmedStateChanged(Agent agent, Agent.AIStateFlag flag)` | 警戒状态变更。 |
| `OnGetAgentState(Agent agent, bool usedSurgery)`（`protected internal`） | 取 Agent 状态时被调用。**改状态类 mod 的入口**。 |
| `OnAgentInteraction(Agent userAgent, Agent agent, sbyte agentBoneIndex)` | 交互动作。 |
| `OnObjectUsed(Agent userAgent, UsableMissionObject usedObject)` / `OnObjectStoppedBeingUsed(...)` | 使用 / 停止使用场景物件。 |
| `OnFocusGained(Agent agent, IFocusable focusableObject, bool isInteractable)` / `OnFocusLost(...)` | 交互焦点。 |
| `OnAssignPlayerAsSergeantOfFormation(Agent agent)` | 玩家被任命为编队军士。 |
| `OnPreDisplayMissionTick` 之外的 `IsThereAgentAction(Agent userAgent, Agent otherAgent)` | 询问是否存在动作（对话 / 交互的前置判断）。 |

### 五、队伍、部署与任务状态

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `OnAddTeam(Team team)` / `AfterAddTeam(Team team)` | 队伍加入。 |
| `OnTeamDeployed(Team team)` | 队伍部署完成。 |
| `OnBattleSideDeployed(BattleSideEnum side)` | 整个阵营部署完成。 |
| `OnDeploymentFinished()` | 部署阶段结束，战斗正式开始。 |
| `OnAfterDeploymentFinished()` | 部署结束之后。 |
| `OnMissionStateActivated()` / `OnMissionStateDeactivated()` / `OnMissionStateFinalized()` | 任务状态机切换。 |
| `OnMissionModeChange(MissionMode oldMissionMode, bool atStart)` | 任务模式切换。 |
| `GetCompassTargets()` | 返回 `List<CompassItemUpdateParams>`，往罗盘上加标记。**每帧调用**——返回新列表有 GC 压力，慎用。 |
| `OnTutorialCompleted(string completedTutorialIdentifier)` | 战斗内教程完成。 |
| `OnFormationCaptainChanged` 相关回调 | 编队长变更。 |

### 六、实体与其它

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `OnEntityRemoved(GameEntity entity)` | 场景实体被移除。**这是解除实体引用订阅的正确位置**。 |
| `OnObjectDisabled(DestructableComponent destructionComponent)`（`protected internal`） | 可破坏物被禁用。 |
| `OnMissionScreenPreLoad()` | 任务界面预加载。 |
| `OnClearScene()` | 场景清理。 |
| `OnRemoveBehavior()` | 行为移除。 |

## 示例

### 示例 1：命中修正 Behavior

`OnRegisterBlow` 是改伤害最强的入口——`collisionData` 是 `ref` 传入的。

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public class DamageModifierBehavior : MissionBehavior
{
    public override MissionBehaviorType BehaviorType => MissionBehaviorType.Logic;

    protected override void OnRegisterBlow(Agent attacker, Agent victim, WeakGameEntity realHitEntity,
        Blow b, ref AttackCollisionData collisionData, in MissionWeapon attackerWeapon)
    {
        base.OnRegisterBlow(attacker, victim, realHitEntity, b, ref collisionData, attackerWeapon);

        if (attacker != null && attacker.IsPlayerControlled && collisionData != null)
        {
            // ref 参数：改这里会直接影响实际结算
            collisionData.DamageFactor *= 1.5f;
        }
    }
}
```

### 示例 2：清理型 Behavior

任务结束时恢复镜头、清理生成物——这类收尾必须在 `OnEndMission` 而不是 `OnMissionTick` 里做。

```csharp
using TaleWorlds.MountAndBlade;

public class CleanupBehavior : MissionBehavior
{
    public override MissionBehaviorType BehaviorType => MissionBehaviorType.Logic;

    protected override void OnEndMission()
    {
        base.OnEndMission();

        Mission mission = Mission;
        if (mission == null) return;

        // 恢复镜头，否则下一个任务继承旧视角
        mission.ResetFirstThirdPersonView();

        // 清理生成物，否则残留在复用的场景里
        mission.RemoveSpawnedItemsAndMissiles();
    }

    public override void OnEntityRemoved(GameEntity entity)
    {
        base.OnEntityRemoved(entity);
        // 解除对这个实体的订阅，避免它被销毁后仍被引用
    }
}
```

### 示例 3：每帧逻辑与死亡回调的边界

```csharp
using TaleWorlds.MountAndBlade;

public class TickerBehavior : MissionBehavior
{
    private float _elapsed;

    public override MissionBehaviorType BehaviorType => MissionBehaviorType.Logic;

    public override void OnMissionTick(float dt)
    {
        // Mission 由引擎在注册时注入；构造时它是 null
        if (Mission == null) return;
        if (!Mission.IsDeploymentFinished) return;

        _elapsed += dt;
    }

    public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)
    {
        // 注意：此刻不要遍历 Mission.Agents，集合正在变更
        // 只记录，逻辑放到下一个 OnMissionTick 处理
    }

    public override void OnAgentDeleted(Agent affectedAgent)
    {
        base.OnAgentDeleted(affectedAgent);
        // 到这里 affectedAgent 的引用彻底失效，不能再访问它的属性
    }
}
```

## 风险与边界

- **不参与存档**。`MissionBehavior` 没有 `SyncData`。任何需要跨任务 / 跨存档保存的状态必须写在战役层（`CampaignBehaviorBase`）。
- **任务结束时全部失效**。`Mission`、`Agent`、`GameEntity` 全部是易失引用。存进静态字段或长生命周期 Behavior 会在下一场战斗里指向已死对象。
- **`OnAgentRemoved` / `OnAgentDeleted` 期间不要遍历 Agent 集合**。击杀正在修改集合，`foreach` 会抛 `InvalidOperationException`。
- **`Mission` 属性在构造时为 null**。它由引擎在注册后注入，在 `OnBehaviorInitialize` 之前访问会 NRE。
- **`OnMissionTick` 的性能**。每帧调用，O(n) 扫描直接掉帧。累积时间间隔再处理。
- **`GetCompassTargets()` 每帧调用**。每次返回一个新 `List<CompassItemUpdateParams>`，不缓存会有 GC 压力。
- **`OnRegisterBlow` 改伤害要克制**。`collisionData` 是 `ref`，在这里改数值会同时影响联机同步的一致性；单机下乱改会破坏平衡并让 AI 评分失真。
- **覆写不调 `base`**。部分回调的默认实现包含引擎内部状态维护。
- **`protected internal` 成员**：从外部程序集无法调用，只能覆写。签名写错会导致「覆写没生效」的静默失败。
- **单线程 + 原生互操作**。回调都在主线程的战斗循环里执行；参数里的 `AttackCollisionData`、`MissionWeapon`、`WeakGameEntity` 涉及原生数据，不要跨帧缓存它们。

## 依赖关系

- 上游 / 提供者：
  - [Mission(../Mission) 通过 `AddMissionBehavior` 注册并持有本类实例。
  - [MBSubModuleBase](../../core/MBSubModuleBase) 的 `OnBeforeMissionBehaviorInitialize` / `OnMissionBehaviorInitialize` 是注册时机。
- 相互 / 下游：
  - [MissionState(../MissionState) 打开任务，随后驱动所有行为的回调。
  - [Agent(../Agent) 是绝大多数回调的参数对象。
  - 战役层的对应物是 [CampaignBehaviorBase](../../campaign/CampaignBehaviorBase)；需要跨任务持久化的状态写在那里。

## 参见

- ↑ 父级：[mission 索引](../)
- ↔ 相关：[Mission](../Mission) · [MissionState](../MissionState) · [Agent](../Agent) · [CampaignBehaviorBase](../../campaign/CampaignBehaviorBase) · [MBSubModuleBase](../../core/MBSubModuleBase)