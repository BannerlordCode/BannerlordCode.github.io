---
title: "StoryModeBannerEffects"
description: "龙旗旗帜特效的注册表：运行时造出一个 BannerEffect 并挂进 MBObjectManager，取用只有一个静态属性。"
---
# StoryModeBannerEffects

**Namespace:** StoryMode.StoryModeObjects
**Module:** StoryMode
**Type:** `public class StoryModeBannerEffects`
**Base:** `System.Object`
**Source:** `bannerlord-1.5.3/StoryMode/StoryModeObjects/StoryModeBannerEffects.cs`

## 概述

`BannerEffect` 描述的是「玩家把某面旗帜插在地图上」时的视觉效果，而 `Game.Current.ObjectManager` 里只有 XML 定义的那批。主线的龙旗（`dragon_banner`）不在 XML 里，所以这个类在战役加载完成后**手工 new 一个 `BannerEffect` 并注册进 `MBObjectManager`**，让它成为一个合法的「已存在对象」。全类只有一个特效、一个静态访问属性。

## 心智模型

生命周期极短，分三步：

1. `StoryModeManager.InitializeStoryModeObjects()` 里 `new StoryModeBannerEffects()`——**构造函数就是 `RegisterAll()`**，没有任何前置条件。
2. `RegisterAll()` 调 `Create("dragon_banner_effect")`，内部是 `Game.Current.ObjectManager.RegisterPresumedObject<BannerEffect>(new BannerEffect(stringId))`。`RegisterPresumedObject` 的语义是「我有一个已存在的对象要登记进去」，不是「从 XML 加载」。
3. `InitializeAll()` 给这个特效灌入四条文案和四个数值参数，全部是占位。

取用只有一个静态属性 `DragonBannerEffect`，它转发到 `StoryModeManager.Current.StoryModeBannerEffects._dragonBannerEffect`。

**坑（而且是本类最要紧的一条）**：

**`Initialize` 传的是四组占位值**——两条 `{=!}Not Implemented.` 文案、`0f, 0f, 0f` 三个数值、以及 `EffectIncrementType.Invalid`。也就是说**1.5.3 里龙旗插到地图上不会有任何视觉效果**，因为文案是 "Not Implemented."、增量类型是 `Invalid`。想让它真的表现正常，你的 mod 必须在注册后重新调一次 `Initialize` 覆盖这些参数。

其它坑：

1. **静态属性在非主线战役必 NRE**：`StoryModeManager.Current` 为 null 时直接抛异常。
2. **加载未完成时也 NRE**：`Current.StoryModeBannerEffects` 在 `InitializeFirstStep` 之前是 null。
3. **不能重复注册**：`RegisterPresumedObject` 若 id 已被占用（重复 `new StoryModeBannerEffects()`），行为取决于 `MBObjectManager` 实现——大概率抛异常或静默覆盖。别试图 new 第二个。
4. **构造函数是 `public`**（与 [StoryModeHeroes](../StoryModeHeroes) 的 `internal` 不同），意味着 mod **能** new 一个出来，但那样只会得到一份没人引用的孤儿对象。

## 怎么用

### 怎么拿到它

`public class StoryModeBannerEffects` 声明在 `bannerlord-1.5.3/StoryMode/StoryModeObjects/StoryModeBannerEffects.cs:7`，全文 50 行。静态类外观不是——它是个普通类，构造函数是 `public StoryModeBannerEffects()`（`:20`），内部调 `this.RegisterAll()`（`:22`，实现在 `:26`）：

- `this._dragonBannerEffect = this.Create("dragon_banner_effect")`（`:28`）
- `Create`（`:33`）走 `Game.Current.ObjectManager.RegisterPresumedObject<BannerEffect>(new BannerEffect(stringId))`（`:35`）——**向全局对象管理器登记一个新对象**
- `RegisterAll` 紧接着调 `InitializeAll()`（`:29`，实现在 `:39`），把效果初始化成三段全空值：`Initialize("{=!}Not Implemented.", "{=!}Not Implemented.", 0f, 0f, 0f, EffectIncrementType.Invalid)`（`:41`），文案用的是 `private const string NotImplementedText`（`:45`）。

