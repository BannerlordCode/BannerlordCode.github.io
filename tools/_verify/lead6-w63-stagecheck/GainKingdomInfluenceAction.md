---
title: "GainKingdomInfluenceAction"
description: "GainKingdomInfluenceAction 的自动生成战役动作参考。"
---
# GainKingdomInfluenceAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `TaleWorlds.CampaignSystem/Actions/GainKingdomInfluenceAction.cs`

GainKingdomInfluenceAction 是一组静态方法，用于在战役中以特定原因触发"GainKingdomInfluence"。modder通过调用其 `Apply*` 方法改变游戏状态（每种原因一个重载）。

## 方法

### ApplyForBattle

```csharp
public static void ApplyForBattle(Hero hero, float value)
```

**用途 / Purpose:** 将 for battle 的效果应用到当前对象。

### ApplyForGivingFood

```csharp
public static void ApplyForGivingFood(Hero hero1, Hero hero2, float value)
```

**用途 / Purpose:** 将 for giving food 的效果应用到当前对象。

### ApplyForDefault

```csharp
public static void ApplyForDefault(Hero hero, float value)
```

**用途 / Purpose:** 将 for default 的效果应用到当前对象。

### ApplyForJoiningFaction

```csharp
public static void ApplyForJoiningFaction(Hero hero, float value)
```

**用途 / Purpose:** 将 for joining faction 的效果应用到当前对象。

### ApplyForDonatePrisoners

```csharp
public static void ApplyForDonatePrisoners(MobileParty donatingParty, float value)
```

**用途 / Purpose:** 将 for donate prisoners 的效果应用到当前对象。

### ApplyForRaidingEnemyVillage

```csharp
public static void ApplyForRaidingEnemyVillage(MobileParty side1Party, float value)
```

**用途 / Purpose:** 将 for raiding enemy village 的效果应用到当前对象。

### ApplyForBesiegingEnemySettlement

```csharp
public static void ApplyForBesiegingEnemySettlement(MobileParty side1Party, float value)
```

**用途 / Purpose:** 将 for besieging enemy settlement 的效果应用到当前对象。

### ApplyForSiegeSafePassageBarter

```csharp
public static void ApplyForSiegeSafePassageBarter(MobileParty side1Party, float value)
```

**用途 / Purpose:** 将 for siege safe passage barter 的效果应用到当前对象。

### ApplyForCapturingEnemySettlement

```csharp
public static void ApplyForCapturingEnemySettlement(MobileParty side1Party, float value)
```

**用途 / Purpose:** 将 for capturing enemy settlement 的效果应用到当前对象。

### ApplyForLeavingTroopToGarrison

```csharp
public static void ApplyForLeavingTroopToGarrison(Hero hero, float value)
```

**用途 / Purpose:** 将 for leaving troop to garrison 的效果应用到当前对象。

### ApplyForBoardGameWon

```csharp
public static void ApplyForBoardGameWon(Hero hero, float value)
```

**用途 / Purpose:** 将 for board game won 的效果应用到当前对象。

## 使用示例

```csharp
// 在 mod 中触发一次该动作
GainKingdomInfluenceAction.ApplyForBattle(hero, 100);
```

## 概述

`GainKingdomInfluenceAction` 是「给氏族加王国影响力」的统一入口。全树 11 个 `ApplyFor*` 方法全部转调同一个 `private static void ApplyInternal(Hero, MobileParty, float, InfluenceGainingReason)`，由第四个参数区分场景。它是本批里最复杂的 Action：150 行、11 个入口、一条政策倍率、一对 Perk 钩子、两处玩家提示。

## 心智模型

**核心是「先定位氏族，再按场景改系数，最后发提示」三段式**，而三段各有各的坑：

