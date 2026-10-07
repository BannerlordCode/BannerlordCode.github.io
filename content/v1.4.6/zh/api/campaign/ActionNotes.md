---
title: "ActionNotes"
description: "AI 与同伴/其他角色互动时的备注标签库，决定 AI 在地图上遇到某人时挑哪句话，共 28 个取值"
---
# ActionNotes

**Namespace:** `TaleWorlds.CampaignSystem`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public enum ActionNotes`
**Source:** `TaleWorlds.CampaignSystem/ActionNotes.cs`

> 节 schema：本页采用 7 节（按出现顺序）：概述 / 心智模型 / 怎么用 / 关键成员 / 真实示例 / 参见 / 导航

## 概述

`ActionNotes` 是一个**纯标签枚举**，充当 AI 互动对话的「备注库」。当 AI 角色在地图上遇到另一个角色（或同伴系统处理一次互动）时，系统会根据双方之间的恩怨、任务经历、战斗经历等情境，从这 28 个取值中挑一个作为「备注」，再据此选择对应的对话文本。

它没有任何方法或字段——全部内容就是 28 个枚举值，按语义可分为四类：**争吵类（Quarrel）**、**任务类（Quest）**、**行为与状态类**、**默认值**。

## 心智模型

把它想成**对话系统的「情绪标签」**：两个角色见面时，AI 不是随机说话，而是先看双方之间挂着哪些「备注」——

- 吵过架？（各种 `…Quarrel`）
- 一起做过任务，成了还是砸了？（`QuestSuccess` / `QuestFailed` / `QuestBetrayal`）
- 有过战斗、敌对、被照顾等经历？（`BattleValor` / `HostileAction` / `PartyTakenCareOf`…）
- 什么都没有？（`DefaultNote`）

每个取值对应游戏本地化的某句对话。Mod 开发者一般**不需要直接消费**这个枚举——它由战役 AI 内部使用；但理解它有助于读懂 AI 互动事件里传出的备注参数。

## 怎么用

### 怎么拿到

- 由战役 AI 系统在角色互动时内部产生并传递；
- 作为参数出现在 AI 互动相关的事件/方法签名中，直接读取即可。

### 典型用法

```csharp
// 读取互动备注并分支处理
switch (note)
{
    case ActionNotes.QuestSuccess:
        // 双方曾成功合作完成任务
        break;
    case ActionNotes.HostileAction:
        // 双方有过敌对行为
        break;
    case ActionNotes.DefaultNote:
        // 无特殊恩怨
        break;
}
```

### 坑

- 枚举值**没有显式数值赋值**，序号从 0 开始按声明顺序排列——**不要硬编码数字**，也不要序列化后跨版本依赖序号；
- 这是 v1.4.6 的实际取值集合（28 个），与旧版本可能不同，跨版本 Mod 需注意。

## 关键成员

**默认值**

- `DefaultNote`（`ActionNotes.cs:9`）—— 默认备注，双方无特殊恩怨时的通用对话。

**争吵类（Quarrel）**

- `NoQuarrel`（`ActionNotes.cs:11`）—— 明确标记「无争吵」，关系正常。
- `CourtshipQuarrel`（`ActionNotes.cs:13`）—— 因求爱/情场纠纷引发的争吵。
- `FiefQuarrel`（`ActionNotes.cs:15`）—— 因封地分配引发的争吵。
- `ValorStrategyQuarrel`（`ActionNotes.cs:17`）—— 因「英勇」战略分歧引发的争吵。
- `ResponsibilityStrategyQuarrel`（`ActionNotes.cs:19`）—— 因「责任」战略分歧引发的争吵。
- `CalculatingStrategyQuarrel`（`ActionNotes.cs:21`）—— 因「算计」战略分歧引发的争吵。
- `VengeanceQuarrel`（`ActionNotes.cs:23`）—— 因复仇引发的争吵。
- `DishonestBusinessQuarrel`（`ActionNotes.cs:25`）—— 因不诚实交易引发的争吵。
- `RuthlessBusinessQuarrel`（`ActionNotes.cs:27`）—— 因无情交易引发的争吵。
- `CorruptGangLeaderQuarrel`（`ActionNotes.cs:29`）—— 与腐败帮派首领的冲突。
- `CompetingGangLeaderQuarrel`（`ActionNotes.cs:31`）—— 与竞争帮派首领的冲突。
- `TroublemakerQuarrel`（`ActionNotes.cs:33`）—— 因对方惹事引发的争吵。
- `ExtortingQuarrel`（`ActionNotes.cs:35`）—— 因敲诈引发的争吵。
- `HereticQuarrel`（`ActionNotes.cs:37`）—— 因异端/信仰问题引发的争吵。
- `LandCheatingQuarrel`（`ActionNotes.cs:39`）—— 因土地欺诈引发的争吵。

**任务类（Quest）**

- `QuestBetrayal`（`ActionNotes.cs:41`）—— 任务中遭到背叛。
- `QuestSuccess`（`ActionNotes.cs:43`）—— 曾成功合作完成任务。
- `QuestFailed`（`ActionNotes.cs:45`）—— 曾合作任务但失败。

**行为与状态类**

- `BattleValor`（`ActionNotes.cs:47`）—— 战斗中表现英勇。
- `HostileAction`（`ActionNotes.cs:49`）—— 曾对对方采取敌对行为。
- `PersuadedToDefect`（`ActionNotes.cs:51`）—— 曾被说服叛变/倒戈。
- `PartyHungry`（`ActionNotes.cs:53`）—— 部队处于饥饿状态。
- `PartyTakenCareOf`（`ActionNotes.cs:55`）—— 部队曾得到照顾。
- `VillageRaid`（`ActionNotes.cs:57`）—— 村庄曾遭劫掠。
- `SacrificedTroops`（`ActionNotes.cs:59`）—— 曾牺牲部队。
- `NPCFreed`（`ActionNotes.cs:61`）—— NPC 曾被释放。
- `SiegeAftermath`（`ActionNotes.cs:63`）—— 围城战之后的相关对话。

## 真实示例

```csharp
// 场景：在 AI 互动事件中根据备注过滤反应
public void OnHeroEncountered(Hero hero, ActionNotes note)
{
    if (note == ActionNotes.QuestSuccess || note == ActionNotes.QuestFailed)
    {
        // 双方有共同任务经历，触发旧友对话
        TriggerSharedQuestDialog(hero);
    }
    else if (note == ActionNotes.HostileAction || note is >= ActionNotes.CourtshipQuarrel and <= ActionNotes.LandCheatingQuarrel)
    {
        // 有过敌对或争吵经历，触发敌对对话
        TriggerHostileDialog(hero);
    }
}
```

## 参见

- [Hero](../Hero) —— 备注所描述的对象（角色/英雄）
- [Campaign](../Campaign) —— 战役系统总览，AI 互动的宿主系统

## 导航

- 返回 [campaign 桶索引](../_index)
- 同批页面：[AIBehaviorData](../AIBehaviorData) / [AddCompanionAction](../AddCompanionAction) / [AddHeroToPartyAction](../AddHeroToPartyAction)
