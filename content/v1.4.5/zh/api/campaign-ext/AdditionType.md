---
title: "AdditionType"
description: "AdditionType 是 FeatObject 内嵌的两值枚举（Add / AddFactor），用来标注文化专长的 EffectBonus 该按绝对增量还是相对比例解释。"
---
# AdditionType

**命名空间：** `TaleWorlds.CampaignSystem.CharacterDevelopment`
**模块：** `TaleWorlds.CampaignSystem`
**类型：** `public enum AdditionType`
**源文件：** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CharacterDevelopment/FeatObject.cs`（36 行）

## 概述

`AdditionType` 是一个**只有两个成员的内嵌枚举**：`Add` 和 `AddFactor`。它声明在 `FeatObject.cs:9`，也就是**嵌在 `FeatObject` 类内部**，而不是一个独立文件、独立类型。

它的唯一用途是给 `FeatObject.EffectBonus` 这个浮点数**贴一个语义标签**：这个数应该被当成「绝对增量」还是「相对比例」。它由 `FeatObject.Initialize(...)` 的最后一个参数传入（`FeatObject.cs:28`），存进只读属性 `FeatObject.IncrementType`（`FeatObject.cs:19`），在 `FeatObject.cs:32` 完成赋值。

所以读这一页要抓住一句话：**`AdditionType` 不是「怎么算」的代码，而是「这个数字是什么意思」的声明。** 它自己不执行任何运算 —— 全仓没有任何一处 `switch` 在它上面。真正做加法还是做比例，是每一个消费点自己写死的。

## 心智模型

**为什么它嵌在 `FeatObject` 里？** 因为它**只服务于 `FeatObject` 这一个类型的语义**，脱离 `FeatObject` 它没有任何意义：`Add` 和 `AddFactor` 描述的是「`EffectBonus` 该怎么解释」，而 `EffectBonus` 是 `FeatObject` 的属性（`FeatObject.cs:17`）。把它做成顶层类型会制造一个假象 —— 好像别的地方也能用它。TaleWorlds 的选择是把它钉在宿主类型内部，用 `FeatObject.AdditionType.Add` 这样的全限定写法调用（例如 `DefaultCulturalFeats.cs:120`），从写法上就说明了归属。这和 `BuildingEffectIncrementType`、`EffectIncrementType` 那种**跨多个宿主共用**的顶层枚举正好相反 —— 那两个是顶层类型，因为它们要服务很多类；`AdditionType` 只服务一个。

**它和 `EffectIncrementType` 不是一回事。** 名字很像，但 `EffectIncrementType` 是 `TaleWorlds.Core` 里的顶层枚举，服务 `BannerEffect`、`PerkObject`、`SkillEffect`、`Figurehead` 等一大票类型；`AdditionType` 只服务 `FeatObject`。如果你在改的是旗帜/特长/技能效果，你要找的是 `EffectIncrementType`，不是这一个。

**谁产生它。** 唯一的产生路径是 `FeatObject.Initialize(string name, string description, float effectBonus, bool isPositiveEffect, AdditionType incrementType)`（`FeatObject.cs:28`）。在成品游戏里，这个方法的调用者只有 `DefaultCulturalFeats.InitializeAll()`（`DefaultCulturalFeats.cs:114`）：它逐条初始化 18 个文化专长（`DefaultCulturalFeats.cs:116` 至 `DefaultCulturalFeats.cs:133`），其中 **17 条传 `AddFactor`，只有 1 条传 `Add`**（`DefaultCulturalFeats.cs:120` 的 `_battaniaMilitiaFeat`）。也就是说，游戏里 `Add` 这个值几乎没被用上 —— 这本身就说明该枚举的设计意图是「绝大多数专长都是百分比修正」。

**谁读它。** 这里有一个必须说清楚的事实：**成品游戏代码里没有任何一处读取 `FeatObject.IncrementType`。** 把全树的 `IncrementType` 出现点全部列出来，与 `FeatObject` 相关的只有两处 —— `FeatObject.cs:19` 的声明和 `FeatObject.cs:32` 的赋值 —— 其余全是 `EffectIncrementType` / `BuildingEffectIncrementType` 的同名属性，属于别的类型。真正读文化专长的是另一组 API：`CultureObject.HasFeat`（`CultureObject.cs:243`）、`CultureObject.GetCulturalFeats`（`CultureObject.cs:248`）、`CultureObject.CultureFeats`（`CultureObject.cs:200`）、`PartyBaseHelper.HasFeat`（`PartyBaseHelper.cs:373`），以及二十来个游戏模型；它们拿到专长之后读的都是 `EffectBonus`，然后**各自手写**加还是乘。

**这意味着什么（本页最重要的一条）。** 把 `IncrementType` 从 `AddFactor` 改成 `Add`，游戏行为**一点都不会变**。它是一份给**外部读者**（mod 作者、工具、文档、UI 生成器）看的意图声明，不是一个被引擎消费的行为开关。所以它的正确用法是：

- 你**写**一个专长时，按语义如实标注它（百分比修正就标 `AddFactor`，绝对量就标 `Add`），让别人能机器化地理解 `EffectBonus`；
- 你**读**一个专长时，不要以为标了 `AddFactor` 就等于引擎会自动乘 `(1 + x)` —— 你必须去看那个具体的消费点怎么写的。

**这个枚举能表达什么、不能表达什么。** 它只能表达两种「增量语义」：`Add`（绝对）与 `AddFactor`（相对）。它**不能**表达「这个专长作用在哪个统计量上」（`FeatObject` 里没有任何目标字段），也**不能**表达纯粹的乘法替换 —— 这正是为什么 `DefaultCaravanModel.cs:48` 只能硬编码 `MathF.Round((float)num * AseraiTraderFeat.EffectBonus)`：阿拉伊商队专长声明的是 `AddFactor` + `0.7f`（`DefaultCulturalFeats.cs:116`），但消费点要的是「乘以 0.7」，而不是 `AddFactor` 语义下的「乘以 1.7」，于是它绕开了枚举，自己写乘法。**同一个枚举值，两个消费点两种算法** —— 这就是「声明与实现分离」的直接后果。

## 怎么用

### 怎么拿到

`AdditionType` 是嵌套类型，没有独立源文件。所有引用都必须写成 `FeatObject.AdditionType.X` 或 `AdditionType.X`（在 `using TaleWorlds.CampaignSystem.CharacterDevelopment;` 之后），行号一律归属到 `FeatObject.cs`。

- 声明位置：`FeatObject.cs:9` 的 `public enum AdditionType`（在 `FeatObject` 类体内，`FeatObject.cs:7` 是类声明）
- 成员 `Add`：`FeatObject.cs:11`
- 成员 `AddFactor`：`FeatObject.cs:12`
- 产生入口：`FeatObject.Initialize(...)` 的第五个参数（`FeatObject.cs:28`）
- 读取入口：`FeatObject.IncrementType` 只读属性（`FeatObject.cs:19`）
- 游戏内唯一的产生者：`DefaultCulturalFeats.InitializeAll()`（`DefaultCulturalFeats.cs:114`）

要拿到一个具体的值，通常是读某个专长的属性，而不是构造它。

### 典型用法

**A. 读一个专长的标注（唯一被设计出来的读法）：**

```csharp
using TaleWorlds.CampaignSystem.CharacterDevelopment;

