---
title: "ExplainedNumber"
description: "战役层里所有「会变化的数值」的通用载体：它把最终结果拆成基础值加上一串带解释文字的增减项，让 UI 能逐条告诉玩家每个数字是从哪来的。"
---
# ExplainedNumber

**Namespace:** `TaleWorlds.CampaignSystem`
**Type:** `public struct ExplainedNumber`
**Source:** `TaleWorlds.CampaignSystem/ExplainedNumber.cs`

> 节 schema：本页采用 7 节（按出现顺序）：概述 / 心智模型 / 怎么用 / 关键成员 / 真实示例 / 参见 / 导航

## 概述

`ExplainedNumber` 是 CampaignSystem 里用来表示「会随各种修正而变化的数值」的通用容器。移动速度、士气、食物消耗、税收、伤病恢复、招募上限……这些量在游戏里从来不是一个固定数字，而是「一个基础值 + 若干条来源不同的加成与惩罚」，最后还要被上下限裁剪一次。

如果只用 `float` 传递这些量，mod 能算出结果，却回答不了玩家最爱问的那句话：「为什么是这个数？」`ExplainedNumber` 存在的意义就是把「数值」和「解释」绑在一起：每一次修改都附带一段 `TextObject` 说明，UI 就能把它渲染成 tooltip 里那一行行「+10% 家族商队加成」「-2 粮食短缺」。这就是 mod 应该优先使用它、而不是裸 `float` 的根本理由 —— 玩家能看到每一项的来源，你的修改也就自然融入了游戏的解释体系，而不是一个来历不明的黑箱数字。

它还把「裁剪语义」一并纳入了同一套模型：`LimitMin` / `LimitMax` 不只是 `Math.Clamp`，当结果真的越界时，它们会作为独立的解释行参与展示；而且裁剪只在读取 `ResultNumber` 时施加，内部计算始终保留未裁剪值，所以上下限本身不会污染后续的加成计算。

## 心智模型

把 `ExplainedNumber` 想成一个记账本，里面只有五类条目：

- **一行基础值**（`BaseNumber`）—— 起点，在构造时写入。
- **若干加法行**（`Add`）—— 直接加减的绝对值，例如「+5 驻军士气」。
- **若干乘法行**（`AddFactor`）—— 百分比修正，`0.15f` 表示 +15%。它们不立即生效，而是先累加进 `SumOfFactors`，最后统一乘到基础值上。
- **两条边界行**（`LimitMin` / `LimitMax`）—— 只在结果越界时作为解释出现，展示裁剪造成的差值。
- **一个可选解释器**（由 `IncludeDescriptions` 反映）—— 决定这个记账本到底记不记账。

核心公式（源码里 `_unclampedResultNumber` 的实现）：

```
unclamped    = BaseNumber + BaseNumber * SumOfFactors
ResultNumber = clamp(unclamped, LimitMinValue, LimitMaxValue)
```

第一个关键推论：加法行是直接写进 `BaseNumber` 的，因此它们也会被后面的乘法因子放大。先 `Add(100f)` 再 `AddFactor(0.5f)`，结果不是 100.5 而是 150。这是最容易踩的一条。

第二个要点：它是 `struct`（值类型）。想让调用方看到修改，参数必须以 `ref` 或 `out` 传递；按值传参时被调方改的只是一份副本。原版代码里大量出现 `ref ExplainedNumber` 正是这个原因。

第三个要点：解释器会「合并同类项」。名字相同、操作类型相同的行会被折叠成一行（`AddLine` 中对 `Add` / `Multiply` 的查找合并逻辑），所以同名的多次加成不会在 tooltip 里刷屏。

第四个要点：解释行是「按需生成」的，不是快照。`GetLines` 在拼装时才会用当前的 `BaseNumber` 把乘法行的百分比换算成实际数值增量，并在结果真的被裁剪时补上边界行。

## 怎么用

### 怎么拿到

mod 很少自己 `new` 一个 `ExplainedNumber` 当起点，绝大多数情况是「从游戏手里接收」或「从对象上取出」：

- **接收（最常见）**：游戏把可修改的实例通过 `ref` 交给你的模型方法，你只负责往里追加条目：

```csharp
public override void GetMobilePartyFoodConsumption(MobileParty party, ref ExplainedNumber explainedNumber)
{
    // explainedNumber 进来时已经带着原版算好的基础值与各项修正
    if (party.IsCaravan)
    {
        explainedNumber.Add(-1f, new TextObject("{=myMod}商队额外消耗"));
    }
}
```

- **取出（只读参考）**：需要知道某个量当前算出来是多少时，从对象上取它的 `ExplainedNumber` 属性，再读结果：

```csharp
ExplainedNumber speed = MobileParty.MainParty.SpeedExplained;
float finalSpeed = speed.ResultNumber;
int shown = speed.RoundedResultNumber; // UI 上显示用的整数
```

- **自己构造**：需要独立算一个值、并且希望它有解释行时，直接构造。注意 `includeDescriptions` 要传 `true`，否则不会有任何解释：

