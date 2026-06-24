<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Team ?`
- [← 本领域 / 返回 mission](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Team ?

**命名空间**: TaleWorlds.MountAndBlade  
**文件**: 

`TaleWorlds.MountAndBlade/Team.cs

` (?1,100 ?  
**用?*: 代表战场上的一个阵?队伍,管理队伍中的所有单位和阵型?

## 概述

`Team

` 代表战场上的一个阵营。在战斗中通常有两个主要阵?
- **攻击?(Attacker)**
- **防守?(Defender)**

每个 Team 包含:
- 多个 Formation (阵型)
- 所有属于该阵营?Agent
- Team AI 控制?
- 命令控制?(OrderController)
- 旗帜和颜色信?

## 心智模型

先把 `Team ?` 当作这个子系统的入口或数据节点来理解：先看属性代表什么状态，再看方法允许你做什么。

## 开发用?/ Developer Use Cases

### 用例 1: 获取攻击?防守?玩家队伍

**场景**: 战斗开始时定位各方队伍用于战术?HUD?

`

`

`csharp
Team attackers = Mission.Current.AttackerTeam;
Team defenders = Mission.Current.DefenderTeam;
Team playerTeam = Mission.Current.PlayerTeam;
`

`

`

**要点**: 

`AttackerTeam

` / 

`DefenderTeam

` 是直接属性；通用查询?

`Mission.Current.GetTeam(TeamSideEnum.Attacker)

`；判断敌我用 

`IsPlayerTeam

` / 

`IsPlayerAlly

`?

### 用例 2: 遍历队伍中所?Agent

**场景**: 给每个单位加 buff、统计存活数等?

`

`

`csharp
foreach (Agent a in team.TeamAgents)
{
    if (a.IsActive()) { /* 处理 */ }
}
// 仅活跃单?
foreach (Agent a in team.ActiveAgents) { /* 处理 */ }
`

`

`

**要点**: 

`TeamAgents

` 含所有单位（含死?逃跑），

`ActiveAgents

` 只含活跃单位；两个列表都是实时更新的只读快照，不要长期缓存引用?

### 用例 3: 添加 Agent 到队?

**场景**: 自定义生成单位后把它登记到某队伍?

`

`

`csharp
team.AddAgentToTeam(spawnedAgent);
// 移除
team.RemoveAgentFromTeam(agent);
`

`

`

**要点**: 

`AddAgentToTeam

` 只更新队伍登记，不会创建 Agent；生成用 

`Mission.SpawnAgent

`，之后再 

`AddAgentToTeam

`。停用而非移除?

`DeactivateAgent

`?

### 用例 4: 设置队伍间敌对关?

**场景**: 自定义战斗模式中动态调整阵营关系?

`

`

`csharp
teamA.SetIsEnemyOf(teamB, isEnemyOf: true);
bool hostile = teamA.IsEnemyOf(teamB);
`

`

`

**要点**: 

`SetIsEnemyOf

` 是单向设置但通常成对调用；`IsEnemyOf

` 读取缓存关系；改完关系后 

`HasAnyEnemyTeamsWithAgents(bool)

` 可快速判断是否还有敌人?

## 关键属?

### 基本属?

\| 属?\| 类型 \| 说明 \|
\|------\|------\|------\|
\| 

`Side

` \| 

`BattleSideEnum

` \| 阵营?攻击/防守) \|
\| 

`TeamSide

` \| 

`TeamSideEnum

` \| 队伍类型(玩家?友军/敌军) \|
\| 

`IsPlayerTeam

` \| 

`bool

` \| 是否是玩家队?\|
\| 

`IsPlayerAlly

` \| 

`bool

` \| 是否是玩家友?\|
\| 

`IsDefender

` \| 

`bool

` \| 是否是防守方 \|
\| 

`IsAttacker

` \| 

`bool

` \| 是否是攻击方 \|
\| 

`Mission

` \| 

`Mission

` \| 所属任?\|
\| 

`TeamIndex

` \| 

`int

` \| 队伍索引 \|
\| 

`MBTeam

` \| 

`MBTeam

` \| 底层 MBTeam 对象 \|

### 阵型

\| 属?\| 类型 \| 说明 \|
\|------\|------\|------\|
\| 

`FormationsIncludingEmpty

` \| 

`MBList

` \| 所有阵?包括空的) \|
\| 

`FormationsIncludingSpecialAndEmpty

` \| 

`MBList

` \| 包括特殊阵型的所有阵?\|
\| 

`GetFormation(FormationClass)

` \| 

`Formation

` \| 获取指定类型的阵?\|

### Agent 列表

\| 属?\| 类型 \| 说明 \|
\|------\|------\|------\|
\| 

`TeamAgents

