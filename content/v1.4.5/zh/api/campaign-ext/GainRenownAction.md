---
title: "GainRenownAction"
description: "GainRenownAction 是战役层「给英雄所属氏族增加声望」的静态入口：内部先做正数过滤，再把声望加到氏族上，最后派发事件。"
---
# GainRenownAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `TaleWorlds.CampaignSystem/Actions/GainRenownAction.cs`

## 概述

`GainRenownAction` 是战役层「给英雄所属氏族增加声望」的静态入口。它只有一个公开方法 `Apply`，内部走一条固定流水线：先做正数过滤，再把声望加到氏族上，最后派发事件。

这个类解决的问题是：modder 想给英雄增加声望时，不需要手动操作 `Clan.AddRenown`，也不需要关心「负数声望怎么处理」——调用 `Apply` 就足够了。

## 心智模型

**把它想成「声望的捐赠仪式」：先确认捐赠额是正数，再把钱捐给氏族（不是英雄），最后广播「有人捐赠了声望」。**

1. **正数过滤。** 只有 `gainedRenown > 0` 时才会执行后续逻辑。负数或零会被静默忽略，不报错、不抛异常、不派发事件。这意味着「扣声望」不能用这个方法，得用别的途径。

2. **加在氏族上。** 声望是氏族的属性，不是英雄的属性。`hero.Clan.AddRenown(gainedRenown)` 把声望加到英雄所属的氏族上。如果英雄没有氏族（`hero.Clan == null`），这里会抛 `NullReferenceException`。

3. **事件广播。** 最后派发 `OnRenownGained` 事件，让所有监听者（比如 UI、其他 Behavior）知道「有英雄获得了声望」。注意事件里的 `gainedRenown` 是 `int` 类型，而传入的 `renownValue` 是 `float`——这里有一个隐式的 float→int 截断。

## 怎么用

### 怎么拿到

**源文件：** `bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/GainRenownAction.cs`（全文 18 行）。

**入口：** `public static class GainRenownAction`（`GainRenownAction.cs:3`），**唯一公开成员 `public static void Apply(Hero hero, float renownValue, bool doNotNotify = false)`（`:14`）。**

### 典型用法

```csharp
// 在 mod 中给 mainHero 的氏族增加 100 点声望
GainRenownAction.Apply(Hero.MainHero, 100f);

// 静默增加（不触发通知）
GainRenownAction.Apply(Hero.MainHero, 50f, doNotNotify: true);
```

**参数说明：**
- `hero`：要增加声望的英雄。声望会加到这个英雄所属的氏族上。
- `renownValue`：要增加的声望值。必须是正数，否则会被静默忽略。
- `doNotNotify`：是否禁止通知。默认为 `false`。

**调用后会发生什么：**
1. 如果 `renownValue <= 0`，直接返回，什么都不做。
2. 调用 `hero.Clan.AddRenown(renownValue)`，把声望加到氏族上。
3. 派发 `OnRenownGained` 事件，传入 `hero`、`(int)renownValue`、`doNotNotify`。

### 坑

- **负数被静默忽略。** `gainedRenown > 0f` 的判断意味着传负数不会报错，但也不会扣声望。如果你需要扣声望，得用 `Clan.AddRenown(-value)` 直接操作。

- **声望加在氏族上，不是英雄上。** 如果你误以为声望是英雄的属性，可能会在查询英雄声望时找不到。正确的查询方式是 `hero.Clan.Renown`。

- **float→int 截断。** 事件里的 `gainedRenown` 是 `int` 类型，而传入的 `renownValue` 是 `float`。这意味着 `Apply(hero, 100.9f)` 会在事件里变成 `100`。如果你需要精确控制，传整数。

- **`hero.Clan` 可能为 null。** 如果英雄没有氏族（比如某些特殊状态），`hero.Clan.AddRenown` 会抛 `NullReferenceException`。调用前自己确认 `hero.Clan != null`。

## 关键成员

- **`Apply(Hero hero, float renownValue, bool doNotNotify = false)`**（`GainRenownAction.cs:14`）：唯一公开方法，modder 的入口。内部调用 `ApplyInternal`。

- **`ApplyInternal(Hero hero, float gainedRenown, bool doNotNotify)`**（`GainRenownAction.cs:5`）：私有核心方法，执行实际的正数过滤、加声望和事件派发。

## 真实示例

```csharp
// GainRenownAction.cs:5-12 的完整 ApplyInternal 实现
private static void ApplyInternal(Hero hero, float gainedRenown, bool doNotNotify)
{
    if (gainedRenown > 0f)
    {
        hero.Clan.AddRenown(gainedRenown);
        CampaignEventDispatcher.Instance.OnRenownGained(hero, (int)gainedRenown, doNotNotify);
    }
}
```

**上例展示了完整的「捐赠仪式」流程：** `:7` 是正数过滤，`:9` 是加声望到氏族，`:10` 是事件广播。注意 `:10` 的 `(int)gainedRenown` 截断。

## 参见

- [Hero](../../campaign/Hero) — 声望的载体英雄，`hero.Clan` 决定声望加到哪个氏族
- [Clan](../../campaign/Clan) — 实际接收声望的氏族对象，`AddRenown` 方法在这个类上
- [CampaignEvents](../CampaignEvents) — `OnRenownGained` 事件的定义位置

## 导航

- [本区域目录](../)
