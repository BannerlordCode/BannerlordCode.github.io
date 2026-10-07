---
title: "ExplainedNumber"
description: "可解释数值容器：一个 float 结果加上它由哪些加法项与乘法因子累加而来的明细，所有战役模型覆写都通过它组合数值。"
---

# ExplainedNumber

**命名空间：** `TaleWorlds.CampaignSystem`
**Type:** `public struct ExplainedNumber`
**Source:** `TaleWorlds.CampaignSystem/ExplainedNumber.cs`

## 概述

`ExplainedNumber` 是战役层的「可解释数值」值类型（struct）。它不只存一个结果 float，还存这个结果**是怎么来的**：一个基底 `BaseNumber`、一组加法项（直接加进基底）、一组乘法因子（`SumOfFactors`，按基底百分比放大）、以及上下限钳制。最终 `ResultNumber = Clamp(BaseNumber * (1 + SumOfFactors), LimitMin, LimitMax)`。战役里几乎所有「算出一个数值并要显示明细」的模型——技能加成、特性效果、属性修正——都返回或组合 `ExplainedNumber`，这样 UI 能弹出「基础 100 + 技能 20 + 特性 25% → 被上限截到 200」这种分解。它是 struct，所以模型接口里到处用 `ref ExplainedNumber` 传递，让 `Add`/`AddFactor` 的改动能写回调用方的变量。

## 心智模型

核心公式：`ResultNumber = Clamp(BaseNumber + BaseNumber * SumOfFactors, LimitMinValue, LimitMaxValue)`。

1. **Add 是加法项，AddFactor 是乘法因子**：`Add(v)` 把 `v` 直接加进 `BaseNumber`；`AddFactor(v)` 把 `v` 加进 `SumOfFactors`，对结果的影响是 `BaseNumber * v`。所以 `AddFactor(0.25f)` 是「基底 +25%」，不是「+0.25」。两者都改 `this` 的字段，但改的是不同字段。
2. **LimitMin/LimitMax 覆盖 ResultNumber**：它们不参与累加，而是在 `ResultNumber` 的 getter 里做 `MathF.Clamp`。所以先 `Add` 一堆再 `LimitMax(200)`，结果就是被截断的值。`LimitMinValue`/`LimitMaxValue` 未设置时分别是 `float.MinValue`/`float.MaxValue`。
3. **值语义 + void 突变方法**：`Add`/`AddFactor`/`LimitMin`/`LimitMax` 都是 `void` 且直接改 `this` 的字段。因为是 struct，对一个**变量**调用会改到本体；但对一个**属性或字段返回的副本**调用（如 `someModel.SomeNumber.Add(...)`）改的是临时副本，改动**丢失**。这就是为什么模型接口签名里到处是 `ref ExplainedNumber`——`ref` 让突变写回调用方的变量。
4. **IncludeDescriptions 决定要不要明细**：构造时传 `true` 才创建 `_explainer`。不传（默认 `false`）时 `GetExplanations()` 返回空字符串、`GetLines()` 返回空列表，但 `ResultNumber` 照常计算。要显示明细就必须传 `true`。
5. **AddFromExplainedNumber 吃的是对方的 ResultNumber**：合并另一个 `ExplainedNumber` 时，加进 `BaseNumber` 的是对方的 `ResultNumber`（已钳制值），不是未钳制值。所以对方的上下限会被「烘焙」进你的基底。
6. **同名行会合并**：`StatExplainer.AddLine` 对 Add 或 Multiply 类型的行，如果已存在同名同类型的行，会把数值累加进去而不是新增一行。所以多次 `Add(5, 同一条描述)` 只显示一行、数值相加。

## 怎么用

### 怎么拿到它

- 自己构造：`new ExplainedNumber(baseNumber, includeDescriptions)`。
- 从模型拿：战役模型（`GameModel` 子类）的很多方法返回 `ExplainedNumber` 或 `ref ExplainedNumber`，直接接住用。
- 合并：`AddFromExplainedNumber(other, baseText)` 或 `SubtractFromExplainedNumber(other, baseText)`。

### 典型用法

1. **技能或特性加成**：`new ExplainedNumber(100f, true)` → `Add(20f, 技能描述)` → `AddFactor(0.25f, 特性描述)` → 读 `ResultNumber`。
2. **显示明细**：`GetExplanations()` 返回多行字符串（`名称 : +数值`），直接喂给 UI 提示框。
3. **取结构化明细**：`GetLines()` 返回 `List<(string name, float number)>`，用于自定义渲染。
4. **钳制**：`LimitMin(0f)` 或 `LimitMax(200f, 描述)`，或一次性 `Clamp(0f, 200f)`。
5. **合并两个可解释数值**：`AddFromExplainedNumber` 把对方的明细行也搬过来（标记为 Add），并把对方 `ResultNumber` 加进自己基底。
6. **取整显示**：`RoundedResultNumber` 是 `MathF.Round(ResultNumber)`。

### 最容易踩的坑