**唯一的取用入口是静态属性 `DragonBannerEffect`**（`:11`），函数体只有一行 `StoryModeManager.Current.StoryModeBannerEffects._dragonBannerEffect`（`:15`）——注意它每次访问都重新读一遍，不缓存。

对象本身只有一个创建者：`StoryModeManager.InitializeStoryModeObjects()`（`StoryModeManager.cs:94`）里的 `new StoryModeBannerEffects()`，而那个 internal 方法只被 `CampaignStoryMode.DoLoadingForGameType` 的 `InitializeFirstStep` 分支调（`CampaignStoryMode.cs:42`）。属性 `StoryModeBannerEffects` 在 `StoryModeManager.cs:65`，**不进存档**。

因为构造函数是 `public`，mod 确实能 new——但那样只会向 `MBObjectManager` 多登记一个 `"dragon_banner_effect"` 而没人引用它。

### 典型用法

```csharp
// 标准读法：先确认战役与初始化都完成了
if (Game.Current.GameType is CampaignStoryMode mode && mode.StoryMode.StoryModeBannerEffects != null)
{
    BannerEffect effect = StoryModeBannerEffects.DragonBannerEffect;
    Debug.Print("龙旗特效 StringId=" + effect.StringId);
}

// 使用效果：BannerEffect 是 sealed class（TaleWorlds.Core/BannerEffect.cs:8），
// 只能读它的三档加成，不能继承覆写
BannerEffect dragon = StoryModeBannerEffects.DragonBannerEffect;
Debug.Print("增量类型=" + dragon.IncrementType + " 一档加成=" + dragon.GetBonusAtLevel(1)
    + " 文案=" + dragon.GetDescription(1));

// 合并后的完整龙旗物品在 MainStoryLine 上（不进存档，只在会话启动时取一次）
ItemObject full = StoryModeManager.Current.MainStoryLine.DragonBanner;   // MainStoryLine.cs:90，赋值在 :124
Debug.Print(full.Name.ToString());
```

### 最容易踩的坑

`InitializeAll()` 把三个数值参数全写成 `0f`、`0f`、`0f`，`EffectIncrementType` 写的是 `Invalid`（`:41`）。这不是占位待填——它是**这个版本里龙旗特效的真实状态**：常量 `NotImplementedText`（`:45`）的字面量就是 `{=!}Not Implemented.`，明说了未实现。你如果指望 `DragonBannerEffect` 在主线拿到龙旗时自动播放一段特效，实际结果是拿到一个三档加成全为 `0f`、`IncrementType` 为 `Invalid` 的效果对象。而 `BannerEffect` 本身是 `public sealed class`（`TaleWorlds.Core/BannerEffect.cs:8`），**你也不能继承它来覆写 `Initialize`**。想在 mod 里给龙旗配真实的加成，唯一可行的路是用 `Game.Current.ObjectManager` 按自己的 StringId 另建一个 `BannerEffect` 实例并单独 `Initialize`，然后在旗物品的解析处改指向。

## 主要成员

- `static BannerEffect DragonBannerEffect { get; }`：**唯一的取用入口**。转发到 `StoryModeManager.Current.StoryModeBannerEffects._dragonBannerEffect`。非主线战役 NRE。
- `StoryModeBannerEffects()`：**public 构造函数**，内容就是 `RegisterAll()`。正常流程由 `StoryModeManager` 调。
- `private void RegisterAll()`：私有流程编排——`Create` 然后 `InitializeAll`。
- `private BannerEffect Create(string stringId)`：私有工厂。`new BannerEffect(stringId)` + `RegisterPresumedObject<BannerEffect>`。
- `private void InitializeAll()`：私有流程，只调一次 `Initialize`，参数全是占位。
- `private const string NotImplementedText`：占位文案 `"{=!}Not Implemented."`，**声明了但 `InitializeAll` 里用的是字面量**，不是这个常量。
- `private BannerEffect _dragonBannerEffect`：实际持有的对象。

