# Team 类

**命名空间**: TaleWorlds.MountAndBlade  
**文件**: `TaleWorlds.MountAndBlade/Team.cs` (约 1,100 行)  
**用途**: 代表战场上的一个阵营/队伍,管理队伍中的所有单位和阵型。

## 概述

`Team` 代表战场上的一个阵营。在战斗中通常有两个主要阵营:
- **攻击方 (Attacker)**
- **防守方 (Defender)**

每个 Team 包含:
- 多个 Formation (阵型)
- 所有属于该阵营的 Agent
- Team AI 控制器
- 命令控制器 (OrderController)
- 旗帜和颜色信息

## 关键属性

### 基本属性

| 属性 | 类型 | 说明 |
|------|------|------|
| `Side` | `BattleSideEnum` | 阵营方(攻击/防守) |
| `TeamSide` | `TeamSideEnum` | 队伍类型(玩家队/友军/敌军) |
| `IsPlayerTeam` | `bool` | 是否是玩家队伍 |
| `IsPlayerAlly` | `bool` | 是否是玩家友军 |
| `IsDefender` | `bool` | 是否是防守方 |
| `IsAttacker` | `bool` | 是否是攻击方 |
| `Mission` | `Mission` | 所属任务 |
| `TeamIndex` | `int` | 队伍索引 |
| `MBTeam` | `MBTeam` | 底层 MBTeam 对象 |

### 阵型

| 属性 | 类型 | 说明 |
|------|------|------|
| `FormationsIncludingEmpty` | `MBList` | 所有阵型(包括空的) |
| `FormationsIncludingSpecialAndEmpty` | `MBList` | 包括特殊阵型的所有阵型 |
| `GetFormation(FormationClass)` | `Formation` | 获取指定类型的阵型 |

### Agent 列表

| 属性 | 类型 | 说明 |
|------|------|------|
| `TeamAgents` | `MBReadOnlyList` | 队伍中所有 Agent |
| `ActiveAgents` | `MBReadOnlyList` | 队伍中活跃的 Agent |
| `HasBots` | `bool` | 是否有 Bot |
| `Leader` | `Agent` | 队伍领袖 |
| `Heroes` | `IEnumerable` | 队伍中的英雄 |

### 特殊阵型

| 属性 | 类型 | 说明 |
|------|------|------|
| `GeneralsFormation` | `Formation` | 将军阵型 |
| `BodyGuardFormation` | `Formation` | 侍卫阵型 |
| `GeneralAgent` | `Agent` | 将军 Agent |

### AI 和命令

| 属性 | 类型 | 说明 |
|------|------|------|
| `TeamAI` | `TeamAIComponent` | 队伍 AI 组件 |
| `HasTeamAi` | `bool` | 是否有 Team AI |
| `MasterOrderController` | `OrderController` | 主命令控制器 |
| `PlayerOrderController` | `OrderController` | 玩家命令控制器 |

### 其他属性

| 属性 | 类型 | 说明 |
|------|------|------|
| `Color` | `uint` | 队伍颜色 |
| `Color2` | `uint` | 队伍颜色2 |
| `Banner` | `Banner` | 旗帜 |
| `QuerySystem` | `TeamQuerySystem` | 队伍查询系统 |
| `DetachmentManager` | `DetachmentManager` | 分离管理器 |
| `MoraleChangeFactor` | `float` | 士气变化因子 |
| `IsPlayerGeneral` | `bool` | 是否是玩家将军 |
| `IsPlayerSergeant` | `bool` | 是否是玩家军士长 |

## 重要方法

### 阵型管理

| 方法 | 说明 |
|------|------|
| `GetFormation(FormationClass)` | 获取指定类型的阵型 |
| `GetFormationCount()` | 获取非空阵型数量 |
| `GetAIControlledFormationCount()` | 获取 AI 控制的阵型数量 |

### Agent 管理

| 方法 | 说明 |
|------|------|
| `AddAgentToTeam(Agent)` | 添加 Agent 到队伍 |
| `RemoveAgentFromTeam(Agent)` | 从队伍移除 Agent |
| `DeactivateAgent(Agent)` | 停用 Agent |

### 队伍关系

| 方法 | 说明 |
|------|------|
| `SetIsEnemyOf(Team, bool)` | 设置敌对关系 |
| `IsEnemyOf(Team)` | 判断是否为敌对 |
| `IsFriendOf(Team)` | 判断是否为友军 |

### 位置查询

| 方法 | 说明 |
|------|------|
| `GetAveragePosition()` | 获取队伍平均位置 |
| `GetAveragePositionOfEnemies()` | 获取敌方平均位置 |
| `GetMedianPosition(Vec2)` | 获取中位数位置 |
| `GetWeightedAverageOfEnemies(Vec2)` | 获取敌方加权平均位置 |

### AI 控制

| 方法 | 说明 |
|------|------|
| `AddTeamAI(TeamAIComponent, bool)` | 添加 Team AI |
| `DelegateCommandToAI()` | 将命令委托给 AI |
| `AddTacticOption(TacticComponent)` | 添加战术选项 |
| `RemoveTacticOption(Type)` | 移除战术选项 |
| `ClearTacticOptions()` | 清除战术选项 |
| `ResetTactic()` | 重置战术 |

