---
title: Campaign 系统基础 / Campaign System Basics
description: v1.3.0 MobileParty、Kingdom 入门 / v1.3.0 MobileParty, Kingdom introduction
---

# Campaign 系统基础 / Campaign System Basics

**v1.3.0 版本**

> 注意：本页面介绍 v1.3.0 的 Campaign 系统基础。v1.3.15 有更多功能。如需完整内容，请查看 [v1.3.15 Campaign 系统](../../v1.3.15/zh/guide/campaign-system.md)。

## 概述 / Overview

Campaign 是 Bannerlord 的世界地图/宏观层面系统。在 v1.3.0 中，Campaign 系统已经相当完善。

Campaign is Bannerlord's world map/macro-level system. In v1.3.0, the Campaign system is already quite complete.

## CampaignBehavior

### 基本结构

```csharp
using TaleWorlds.CampaignSystem;

namespace MyModule
{
    public class MyCampaignBehavior : CampaignBehaviorBase
    {
        public override void RegisterEvents()
        {
            CampaignEvents.OnGameLoaded.AddNonSerializedListener(this, OnGameLoaded);
        }
        
        private void OnGameLoaded(CampaignGameStarter starter)
        {
            Debug.Print("Game loaded!");
        }
        
        public override void SyncData(IDataStore dataStore)
        {
            // 存档同步
        }
    }
}
```

### 注册行为

```csharp
if (game.GameType is Campaign)
{
    gameStarter.AddBehavior(new MyCampaignBehavior());
}
```

## MobileParty

```csharp
// 获取玩家队伍
MobileParty playerParty = MobileParty.MainParty;

// 队伍位置
Vec2 position = playerParty.Position2D;

// 队伍成员
int memberCount = playerParty.MemberCount;
```

## Settlement

```csharp
// 获取所有定居点
List<Settlement> settlements = Settlement.All;

// 查找最近的城镇
Town nearestTown = Settlement.FindNearestTown(position);
```

## 与 v1.3.15 的差异

| 特性 | v1.3.0 | v1.3.15 |
|------|--------|---------|
| CampaignBehavior | 支持 | 支持 |
| 存档方式 | IDataStore | TaleWorlds.SaveSystem |
| 事件系统 | CampaignEvents | CampaignEvents (相同) |

---

## 相关文档 / Related Documentation

- [v1.3.15 Campaign 系统](../../v1.3.15/zh/guide/campaign-system.md)
- [API 参考](../../api/campaign/)
