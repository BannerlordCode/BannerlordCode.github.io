---
title: "BackstoryCampaignBehavior"
description: "只在 OnNewGameCreatedEvent 跑一次的世界背景行为：把七条官方前置历史（贵族口角、领地易主、谋杀、家族世仇）写进日志并施加初始关系差。不监听任何其它事件，SyncData 为空，读档不会重跑。"
---

# BackstoryCampaignBehavior

**Namespace:** `TaleWorlds.CampaignSystem.CampaignBehaviors`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class BackstoryCampaignBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**Source:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CampaignBehaviors/BackstoryCampaignBehavior.cs`

## 概述

`BackstoryCampaignBehavior` 是 CampaignSystem 里**最短、也最容易被误解的一个行为**：62 行源码，只订阅一个事件，只做一件事——**在 `OnNewGameCreated` 里把官方写死的世界史一次性铺进战役**。

它的全部工作可以概括成七条历史事件：

| 时间戳 | 内容 | 施加的初始关系 |
| --- | --- | --- |
| `CampaignTime.Years(1075) + Weeks(3) + Days(2)` | `lord_1_7` 与 `lord_1_1` 口角（`CharacterInsultedLogEntry` / `ActionNotes.ValorStrategyQuarrel`） | **-50**（`ChangeRelationAction.ApplyRelationChangeBetweenHeroes(..., -50, showQuickNotification: false)`） |
| `CampaignTime.Years(1080) + Weeks(4) + Days(2)` | `lord_4_1` 压过 `lord_4_16` 的影响力（`OverruleInfluenceLogEntry`） | 无 |
| 同一时刻 | `lord_4_16` 宣称 `town_V6`（`SettlementClaimedLogEntry`） | `ClaimSettlementAction.Apply(heroObject4, settlement)` |
| 同一时刻 | `dead_lord_2_2` 被 `lord_2_1` 谋杀（`CharacterKilledLogEntry` / `KillCharacterActionDetail.Murdered`） | 若死者家族不是地图派系且有领袖，**-75** |
| 同一时刻 | `dead_lord_3_1` 被 `lord_3_5` 谋杀 | 视死者家族逐个加口角日志，见下 |
| 同上，逐个 | `nimr.Clan.Heroes` 里所有「领主 + 年龄 < 中年 + 男性 + 仁慈 < 1」的英雄，逐个加 `CharacterInsultedLogEntry` / `ActionNotes.VengeanceQuarrel` | 每条都带同样的时间戳 |
| 同上，逐个 | `Hero.DeadOrDisabledHeroes` 里同家族的同类英雄，逐个加同样的口角日志 | — |
| 同上 | `nimr.Clan.Leader != null` 时，领袖与 `lord_3_5` 之间 **-75** | |

在体系里它承担的是**「给战役一个起点」**这一环：游戏开局时这些关系差已经是既成事实，官方只是把「为什么」补进日志里，让百科与对话能引用。

## 心智模型

把它当成**「一次性初始化的历史脚本」**就对了。

- **它只订阅 `OnNewGameCreatedEvent`。** `RegisterEvents()` 里只有一行：`CampaignEvents.OnNewGameCreatedEvent.AddNonSerializedListener(this, OnNewGameCreated);`。**没有任何其它事件订阅**——没有 tick，没有死亡事件，没有存档事件。
- **`OnNewGameCreated(CampaignGameStarter)` 的参数完全不用。** 它不是去修改 game starter 的配置，而是借这个事件触发点执行世界史脚本。**这也意味着你的 mod 如果只是想在开局时做点什么，订阅同一个事件就够了，不需要复制这个行为。**
- **`SyncData` 是空的，而且这是对的。** 因为所有写入都通过官方 Action（日志、关系、领地），**这些状态本来就由被改的对象自己存档**。行为本身不需要存任何东西。
- **读档不会重跑。** `OnNewGameCreatedEvent` 只在**新开战役**时派发。**读一个已有存档时这些关系差早已被存档，不需要也不能再补。**
- **所有英雄都通过 `Game.Current.ObjectManager.GetObject<CharacterObject>("lord_x_y").HeroObject` 解析。** `lord_1_7`、`lord_1_1`、`lord_4_1`、`lord_4_16`、`lord_2_1`、`dead_lord_2_2`、`lord_3_5`、`dead_lord_3_1` —— **八个硬编码 id，其中两个是 `dead_lord_*`**。`Game.Current.ObjectManager` 为 null 或某个 id 不存在时直接 NRE。**换掉这些英雄的 id 就等于删掉整段历史。**
- **`town_V6` 也是硬编码的。** `Game.Current.ObjectManager.GetObject<Settlement>("town_V6")`——帝国腹地的一座城镇。
- **`dead_lord_3_1` 的家族处理是两段循环，不是一段。** 先遍历 `nimr.Clan.Heroes`（活着的家族英雄），再遍历 `Hero.DeadOrDisabledHeroes.Where(x => x.Clan == nimr.Clan)`（已死或已废的同家族英雄）。两段用的是同一套谓词与同一条日志。**谓词是四条的与：`hero.IsLord && hero.Age < Campaign.Current.Models.AgeModel.MiddleAdultHoodAge && !hero.IsFemale && hero.GetTraitLevel(DefaultTraits.Mercy) < 1`。**
- **`showQuickNotification: false` 是刻意的。** 两处 `ChangeRelationAction.ApplyRelationChangeBetweenHeroes` 都传了这个参数——**开局时刷一串关系变动提示会很吵**，官方选择只写日志。
- **它不调用任何对话、不创建任何任务、不碰军团。** 62 行里没有一行与 UI 有关。

### 那八个硬编码 id 的角色

| id | 角色 |
| --- | --- |
| `lord_1_7` | 帝国贵族，口角发起方（`ValorStrategyQuarrel`） |
| `lord_1_1` | 帝国贵族，口角对象 |
| `lord_4_1` | 压过别人影响力的贵族 |
| `lord_4_16` | 影响力被压过的一方；**同时宣称 `town_V6`** |
| `lord_2_1` | 谋杀 `dead_lord_2_2` 的凶手 |
| `dead_lord_2_2` | 被谋杀的 `dead_lord_` 家族英雄 |
| `lord_3_5` | 谋杀 `dead_lord_3_1` 的凶手 |
| `dead_lord_3_1` | 引发全家族复仇口角的死者 |

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `RegisterEvents()` | `public override void RegisterEvents()` | **全类唯一的订阅点**（`:12-15`）：`CampaignEvents.OnNewGameCreatedEvent.AddNonSerializedListener(this, OnNewGameCreated)`。**没有第二条订阅**——不监听 tick、不监听角色死亡、不监听存档。**所以它只在新开战役时跑一次，读档永不重跑。** |
| `OnNewGameCreated(CampaignGameStarter campaignGameStarter)` | `public void OnNewGameCreated(CampaignGameStarter campaignGameStarter)` | 世界史脚本本体（`:21-61`），58 行、七个阶段。**`campaignGameStarter` 参数完全未被使用**——这个回调只是被借来当「开局时刻」的钩子。内部按顺序写 4 条硬编码历史 + 2 段家族循环 + 1 次领袖关系差。 |
| `SyncData(IDataStore dataStore)` | `public override void SyncData(IDataStore dataStore)` | **空实现**（`:17-19`）。正确：所有写入都通过 `LogEntry.AddLogEntry` / `ChangeRelationAction` / `ClaimSettlementAction` 这类官方 Action，**产生的状态由被改对象自己存档**，行为不需要重复持久化。 |

## 真实示例

读取同一批历史英雄，做你自己的开局初始化（形状照 `OnNewGameCreated` 的 `ObjectManager` 解析）：

```csharp
using TaleWorlds.CampaignSystem;

