---
title: "AdditionType"
description: "文化特性 FeatObject 的两个增量模式：Add 与 AddFactor。写进 FeatObject.IncrementType 后，在整个 1.3.0 源码树里没有任何一处读取它 —— 与被大量读取的 EffectBonus 完全不同。"
---

# AdditionType

**Namespace:** `TaleWorlds.CampaignSystem.CharacterDevelopment`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public enum AdditionType`
**Base:** 无（`System.Int32` 底层枚举，不是 `FlagsAttribute`）
**File:** `TaleWorlds.CampaignSystem/CharacterDevelopment/FeatObject.cs`（`:52`，嵌套在 `FeatObject` 内）

## 概述

`AdditionType` 只有两个值：`Add` 与 `AddFactor`。它的语义是**「这个特性的效果该怎么加成」**——`Add` 是加一个绝对量，`AddFactor` 是乘一个系数。

它是**嵌套在 `FeatObject` 里的枚举**（完整名 `FeatObject.AdditionType`），唯一持有者是 `public FeatObject.AdditionType IncrementType { get; private set; }`。`FeatObject.Initialize(string name, string description, float effectBonus, bool isPositiveEffect, FeatObject.AdditionType incrementType)` 的最后一个参数就是它。

**这里有一件必须直说的事：在整个 `bannerlord-1.3.0` 源码树里，没有任何一处读取 `FeatObject.IncrementType`。** 对 1.3.0 的全部 `.cs` 文件做 `IncrementType` 全量搜索，命中的只有三处，全在 [FeatObject](../FeatObject) 自己身上：`:29` 的属性声明、`:42` 的 `Initialize` 形参、`:46` 的 `this.IncrementType = incrementType;` 赋值。**没有消费点。**

对照之下，同一个类上的 `EffectBonus` 被读了**二十余处**——`DefaultArmyManagementCalculationModel.cs:109` / `:175` / `:179`、`DefaultBattleRewardModel.cs:56`、`DefaultBuildingConstructionModel.cs:189`、`DefaultCaravanModel.cs:65`、`DefaultDiplomacyModel.cs:1064`、`DefaultPartySpeedCalculatingModel.cs:225`、`DefaultPartyTroopUpgradeModel.cs:96`、`KingdomElection.cs:260` 等，全是 `num += ... .EffectBonus` 或 `result.AddFactor(....EffectBonus, ...)` 的形式。`IsPositive` 也被读了（`CharacterCreationCultureVM.cs:32` / `:36` 按正负分成两栏展示）。

**所以 `Add` 与 `AddFactor` 的区别，在 1.3.0 的运行期逻辑里根本不生效。** 真正驱动加成形态的是每个调用点**自己**决定的——`DefaultBuildingConstructionModel.cs:189` 用 `result.AddFactor(DefaultCulturalFeats.BattanianConstructionFeat.EffectBonus, ...)`（乘），而 `DefaultCaravanModel.cs:65` 用 `MathF.Round((float)num * DefaultCulturalFeats.AseraiTraderFeat.EffectBonus)`（也是乘），`DefaultArmyManagementCalculationModel.cs:109` 用 `num += num * ...EffectBonus`（先乘再相加）。**同一批特性在不同模型里的用法本身就不统一**，这反过来印证了 `IncrementType` 没有被统一消费。

## 心智模型

把它当成**「一个已写好但当前没接线的字段的类型」**。三条定位规则：

**第一，它描述意图，不描述行为。** `Add` / `AddFactor` 表达的是数据作者（XML / `DefaultCulturalFeats`）的心愿：这个值是「+5 点」还是「×1.2 倍」。**愿望要变成行为需要一段消费代码，而 1.3.0 里没有这段代码。**

**第二，判断某个文化特性到底怎么生效，不要读 `IncrementType`，要读消费它的那个 `XxxModel`。** 想确认「巴旦尼亚的建造加成是加还是乘」，唯一可靠的办法是打开 `DefaultBuildingConstructionModel.cs:189` 看它怎么写——那行代码就是全部真相。`IncrementType` 在那里没有被引用。

**第三，别把它和 `EffectIncrementType` 搞混。** `TaleWorlds.CampaignSystem.CharacterDevelopment` 里有**两个**用途相近的枚举：`FeatObject.AdditionType`（本文，`Add` / `AddFactor`）与技能/横幅效果用的 `EffectIncrementType`（`DefaultPerks.cs` 里大量出现 `EffectIncrementType.AddFactor` / `EffectIncrementType.Add` / `EffectIncrementType.Invalid`，见 [PerkObject](../PerkObject) 与 `SkillHelper.cs:81`）。**名字几乎相同，取用对象完全不同**，且**后者是真被读的**（`SkillHelper.cs:81` 的 `effect.IncrementType == EffectIncrementType.AddFactor ? skillEffectValue * 100f : skillEffectValue`）。如果你想要「Add 还是 AddFactor 真的起作用」的效果，要找的是 `EffectIncrementType` 那条线。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `Add` | `Add`（隐式值 0） | 「加一个绝对量」的意图标记。它是 `default(FeatObject.AdditionType)`，所以任何没显式传值的 `FeatObject` 都会得到它。**但由于 1.3.0 没有消费点，这个标记不产生任何运行期效果。** 它也不是 `EffectIncrementType.Invalid` 的同义词——那两个枚举是完全独立的类型。 |
| `AddFactor` | `AddFactor`（隐式值 1） | 「乘一个系数」的意图标记。同样在 1.3.0 里没有消费点。真正的「乘」是在各个 `DefaultXxxModel` 里手写死的，例如 `DefaultBuildingConstructionModel.cs:189` 的 `result.AddFactor(DefaultCulturalFeats.BattanianConstructionFeat.EffectBonus, DefaultBuildingConstructionModel.CultureText)` 与 `DefaultPartyTroopUpgradeModel.cs:96` 的同类写法。 |

两个成员都没有显式数值，隐式 0 / 1，依赖声明顺序。

## 真实示例

给一个自定义文化特性填上这个枚举（`FeatObject.Initialize` 的第五个参数）：

```csharp
FeatObject myFeat = Game.Current.ObjectManager.RegisterPresumedObject<FeatObject>(
    new FeatObject("my_caravan_yields"));
