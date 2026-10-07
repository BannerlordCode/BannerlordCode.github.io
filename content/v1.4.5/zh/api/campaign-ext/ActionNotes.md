---
title: "ActionNotes"
description: "ActionNotes 枚举：战役系统中特质经验变化与日志条目的原因分类标签，用于标记战斗、任务、争吵等行为的类型。"
---
# ActionNotes

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public enum ActionNotes`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/ActionNotes.cs`

## 概述

`ActionNotes` 是战役系统中的一个纯枚举类型，用于标记特质经验变化、角色争吵日志和声誉变化日志的"原因分类"。当战役系统对玩家角色施加特质经验变化或创建相关日志条目时，会传入一个 `ActionNotes` 值，使日志条目能够选择正确的文本描述，也使 mod 开发者能够根据原因类型进行逻辑判断。它不持有状态，也不执行任何行为——只是一个分类标签。

## 心智模型

`ActionNotes` 是一个"原因标签"枚举，回答的问题是"为什么这次特质经验会发生变化"或"这条日志条目描述的是哪类事件"。

在战役系统中，许多行为都会导致特质经验变化：战斗胜利、任务完成、部队饥饿、掠夺村庄、释放 NPC 等。`ActionNotes` 为这些行为提供了一个统一的分类体系。日志条目（如 `CharacterInsultedLogEntry`）在创建时接收一个 `ActionNotes` 值，并在生成百科全书文本时根据该值选择对应的描述文本。`TraitLevelingHelper` 在调用 `AddPlayerTraitXPAndLogEntry` 时传入不同的 `ActionNotes` 值来区分勇武、荣誉、仁慈等特质经验的来源。

对 mod 开发者而言，`ActionNotes` 的主要用途有两个方向：一是从现有日志条目中获取原因分类用于自定义逻辑判断，二是在创建自定义日志条目或调用特质经验变化方法时指定原因分类。枚举值按语义可分为四类：争吵类（Quarrel）、任务类（Quest）、战斗与行为类、以及默认值。

## 怎么用

### 怎么拿到

`ActionNotes` 是枚举类型，不需要实例化，直接通过 `ActionNotes.<值名>` 引用即可。

- 源码位置：`ActionNotes.cs:1`（命名空间声明），枚举定义从 `ActionNotes.cs:5` 开始
- 入口：枚举值 `DefaultNote` 定义在 `ActionNotes.cs:5`，最后一个值 `SiegeAftermath` 定义在 `ActionNotes.cs:32`
- 使用方式：在创建日志条目时作为构造参数传入，或在特质经验变化方法中作为原因参数传入

### 典型用法

**在创建日志条目时传入原因分类：**

```csharp
// 创建一条角色争吵日志，指定原因为领地纠纷
var logEntry = new CharacterInsultedLogEntry(hero1, hero2, null, ActionNotes.FiefQuarrel);
LogEntry.AddLogEntry(logEntry);
```

**在特质经验变化时指定原因：**

```csharp
// 模拟 TraitLevelingHelper 的内部调用模式
// 因战斗胜利获得勇武特质经验
AddPlayerTraitXPAndLogEntry(DefaultTraits.Valor, 10, ActionNotes.BattleValor, null);
```

**根据原因类型执行不同逻辑：**

```csharp
// 检查日志条目的原因分类
if (insultEntry.GetEncyclopediaText().ToString().Contains("courtship"))
{
    // 求爱相关的争吵
}
```

### 坑

- `ActionNotes` 只是一个标签，不携带任何额外数据，不要期望从中获取数值或状态信息。
- 枚举值之间是互斥的，一个日志条目只能有一个 `ActionNotes` 值。
- 新增的枚举值可能不会在现有日志条目的文本选择逻辑中被处理，需要自行添加对应的文本映射。
- `CharacterInsultedLogEntry` 的 `_gameActionNote` 字段是 private 的，mod 无法直接读取，需要通过其他方式间接判断。

## 关键成员

`ActionNotes` 包含 28 个枚举值，按功能可分为以下几类：

**默认值：**
- `DefaultNote` — 默认/无特定原因，用于没有特殊分类的普通特质经验变化。

