---
title: "MissionBehavior"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionBehavior`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
- [🔀 跨版本对比 /versions/MissionBehavior](/versions/MissionBehavior)
<!-- END BREADCRUMB -->
# MissionBehavior

## 心智模型

先把 `MissionBehavior` 当作这个子系统的入口或数据节点来理解：先看属性代表什么状态，再看方法允许你做什么。

## 类概?

\| 项目 \| 说明 \|
\|------\|------\|
\| **命名空间** \| TaleWorlds.MountAndBlade \|
\| **文件路径** \| TaleWorlds.MountAndBlade/MissionBehavior.cs \|
\| **接口** \| IMissionBehavior \|
\| **类型** \| 抽象?\|

## 说明

`MissionBehavior

` 是任务扩展系统的基类。所有任务相关的行为都应继承此类。系统会调用对应的虚方法，允许你在任务的不同阶段介入?

## 关键属?

\| 属?\| 类型 \| 说明 \|
\|------\|------\|------\|
\| Mission \| Mission \| 所属任务实?\|
\| DebugInput \| IInputContext \| 调试输入上下?\|
\| BehaviorType \| MissionBehaviorType \| 行为类型（抽象属性） \|

## 关键方法

### 生命周期方法

\| 方法 \| 说明 \|
\|------\|------\|
\| OnAfterMissionCreated() \| 任务创建?\|
\| OnBehaviorInitialize() \| 行为初始?\|
\| OnCreated() \| 创建?\|
\| EarlyStart() \| 早期启动 \|
\| AfterStart() \| 启动?\|

### Agent 相关方法

\| 方法 \| 说明 \|
\|------\|------\|
\| OnAgentCreated(Agent agent) \| Agent 创建?\|
\| OnAgentBuild(Agent agent, Banner banner) \| Agent 构建?\|
\| OnAgentTeamChanged(Team prevTeam, Team newTeam, Agent agent) \| Agent 队伍改变?\|
\| OnAgentControllerSetToPlayer(Agent agent) \| Agent 控制器设置为玩家?\|
\| OnAgentHit(Agent affectedAgent, Agent affectorAgent, in MissionWeapon affectorWeapon, in Blow blow, in AttackCollisionData attackCollisionData) \| Agent 受到攻击?\|
\| OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow) \| Agent 被移除时 \|
\| OnAgentFleeing(Agent affectedAgent) \| Agent 逃跑?\|
\| OnAgentPanicked(Agent affectedAgent) \| Agent 恐慌?\|
\| OnAgentMount(Agent agent) \| Agent 骑乘?\|
\| OnAgentDismount(Agent agent) \| Agent 下马?\|

### 任务阶段方法

\| 方法 \| 说明 \|
\|------\|------\|
\| OnMissionTick(float dt) \| 每帧更新 \|
\| OnPreMissionTick(float dt) \| 帧更新前 \|
\| OnFixedMissionTick(float fixedDt) \| 固定时间更新 \|
\| OnClearScene() \| 清除场景?\|
\| OnEndMission() \| 结束任务?\|

### 战斗相关方法

\| 方法 \| 说明 \|
\|------\|------\|
\| OnMeleeHit(Agent attacker, Agent victim, bool isCanceled, AttackCollisionData collisionData) \| 近战命中?\|
\| OnMissileHit(Agent attacker, Agent victim, bool isCanceled, AttackCollisionData collisionData) \| 箭矢命中?\|
\| OnMissileCollisionReaction(...) \| 箭矢碰撞反应 \|
\| OnScoreHit(...) \| 计分?\|

### 队伍相关方法

\| 方法 \| 说明 \|
\|------\|------\|
\| OnAddTeam(Team team) \| 添加队伍?\|
\| AfterAddTeam(Team team) \| 添加队伍?\|
\| OnTeamDeployed(Team team) \| 队伍部署?\|
\| OnBattleSideDeployed(BattleSideEnum side) \| 战斗侧部署时 \|

## 使用示例

`

`

`csharp
// 创建自定义任务行?
public class MyMissionBehavior : MissionBehavior
{
    public override MissionBehaviorType BehaviorType =&gt; MissionBehaviorType.Other;

    public override void OnAgentCreated(Agent agent)
    {
        // Agent 创建时的自定义逻辑
    }

    public override void OnMissionTick(float dt)
    {
        // 每帧更新逻辑
    }

    public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, 
        AgentState agentState, KillingBlow blow)
    {
        // Agent 移除时的逻辑
    }
}

// 注册行为
mission.AddBehavior(new MyMissionBehavior());
`

`

`