myFeat.Initialize(
    "{=myCaravanYields}Thrifty Traders",
    "{=myCaravanYieldsDesc}Caravan goods sell for more.",
    0.15f,
    true,
    FeatObject.AdditionType.AddFactor);

Debug.Print(myFeat.IncrementType + " bonus = " + myFeat.EffectBonus, 0);
```

`Initialize` 的形状是 `public void Initialize(string name, string description, float effectBonus, bool isPositiveEffect, FeatObject.AdditionType incrementType)`——它内部先 `base.Initialize(new TextObject(name, null), new TextObject(description, null))`，再依次赋 `EffectBonus`、`IncrementType`、`IsPositive`，最后 `base.AfterInitialized()`。**注意 `name` / `description` 是 `string` 而不是 `TextObject`**，转换在方法内部完成。

真正让它生效的做法——**在消费它的模型里写死乘法**（照抄 `DefaultBuildingConstructionModel.cs:187-190` 的形状）：

```csharp
public override ExplainedNumber CalculateDailyConstructionPower(Town town, bool includeDescriptions = false)
{
    ExplainedNumber result = base.CalculateDailyConstructionPower(town, includeDescriptions);

    if (town.OwnerClan.Culture.HasFeat(myFeat))
    {
        result.AddFactor(myFeat.EffectBonus, myFeat.Name);
    }

    return result;
}
```

`CultureObject.HasFeat(FeatObject feat)` 是 `CultureObject.cs:42` 上的真实方法，`GetCulturalFeats(Func<FeatObject, bool> predicate = null)` 在 `:48`。`ExplainedNumber.AddFactor(float value, TextObject description = null)` 在 `ExplainedNumber.cs:189`。**这段代码读的是 `myFeat.EffectBonus` 而不是 `myFeat.IncrementType`——这就是 1.3.0 的事实。**

## 风险与边界

- **1.3.0 里没有任何消费点。** 全树 `IncrementType` 搜索只命中 `FeatObject.cs` 的三行（声明、形参、赋值）。**给它填 `Add` 或 `AddFactor` 对游戏行为零影响。**
- **`sealed` 且 `IncrementType` 的 setter 是 `private`。** `FeatObject` 是 `public sealed class FeatObject : PropertyObject`，`public FeatObject.AdditionType IncrementType { get; private set; }`——外部无法修改一个已初始化特性的 `IncrementType`，唯一写入点是 `Initialize`。
- **可以重复调用 `Initialize`。** 没有一次性保护，第二次调用会覆盖 `EffectBonus` / `IncrementType` / `IsPositive`。要不要重填由你决定，但不会有任何提示。
- **名字撞车。** `FeatObject.AdditionType` 与 `TaleWorlds.CampaignSystem.CharacterDevelopment.EffectIncrementType` 是两个独立类型，后者在 `DefaultPerks.cs` 里被大量使用且**真的生效**。在同一个 `using` 环境下写 `AddFactor` 可能解析到错误的类型——**写全限定名**。
- **别拿它判断加成语义。** 要知道「这个文化特性是加还是乘」，去读消费它的那个 `DefaultXxxModel` 的具体那一行。
- **`EffectBonus` 才是有效的那一半。** 它被二十余处读取，覆盖军团影响力、声望、建筑、车队速度、外交决策、募兵升级等。`IncrementType` 没有对应待遇。
- **隐式值绑定声明顺序。** 两个成员都没写数值，`Add == 0` / `AddFactor == 1`。不是 `Flags`，按位或无意义且不报错。
- **嵌套类型。** 完整名 `FeatObject.AdditionType`。`FeatObject.Initialize` 的第五个参数签名里写的就是 `FeatObject.AdditionType`。

## 跨版本提示

`FeatObject.AdditionType` 的两个成员 `Add` / `AddFactor` 在 `bannerlord-1.3.0/`、`bannerlord-1.3.15/`、`bannerlord-1.4.6/`、`bannerlord-1.4.7/`、`bannerlord-1.5.3/` 五棵树里**完全一致**：同样的两个名字、同样的顺序、无新增无重排。

**而「没有消费点」这件事同样稳定。** 在整个 1.3 → 1.5 的跨度里，`FeatObject.IncrementType` 都没有被接入运行期逻辑——真正生效的一直是 `EffectBonus` 加上每个模型自己的写法。

这条跨版本结论对本批文档很重要：**写 `IncrementType` 是无害的，但也不要指望它。** 如果你的 mod 需要「加 vs 乘」真正可配置，1.3 到 1.5 都没有现成机制——你得自己实现一个 `XxxModel` 覆盖，在里面读你自己存的配置。

## 依赖关系

- 宿主类型：[FeatObject](../FeatObject) 是嵌套它的 `public sealed class`，`public FeatObject.AdditionType IncrementType { get; private set; }` 是唯一持有者，`Initialize` 的第五个参数是唯一写入点
- 有效的那一半：`EffectBonus` 与 `IsPositive` 在 [DefaultCulturalFeats](../DefaultCulturalFeats) 与各个 `DefaultXxxModel` 里被大量消费
- 归属结构：[CultureObject](../CultureObject) 的 `HasFeat(FeatObject)` / `GetCulturalFeats(...)` / `CultureFeats` 决定特性何时生效
- 名单来源：`Campaign.AllFeats` 来自 `MBObjectManager.Instance.GetObjectTypeList<FeatObject>()`（`Campaign.cs:1654`），与 [SkillObject](../../core-extra/SkillObject) 同为「不走 XML 而由 C# 构造注册」的对象类型
- 容易混淆的邻居：`TaleWorlds.CampaignSystem.CharacterDevelopment.EffectIncrementType`（见 [PerkObject](../PerkObject)）—— 名字相近但**真正被消费**
- 桶首页：[campaign API 分区](../)