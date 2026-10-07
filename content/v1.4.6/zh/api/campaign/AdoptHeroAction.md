---
title: "AdoptHeroAction"
description: "把一个英雄收养进玩家家族的入口：按主角性别把英雄设为主角的子女，并把 Clan 改成玩家家族。"
---
# AdoptHeroAction

**Namespace:** `TaleWorlds.CampaignSystem.Actions`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public static class AdoptHeroAction`
**Source:** `TaleWorlds.CampaignSystem/Actions/AdoptHeroAction.cs`

> 节 schema：本页采用 7 节（按出现顺序）：概述 / 心智模型 / 怎么用 / 关键成员 / 真实示例 / 参见 / 导航

## 概述

`AdoptHeroAction` 是「收养英雄」这个玩法动作的服务端入口。它只有 28 行、两个方法，做的事非常单一：把指定英雄的**父母**设成玩家主角、把**家族**设成玩家家族。

它不弹提示、不改关系、不改声望，也不触发任何 `CampaignEvent` —— 它只改写英雄的两个归属字段。所有「收养之后会发生什么」都由读这些字段的系统（对话选项、继承判定、家族树显示）自己决定。

## 心智模型

把它想成**户籍登记处**，不是「收养仪式」。

- 它只写两个字段：`Hero.Mother` / `Hero.Father`（二选一）和 `Hero.Clan`。
- 选母亲还是父亲，取决于 `Hero.MainHero.IsFemale` —— 即**玩家主角的性别**，不是被收养者的性别。
- 写完就结束，没有副作用、没有事件、没有返回值。

**关键含义**：因为只改归属，所以「收养」在游戏里**不是**一个独立状态。一个被收养的英雄在数据上就是「主角的子女 + 玩家家族成员」。任何判定「是不是主角孩子」的逻辑，读的都是这两个字段 —— 这也是为什么这个类可以只有 28 行。

## 怎么用

### 怎么拿到

静态类，直接调：

```csharp
AdoptHeroAction.Apply(someHero);
```

### 典型用法

```csharp
// 把一个英雄收养进玩家家族
Hero orphan = party.PartyHeroes.FirstOrDefault(h => h.IsOrphan);
if (orphan != null)
{
    AdoptHeroAction.Apply(orphan);
    // 现在 orphan.Mother 或 orphan.Father == Hero.MainHero
    // 且 orphan.Clan == Clan.PlayerClan
}
```

### 坑

- **它不检查任何前置条件**。重复调用、对已属于玩家家族的英雄调用、对 `null` 调用，源码里都没有守卫 —— 调用方自己负责。
- **不改关系值**。被收养者与主角的 `Relation` 不会被这个类提升，要另外调关系 API。
- **不触发事件**。如果 mod 需要在收养后做点什么（给提示、给奖励），必须自己挂事件或自己补逻辑 —— 这个类不会通知任何人。

## 关键成员

- `Apply(Hero adoptedHero)`（`AdoptHeroAction.cs:23`）—— 公开入口，直接转发给 `ApplyInternal`。
- `ApplyInternal(Hero adoptedHero)`（`AdoptHeroAction.cs:9`）—— 实际逻辑：按 `Hero.MainHero.IsFemale` 写 `Mother`（`:13`）或 `Father`（`:17`），再把 `Clan` 设为 `Clan.PlayerClan`（`:19`）。

## 真实示例

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;

public static void Adopt(Hero hero)
{
    // 入口：一个方法调用完成收养
    AdoptHeroAction.Apply(hero);

    // 验证归属已被改写
    bool isChild = (Hero.MainHero.IsFemale)
        ? hero.Mother == Hero.MainHero
        : hero.Father == Hero.MainHero;
    bool inPlayerClan = hero.Clan == Clan.PlayerClan;
}
```

## 参见

- [`AddHeroToPartyAction`](../AddHeroToPartyAction) —— 同样是把英雄塞进玩家一侧的入口，但目标是**队伍**而非家族。
- [`AddCompanionAction`](../AddCompanionAction) —— 把英雄挂进家族并设为同伴，是「收养」之外更常见的安置方式。
- [`_index`](../_index) —— `campaign` 桶全类型索引。

## 导航

- 同桶：[`../AIBehaviorData`](../AIBehaviorData) · [`../ActionNotes`](../ActionNotes) · [`../AddCompanionAction`](../AddCompanionAction) · [`../AddHeroToPartyAction`](../AddHeroToPartyAction)
- 父索引：[`../_index`](../_index)
