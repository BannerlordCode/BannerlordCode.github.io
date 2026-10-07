---
title: "DefaultSettlementProsperityModel"
description: "官方默认的城镇繁荣度与村庄炉灶增长模型：用 ExplainedNumber 逐项累加政策、perk、村庄状态等修正，是理解「模型如何组装可解释数值」的样板。"
---

# DefaultSettlementProsperityModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultSettlementProsperityModel : SettlementProsperityModel`
**Base:** `SettlementProsperityModel`（`MBGameModel<SettlementProsperityModel>` 的抽象接口）
**Source:** `bannerlord-1.5.3/TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementProsperityModel.cs`

## 概述

这是官方对 `SettlementProsperityModel` 两个抽象方法的默认实现，回答两个问题：**一个城镇的繁荣度今天会变多少**，**一个村庄的炉灶数今天会涨多少**。它不保存状态、不订阅事件、不做缓存——每次调用都从当前世界状态重新算一遍，并把结果包成 `ExplainedNumber`（数值 + 一串带文本的修正项），供 UI 直接显示成「+1.2 繁荣度（丰收：+0.8 / 掠夺：-1.0）」。它是 mod 做经济平衡时最常被替换的模型之一。

## 心智模型

两个 public 方法，两条 internal 路径：

- `CalculateProsperityChange(Town, bool includeDescriptions)` → 构造 `ExplainedNumber(0f, ...)`，交给私有的 `CalculateProsperityChangeInternal` 逐项 `Add`。返回的是**今日增量**，不是绝对值；绝对值在 `Town.SettlementProsperity` 上。
- `CalculateHearthChange(Village, bool includeDescriptions)` → 先按 `VillageState` 给一个基准值（`Normal` 下按炉灶数分档：<300 给 4.0，<600 给 1.2，否则 0.2），再逐项叠加修正。

`includeDescriptions` 控制是否收集说明项。**UI 路径传 `true`（要显示 tooltip），AI/逻辑路径传 `false`（省掉字符串与列表分配）**。这个布尔位是最容易忽略的性能点。

两个方法都是**纯函数**：同样的世界状态 + 同样的参数 = 同样的输出。没有隐藏的静态状态，所以多线程读是安全的。

**常见误用与坑**

1. **覆盖后忘了 `includeDescriptions` 透传**：包装式覆盖里写 `BaseModel.CalculateProsperityChange(town)` 会丢掉调用方的意图，UI tooltip 变成空白。
2. **在 override 里写绝对值**：接口语义是「今日变化量」。写绝对繁荣度会让聚落的每日 tick 把数值累加到天上。
3. **用 `Default*Model` 作为覆盖基类**：应该继承 `MBGameModel<SettlementProsperityModel>` 包抽象接口，这样本体换实现时你的 mod 仍能工作。
4. **在模型里做缓存**：模型每次调用都读世界状态，缓存会在读档后失效。
5. **`ExplainedNumber` 的说明项要带文本**：`Add(value, text, null)` 的第二个参数就是 UI 展示的字符串，填 null 会得到一个没有标签的修正项。

## 怎么用

### 怎么拿到它

它没有实例，只有一堆常量。注册点唯一：`SandBoxManager.Initialize`（战役启动期）里 `gameStarter.AddModel<SettlementProsperityModel>(new DefaultSettlementProsperityModel())`（`SandBoxManager.cs:306`）——注意注册的是**抽象基类** `SettlementProsperityModel`，这个类只是它的默认实现。

读它的唯一入口是 `Campaign.Current.Models.SettlementProsperityModel`（`GameModels.cs:703` 绑定，`Campaign.cs:557` 暴露），拿到的是 `SettlementProsperityModel`。两个 override 的实参：`CalculateProsperityChange(Town fortification, bool includeDescriptions = false)`（`DefaultSettlementProsperityModel.cs:18`）和 `CalculateHearthChange(Village village, bool includeDescriptions = false)`（`:26`），都返回 `ExplainedNumber`。`includeDescriptions = false` 时逐项文本不会写进结果，`:38` 那条 hearth 判定也一样会把描述置空。

### 典型用法

```csharp
// 1) 直接调用（includeDescriptions=true 才能拿到界面上的逐项解释）
ExplainedNumber change = Campaign.Current.Models.SettlementProsperityModel
    .CalculateProsperityChange(town, includeDescriptions: true);
Debug.Print("prosperity delta = " + change.ResultNumber);

// 2) 打包替换：BaseModel 里留着原实现，只调 super 之外的部分
public class MyProsperityModel : MBGameModel<SettlementProsperityModel>
{
    public override ExplainedNumber CalculateHearthChange(Village village, bool includeDescriptions = false)
    {
        ExplainedNumber r = BaseModel.CalculateHearthChange(village, includeDescriptions);
        if (village.Bound?.Town != null && village.Bound.Town.IsFortification)
            r.Add(0.5f, new TextObject("fortified hearth bonus"), null);
        return r;
    }
}

// 3) 注册：类型参数填抽象基类，实现填你的子类
((CampaignGameStarter)gameStarterObject)
    .AddModel<SettlementProsperityModel>(new MyProsperityModel());
```

