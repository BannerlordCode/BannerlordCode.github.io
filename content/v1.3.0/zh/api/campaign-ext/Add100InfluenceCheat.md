---
title: "Add100InfluenceCheat"
description: "地图作弊菜单里的一项：ExecuteCheat 只有一行 ChangeClanInfluenceAction.Apply(Clan.PlayerClan, 100f)。没有注册表——GameplayCheatsManager 每次枚举都 new 一个新实例，mod 无法追加作弊项。"
---

# Add100InfluenceCheat

**Namespace:** SandBox
**Module:** SandBox
**Type:** `public class Add100InfluenceCheat : GameplayCheatItem`
**Base:** `GameplayCheatItem`（→ [GameplayCheatBase](../GameplayCheatBase)）
**File:** `SandBox/Add100InfluenceCheat.cs`（23 行，全文如下）

```csharp
public class Add100InfluenceCheat : GameplayCheatItem
{
    public override void ExecuteCheat()
    {
        ChangeClanInfluenceAction.Apply(Clan.PlayerClan, 100f);
    }

    public override TextObject GetName()
    {
        return new TextObject("{=6TgRwB2Q}Add 100 Influence", null);
    }
}
```

## 概述

作弊菜单 14 个条目里的第 2 个。整类只有两个 override：一个是 `ExecuteCheat()`（一行 `ChangeClanInfluenceAction.Apply`），一个是 `GetName()`（返回一个新的 `TextObject`）。

它挂在什么流程上？答案在 [GameplayCheatsManager](../GameplayCheatsManager)：

```csharp
public static IEnumerable<GameplayCheatBase> GetMapCheatList()
{
    yield return new Add1000GoldCheat();
    yield return new Add100InfluenceCheat();      // ← 这里
    yield return new Add100RenownCheat();
    ...
}
```

**这是 `yield return` 的迭代器方法，不是数组也不是 `List`。** 也就是说每次枚举都会**重新 `new` 一个 `Add100InfluenceCheat` 实例**。而 [GameplayCheatsVM](../GameplayCheatsVM) 把这个延迟序列原样存进 `_initialCheatList`（`GameplayCheatsVM.cs` 构造函数里 `_initialCheatList = cheats;`），并在每次执行作弊后 / 每次返回上一层时调 `FillWithCheats(this._initialCheatList)` 重建列表——**每一次都是全新的实例，本类的实例从不跨帧复用，也就没有任何可缓存的状态**。

界面上点一下之后的路径是：`CheatActionItemVM` → `GameplayCheatItem.ExecuteCheat()`（`GameplayCheatsVM.OnCheatActionExecuted` 回调）→ 重建列表 → `InformationManager.DisplayMessage("Cheat Used: {CHEAT}")`。

## 心智模型

**把它当成「一个把界面点击翻译成一次 Action 调用的 lambda 对象」，而不是一个可复用的功能模块。**

关键的心智模型：**`GameplayCheatItem` 抽象类本身只声明了一个 `ExecuteCheat()`**（`SandBox/GameplayCheatItem.cs` 全文 8 行）：

```csharp
public abstract class GameplayCheatItem : GameplayCheatBase
{
    public abstract void ExecuteCheat();
}
```

`GetName()` 来自 [GameplayCheatBase](../GameplayCheatBase)（全文 7 行）：

```csharp
public abstract class GameplayCheatBase
{
    public abstract TextObject GetName();
}
```

所以做一件作弊只需要**两个 override、零字段、零构造函数**。整个 `SandBox` 模块里 14 个作弊项（`Add1000GoldCheat` / `Add100RenownCheat` / `AddCraftingMaterialsCheat` / `BoostSkillCheatGroup` / `CompleteBuildingProjectCheat` / …）全是这个形状。

**mod 能不能复用这个注册方式？不能直接复用——没有注册表。** `GameplayCheatsManager.GetMapCheatList()` 是一个 `static` 方法里的 `yield return` 序列，没有事件、没有 `Register()`、没有 `IEnumerable` 参数注入点。要加自己的作弊项，只有三条路：

1. **Harmony 补丁** `GameplayCheatsManager.GetMapCheatList`，在原方法之后 yield 你的实例（最常见）
2. **Harmony 补丁** `MapScreen.OpenGameplayCheats()`（`SandBox.View/Map/MapScreen.cs:2277`），绕过原 VM 自己造一个 `GameplayCheatsVM`
3. **不接入作弊菜单**，自己在地图界面挂一个按钮直接调 `ChangeClanInfluenceAction.Apply`

