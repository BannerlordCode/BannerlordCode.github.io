---
title: "MissionBehavior"
description: "任务内扩展的抽象基类：60+ 个 OnXxx 钩子覆盖 Agent 生死、命中判定、部署阶段与每帧 tick，Mission 属性指回所属任务。"
---
# MissionBehavior

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public abstract class MissionBehavior : IMissionBehavior`
**Source:** `TaleWorlds.MountAndBlade/MissionBehavior.cs`

## 概述

`MissionBehavior` 是任务（战斗、攻城、对话遭遇）阶段的 mod 扩展基类，对应战役层的 `CampaignBehaviorBase`。它与 [CampaignBehaviorBase](../../campaign/CampaignBehaviorBase) 的关键区别有两条：一是它**不负责存读档**——任务状态不跨存档保存；二是它通过 `Mission` 属性持有唯一的作用域对象，钩子参数里到处是这个 `Mission` 或具体的 `Agent` / `Team`。

它是纯回调容器：所有 `public virtual void OnXxx(...)` 在基类里都是空实现，`IMissionBehavior` 接口只要求 `Mission` 属性、`BehaviorType` 与 `BehaviorPriority`（后者是 1.4.6 新增的抽象成员，见下文）。派生类只重写关心的钩子即可。

它**不能**自己注册到任务上。必须通过 `Mission.AddMissionBehavior(...)` 挂上去，任务结束时框架会调 `OnRemoveBehavior()`。反过来，用 `Mission.GetMissionBehavior<T>()` 取回已挂载的实例。

## 心智模型

一个 Behavior 在任务里的时序大致是：`Mission` 构造（`AddBehavior`）→ `MissionBehavior.OnCreated()` → `MissionBehavior.OnBehaviorInitialize()` → `OnAfterMissionCreated()` → `OnMissionScreenPreLoad()`（进战场画面之前）→ 部署阶段 `OnDeploymentFinished` / `OnAfterDeploymentFinished` / `OnTeamDeployed` / `OnBattleSideDeployed` → 战斗阶段循环 `OnPreMissionTick` → `OnMissionTick` → `OnPostDisplayMissionTick` → 每帧固定步长时 `OnFixedMissionTick` → `OnEndMissionInternal()` → `OnEndMission()`（protected）→ `OnRemoveBehavior()`。

Agent 的生命周期钩子另成一条线：`OnAgentCreated` → `OnAgentBuild`（挂上 Banner 特效）→ `OnAgentTeamChanged` → `OnAgentControllerSetToPlayer` → 战斗中的 `OnAgentHit` / `OnScoreHit` / `OnMissileHit` / `OnMeleeHit` → 阵亡时的 `OnEarlyAgentRemoved` → `OnAgentRemoved` → 实体真正销毁后的 `OnAgentDeleted`。

三个常见误用。一是**在 `OnMissionTick` 里做重活**：`OnMissionTick` 每帧调，长逻辑会拖慢整个战斗帧；该做的事拆到 `OnFixedMissionTick` 或事件钩子里。二是**在 `OnEndMissionInternal` 与 `OnEndMission` 之间改任务状态**：前者是 public virtual、后者是 protected virtual，官方把公共面留给「需要在结束前拦一下」的 mod，语义不同。三是**缓存 `Agent` 引用**：Agent 在 `OnAgentDeleted` 之后对象已被销毁，缓存的引用会变成悬空对象，调用它的属性是 native 边界上的未定义行为。

`OnGetAgentState` 与 `OnObjectDisabled` 与 `OnAgentControllerChanged` 这三个在 1.4.6 里是 `protected internal virtual`——外部程序集**不能**重写它们，只能在自己的派生类内部重写后由父类调用链间接触发。

## 关键成员

### 属性与抽象成员

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `Mission` | `public Mission Mission { get; internal set; }` | 所属任务实例。由框架在添加 Behavior 时注入；`internal set` 意味着 mod 只能读。未挂到任务上时为 null |
| `BehaviorType` | `public abstract MissionBehaviorType BehaviorType { get; }` | 抽象属性，声明这个 Behavior 是 `MissionBehaviorType.Logic`（默认逻辑钩子）还是 `MissionBehaviorType.Other`。用来区分类别，避免官方按类型做特殊处理时误伤 |
| `DebugInput` | `public IInputContext DebugInput` | 按键记录上下文，用于在开发构建里打印玩家实际按了什么 |

### 生命周期与阶段

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `OnCreated` | `public virtual void OnCreated()` | Behavior 实例加入任务后立即调。此时 `Mission` 已注入，但场景尚未加载 |
| `OnBehaviorInitialize` | `public virtual void OnBehaviorInitialize()` | 任务初始化阶段，所有 Behavior 都已挂上后调。适合建立跨 Behavior 的查找索引 |
| `OnAfterMissionCreated` | `public virtual void OnAfterMissionCreated()` | 任务对象完全建成（队伍、Agent 都已生成）后调一次 |
| `OnMissionScreenPreLoad` | `public virtual void OnMissionScreenPreLoad()` | 战场画面加载之前。此时还没进 3D 场景 |
| `EarlyStart` | `public virtual void EarlyStart()` | 部署阶段刚开始。官方用它做相机与 UI 初始化 |
| `AfterStart` | `public virtual void AfterStart()` | 部署完成后、战斗循环开始前 |
| `OnDeploymentFinished` | `public virtual void OnDeploymentFinished()` | 部署结束 |
| `OnAfterDeploymentFinished` | `public virtual void OnAfterDeploymentFinished()` | 部署结束后的第二个钩子，比上一个更晚 |
| `OnTeamDeployed` | `public virtual void OnTeamDeployed(Team team)` | 某一队完成部署 |
| `OnBattleSideDeployed` | `public virtual void OnBattleSideDeployed(BattleSideEnum side)` | 某一战斗方完成部署 |
| `OnAssignPlayerAsSergeantOfFormation` | `public virtual void OnAssignPlayerAsSergeantOfFormation(Agent agent)` | 玩家被指派为某阵型的中士时调，用于给该 Agent 开放额外指令 |
| `OnEndMissionInternal` | `public virtual void OnEndMissionInternal()` | 任务结束的公开入口钩子，在 `OnEndMission` 之前 |
| `OnEndMission` | `protected virtual void OnEndMission()` | 任务结束时的清理钩子。只能在派生类内部重写 |
| `OnRemoveBehavior` | `public virtual void OnRemoveBehavior()` | Behavior 被移除时调。**所有**取消订阅都应该放这里 |
| `OnClearScene` | `public virtual void OnClearScene()` | 场景清理阶段。3D 实体开始销毁 |
| `OnRenderingStarted` | `public virtual void OnRenderingStarted()` | 第一次真正开始渲染后调；此时可以安全访问渲染相关状态 |

### 每帧与状态机

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `OnPreMissionTick` | `public virtual void OnPreMissionTick(float dt)` | 每帧最先调。适合做「本帧输入意图」的收集 |
| `OnMissionTick` | `public virtual void OnMissionTick(float dt)` | 主逻辑 tick，每帧一次。绝大多数 mod 逻辑放这里 |
| `OnPreDisplayMissionTick` | `public virtual void OnPreDisplayMissionTick(float dt)` | 显示相关更新之前 |
| `OnFixedMissionTick` | `public virtual void OnFixedMissionTick(float fixedDt)` | 固定步长 tick。物理与伤害结算走这条路，步长与帧率无关 |
| `OnMissionModeChange` | `public virtual void OnMissionModeChange(MissionMode oldMissionMode, bool atStart)` | 任务模式切换（如从战斗切到观战）。`atStart` 为 true 表示进入该模式 |
| `OnMissionStateActivated` | `public virtual void OnMissionStateActivated()` | 某个 `MissionState` 进入活动态 |
| `OnMissionStateDeactivated` | `public virtual void OnMissionStateDeactivated()` | 某个 `MissionState` 退出活动态 |
| `OnMissionStateFinalized` | `public virtual void OnMissionStateFinalized()` | 某个 `MissionState` 彻底结束，此时它的成员对象已不可用 |
| `OnTutorialCompleted` | `public virtual void OnTutorialCompleted(string completedTutorialIdentifier)` | 任务内教学点被完成 |
| `GetCompassTargets` | `public virtual List<CompassItemUpdateParams> GetCompassTargets()` | 返回罗盘上要显示的目标标记。返回 null 表示不贡献标记 |
| `ProcessEvents` 相关 | 本类不含 | 排队事件的处理由各 Behavior 自行在 tick 里做 |

### Agent 生命周期

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `OnAgentCreated` | `public virtual void OnAgentCreated(Agent agent)` | Agent 对象构造完成。此时还没有位置与外观数据 |
| `OnAgentBuild` | `public virtual void OnAgentBuild(Agent agent, Banner banner)` | Agent 正在被「装配」（骨骼、武器、特效）。改外观要在这里做 |
| `OnAgentTeamChanged` | `public virtual void OnAgentTeamChanged(Team prevTeam, Team newTeam, Agent agent)` | Agent 换队。`prevTeam` 可能为 null |
| `OnAgentControllerSetToPlayer` | `public virtual void OnAgentControllerSetToPlayer(Agent agent)` | 玩家控制权被交给这个 Agent。移动端与 AI 战斗里会频繁触发 |
| `OnAgentMount` | `public virtual void OnAgentMount(Agent agent)` | Agent 上马完成 |
| `OnAgentDismount` | `public virtual void OnAgentDismount(Agent agent)` | Agent 下马完成 |
| `OnAgentDeleted` | `public virtual void OnAgentDeleted(Agent affectedAgent)` | Agent 实体已被销毁。**到这里不能再碰这个引用** |
| `OnEntityRemoved` | `public virtual void OnEntityRemoved(GameEntity entity)` | 任意 `GameEntity` 被移除 |
| `OnAgentAlarmedStateChanged` | `public virtual void OnAgentAlarmedStateChanged(Agent agent, Agent.AIStateFlag flag)` | AI 警戒状态变化，参数是变化的标志位 |
| `OnAgentControllerChanged` | `protected internal virtual void OnAgentControllerChanged(Agent agent, AgentControllerType oldController)` | 控制者变化。**外部程序集无法重写** |

### 伤害与命中

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `OnAgentHit` | `public virtual void OnAgentHit(Agent affectedAgent, Agent affectorAgent, in MissionWeapon affectorWeapon, in Blow blow, in AttackCollisionData attackCollisionData)` | 一次命中结算完成后。三个 `in` 参数都是只读引用，不会被回调修改 |
| `OnScoreHit` | `public virtual void OnScoreHit(Agent affectedAgent, Agent affectorAgent, WeaponComponentData attackerWeapon, bool isBlocked, bool isSiegeEngineHit, in Blow blow, in AttackCollisionData collisionData, float damagedHp, float hitDistance, float shotDifficulty)` | 命中记分（含被格挡、攻城器械命中）。`isBlocked` 为 true 时 `damagedHp` 可能是 0 |
| `OnRegisterBlow` | `public virtual void OnRegisterBlow(Agent attacker, Agent victim, WeakGameEntity realHitEntity, Blow b, ref AttackCollisionData collisionData, in MissionWeapon attackerWeapon)` | 登记打击结果。`collisionData` 是 `ref`，在这里改会影响后续结算 |
| `OnMissileHit` | `public virtual void OnMissileHit(Agent attacker, Agent victim, bool isCanceled, AttackCollisionData collisionData)` | 投射物命中。`isCanceled` 为 true 表示命中被判定无效 |
| `OnMeleeHit` | `public virtual void OnMeleeHit(Agent attacker, Agent victim, bool isCanceled, AttackCollisionData collisionData)` | 近战命中。`isCanceled` 为 true 表示这一击被判无效 |
| `OnMissileCollisionReaction` | `public virtual void OnMissileCollisionReaction(Mission.MissileCollisionReaction collisionReaction, Agent attackerAgent, Agent attachedAgent, sbyte attachedBoneIndex)` | 投射物碰撞后的附着反应。`attachedBoneIndex` 是骨骼索引 |
| `OnAgentShootMissile` | `public virtual void OnAgentShootMissile(Agent shooterAgent, EquipmentIndex weaponIndex, Vec3 position, Vec3 velocity, Mat3 orientation, bool hasRigidBody, int forcedMissileIndex)` | 发射瞬间。改速度/朝向要在这里做 |
| `OnMissileRemoved` | `public virtual void OnMissileRemoved(int MissileIndex)` | 投射物被移除。索引是任务内的槽位号，不是全局唯一 |
| `OnEarlyAgentRemoved` | `public virtual void OnEarlyAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)` | Agent 被判定的第一阶段。尸体还可用 |
| `OnAgentRemoved` | `public virtual void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)` | Agent 被移除的第二阶段，通常已经不可交互 |
| `OnAgentFleeing` | `public virtual void OnAgentFleeing(Agent affectedAgent)` | Agent 逃跑 |
| `OnAgentPanicked` | `public virtual void OnAgentPanicked(Agent affectedAgent)` | Agent 陷入恐慌 |

### 交互与队伍

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `OnAgentInteraction` | `public virtual void OnAgentInteraction(Agent userAgent, Agent agent, sbyte agentBoneIndex)` | 两个 Agent 发生骨骼级交互（击拳、搀扶一类） |
| `OnObjectUsed` | `public virtual void OnObjectUsed(Agent userAgent, UsableMissionObject usedObject)` | 可用场景对象被开始使用（开关攻城门、操作绞盘） |
| `OnObjectStoppedBeingUsed` | `public virtual void OnObjectStoppedBeingUsed(Agent userAgent, UsableMissionObject usedObject)` | 停止使用 |
| `OnObjectDisabled` | `protected internal virtual void OnObjectDisabled(DestructableComponent destructionComponent)` | 可破坏组件被摧毁。**外部程序集无法重写** |
| `IsThereAgentAction` | `public virtual bool IsThereAgentAction(Agent userAgent, Agent otherAgent)` | 询问是否存在某个交互动作。返回 true 会抑制默认的互殴判定 |
| `OnFocusGained` | `public virtual void OnFocusGained(Agent agent, IFocusable focusableObject, bool isInteractable)` | 场景焦点获得。`isInteractable` 表示当前能否交互 |
| `OnFocusLost` | `public virtual void OnFocusLost(Agent agent, IFocusable focusableObject)` | 场景焦点丢失 |
| `OnAddTeam` | `public virtual void OnAddTeam(Team team)` | 队伍刚被加入，成员尚未填齐 |
| `AfterAddTeam` | `public virtual void AfterAddTeam(Team team)` | 队伍成员已填齐。是遍历 `Team.Troops` 的正确时机 |

## 真实示例

```csharp
public class ArrowCounter : MissionBehavior
{
    private int _playerArrowShots;
    private int _playerArrowHits;

