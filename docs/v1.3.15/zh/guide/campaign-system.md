---
title: 战役系统 / Campaign System
description: MobileParty、Kingdom、Clan、Settlement 详解 / Complete guide to MobileParty, Kingdom, Clan, Settlement
---

# 战役系统 / Campaign System

**Namespace**: TaleWorlds.CampaignSystem
**Key Classes**: `Campaign`, `CampaignGameStarter`, `MobileParty`, `Kingdom`, `Clan`, `Settlement`, `Hero`

## 概述 / Overview

Bannerlord 的战役（Campaign）是游戏的宏观层面，包含世界地图上的各种活动。你需要了解 `MobileParty`（移动队伍）、`Kingdom`（王国）、`Clan`（氏族）、`Settlement`（定居点）等核心概念。

Bannerlord's Campaign is the macro level of the game, containing various activities on the world map. You need to understand core concepts like `MobileParty` (moving parties), `Kingdom` (kingdoms), `Clan` (clans), and `Settlement` (settlements).

## 核心概念 / Core Concepts

| 概念 | 类 | 描述 |
|------|-----|------|
| 战役 | `Campaign` | 全局战役管理器 |
| 游戏启动器 | `CampaignGameStarter` | 战役初始化 |
| 移动队伍 | `MobileParty` | 地图上移动的单位（军队、商队） |
| 王国 | `Kingdom` | 政治实体 |
| 氏族 | `Clan` | 家族/派系 |
| 定居点 | `Settlement` | 城市、城堡、村庄 |
| 英雄 | `Hero` | 重要人物（玩家、NPC） |

## 目录 / Contents

