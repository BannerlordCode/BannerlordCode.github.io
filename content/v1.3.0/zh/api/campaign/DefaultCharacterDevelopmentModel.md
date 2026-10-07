---
title: "DefaultCharacterDevelopmentModel"
description: "Bannerlord 角色成长规则模型，定义技能升级所需经验、属性点获取节奏、学习速率公式与特质等级映射，是 mod 调整角色培养曲线的核心扩展点。"
---
# DefaultCharacterDevelopmentModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultCharacterDevelopmentModel : CharacterDevelopmentModel`
**Base:** `CharacterDevelopmentModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultCharacterDevelopmentModel.cs`

## 概述

`DefaultCharacterDevelopmentModel` 是 Bannerlord 战役层角色成长系统的默认规则实现。它继承自抽象基类 `CharacterDevelopmentModel`，为游戏提供一套完整的数值体系：角色等级与属性点的兑换节奏、技能从 0 级升到 1024 级所需的累计经验值、学习速率的计算公式（受属性均值、专注点投入和超限惩罚影响）、特质经验到特质等级的映射阈值，以及史诗专长加成生效的技能区间。

这个类在构造时预计算两张查找表——`_skillsRequiredForLevel[63]`（角色等级→累计技能点需求，二次增长）和 `_xpRequiredForSkillLevel[1024]`（技能等级→累计经验需求，线性增长）——后续所有经验查询都直接查表，不做实时计算。

## 心智模型

把 `DefaultCharacterDevelopmentModel` 理解为角色成长数值的"单一事实来源"。游戏引擎在需要决定"这个角色升一级要多少经验""这个技能值多少学习速率""这个特质经验对应几级特质"时，都会回到这里查表或计算公式。

**何时用：** 当你想调整角色培养的整体节奏——比如让升级更快、让属性点更稀缺、让学习速率更依赖专注点——就替换或继承这个类。常见做法是通过 `Game.Current.ReplaceModel<DefaultCharacterDevelopmentModel>(new MyCustomModel())` 整体替换，或者继承 `CharacterDevelopmentModel` 后只重写几个调参属性（如 `MaxAttribute`、`FocusPointsPerLevel`、`CalculateLearningRate`）。

**常见误用：**
- 试图直接修改 `_skillsRequiredForLevel` 或 `_xpRequiredForSkillLevel` 数组——它们是 `private readonly`，只能在构造函数里初始化，外部无法改。要改成长曲线必须重写 `SkillsRequiredForLevel` 和 `GetXpRequiredForSkillLevel` 方法。
- 忽略学习速率的超限惩罚机制：当技能值超过 `CalculateLearningLimit` 返回的上限时，`CalculateLearningRate` 会施加一个负因子 `-(1 + 0.1 × 超出量)`，导致学习效率断崖式下降。mod 如果只调高 `MaxAttribute` 而不调整 `CalculateLearningLimit` 公式，会导致后期学习速率被惩罚压到极低。
- 混淆"角色等级"和"技能等级"：`SkillsRequiredForLevel` 是角色等级（1-62）到技能点的映射，`GetXpRequiredForSkillLevel` 是技能等级（0-1024）到经验的映射，两者完全不同。

## 怎么用

**获取实例：** 通过 `Campaign.Current.Models.CharacterDevelopmentModel` 访问当前生效的模型实例。源树路径：`TaleWorlds.CampaignSystem/GameComponents/DefaultCharacterDevelopmentModel.cs:15`（类声明），构造函数在 `:17`。

**典型用法：**
- 查询技能升级所需经验：`GetXpRequiredForSkillLevel(skillLevel)` 返回从 0 级升到 `skillLevel` 的累计经验。
- 计算当前学习速率：`CalculateLearningRate(characterAttributes, focusValue, skillValue, skill)` 返回 `ExplainedNumber`，取 `.ResultNumber` 得到浮点速率。
- 自动分配专注点：`GetNextSkillToAddFocus(hero)` 返回当前最值得投入专注点的技能。
- 自动分配属性点：`GetNextAttributeToUpgrade(hero)` 返回当前最值得升级的 attribute。
- 特质经验转换：`GetTraitLevelForTraitXp` 和 `GetTraitXpRequiredForTraitLevel` 互逆，用于特质经验的授予和等级判定。

**坑：**
- `SkillsRequiredForLevel` 在 level > 62 时返回 `int.MaxValue`（通过 `GetMaxSkillPoint()`），表示"不可达"。mod 如果遍历角色等级要注意这个哨兵值。
- `GetXpRequiredForSkillLevel` 在 skillLevel > 1024 时 clamp 到 1024，≤0 时返回 0。
- `GetNextPerkToChoose` 是 50/50 随机选择——如果 perk 有 `AlternativePerk`，有一半概率返回替代 perk。这不是 bug，是设计。

## 关键成员

### 构造函数

**`public DefaultCharacterDevelopmentModel()`** — `DefaultCharacterDevelopmentModel.cs:17`