```csharp
var score = new ExplainedNumber(10f, includeDescriptions: true, baseText: new TextObject("{=myMod}基础分"));
score.Add(5f, new TextObject("{=myMod}贵族出身"));
score.AddFactor(0.2f, new TextObject("{=myMod}声望加成"));
```

### 典型用法

给一个已有的 `ExplainedNumber` 追加修正，是 mod 里最高频的写法。要点有两个：说明文字一定要给，否则数值会变但玩家看不到原因；值为 0 时不必加，源码会直接忽略 0 值条目。

```csharp
public override void GetSettlementTax(Settlement settlement, ref ExplainedNumber explainedNumber)
{
    float bonus = settlement.Prosperity * 0.01f;
    explainedNumber.Add(bonus, new TextObject("{=myMod}繁荣度税收"));
    if (settlement.OwnerClan == Clan.PlayerClan)
    {
        explainedNumber.AddFactor(0.1f, new TextObject("{=myMod}玩家家族加成"));
    }
    explainedNumber.LimitMin(0f);
}
```

需要合并另一个已经算好的结果时（例如「把远程单位的加成整体叠到本单位上」），用 `AddFromExplainedNumber`，它会连同对方的解释行一起带过来：

```csharp
var rangedBonus = new ExplainedNumber(0f, includeDescriptions: true);
rangedBonus.Add(3f, new TextObject("{=myMod}远程专精"));
rangedBonus.AddFactor(0.05f, new TextObject("{=myMod}弓术"));

void MergeInto(ref ExplainedNumber target, ExplainedNumber source)
{
    target.AddFromExplainedNumber(source, new TextObject("{=myMod}远程加成"));
}
```

要把结果展示给玩家时，可以拿现成的多行文本，也可以拿结构化的「名字 → 数值」列表自己排版：

```csharp
string tooltip = explainedNumber.GetExplanations();
foreach (var line in explainedNumber.GetLines())
{
    string name = line.Item1;
    float delta = line.Item2;
    InformationManager.DisplayMessage(new InformationMessage(name + " " + delta.ToString("0.##")));
}
```

### 坑

- **`Add` 与 `AddFactor` 语义完全不同**：`Add` 进 `BaseNumber`，会被所有乘法因子放大；`AddFactor` 只累积百分比。想要「固定 +10」用 `Add(10f, ...)`，想要「+10%」用 `AddFactor(0.1f, ...)`。把 `0.1f` 传进 `Add` 是最常见的错误。
- **乘法行展示时会先乘 100**：`AddLine` 里乘法行存的是 `value * 100`，而 `GetLines` 再换算回 `BaseNumber * value * 0.01`。也就是说展示端拿到的已经是「实际数值增量」而不是百分比，自己拼 tooltip 时不要再乘一次 100。
- **按值传参会丢修改**：`void F(ExplainedNumber n)` 里的修改回不到调用方。签名必须写成 `ref ExplainedNumber`（或 `out`）。
- **`LimitMin` / `LimitMax` 是覆盖而不是取最严**：后调用的一方会直接替换掉之前的边界，源码里没有「取 max / 取 min」的合并逻辑。
- **不传 `includeDescriptions: true` 就没有解释**：此时 `GetExplanations()` 返回空串，`GetLines()` 返回空列表。数值照算，只是没有说明。
- **`AddFromExplainedNumber` 加的是对方的最终值**：它把对方经过裁剪的 `ResultNumber` 加进自己的 `BaseNumber`，同时复制对方的解释行；如果对方被裁剪过，复制过来的是裁剪后的差值行。
- **`SubtractFromExplainedNumber` 只对解释行取负**：基础值是相减，解释行的数值也逐条取负后再并入，不要自己再取反一次。

## 关键成员

