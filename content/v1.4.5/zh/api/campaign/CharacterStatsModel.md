---
title: "CharacterStatsModel"
description: "推导角色（CharacterObject / Hero）阶位 Tier、最大生命值 MaxHitpoints、英雄重伤阈值 WoundedHitPointLimit 与角色最高阶位上限 MaxCharacterTier 的规则模型，由 Campaign 在运行时通过 Campaign.Current.Models.CharacterStatsModel 解析，被 CharacterObject、Hero 的属性转发以及招募与对话逻辑在运行时调用。"
---

# CharacterStatsModel

**命名空间：** TaleWorlds.CampaignSystem.ComponentInterfaces
**模块：** TaleWorlds.CampaignSystem
**类型：** public abstract class CharacterStatsModel : MBGameModel<CharacterStatsModel>
**源文件：** Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/CharacterStatsModel.cs

## 概述

该模型集中封装“角色基础数值”的判定规则：给定一名 `CharacterObject` 算出其阶位（Tier）与最大生命值（MaxHitpoints），给定一名 `Hero` 算出其重伤阈值（WoundedHitPointLimit），并暴露全局的角色最高阶位上限 `MaxCharacterTier`。它只做纯计算，不持有任何会被写进存档的世界状态——真正的角色数值由 `CharacterObject` / `Hero` 的属性与战斗/招募逻辑读写，模型仅作为这些数值的求值入口。

## 心智模型

CharacterStatsModel 是一个纯计算的角色属性扩展点：Campaign 在启动时通过 `GameModels` 从已注册的 `GameModel` 集合中按类型解析出唯一实例（`DefaultCharacterStatsModel`）并持有，运行时统一用 `Campaign.Current.Models.CharacterStatsModel` 取得；它不参与存档序列化，也不会在每个 tick 被重新构造。角色对象 `CharacterObject` 的 `Tier`、`MaxHitPointsExplanation` 与 `MaxHitPoints` 属性直接转发到本模型的 `GetTier` 与 `MaxHitpoints`，英雄的 `WoundedHealthLimit` 属性则转发到 `WoundedHitPointLimit`；招募行为 `RecruitmentCampaignBehavior` 与对话/队伍辅助类在判定单位阶位上限时读取 `MaxCharacterTier`。要改规则就继承并注册一个替换实现，要读结果就走模型，绝不要直接改模型字段或手动缓存实例。

## 何时使用 / 何时不要使用

- **使用**：需要查询或自定义“角色阶位 / 最大生命值 / 重伤阈值 / 最高阶位上限”是如何计算时，读取 `Campaign.Current.Models.CharacterStatsModel` 的返回值，或提供一个新的派生类覆盖四个抽象成员并通过子模块注册替换默认实现。
- **不要使用**：不要直接给 `CharacterObject.Tier`、`CharacterObject.MaxHitPoints` 之外的模型字段赋值来“改一个角色的血量或阶位”——模型是无状态纯函数，真实状态在 [CharacterObject](../CharacterObject) 与 [Hero](../Hero) 上。要改变世界状态应走战斗结算、招募行为或对应 `*Action`，而不是篡改模型；也不要在模型里塞可变字段指望随存档恢复（它没有 `[SaveableField]`）。

## 依赖图

上游类型与系统：

- [Campaign](../Campaign) —— 持有 `Models` 集合，是运行时获取该模型的入口。
- [GameModels](../GameModels) —— 在构造时通过 `GetGameModel<CharacterStatsModel>()` 解析并缓存实例。
- [CharacterDevelopmentModel](../CharacterDevelopmentModel) —— `DefaultCharacterStatsModel.MaxHitpoints` 在 `Athletics.MightyBlow` 分支里读取其 `MaxSkillRequiredForEpicPerkBonus` 计算额外加成。

下游与协同系统（调用方）：

- [CharacterObject](../CharacterObject) —— `Tier` 属性转发到 `GetTier(this)`；`MaxHitPointsExplanation` 与 `MaxHitPoints` 转发到 `MaxHitpoints(this, ...)`，是模型最常被读取的入口。
- [Hero](../Hero) —— `WoundedHealthLimit` 属性转发到 `WoundedHitPointLimit(this)`。
- [RecruitmentCampaignBehavior](../RecruitmentCampaignBehavior) —— 招募升级志愿兵时调用 `GetTier(character)` 与 `MaxCharacterTier` 判定可成长阶位上限。
- [ExplainedNumber](../ExplainedNumber) —— `MaxHitpoints` 的返回类型，用于携带带说明项的生命值构成。
- [CampaignBehaviorBase](../CampaignBehaviorBase) —— `RecruitmentCampaignBehavior` 的基类，是实际驱动阶位判定的调用者。
- [DefaultPrisonerRecruitmentCalculationModel](../DefaultPrisonerRecruitmentCalculationModel) —— 俘虏转化为兵员时比较 `character.Tier > MaxCharacterTier` 来排除过高阶位单位。

## 风险

