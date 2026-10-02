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

## 主要成员

- `static BannerEffect DragonBannerEffect { get; }`：**唯一的取用入口**。转发到 `StoryModeManager.Current.StoryModeBannerEffects._dragonBannerEffect`。非主线战役 NRE。
- `StoryModeBannerEffects()`：**public 构造函数**，内容就是 `RegisterAll()`。正常流程由 `StoryModeManager` 调。
- `private void RegisterAll()`：私有流程编排——`Create` 然后 `InitializeAll`。
- `private BannerEffect Create(string stringId)`：私有工厂。`new BannerEffect(stringId)` + `RegisterPresumedObject<BannerEffect>`。
- `private void InitializeAll()`：私有流程，只调一次 `Initialize`，参数全是占位。
- `private const string NotImplementedText`：占位文案 `"{=!}Not Implemented."`，**声明了但 `InitializeAll` 里用的是字面量**，不是这个常量。
- `private BannerEffect _dragonBannerEffect`：实际持有的对象。

## 使用示例

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