---
title: 任务系统 / Mission System
description: Mission、MissionBehavior、Agent、Formation、Team 详解 / Complete guide to Mission, MissionBehavior, Agent, Formation, Team
---

# 任务系统 / Mission System

**Namespace**: TaleWorlds.MountAndBlade
**Key Classes**: `Mission`, `MissionBehavior`, `Agent`, `Formation`, `Team`, `AgentComponent`

## 概述 / Overview

Bannerlord 的战斗系统基于 **Mission**（任务/战斗）。每个战斗场景都是一个 Mission，包含 Agent（单位）、Formation（阵型）、Team（队伍）等核心概念。

Bannerlord's combat system is built on **Mission** (battle). Every battle scene is a Mission containing core concepts like Agent (units), Formation (formations), and Team (sides).

## 核心概念 / Core Concepts

| 概念 | 类 | 描述 |
|------|-----|------|
| 任务 | `Mission` | 单场战斗/任务的容器 |
| 行为 | `MissionBehavior` | 任务逻辑的模块化组件 |
| 单位 | `Agent` | 战场上的单个单位（士兵、英雄） |
| 阵型 | `Formation` | 一组 Agent 的编队 |
| 队伍 | `Team` | 战斗中的一方 |

## 目录 / Contents

1. [MissionBehavior 模式](#missionbehavior-模式)
2. [Agent 系统](#agent-系统)
3. [Formation 和 Team](#formation-和-team)
4. [任务示例](#任务示例)
5. [相关 API](#相关-api)

---

## MissionBehavior 模式

### 创建自定义行为

```csharp
using TaleWorlds.MountAndBlade;

namespace MyModule.Missions
{
    // ⭐ 关键：继承 MissionBehavior
    public class MyMissionBehavior : MissionBehavior
    {
        // 任务开始
        public override void OnMissionStart()
        {
            base.OnMissionStart();
            
            // 初始化逻辑
            Debug.Print("MyMissionBehavior started!");
        }
        
        // 任务初始化后
        public override void OnMissionInitialize()
        {
            base.OnMissionInitialize();
        }
        
        // 每帧调用（早）
        public override void OnPreMissionTick(float dt)
        {
            base.OnPreMissionTick(dt);
            // 放置每帧更新的逻辑
        }
        
        // 每帧调用（晚）
        public override void OnMissionTick(float dt)
        {
            base.OnMissionTick(dt);
        }
        
        // 任务结束
        public override void OnMissionFinish(bool isHeroParty)
        {
            base.OnMissionFinish(isHeroParty);
        }
    }
}
```

### 注册行为

在 SubModule 中注册：

```csharp
protected override void OnGameStart(Game game, IGameStarter gameStarter)
{
    base.OnGameStart(game, gameStarter);
    
    // 添加任务行为
    gameStarter.AddBehavior(new MyMissionBehavior());
}
```

或在 Mission 中添加：

```csharp
public override void OnMissionStart()
{
    base.OnMissionStart();
    
    // 获取当前 Mission 并添加行为
    Mission.Current.AddMissionBehavior(new MyMissionBehavior());
}
```

### MissionBehavior 生命周期

```
Mission 创建
    │
    ├─► OnMissionStart()         ← 任务开始时
    │
    ├─► OnMissionInitialize()   ← 任务初始化
    │
    ├─► OnPreMissionTick(dt)     ← 每帧早（早于所有Tick）
    │
    ├─► OnMissionTick(dt)        ← 每帧晚（晚于所有Tick）
    │
    └─► OnMissionFinish()       ← 任务结束时
```

### 常见 MissionBehavior 类型

| 类型 | 用途 |
|------|------|
| `AgentStatusBehavior` | 管理 Agent 生命值、死亡 |
| `AgentWeaponEquippingBehavior` | 武器切换逻辑 |
| `FormationEnrollmentBehavior` | 阵型管理 |
| `TeamAIBehavior` | AI 队伍行为 |
| `CombatTypeCalculator` | 伤害计算 |
| `MountCapabilityModel` | 骑乘能力 |

---

## Agent 系统

### Agent 概述

`Agent` 是战场上的单个单位。英雄、士兵、敌人都是 Agent。

`Agent` is a single unit on the battlefield. Heroes, soldiers, and enemies are all Agents.

### 创建 Agent

```csharp
// 获取 Mission
Mission mission = Mission.Current;

// 通过 CharacterObject 创建 Agent
AgentBuildData agentBuildData = new AgentBuildData(characterObject);
agentBuildData.Equipment(equipment);
agentBuildData.Team(team);

Agent agent = mission.SpawnAgent(agentBuildData, false, 0);

// 设置 Agent 位置
agent.TeleportToPosition(new Vec3(x, y, z));
```

### Agent 组件

```csharp
// Agent 包含多个组件
AgentComponent[] components = agent.Components;

// 常用组件
HorseComponent horse = agent.GetComponent<HorseComponent>();
AgentAvatarData avatar = agent.GetComponent<AgentAvatarData>();
```

### Agent 控制器

```csharp
// 默认控制器（AI 控制）
agent.Controller = Agent.ControllerTypeEnum.None;

// 玩家控制
agent.Controller = Agent.ControllerTypeEnum.Player;

// AI 控制
agent.Controller = Agent.ControllerTypeEnum.AI;

// 脚本控制
agent.Controller = Agent.ControllerTypeEnum.Scripted;
```

### Agent 常用操作

```csharp
// 获取/设置位置
Vec3 position = agent.Position;
agent.TeleportToPosition(newPosition);

// 获取朝向
Vec2 facing = agent.LookDirection;

// 生命值
float health = agent.Health;
float maxHealth = agent.HealthLimit;

// 设置目标
agent.TargetPosition = targetPosition;
agent.SetScriptedPositionAndFace(queryPosition, facing);

// 武器操作
MissionWeapon equippedWeapon = agent.Equipment[EquipmentIndex.WeaponItemPrimarySlot];
agent.TrySetWeaponIndexAsWielded(EquipmentIndex.WeaponItemPrimarySlot);

// 死亡
agent.FatalPush(Mission.DamageTypes.Invalid);
```

### 监听 Agent 事件

```csharp
public class MyAgentLogic : MissionBehavior
{
    public override void OnAgentCreated(Agent agent)
    {
        base.OnAgentCreated(agent);
        
        // 监听特定 Agent
        if (agent.Character.Name == "MyHero")
        {
            agent.AgentHit += OnAgentHit;
            agent.AgentMounted += OnAgentMounted;
            agent.AgentDied += OnAgentDied;
        }
    }
    
    private void OnAgentHit(Agent victim, Agent attacker, int damage, 
        Vec3 impactPoint, bool isBlocked, bool isSiegeEngineHit)
    {
        Debug.Print($"Agent hit: {victim.Name} took {damage} damage");
    }
    
    private void OnAgentDied(Agent victim, Agent attacker, 
        AgentState agentState, BitWriter writer)
    {
        Debug.Print($"Agent died: {victim.Name}");
    }
}
```

---

## Formation 和 Team

### Team

```csharp
// 获取所有队伍
Team[] teams = Mission.Current.Teams;

// 获取敌方队伍
Team enemyTeam = Mission.Current.Teams.Where(t => t.Side != myTeam.Side).First();

// 设置队伍关系
myTeam.SetIsEnemyOf(enemyTeam, true);  // 设为敌人
```

### Formation

``` 类
// 创建阵型
Formation formation = myTeam.CreateFormation("MyFormation");

// 设置阵型位置
formation.SetPositioning(new Vec3(x, y, z), 
                         new Vec3(x2, y2, z2),  // 前方
                         new Vec3(x3, y3, z3));   // 宽度方向

// 添加 Agent 到阵型
formation.AddAgent(agent, false);

// 阵型命令
formation.SetMovementOrder(MovementOrder.MovementOrderCharge);
formation.SetFacingOrder(FacingOrder.FacingOrderLookAtEnemy);

// AI 行为
formation.AI.SetBehaviorWeight<ChargeBehavior>(1.0f);
```

### 阵型行为

```csharp
// 常用阵型行为
formation.AI.SetBehaviorWeight<DefaultFormationBehavior>(1.0f);
formation.AI.SetBehaviorWeight<ChargeBehavior>(1.0f);
formation.AI.SetBehaviorWeight<LineFacingBehavior>(0.5f);
formation.AI.SetBehaviorWeight<ArrowFormationBehavior>(0.8f);
```

---

## 任务示例

### 自定义战斗任务

```csharp
public class CustomBattleLogic : MissionBehavior
{
    private Team _playerTeam;
    private Team _enemyTeam;
    private int _killsRequired = 10;
    private int _currentKills = 0;
    
    public override void OnMissionStart()
    {
        base.OnMissionStart();
        
        // 创建队伍
        _playerTeam = Mission.Current.CreateNewTeam(Team.Side.Defender);
        _enemyTeam = Mission.Current.CreateNewTeam(Team.Side.Attacker);
        
        // 初始化敌人
        SpawnEnemies();
    }
    
    public override void OnAgentDied(Agent victim, Agent attacker, 
        AgentState agentState, BitWriter writer)
    {
        base.OnAgentDied(victim, attacker, agentState, writer);
        
        if (victim.Team == _enemyTeam && attacker != null)
        {
            _currentKills++;
            
            if (_currentKills >= _killsRequired)
            {
                // 胜利条件达成
                EndBattle(true);
            }
        }
    }
    
    private void SpawnEnemies()
    {
        // 创建敌人 Agent
        foreach (var spawnPoint in GetEnemySpawnPoints())
        {
            Agent enemy = CreateEnemyAgent(spawnPoint);
            enemy.Team = _enemyTeam;
        }
    }
    
    private void EndBattle(bool playerWon)
    {
        // 结束战斗
        Mission.Current.EndBattle();
    }
}
```

### 注册自定义任务

```csharp
// 在 SubModule 中
public class MySubModule : MBSubModuleBase
{
    protected override void OnGameStart(Game game, IGameStarter gameStarter)
    {
        base.OnGameStart(game, gameStarter);
        
        // 添加自定义逻辑
        gameStarter.AddBehavior(new CustomBattleLogic());
    }
}
```

---

## 相关 API / Related API

- [Mission API](../api/mission/Mission.md)
- [MissionBehavior API](../api/mission-ext/MissionBehavior.md)
- [Agent API](../api/mission/Agent.md)
- [Formation API](../api/mission/Formation.md)
- [Team API](../api/mission/Team.md)

---

## 下一节 / Next Section

- [战役系统](./campaign-system.md) - 学习 Campaign 世界地图玩法
- [Gauntlet UI](./gauntlet-ui.md) - 创建自定义界面