**争吵类（Quarrel）：**
- `NoQuarrel` — 无争吵，表示某行为不会引发争吵或仇恨。
- `CourtshipQuarrel` — 求爱纠纷，因追求同一对象而引发的争吵。
- `FiefQuarrel` — 领地纠纷，因封地争端引发的争吵。
- `ValorStrategyQuarrel` — 勇武策略争吵，因战斗策略上的勇武分歧引发。
- `ResponsibilityStrategyQuarrel` — 责任策略争吵，因责任归属分歧引发。
- `CalculatingStrategyQuarrel` — 算计策略争吵，因算计策略分歧引发。
- `VengeanceQuarrel` — 复仇纠纷，因复仇行为引发。
- `DishonestBusinessQuarrel` — 欺诈商业纠纷，因不诚实商业行为引发。
- `RuthlessBusinessQuarrel` — 冷酷商业纠纷，因冷酷商业手段引发。
- `CorruptGangLeaderQuarrel` — 腐败帮派首领纠纷，因帮派首领的腐败行为引发。
- `CompetingGangLeaderQuarrel` — 竞争帮派首领纠纷，因帮派首领之间的竞争引发。
- `TroublemakerQuarrel` — 闹事者纠纷，因闹事行为引发。
- `ExtortingQuarrel` — 敲诈纠纷，因敲诈行为引发。
- `HereticQuarrel` — 异端纠纷，因异端信仰引发。
- `LandCheatingQuarrel` — 土地欺诈纠纷，因土地欺诈行为引发。

**任务类：**
- `QuestBetrayal` — 任务背叛，因背叛任务目标而产生的特质变化。
- `QuestSuccess` — 任务成功，因完成任务而获得特质经验。
- `QuestFailed` — 任务失败，因任务失败而产生特质变化。

**战斗与行为类：**
- `BattleValor` — 战斗勇武，因战斗胜利获得的勇武特质经验。
- `HostileAction` — 敌对行为，因敌对行为导致的荣誉或仁慈变化。
- `PersuadedToDefect` — 劝降成功，因说服敌人叛逃获得的算计特质经验。
- `PartyHungry` — 部队饥饿，因部队挨饿导致的慷慨特质惩罚。
- `PartyTakenCareOf` — 部队得到照顾，因善待部队获得的慷慨特质奖励。
- `VillageRaid` — 村庄掠夺，因掠夺村庄导致的仁慈特质惩罚。
- `SacrificedTroops` — 牺牲部队，因牺牲部队导致的勇武或荣誉惩罚。
- `NPCFreed` — 释放 NPC，因释放 NPC 获得的算计特质奖励。
- `SiegeAftermath` — 围城后果，围城结束后的特质经验变化。

## 真实示例

```csharp
// 示例：在 mod 中创建自定义日志条目并使用 ActionNotes 标记原因
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.LogEntries;

public class MyCampaignBehavior : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        // 注册自定义事件监听
    }

    public override void SyncData(IDataStore dataStore)
    {
    }

    // 创建一条复仇纠纷日志
    public void AddVengeanceQuarrelLog(Hero insulter, Hero insultee)
    {
        var logEntry = new CharacterInsultedLogEntry(insulter, insultee, null, ActionNotes.VengeanceQuarrel);
        LogEntry.AddLogEntry(logEntry);
    }

    // 创建一条任务成功日志
    public void AddQuestSuccessLog(Hero hero, TraitObject trait, int xp)
    {
        // 使用 TraitLevelingHelper 的模式记录特质经验变化
        // 注意：实际调用需要通过反射或扩展方法，因为 AddPlayerTraitXPAndLogEntry 是 private
        var logEntry = new PlayerReputationChangesLogEntry(hero, trait, xp, ActionNotes.QuestSuccess);
        LogEntry.AddLogEntry(logEntry);
    }
}
```

## 参见

- [CharacterInsultedLogEntry](../CharacterInsultedLogEntry) — 使用 ActionNotes 选择争吵描述的日志条目类
- [TraitLevelingHelper](../TraitLevelingHelper) — 在特质经验变化时传入 ActionNotes 的辅助类
- [PlayerReputationChangesLogEntry](../PlayerReputationChangesLogEntry) — 使用 ActionNotes 判断声誉变化原因的日志条目类

## 导航

- [本区域目录](../)