构造时调用 `InitializeSkillsRequiredForLevel()` 和 `InitializeXpRequiredForSkillLevel()` 预计算两张 XP 查找表。`_skillsRequiredForLevel` 从 1000 起步，每级增量递增 1000 + 增量/5（二次增长）；`_xpRequiredForSkillLevel` 从 30 起步，每级增量递增 10 + 当前等级（线性增长）。

### 属性（调参用）

| 成员 | 签名 | 行号 | 用途 |
|------|------|------|------|
| `MaxFocusPerSkill` | `public override int MaxFocusPerSkill { get; }` | `:40` | 返回 5——单个技能最多可分配的专注点数。 |
| `MaxAttribute` | `public override int MaxAttribute { get; }` | `:50` | 返回 10——单个角色属性的上限值。 |
| `AttributePointsAtStart` | `public override int AttributePointsAtStart { get; }` | `:177` | 返回 15——角色创建时赠送的属性点数。 |
| `LevelsPerAttributePoint` | `public override int LevelsPerAttributePoint { get; }` | `:187` | 返回 4——每升多少角色级获得 1 属性点。 |
| `FocusPointsPerLevel` | `public override int FocusPointsPerLevel { get; }` | `:197` | 返回 1——每升多少角色级获得 1 专注点。 |
| `FocusPointsAtStart` | `public override int FocusPointsAtStart { get; }` | `:207` | 返回 5——角色创建时赠送的专注点数。 |
| `MaxSkillRequiredForEpicPerkBonus` | `public override int MaxSkillRequiredForEpicPerkBonus { get; }` | `:217` | 返回 250——技能值超过此值后史诗专长不再给加成。 |
| `MinSkillRequiredForEpicPerkBonus` | `public override int MinSkillRequiredForEpicPerkBonus { get; }` | `:227` | 返回 200——技能值达到此值后史诗专长开始给加成。 |

### 方法（核心逻辑）

**`public override int SkillsRequiredForLevel(int level)`** — `DefaultCharacterDevelopmentModel.cs:59`

返回升到 `level` 级所需的累计技能点总数。查预计算表 `_skillsRequiredForLevel[level]`；level > 62 时返回 `GetMaxSkillPoint()`（即 `int.MaxValue`），表示不可达。

**`public override int GetMaxSkillPoint()`** — `DefaultCharacterDevelopmentModel.cs:69`

返回 `int.MaxValue`，作为"技能点总量不可达"的哨兵值。当角色等级超过 62 时 `SkillsRequiredForLevel` 返回此值。

**`public override int GetXpRequiredForSkillLevel(int skillLevel)`** — `DefaultCharacterDevelopmentModel.cs:87`

返回技能从 0 级升到 `skillLevel` 所需的累计经验值。查预计算表 `_xpRequiredForSkillLevel[skillLevel - 1]`；skillLevel > 1024 时 clamp 到 1024，≤0 时返回 0。

**`public override int GetSkillLevelChange(Hero hero, SkillObject skill, float skillXp)`** — `DefaultCharacterDevelopmentModel.cs:101`

给定当前经验 surplus `skillXp`，返回这些经验实际能买多少级技能提升。从当前技能值开始遍历 XP 表，直到 surplus 不足以支付下一级为止。

**`public override int GetXpAmountForSkillLevelChange(Hero hero, SkillObject skill, int skillLevelChange)`** — `DefaultCharacterDevelopmentModel.cs:121`

返回从当前技能值提升 `skillLevelChange` 级所需的经验增量。计算 `_xpRequiredForSkillLevel[skillValue + skillLevelChange] - _xpRequiredForSkillLevel[skillValue]`。

**`public override void GetTraitLevelForTraitXp(Hero hero, TraitObject trait, int xpValue, out int traitLevel, out int clampedTraitXp)`** — `DefaultCharacterDevelopmentModel.cs:128`

将原始特质经验值映射到特质等级（-2 到 2），同时输出 clamp 后的经验值。阈值：±1000 对应 ±1 级，±4000 对应 ±2 级；对于 min/max 范围更宽的特质（如 -2..2），阈值放宽到 ±2500/±6000。

**`public override int GetTraitXpRequiredForTraitLevel(TraitObject trait, int traitLevel)`** — `DefaultCharacterDevelopmentModel.cs:154`

`GetTraitLevelForTraitXp` 的逆操作：返回特质等级对应的经验值。-1 级 → -1000，0 级 → 0，1 级 → 1000，其他 → ±4000。

**`public override ExplainedNumber CalculateLearningLimit(IReadOnlyPropertyOwner<CharacterAttribute> characterAttributes, int focusValue, SkillObject skill, bool includeDescriptions = false)`** — `DefaultCharacterDevelopmentModel.cs:236`

计算技能值的学习上限：`(属性均值 - 1) × 10 + 专注点 × 30`。当技能值超过此上限时，`CalculateLearningRate` 会施加超限惩罚。返回 `ExplainedNumber`，可附带文字说明。