public static string DescribeBackstoryActors()
{
    if (Game.Current == null || Game.Current.ObjectManager == null)
    {
        return "";
    }

    string[] ids = new string[] { "lord_1_7", "lord_1_1", "lord_4_1", "lord_4_16", "lord_2_1", "dead_lord_2_2", "lord_3_5", "dead_lord_3_1" };
    for (int i = 0; i < ids.Length; i++)
    {
        CharacterObject character = Game.Current.ObjectManager.GetObject<CharacterObject>(ids[i]);
        if (character != null && character.HeroObject != null)
        {
            Debug.Print(ids[i] + " = " + character.HeroObject.Name.ToString()
                + " clan=" + character.HeroObject.Clan.Name.ToString(), 0);
        }
    }

    return "ok";
}
```

在同一个事件里追加你自己的历史（形状照官方写关系差那一行）：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;
using TaleWorlds.CampaignSystem.CampaignBehaviors;
using TaleWorlds.CampaignSystem.LogEntries;

public class MyBackstoryBehavior : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        CampaignEvents.OnNewGameCreatedEvent.AddNonSerializedListener(this, OnNewGameCreated);
    }

    private void OnNewGameCreated(CampaignGameStarter starter)
    {
        Hero first = Game.Current.ObjectManager.GetObject<CharacterObject>("lord_2_1").HeroObject;
        Hero second = Game.Current.ObjectManager.GetObject<CharacterObject>("lord_2_3").HeroObject;
        if (first == null || second == null)
        {
            return;
        }

        LogEntry.AddLogEntry(
            new CharacterInsultedLogEntry(first, second, null, ActionNotes.ValorStrategyQuarrel),
            CampaignTime.Years(1076f) + CampaignTime.Weeks(1f));
        ChangeRelationAction.ApplyRelationChangeBetweenHeroes(first, second, -30, showQuickNotification: false);
    }

    public override void SyncData(IDataStore dataStore)
    {
    }
}
```

