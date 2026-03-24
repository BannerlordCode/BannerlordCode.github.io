# Agent / Agent

**Namespace**: TaleWorlds.MountAndBlade
**File**: `bannerlord-1.3.0/TaleWorlds.MountAndBlade/Agent.cs`
**Version**: v1.3.0

## 概述 / Overview

`Agent` 是游戏中的代理实体，代表战场上的士兵、骑兵、弓箭手等。每个 Agent 都有位置、动画、装备和 AI 控制。Agent 是 DotNetObject 的包装器，实际渲染和物理由原生引擎处理。

`Agent` is the agent entity in the game, representing soldiers, cavalry, archers, etc. on the battlefield. Each Agent has position, animation, equipment, and AI control. Agent is a wrapper around DotNetObject, with actual rendering and physics handled by the native engine.

## 与 v1.3.15 的差异 / Differences from v1.3.15

- v1.3.0 的 Agent 类比 v1.3.15 小很多（约 7000 行 vs v1.3.15 的 23000+ 行）
- v1.3.0 Agent class is much smaller than v1.3.15 (about 7000 lines vs 23000+ lines in v1.3.15)
- 没有 AgentComponent 系统（v1.3.15 新增）
- No AgentComponent system (added in v1.3.15)
- 更少的属性和方法
- Fewer properties and methods
- 缺少一些高级 AI 和行为功能
- Missing some advanced AI and behavior features
- 没有 Formation 深度集成
- No deep Formation integration
- 简化的事件系统
- Simplified event system

## 关键属性 / Key Properties

| Property | Type | Description |
|----------|------|-------------|
| Main | static Agent | 获取主代理（玩家控制的代理） / Gets main agent (player controlled) |
| Position | Vec3 | 获取代理位置 / Gets agent position |
| VisualPosition | Vec3 | 获取视觉位置 / Gets visual position |
| IsHuman | bool | 是否是人类 / Whether is human |
| IsMount | bool | 是否是坐骑 / Whether is mount |
| IsPlayerControlled | bool | 是否是玩家控制 / Whether is player controlled |
| IsMainAgent | bool | 是否是主代理 / Whether is main agent |
| IsAIControlled | bool | 是否是 AI 控制 / Whether is AI controlled |
| MovementVelocity | Vec2 | 获取移动速度 / Gets movement velocity |

## 关键方法 / Key Methods

| Method | Description |
|--------|-------------|
| GetAgentFlags | 获取代理标志 / Get agent flags |
| Getptr | 获取原生指针 / Get native pointer |

## 代码示例 / Code Example

```csharp
// Get main agent (player)
Agent mainAgent = Agent.Main;
if (mainAgent == null)
    return;

// Check if human or mount
if (mainAgent.IsHuman)
{
    // Human agent logic
}

// Get position
Vec3 position = mainAgent.Position;

// Check if player controlled
if (mainAgent.IsPlayerControlled)
{
    // Player logic
}
```

## 注意事项 / Notes

- Agent 是原生对象的包装器，不要尝试直接修改其内部状态
- Agent is a wrapper around native object, do not try to modify internal state directly
- 使用 Agent.Main 获取玩家代理
- Use Agent.Main to get player agent
- Agent 的生命周期由任务系统管理
- Agent lifecycle is managed by mission system
- 坐骑（Mount）也是一种 Agent
- Mounts are also Agents