FeatObject feat = DefaultCulturalFeats.BattanianMilitiaFeat;
FeatObject.AdditionType kind = feat.IncrementType;
float bonus = feat.EffectBonus;
bool good = feat.IsPositive;

// 按标注自行决定怎么应用——引擎不会替你做这一步
if (kind == FeatObject.AdditionType.AddFactor)
{
    explainedNumber.AddFactor(bonus, feat.Name);
}
else
{
    explainedNumber.Add(bonus, feat.Name);
}
```

**B. 按标注扫描所有专长（工具/文档生成器写法）：**

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.CharacterDevelopment;

foreach (FeatObject feat in FeatObject.All)   // FeatObject.cs:15 => Campaign.Current.AllFeats
{
    bool isFactor = feat.IncrementType == FeatObject.AdditionType.AddFactor;
    string shape = isFactor ? "percentage" : "absolute";
    InformationManager.DisplayMessage(new InformationMessage(feat.Name + " -> " + shape));
}
```

**C. 自己定义一个专长并如实标注：**

```csharp
using TaleWorlds.CampaignSystem.CharacterDevelopment;

// 绝对量修正：+3 民兵
myFeat.Initialize("my_militia_boost", "my_militia_boost_desc",
                  effectBonus: 3f,
                  isPositiveEffect: true,
                  incrementType: FeatObject.AdditionType.Add);

// 百分比修正：-10% 建筑速度
myOtherFeat.Initialize("my_slower_build", "my_slower_build_desc",
                       effectBonus: -0.1f,
                       isPositiveEffect: false,
                       incrementType: FeatObject.AdditionType.AddFactor);
```

