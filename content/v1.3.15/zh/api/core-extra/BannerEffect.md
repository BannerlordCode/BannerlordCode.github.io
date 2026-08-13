---
title: "BannerEffect"
description: "Bannerlord 旗帜增益的静态数据定义：每种旗效含三个等级对应的加成数值、描述与叠加方式，由游戏启动时注册，战斗中经 BannerHelper 累加到部队的伤害、移速与士气结算。"
---
# BannerEffect

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public sealed class BannerEffect : PropertyObject`
**Base:** `PropertyObject`
**File:** `TaleWorlds.Core/BannerEffect.cs`

## 概述

`BannerEffect` 是「一面军团旗能给部队加什么」的**纯数据配方**：每种效果携带三个等级（旗等 1 / 2 / 3）对应的加成数值、一段本地化描述，以及数值的叠加方式（`Add` 直接相加 / `AddFactor` 按比例相乘）。它本身不含任何行为逻辑、也不参与旗帜的图案渲染——它只是被 [BannerComponent](../BannerComponent/) 引用、被战斗模型读取的一张「增益表」。

游戏内置的 14 种旗效（近战伤害、骑射精度、移动速度、士气冲击等）都在 [DefaultBannerEffects](../DefaultBannerEffects/) 里创建并注册；它们通过 XML 中的旗帜物品（`ItemObject` 上挂 [BannerComponent](../BannerComponent/)）绑定到英雄的 `BannerItem`，最终在战斗中由 `BannerHelper.AddBannerBonusForBanner` 把对应等级的加成并入伤害 / 移速 / 士气等 `ExplainedNumber` / `FactoredNumber`。

## 心智模型

把 `BannerEffect` 想象成**一张只读的「增益卡牌配方」**：

- 它是全局共享的只读数据对象，由 `DefaultBannerEffects` 在 `Game` 加载阶段一次性 `new` 出来并 `Initialize`。你几乎**不该**自己 `new BannerEffect(...)` 或调它的 `Initialize`——除非你在模块 XML 里新增自定义旗帜效果，并且清楚它必须在游戏初始化阶段、经 `MBObjectManager` 注册后才会被其它系统读到。
- 每个实例由 `stringId` 唯一标识（例如 `"IncreasedMeleeDamage"`）。跨系统传递、`BannerComponent` 的 XML 引用都以这个 id 为准，反序列化时通过 `MBObjectManager.Instance.GetObject<BannerEffect>(id)` 重新解析。
- 它只负责「定义」加成，不负责「施加」。施加路径是：`BannerComponent.GetBannerEffectBonus()` → `BannerHelper.AddBannerBonusForBanner(...)` → 战斗模型里的 `ExplainedNumber` / `FactoredNumber`。
- `IncrementType` 决定数值如何进入最终结算：`AddFactor`（如 `+0.15`）会按系数放大已有数值，`Add` 则加上一个绝对值；这正是同一条加成在 tooltip 上显示成「+15%」还是「+X」的原因。

## 如何获取 BannerEffect

```csharp
using TaleWorlds.Core;
using TaleWorlds.ObjectSystem;

// 1. 直接拿内置效果实例（最常见）：DefaultBannerEffects 的静态属性
BannerEffect melee  = DefaultBannerEffects.IncreasedMeleeDamage;
BannerEffect morale = DefaultBannerEffects.DecreasedMoraleShock;