另外一条值得知道的路径：`GameplayCheatsVM.FillWithCheats` 的分支是

```csharp
if ((cheat = (gameplayCheatBase as GameplayCheatItem)) != null) { this.Cheats.Add(new CheatActionItemVM(cheat, ...)); }
else if ((cheatGroup = (gameplayCheatBase as GameplayCheatGroup)) != null) { this.Cheats.Add(new CheatGroupItemVM(cheatGroup, ...)); }
```

**没有 else 分支。** 任何既不是 `GameplayCheatItem` 也不是 `GameplayCheatGroup` 的 `GameplayCheatBase` 子类会被**静默丢弃**——不报错、不显示。

## 关键成员

| 成员 | 签名（行号） | 这个成员是做什么用的 |
| --- | --- | --- |
| `ExecuteCheat` | `public override void ExecuteCheat()`（`:10`） | 唯一的行为。`ChangeClanInfluenceAction.Apply(Clan.PlayerClan, 100f)` —— 第二个参数是 `float`，**字面量 `100f`，不可配置，也没有上限检查**。每次点击 +100，可以点无限次。 |
| `GetName` | `public override TextObject GetName()`（`:16`） | **每次调用都 `new TextObject("{=6TgRwB2Q}Add 100 Influence", null)`。** 它是列表项的显示文本来源（`CheatActionItemVM.Name`），也被 `GameplayCheatsVM.OnCheatActionExecuted` 拿去做 "Cheat Used: {CHEAT}" 弹窗的变量。**不是常量字段，也没有缓存**。 |

## 真实示例

**从 mod 里直接复用它（这是最省事的形态——不需要开作弊菜单）：**

```csharp
using SandBox;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;

public static void GrantInfluence()
{
    // 复用引擎的作弊项：直接 new 出来调用，不需要菜单、不需要 GameplayCheatsManager
    GameplayCheatItem cheat = new Add100InfluenceCheat();
    cheat.ExecuteCheat();

    // 等价的直接写法（省一次 TextObject 分配）：
    ChangeClanInfluenceAction.Apply(Clan.PlayerClan, 100f);
}
```

**把作弊项加进菜单（Harmony 后置 yield，这是唯一可行的接入点）：**

```csharp
using System.Collections.Generic;
using HarmonyLib;
using SandBox;

[HarmonyPatch(typeof(GameplayCheatsManager), nameof(GameplayCheatsManager.GetMapCheatList))]
public static class GameplayCheatsManagerPatch
{
    private static void Postfix(ref IEnumerable<GameplayCheatBase> __result)
    {
        // 原方法是 yield return，所以 __result 是个编译器生成的迭代器；
        // 要追加只能重新组合成一个新序列，不能直接 Add。
        List<GameplayCheatBase> patched = new List<GameplayCheatBase>();
        foreach (GameplayCheatBase b in __result)
        {
            patched.Add(b);
        }
        patched.Add(new MyDebugCheat());      // 你的 GameplayCheatItem 子类
        __result = patched;
    }
}

public class MyDebugCheat : GameplayCheatItem
{
    public override void ExecuteCheat()
    {
        // 用 CampaignAction 而不是直接改字段
        Campaign.Current.Models.DaysPerCampaignYear = Campaign.Current.Models.DaysPerCampaignYear;
    }

    public override TaleWorlds.Localization.TextObject GetName()
    {
        return new TaleWorlds.Localization.TextObject("{=MyDebugCheat}Reset day scale", null);
    }
}
```

读一下当前影响力、判断「是否需要一个作弊项」：

```csharp
using TaleWorlds.CampaignSystem;

private static string DescribeInfluence()
{
    Clan pc = Clan.PlayerClan;
    return "influence = " + pc.Influence.ToString("F1")
         + "  (one cheat click adds 100, current would become " + (pc.Influence + 100f).ToString("F1") + ")";
}
```

## 风险与边界

