---
title: Mission 系统基础 / Mission System Basics
description: v1.3.0 Mission 和 MissionBehavior 入门 / v1.3.0 Mission and MissionBehavior introduction
---

# Mission 系统基础 / Mission System Basics

**v1.3.0 版本**

> 注意：本页面介绍 v1.3.0 的 Mission 系统基础。v1.3.15 有更多功能和 API。如需完整内容，请查看 [v1.3.15 Mission 系统](../../v1.3.15/zh/guide/mission-system.md)。

## 概述 / Overview

Mission 是 Bannerlord 战斗系统的核心。在 v1.3.0 中，Mission 系统相对简单。

Mission is the core of Bannerlord's combat system. In v1.3.0, the Mission system is relatively simple.

## MissionBehavior

### 基本结构

```csharp
using TaleWorlds.MountAndBlade;

namespace MyModule
{
    public class MyMissionBehavior : MissionBehavior
    {
        public override void OnMissionStart()
        {
            base.OnMissionStart();
            Debug.Print("Mission started!");
        }
        
        public override void OnMissionTick(float dt)
        {
            base.OnMissionTick(dt);
            // 每帧逻辑
        }
    }
}
```

### 注册行为

```csharp
protected override void OnGameStart(Game game, IGameStarter gameStarter)
{
    base.OnGameStart(game, gameStarter);
    gameStarter.AddBehavior(new MyMissionBehavior());
}
```

## Agent 基础

```csharp
// 获取所有 Agent
Mission.Current.GetAgents();

// 获取玩家 Agent
Agent playerAgent = Mission.Current.MainAgent;

// Agent 基本属性
Vec3 position = agent.Position;
float health = agent.Health;
```

## 与 v1.3.15 的差异

| 特性 | v1.3.0 | v1.3.15 |
|------|--------|---------|
| MissionBehavior | 支持 | 支持 + 更多类型 |
| Agent 组件 | 基本 | 更多组件类型 |
| Formation | 支持 | 增强的 Formation AI |

---

## 相关文档 / Related Documentation

- [v1.3.15 Mission 系统](../../v1.3.15/zh/guide/mission-system.md)
- [API 参考](../../api/mission/)
