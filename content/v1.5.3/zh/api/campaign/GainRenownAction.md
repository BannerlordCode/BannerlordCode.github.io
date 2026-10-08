---
title: "GainRenownAction"
description: "静态 Action 类，让你在战役里给英雄加声望：只在数值为正时生效，并广播 OnRenownGained 事件。"
---

# GainRenownAction

**命名空间：** `TaleWorlds.CampaignSystem.Actions`
**Type:** `public static class GainRenownAction`
**Source:** `TaleWorlds.CampaignSystem/Actions/GainRenownAction.cs`

## 概述

`GainRenownAction` 是战役层的静态 Action 类，负责给英雄（Hero）增加声望，声望会记到英雄所属的氏族（Clan）上。它和 `ChangeClanInfluenceAction` 一样，把「改数值」和「广播变化」捆在一起：`ApplyInternal` 在数值为正时调用 `hero.Clan.AddRenown`，再通过 `CampaignEventDispatcher.Instance.OnRenownGained` 把变化通知出去。直接改氏族声望会跳过事件派发，监听方收不到通知。注意 `ApplyInternal` 有 `gainedRenown > 0f` 的前置判断，非正数会被静默忽略。

## 心智模型

结构和 `ChangeClanInfluenceAction` 同构，也是「公开入口 → 私有实现」的收敛：

- 公开入口 `Apply(Hero hero, float renownValue, bool doNotNotify = false)` 直接转发给 `ApplyInternal`，第三个参数有默认值，可以省略。
- `ApplyInternal(Hero hero, float gainedRenown, bool doNotNotify)` 先判断 `gainedRenown > 0f`，为正才执行 `hero.Clan.AddRenown(gainedRenown, true)` 和 `OnRenownGained(hero, (int)gainedRenown, doNotNotify)`。

注意两个方法的参数名不一样：`Apply` 的第三个参数叫 `renownValue`，`ApplyInternal` 的第二个参数叫 `gainedRenown`，照抄即可，不要自行统一命名。对 mod 来说，心智模型是：**调 `Apply`，声望只增不减**——想扣声望要走别的途径，传负数或 0 不会有任何效果，也不会报错。

## 怎么用

### 怎么拿到它

静态类，直接 `GainRenownAction.Apply(hero, renownValue)` 调用，`doNotNotify` 可省略。

### 典型用法

- 战斗胜利：主角赢得战斗后给一笔声望。
- 任务/事件奖励：完成特定任务或触发事件后奖励声望。
- 批量授予：给多个英雄同时加声望（循环调 `Apply`）。
- 静默调整：初始化或调试时用 `doNotNotify: true` 避免弹通知。

### 最容易踩的坑

- **传负数想扣声望**：`ApplyInternal` 的 `gainedRenown > 0f` 判断会让负数和 0 直接被忽略，不报错也不生效。
- **以为 `Apply` 会校验**：`Apply` 只是转发，没有额外逻辑，判断全在 `ApplyInternal`。
- **忽略 `(int)` 转换**：`OnRenownGained` 收到的是 `(int)gainedRenown`，小数部分在事件里会被截断，但 `AddRenown` 存的是原值。
- **在英雄没有氏族时调用**：`ApplyInternal` 直接访问 `hero.Clan`，没有空检查。

## 关键成员

- **GainRenownAction**（`GainRenownAction.cs:6`）— 静态类声明，整个 Action 的容器；mod 通过它访问下面的静态方法。
- **Apply**（`GainRenownAction.cs:19`）— 公开入口，参数为 `(Hero hero, float renownValue, bool doNotNotify = false)`，转发给 `ApplyInternal`；mod 唯一应该调用的方法。
- **ApplyInternal**（`GainRenownAction.cs:9`）— 私有实现，`gainedRenown > 0f` 时执行 `hero.Clan.AddRenown` 并触发 `OnRenownGained`；解释了入口如何收敛，以及为什么非正数无效。

## 真实示例

```csharp
// 场景：主角赢得一场决斗后获得声望
GainRenownAction.Apply(Hero.MainHero, 5f);

// 场景：任务奖励，且不弹通知
GainRenownAction.Apply(Hero.MainHero, 3f, true);

// 场景：显式传入 false，行为与省略相同
GainRenownAction.Apply(Hero.MainHero, 10f, false);

// 场景：批量给多个英雄加声望
Hero[] heroes = { Hero.MainHero };
foreach (Hero hero in heroes)
{
    GainRenownAction.Apply(hero, 2f);
}
```

## 参见

- [ChangeClanInfluenceAction](../ChangeClanInfluenceAction) — 同批的另一个静态 Action，调整氏族影响力
- [HeroHelper](../../core-extra/HeroHelper) — 英雄相关的辅助工具页
- [FactionHelper](../../core-extra/FactionHelper) — 派系/氏族相关的辅助工具页

## 导航

- ↑ [API 参考](../../) —— 本版本 API 层入口：按任务找页的路径表
- ↑ [v1.5.3 首页](../../../) —— 19 个桶的完整缺口表与覆盖现状
- ↔ [模块地图](../../../architecture/module-map) —— 确认某个类型属于哪一桶