## 使用示例

<!-- xml-id-unverifiable: v1.5.3 -->
> ⚠️ 不可验证：本页全部字符串 id（下方代码示例中的）在 v1.5.3 源码树均无法核对——该版本未随附 XML 语料。
```csharp
// 1) 取龙旗特效（先确认是主线战役且加载完成）
StoryModeManager manager = StoryModeManager.Current;
if (manager != null && manager.StoryModeBannerEffects != null)
{
    BannerEffect effect = StoryModeBannerEffects.DragonBannerEffect;
    Debug.Print("龙旗特效 id = " + effect.StringId);   // dragon_banner_effect
}

// 2) 覆盖原生占位参数：原生传的是 "Not Implemented." + EffectIncrementType.Invalid，
//    想让龙旗真的有视觉效果就自己重新 Initialize 一次
BannerEffect dragon = StoryModeBannerEffects.DragonBannerEffect;
if (dragon != null)
{
    dragon.Initialize(
        "{=!}龙旗已插在地上。",
        "{=!}龙旗的威势在战场上蔓延。",
        1f, 1f, 1f,
        EffectIncrementType.Add);
}

// 3) 自己造一个 BannerEffect 也得走同一条注册路径
BannerEffect custom = Game.Current.ObjectManager.RegisterPresumedObject<BannerEffect>(
    new BannerEffect("my_custom_banner_effect"));
custom.Initialize("{=!}插旗了。", "{=!}旗帜在风中飘扬。", 0.5f, 0.5f, 0.5f, EffectIncrementType.AddFactor);
```

## 风险与边界

- **原生是未实现状态**：直接用 `DragonBannerEffect` 玩家看到的是 "Not Implemented." 和 `EffectIncrementType.Invalid`。要真效果必须自己覆盖 `Initialize`。
- **`EffectIncrementType` 只有三个值**：`Invalid = -1`、`Add`、`AddFactor`。没有 `Value`。加成语义按这三个走。
- **`Initialize` 会调 `AfterInitialized()`**：重复初始化会再次触发 `MBObjectBase` 的收尾逻辑，不是幂等的纯 setter。覆盖原生占位值时确认自己知道后果。
- **静态访问无兜底**：非主线战役 / 加载未完成，两种情况都是 NRE，不是返回 null。
- **重复构造有风险**：`RegisterPresumedObject` 对已存在 id 的行为不保证。构造函数虽然是 public，但正常流程外不该 new。
- **参数顺序即语义**：`Initialize(string name, string description, float level1Bonus, float level2Bonus, float level3Bonus, EffectIncrementType incrementType)`，三个 float 是三级旗帜的加成百分比，`GetBonusAtLevel(level)` 按 `level - 1` 取值并 `ClampIndex`。本类全传 0，所以 `GetBonusStringAtLevel` 会显示 `0.00%`。
- **不存档**：这个对象是 MBObjectManager 里的运行时对象，靠 id 引用。要在存档里定位它请用 `dragon_banner_effect` 这个 StringId。

## 依赖关系

- [StoryModeManager](../StoryModeManager) — `InitializeStoryModeObjects()` 创建本对象；静态属性经 `Current` 转发
- [CampaignStoryMode](../CampaignStoryMode) — 加载状态机里触发创建的地方
- [StoryModeHeroes](../StoryModeHeroes) — 与本类在同一次 `InitializeStoryModeObjects` 里被创建，生命周期完全一致
- [FirstPhase](../FirstPhase) — 合成完整 `dragon_banner` 的那一阶段，与本类的特效对象配套