1. **氏族定位有四条分支，且优先级不能改。** `ApplyInternal`（`:29`）先 `hero != null`（`:32`）再看 `hero.CompanionOf`（`:34`）→ `hero.Clan`（`:38`）；**只有 hero 为 null 时才走 `party.ActualClan`（`:43`）→ `party.Owner.Clan`（`:47`）**。**所以「同伴优先于本族」是硬规则**——一个已加入其它氏族的同伴，他加的影响力算给那个氏族。
2. **定位失败就静默 return。** `clan == null || clan.Kingdom == null`（`:51`）直接返回（`:53`），**不报错、不发事件**。无王国的氏族（独立氏族）加多少都没用。
3. **政策倍率有四个豁免。** `:60` 的条件排除 `Default` / `GivingFood` / `JoinFaction` / `ClanSupport`，其余场景在该王国有 `MilitaryCoronae` 时 `× 1.2f`（`:62`）。

三个必须单独记住的细节：

- **`ApplyForGivingFood` 是零和转移。** 它调两次 `ApplyInternal`：`hero1` 得 `+value`（`:102`）、`hero2` 得 `0f - value`（`:103`）。**两个英雄必须分别有可定位的王国氏族，否则只成功一半。**
- **`:56` 那道判断是死代码。** `if (detail != InfluenceGainingReason.BeingAtArmy && detail == InfluenceGainingReason.ClanSupport)` ——**两个条件互斥又矛盾**，前半永远为真（`BeingAtArmy` 不等于 `ClanSupport`），整体退化成 `detail == ClanSupport`。**而 `ClanSupport` 与 `BeingAtArmy` 都没有对应的公开包装方法**（见「怎么用」），所以这个分支从外部**不可达**。
- **事件与状态再次存在截断。** 状态侧写的是 `gainedInfluence`（`:75`），而提示文本用的是 `(int)gainedInfluence`（`:76`）。传小数时两者不等。

## 怎么用

### 怎么拿到它

**源文件：** `bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/GainKingdomInfluenceAction.cs`（全文 150 行）。
**下游写入点：** `ChangeClanInfluenceAction.Apply(Clan clan, float amount)`（`ChangeClanInfluenceAction.cs:11`），由本类 `:75` 调用。

`public static class GainKingdomInfluenceAction`（`GainKingdomInfluenceAction.cs:10`），**11 个公开方法，一对一对应枚举里的 11 个成员。**

### 典型用法

**全树调用点示例：** `Army.cs:502` / `Army.cs:507`（入军团）、`KingdomManager.cs:248`、`BeHostileAction.cs:124` / `BeHostileAction.cs:146`（敌对行为转扣影响力）、`SafePassageBarterable.cs:167`、`CompanionRolesCampaignBehavior.cs:286`、`DisbandPartyCampaignBehavior.cs:359`。

**11 个 `ApplyFor*` 的签名分两类：7 个接 `Hero`、4 个接 `MobileParty`。** 接 Hero 的是 `ApplyForBattle`（`:95`）、`ApplyForGivingFood`（`:100`）、`ApplyForDefault`（`:106`）、`ApplyForJoiningFaction`（`:111`）、`ApplyForLeavingTroopToGarrison`（`:141`）、`ApplyForBoardGameWon`（`:146`）；接 MobileParty 的是 `ApplyForDonatePrisoners`（`:116`）、`ApplyForRaidingEnemyVillage`（`:121`）、`ApplyForBesiegingEnemySettlement`（`:126`）、`ApplyForSiegeSafePassageBarter`（`:131`）、`ApplyForCapturingEnemySettlement`（`:136`）。

**这决定了传参的语义：接 Hero 的会优先用 `hero.CompanionOf`，接 MobileParty 的只走队伍侧。** 想给「某个队伍所属氏族」加影响力就必须传队伍，反之传队伍不会因为队长是同伴而改走同伴的氏族。

**而两个枚举成员没有公开入口**——`InfluenceGainingReason` 有 13 个值（`:14`-`:26`），但 `BeingAtArmy` 与 `ClanSupport` **只在 `:56` / `:60` 的条件判断里出现，从未被作为第四个实参传入**。**所以 `:58` 那句 `gainedInfluence = 0.5f` 对外部调用者是死路。**