1. [CampaignGameStarter](#campaigngamestarter)
2. [MobileParty 系统](#obileparty-系统)
3. [Settlement 和 Kingdom](#settlement-和-kingdom)
4. [Clan 和 Hero](#clan-和-hero)
5. [Campaign 事件](#campaign-事件)
6. [存档集成](#存档集成)
7. [相关 API](#相关-api)

---

## CampaignGameStarter

### 添加自定义行为

```csharp
public class MyCampaignBehavior : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        // 注册事件监听
        CampaignEvents.OnGameLoaded.AddNonSerializedListener(this, OnGameLoaded);
        CampaignEvents.HeroKilled.AddNonSerializedListener(this, OnHeroKilled);
    }
    
    public override void SyncData(IDataStore dataStore)
    {
        // 同步存档数据
    }
    
    private void OnGameLoaded(CampaignGameStarter starter)
    {
        // 游戏加载完成
    }
    
    private void OnHeroKilled(Hero hero, Hero killer, KillCharacterAction.KillCharacterActionDetail detail, bool showNotification)
    {
        // 英雄死亡事件
    }
}
```

### 注册行为

```csharp
// 在 SubModule 中
protected override void OnGameStart(Game game, IGameStarter gameStarter)
{
    base.OnGameStart(game, gameStarter);
    
    if (game.GameType is Campaign)
    {
        // 添加战役行为
        gameStarter.AddBehavior(new MyCampaignBehavior());
    }
}
```

### 生命周期

```
游戏开始 (Campaign)
    │
    ├─► CampaignGameStarter.Initialize()  ← 初始化
    │
    ├─► CampaignBehaviorBase.RegisterEvents() ← 注册事件
    │
    ├─► CampaignBehaviorBase.OnGameLoaded() ← 游戏加载完成
    │
    ├─► CampaignBehaviorBase.OnNewGameCreated() ← 新游戏创建
    │
    └─► CampaignBehaviorBase.SyncData() ← 存档同步
```

---

## MobileParty 系统

### MobileParty 概述

`MobileParty` 是地图上移动的单位，包括玩家军队、AI 军队、商队等。

`MobileParty` is a unit that moves on the map, including player armies, AI armies, caravans, etc.

### 创建 MobileParty

```csharp
// 创建新队伍
MobileParty newParty = MobileParty.CreateParty("MyParty", 
    new PartyTemplateLogic("my_party_template"), out bool success);

if (success)
{
    // 设置位置
    newParty.Position2D = new Vec2(x, y);
    
    // 设置成员
    newParty.AddMembers(newParty.AddedMembersToRoster(hero, 1));
    
    // 设置行李
    newParty.Party.AddItemToRoster(item, 10);
}
```

### 队伍移动

```csharp
// 设置移动目标
newParty.SetMoveGoToParty(targetSettlement);

// 停止移动
newParty.Stop();


// 队伍Ai
newParty.DefaultBehaviour = PartyAIState.PartyAIStateFlags.DoNotMakeAIOfficerRequests;
newParty.Ai.SetDoNotAdvanceEnemyLastTargetedPosition();
```

### 队伍属性

```csharp
// 成员
int memberCount = party.MemberCount;
int prisonerCount = party.PrisonerCount;

// 战力
float militaryPower = party.MilitaryPower;

// 金钱
party.PartyTradeGold = 1000;

// 速度
float speed = party.Speed;
```

---

## Settlement 和 Kingdom

### Settlement 类型

```csharp
// 获取所有定居点
List<Settlement> allSettlements = Settlement.All;

// 按类型筛选
List<Town> towns = Settlement.All.Where(s => s.IsTown).Cast<Town>().ToList();
List<Castle> castles = Settlement.All.Where(s => s.IsCastle).Cast<Castle>().ToList();
List<Village> villages = Settlement.All.Where(s => s.IsVillage).Cast<Village>().ToList();

// 查找最近的定居点
Settlement nearest = Settlement.FindNearestToPosition(position);
```

### Settlement 属性

```csharp
Town town = settlement as Town;
if (town != null)
{
    // 繁荣度
    float prosperity = townProsperity;
    
    // 防御
    int garrison = town.GarrisonParty.MemberCount;
    
    // 贸易
    float tradeBonus = town.TradeBonus;
    
    // 归属
    Kingdom owner = town.Kingdom;
}
```

### 创建新定居点

```csharp
// 创建一个新城市（通常由游戏事件触发）
// 这个功能需要深入修改游戏核心
```

### Kingdom

```csharp
// 获取所有王国
List<Kingdom> kingdoms = Kingdom.All;

// 创建新王国
Kingdom newKingdom = Kingdom.CreateKingdom("MyKingdom");

// 政策
newKingdom.AddPolicy("my_policy");

// 宣战/停战
newKingdom.DeclareWar(otherKingdom);
newKingdom.MakePeace(otherKingdom);
```

---

## Clan 和 Hero

### Clan

```csharp
// 获取玩家的氏族
Clan playerClan = Clan.PlayerClan;

// 影响力
float influence = playerClan.Influence;

// 成员
Hero leader = playerClan.Leader;
List<Hero> members = playerClan.Heroes;

// 关系
float relation = playerClan.GetRelationWithClan(otherClan);
```

### Hero

```csharp
// 获取玩家英雄
Hero playerHero = Hero.MainHero;

// 属性
int level = playerHero.Level;
CharacterObject character = playerHero.CharacterObject;

// 技能
SkillObject skill = Skills.All.FirstOrDefault(s => s.Name == "OneHanded");
int skillValue = playerHero.GetSkillValue(skill);

// 物品
ItemObject weapon = playerHero.Equipment[EquipmentIndex.WeaponItemPrimarySlot];

// 修改英雄
playerHero.AddSkillXp("OneHanded", 100);
playerHero.ChangeHeroGold(500);
```

### 创建新 Hero

```csharp
// 创建新英雄
Hero newHero = Hero.CreateHero("Name", culture, gender);

// 设置属性
newHero.Level = 1;
newHero.HeroDeveloper.DevelopCharacterStats(newCharacterObject, 10, false);

// 添加到氏族
newHero.Clan = playerClan;
```

---

## Campaign 事件

### 常用事件

```csharp
public override void RegisterEvents()
{
    // 单位相关
    CampaignEvents.OnUnitJoinedParty.AddNonSerializedListener(this, OnUnitJoined);
    CampaignEvents.OnUnitLeftParty.AddNonSerializedListener(this, OnUnitLeft);
    
    // 战斗相关
    CampaignEvents.BattleEnded.AddNonSerializedListener(this, OnBattleEnded);
    CampaignEvents.MobilePartyCreated.AddNonSerializedListener(this, OnPartyCreated);
    
    // 英雄相关
    CampaignEvents.HeroKilled.AddNonSerializedListener(this, OnHeroKilled);
    CampaignEvents.HeroLevelledUp.AddNonSerializedListener(this, OnHeroLevelled);
    
    // 贸易相关
    CampaignEvents.PlayerTradeGoodsPurchased.AddNonSerializedListener(this, OnTrade);
    
    // 定时触发
    CampaignEvents.DailyTickParty.AddNonSerializedListener(this, OnDailyTick);
    CampaignEvents.WeeklyTick.AddNonSerializedListener(this, OnWeeklyTick);
}

private void OnBattleEnded(MapEvent mapEvent, bool isPlayerWinner)
{
    // 战斗结束
}

private void OnHeroKilled(Hero hero, Hero killer, ...)
{
    // 英雄死亡
}
```

### CampaignEventType 列表

| 事件 | 说明 |
|------|------|
| `OnGameLoaded` | 游戏加载完成 |
| `OnNewGameCreated` | 新游戏创建 |
| `OnUnitJoinedParty` | 单位加入队伍 |
| `OnUnitLeftParty` | 单位离开队伍 |
| `BattleEnded` | 战斗结束 |
| `MobilePartyCreated` | 队伍创建 |
| `HeroKilled` | 英雄死亡 |
| `HeroLevelledUp` | 英雄升级 |
| `DailyTickParty` | 每日队伍更新 |
| `WeeklyTick` | 每周更新 |

---

## 存档集成

### 确保数据可保存

```csharp
[SaveableClass(1)]
public class MyCampaignData : CampaignBehaviorBase
{
    [SaveableField(1)]
    private int _myCustomValue;
    
    [SaveableField(2)]
    private string _myCustomString;
    
    public override void SyncData(IDataStore dataStore)
    {
        // 手动同步（v1.3.0 方式）
        dataStore.SyncData("MyCustomValue", ref _myCustomValue);
        dataStore.SyncData("MyCustomString", ref _myCustomString);
    }
}
```

### v1.3.15 SaveSystem 集成

```csharp
// 在 v1.3.15 中，更推荐使用 TaleWorlds.SaveSystem
[SaveableClass(1, 100)]
public class MySaveableData
{
    [SaveableField(1)]
    public int Score;
}
```

---

## 相关 API / Related API

- [Campaign API](../api/campaign-ext/Campaign.md)
- [MobileParty API](../api/campaign/MobileParty.md)
- [Kingdom API](../api/campaign/Kingdom.md)
- [Clan API](../api/campaign/Clan.md)
- [Settlement API](../api/campaign-ext/Settlement.md)

---

## 下一节 / Next Section

- [存档系统](./save-system-guide.md) - 确保你的数据正确保存
- [任务系统](./mission-system.md) - 自定义战斗
