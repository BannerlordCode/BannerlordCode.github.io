---
title: "Agent"
description: "Mission 场景中的单个实体：士兵、玩家、马匹的战场状态、属性与行为控制。"
---
# Agent

**Namespace:** TaleWorlds.MountAndBlade  
**Module:** TaleWorlds.MountAndBlade  
**Type:** `public class Agent : Entity, IAgent`  
**Base:** `Entity`  
**File:** `TaleWorlds.MountAndBlade/Agent.cs`

## 概述

`Agent` 代表 Mission 场景里的**一个具体实体**：玩家角色、AI 士兵、马匹、攻城器械操作员等。与 `Hero`（战役角色卡片）不同，`Agent` 是战场上的实时对象，拥有位置、方向、生命值、装备、动画状态和 AI 控制器。

它是战斗 mod 最常操作的对象之一：刷兵、修改血量、给武器、控制移动、播放动画、切换队伍等。

## 心智模型

把 `Agent` 想象成**“场景里的一个可控制角色实例”**：

- `Agent` 只在 `Mission` 存活期间存在；切换场景后全部销毁。
- 同一个 `Hero` 在不同战斗里会生成不同的 `Agent` 实例。
- 不要 new `Agent()`；通过 `Mission.Current.SpawnAgent(...)` 创建。
- 它同时承载**物理/渲染状态**（位置、动画）和**游戏逻辑状态**（血量、队伍、装备）。

## 如何获取 Agent

```csharp
// 玩家控制的 Agent
Agent main = Mission.Current?.MainAgent;

// 遍历所有 Agent
foreach (Agent agent in Mission.Current.Agents)
{
    if (agent.IsActive() && agent.IsHuman)
    {
        // ...
    }
}

// 从事件参数拿到 Agent
public override void OnAgentHit(Agent affectedAgent, Agent affectorAgent, ...)
{
    if (affectedAgent == Mission.Current.MainAgent)
    {
        // 玩家被击中
    }
}
```

## 核心属性

| 属性 | 类型 | 说明 |
|------|------|------|
| `Mission.MainAgent` | `Agent` | 玩家 Agent。 |
| `IsActive` | `bool` | 是否还活着且在场景中。 |
| `IsHuman` | `bool` | 是否是人类（非马匹等）。 |
| `IsMount` | `bool` | 是否是坐骑。 |
| `Team` | `Team` | 所属队伍。 |
| `Formation` | `Formation` | 所属编队。 |
| `Health` / `HealthLimit | `float` | 当前生命值 / 上限。 |
| `Character` | `CharacterObject` | 底层角色模板。 |
| `Hero` (extension) | `Hero` | 若该 Agent 有对应英雄，可通过扩展或 `Character.HeroObject` 拿到。 |
| `Position` / `LookDirection` | `Vec3` | 位置与朝向。 |
| `WieldedWeapon` | `MissionWeapon` | 当前手持武器。 |
| `Origin` | `IAgentOriginBase` | 生成来源（部队、英雄、场景放置等）。 |

## 主要方法

### `public bool IsActive()`
判断 Agent 是否仍然存活且有效。

```csharp
Agent target = Mission.Current.Agents.FirstOrDefault(a => a.IsActive() && a.IsHuman);
```

### `public void TelegraphAttackToAgent(Agent target)`
让 Agent 向目标发起攻击（AI 控制）。

```csharp
myAgent.TelegraphAttackToAgent(enemy);
```

### `public void SetTargetPosition(ref WorldPosition targetPosition)`
设置移动目标点。

```csharp
WorldPosition pos = new WorldPosition(Mission.Current.Scene, new Vec3(100f, 50f, 0f));
agent.SetTargetPosition(pos);
```

### `public void SetLookDirection(Vec3 direction)`
设置朝向。

```csharp
agent.SetLookDirection(enemy.Position - agent.Position);
```

### `public void SetWeaponAmountInSlot(...)` / `public void WieldNextWeapon(...)`
管理装备与武器切换。

```csharp
agent.WieldNextWeapon(Agent.HandIndex.MainHand);
```

### `public void Die(...)`
立即杀死 Agent。常用于自定义任务逻辑。

```csharp
agent.Die(new Blow(agent.Index), Agent.KillInfoFlags.None);
```

### `public void MakeVoice(...)` / `public void SetActionChannel(...)`
播放语音与动画。

```csharp
agent.MakeVoice(SkinVoiceManager.VoiceType.Yell, SkinVoiceManager.CombatVoiceNetworkPredictionType.NoPrediction);
```

## 典型用法示例

### 示例 1：治疗玩家 Agent

```csharp
Agent main = Mission.Current?.MainAgent;
if (main != null && main.IsActive())
{
    main.Health = main.HealthLimit;
}
```

### 示例 2：给附近所有友军加临时生命值

```csharp
public override void OnMissionTick(float dt)
{
    if (Mission.Current?.PlayerTeam == null) return;
    foreach (Agent agent in Mission.Current.Agents)
    {
        if (agent.IsActive() && agent.Team == Mission.Current.PlayerTeam && agent.IsHuman)
        {
            if (agent.Health < agent.HealthLimit)
            {
                agent.Health = Math.Min(agent.Health + 5f * dt, agent.HealthLimit);
            }
        }
    }
}
```

### 示例 3：检测玩家击杀

```csharp
public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)
{
    if (affectorAgent == Mission.Current?.MainAgent && affectedAgent.IsHuman)
    {
        InformationManager.DisplayMessage(new InformationMessage($"Killed {affectedAgent.Name}"));
    }
}
```

## 跨版本提示

- v1.3.0 / v1.3.15 / v1.4.5 核心 API 一致。
- v1.4.5 增加了更多 `Agent.Controller` 和 `AgentComponent` 的拆分，复杂 AI 行为建议通过 `AgentComponent` 或 `MissionLogic` 实现。

## 参见

- [Mission](../Mission/) — Agent 所在场景
- [Team](../Team/) — 队伍与阵营
- [Formation](../Formation/) — 编队
- [MissionBehavior](../MissionBehavior/) — 接收 Agent 相关事件
- [MissionObject](../../mission-ext/MissionObject/) — 场景交互对象