// 2. 按 stringId 从对象管理器查询（XML 反序列化、按效果过滤旗帜物品时）
BannerEffect byId = MBObjectManager.Instance.GetObject<BannerEffect>("IncreasedRangedDamage");
if (byId != null)
{
    // 读取 3 级（最高级）时的加成数值
    float bonus = byId.GetBonusAtLevel(3);
}
```

> 不要自己 `new BannerEffect("MyEffect")` 后直接 `Initialize` 就指望战斗里生效——它必须先经 `Game.Current.ObjectManager.RegisterPresumedObject(...)` 登记进 `MBObjectManager`，否则 `GetObject` 查不到、`BannerComponent` 的 XML 也无法引用它。

## 何时用 / 何时不要用

**用它**：读取内置旗效的数值与描述（做自定义 tooltip、平衡性日志、按效果过滤旗帜物品）；或在你自己的战斗 / 属性模型里调用 `BannerHelper.AddBannerBonusForBanner`，把某个已知 `BannerEffect` 的加成叠加到自己的 `ExplainedNumber`。

**不要用它**：

- 不要运行时改写 `_levelBonuses` 或 `IncrementType` 来「临时调平衡」——`BannerEffect` 是全局共享的只读数据，改写会影响所有引用该效果的旗帜，且不会触发任何刷新。需要改平衡应修改模块 XML 或替换 `DefaultBannerEffects`。
- 不要把它当作施加增益的入口。给部队加 buff 走 `BannerHelper` / 战斗模型，而不是手动 `GetBonusAtLevel` 后自己写字段。
- 不要把它和视觉旗帜 [Banner](../Banner/) 混为一谈：前者是数值配方，后者是颜色 / 纹章的图案对象；两者只在「某面旗同时有图案和效果」这一事实下间接相关。

## 主要成员

### 身份与定义

#### `public BannerEffect(string stringId)`
以 `stringId` 作为全局唯一标识创建实例。注册与查找都依赖这个 id，因此必须与 XML 中 `BannerComponent` 的 `effect` 属性、以及 `DefaultBannerEffects` 里的命名保持一致。

#### `public void Initialize(string name, string description, float level1Bonus, float level2Bonus, float level3Bonus, EffectIncrementType incrementType)`
填充效果的名称、描述与三个等级的加成数值，并设定叠加方式。必须在 `Game` 加载阶段、`MBObjectManager.GetObject` 之前调用；调用后会触发 `AfterInitialized`，把 `name`/`description` 封装成 `TextObject` 供本地化使用。

```csharp
// 出自 DefaultBannerEffects.InitializeAll —— 这是官方注册内置效果的方式
_increasedMeleeDamage.Initialize(
    "{=unaWKloT}Increased Melee Damage",
    "{=8ZNOgT8Z}{BONUS_AMOUNT}% melee damage to troops in your formation.",
    0.05f, 0.1f, 0.15f,
    EffectIncrementType.AddFactor);
```

#### `public EffectIncrementType IncrementType { get; private set; }`
叠加方式：`Add` 表示把数值作为绝对值累加，`AddFactor` 表示作为系数相乘（显示成百分比）。注册后不可改；读取它可判断该效果应进 `ExplainedNumber.Add` 还是 `ExplainedNumber.AddFactor`。

### 读取加成

#### `public float GetBonusAtLevel(int bannerLevel)`
返回指定旗等（1 / 2 / 3）对应的加成数值。参数越界会被 `MBMath.ClampIndex` 钳制到 `0..2`，所以传 `0` 或 `4` 都不会抛异常，而是回落到有效等级——但通常你应当传英雄旗帜物品上 `BannerComponent.BannerLevel` 的真实值。

```csharp
BannerComponent comp = hero.BannerItem.Item.ItemComponent as BannerComponent;
if (comp != null)
{
    float bonus = comp.BannerEffect.GetBonusAtLevel(comp.BannerLevel);
}
```

#### `public string GetBonusStringAtLevel(int bannerLevel)`
同 `GetBonusAtLevel`，但返回格式化后的百分比字符串（如 `"15.00%"`，用 `{0:P2}` 格式）。适合直接塞进 tooltip。

### 描述与显示

#### `public TextObject GetDescription(int bannerLevel)`
返回带当前等级加成插值的本地化描述。若加成大于 0，会在描述里插入 `{PLUS_OR_MINUS}+` 与 `{BONUSEFFECT}` 占位符；否则只替换 `{BONUS_AMOUNT}`。返回的是 `TextObject`，可继续 `ToString()` 或参与对话文本拼接。

```csharp
TextObject desc = DefaultBannerEffects.DecreasedMoraleShock.GetDescription(comp.BannerLevel);
InformationManager.DisplayMessage(new InformationMessage(desc.ToString()));
```

#### `public override string ToString()`
返回该效果的名称（`base.Name`）。多用在日志与调试输出，不要依赖它做逻辑判断。

## 最小真实示例

### 示例 1：按 stringId 查一个内置旗效并读取其 3 级加成

```csharp
using TaleWorlds.Core;
using TaleWorlds.ObjectSystem;

