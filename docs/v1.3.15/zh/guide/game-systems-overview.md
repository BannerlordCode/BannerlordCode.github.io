---
title: 游戏系统概述 / Game Systems Overview
description: 了解 Bannerlord 中哪些内容可以自定义 / Learn what can be customized in Bannerlord
---

# 游戏系统概述 / Game Systems Overview

## 概述 / Overview

Bannerlord 提供了丰富的系统供 Mod 开发者自定义。了解这些系统可以帮助你规划 Mod 的功能范围。

Bannerlord provides rich systems for mod developers to customize. Understanding these systems helps you plan your mod's feature scope.

## 可自定义的系统 / Customizable Systems

| 系统 | 可自定义程度 | 说明 |
|------|-------------|------|
| UI/界面 | ★★★★★ | 完全可自定义，创建新屏幕、修改现有UI |
| 任务/战斗 | ★★★★☆ | 添加新 MissionBehavior，自定义战斗逻辑 |
| 战役/世界 | ★★★★☆ | 修改世界状态、添加新事件 |
| 物品/装备 | ★★★★☆ | 添加新物品、修改属性 |
| 角色/AI | ★★★☆☆ | 添加新角色类型，修改AI行为 |
| 存档 | ★★★☆☆ | 自定义存档格式，处理版本迁移 |
| 网络/多人 | ★★☆☆☆ | 有限的 multiplayer 支持 |

## 系统入口点 / System Entry Points

### SubModule 入口

```csharp
public class MySubModule : MBSubModuleBase
{
    protected override void OnSubModuleLoad()
    {
        // 模块加载时调用
    }
    
    protected override void OnGameStart(Game game, IGameStarter gameStarter)
    {
        // 游戏开始时调用
        // 添加 MissionBehavior
        // 添加 CampaignBehavior
    }
}
```

### Mission 入口

```csharp
public class MyMissionBehavior : MissionBehavior
{
    public override void OnMissionStart()
    {
        // 任务开始
    }
    
    public override void OnAgentCreated(Agent agent)
    {
        // Agent 创建
    }
}
```

### Campaign 入口

```csharp
public class MyCampaignBehavior : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        // 注册事件
        CampaignEvents.OnGameLoaded.AddNonSerializedListener(this, OnGameLoaded);
    }
    
    public override void SyncData(IDataStore dataStore)
    {
        // 存档同步
    }
}
```

## 系统架构图 / System Architecture

```
MBSubModuleBase
    │
    ├─► TaleWorlds.MountAndBlade
    │       │
    │       ├─► Mission
    │       │       ├─► MissionBehavior (战斗逻辑)
    │       │       ├─► Agent (单位)
    │       │       ├─► Formation (阵型)
    │       │       └─► Team (队伍)
    │       │
    │       └─► Campaign
    │               ├─► CampaignBehavior (世界逻辑)
    │               ├─► MobileParty (移动队伍)
    │               ├─► Kingdom (王国)
    │               ├─► Clan (氏族)
    │               └─► Settlement (定居点)
    │
    ├─► TaleWorlds.SaveSystem (v1.3.15)
    │       └─► 存档管理
    │
    └─► TaleWorlds.Gauntlet
            └─► UI (界面)
```

## 限制 / Limitations

1. **不要修改 Native 模块** - 位于游戏核心
2. **多人同步有限** - Multiplayer 支持不完整
3. **存档兼容性** - v1.3.0 和 v1.3.15 不兼容
4. **性能考虑** - 避免过度修改每帧逻辑

---

## 相关文档 / Related Documentation

- [任务系统](./mission-system.md)
- [战役系统](./campaign-system.md)
- [架构文档](../architecture/)

---

## 下一节 / Next Section

- [故障排除](./troubleshooting.md) - 解决问题
- [常见模式](./common-patterns.md) - 最佳实践