` \| 

`MBReadOnlyList

` \| 队伍中所?Agent \|
\| 

`ActiveAgents

` \| 

`MBReadOnlyList

` \| 队伍中活跃的 Agent \|
\| 

`HasBots

` \| 

`bool

` \| 是否?Bot \|
\| 

`Leader

` \| 

`Agent

` \| 队伍领袖 \|
\| 

`Heroes

` \| 

`IEnumerable

` \| 队伍中的英雄 \|

### 特殊阵型

\| 属?\| 类型 \| 说明 \|
\|------\|------\|------\|
\| 

`GeneralsFormation

` \| 

`Formation

` \| 将军阵型 \|
\| 

`BodyGuardFormation

` \| 

`Formation

` \| 侍卫阵型 \|
\| 

`GeneralAgent

` \| 

`Agent

` \| 将军 Agent \|

### AI 和命?

\| 属?\| 类型 \| 说明 \|
\|------\|------\|------\|
\| 

`TeamAI

` \| 

`TeamAIComponent

` \| 队伍 AI 组件 \|
\| 

`HasTeamAi

` \| 

`bool

` \| 是否?Team AI \|
\| 

`MasterOrderController

` \| 

`OrderController

` \| 主命令控制器 \|
\| 

`PlayerOrderController

` \| 

`OrderController

` \| 玩家命令控制?\|

### 其他属?

\| 属?\| 类型 \| 说明 \|
\|------\|------\|------\|
\| 

`Color

` \| 

`uint

` \| 队伍颜色 \|
\| 

`Color2

` \| 

`uint

` \| 队伍颜色2 \|
\| 

`Banner

` \| 

`Banner

` \| 旗帜 \|
\| 

`QuerySystem

` \| 

`TeamQuerySystem

` \| 队伍查询系统 \|
\| 

`DetachmentManager

` \| 

`DetachmentManager

` \| 分离管理?\|
\| 

`MoraleChangeFactor

` \| 

`float

` \| 士气变化因子 \|
\| 

`IsPlayerGeneral

` \| 

`bool

` \| 是否是玩家将?\|
\| 

`IsPlayerSergeant

` \| 

`bool

` \| 是否是玩家军士长 \|

## 重要方法

### 阵型管理

\| 方法 \| 说明 \|
\|------\|------\|
\| 

`GetFormation(FormationClass)

` \| 获取指定类型的阵?\|
\| 

`GetFormationCount()

` \| 获取非空阵型数量 \|
\| 

`GetAIControlledFormationCount()

` \| 获取 AI 控制的阵型数?\|

### Agent 管理

\| 方法 \| 说明 \|
\|------\|------\|
\| 

`AddAgentToTeam(Agent)

` \| 添加 Agent 到队?\|
\| 

`RemoveAgentFromTeam(Agent)

` \| 从队伍移?Agent \|
\| 

`DeactivateAgent(Agent)

` \| 停用 Agent \|

### 队伍关系

\| 方法 \| 说明 \|
\|------\|------\|
\| 

`SetIsEnemyOf(Team, bool)

` \| 设置敌对关系 \|
\| 

`IsEnemyOf(Team)

` \| 判断是否为敌?\|
\| 

`IsFriendOf(Team)

` \| 判断是否为友?\|

### 位置查询

\| 方法 \| 说明 \|
\|------\|------\|
\| 

`GetAveragePosition()

` \| 获取队伍平均位置 \|
\| 

`GetAveragePositionOfEnemies()

` \| 获取敌方平均位置 \|
\| 

`GetMedianPosition(Vec2)

` \| 获取中位数位?\|
\| 

`GetWeightedAverageOfEnemies(Vec2)

` \| 获取敌方加权平均位置 \|

### AI 控制

\| 方法 \| 说明 \|
\|------\|------\|
\| 

`AddTeamAI(TeamAIComponent, bool)

` \| 添加 Team AI \|
\| 

`DelegateCommandToAI()

` \| 将命令委托给 AI \|
\| 

`AddTacticOption(TacticComponent)

` \| 添加战术选项 \|
\| 

`RemoveTacticOption(Type)

` \| 移除战术选项 \|
\| 

`ClearTacticOptions()

` \| 清除战术选项 \|
\| 

`ResetTactic()

` \| 重置战术 \|

### 其他方法

\| 方法 \| 说明 \|
\|------\|------\|
\| 

`Tick(float dt)

` \| 每帧更新 \|
\| 

`Reset()

` \| 重置队伍 \|
\| 

`Clear()

` \| 清除队伍 \|
\| 

`OnMissionEnded()

` \| 任务结束时调?\|
\| 

`GetOrderControllerOf(Agent)

