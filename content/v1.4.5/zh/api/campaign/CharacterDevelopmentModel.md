---
title: "CharacterDevelopmentModel"
description: "决定英雄升级所需的累计技能点、各技能等级所需经验、通过练习可达到的技能上限与学习效率、史诗专长加成的技能门槛，以及属性点/专注点分配规则的计算模型，由 Campaign 在运行时通过 Campaign.Current.Models.CharacterDevelopmentModel 解析，被角色开发系统、特质成长、招募界面与多类战斗数值模型共用。"
---

# CharacterDevelopmentModel

**命名空间：** TaleWorlds.CampaignSystem.ComponentInterfaces
**模块：** TaleWorlds.CampaignSystem
**类型：** abstract class CharacterDevelopmentModel : MBGameModel<CharacterDevelopmentModel>
**源文件：** Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/CharacterDevelopmentModel.cs

## 概述

该模型集中封装了“角色成长”的全部数值规则：一名英雄升到某等级需要多少累计技能点、某个技能等级需要多少累计经验、仅靠练习能把技能练到多高（学习上限）以及练多快（学习效率）、史诗 `PerkObject` 加成要求技能值处于哪个区间，还有属性点/专注点的初始与每级发放量。它只做纯计算，真正的加点、加经验与状态存储发生在 [HeroDeveloper](../HeroDeveloper) 与英雄对象上。

## 心智模型

CharacterDevelopmentModel 是一个纯计算的规则扩展点：Campaign 在启动时通过 `GameModels` 从已注册的 `GameModel` 集合中按类型解析出唯一实例（`DefaultCharacterDevelopmentModel`）并持有，运行时统一用 `Campaign.Current.Models.CharacterDevelopmentModel` 取得；它不参与存档序列化，也不在每个 tick 被重新构造。`DefaultCharacterDevelopmentModel` 在构造时预计算了两张表——`_skillsRequiredForLevel[63]`（英雄等级所需技能点）与 `_xpRequiredForSkillLevel[1024]`（技能等级所需经验，快速模式会整体乘 0.3），其余方法都基于这两张表与属性/专注值即时推算。角色开发行为 `CharacterDevelopmentCampaignBehavior`、特质成长 `TraitLevelingHelper`、招募与角色界面 VM（`SkillVM`、`CharacterDeveloperVM`）都调用它来显示或推进成长；而 `SandboxAgentStatCalculateModel`、`SandboxBattleMoraleModel` 等战斗数值模型则读取它的史诗专长门槛常量来决定是否附加专长加成。要改规则就继承并注册替换实现，要读结果就走模型，绝不要把模型当成写世界的入口或直接改英雄的技能/属性值。

## 何时使用 / 何时不要使用

- **使用**：需要查询或自定义“升级曲线 / 经验曲线 / 学习上限与效率 / 史诗专长门槛 / 自动加点建议”时，读取 `Campaign.Current.Models.CharacterDevelopmentModel` 的返回值，或提供一个新的派生类覆盖抽象成员并通过子模块注册替换默认实现。
- **不要使用**：不要亲自给英雄的技能值、属性值、`HeroDeveloper` 的专注点赋值来“让角色变强”——这些写入由角色开发系统与对应 Action 负责，模型只是查询与判定。不要把模型返回值当作持久世界状态（它是无状态的纯函数）；也不要在 `Mission`/战斗逻辑里取 `Campaign.Current.Models` 来改成长，那是错误的访问层。

## 依赖图

上游类型与系统：

- [Campaign](../Campaign) —— 持有 `Models` 集合，是运行时获取该模型的入口。
- [GameModels](../GameModels) —— 在构造时通过 `GetGameModel<CharacterDevelopmentModel>()` 解析并缓存实例。
- [CharacterAttribute](../../core-extra/CharacterAttribute) —— `CalculateLearningLimit` / `CalculateLearningRate` 以属性值集合 `IReadOnlyPropertyOwner<CharacterAttribute>` 为输入，取技能相关属性的均值。
- [SkillObject](../../core-extra/SkillObject) —— 多个方法的技能参数；模型内部遍历 `Skills.All`。

下游与协同系统（调用方）：

