---
title: DefaultHeroCreationModel
description: 战役模式默认英雄生成模型，实现 HeroCreationModel 抽象基类，为 HeroCreator 提供英雄生成全链路规则：出生/死亡时间、出生定居点、文化、氏族、特质、技能、装备、外观与姓名。
---

## 概述

`DefaultHeroCreationModel` 是 v1.3.0 战役模式中默认的英雄生成模型，源文件位于 `TaleWorlds.CampaignSystem/GameComponents/DefaultHeroCreationModel.cs`（共 518 行）。它继承抽象基类 `HeroCreationModel`，为英雄创建流程提供全部生成规则：出生与死亡时间、出生定居点、文化、氏族、特质、技能、装备、外观与姓名。本类没有 public 字段或属性，所有 public 成员都是对基类抽象方法的 `override` 实现。

## 心智模型

**谁创建 / 持有 / 调用：**

- 游戏在战役初始化时把 `DefaultHeroCreationModel` 注册为 `HeroCreationModel` 游戏模型；运行期通过 `Campaign.Current.Models.HeroCreationModel` 解析，默认拿到就是本类的实例。
- 主要调用方是 `TaleWorlds.CampaignSystem/HeroCreator.cs`：创建英雄时按固定顺序调用本类方法（角色模板 → 出生/死亡时间 → 外观 → 出生定居点 → 文化 → 氏族 → 姓名 → 偏好阵型 → 特质 → 技能 → 装备）。
- `AgingCampaignBehavior` 在英雄成长过程中调用 `GetInheritedSkillsForHero`；`Hero` 自身在判断是否为战斗人员时调用 `IsHeroCombatant`。

**常见误用：**

- 在战役之外访问模型：`Campaign.Current` 为 `null` 时取模型会空引用，本模型只在战役会话内有效。
- 把方法当成确定性函数：多数方法带随机权重（模板选取、特质继承、阵型偏好等），同一输入多次调用结果可能不同。
- 混淆「后代」与「非后代」路径：`GetStaticBodyProperties`、`GetTraitsForHero`、`GetCivilianEquipment`、`GetBattleEquipment`、`GetClan`、`GetCulture` 在后代（有父母）与非后代场景下行为不同，调用前必须确认英雄是否为 offspring。
- 想改生成规则却直接 `new DefaultHeroCreationModel()`：正确做法是继承 `HeroCreationModel` 覆盖对应方法并注册为游戏模型，而不是替换实例。

## 怎么用

**拿到实例：** 不要直接实例化，通过游戏模型入口解析：

```csharp
HeroCreationModel model = Campaign.Current.Models.HeroCreationModel;
```

- 源文件：`bannerlord-1.3.0/TaleWorlds.CampaignSystem/GameComponents/DefaultHeroCreationModel.cs`，类声明在第 19 行（`public class DefaultHeroCreationModel : HeroCreationModel`）。
- 基类：`bannerlord-1.3.0/TaleWorlds.CampaignSystem/ComponentInterfaces/HeroCreationModel.cs:12`，声明为 `public abstract class HeroCreationModel : MBGameModel<HeroCreationModel>`。

**典型用法：** 英雄创建由 `HeroCreator` 编排调用；mod 若要定制英雄生成，继承 `HeroCreationModel` 并覆盖相应方法后注册为游戏模型。读取类查询（如判断战斗人员）可直接调用：

```csharp
bool nonCombatant = !Campaign.Current.Models.HeroCreationModel.IsHeroCombatant(hero);
```

**坑：**

- `Campaign.Current.Models` 只在战役会话内有效，编辑器/菜单场景下为 `null`。
- `GetDefaultSkillsForHero` 对未成年英雄返回空列表，不要假设总有技能。
- `GetInheritedSkillsForHero` 只截取按继承值排序后的前 27.8% 并缩放到目标平均值，返回的不是父母技能全集。
- `GetRandomTemplateByOccupation` 的 `settlement` 参数可选（默认 `null`），模板来自定居点 notable 模板按职业与频率权重随机选取。

## 关键成员

本节覆盖证据清单中的全部 public 成员（均为 `override` 方法，无 public 字段/属性）：