### 最容易踩的坑

忘了 `includeDescriptions` 默认是 `false`，然后去读结果里的逐项文本。两个方法各自新建 `ExplainedNumber(0f, includeDescriptions, null)`（`:20`、`:28`）——第二个参数直接决定它收不收集描述；`:38` 那条 hearth 分支甚至连 `result.Add` 的说明文本都只在开启时才带得上。后果是 `ResultNumber` 完全正确，但界面上繁荣度变化那一栏的明细一行都不显示，或者显示成空白；更糟的是你在调试时反复检查加法逻辑怎么都找不到问题，因为数字是对的。要拿明细就必须显式传 `includeDescriptions: true`。

## 成员与调用时机

- `ExplainedNumber CalculateProsperityChange(Town fortification, bool includeDescriptions = false)`：城镇繁荣度日变化。城镇每日 tick 与 AI 评估聚落价值时调用。`fortification` 为 null 会直接崩在内部逻辑上。
- `ExplainedNumber CalculateHearthChange(Village village, bool includeDescriptions = false)`：村庄炉灶日变化。村庄每日 tick 调用。
- 私有 `CalculateProsperityChangeInternal(Town, ref ExplainedNumber)` / `CalculateHearthChangeInternal(Village, ref ExplainedNumber, bool)`：真正的逐项累加。内含 `DefaultPolicies.GrazingRights` 之类政策判定，以及通过 `PerkHelper.AddPerkBonusForTown(...)` 叠加 `DefaultPerks.Medicine.BushDoctor`、`Athletics.Energetic` 等 perk 修正。

**修正项的典型来源（读代码时的地图）**

- 村庄状态：`VillageStates.Looted` 直接扣减。
- 王国政策：如 `DefaultPolicies.GrazingRights`（放牧权）对炉灶增长有负修正。
- 城镇绑定村庄的 perk：通过绑定关系把城镇 perk 传导到村庄。
- `RaidedText` 之类的本地化文本常量。

## 真实示例

```csharp
// 查询：永远从 Campaign.Current.Models 现取，读档后不会拿到旧实例
public override void DailyTick()
{
    SettlementProsperityModel model = Campaign.Current.Models.SettlementProsperityModel;
    if (model == null) return;

    Town town = Campaign.Current.Settlements.FirstOrDefault(s => s.Town != null)?.Town;
    if (town == null) return;

    ExplainedNumber change = model.CalculateProsperityChange(town, false);
    Debug.Print(town.Name + " prosperity change today: " + change.ResultNumber);
}

// 覆盖：包装抽象接口，未覆盖部分委托给 BaseModel
public class MyProsperityModel : MBGameModel<SettlementProsperityModel>
{
    public override ExplainedNumber CalculateHearthChange(Village village, bool includeDescriptions = false)
    {
        ExplainedNumber result = BaseModel != null
            ? BaseModel.CalculateHearthChange(village, includeDescriptions)
            : new ExplainedNumber(0f, includeDescriptions, null);

        if (village != null && village.Settlement != null && village.Settlement.OwnerClan == Hero.MainHero?.Clan)
            result.Add(0.3f, new TextObject("{=MyMod_hearth_bonus}MyMod hearth bonus"), null);

        return result;
    }
}
```

## 风险与边界

- **无存档风险**：纯计算模型，状态来自世界对象。
- **政策/perk 依赖**：默认实现读 `DefaultPolicies`、`DefaultPerks` 里的**具体对象**。你的 mod 如果替换了政策或 perk 集合，这里的行为会跟着变——覆盖模型时别把这层依赖当成稳定契约。
- **`includeDescriptions` 的成本**：`true` 会分配说明项列表。AI 高频路径（每次 think 都算）务必传 `false`。
- **调用时机依赖每日 tick**：模型只算「变化量」，真正的应用在原生聚落每日逻辑里。如果你在自己的每日回调里又算一次并手动 apply，会双倍增长。
- **跨域方向**：类在 `TaleWorlds.CampaignSystem.GameComponents`，可引用 Core / CampaignSystem；不要引入 ScreenSystem。

## 依赖关系

- [GameModels](../../campaign/GameModels) — 通过 `Campaign.Current.Models.SettlementProsperityModel` 拿到生效实例
- [GameModel](../../core-extra/GameModel) — 模型体系的抽象根
- [MBGameModel](../../core-extra/MBGameModel) — 覆盖式实现的基类，`BaseModel` 指向本类
- [CampaignGameStarter](../../campaign/CampaignGameStarter) — `AddModel<SettlementProsperityModel>(new DefaultSettlementProsperityModel())` 的注册点