### 其他方法

| 方法 | 说明 |
|------|------|
| `Tick(float dt)` | 每帧更新 |
| `Reset()` | 重置队伍 |
| `Clear()` | 清除队伍 |
| `OnMissionEnded()` | 任务结束时调用 |
| `GetOrderControllerOf(Agent)` | 获取 Agent 的命令控制器 |
| `SetPlayerRole(bool, bool)` | 设置玩家角色 |
| `AssignPlayerAsSergeantOfFormation(...)` | 分配玩家为军士长 |
| `HasAnyEnemyTeamsWithAgents(bool)` | 是否有敌人的队伍 |
| `HasAnyFormationsIncludingSpecialThatIsNotEmpty()` | 是否有非空阵型 |
| `TriggerOnFormationsChanged(Formation)` | 触发阵型变化事件 |

## 重要事件

| 事件 | 说明 |
|------|------|
| `OnFormationsChanged` | 阵型变化时 |
| `OnOrderIssued` | 命令发布时 |
| `OnFormationAIActiveBehaviorChanged` | 阵型 AI 行为变化时 |

## 常见用法

### 1. 获取攻击方和防守方

```csharp
// 获取攻击方
Team attackerTeam = Mission.Current.GetTeam(TeamSideEnum.Attacker);

// 获取防守方
Team defenderTeam = Mission.Current.GetTeam(TeamSideEnum.Defender);

// 或者通过 Side 判断
if (team.Side == BattleSideEnum.Attacker)
{
    // 这是攻击方
}
else if (team.Side == BattleSideEnum.Defender)
{
    // 这是防守方
}
```

### 2. 遍历队伍中的所有 Agent

```csharp
// 获取队伍所有 Agent
foreach (Agent agent in myTeam.TeamAgents)
{
    // 处理每个 Agent
}

// 只获取活跃的 Agent
foreach (Agent agent in myTeam.ActiveAgents)
{
    // 处理
}

// 检查是否有 Bot
if (myTeam.HasBots)
{
    // 队伍中有 AI 控制的单位
}
```

### 3. 获取队伍的阵型

```csharp
// 获取特定类型的阵型
Formation infantryFormation = team.GetFormation(FormationClass.Infantry);
Formation rangedFormation = team.GetFormation(FormationClass.Ranged);
Formation cavalryFormation = team.GetFormation(FormationClass.Cavalry);

// 遍历所有阵型
foreach (Formation formation in team.FormationsIncludingSpecialAndEmpty)
{
    if (formation.CountOfUnits > 0)
    {
        // 处理非空阵型
    }
}
```

### 4. 设置队伍关系

```csharp
// 设置敌对关系
team.SetIsEnemyOf(otherTeam, true); // 设置为敌人

// 检查关系
if (team.IsEnemyOf(otherTeam))
{
    // 敌对关系
}

if (team.IsFriendOf(otherTeam))
{
    // 友好关系
}
```

### 5. 添加 Team AI

```csharp
// 添加自定义 Team AI
team.AddTeamAI(new MyTeamAIComponent(), forceNotAIControlled: false);

// 添加战术选项
team.AddTacticOption(new MyTacticComponent());

// 移除战术选项
team.RemoveTacticOption(typeof(MyTacticComponent));

// 重置战术
team.ResetTactic();
```

### 6. 发布命令

```csharp
// 获取命令控制器
OrderController orderController = team.MasterOrderController;

// 或者获取特定 Agent 的命令控制器
OrderController agentController = team.GetOrderControllerOf(agent);

// 监听命令发布事件
team.OnOrderIssued += (orderType, formations, controller, parameters) =>
{
    // 处理命令发布
};
```

### 7. 位置和查询

```csharp
// 获取队伍平均位置
Vec2 avgPos = team.GetAveragePosition();

// 获取敌方平均位置
Vec2 enemyAvgPos = team.GetAveragePositionOfEnemies();

// 获取队伍中位数位置
WorldPosition medianPos = team.GetMedianPosition(avgPos);

// 获取队伍领袖
Agent leader = team.Leader;
```

## TeamSideEnum 枚举

| 值 | 说明 |
|------|------|
| `Defender` | 防守方 |
| `Attacker` | 攻击方 |
| `None` | 无 |

## BattleSideEnum 枚举

| 值 | 说明 |
|------|------|
| `Defender` | 防守方 |
| `Attacker` | 攻击方 |
| `None` | 无 |

## 注意事项

1. **Team 索引** - `TeamIndex` 用于网络同步和标识
2. **TeamAI** - 添加 Team AI 后会自动控制阵型的行为
3. **OrderController** - 命令通过 OrderController 发布和管理
4. **Agent 引用** - `TeamAgents` 和 `ActiveAgents` 是实时更新的列表,不要长期存储引用
5. **阵营颜色** - `Color` 和 `Color2` 是 ARGB 格式的颜色值