复刻官方那段「年轻男领主复仇口角」的两段循环（这是本行为最值得抄的一段模式）：

```csharp
using System.Linq;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.CharacterDevelopment;
using TaleWorlds.CampaignSystem.LogEntries;

public static int SeedVengeanceQuarrels(Hero avenger, Hero victim, CampaignTime when)
{
    if (avenger == null || victim == null || victim.Clan == null || Campaign.Current == null)
    {
        return 0;
    }

    Clan clan = victim.Clan;
    float middleAge = Campaign.Current.Models.AgeModel.MiddleAdultHoodAge;
    int written = 0;

    foreach (Hero hero in clan.Heroes)
    {
        if (hero.IsLord && hero.Age < middleAge && !hero.IsFemale && hero.GetTraitLevel(DefaultTraits.Mercy) < 1)
        {
            LogEntry.AddLogEntry(
                new CharacterInsultedLogEntry(hero, avenger, victim.CharacterObject, ActionNotes.VengeanceQuarrel), when);
            written++;
        }
    }

    foreach (Hero hero in Hero.DeadOrDisabledHeroes.Where(x => x.Clan == clan))
    {
        if (hero.IsLord && hero.Age < middleAge && !hero.IsFemale && hero.GetTraitLevel(DefaultTraits.Mercy) < 1)
        {
            LogEntry.AddLogEntry(
                new CharacterInsultedLogEntry(hero, avenger, victim.CharacterObject, ActionNotes.VengeanceQuarrel), when);
            written++;
        }
    }

    return written;
}
```

检查某个 id 的城镇是否存在（官方那一行 `GetObject<Settlement>("town_V6")` 的安全版本）：

```csharp
using TaleWorlds.CampaignSystem;

public static string DescribeV6()
{
    if (Game.Current == null || Game.Current.ObjectManager == null)
    {
        return "";
    }

    Settlement townV6 = Game.Current.ObjectManager.GetObject<Settlement>("town_V6");
    if (townV6 == null)
    {
        return "town_V6 missing";
    }

    return "town_V6 owner=" + (townV6.Owner != null ? townV6.Owner.Name.ToString() : "none");
}
```

## 风险与边界

