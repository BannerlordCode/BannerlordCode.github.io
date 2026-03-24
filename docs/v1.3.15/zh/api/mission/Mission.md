# Mission 类

**命名空间**: TaleWorlds.MountAndBlade  
**文件**: `TaleWorlds.MountAndBlade/Mission.cs` (约 323,000 行)  
**用途**: 战场/游戏循环的核心类,管理所有任务(战斗)中的实体、逻辑和行为。

## 概述

`Mission` 是骑砍 Mod 开发中最核心的类之一。它代表了战场上的一次完整战斗,包含:
- 所有 Agent(单位)的生成和管理
- Team(队伍)的创建和查询
- Formation(阵型)的控制
- 物理模拟和碰撞检测
- 任务逻辑(MissionLogic)和行为(MissionBehavior)的执行

## 关键属性

| 属性 | 类型 | 说明 |
|------|------|------|
| `Current` | `Mission` | 当前活跃的任务实例 |
| `MissionBehaviors` | `List` | 所有任务行为列表 |
| `MissionLogics` | `List` | 所有任务逻辑列表 |
| `Teams` | `TeamCollection` | 所有队伍集合 |
| `CurrentState` | `Mission.State` | 当前任务状态 |
| `MissionResult` | `MissionResult` | 任务结果(战斗胜负) |
| `MissionTimeTracker` | `MissionTimeTracker` | 任务时间追踪器 |

## 重要方法

### Agent 管理

| 方法 | 说明 |
|------|------|
| `SpawnAgent(AgentBuildData)` | 使用 AgentBuildData 生成一个 Agent |
| `SpawnTroop(...)` | 生成士兵单位,可指定位置、方向、阵型等 |
| `SpawnMonster(...)` | 生成怪物 |
| `FindAgentWithIndex(int)` | 通过索引查找 Agent |
| `GetAgentFromIndex(int)` | 静态方法,通过索引获取 Agent |
| `GetClosestEnemyAgent(Team, Vec3, float)` | 获取最近的敌方 Agent |
| `GetClosestAllyAgent(Team, Vec3, float)` | 获取最近的友方 Agent |
| `GetNearbyAllyAgents(Vec2, float, Team)` | 获取范围内的友方 Agent |
| `GetNearbyEnemyAgents(Vec2, float, Team)` | 获取范围内的敌方 Agent |
| `GetNearbyAgents(Vec2, float)` | 获取范围内的所有 Agent |
| `RayCastForClosestAgent(...)` | 射线检测最近的 Agent |
| `KillAgentCheat(Agent)` | 秒杀 Agent(开发者命令) |
| `ReplaceBotWithPlayer(Agent, MissionPeer)` | 将 Bot 替换为玩家控制 |

### Team 管理

| 方法 | 说明 |
|------|------|
| `GetTeam(TeamSideEnum)` | 根据阵营获取队伍 |
| `GetTeamsOfSide(BattleSideEnum)` | 获取某一方的所有队伍 |
| `GetAgentTeam(IAgentOriginBase, bool)` | 静态方法,获取 Agent 对应的队伍 |
| `GetMBTeamFromTeamIndex(int)` | 通过索引获取 MBTeam |

### 任务状态控制

| 方法 | 说明 |
|------|------|
| `EndMission()` | 结束当前任务 |
| `PauseMission()` | 暂停任务 |
| `ResumeMission()` | 恢复任务 |

### 事件触发

| 方法 | 说明 |
|------|------|
| `OnAgentMount(Agent)` | Agent 登上载具时调用 |
| `OnAgentDismount(Agent)` | Agent 下马时调用 |
| `OnAgentFleeing(Agent)` | Agent 开始逃跑时调用 |
| `OnAgentPanicked(Agent)` | Agent 恐慌时调用 |
| `OnAgentInteraction(Agent, Agent, sbyte)` | Agent 交互时调用 |
| `ClearAgentActions()` | 清除所有 Agent 的当前动作 |

## 重要事件/回调 (在 MissionBehavior 中 override)

### 任务生命周期

| 回调 | 说明 |
|------|------|
| `OnAfterMissionCreated()` | 任务创建后调用 |
| `OnBehaviorInitialize()` | 行为初始化时调用 |
| `EarlyStart()` | 早期启动时调用 |
| `AfterStart()` | 启动完成后调用 |
| `OnMissionTick(float dt)` | 每帧调用,用于游戏逻辑 |
| `OnPreMissionTick(float dt)` | 每帧调用,在物理更新前 |
| `OnFixedMissionTick(float dt)` | 固定时间步长调用 |
| `OnEndMission()` | 任务结束时调用 |

### Agent 事件

| 回调 | 说明 |
|------|------|
| `OnAgentCreated(Agent)` | Agent 被创建时 |
| `OnAgentBuild(Agent, Banner)` | Agent 构建完成时 |
| `OnAgentTeamChanged(Team, Team, Agent)` | Agent 队伍改变时 |
| `OnAgentHit(Agent, Agent, ...)` | Agent 受到伤害时 |
| `OnMeleeHit(Agent, Agent, ...)` | 近战命中时 |
| `OnMissileHit(Agent, Agent, ...)` | 导弹命中时 |
| `OnAgentRemoved(Agent, Agent, ...)` | Agent 被移除时 |
| `OnAgentFleeing(Agent)` | Agent 逃跑时 |
| `OnAgentPanicked(Agent)` | Agent 恐慌时 |

