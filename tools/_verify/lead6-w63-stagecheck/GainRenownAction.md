---
title: "GainRenownAction"
description: "GainRenownAction 的自动生成战役动作参考。"
---
# GainRenownAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `TaleWorlds.CampaignSystem/Actions/GainRenownAction.cs`

GainRenownAction 是一组静态方法，用于在战役中以特定原因触发"GainRenown"。modder通过调用其 `Apply*` 方法改变游戏状态（每种原因一个重载）。

## 方法

### Apply

```csharp
public static void Apply(Hero hero, float renownValue, bool doNotNotify = false)
```

**用途 / Purpose:** 将当前对象的效果应用到目标。

## 使用示例

```csharp
// 在 mod 中触发一次该动作
GainRenownAction.Apply(hero, 100, false);
```

## 概述

`GainRenownAction` 是「给某个英雄的氏族加声望」的单一入口。它本身不做任何计算，只把 `float` 转交给 `Clan.AddRenown`，然后广播一次 `OnRenownGained` 事件。全部实现 17 行、零字段零常量，公开面只有一个 `Apply`。

## 心智模型

把它当成**「一个带正数守卫的转发器 + 一次事件广播」**，而不是一个能加也能减的声望接口。

三条必须记住的规则：

1. **负数是静默的 no-op。** `ApplyInternal` 的 `if (gainedRenown > 0f)`（`GainRenownAction.cs:7`）包住了全部逻辑，**传 0 或负数连事件都不发**——不是报错，是完全无声。而 `Clan.AddRenown` 自己又判了一遍 `value > 0f`（`Clan.cs:1274`），**同一道门叠了两层**。
2. **`doNotNotify` 只管事件，不管氏族。** 它被传给 `OnRenownGained`（`GainRenownAction.cs:10`），**但 `AddRenown` 的 `shouldNotify` 参数没被传，用了默认值 `true`**（`Clan.cs:1272`）。所以 `doNotNotify: true` 时，**声望事件静默但氏族升级事件照常广播**（`Clan.cs:1281`）。
3. **事件里的数字是截断过的。** 状态侧加的是 `float`，事件侧发的是 `(int)gainedRenown`（`GainRenownAction.cs:10`）。**传 `2.9f` 则状态 +2.9、事件报 2。** 全树 48 个调用点里绝大多数传的是整数字面量（`2f`、`MathF.Round(...)`），所以这条坑平时碰不到。

## 怎么用

### 怎么拿到它

**源文件：** `bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/GainRenownAction.cs`（全文 17 行）。
**调用点：** 全树 48 处，代表性位置 `IssuesCampaignBehavior.cs:400`、`CharacterCreationContent.cs:112`、`IncidentEffect.cs:356`、`ArmyNeedsSuppliesIssueBehavior.cs:359`、`CampaignCheats.cs:1478`。

`public static class GainRenownAction`（`GainRenownAction.cs:3`），**唯一成员 `public static void Apply(Hero hero, float renownValue, bool doNotNotify = false)`（`:14`）**，一行转调 `ApplyInternal`（`:16`）。**而 `private static void ApplyInternal(Hero hero, float gainedRenown, bool doNotNotify)`（`:5`）是全部逻辑所在，只有 6 行（`:7`-`:11`）。**

### 典型用法

**它要求 `hero.Clan` 非 null**——`GainRenownAction.cs:9` 直接 `hero.Clan.AddRenown(...)`，**没有判空**。无氏族英雄（某些刚生成的单体）会在这一行 NRE。

**它不负责氏族升级，但升级会在这个调用里被触发。** `AddRenown` 加完之后调 `ClanTierModel.CalculateTier(this)`（`Clan.cs:1277`），发现 `num > Tier` 就写 `Tier = num`（`Clan.cs:1280`）并广播 `OnClanTierChanged`（`Clan.cs:1281`）。**所以「加声望」这一个动作可能同时产生两个事件。**

想要「加声望但别触发任何通知」，**`doNotNotify: true` 是不够的**——那只压掉 `OnRenownGained`。压不掉升级通知。

```csharp
public static void GrantRenown(Hero hero, float amount, bool silent)
{
    if (hero.Clan == null)
    {
        Debug.Print(hero.Name + " has no Clan -> GainRenownAction.cs:9 would NRE", 0);
        return;
    }
    if (amount <= 0f)
    {
        Debug.Print("amount=" + amount + " -> silently ignored at GainRenownAction.cs:7", 0);
        return;
    }
    int tierBefore = hero.Clan.Tier;
    float renownBefore = hero.Clan.Renown;
    GainRenownAction.Apply(hero, amount, silent);
    Debug.Print(hero.Name + " renown " + renownBefore + " -> " + hero.Clan.Renown
        + " (delta " + (hero.Clan.Renown - renownBefore) + ", event would report "
        + (int)amount + ")", 0);
    Debug.Print("tier " + tierBefore + " -> " + hero.Clan.Tier + " (OnClanTierChanged fires regardless of doNotNotify)", 0);
}
```

**上例第二行是这页最值得抄的自检**：把「状态实际变化」和「事件会上报的数字」并排打出来，**两者不等就说明你踩了截断**。第三行则把升级这条隐藏副作用显式化——**因为你无法用 `doNotNotify` 关掉它。**

## 依赖

| 类型/流程 | 关系 |
| --- | --- |
| `Clan.AddRenown(float, bool)`（`Clan.cs:1272`） | 真正写 `Renown` 并触发氏族升级 |
| `ClanTierModel`（经 `Clan.cs:1277`） | 声望越阶判定，决定 `Tier` 是否变 |
| `CampaignEvents.OnRenownGained`（`CampaignEvents.cs:1793`） | 本 Action 广播的唯一事件 |

## 风险

- **`hero.Clan` 为 null 会 NRE。** `GainRenownAction.cs:9` 无判空直接解引用。本页上方「使用示例」里的 `Apply(hero, 100, false)` 若 `hero` 是无氏族英雄就直接崩——**先判 `hero.Clan != null`。**

- **负数/零是静默 no-op。** `GainRenownAction.cs:7` 的 `> 0f` 守卫让整个函数体被跳过，**不抛异常、不发事件、不留日志**。本类**没有「扣声望」的入口**，要用请直接改 `Clan.Renown` 并自行承担事件与升级的一致性。

## 参见

- [本区域目录](../)
- [战役系统](../../campaign/)