### 坑

- **它不会被引擎自动应用**。全仓没有任何 `switch (feat.IncrementType)`。标注 `AddFactor` 不等于游戏会替你乘 `(1 + x)`；消费点各写各的（对比 `DefaultSettlementMilitiaModel.cs:75` 的 `result.Add(...)`、`DefaultBuildingConstructionModel.cs:156` 的 `result.AddFactor(...)`、`DefaultCaravanModel.cs:48` 的纯乘法）。
- **改它不会改变行为**。把某个专长的 `IncrementType` 从 `Add` 改成 `AddFactor`，游戏表现完全不变 —— 没有读者。想改数值请改 `EffectBonus`，想改算法请改消费点。
- **`Add` 是 0，也就是枚举默认值**。任何没经过 `FeatObject.Initialize(...)` 构造出来的 `FeatObject`，`IncrementType` 都会是 `Add`。存在一条从 XML `cultural_feats` 节点直接构造 `FeatObject` 的路径（`CultureObject.cs:398`、`CultureObject.cs:403`），它**不经过**这个 `Initialize` 重载，所以拿不到 `EffectBonus`、`IncrementType` 也保持默认 —— 不要用这条路定义专长，用 `DefaultCulturalFeats` 那种代码初始化方式。
- **不要和 `EffectIncrementType` 混用**。后者在 `TaleWorlds.Core`，服务旗帜/特长/技能；传错类型会直接编译失败，但在读代码时很容易看混，尤其两者的成员名一模一样（都是 `Add` / `AddFactor`）。
- **`AdditionType` 没有 `None` 或 `Multiply`**。需要「乘以系数」或「替换值」的语义时它表达不了，只能像 `DefaultCaravanModel.cs:48` 那样在消费点硬编码。设计自己的专长体系时不要以为这个枚举能覆盖所有修正形态。
- **`IncrementType` 是 `private set`**（`FeatObject.cs:19`），只能在 `Initialize` 时确定，之后无法修改。想「换标注」必须重新构造并初始化一个 `FeatObject`。
- **`FeatObject` 是 `sealed`**（`FeatObject.cs:7`），你不能继承它来扩展这个枚举的语义。

## 关键成员