` \| 获取 Agent 的命令控制器 \|
\| 

`SetPlayerRole(bool, bool)

` \| 设置玩家角色 \|
\| 

`AssignPlayerAsSergeantOfFormation(...)

` \| 分配玩家为军士长 \|
\| 

`HasAnyEnemyTeamsWithAgents(bool)

` \| 是否有敌人的队伍 \|
\| 

`HasAnyFormationsIncludingSpecialThatIsNotEmpty()

` \| 是否有非空阵?\|
\| 

`TriggerOnFormationsChanged(Formation)

` \| 触发阵型变化事件 \|

## 重要事件

\| 事件 \| 说明 \|
\|------\|------\|
\| 

`OnFormationsChanged

` \| 阵型变化?\|
\| 

`OnOrderIssued

` \| 命令发布?\|
\| 

`OnFormationAIActiveBehaviorChanged

` \| 阵型 AI 行为变化?\|

## 常见用法

### 1. 获取攻击方和防守?

`

`

`csharp
// 获取攻击?
Team attackerTeam = Mission.Current.GetTeam(TeamSideEnum.Attacker);

// 获取防守?
Team defenderTeam = Mission.Current.GetTeam(TeamSideEnum.Defender);

// 或者通过 Side 判断
if (team.Side == BattleSideEnum.Attacker)
{
    // 这是攻击?
}
else if (team.Side == BattleSideEnum.Defender)
{
    // 这是防守?
}
`

`

`

### 2. 遍历队伍中的所?Agent

`

`

`csharp
// 获取队伍所?Agent
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
    // 队伍中有 AI 控制的单?
}
`

`

`

### 3. 获取队伍的阵?

`

`

`csharp
// 获取特定类型的阵?
Formation infantryFormation = team.GetFormation(FormationClass.Infantry);
Formation rangedFormation = team.GetFormation(FormationClass.Ranged);
Formation cavalryFormation = team.GetFormation(FormationClass.Cavalry);

// 遍历所有阵?
foreach (Formation formation in team.FormationsIncludingSpecialAndEmpty)
{
    if (formation.CountOfUnits &gt; 0)
    {
        // 处理非空阵型
    }
}
`

`

`

### 4. 设置队伍关系

`

`

`csharp
// 设置敌对关系
team.SetIsEnemyOf(otherTeam, true); // 设置为敌?

// 检查关?
if (team.IsEnemyOf(otherTeam))
{
    // 敌对关系
}

if (team.IsFriendOf(otherTeam))
{
    // 友好关系
}
`

`

`

### 5. 添加 Team AI

`

`

`csharp
// 添加自定?Team AI
team.AddTeamAI(new MyTeamAIComponent(), forceNotAIControlled: false);

// 添加战术选项
team.AddTacticOption(new MyTacticComponent());

// 移除战术选项
team.RemoveTacticOption(typeof(MyTacticComponent));

// 重置战术
team.ResetTactic();
`

`

`

### 6. 发布命令

`

`

`csharp
// 获取命令控制?
OrderController orderController = team.MasterOrderController;

// 或者获取特?Agent 的命令控制器
OrderController agentController = team.GetOrderControllerOf(agent);

// 监听命令发布事件
team.OnOrderIssued += (orderType, formations, controller, parameters) =&gt;
{
    // 处理命令发布
};
`

`

`

### 7. 位置和查?

`

`

`csharp
// 获取队伍平均位置
Vec2 avgPos = team.GetAveragePosition();

// 获取敌方平均位置
Vec2 enemyAvgPos = team.GetAveragePositionOfEnemies();

// 获取队伍中位数位?
WorldPosition medianPos = team.GetMedianPosition(avgPos);

// 获取队伍领袖
Agent leader = team.Leader;
`

`

`

## TeamSideEnum 枚举

\| ?\| 说明 \|
\|------\|------\|
\| 

`Defender

` \| 防守?\|
\| 

`Attacker

` \| 攻击?\|
\| 

`None

` \| ?\|

## BattleSideEnum 枚举

\| ?\| 说明 \|
\|------\|------\|
\| 

`Defender

` \| 防守?\|
\| 

`Attacker

` \| 攻击?\|
\| 

`None

` \| ?\|

## 注意事项

1. **Team 索引** - 

`TeamIndex

` 用于网络同步和标?
2. **TeamAI** - 添加 Team AI 后会自动控制阵型的行?
3. **OrderController** - 命令通过 OrderController 发布和管?
4. **Agent 引用** - 

`TeamAgents

` ?

`ActiveAgents

` 是实时更新的列表,不要长期存储引用
5. **阵营颜色** - 

`Color

` ?

`Color2

` ?ARGB 格式的颜色?

## 使用示例

```csharp
var example = new Team ?();
```