- [Hero](../Hero) —— 主要被判定对象；`GetSkillValue`、`CharacterAttributes`、`HeroDeveloper` 提供模型所需入参。
- [HeroDeveloper](../HeroDeveloper) —— 加经验、计算“距下一级还差多少”时调用 `GetXpRequiredForSkillLevel` 与 `GetSkillLevelChange`。
- [TraitLevelingHelper](../TraitLevelingHelper) —— 给英雄累加特质经验时调用 `GetTraitXpRequiredForTraitLevel` 与 `GetTraitLevelForTraitXp`。
- [Traits](../TraitObject) —— `GetTraitXpRequiredForTraitLevel` / `GetTraitLevelForTraitXp` 操作 `TraitObject` 的等级与经验区间。
- [PerkObject](../PerkObject) —— `GetNextPerkToChoose` 操作 perk 及其 `AlternativePerk`；史诗 perk 门槛常量被战斗数值模型用于 `PerkHelper.AddEpicPerkBonusForCharacter`。
- [ExplainedNumber](../ExplainedNumber) —— `CalculateLearningLimit` / `CalculateLearningRate` 的返回类型，携带带说明项的数值。
- [CharacterDevelopmentCampaignBehavior](../CharacterDevelopmentCampaignBehavior) —— 驱动角色每日成长的实际行为，依赖本模型做判定。
- [DefaultCharacterDevelopmentModel](../DefaultCharacterDevelopmentModel) —— 默认实现，预计算等级/经验表并给出全部抽象成员的具体数值。
- [Attributes](../Attributes) / [Skills](../Skills) —— `GetNextAttributeToUpgrade` / `GetNextSkillToAddFocus` 遍历这些集合给出自动加点建议。
- [CharacterObject](../CharacterObject) —— 战斗数值模型（`SandboxAgentStatCalculateModel` 等）通过其 `GetSkillValue` 取得技能值后调用本模型的史诗门槛常量。

## 风险

- **跨战役重载缓存实例**：`Campaign.Current.Models.CharacterDevelopmentModel` 在每次新战役/读档时由 `GameModels` 重新解析。把实例缓存进静态字段或长生命周期对象，会在重载后指向旧战役的已销毁对象，调用即崩溃或读到陈旧规则。每次需要时都重新走 `Campaign.Current.Models` 获取。
- **战役开始前访问**：`Campaign.Current` 或 `Campaign.Current.Models` 在战役未启动时为 `null`。在 `MainMenu`、子模块加载早期或编辑器上下文里调用会直接空引用。
- **误判状态层**：该模型是无状态纯函数，没有需要持久化的字段，也不含 `[SaveableField]`。若你新增的派生类里加了可变字段并期望它随存档恢复，会发现这些值永远不会被序列化，从而产生隐蔽的规则漂移。
- **在 Mission/战斗层调用**：模型属于 Campaign 层，仅在战役模拟中存在；在 `Mission` 或战场逻辑里取 `Campaign.Current.Models` 是错误的访问层（尽管其史诗门槛常量常被战斗数值模型同步读取，那仍是 Campaign 侧的常量，不应在 Mission 内部改写成长）。
- **只替换模型不改写入路径**：派生类改变了升级/经验曲线，但真正把经验写进英雄、把技能值加上去的是 [HeroDeveloper](../HeroDeveloper) 与角色开发行为。只替换模型、却让调用方按旧假设处理技能值与加点上限，会出现界面显示与真实成长不一致。
- **`DefaultCharacterDevelopmentModel` 构造依赖 `Campaign.Current`**：其 `InitializeXpRequiredForSkillLevel` 在快速模式下读取 `Campaign.Current.Options.AccelerationMode`。在战役尚未就绪时强行构造默认实现会触发空引用——替换实现应避免在构造函数里触碰 `Campaign.Current`。

## 成员说明

### 等级与专注点/属性点常量

- **`MaxAttribute`**（属性，`int`，默认 10）
  - 用途：单个属性可点到的最高值。[CharacterAttributeItemVM](../../viewmodel/CharacterAttributeItemVM) 用它截断“还能不能继续加属性点”的判断。
  - 副作用：无，纯取值。调用时机：升级界面刷新属性槽时读取。

- **`MaxFocusPerSkill`**（属性，`int`，默认 5）
  - 用途：单个技能可投入的专注点上限。`SkillVM` 用它判断当前专注等级是否已封顶、是否还能继续加专注。
  - 副作用：无。调用时机：角色开发界面的专注点加减按钮判定。

- **`FocusPointsPerLevel`**（属性，`int`，默认 1）
  - 用途：每升一级获得的专注点数。`CharacterDeveloperVM` 把该值写入文本变量显示给玩家。
  - 副作用：无。

- **`FocusPointsAtStart`**（属性，`int`，默认 5）
  - 用途：角色创建时初始拥有的专注点总数。
  - 副作用：无。