**`:60` 有一个未受保护的强制转换**：`((Kingdom)clan.MapFaction)`。`:51` 只保证 `clan.Kingdom != null`，**不保证 `clan.MapFaction` 的运行时类型是 `Kingdom`**——遇到非王国的 `MapFaction` 会抛 `InvalidCastException`。

**`:69` 的 Perk 钩子有一处真实 NRE 路径**：条件是 `(hero != null || mobileParty.LeaderHero != null)`，但 `mobileParty` 来自 `:55` 的 `party ?? hero.PartyBelongedTo`——**两者皆 null 时 `mobileParty` 为 null，而 hero 为 null 时这个条件会去解 `mobileParty.LeaderHero`。**

```csharp
public static void SafeInfluenceGrant(MobileParty party, Hero hero, float value)
{
    Clan target = null;
    if (hero != null) { target = hero.CompanionOf ?? hero.Clan; }
    else if (party != null) { target = party.ActualClan ?? (party.Owner != null ? party.Owner.Clan : null); }
    if (target == null || target.Kingdom == null)
    {
        Debug.Print("no kingdom clan -> GainKingdomInfluenceAction.cs:53 returns silently", 0);
        return;
    }
    float before = target.Influence;
    GainKingdomInfluenceAction.ApplyForDefault(hero, value);
    Debug.Print("influence " + before + " -> " + target.Influence + " delta=" + (target.Influence - before), 0);
    Debug.Print("MilitaryCoronae x1.2 applied? " + target.Kingdom.ActivePolicies.Contains(DefaultPolicies.MilitaryCoronae) + " (exempt for Default)", 0);
}
```

**上例第一段把源码 `:32`-`:51` 的氏族定位原样抄了一遍——因为外部拿不到 `ApplyInternal`，想预判是否会静默 return 就只能自己重算一遍。** 而第三行末尾那句 `exempt for Default` 是关键：**`ApplyForDefault` 被 `:60` 明确排除在政策倍率之外**，所以无论王国有没有 `MilitaryCoronae`，用 `ApplyForDefault` 加的影响力都**不会**被乘 1.2。

## 依赖

| 类型/流程 | 关系 |
| --- | --- |
| `ChangeClanInfluenceAction.Apply`（`ChangeClanInfluenceAction.cs:11`） | 真正的写入点，由 `:75` 调用 |
| `Clan.CompanionOf` / `Clan.Kingdom` | `:34` / `:51` 的氏族定位与早退判据 |
| `DefaultPolicies.MilitaryCoronae` | `:60` 的 1.2 倍政策倍率，四个场景豁免 |
| `PerkHelper` + `DefaultPerks.Tactics` | `:67` 的 `PreBattleManeuvers`、`:72` 的 `Besieged` |
| `InformationManager` | `:84` / `:90` 的两条玩家提示，仅特定场景触发 |

## 风险

- **本类没有公开入口能到达 `InfluenceGainingReason.ClanSupport` 与 `BeingAtArmy`。** 枚举 13 个值（`:14`-`:26`）对 11 个 `ApplyFor*`（`:95`-`:149`）；缺失的两个只出现在 `:56` / `:60` 的条件里。**派生类也无法传入——`ApplyInternal` 是 private。** 需要这两个语义只能自己写。

- **`:60` 的 `(Kingdom)clan.MapFaction` 是无保护强转。** `:51` 只判 `clan.Kingdom != null`，不保证 `MapFaction` 的运行时类型是 `Kingdom`。非王国 `MapFaction` 会抛 `InvalidCastException`，而这发生在影响力**已算出、尚未写入**（`:60` 在 `:75` 之前）的位置——**所以是一次「不生效但抛异常」的调用。**

## 参见

- [本区域目录](../)
- [战役系统](../../campaign/)