---
title: "MissionBehavior"
description: "Mission/场景行为的扩展基类：监听战斗事件、Agent 生命周期、Tick、武器交互等。"
---
# MissionBehavior

**Namespace:** TaleWorlds.MountAndBlade  
**Module:** TaleWorlds.MountAndBlade  
**Type:** `public abstract class MissionBehavior`  
**Base:** —  
**File:** `TaleWorlds.MountAndBlade/MissionBehavior.cs`

## 概述

`MissionBehavior` 是 Bannerlord 战斗/场景系统最重要的扩展点。它在每次进入 `Mission`（战斗、城镇场景、战役场景等）时创建，生命周期跟随当前场景。

通过继承它，你可以：

- 监听 Agent 创建、受伤、死亡、逃离、上下马等事件。
- 在每帧或固定时间间隔执行逻辑。
- 响应 Mission 开始 / 结束 / 模式切换。
- 与场景对象 (`UsableMissionObject`)、导弹、近战/远程命中交互。

## 心智模型

把 `MissionBehavior` 当作**“当前场景里的临时插件”**：

- 进入场景时由引擎或你注册，退出场景时销毁。
- 和 `CampaignBehaviorBase` 不同：后者在战役地图上长期存在，`MissionBehavior` 只存在一次 Mission。
- 它不会自动创建；你需要在 `MBSubModuleBase.OnGameStart` 中通过 `MissionGameStarter.AddBehavior(...)` 注册。
- 一个场景里可以挂多个 `MissionBehavior`，各自负责不同逻辑。

## 如何注册

```csharp
protected override void OnGameStart(Game game, IGameStarter starterObject)
{
    base.OnGameStart(game, starterObject);
    if (starterObject is CampaignGameStarter campaignStarter)
    {
        campaignStarter.AddBehavior(new MyCampaignBehavior());
    }
    if (starterObject is MissionGameStarter missionStarter)
    {
        missionStarter.AddBehavior(new MyMissionBehavior());
    }
}
```

## 核心生命周期方法

| 方法 | 说明 |
|------|------|
| `OnBehaviorInitialize()` | 行为初始化。 |
| `OnCreated()` | MissionBehavior 被创建。 |
| `EarlyStart()` | Mission 开始早期。 |
| `AfterStart()` | Mission 开始完成后。 |
| `OnMissionTick(float dt)` | 每帧更新。 |
| `OnFixedMissionTick(float fixedDt)` | 固定时间步更新。 |
| `OnEndMissionInternal()` | Mission 即将结束。 |
| `OnRemoveBehavior()` | 行为被移除。 |

## 主要事件钩子

### Agent 相关

```csharp
public override void OnAgentCreated(Agent agent)
{
    // Agent 刚被创建（可能还未完全生成）
}

public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)
{
    if (affectorAgent == Mission.Current?.MainAgent)
    {
        InformationManager.DisplayMessage(new InformationMessage($"消灭 {affectedAgent.Name}"));
    }
}

public override void OnAgentHit(Agent affectedAgent, Agent affectorAgent, in MissionWeapon affectorWeapon, in Blow blow, in AttackCollisionData attackCollisionData)
{
    // Agent 被击中
}
```

### Mission 模式切换

```csharp
public override void OnMissionModeChange(MissionMode oldMissionMode, bool atStart)
{
    if (Mission.Current.Mode == MissionMode.Battle)
    {
        // 进入战斗模式
    }
}
```

### 对象交互

```csharp
public override void OnObjectUsed(Agent userAgent, UsableMissionObject usedObject)
{
    // 玩家/AI 使用了一个场景对象（如门、梯子）
}
```

## 典型用法示例

### 示例 1：统计玩家击杀

```csharp
public class PlayerKillTrackerBehavior : MissionBehavior
{
    public override MissionBehaviorType BehaviorType => MissionBehaviorType.Other;

    public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)
    {
        if (affectorAgent?.IsMainAgent ?? false)
        {
            int count = GetCurrentKillCount() + 1;
            InformationManager.DisplayMessage(new InformationMessage($"击杀 #{count}"));
            SetCurrentKillCount(count);
        }
    }
}
```

### 示例 2：Mission 期间缓慢治疗玩家

```csharp
public override void OnMissionTick(float dt)
{
    Agent main = Mission.Current?.MainAgent;
    if (main != null && main.IsActive() && main.Health < main.HealthLimit)
    {
        main.Health = Math.Min(main.Health + 2f * dt, main.HealthLimit);
    }
}
```

## `BehaviorType`

重写 `BehaviorType` 决定行为属于哪一类：`Other`、`Logic`、`Battle` 等。不同类别影响引擎的调用顺序和是否自动启用。

```csharp
public override MissionBehaviorType BehaviorType => MissionBehaviorType.Logic;
```

## 跨版本提示

- v1.3.0 / v1.3.15 / v1.4.5 核心 API 一致；事件签名可能增加 `in`/`ref` 参数。
- v1.4.5 对 `MissionBehavior` 的创建/销毁顺序更严格，避免在构造函数中访问 `Mission.Current`。

## 参见

- [Mission](../Mission/) — Behavior 所在场景
- [Agent](../Agent/) — 场景中的实体
- [CampaignBehaviorBase](../../campaign-ext/CampaignBehaviorBase/) — 战役层面的对应物
- [MissionLogic](../../mission-ext/MissionLogic/) — 另一类 Mission 逻辑扩展
- [MissionObject](../../mission-ext/MissionObject/) — 场景交互对象