    public override MissionBehaviorType BehaviorType => MissionBehaviorType.Logic;

    public override void OnBehaviorInitialize()
    {
        // 注册时 Mission 已经注入，可以安全查队伍
    }

    public override void AfterAddTeam(Team team)
    {
        if (team.Side == BattleSideEnum.Defender)
        {
            MBList<Formation> formations = team.FormationsIncludingEmpty;
            for (int i = 0; i < formations.Count; i++)
            {
                Formation formation = formations[i];
                if (formation.CountOfUnits > 0)
                {
                    Debug.Print("[ArrowCounter] formation " + i + " has " + formation.CountOfUnits);
                }
            }
        }
    }

    public override void OnAgentShootMissile(Agent shooterAgent, EquipmentIndex weaponIndex,
        Vec3 position, Vec3 velocity, Mat3 orientation, bool hasRigidBody, int forcedMissileIndex)
    {
        if (!shooterAgent.IsAIControlled && weaponIndex == EquipmentIndex.Weapon0)
        {
            _playerArrowShots++;
        }
    }

    public override void OnAgentHit(Agent affectedAgent, Agent affectorAgent,
        in MissionWeapon affectorWeapon, in Blow blow, in AttackCollisionData attackCollisionData)
    {
        if (affectorAgent != null && !affectorAgent.IsAIControlled)
        {
            _playerArrowHits++;
            if (_playerArrowShots > 0)
            {
                int accuracy = _playerArrowHits * 100 / _playerArrowShots;
                Debug.Print("[ArrowCounter] accuracy " + accuracy + "%");
            }
        }
    }