- **跨战役重载缓存实例**：`Campaign.Current.Models.CharacterStatsModel` 在每次新战役/读档时由 `GameModels` 重新解析。把实例缓存进静态字段或长生命周期对象，会在重载后指向旧战役的已销毁对象，调用即崩溃或读到陈旧规则。每次需要时都重新走 `Campaign.Current.Models` 获取。
- **战役开始前访问**：`Campaign.Current` 或 `Campaign.Current.Models` 在战役未启动时为 `null`。在 `MainMenu`、子模块加载早期或编辑器上下文里调用会直接空引用。
- **误判状态层**：该模型是无状态纯函数，没有需要持久化的字段，也不含 `[SaveableField]`。若你新增的派生类里加了可变字段并期望它随存档恢复，会发现这些值永远不会被序列化，从而产生隐蔽的规则漂移。
- **在 Mission/战斗层调用**：模型属于 Campaign 层，仅在战役模拟中存在；在 `Mission` 或战场逻辑里取 `Campaign.Current.Models` 是错误的访问层（战斗中实际血量应走战斗实体而非本模型）。
- **只替换模型不改写入路径**：派生类改变了阶位公式或生命值加成，但真正把这些数值落到的 `CharacterObject.Tier` / `MaxHitPoints` 上的仍是属性转发与战斗/招募行为。只替换模型、却让调用方按旧假设处理阶位或招募上限，会出现界面可招数与预测不一致。
- **`GetTier` 对英雄返回 0**：默认实现中 `CharacterObject.IsHero` 为真时 `GetTier` 直接返回 `0`，英雄的“阶位”概念走的是等级/专精体系而非此 Tier。若你的派生类没有保留这个分支，会让英雄被误判为可成长到高阶兵，破坏招募与对比逻辑。

## 成员说明

### 阶位与上限

- **`MaxCharacterTier`**（属性，返回 `int`）
  - 用途：角色可拥有的最高阶位上限。默认实现 `DefaultCharacterStatsModel` 返回 `6`。`GetTier` 用它把非英雄角色的阶位截断在上限内；`ConversationHelper`、`PartyBaseHelper`、`DefaultPrisonerRecruitmentCalculationModel` 都用它比较单位阶位是否已达顶。
  - 副作用：无，纯计算。
  - 调用时机：招募升级、阶位对比、俘虏转化判定时作为上限常量读取。

- **`GetTier(CharacterObject character)`**
  - 用途：返回该角色的阶位（Tier）。默认实现：若该角色是英雄（`IsHero`）则固定返回 `0`；否则按公式 `Min(Max(Ceiling((角色等级 - 5) / 5), 0), MaxCharacterTier)` 把等级换算成 0~6 的阶位。
  - 副作用：无，纯计算；内部会回读 `MaxCharacterTier`。
  - 调用时机：[CharacterObject](../CharacterObject).`Tier` 属性转发；[RecruitmentCampaignBehavior](../RecruitmentCampaignBehavior) 在升级志愿兵前调用。

### 生命值与重伤

- **`MaxHitpoints(CharacterObject character, bool includeDescriptions = false)`**
  - 用途：返回该角色的最大生命值（`ExplainedNumber`，基础值为 `100`），并叠加多条专长加成：单手 `Trainer`、双手 `ThickHides`、医术 `DoctorsOath`（次要）、医术 `FortitudeTonic`（次要）、运动 `WellBuilt`、单手 `UnwaveringDefense`、医术 `PreventiveMedicine`；若英雄所在队伍的非领袖角色且队伍拥有医术 `FortitudeTonic` 则再加一次该专长主加成；若拥有运动 `MightyBlow` 则额外加上（运动技能值 − `CharacterDevelopmentModel.MaxSkillRequiredForEpicPerkBonus`）。传入 `includeDescriptions: true` 可让返回的 `ExplainedNumber` 携带每条加成的说明项。
  - 副作用：无，纯计算。
  - 调用时机：[CharacterObject](../CharacterObject).`MaxHitPointsExplanation` 与 `MaxHitPoints` 转发；界面 tooltip 与战斗初始化读取。

- **`WoundedHitPointLimit(Hero hero)`**
  - 用途：返回该英雄被判定为“重伤”的生命值阈值。默认实现 `DefaultCharacterStatsModel` 固定返回 `20`（达到或低于此值即视为重伤）。
  - 副作用：无，纯计算。
  - 调用时机：仅由 [Hero](../Hero).`WoundedHealthLimit` 属性转发，用于治疗/重伤状态判定。

## 示例

读取某角色的最大生命值构成（含说明项）与阶位：

```csharp
CharacterObject character = CharacterObject.All.GetRandomElement();
ExplainedNumber hp = Campaign.Current.Models.CharacterStatsModel
    .MaxHitpoints(character, includeDescriptions: true);
float maxHp = hp.ResultNumber;
int tier = Campaign.Current.Models.CharacterStatsModel.GetTier(character);
```

查询英雄的重伤阈值与全局最高阶位上限：

```csharp
Hero hero = Hero.MainHero;
int woundedLimit = Campaign.Current.Models.CharacterStatsModel.WoundedHitPointLimit(hero);
int maxTier = Campaign.Current.Models.CharacterStatsModel.MaxCharacterTier;
```

## 参见

- ↑ 父级：[战役 API 索引](../)
- ↔ 相关：[Campaign](../Campaign) · [GameModels](../GameModels) · [CharacterObject](../CharacterObject) · [Hero](../Hero) · [RecruitmentCampaignBehavior](../RecruitmentCampaignBehavior) · [CharacterDevelopmentModel](../CharacterDevelopmentModel) · [ExplainedNumber](../ExplainedNumber) · [CampaignBehaviorBase](../CampaignBehaviorBase) · [DefaultPrisonerRecruitmentCalculationModel](../DefaultPrisonerRecruitmentCalculationModel) · [DefaultCharacterStatsModel](../DefaultCharacterStatsModel)
