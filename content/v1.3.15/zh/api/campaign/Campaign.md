---
title: "Campaign"
description: "Bannerlord 战役世界的全局入口：时间管理、对象管理器、任务/问题管理器、行为管理器与模型集合。"
---
# Campaign

**Namespace:** TaleWorlds.CampaignSystem  
**Module:** TaleWorlds.CampaignSystem  
**Type:** `public class Campaign : GameType`  
**Base:** `GameType`  
**File:** `TaleWorlds.CampaignSystem/Campaign.cs`

## 概述

`Campaign` 是 Bannerlord**战役地图 (Campaign Map)** 的“世界对象”。它不直接控制战斗场景，而是持有整个战役沙盒的运行时状态：

- 所有 `Hero`、`Clan`、`Kingdom`、`Settlement`、`MobileParty` 的集合入口
- 行为管理器 (`CampaignBehaviorManager`)，负责每日/每小时 tick 的 mod 逻辑
- 任务 (`QuestManager`) 与问题 (`IssueManager`) 系统
- 关系 (`CharacterRelationManager`) 与阵营 (`FactionManager`) 系统
- 模型集合 (`Models`)，封装战斗、经济、关系等算法

简言之：在战役地图里 mod 开发者几乎所有操作都要先拿到 `Campaign.Current`。

## 心智模型

把 `Campaign` 想象成**“战役世界的引擎实例”**：

- 不要自己 `new Campaign()`；游戏启动时会由 `CampaignGameStarter` 创建并启动。
- 通过 `Campaign.Current` 访问唯一实例；如果它返回 `null`，说明当前不在战役地图（例如在主菜单或自定义战斗）。
- 它更像一个**协调器/容器**：大多数“做事”的逻辑放在各个 `CampaignBehaviorBase` 子类或 `GameModel` 子类里，而不是直接写在 `Campaign` 上。
- 它通过 `CampaignTime.Now`（在 `CampaignTime` 上）暴露当前游戏时间；时间是战役推进的轴心。

## 如何访问 Campaign

```csharp
// 最典型的入口
Campaign campaign = Campaign.Current;
if (campaign == null) return; // 不在战役地图

// 通过 Campaign 拿到各种管理器
Hero mainHero = campaign.MainParty?.LeaderHero; // 或 Hero.MainHero
MobileParty mainParty = campaign.MainParty;
Clan playerClan = Clan.PlayerClan;
CampaignTime now = CampaignTime.Now;
```

## 核心属性与管理器

| 属性 | 类型 | 说明 |
|------|------|------|
| `Campaign.Current` | `Campaign` | 全局唯一实例。 |
| `MainParty` | `MobileParty` | 玩家部队；等同于 `MobileParty.MainParty`。 |
| `CampaignObjectManager` | `CampaignObjectManager` | 管理 `MBObjectBase` 派生对象（英雄、家族、王国等）的生命周期与查找。 |
| `CampaignBehaviorManager` | `ICampaignBehaviorManager` | 管理所有 `CampaignBehaviorBase` 实例；mod 注册自定义行为的地方。 |
| `QuestManager` | `QuestManager` | 追踪当前活跃任务。 |
| `IssueManager` | `IssueManager` | 追踪当前可接/进行中的问题 (Issue)。 |
| `FactionManager` | `FactionManager` | 阵营（王国、家族、帮派等）关系与状态。 |
| `CharacterRelationManager` | `CharacterRelationManager` | 英雄之间个人关系。 |
| `Models` | `GameModels` | 所有算法模型（战斗、经济、影响力、技能成长等）的集合。 |
| `SaveHandler` | `SaveHandler` | 存档/读档入口。 |
| `GameStarted` | `bool` | 战役是否已开始。 |
| `CurrentTickCount` | `int` | 当前 tick 计数。 |

## 主要方法

### `public static Campaign Current { get; }`
全局访问点。在绝大多数战役 mod 里，你写的逻辑开头是 `if (Campaign.Current == null) return;`。

```csharp
public override void RegisterEvents()
{
    CampaignEvents.DailyTickPartyEvent.AddNonSerializedListener(this, OnDailyTickParty);
}

private void OnDailyTickParty(MobileParty party)
{
    if (Campaign.Current == null) return;
    // 你的每日逻辑
}
```

### `public GameModels Models`
获取模型集合，用于读取或替换算法。例如修改影响力消耗、部队速度、技能经验公式等。

```csharp
// 注意：替换模型需要在 CampaignGameStarter 的 OnGameStart/OnGameLoaded 中进行
Campaign.Current.Models.DiplomacyModel = new MyCustomDiplomacyModel();
```

### `public CampaignObjectManager CampaignObjectManager`
访问对象管理器，用于按 ID 查找或遍历对象。

```csharp
Hero hero = Campaign.Current.CampaignObjectManager.Find<Hero>("lord_derthert");
Settlement settlement = Campaign.Current.Settlements.FirstOrDefault(s => s.IsTown);
```

### `public override void OnMissionIsStarting(string missionName, MissionInitializerRecord rec)`
战役层在任务（战斗、场景等）启动前的回调。常用于在战斗开始前根据战役状态修改队伍编制、添加 Agent 等。

```csharp
public class MyCampaignBehavior : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        CampaignEvents.OnMissionStartedEvent.AddNonSerializedListener(this, OnMissionStarted);
    }

    private void OnMissionStarted(IMission mission)
    {
        // 战斗已开始，可在这里访问 Mission 相关数据
    }
}
```

## 典型用法示例

### 示例 1：安全的 Campaign 入口封装

```csharp
public static class CampaignHelper
{
    public static Campaign ActiveCampaign => Campaign.Current;

    public static bool IsCampaignActive => Campaign.Current != null && Campaign.Current.GameStarted;
}
```

### 示例 2：在每日 tick 里遍历所有家族并打印资金

```csharp
private void OnDailyTick()
{
    if (Campaign.Current == null) return;

    foreach (Clan clan in Clan.AllClans)
    {
        if (clan.IsEliminated) continue;
        InformationManager.DisplayMessage(new InformationMessage($"{clan.Name}: {clan.Gold} gold"));
    }
}
```

### 示例 3：替换一个 GameModel

```csharp
public class MyCampaignBehavior : CampaignBehaviorBase
{
    public override void RegisterEvents() { }

    public override void SyncData(IDataStore dataStore) { }

    protected void OnGameStart(IGameStarter gameStarter)
    {
        if (gameStarter is CampaignGameStarter campaignStarter)
        {
            campaignStarter.AddModel(new MyPartySpeedModel());
        }
    }
}
```

> `Campaign.Current.Models` 在运行时可以通过反射替换，但推荐走 `CampaignGameStarter.AddModel` 注册。

## 跨版本提示

- v1.3.0：`Campaign.Current` 行为一致；`Models` 集合中的具体模型类数量较少。
- v1.4.5：`Campaign` 拆分了更多子管理器（如新增/拆分的 `CampaignInformationManager`），跨版本 mod 建议优先通过接口属性访问，而不是反射内部字段。

## 参见

- [CampaignBehaviorBase](../../campaign-ext/CampaignBehaviorBase/) — 在 Campaign 生命周期里注入自定义逻辑
- [CampaignGameStarter](../../campaign-ext/CampaignGameStarter/) — 启动时注册模型与行为
- [CampaignEvents](../../campaign-ext/CampaignEvents/) — 事件总线
- [CampaignTime](../../campaign-ext/CampaignTime/) — 战役时间
- [MobileParty](../MobileParty/) — 玩家/AI 部队
- [Hero](../Hero/) — 英雄角色
- [Settlement](../Settlement/) — 城镇/城堡/村庄