    public override void OnAgentDeleted(Agent affectedAgent)
    {
        // 实体已销毁，这里只能做标记，不能再读 affectedAgent 的属性
        if (!affectedAgent.IsAIControlled)
        {
            Debug.Print("[ArrowCounter] player agent deleted");
        }
    }

    public override void OnEndMissionInternal()
    {
        Debug.Print("[ArrowCounter] shots=" + _playerArrowShots + " hits=" + _playerArrowHits);
    }

    public override void OnRemoveBehavior()
    {
        // 所有退订放这里
    }
}
```

挂载：

```csharp
Mission.Current.AddMissionBehavior(new ArrowCounter());
ArrowCounter counter = Mission.Current.GetMissionBehavior<ArrowCounter>();
```

`Mission.AddMissionBehavior` 会把 `Mission` 注入 Behavior、调 `OnCreated()`，并根据 `BehaviorType` 把 `Logic` 类别的额外塞进 `Mission.MissionLogics`、把 `Other` 类别的塞进内部 `_otherMissionBehaviors`。

## 风险与边界

- **`Mission` 在挂载前为 null**：只有经过 `Mission.AddBehavior` 之后属性才被注入。构造函数里访问 `Mission` 必然空引用。
- **Agent 引用会失效**：`OnAgentDeleted` 之后引用指向已销毁实体，之后读它的属性会跨进 native 边界。所有 Agent 引用都要在 `OnAgentDeleted` 里置空。
- **`MissionBehaviorType` 是抽象属性**：不重写就无法编译。写成 `MissionBehaviorType.Logic` 表示走默认逻辑分类。
- **`protected internal` 成员无法跨程序集重写**：`OnGetAgentState`、`OnObjectDisabled`、`OnAgentControllerChanged` 三个在外部 mod 里只能用 `override` 在自己的类里声明（那仍然合法，因为 override 只要求基类成员可见——但 C# 不允许 `protected internal` 在外部程序集被 override）。实际做法是不要指望它们。
- **tick 频率**：`OnMissionTick` 每帧一次，`OnFixedMissionTick` 按固定步长。在 `OnMissionTick` 里做物理相关计算会因帧率而抖动。
- **`OnMissileRemoved` 的索引会复用**：投射物槽位被回收后索引会被后来的投射物使用，不能拿它当长期标识。
- **回调在渲染主线程**：所有钩子都在主线程，不要在里面阻塞或改 UI 状态后立刻读回。
- **不跨存档**：任务状态在任务结束时就没了，任何需要长期保存的统计必须自己写进 `CampaignBehaviorBase` 的 `IDataStore`。
- **多个 Behavior 的执行顺序不保证**：框架不承诺同一钩子上不同 Behavior 的相对顺序，跨 Behavior 协作要走显式的管理器对象而不是「A 改字段、B 读字段」。

## 跨版本提示

1.4.5 的参考源位于 `bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.MountAndBlade/`。1.4.6 相对它新增了 `OnTutorialCompleted(string)`、`OnAgentAlarmedStateChanged(Agent, Agent.AIStateFlag)`、`OnAgentShootMissile(...)` 这几个 1.4.5 没有的钩子，并新增了 `MissionBehaviorType` 枚举把 Behavior 显式分类。`MissionBehavior` 没有默认实现，因此这些新钩子对已有 mod 是纯增量，不需要改派生类。

## 依赖关系

- 任务本体：[Mission](../Mission) — `Mission` 属性的类型，也是 `AddBehavior` 的宿主。
- Agent：[Agent](../Agent) — 几乎所有钩子的参数类型。
- 阵型：[Formation](../Formation) — `Team.Formations` 的元素类型。
- 战役侧持久化：[CampaignBehaviorBase](../../campaign/CampaignBehaviorBase) — 跨任务需要保留的状态应放这里。
- 界面：[ScreenManager](../../gui/ScreenManager) — 战斗中弹出的结算与提示界面从这里推入。
- 父级：mission API 目录导览位于版本根 `../../../`。