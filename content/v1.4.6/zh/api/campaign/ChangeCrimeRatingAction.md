---
title: "ChangeCrimeRatingAction"
description: "增减某个阵营对玩家犯罪评级的 Campaign Action 静态类，单入口 Apply 接受犯罪评级增量。"
---
# ChangeCrimeRatingAction

**Namespace:** `TaleWorlds.CampaignSystem.Actions`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public static class ChangeCrimeRatingAction`
**Source:** `TaleWorlds.CampaignSystem/Actions/ChangeCrimeRatingAction.cs`

> 节 schema：本页采用 7 节（按出现顺序）：概述 / 心智模型 / 怎么用 / 关键成员 / 真实示例 / 参见 / 导航

## 概述

`ChangeCrimeRatingAction` 是调整「某个阵营对你（玩家）的犯罪评级」的唯一入口。注意它不是「设置犯罪值」，而是「加上一个增量」：签名里的参数叫 `deltaCrimeRating`，是变化量而不是目标值。

类是 `static class`（`ChangeCrimeRatingAction.cs:9`），无实例、无状态。整个对外 API 只有一个方法：

```csharp
public static void Apply(IFaction faction, float deltaCrimeRating, bool showNotification = true)
```

第一个参数是 `IFaction` 接口而不是 `Kingdom` 或 `Clan`——意味着王国、家族等任何实现了势力接口的对象都可以是「记恨你」的主体。

## 心智模型

把犯罪评级想成**每个阵营各自持有的一张「通缉分」记分牌**，牌面数字越高，你在这个阵营眼里越危险。这个 Action 做的事情是：找到 `faction` 的那张牌，把牌面数字加上 `deltaCrimeRating`。

由此推出几个必须记住的性质：

1. **增量语义，不是赋值。** 想「清零」不能传 0，得传当前值的相反数；想「设为 100」得先读当前值再算差。这是最容易写错的地方。
2. **可以传负数。** 负的 delta 就是「洗白 / 减刑」。所以这个 Action 同时承担「加罪」和「赎罪」两个方向，没有单独的 `Decrease` 方法。
3. **它是「即时生效」的。** 调用返回时，该阵营的犯罪评级已经是新值。没有排队、没有延迟回调。
4. **`showNotification` 控制的是「玩家知不知情」，不是「改不改变」。** 传 `false` 只影响是否弹出提示，评级照样变。批量调整（比如一次结算多个阵营）时通常传 `false` 避免刷屏。
5. **粒度是「阵营 × 玩家」。** 这是玩家侧的通缉分，不是 AI 之间的声望关系。

## 怎么用

### 怎么拿到

静态调用，不需要获取实例：

```csharp
using TaleWorlds.CampaignSystem.Actions;

ChangeCrimeRatingAction.Apply(kingdom, 10f);
```

### 典型用法

```csharp
// 加罪：某王国对你多记 10 点
ChangeCrimeRatingAction.Apply(someKingdom, 10f);

// 减刑：某阵营对你宽容 5 点（传负数）
ChangeCrimeRatingAction.Apply(someKingdom, -5f);

// 静默批量调整：不弹提示，避免刷屏
foreach (IFaction faction in factionsToPunish)
{
    ChangeCrimeRatingAction.Apply(faction, 2f, false);
}
```

「清零」要自己算差：

```csharp
float current = someFaction.MainHeroCrimeRating; // 读取当前值
ChangeCrimeRatingAction.Apply(someFaction, -current);
```

### 坑

- **把 delta 当绝对值传。** 最常见的错误：想设成 50，结果写成 `Apply(faction, 50f)`，实际变成「在原有基础上再加 50」。
- **`faction` 为 `null` 会抛异常。** 静态 Action 通常不做空值保护，传参前自己判空。
- **别对同一个阵营在一帧里反复调用。** 每次都触发一次状态变更与（可选的）通知，累积的浮点误差和通知噪音都不划算。先算总增量再调一次。
- **`showNotification = false` 不等于「玩家永远不会知道」。** 评级本身是战役状态的一部分，UI 迟早会读到它。
- **注意浮点。** `float` 反复加减会累积误差；需要精确判定阈值时不要依赖「加回来刚好等于 0」。
- **别用它表达「敌意」。** 犯罪评级和正式宣战是两套机制，见参见节的 `BeHostileAction`。

## 关键成员

- `ChangeCrimeRatingAction`（`ChangeCrimeRatingAction.cs:9`）—— `public static class`。入口载体，不可实例化。
- `Apply(IFaction faction, float deltaCrimeRating, bool showNotification = true)`（`ChangeCrimeRatingAction.cs:35`）—— 把 `faction` 对玩家的犯罪评级增加 `deltaCrimeRating`（可正可负）；`showNotification` 决定是否给玩家弹提示，默认 `true`。整个类的全部对外能力都在这一个方法上。

## 真实示例

「玩家在某王国境内杀人后，该王国记一笔罪」：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;

public class CrimeOnKillBehavior : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        CampaignEvents.HeroKilledEvent.AddNonSerializedListener(this, OnHeroKilled);
    }

    private void OnHeroKilled(Hero victim, Hero killer, KillCharacterAction.KillCharacterActionDetail detail, bool showNotification)
    {
        if (killer != Hero.MainHero)
        {
            return;
        }

        Kingdom kingdom = victim.MapFaction as Kingdom;
        if (kingdom == null)
        {
            return;
        }

        // 加罪：+15 点，并让玩家看到提示
        ChangeCrimeRatingAction.Apply(kingdom, 15f);
    }

    public override void SyncData(IDataStore dataStore) { }
}
```

「任务奖励：全阵营洗白」：

```csharp
foreach (Kingdom kingdom in Kingdom.All)
{
    float current = kingdom.MainHeroCrimeRating;
    if (current > 0f)
    {
        ChangeCrimeRatingAction.Apply(kingdom, -current, false);
    }
}
```

## 参见

- [`../BeHostileAction`](../BeHostileAction) —— 让阵营对你转入敌对的 Action；与犯罪评级是互补但不同的机制。
- [`../ChangeKingdomAction`](../ChangeKingdomAction) —— 阵营归属变更 Action，常在犯罪/外交结算链路上出现。
- [`../ActionNotes`](../ActionNotes) —— Campaign Action 家族的通用约定与调用纪律。
- `IFaction` —— `Apply` 的第一参数类型（本页未建链，目标页不存在）。

## 导航

- 上级：[campaign 桶索引](../_index)
- 同级：[`../BeHostileAction`](../BeHostileAction) · [`../ActionNotes`](../ActionNotes)