| 成员 | 签名 | 作用 | 行号 |
| --- | --- | --- | --- |
| `ResultNumber` | `public float ResultNumber` | 读取最终值，即施加 min/max 裁剪后的结果 | `ExplainedNumber.cs:14` |
| `RoundedResultNumber` | `public int RoundedResultNumber` | 最终值四舍五入成整数，UI 展示常用 | `ExplainedNumber.cs:24` |
| `BaseNumber` | `public float BaseNumber { get; private set; }` | 基础值；`Add` 直接累加到这里，且会被乘法因子放大 | `ExplainedNumber.cs:35` |
| `IncludeDescriptions` | `public bool IncludeDescriptions` | 是否持有解释器，由构造参数决定 | `ExplainedNumber.cs:39` |
| `LimitMinValue` | `public float LimitMinValue` | 下界；未设置时为 `float.MinValue` | `ExplainedNumber.cs:49` |
| `LimitMaxValue` | `public float LimitMaxValue` | 上界；未设置时为 `float.MaxValue` | `ExplainedNumber.cs:63` |
| `SumOfFactors` | `public float SumOfFactors { get; private set; }` | 所有乘法因子之和，0.15 表示 +15% | `ExplainedNumber.cs:78` |
| `_unclampedResultNumber` | `private float _unclampedResultNumber` | 未裁剪的中间值：`BaseNumber + BaseNumber * SumOfFactors` | `ExplainedNumber.cs:82` |
| `GetExplanations` | `public string GetExplanations()` | 把所有解释行拼成可直接显示的多行文本 | `ExplainedNumber.cs:105` |
| `AddFromExplainedNumber` | `public void AddFromExplainedNumber(ExplainedNumber explainedNumber, TextObject baseText)` | 把另一个 ExplainedNumber 的结果与解释整体叠加进来 | `ExplainedNumber.cs:133` |
| `SubtractFromExplainedNumber` | `public void SubtractFromExplainedNumber(ExplainedNumber explainedNumber, TextObject baseText)` | 同上，但基础值相减、解释行取负 | `ExplainedNumber.cs:150` |
| `Add` | `public void Add(float value, TextObject description = null, TextObject variable = null)` | 加一个带解释的绝对增减项，0 值被忽略 | `ExplainedNumber.cs:167` |
| `AddFactor` | `public void AddFactor(float value, TextObject description = null)` | 加一个百分比因子，0.1 表示 +10% | `ExplainedNumber.cs:185` |
| `LimitMin` | `public void LimitMin(float minValue)` | 设置下界并记录一条最小行 | `ExplainedNumber.cs:199` |
| `LimitMax` | `public void LimitMax(float maxValue, TextObject description = null)` | 设置上界并记录一条最大行 | `ExplainedNumber.cs:209` |
| `Clamp` | `public void Clamp(float minValue, float maxValue)` | 依次调用 `LimitMin` 与 `LimitMax` | `ExplainedNumber.cs:219` |
| `StatExplainer` | `private class StatExplainer` | 内部的解释行账本，负责合并同类项与生成展示行 | `ExplainedNumber.cs:244` |
| `AddLine` | `public void AddLine(string name, float number, ExplainedNumber.StatExplainer.OperationType opType)` | 记账本的唯一写入口，负责合并或新增解释行 | `ExplainedNumber.cs:296` |
| `OperationType` | `public enum OperationType` | 解释行类型：Base / Add / Multiply / LimitMin / LimitMax | `ExplainedNumber.cs:340` |
| `ExplanationLine` | `public readonly struct ExplanationLine` | 单条解释：名字 + 数值 + 类型 | `ExplainedNumber.cs:355` |

## 真实示例

场景：给一个城镇算驻军士气。基础 50，粮食短缺 -10，驻军规模 +5，玩家家族 +10%，结果限制在 0 到 100 之间，并且要能在 tooltip 里逐条看到来源。

```csharp
var morale = new ExplainedNumber(50f, includeDescriptions: true, baseText: new TextObject("{=myMod}基础士气"));

morale.Add(-10f, new TextObject("{=myMod}粮食短缺"));
morale.Add(5f, new TextObject("{=myMod}驻军规模"));
morale.AddFactor(0.1f, new TextObject("{=myMod}玩家家族加成"));
morale.LimitMin(0f);
morale.LimitMax(100f);

// BaseNumber = 50 - 10 + 5 = 45，SumOfFactors = 0.1
// unclamped = 45 + 4.5 = 49.5，未触边界，所以 ResultNumber = 49.5
float finalMorale = morale.ResultNumber;
string tooltip = morale.GetExplanations();
```

接着把另一处算好的加成整体并进来，解释行会被一起搬过来，玩家依然能看见它由「村庄支援」和「补给线」两项构成：

```csharp
var support = new ExplainedNumber(0f, includeDescriptions: true);
support.Add(20f, new TextObject("{=myMod}村庄支援"));
support.AddFactor(0.25f, new TextObject("{=myMod}补给线"));

// support.ResultNumber = 20 * 1.25 = 25，全部并入 morale.BaseNumber
morale.AddFromExplainedNumber(support, new TextObject("{=myMod}外援"));
```

如果不想用现成的文本，而是自己排版，就取结构化列表逐行处理；列表里乘法项已经是换算好的实际增量，直接展示即可：

```csharp
foreach (var line in morale.GetLines())
{
    string name = line.Item1;
    float delta = line.Item2;
    InformationManager.DisplayMessage(new InformationMessage(name + " " + delta.ToString("0.##")));
}
```

## 参见

- [`../MobileParty`](../MobileParty) —— 移动速度、士气、食物消耗等最常见的 `ExplainedNumber` 输出方，先看它怎么暴露这些量。
- [`../Settlement`](../Settlement) —— 繁荣度、税收、驻军士气等城镇数值同样走 `ExplainedNumber`，是练习读写解释行的好样本。
- [`../../core-extra/GameModelsManager`](../../core-extra/GameModelsManager) —— 所有 `Get...` 回调模型的注册中心，mod 追加修正的入口通常由它分发。
- [`../../localization/TextObject`](../../localization/TextObject) —— 每条解释行都靠 `TextObject` 提供本地化文本，解释文字怎么写、变量怎么塞都在这一页。
- [`../_index`](../_index) —— `campaign` 桶全类型索引。

## 导航

- 同桶：[`../Hero`](../Hero) · [`../MobileParty`](../MobileParty)
- 父索引：[`../_index`](../_index)