- **`GetMapCheatList()` 是 `static` + `yield return`，没有任何注册入口。** 引擎**没有** `RegisterCheat()` / `IEnumerable` 参数 / 事件。所以 mod 无法「追加」一项，只能 Harmony 补丁替换整个序列。这是这个 API 最需要注意的结构事实。
- **每次枚举都 new 新实例。** `GameplayCheatsVM` 会在打开菜单、执行任意一项作弊、返回上一层时反复重建列表（`FillWithCheats(this._initialCheatList)`），所以**同一个 `Add100InfluenceCheat` 实例的生存期不超过一帧**。任何写在字段里的缓存都不会跨帧有效——这也解释了为什么它不需要字段。
- **`GameplayCheatsVM.FillWithCheats` 会静默丢弃非 `GameplayCheatItem` / 非 `GameplayCheatGroup` 的类型。** 分支只有 if / else-if，没有 else。你写一个直接继承 `GameplayCheatBase` 的类（自己声明 `ExecuteCheat`）→ **菜单里不会出现，也不会报错**。
- **`ChangeClanInfluenceAction.Apply` 的第二个参数是 `float`，且没有上限。** `100f` 是硬编码字面量。重复点击会无上限累加影响力。这个 Action 是官方的正规入口（不是直接写字段），所以会正常触发后续的影响事件；但**如果你要「加 5000」或「加到上限」，必须自己写数字，不要试图通过 `ExecuteCheat()` 循环调用来实现**——那会重复触发 N 次事件。
- **`GetName()` 每次都 new 一个 `TextObject`。** 在 `GameplayCheatsVM` 里它被读两次（列表项显示 + "Cheat Used" 弹窗），加上 `RefreshValues` 的反复调用，分配量不小。**这个模式在 14 个作弊项里是统一的**，不是本类的特例。
- **`Clan.PlayerClan` 在 campaign 之前是 null。** `ExecuteCheat` 直接把它传给 `ChangeClanInfluenceAction.Apply` —— **在没有 campaign 的环境里调用会 NRE**。本类自己不检查。
- **`GetMapCheatList()` 里有一项是条件性的。** `CompleteBuildingProjectCheat` 只在 `Settlement.CurrentSettlement != null && Settlement.CurrentSettlement.IsFortification` 时 yield（`GameplayCheatsManager.cs`）。**列表内容依赖调用时上下文**，`Add100InfluenceCheat` 是无条件的那几项之一。`GetMissionCheatList()` 另有一处条件：`Mission.Current != null && Mission.Current.Mode == 2` 才 yield `WoundAllEnemiesCheat`。
- **作弊菜单本身有开关。** `MapScreen.OpenGameplayCheats()`（`MapScreen.cs:2277`）由地图界面的调用点触发，而 `MapScreen.CloseGameplayCheats()` 在 `:2284` 带一条 `Debug.FailedAssert("Requested remove map cheats but cheats is not enabled", ...)` —— **说明存在一个「cheats 已启用」的标志位**，未启用时关闭界面会走断言。
- **`ExecuteCheat` 没有 `base.` 调用，也没有其他前置检查。** 它是一次纯粹的 Action 调用，不检查是否已有足够影响力、不检查任务阶段、不检查 `IsMainCampaign`。

## 怎么用

### 怎么拿到它

声明在 `SandBox/Add100InfluenceCheat.cs:9`，继承链和 [Add1000GoldCheat](../Add1000GoldCheat) 完全一致：`GameplayCheatItem`（`GameplayCheatItem.cs:6`）→ `GameplayCheatBase`（`GameplayCheatBase.cs:7`），只需实现 `GetName()` 与 `ExecuteCheat()`。

注册点在同一个静态工厂里，紧挨着金币那一项：

```csharp
// SandBox/GameplayCheatsManager.cs:12
public static IEnumerable<GameplayCheatBase> GetMapCheatList()
{
    yield return new Add1000GoldCheat();       // :14
    yield return new Add100InfluenceCheat();   // :15
    ...
}
```

消费方同样是 `GauntletMapCheatsView`（`SandBox.GauntletUI/Map/GauntletMapCheatsView.cs:21`）。

### 典型用法

注意它作用的对象和金币那一项**完全不同**——影响力是**氏族**属性，不是英雄属性：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;
using TaleWorlds.Localization;

public class Remove100InfluenceCheat : GameplayCheatItem
{
    public override void ExecuteCheat()
    {
        // 负值就是扣。ChangeClanInfluenceAction.Apply 只有两个参数（Add100InfluenceCheat.cs:14），
        // 没有通知开关——和金币那一项的 ApplyBetweenCharacters 四参数签名不同。
        ChangeClanInfluenceAction.Apply(Clan.PlayerClan, -100f);
    }