- `AdditionType.Add`（`FeatObject.cs:11`，值 0）—— 「绝对增量」标注：`EffectBonus` 应被当成一个**直接相加的量**（如 `ExplainedNumber.Add(x)`）。游戏里唯一这样标注的是 `_battaniaMilitiaFeat`（`DefaultCulturalFeats.cs:120`，`0.2f`），消费点在 `DefaultSettlementMilitiaModel.cs:75` 用 `result.Add(...)`，两者一致。
- `AdditionType.AddFactor`（`FeatObject.cs:12`，值 1）—— 「相对比例」标注：`EffectBonus` 应被当成一个**相对系数**（如 `ExplainedNumber.AddFactor(x)`，语义为 `结果 *= 1 + x`）。18 个文化专长里有 17 个用它（`DefaultCulturalFeats.cs:116` 至 `DefaultCulturalFeats.cs:133`）。
- 枚举本身**只有这两个成员，没有 `None`/`Multiply`/`Set`** —— 因此「乘以纯系数」「替换为固定值」这两类修正无法用标注表达。
- `FeatObject.IncrementType`（`FeatObject.cs:19`，`public AdditionType { get; private set; }`）—— 承载标注的只读属性，全仓**没有引擎读者**，是给外部代码看的意图字段。
- `FeatObject.Initialize(...)`（`FeatObject.cs:28`，`public void`）—— 唯一的产生点，第五个参数就是 `AdditionType`；赋值发生在 `FeatObject.cs:32`，随后 `EffectBonus`（`FeatObject.cs:31`）、`IsPositive`（`FeatObject.cs:33`）依次写入，最后调 `AfterInitialized()`（`FeatObject.cs:34`）。
- `FeatObject.EffectBonus`（`FeatObject.cs:17`，`public float { get; private set; }`）—— 被标注的那个数值；所有消费点读的都是它。
- `FeatObject.IsPositive`（`FeatObject.cs:21`，`public bool { get; private set; }`）—— 与标注正交的另一维语义：这个专长对拥有者是好事还是坏事。注意 `_empireGarrisonWageFeat` 的 `EffectBonus` 是负数 `-0.2f` 但 `IsPositive` 为 `true`（`DefaultCulturalFeats.cs:122`）—— 「数值为负」与「对玩家不利」是两件事。
- `FeatObject.All`（`FeatObject.cs:15`，`public static MBReadOnlyList<FeatObject>`）—— 全专长列表，转发到 `Campaign.Current.AllFeats`（`Campaign.cs:318`，由 `Campaign.cs:1152` 填充），扫描所有标注时用它。

## 真实示例

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.CharacterDevelopment;
using TaleWorlds.Core;
using TaleWorlds.Localization;

// 示例 1：把「标注 + 数值」翻译成一句人话（这正是 IncrementType 被设计出来要做的事）
public static string DescribeFeat(FeatObject feat)
{
    float bonus = feat.EffectBonus;
    if (feat.IncrementType == FeatObject.AdditionType.AddFactor)
    {
        return feat.Name + ": " + (bonus * 100f) + "%";
    }
    return feat.Name + ": " + bonus + " (flat)";
}

// 示例 2：按标注决定应用方式——因为引擎不会替你做
public static void ApplyFeatToStat(FeatObject feat, ref ExplainedNumber stat, TextObject source)
{
    if (feat.IncrementType == FeatObject.AdditionType.AddFactor)
    {
        stat.AddFactor(feat.EffectBonus, source);
    }
    else
    {
        stat.Add(feat.EffectBonus, source);
    }
}

// 示例 3：统计当前游戏里各标注的分布（工具向）
public static string CountFeatKinds()
{
    int flat = 0;
    int factor = 0;
    foreach (FeatObject feat in FeatObject.All)
    {
        if (feat.IncrementType == FeatObject.AdditionType.AddFactor) { factor++; }
        else { flat++; }
    }
    return "flat=" + flat + ", factor=" + factor;
}
```

## 参见

- [FeatObject](../FeatObject) — 声明该枚举的宿主类型，`EffectBonus` / `IncrementType` / `Initialize` 都在这里
- [DefaultCulturalFeats](../DefaultCulturalFeats) — 游戏里唯一的产生者，18 个文化专长的初始化清单
- [CultureObject](../CultureObject) — 专长的持有者，`CultureFeats` / `HasFeat` / `GetCulturalFeats` 的来处
- [PartyBaseHelper](../PartyBaseHelper) — 部队侧查询专长的辅助入口
- [DefaultSettlementMilitiaModel](../DefaultSettlementMilitiaModel) — 一个典型消费点，示范「读 EffectBonus、自己决定加还是乘」

## 导航

- [本区域目录](../)