1. **对属性返回的副本调 Add 会丢改动**：`model.SomeNumber.Add(5f)` 改的是副本。要么用 `ref` 接住，要么先拷到局部变量再改再赋回。
2. **AddFactor 是百分比不是绝对值**：`AddFactor(0.25f)` 是 +25%，不是 +0.25。要加绝对值用 `Add`。
3. **IncludeDescriptions=false 时 GetExplanations 返回空串**：不是 null，是空字符串。要明细必须在构造时传 `true`。
4. **LimitMin/LimitMax 是覆盖不是累加**：它们只在 `ResultNumber` getter 里 clamp，不改 `BaseNumber` 也不改 `SumOfFactors`。
5. **AddFromExplainedNumber 烘焙对方的钳制**：加进来的是对方 `ResultNumber`（已 clamp），对方的上下限信息在合并后丢失。
6. **同名 Add 行会合并**：多次 `Add(v, 同一条描述)` 只显示一行、数值相加。要分行显示就得用不同描述。
7. **Add 对约等于 0 的值直接 return**：`Add(0f)` 或 `AddFactor(0f)` 什么都不做（`ApproximatelyEqualsTo(0f, 1E-05f)`），连解释行都不加。

## 关键成员

- **ResultNumber**（`ExplainedNumber.cs:14`）— 最终值，`MathF.Clamp(_unclampedResultNumber, LimitMinValue, LimitMaxValue)`。读这个拿结果。
- **RoundedResultNumber**（`ExplainedNumber.cs:24`）— `MathF.Round(ResultNumber)`，取整显示用。
- **BaseNumber**（`ExplainedNumber.cs:35`）— 基底值，`Add` 直接改它。`private set`，外部只能读。
- **IncludeDescriptions**（`ExplainedNumber.cs:39`）— 是否记录解释行，实际是 `_explainer != null`。构造时定，之后不可改。
- **LimitMinValue**（`ExplainedNumber.cs:49`）— 下限，未设置时 `float.MinValue`。
- **LimitMaxValue**（`ExplainedNumber.cs:63`）— 上限，未设置时 `float.MaxValue`。
- **SumOfFactors**（`ExplainedNumber.cs:78`）— 所有 `AddFactor` 值的累加和，对结果的影响是 `BaseNumber * SumOfFactors`。`private set`。
- **构造函数**（`ExplainedNumber.cs:91`）— `ExplainedNumber(float baseNumber = 0f, bool includeDescriptions = false, TextObject baseText = null)`。`includeDescriptions=true` 才建 explainer；基底约等于 0 时不写 Base 行。
- **GetExplanations**（`ExplainedNumber.cs:105`）— 返回多行明细字符串（`名称 : +数值` 换行分隔）。无 explainer 时返回空字符串。
- **GetLines**（`ExplainedNumber.cs:123`）— 返回 `List<(string, float)>` 结构化明细。无 explainer 时返回空列表。
- **AddFromExplainedNumber**（`ExplainedNumber.cs:133`）— 把另一个的明细行搬过来（标记 Add），并把对方 `ResultNumber` 加进自己 `BaseNumber`。
- **SubtractFromExplainedNumber**（`ExplainedNumber.cs:150`）— 同上但数值取负，`BaseNumber -= other.ResultNumber`。
- **Add**（`ExplainedNumber.cs:167`）— 加法项，`BaseNumber += value`。约等于 0 直接 return。有描述且 explainer 存在时记一行。
- **AddFactor**（`ExplainedNumber.cs:185`）— 乘法因子，`SumOfFactors += value`。解释行记的是 `Round(value, 3) * 100`（百分比）。
- **LimitMin**（`ExplainedNumber.cs:199`）— 设下限，记一行 LimitMin。
- **LimitMax**（`ExplainedNumber.cs:209`）— 设上限，记一行 LimitMax（可带描述）。
- **Clamp**（`ExplainedNumber.cs:219`）— `LimitMin` 加 `LimitMax` 的合写。

## 真实示例

```csharp
// 构造：基底 100，记录明细
ExplainedNumber number = new ExplainedNumber(100f, true);

// 加法项：技能 +20
number.Add(20f, new TextObject("{=skill}Skill Bonus"));

// 乘法因子：特性 +25%（作用在基底上）
number.AddFactor(0.25f, new TextObject("{=perk}Perk Bonus"));

// 钳制上下限
number.LimitMin(0f);
number.LimitMax(200f, new TextObject("{=cap}Hard Cap"));

// 读最终值（已钳制）与明细
float final = number.ResultNumber;
string explanation = number.GetExplanations();
int rounded = number.RoundedResultNumber;
```

## 参见

- ↔ [GameModels](../GameModels) — 所有模型返回或组合 `ExplainedNumber` 的门面页
- ↔ [GameModel](../../core-extra/GameModel) — 模型抽象根，覆写方法大量返回 `ExplainedNumber`
- ↔ [SkillHelper](../../core-extra/SkillHelper) — 技能加成写进可解释数值的真实例子
- ↔ [FeatHelper](../../core-extra/FeatHelper) — 文化特性加成按 `Add` 或 `AddFactor` 写入
- ↔ [TraitEffectHelper](../../core-extra/TraitEffectHelper) — 人格特质效果同样按 `Add` 或 `AddFactor` 写入

## 导航

- ↑ [API 参考](../../) —— 本版本 API 层入口：按任务找页的路径表
- ↑ [v1.5.3 首页](../../../) —— 19 个桶的完整缺口表与覆盖现状
- ↔ [模块地图](../../../architecture/module-map) —— 确认某个类型属于哪一桶
