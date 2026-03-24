# Agent 类

**命名空间**: TaleWorlds.MountAndBlade  
**文件**: `TaleWorlds.MountAndBlade/Agent.cs` (约 232,000 行)  
**用途**: 代表战场上的单位(士兵、玩家、怪物等),包含单位的状态、装备、动画和行为控制。

## 概述

`Agent` 是骑砍中代表战场上单位的核心类。每个 Agent 可以是:
- 玩家控制的角色
- AI 控制的士兵
- 怪物或动物
- 骑乘的马匹

Agent 包含丰富的数据:
- 位置和移动数据
- 装备和武器
- 生命值和状态
- 动画和动作
- 队伍和阵型信息

## 关键属性

### 身份和状态

| 属性 | 类型 | 说明 |
|------|------|------|
| `Index` | `int` | Agent 的唯一索引 |
| `State` | `AgentState` | 当前状态(活跃/死亡/俘虏等) |
| `Controller` | `AgentControllerType` | 控制类型(玩家/AI/脚本) |
| `Mission` | `Mission` | 所属的任务 |

### 位置和移动

| 属性 | 类型 | 说明 |
|------|------|------|
| `Position` | `Vec3` | 世界坐标位置 |
| `MovementMode` | `AgentMovementMode` | 当前移动模式 |
| `MovementVelocity` | `Vec2` | 移动速度向量 |
| `MovementDirectionAsAngle` | `float` | 移动方向角度 |
| `MovementFlags` | `MovementControlFlag` | 移动标志(前进/后退/左移/右移) |
| `MovementInputVector` | `Vec2` | 移动输入向量 |

### 队伍和阵型

| 属性 | 类型 | 说明 |
|------|------|------|
| `Team` | `Team` | 所属队伍 |
| `FormationPositionPreference` | `FormationPositionPreference` | 阵型位置偏好 |
| `IsFormationFrameEnabled` | `bool` | 是否启用阵型框架 |

### 战斗属性

| 属性 | 类型 | 说明 |
|------|------|------|
| `CurrentMortalityState` | `Agent.MortalityState` | 生死状态 |
| `CurrentWatchState` | `Agent.WatchState` | 警戒状态 |
| `CurrentGuardMode` | `Agent.GuardMode` | 防御姿态 |
| `ImmediateEnemy` | `Agent` | 最近的敌方 Agent |
| `RiderAgent` | `Agent` | 骑乘者(如果该 Agent 是坐骑) |
| `MountAgent` | `Agent` | 坐骑(如果该 Agent 骑乘) |

### 装备和武器

| 属性 | 类型 | 说明 |
|------|------|------|
| `Equipment` | `Equipment` | 装备栏 |
| `AgentDrivenProperties` | `AgentDrivenProperties` | Agent 驱动的属性 |

## 重要方法

### 移动控制

| 方法 | 说明 |
|------|------|
| `SetTargetPosition(Vec2)` | 设置目标位置 |
| `SetTargetPositionAndDirection(Vec2, Vec3)` | 设置目标位置和方向 |
| `SetMovementDirection(Vec2)` | 设置移动方向 |
| `GetMovementDirection()` | 获取当前移动方向 |
| `SetScriptedPosition(WorldPosition, bool, AIScriptedFrameFlags)` | 设置脚本位置(AI用) |
| `SetScriptedTargetEntity(WeakGameEntity, ...)` | 设置脚本目标实体 |
| `DisableScriptedMovement()` | 禁用脚本移动 |
| `AttackDirectionToMovementFlag(UsageDirection)` | 攻击方向转移动标志 |
| `DefendDirectionToMovementFlag(UsageDirection)` | 防御方向转移动标志 |

### 战斗控制

| 方法 | 说明 |
|------|------|
| `SetTargetAgent(Agent)` | 设置目标 Agent |
| `GetTargetAgent()` | 获取目标 Agent |
| `SetLookAgent(Agent)` | 设置注视 Agent |
| `GetLookAgent()` | 获取注视 Agent |
| `SetAutomaticTargetSelection(bool)` | 设置自动选择目标 |
| `SetWeaponGuard(UsageDirection)` | 设置武器防御方向 |
| `PlayerAttackDirection()` | 获取玩家攻击方向 |

### 队伍和阵型

| 方法 | 说明 |
|------|------|
| `SetTeam(Team, bool)` | 设置所属队伍 |
| `SetFormationIntegrityData(...)` | 设置阵型完整性数据 |
| `GetFormationFileAndRankInfo(...)` | 获取阵型中的文件/排名信息 |
| `SetTargetFormationIndex(int)` | 设置目标阵型索引 |

### Agent 生命周期

| 方法 | 说明 |
|------|------|
| `AddController(Type)` | 添加控制器 |
| `RemoveController(Type)` | 移除控制器 |
| `GetController()` | 获取指定类型的控制器 |
| `SetAILastSuspiciousPosition(...)` | 设置 AI 最后可疑位置 |

### 动画和动作

| 方法 | 说明 |
|------|------|
| `SetCurrentActionProgress(int, float)` | 设置当前动作进度 |
| `SetCurrentActionSpeed(int, float)` | 设置当前动作速度 |
| `GetCurrentActionType(int)` | 获取当前动作类型 |
| `GetCurrentActionStage(int)` | 获取当前动作阶段 |
| `SetWantedAttackDirection(UsageDirection)` | 设置想要攻击方向 |