    public override TextObject GetName()
    {
        return new TextObject("{=MyMod_Remove100Inf}Remove 100 Influence", null);
    }
}
```

### 最容易踩的坑

**把它当成英雄属性去改，或者传成 `Hero.MainHero`。** 官方实现是 `ChangeClanInfluenceAction.Apply(Clan.PlayerClan, 100f)`（`Add100InfluenceCheat.cs:14`）——**第一个参数的类型是 `Clan`，不是 `Hero`**。所以下面的写法编译不过：

```csharp
// 错：ChangeClanInfluenceAction.Apply 的第一个参数是 Clan
ChangeClanInfluenceAction.Apply(Hero.MainHero, 100f);
```

而如果绕开它改成 `Hero.MainHero.Clan.Influence += 100`，后果更隐蔽：**影响力变化不会走 clan 变动通道**，因而**不会触发依赖影响力阈值的 AI 决策**（招募、效忠、雇佣），日志里也不会留下这次变化——数值变了，世界没反应。

第二个坑是 `float` 参数与「100 是整数」的心智模型。官方传的是 `100f`（带 `f` 后缀）。自己写整数字面量在有重载歧义或扩展方法竞争时会选到另一条重载，**编译通过但语义不是你想要的那条**。

## 跨版本提示

- **8 条 public/protected 声明（类 + 两个 override + `GameplayCheatItem` / `GameplayCheatBase` 的形状）在 1.4.6 / 1.4.7 / 1.5.3 上与 1.3.0 逐字相同**；1.3.15 与 1.4.5 是残缺树，没有 `SandBox/Add100InfluenceCheat.cs`。**`ExecuteCheat` 的方法体（`ChangeClanInfluenceAction.Apply(Clan.PlayerClan, 100f)`）与 `GetName()` 的 `{=6TgRwB2Q}` 字符串键在所有存在的版本里没有变过。**
- **`GameplayCheatsManager.GetMapCheatList()` 的 14 个 yield 项也没有增删**——也就是说**升级不会带来新的作弊项，也不会给你一个注册入口**。1.5.3 上想加作弊项，仍然只能 Harmony 补丁 `GetMapCheatList`。
- **`ChangeClanInfluenceAction.Apply(Clan, float)` 的签名没变**，你的直接调用代码不需要为升级改动。
- 对 mod 的实际含义：**Harmony 补丁的目标方法名与迭代器语义是稳定的**，一个「Postfix 重组成 List」的补丁能从 1.3.0 一直用到 1.5.3。但如果官方哪天把 `GetMapCheatList` 从迭代器改成数组，`__result` 的处理代码需要重写——补丁会**静默失效**（枚举数组依然能 foreach，所以更糟：不报错，只是不生效）。

## 依赖关系

- 基类链：`GameplayCheatItem`（`SandBox/GameplayCheatItem.cs`，仅一个抽象 `ExecuteCheat`）→ [GameplayCheatBase](../GameplayCheatBase)（仅一个抽象 `GetName`）
- 注册位置：[GameplayCheatsManager](../GameplayCheatsManager) 的 `GetMapCheatList()` / `GetMissionCheatList()` —— **两个都是 `static` + `yield return`，无注册入口**
- 界面层：[GameplayCheatsVM](../GameplayCheatsVM) → `CheatActionItemVM`（同桶）→ `GameplayCheatsManager`；入口是 [MapScreen](../MapScreen)（同桶）的 `OpenGameplayCheats()`
- 实际效果：`ChangeClanInfluenceAction.Apply(Clan, float)`（同桶，[Clan](../../campaign/Clan) / [Campaign](../../campaign/Campaign) 的 Action 层）
- 同族作弊项（同一批 14 个）：`Add1000GoldCheat` / `Add100RenownCheat` / `AddCraftingMaterialsCheat` / `BoostSkillCheatGroup`（分组的例子）/ `CompleteBuildingProjectCheat`（条件 yield 的例子）/ `FillCraftingStaminaCheat` / `Give5TroopsToPlayerCheat` / `Give10GrainCheat` / `Give10WarhorsesCheat` / `HealPlayerPartyCheat` / `UnlockAllCraftingRecipesCheat` / `UnlockFogOfWarCheat` / `WoundAllEnemiesCheat`（mission 侧）
- 桶首页：[campaign-ext API 分区](../)