- **`AttributePointsAtStart`**（属性，`int`，默认 15）
  - 用途：角色创建时初始拥有的属性点总数。
  - 副作用：无。

- **`LevelsPerAttributePoint`**（属性，`int`，默认 4）
  - 用途：每升多少级获得 1 点可自由分配的属性点。`CharacterDeveloperVM` 用它显示“每 4 级 +1 属性点”。
  - 副作用：无。

- **`MaxSkillRequiredForEpicPerkBonus`**（属性，`int`，默认 250）/ **`MinSkillRequiredForEpicPerkBonus`**（属性，`int`，默认 200）
  - 用途：史诗 `PerkObject` 附加加成要求技能值所处的上下阈值。`SandboxAgentStatCalculateModel` 与 `SandboxBattleMoraleModel` 在 `PerkHelper.AddEpicPerkBonusForCharacter` 调用中把它作为技能值门槛传入，低于下限或高于上限才触发对应专长加成。
  - 副作用：无，纯常量取值。调用时机：战斗数值模型计算 agent 属性/士气时。

### 等级与经验曲线

- **`SkillsRequiredForLevel(int level)`**
  - 用途：返回英雄达到等级 `level` 所需的累计技能点。默认实现查预计算的 `_skillsRequiredForLevel` 表：第 0 级 0、第 1 级 1，之后每级增量在上次增量上再加 `1000 + 上次增量/5`；当 `level > 62` 时返回 `GetMaxSkillPoint()`（即 `int.MaxValue`）作为封顶。
  - 副作用：无。调用时机：`CharacterDeveloperHeroItemVM` 用它显示“距下一级还需多少技能点”（`SkillsRequiredForLevel(Hero.Level + 1)`）。

- **`GetMaxSkillPoint()`**
  - 用途：返回技能点理论上限 `int.MaxValue`，作为等级超出 62 时的封顶哨兵。
  - 副作用：无。

- **`GetXpRequiredForSkillLevel(int skillLevel)`**
  - 用途：返回技能达到等级 `skillLevel` 所需的累计经验值。默认实现查 `_xpRequiredForSkillLevel[1024]`：第 0 级 30，之后每级加上 `10 + 当前级数` 的增量（快速模式整体乘 0.3）；`skillLevel > 1024` 截断到 1024，`skillLevel <= 0` 返回 0。
  - 副作用：无。调用时机：`HeroDeveloper` 的加经验、SkillVM 的“下一级所需经验”都用它算差值。

- **`GetSkillLevelChange(Hero hero, SkillObject skill, float skillXp)`**
  - 用途：给定英雄当前技能值与一笔经验 `skillXp`，返回技能会提升多少级。默认实现从当前技能值起逐档比对 `GetXpRequiredForSkillLevel(num2 + 1)`，只要累计经验够到下一道门槛就 `+1`，直到不够或逼近 1023 上限。
  - 副作用：无，纯推算。调用时机：实际结算技能经验、预测升级级数时。

- **`GetXpAmountForSkillLevelChange(Hero hero, SkillObject skill, int skillLevelChange)`**
  - 用途：给定希望提升的级数 `skillLevelChange`，返回从当前技能值起需要的经验量，等于 `GetXpRequiredForSkillLevel(当前值 + 变化 + 1) - GetXpRequiredForSkillLevel(当前值 + 1)`。
  - 副作用：无。调用时机：需要把“升 N 级”换算成经验成本的场景。

### 特质（Trait）等级映射

- **`GetTraitLevelForTraitXp(Hero hero, TraitObject trait, int xpValue, out int traitLevel, out int clampedTraitXp)`**
  - 用途：把特质经验值 `xpValue` 映射为特质等级（-2~2）。默认实现先按 `trait.MinValue`/`MaxValue` 把经验夹到允许区间（例如最小为 -1 的特质下限 -2500、最大超过 1 的特质上限 6000），再用阈值（-4000/-1000/1000/4000）换算等级，最后再夹到 trait 自身允许范围；`clampedTraitXp` 回传夹取后的经验值。
  - 副作用：仅通过 `out` 参数回填等级与夹取后经验，不改动世界状态。调用时机：`TraitLevelingHelper` 在累加特质经验后调用以确定新等级。

- **`GetTraitXpRequiredForTraitLevel(TraitObject trait, int traitLevel)`**
  - 用途：返回某特质等级对应的经验阈值：等级 1→1000、0→0、-1→-1000、≥2→4000、<-1→-4000（与映射阈值一致）。
  - 副作用：无。调用时机：`TraitLevelingHelper` 在给英雄加特质经验时调用它定位等级门槛。

