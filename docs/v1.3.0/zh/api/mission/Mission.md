# Mission / Mission

**Namespace**: TaleWorlds.MountAndBlade
**File**: `bannerlord-1.3.0/TaleWorlds.MountAndBlade/Mission.cs`
**Version**: v1.3.0

## 概述 / Overview

`Mission` 是游戏任务（战场）系统的核心类，负责管理任务场景中的所有实体、代理（Agent）和任务行为（MissionBehavior）。每个战场战斗都在一个 Mission 实例中运行。

`Mission` is the core class of the game mission (battle) system, responsible for managing all entities, agents, and mission behaviors within a mission scene. Every battle takes place within a Mission instance.

## 与 v1.3.15 的差异 / Differences from v1.3.15

- v1.3.0 的 Mission 类比 v1.3.15 精简很多（约 8500 行 vs v1.3.15 的 32000+ 行）
- v1.3.0 Mission class is much simpler than v1.3.15 (about 8500 lines vs 32000+ lines in v1.3.15)
- 没有 AgentComponent 系统
- No AgentComponent system
- 更少的 MissionBehavior 类型
- Fewer MissionBehavior types
- 缺少一些 AI 和 Formation 相关功能
- Missing some AI and Formation related features
- 没有高级的动画系统集成
- No advanced animation system integration
- Scene 交互相对简单
- Simpler Scene interaction

## 关键属性 / Key Properties

| Property | Type | Description |
|----------|------|-------------|
| Current | static Mission | 获取当前任务实例 / Gets current mission instance |
| Scene | Scene | 获取场景对象 / Gets scene object |
| SceneName | string | 获取场景名称 / Gets scene name |
| MainAgent | Agent | 获取主代理（玩家） / Gets main agent (player) |
| ActiveMissionObjects | MBReadOnlyList | 获取活跃的任务对象 / Gets active mission objects |
| MissionObjects | MBReadOnlyList | 获取所有任务对象 / Gets all mission objects |

## 关键方法 / Key Methods

| Method | Description |
|--------|-------------|
| AddMissionBehavior | 添加任务行为 / Add a mission behavior |
| GetActiveEntitiesWithScriptComponentOfType | 获取具有特定脚本组件的实体 / Get entities with specific script component |
| AddActiveMissionObject | 添加任务对象 / Add mission object |
| ActivateMissionObject | 激活任务对象 / Activate mission object |
| DeactivateMissionObject | 停用任务对象 / Deactivate mission object |

## 代码示例 / Code Example

```csharp
// Get current mission
Mission mission = Mission.Current;
if (mission == null)
    return;

// Get scene name
string sceneName = mission.SceneName;

// Get main agent (player)
Agent mainAgent = mission.MainAgent;

// Access mission objects
foreach (MissionObject obj in mission.ActiveMissionObjects)
{
    // Process mission object
}

// Add custom mission behavior
mission.AddMissionBehavior(new MyCustomMissionBehavior());
```

## MissionBehavior 使用 / Using MissionBehavior

MissionBehavior 是扩展任务功能的基类:

MissionBehavior is the base class for extending mission functionality:

```csharp
public class MyMissionBehavior : MissionBehavior
{
    public override void OnBehaviorInitialize()
    {
        base.OnBehaviorInitialize();
        // Initialize your behavior
    }

    public override void OnMissionTick(float dt)
    {
        base.OnMissionTick(dt);
        // Called every frame during mission
    }
}
```

## 注意事项 / Notes

- Mission 是 DOTNET 管理的原生对象包装器
- Mission is a managed wrapper around a native object
- 使用 Mission.Current 获取当前任务实例
- Use Mission.Current to get current mission instance
- 任务对象通过 MissionObject 基类管理
- Mission objects are managed through MissionObject base class