- **只在 `OnNewGameCreatedEvent` 触发。** 读档不会重跑，**所以不要指望它来「修复」一个已经被玩坏的存档**。想在读档时补东西必须订阅 `OnGameLoadFinishedEvent`。
- **`campaignGameStarter` 参数没用。** 这不是遗漏——回调只是被借来当「开局时刻」的钩子。**如果你的 mod 只需要开局时机，订阅同一个事件就够，不需要继承或复制这个行为。**
- **八个英雄 id + 一个城镇 id 全部硬编码。** `lord_1_7`、`lord_1_1`、`lord_4_1`、`lord_4_16`、`lord_2_1`、`dead_lord_2_2`、`lord_3_5`、`dead_lord_3_1`、`town_V6`。**任何一个 id 在你的模组组合里不存在，`Game.Current.ObjectManager.GetObject<CharacterObject>(...)` 返回 null，紧跟的 `.HeroObject` 就 NRE**——而且是**开局瞬间崩**，玩家什么都来不及做。删英雄是最容易踩的坑。
- **依赖 `Game.Current.ObjectManager` 而不是 `Campaign.Current.ObjectManager`。** 前者是 `TaleWorlds.Core.Game` 上的全局对象管理器，在模块加载早期就可用；后者需要战役已创建。**这里用 `Game.Current` 是对的，因为这个事件发生在战役对象齐备之前或之时。**
- **依赖 `Campaign.Current.Models.AgeModel.MiddleAdultHoodAge`。** 年龄阈值来自可替换的模型，**换掉 AgeModel 就会改变「哪些英雄算年轻男领主」**，从而改变口角日志的数量。
- **`Hero.DeadOrDisabledHeroes.Where(x => x.Clan == nimr.Clan)` 遍历的是全英雄死亡列表。** 这是一个全表 LINQ 过滤，开局时数据量不大，但**它在每局新战役都会跑一次**，mod 加大英雄数量时要留意。
- **`ChangeRelationAction` 两处都传了 `showQuickNotification: false`。** 这是刻意压掉开局的关系变动提示。**你自己抄这段时如果不传这个参数，开局会连着弹两条快讯。**
- **`ClaimSettlementAction.Apply(heroObject4, settlement)` 会真的易主 `town_V6`。** 这不是日志记录，**是真的把城镇所有权改了**。城镇归属会影响税收、防守、AI 行为。
- **`dead_lord_2_2` 的关系差有条件。** `if (!heroObject6.Clan.IsMapFaction && heroObject6.Clan.Leader != null)` 才施加 -75。**如果死者家族已经是地图派系，这段关系差就不存在**——所以不同存档（家族是否已加入王国）里，`lord_2_1` 与该家族领袖的初始关系可能不同。
- **`SyncData` 为空是安全的，因为写入全部走官方 Action。** 但**如果你在派生类里加字段，就必须自己写进 `SyncData`**，否则读档后是默认值。
- **行为本身无状态、无缓存、无静态字段。** 58 行里没有一行持有任何东西。**想扩展只能派生并覆写 `RegisterEvents` 与 `OnNewGameCreated`——但两个都不是 `virtual`，只能 `new` 一个同名方法再自己订阅事件。**

## 跨版本提示

`bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CampaignBehaviors/BackstoryCampaignBehavior.cs` 是 62 行原始源码。跨版本比对时盯五点：那九个硬编码 id 是否变过（尤其 `town_V6`）、`-50` 与 `-75` 两个关系系数、`CampaignTime.Years(1075)` 与 `Years(1080)` 两个时间锚、复仇口角谓词里的四条条件、以及**是否仍然只订阅 `OnNewGameCreatedEvent`**（若某版本加了 `OnGameLoadFinished` 订阅，本页「读档不会重跑」的结论就要改）。**时间锚是版本敏感的**：改了它，同一个存档里官方历史的相对顺序不变，但绝对日期会漂。

## 依赖关系

- 官方注册点：`SandBoxManager.cs:33` 的 `gameStarter.AddBehavior(new BackstoryCampaignBehavior());`，是 `SandBoxManager.Initialize` 里注册的第三个行为
- 基类：[CampaignBehaviorBase](../CampaignBehaviorBase) 提供 `RegisterEvents` / `SyncData` 两个必须覆写的钩子，以及无参构造
- 事件：[CampaignEvents](../CampaignEvents) 的 `OnNewGameCreatedEvent`，派发方是 `CampaignEventDispatcher`；`AddNonSerializedListener` 意味着事件句柄不进存档
- 对象解析：`Game.Current.ObjectManager`（`TaleWorlds.Core` 的 `Game` 单例）上的 `GetObject<CharacterObject>` 与 `GetObject<Settlement>`——九个硬编码 id 全走这条路
- 日志侧：[LogEntry](../LogEntry) 的 `AddLogEntry(LogEntry, CampaignTime)`，以及 `CharacterInsultedLogEntry` / `OverruleInfluenceLogEntry` / `SettlementClaimedLogEntry` / `CharacterKilledLogEntry` 与 `ActionNotes`
- 关系与领地：[ChangeRelationAction](../../campaign-ext/ChangeRelationAction) 的 `ApplyRelationChangeBetweenHeroes` 与 `ClaimSettlementAction.Apply`；前者通过 [Hero](../Hero) 的关系链，后者改 [Settlement](../Settlement) 的 `OwnerClan`
- 年龄模型：[AgeModel](../AgeModel) 的 `MiddleAdultHoodAge`；特质侧是 [DefaultTraits](../DefaultTraits) 的 `Mercy`
- 桶首页：[campaign API 分区](../)