### 战斗相关

| 回调 | 说明 |
|------|------|
| `OnScoreHit(Agent, ...)` | 得分命中时(伤害计算后) |
| `OnAgentMount(Agent)` | 上马时 |
| `OnAgentDismount(Agent)` | 下马时 |
| `OnMissileCollisionReaction(...)` |  missile 碰撞反应时 |

## 常见用法

### 1. 在 Mod 中添加自定义 MissionBehavior

```csharp
using TaleWorlds.MountAndBlade;

namespace MyMod
{
    public class MyMissionBehavior : MissionLogic
    {
        public override void OnMissionTick(float dt)
        {
            // 每帧执行的逻辑
        }
        
        public override void OnAgentHit(Agent affectedAgent, Agent affectorAgent, 
            in MissionWeapon affectorWeapon, in Blow blow, in AttackCollisionData attackCollisionData)
        {
            // 处理 Agent 受伤事件
        }
    }
}
```

### 2. 在 Mission 中添加自定义 Behavior

```csharp
// 在 MBSubModule 中
public override void OnMissionStart(string missionName, MissionInitializerRecord missionInitializerRecord)
{
    // 可以通过 Mission 添加自定义行为
}

// 或者在 Mission 开始后通过反射添加
var mission = Mission.Current;
var myBehavior = new MyMissionBehavior();
mission.AddBehavior(myBehavior);
```

### 3. 查找和操作 Agent

```csharp
// 获取玩家 Agent
Agent mainAgent = Mission.Current.MainAgent;

// 查找特定 Agent
Agent agent = Mission.Current.FindAgentWithIndex(agentIndex);

// 遍历所有队伍的所有 Agent
foreach (Team team in Mission.Current.Teams)
{
    foreach (Agent agent in team.TeamAgents)
    {
        // 处理每个 Agent
    }
}

// 获取范围内的敌 Agent
List<Agent> enemies = Mission.Current.GetNearbyEnemyAgents(
    agent.Position.AsVec2, 
    50f, 
    agent.Team
);
```

### 4. 创建自定义 Agent

```csharp
// 使用 AgentBuildData 构建 Agent
AgentBuildData agentBuildData = new AgentBuildData(characterObject);
agentBuildData.InitFrame(initialPosition, initialDirection);
agentBuildData.Team(team);
agentBuildData.Controller(Agent.ControllerType.Create);

Agent spawnedAgent = Mission.Current.SpawnAgent(agentBuildData);
```

### 5. 队伍和阵营

```csharp
// 获取攻击方和防御方
Team attackerTeam = Mission.Current.GetTeam(TeamSideEnum.Attacker);
Team defenderTeam = Mission.Current.GetTeam(TeamSideEnum.Defender);

// 获取队伍中的所有 Agent
foreach (Agent agent in myTeam.TeamAgents)
{
    // 处理
}

// 设置队伍关系
team.SetIsEnemyOf(otherTeam, true); // 设置为敌对
```

## MissionState 类

**文件**: `TaleWorlds.MountAndBlade/MissionState.cs`

`MissionState` 是管理 `Mission` 的 GameState。它负责:
- 任务加载和初始化
- 任务 Tick 循环
- 任务状态切换

### 关键属性

| 属性 | 说明 |
|------|------|
| `Current` | 当前活跃的 MissionState |
| `CurrentMission` | 当前 Mission 实例 |
| `MissionName` | 当前任务名称 |

### 重要方法

| 方法 | 说明 |
|------|------|
| `OpenNew(string, MissionInitializerRecord, InitializeMissionBehaviorsDelegate, bool, bool)` | 创建并打开新任务 |

## MissionLogic 类

**文件**: `TaleWorlds.MountAndBlade/MissionLogic.cs`

`MissionLogic` 继承自 `MissionBehavior`,是任务逻辑的基类。

### 重要虚方法

| 方法 | 说明 |
|------|------|
| `MissionEnded(ref MissionResult)` | 返回 true 可结束战斗 |
| `OnBattleEnded()` | 战斗结束后调用 |
| `OnRetreatMission()` | 撤退时调用 |
| `OnSurrenderMission()` | 投降时调用 |
| `OnMissionResultReady(MissionResult)` | 战斗结果准备好时调用 |

## 重要枚举

### Mission.State

| 值 | 说明 |
|------|------|
| `NewlyCreated` | 新创建 |
| `Initializing` | 初始化中 |
| `Continuing` | 进行中 |
| `MissionEnded` | 任务已结束 |
| `Over` | 完全结束 |

### BattleSideEnum

| 值 | 说明 |
|------|------|
| `Defender` | 防守方 |
| `Attacker` | 攻击方 |

### TeamSideEnum

| 值 | 说明 |
|------|------|
| `Defender` | 防守方 |
| `Attacker` | 攻击方 |
| `None` | 无 |

## 注意事项

1. **不要直接修改 Mission.cs** - 这个文件太大,修改很容易出错
2. **使用 MissionBehavior/MissionLogic** - 通过添加自定义行为来扩展任务功能
3. **每帧操作要高效** - `OnMissionTick` 每帧都调用,避免复杂计算
4. **使用缓存** - 频繁查询使用 `TeamAgents`、`MissionLogics` 等缓存集合
5. **Agent 索引不稳定** - Agent 索引可能在任务中改变,不要长期存储