### 学习效率：上限与速率

- **`CalculateLearningLimit(IReadOnlyPropertyOwner<CharacterAttribute> characterAttributes, int focusValue, SkillObject skill, bool includeDescriptions = false)`**
  - 用途：计算仅靠练习能学到的技能值上限。默认实现取技能相关属性的平均值（属性均值 - 1）×10 作为“属性效应”，再加 `focusValue × 30` 的“专注效应”，下限 0，返回 `ExplainedNumber`（`includeDescriptions` 为真时携带这两项说明）。
  - 副作用：无。调用时机：`GetNextSkillToAddFocus` / `GetNextAttributeToUpgrade` 用它判断某项还有多少成长空间；`CampaignUIHelper` 在角色界面显示上限。

- **`CalculateLearningRate(IReadOnlyPropertyOwner<CharacterAttribute> characterAttributes, int focusValue, int skillValue, SkillObject skill, bool includeDescriptions = false)`**
  - 用途：计算当前学习效率系数。基础 1.25，叠加属性因子 `0.4 × 平均属性`、专注因子 `focusValue × 1`；当 `skillValue` 超过 `CalculateLearningLimit` 时，按超出档数施加负因子 `-1 - 0.1 × 超出量` 并下限 0。返回 `ExplainedNumber`。
  - 副作用：无。调用时机：`IncidentEffect` 在每日结算经验时、`CampaignUIHelper` 在角色界面显示实际学习速率时调用。

### 自动加点建议

- **`GetNextSkillToAddFocus(Hero hero)`**
  - 用途：在所有“还能加专注”的技能里，返回“当前技能值 − 学习上限”最大、即最该补专注的那个 `SkillObject`；用于 AI/玩家自动分配专注点。
  - 副作用：无。调用时机：自动加点逻辑或界面建议。

- **`GetNextAttributeToUpgrade(Hero hero)`**
  - 用途：返回下一步最该升级的 `CharacterAttribute`。默认实现对该属性下各技能求 `(75 + 技能值) − 学习上限` 的均值，并乘以与其它属性最高值的比值做均衡，已封顶（达到 `MaxAttribute`）的属性跳过。
  - 副作用：无。调用时机：自动属性加点建议。

- **`GetNextPerkToChoose(Hero hero, PerkObject perk)`**
  - 用途：返回该 perk（若该 perk 有 `AlternativePerk` 且随机 `< 0.5` 则返回替代 perk），用于 NPC 自动选专长。
  - 副作用：无，含一次随机判定。调用时机：NPC 升级选专长时。

## 示例

查询某技能“升到下一级还差多少经验”：

```csharp
int level = hero.GetSkillValue(DefaultSkills.OneHanded);
int xpForNext = Campaign.Current.Models.CharacterDevelopmentModel
    .GetXpRequiredForSkillLevel(level + 1)
    - Campaign.Current.Models.CharacterDevelopmentModel.GetXpRequiredForSkillLevel(level);
```

计算英雄当前练习某技能的实际学习效率（带说明项）：

```csharp
ExplainedNumber rate = Campaign.Current.Models.CharacterDevelopmentModel
    .CalculateLearningRate(
        hero.CharacterAttributes,
        hero.HeroDeveloper.GetFocus(DefaultSkills.Athletics),
        hero.GetSkillValue(DefaultSkills.Athletics),
        DefaultSkills.Athletics,
        includeDescriptions: true);
float actualRate = rate.ResultNumber;
```

把一笔特质经验换算成特质等级：

```csharp
Campaign.Current.Models.CharacterDevelopmentModel
    .GetTraitLevelForTraitXp(hero, DefaultTraits.Valor, xpAmount, out int traitLevel, out int clampedXp);
```

## 参见

- ↑ 父级：[战役 API 索引](../)
- ↔ 相关：[Campaign](../Campaign) · [GameModels](../GameModels) · [Hero](../Hero) · [HeroDeveloper](../HeroDeveloper) · [TraitLevelingHelper](../TraitLevelingHelper) · [TraitObject](../TraitObject) · [PerkObject](../PerkObject) · [ExplainedNumber](../ExplainedNumber) · [CharacterDevelopmentCampaignBehavior](../CharacterDevelopmentCampaignBehavior) · [DefaultCharacterDevelopmentModel](../DefaultCharacterDevelopmentModel) · [Attributes](../Attributes) · [Skills](../Skills) · [CharacterObject](../CharacterObject) · [CharacterAttribute](../../core-extra/CharacterAttribute) · [SkillObject](../../core-extra/SkillObject)