**`public override ExplainedNumber CalculateLearningRate(IReadOnlyPropertyOwner<CharacterAttribute> characterAttributes, int focusValue, int skillValue, SkillObject skill, bool includeDescriptions = false)`** — `DefaultCharacterDevelopmentModel.cs:252`

核心学习速率公式：基础 1.25 × (1 + 0.4 × 属性均值) × (1 + 专注点)。若技能值超过学习上限，追加负因子 `-(1 + 0.1 × 超出量)`。返回 `ExplainedNumber`，取 `.ResultNumber` 得浮点速率。

**`public override SkillObject GetNextSkillToAddFocus(Hero hero)`** — `DefaultCharacterDevelopmentModel.cs:274`

遍历所有技能，找到当前技能值与学习上限差距最大的技能——即投入专注点后学习速率提升最明显的技能。用于自动分配专注点。

**`public override CharacterAttribute GetNextAttributeToUpgrade(Hero hero)`** — `DefaultCharacterDevelopmentModel.cs:295`

遍历所有属性，找到升级后对总学习速率提升最大的属性。计算时加权使用该属性的所有技能的学习空间，并通过 `sqrt(最高属性值 / 当前属性值)` 惩罚已较高的属性。用于自动分配属性点。

**`public override PerkObject GetNextPerkToChoose(Hero hero, PerkObject perk)`** — `DefaultCharacterDevelopmentModel.cs:350`

50/50 随机选择：如果 perk 有 `AlternativePerk`，一半概率返回替代 perk，否则返回原 perk。用于 perk 选择界面的随机化。

## 真实示例

以下示例均来自游戏源码中 `HeroDeveloper`、`TraitLevelingHelper`、`CampaignUIHelper` 和 `SkillVM` 对 `DefaultCharacterDevelopmentModel` 的真实调用：

```csharp
// HeroDeveloper.cs:111 — 角色界面经验进度条
return MathF.Round(this.GetSkillXp(skill)) - Campaign.Current.Models.CharacterDevelopmentModel.GetXpRequiredForSkillLevel(skillValue);
```

```csharp
// HeroDeveloper.cs:241 — 应用待处理经验并计算升级
int skillLevelChange = Campaign.Current.Models.CharacterDevelopmentModel.GetSkillLevelChange(this.Hero, skill, num3);
```

```csharp
// HeroDeveloper.cs:264 — 获取当前学习速率（UI 和 XP 奖励都用）
return Campaign.Current.Models.CharacterDevelopmentModel.CalculateLearningRate(this.Hero.CharacterAttributes, this.GetFocus(skill), this.Hero.GetSkillValue(skill), skill, false).ResultNumber;
```

```csharp
// HeroDeveloper.cs:343 — 自动分配属性点
CharacterAttribute nextAttributeToUpgrade = Campaign.Current.Models.CharacterDevelopmentModel.GetNextAttributeToUpgrade(this.Hero);
```

```csharp
// HeroDeveloper.cs:463 — 自动分配专注点
SkillObject nextSkillToAddFocus = Campaign.Current.Models.CharacterDevelopmentModel.GetNextSkillToAddFocus(this.Hero);
```

```csharp
// TraitLevelingHelper.cs:22 — 特质经验授予
int traitXpRequiredForTraitLevel = Campaign.Current.Models.CharacterDevelopmentModel.GetTraitXpRequiredForTraitLevel(traitObject, traitLevel);
```

```csharp
// TraitLevelingHelper.cs:166 — 特质经验变化后解析等级
Campaign.Current.Models.CharacterDevelopmentModel.GetTraitLevelForTraitXp(Hero.MainHero, trait, xpAmount, out num, out value);
```

```csharp
// CampaignUIHelper.cs:1062 — 学习速率 tooltip（带文字说明）
ExplainedNumber explainedNumber = Campaign.Current.Models.CharacterDevelopmentModel.CalculateLearningRate(characterAttributes, focusValue, skillValue, skill, true);
```

```csharp
// SkillVM.cs:70 — 每级经验消耗
this.XpRequiredForNextLevel = Campaign.Current.Models.CharacterDevelopmentModel.GetXpRequiredForSkillLevel(this.Level + 1) - Campaign.Current.Models.CharacterDevelopmentModel.GetXpRequiredForSkillLevel(this.Level);
```

## 参见

- [CharacterDevelopmentModel](../CharacterDevelopmentModel) — 抽象基类，定义本模型实现的接口契约
- [HeroDeveloper](../HeroDeveloper) — 主要调用方，负责经验分配、升级结算、自动分配专注点和属性点
- [TraitLevelingHelper](../TraitLevelingHelper) — 特质经验授予与等级解析的调用方
- [GameModels](../GameModels) — 模型持有者，通过 `Campaign.Current.Models` 访问本模型

## 导航

- [campaign 目录](../)
- [CharacterDevelopmentModel](../CharacterDevelopmentModel)
- [HeroDeveloper](../HeroDeveloper)
- [TraitLevelingHelper](../TraitLevelingHelper)
- [GameModels](../GameModels)