| # | 方法 | 源文件行号 | 用途 |
|---|------|-----------|------|
| 1 | `GetBirthAndDeathDay(CharacterObject character, bool createAlive, int age)` | `DefaultHeroCreationModel.cs:22` | 根据角色是否存活、年龄、职业（流浪者）等条件，计算并返回英雄的出生与死亡时间元组。 |
| 2 | `GetBornSettlement(Hero hero)` | `DefaultHeroCreationModel.cs:67` | 根据英雄母亲的定居点、所属派系或随机城镇，确定并返回英雄的出生定居点。 |
| 3 | `GetStaticBodyProperties(Hero hero, bool isOffspring, float variationAmount = 0.35f)` | `DefaultHeroCreationModel.cs:127` | 为英雄生成静态身体属性（体型、发型、纹身等），后代会继承父母特征并混入随机变异。 |
| 4 | `GetPreferredUpgradeFormation(Hero hero)` | `DefaultHeroCreationModel.cs:203` | 随机返回英雄偏好的升级阵型类别（40% 概率为具体阵型，60% 为全阵型）。 |
| 5 | `GetClan(Hero hero)` | `DefaultHeroCreationModel.cs:214` | 根据父母关系确定英雄所属 clan：若父母之一是玩家则返回玩家 clan，否则返回父亲的 clan。 |
| 6 | `GetCulture(Hero hero, Settlement bornSettlement, Clan clan)` | `DefaultHeroCreationModel.cs:228` | 根据父母文化（各 50% 概率）或角色原始文化，确定并返回英雄的文化对象。 |
| 7 | `GetRandomTemplateByOccupation(Occupation occupation, Settlement settlement = null)` | `DefaultHeroCreationModel.cs:253` | 从指定定居点的 notable 模板中，按职业和频率权重随机选取一个角色模板。 |
| 8 | `GetTraitsForHero(Hero hero)` | `DefaultHeroCreationModel.cs:289` | 为英雄生成特质列表：后代随机继承父母特质，特定职业（帮派首领、工匠等）额外添加荣誉/仁慈等五项特质。 |
| 9 | `GetCivilianEquipment(Hero hero)` | `DefaultHeroCreationModel.cs:356` | 返回英雄的平民装备；后代从装备库中随机生成，非后代直接返回已有装备。 |
| 10 | `GetBattleEquipment(Hero hero)` | `DefaultHeroCreationModel.cs:366` | 返回英雄的战斗装备；后代基于平民装备复制生成，非后代直接返回已有装备。 |
| 11 | `GetCharacterTemplateForOffspring(Hero mother, Hero father, bool isOffspringFemale)` | `DefaultHeroCreationModel.cs:378` | 根据后代性别返回对应的母亲或父亲角色模板。 |
| 12 | `GenerateFirstAndFullName(Hero hero)` | `DefaultHeroCreationModel.cs:393` | 调用 NameGenerator 为英雄生成名字和全名，返回两个 TextObject 元组。 |
| 13 | `GetDefaultSkillsForHero(Hero hero)` | `DefaultHeroCreationModel.cs:402` | 返回英雄默认技能列表（基于角色模板默认技能值加噪声），未成年英雄返回空列表。 |
| 14 | `GetInheritedSkillsForHero(Hero hero)` | `DefaultHeroCreationModel.cs:434` | 返回英雄从父母继承的技能列表，按继承值排序后截取前 27.8% 并缩放到目标平均值。 |
| 15 | `IsHeroCombatant(Hero hero)` | `DefaultHeroCreationModel.cs:501` | 判断英雄是否为战斗人员：任一战斗技能（单手/双手/长杆/投掷/弩/弓）≥50 即为战斗人员。 |

私有成员（非 public API，仅供理解实现）：`CalculateTraitValueForHero`（:336）、`GetInheritedSkillValue`（:423）、`AddNoiseToSkillValue`（:494），以及常量 `AverageSkillValueForHeroComesOfAge = 112`（:507）、`NonCombatantSkillThresholdValue = 50`（:510）、`FemaleCombatantChance = 0.6f`（:513）、`NoiseValueToAddSkill = 5`（:516）。

## 真实示例

以下示例均截取自 v1.3.0 源码树中的真实调用点。

**示例 1 — 创建英雄时获取出生/死亡时间**（`TaleWorlds.CampaignSystem/HeroCreator.cs:18`）：

```csharp
ValueTuple<CampaignTime, CampaignTime> birthAndDeathDay =
    Campaign.Current.Models.HeroCreationModel.GetBirthAndDeathDay(randomTemplateByOccupation, true, -1);
```

**示例 2 — 确定出生定居点与文化**（`TaleWorlds.CampaignSystem/HeroCreator.cs:147-150`）：

```csharp
hero.BornSettlement = (initializationArgs.HasBornSettlementBeenSet
    ? initializationArgs.BornSettlement
    : Campaign.Current.Models.HeroCreationModel.GetBornSettlement(hero));
hero.Culture = (initializationArgs.Culture ??
    Campaign.Current.Models.HeroCreationModel.GetCulture(hero, hero.BornSettlement, hero.Clan));
```

**示例 3 — 遍历英雄特质**（`TaleWorlds.CampaignSystem/HeroCreator.cs:171`）：

```csharp
foreach (ValueTuple<TraitObject, int> valueTuple2 in
    Campaign.Current.Models.HeroCreationModel.GetTraitsForHero(hero))
```

**示例 4 — 英雄成长时应用继承技能**（`TaleWorlds.CampaignSystem/CampaignBehaviors/AgingCampaignBehavior.cs:273`）：

```csharp
foreach (ValueTuple<SkillObject, int> valueTuple in
    Campaign.Current.Models.HeroCreationModel.GetInheritedSkillsForHero(hero))
```

**示例 5 — 判断英雄是否为非战斗人员**（`TaleWorlds.CampaignSystem/Hero.cs:689`）：

```csharp
return !Campaign.Current.Models.HeroCreationModel.IsHeroCombatant(this);
```

## 参见

- 基类：[HeroCreationModel](../HeroCreationModel) — 抽象游戏模型接口，本类是其默认实现。
- 主要调用方：[HeroCreator](../HeroCreator) — 英雄创建流程，按固定顺序调用本类方法。
- 成长调用方：[AgingCampaignBehavior](../AgingCampaignBehavior) — 英雄成长时调用 `GetInheritedSkillsForHero`。
- 兄弟模型：[DefaultCharacterDevelopmentModel](../DefaultCharacterDevelopmentModel) — 同桶的默认角色发展模型。
- 返回类型：[CampaignTime](../CampaignTime) — `GetBirthAndDeathDay` 返回的出生/死亡时间类型。

## 导航

- 父级索引：[campaign API 索引](../)