BannerEffect effect = MBObjectManager.Instance.GetObject<BannerEffect>("IncreasedTroopMovementSpeed");
if (effect != null)
{
    float topBonus = effect.GetBonusAtLevel(3);   // 0.3f
    string label   = effect.GetBonusStringAtLevel(3); // "30.00%"
}
```

### 示例 2：读取某英雄部队旗帜的效果并把它并入伤害结算

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.Core;
using Helpers;

Hero leader = clan.Leader;
if (!leader.BannerItem.IsInvalid())
{
    BannerComponent comp = leader.BannerItem.Item.ItemComponent as BannerComponent;
    if (comp != null)
    {
        ExplainedNumber damageBonus = new ExplainedNumber(0f);
        // 仅当 comp 的效果恰好是 IncreasedMeleeDamage 时才叠加
        BannerHelper.AddBannerBonusForBanner(DefaultBannerEffects.IncreasedMeleeDamage, comp, ref damageBonus);
        // damageBonus.ResultNumber 即该英雄部队当前旗帜的近战伤害加成
    }
}
```

## 跨版本提示

- v1.3.0 / v1.3.15 / v1.4.5：本类公开 API（`IncrementType`、`Initialize`、`GetBonusAtLevel`、`GetBonusStringAtLevel`、`GetDescription`、`ToString`）三版**完全一致**，无破坏性差异。
- 注意 `BannerHelper` 有两个同名的副本：战役侧 `Helpers.BannerHelper`（操作 `ExplainedNumber`）与战斗侧 `TaleWorlds.MountAndBlade.MBHelpers.BannerHelper`（操作 `FactoredNumber`）；写战役逻辑用前者，写战斗模型用后者。

## 依赖图

- 上游：[MBObjectManager](../../campaign-ext/MBObjectManager/) 与 [Game](../Game/) 在加载阶段创建并持有全部 `BannerEffect` 实例；注册通过 `RegisterPresumedObject` 完成，定义在 [DefaultBannerEffects](../DefaultBannerEffects/)。
- 下游：[BannerComponent](../BannerComponent/) 通过 `effect` XML 属性持有 `BannerEffect` 引用并提供 `GetBannerEffectBonus()`；`BannerHelper` 把加成并入 `ExplainedNumber` / `FactoredNumber`。
- 消费系统：战斗模型 [CustomAgentApplyDamageModel](../../mission-ext/CustomAgentApplyDamageModel/)、[CustomBattleAgentStatCalculateModel](../../mission-ext/CustomBattleAgentStatCalculateModel/)、[CustomBattleMoraleModel](../../mission-ext/CustomBattleMoraleModel/) 在结算 Agent 时按部队旗帜效果调用 `AddBannerBonusForBanner`。
- 相关类型：[ItemObject](../../core/ItemObject/)（旗帜物品本体）、[EffectIncrementType](../EffectIncrementType/)（叠加方式枚举）、[Banner](../Banner/)（视觉旗帜图案）。
- 存档：实例随 `MBObjectManager` 管理的游戏对象一起持久化（见 [存档系统](../../../architecture/save-system/)）；`BannerComponent` 在反序列化时按 `effect` 字符串重新 `GetObject` 解析（见 [模块系统](../../../architecture/module-system/)）。

## 导航

- ↑ 父级：[core-extra 索引](../)
- ↔ 同级：[Banner](../Banner/) · [BannerComponent](../BannerComponent/) · [DefaultBannerEffects](../DefaultBannerEffects/) · [EffectIncrementType](../EffectIncrementType/) · [Equipment](../Equipment/)
- 相关类：[Banner](../Banner/) · [BannerComponent](../BannerComponent/) · [ItemObject](../../core/ItemObject/) · [MBObjectManager](../../campaign-ext/MBObjectManager/) · [ExplainedNumber](../../campaign-ext/ExplainedNumber/)