### 物品和装备

| 方法 | 说明 |
|------|------|
| `SetWieldedItemIndexAsClient(...)` | 设置主手武器 |
| `UpdateWeapons()` | 更新武器状态 |
| `InitializeSpawnEquipment(Equipment)` | 初始化出生装备 |

## AgentController 相关

### AgentControllerType 枚举

| 值 | 说明 |
|------|------|
| `Player` | 玩家控制 |
| `AI` | AI 控制 |
| `Create` | 用于创建新 Agent |
| `Uncontrolled` | 不可控制 |

### 添加自定义 Controller

```csharp
// 添加自定义控制器
AgentController myController = agent.AddController(typeof(MyAgentController));

// 获取控制器
var controller = agent.GetController<MyAgentController>();

// 移除控制器
agent.RemoveController(typeof(MyAgentController));
```

## AgentState 枚举

| 值 | 说明 |
|------|------|
| `Active` | 活跃 |
| `Dead` | 死亡 |
| `Unconscious` | 失去意识 |
| `Fled` | 逃跑 |
| `Captured` | 被俘虏 |
| `Routed` | 溃败 |

## MovementControlFlag 枚举

| 值 | 说明 |
|------|------|
| `Forward` | 前进 |
| `Backward` | 后退 |
| `Left` | 左移 |
| `Right` | 右移 |
| ` DodgeForward` | 闪避前进 |
| `DodgeBackward` | 闪避后退 |
| `Jump` | 跳跃 |

## UsageDirection 枚举

| 值 | 说明 |
|------|------|
| `None` | 无 |
| `Up` | 向上 |
| `Down` | 向下 |
| `Left` | 向左 |
| `Right` | 向右 |

## 常见用法

### 1. 遍历队伍中的所有 Agent

```csharp
// 获取攻击方所有 Agent
Team attackerTeam = Mission.Current.GetTeam(TeamSideEnum.Attacker);
foreach (Agent agent in attackerTeam.TeamAgents)
{
    // 处理每个 Agent
}
```

### 2. 移动 Agent 到指定位置

```csharp
// 设置 Agent 移动到目标位置
agent.SetTargetPosition(targetPosition);

// 设置 Agent 移动到目标位置并面向指定方向
Vec2 targetPos = new Vec2(100, 50);
Vec3 targetDir = new Vec3(1, 0, 0);
agent.SetTargetPositionAndDirection(targetPos, targetDir);

// 直接设置移动方向
agent.SetMovementDirection(new Vec2(1, 0));
```

### 3. 让 Agent 攻击目标

```csharp
// 设置目标 Agent
agent.SetTargetAgent(targetAgent);

// 设置注视目标(用于 AI 瞄准)
agent.SetLookAgent(targetAgent);

// 启用自动目标选择
agent.SetAutomaticTargetSelection(true);

// 设置攻击方向
agent.SetWantedAttackDirection(Agent.UsageDirection.Right);
```

### 4. 控制 Agent 队伍

```csharp
// 改变 Agent 队伍
agent.SetTeam(newTeam, sync: true);
```

### 5. 获取 Agent 信息

```csharp
// 获取 Agent 状态
AgentState state = agent.State;

// 获取 Agent 位置
Vec3 position = agent.Position;

// 获取 Agent 队伍
Team team = agent.Team;

// 检查 Agent 是否死亡
bool isDead = agent.State == AgentState.Dead;

// 获取 Agent 装备的武器
EquipmentIndex wieldedIndex = agent.GetWieldedItemIndex(Agent.HandIndex.MainHand);
```

### 6. 使用 AgentComponent 扩展功能

```csharp
// AgentComponent 用于给 Agent 添加自定义行为
public class MyAgentComponent : AgentComponent
{
    public MyAgentComponent(Agent agent) : base(agent) { }
    
    public override void OnTick(float dt)
    {
        // 每帧执行的逻辑
    }
    
    public override void OnHit(Agent affectorAgent, int damage, 
        in MissionWeapon affectorWeapon, in Blow b, in AttackCollisionData collisionData)
    {
        // 处理受伤事件
    }
}

// 创建 Agent 时自动添加
public class MyMissionBehavior : MissionLogic
{
    public override void OnAgentCreated(Agent agent)
    {
        agent.AddComponent(new MyAgentComponent(agent));
    }
}
```

### 7. 检查 Agent 是否能执行动作

```csharp
// 检查 Agent 是否可以移动
bool canMove = agent.CanBeAssignedForScriptedMovement();

// 获取 Agent 的移动行为类型
Agent.MovementBehaviorType movementType = Mission.Current.GetMovementTypeOfAgents(new[] { agent });
```

## 注意事项

1. **Agent 索引不是永久的** - 索引可能在任务中改变,不要长期存储
2. **使用 Mission 查询** - 通过 `Mission.Current.GetNearbyAgents()` 等方法查询
3. **组件模式** - 使用 `AgentComponent` 扩展 Agent 功能,不要直接继承 Agent
4. **动画同步** - 多人模式下修改动画需要网络同步
5. **移动方向** - `SetMovementDirection` 使用 Vec2,不是角度
