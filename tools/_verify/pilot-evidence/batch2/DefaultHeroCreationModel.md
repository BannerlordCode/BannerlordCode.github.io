# Evidence: DefaultHeroCreationModel

## 1. Source file & class declaration

**Source file:** `bannerlord-1.3.0/TaleWorlds.CampaignSystem/GameComponents/DefaultHeroCreationModel.cs`
**Total lines:** 518

**Class declaration (line 19):**
```csharp
public class DefaultHeroCreationModel : HeroCreationModel
```

**Base class:** `HeroCreationModel` (abstract) at `bannerlord-1.3.0/TaleWorlds.CampaignSystem/ComponentInterfaces/HeroCreationModel.cs:12`
```csharp
public abstract class HeroCreationModel : MBGameModel<HeroCreationModel>
```

**Grep command used:**
```bash
grep -n -E "^\s*(public|private|protected|internal)\s+(override\s+)?(static\s+)?(const\s+)?[A-Za-z_]" \
  TaleWorlds.CampaignSystem/GameComponents/DefaultHeroCreationModel.cs
```

---

## 2. Per-member inventory (all public members)

All 16 public members are `override` methods implementing the abstract `HeroCreationModel` base. No public fields/properties exist.

| # | Signature | Source file:line | What it does (one sentence) |
|---|-----------|------------------|------------------------------|
| 1 | `public override ValueTuple<CampaignTime, CampaignTime> GetBirthAndDeathDay(CharacterObject character, bool createAlive, int age)` | `DefaultHeroCreationModel.cs:22` | 根据角色是否存活、年龄、职业（流浪者）等条件，计算并返回英雄的出生与死亡时间元组。 |
| 2 | `public override Settlement GetBornSettlement(Hero hero)` | `DefaultHeroCreationModel.cs:67` | 根据英雄母亲的定居点、所属派系或随机城镇，确定并返回英雄的出生定居点。 |
| 3 | `public override StaticBodyProperties GetStaticBodyProperties(Hero hero, bool isOffspring, float variationAmount = 0.35f)` | `DefaultHeroCreationModel.cs:127` | 为英雄生成静态身体属性（体型、发型、纹身等），后代会继承父母特征并混入随机变异。 |
| 4 | `public override FormationClass GetPreferredUpgradeFormation(Hero hero)` | `DefaultHeroCreationModel.cs:203` | 随机返回英雄偏好的升级阵型类别（40% 概率为具体阵型，60% 为全阵型）。 |
| 5 | `public override Clan GetClan(Hero hero)` | `DefaultHeroCreationModel.cs:214` | 根据父母关系确定英雄所属 clan：若父母之一是玩家则返回玩家 clan，否则返回父亲的 clan。 |
| 6 | `public override CultureObject GetCulture(Hero hero, Settlement bornSettlement, Clan clan)` | `DefaultHeroCreationModel.cs:228` | 根据父母文化（各 50% 概率）或角色原始文化，确定并返回英雄的文化对象。 |
| 7 | `public override CharacterObject GetRandomTemplateByOccupation(Occupation occupation, Settlement settlement = null)` | `DefaultHeroCreationModel.cs:253` | 从指定定居点的 notable 模板中，按职业和频率权重随机选取一个角色模板。 |
| 8 | `public override List<ValueTuple<TraitObject, int>> GetTraitsForHero(Hero hero)` | `DefaultHeroCreationModel.cs:289` | 为英雄生成特质列表：后代随机继承父母特质，特定职业（帮派首领、工匠等）额外添加荣誉/仁慈等五项特质。 |
| 9 | `public override Equipment GetCivilianEquipment(Hero hero)` | `DefaultHeroCreationModel.cs:356` | 返回英雄的平民装备；后代从装备库中随机生成，非后代直接返回已有装备。 |
| 10 | `public override Equipment GetBattleEquipment(Hero hero)` | `DefaultHeroCreationModel.cs:366` | 返回英雄的战斗装备；后代基于平民装备复制生成，非后代直接返回已有装备。 |
| 11 | `public override CharacterObject GetCharacterTemplateForOffspring(Hero mother, Hero father, bool isOffspringFemale)` | `DefaultHeroCreationModel.cs:378` | 根据后代性别返回对应的母亲或父亲角色模板。 |
| 12 | `public override ValueTuple<TextObject, TextObject> GenerateFirstAndFullName(Hero hero)` | `DefaultHeroCreationModel.cs:393` | 调用 NameGenerator 为英雄生成名字和全名，返回两个 TextObject 元组。 |
| 13 | `public override List<ValueTuple<SkillObject, int>> GetDefaultSkillsForHero(Hero hero)` | `DefaultHeroCreationModel.cs:402` | 返回英雄默认技能列表（基于角色模板默认技能值加噪声），未成年英雄返回空列表。 |
| 14 | `public override List<ValueTuple<SkillObject, int>> GetInheritedSkillsForHero(Hero hero)` | `DefaultHeroCreationModel.cs:434` | 返回英雄从父母继承的技能列表，按继承值排序后截取前 27.8% 并缩放到目标平均值。 |
| 15 | `public override bool IsHeroCombatant(Hero hero)` | `DefaultHeroCreationModel.cs:501` | 判断英雄是否为战斗人员：任一战斗技能（单手/双手/长杆/投掷/弩/弓）≥50 即为战斗人员。 |

**Private members (not part of public API, listed for completeness):**
- `private int CalculateTraitValueForHero(Hero hero, TraitObject trait)` — line 336
- `private static int GetInheritedSkillValue(Hero hero, SkillObject skillObject)` — line 423
- `private static int AddNoiseToSkillValue(int skillValue)` — line 494
- `private const int AverageSkillValueForHeroComesOfAge = 112` — line 507
- `private const int NonCombatantSkillThresholdValue = 50` — line 510
- `private const float FemaleCombatantChance = 0.6f` — line 513
- `private const int NoiseValueToAddSkill = 5` — line 516

---

## 3. Call example candidates (≥3)

### Example 1: GetBirthAndDeathDay — 获取英雄出生/死亡时间
**Source:** `bannerlord-1.3.0/TaleWorlds.CampaignSystem/HeroCreator.cs:18`
```csharp
ValueTuple<CampaignTime, CampaignTime> birthAndDeathDay =
    Campaign.Current.Models.HeroCreationModel.GetBirthAndDeathDay(randomTemplateByOccupation, true, -1);
```
**Also at:** `HeroCreator.cs:35`, `HeroCreator.cs:59`, `HeroCreator.cs:72`, `HeroCreator.cs:92`, `HeroCreator.cs:108`

### Example 2: GetBornSettlement — 获取英雄出生定居点
**Source:** `bannerlord-1.3.0/TaleWorlds.CampaignSystem/HeroCreator.cs:147`
```csharp
hero.BornSettlement = (initializationArgs.HasBornSettlementBeenSet
    ? initializationArgs.BornSettlement
    : Campaign.Current.Models.HeroCreationModel.GetBornSettlement(hero));
```

### Example 3: GetCulture — 获取英雄文化
**Source:** `bannerlord-1.3.0/TaleWorlds.CampaignSystem/HeroCreator.cs:150`
```csharp
hero.Culture = (initializationArgs.Culture ??
    Campaign.Current.Models.HeroCreationModel.GetCulture(hero, hero.BornSettlement, hero.Clan));
```

### Example 4: GetRandomTemplateByOccupation — 按职业获取随机角色模板
**Source:** `bannerlord-1.3.0/TaleWorlds.CampaignSystem/HeroCreator.cs:17`
```csharp
CharacterObject randomTemplateByOccupation =
    Campaign.Current.Models.HeroCreationModel.GetRandomTemplateByOccupation(occupation, settlement);
```
**Also at:** `HeroCreator.cs:71`

### Example 5: GetTraitsForHero — 获取英雄特质列表
**Source:** `bannerlord-1.3.0/TaleWorlds.CampaignSystem/HeroCreator.cs:171`
```csharp
foreach (ValueTuple<TraitObject, int> valueTuple2 in
    Campaign.Current.Models.HeroCreationModel.GetTraitsForHero(hero))
```

### Example 6: GetInheritedSkillsForHero — 获取英雄继承技能
**Source:** `bannerlord-1.3.0/TaleWorlds.CampaignSystem/CampaignBehaviors/AgingCampaignBehavior.cs:273`
```csharp
foreach (ValueTuple<SkillObject, int> valueTuple in
    Campaign.Current.Models.HeroCreationModel.GetInheritedSkillsForHero(hero))
```

### Example 7: IsHeroCombatant — 判断英雄是否为战斗人员
**Source:** `bannerlord-1.3.0/TaleWorlds.CampaignSystem/Hero.cs:689`
```csharp
return !Campaign.Current.Models.HeroCreationModel.IsHeroCombatant(this);
```

### Example 8: GetDefaultSkillsForHero — 获取英雄默认技能
**Source:** `bannerlord-1.3.0/TaleWorlds.CampaignSystem/Hero.cs:2203`
```csharp
foreach (ValueTuple<SkillObject, int> valueTuple in
    Campaign.Current.Models.HeroCreationModel.GetDefaultSkillsForHero(this))
```
**Also at:** `HeroCreator.cs:177`

### Example 9: GetCivilianEquipment / GetBattleEquipment — 获取装备
**Source:** `bannerlord-1.3.0/TaleWorlds.CampaignSystem/HeroCreator.cs:192-194`
```csharp
Equipment civilianEquipment = Campaign.Current.Models.HeroCreationModel.GetCivilianEquipment(hero);
Equipment battleEquipment = Campaign.Current.Models.HeroCreationModel.GetBattleEquipment(hero);
```

### Example 10: GetCharacterTemplateForOffspring — 获取后代角色模板
**Source:** `bannerlord-1.3.0/TaleWorlds.CampaignSystem/HeroCreator.cs:107`
```csharp
CharacterObject characterTemplateForOffspring =
    Campaign.Current.Models.HeroCreationModel.GetCharacterTemplateForOffspring(mother, father, isOffspringFemale);
```

### Example 11: GenerateFirstAndFullName — 生成英雄名字
**Source:** `bannerlord-1.3.0/TaleWorlds.CampaignSystem/HeroCreator.cs:158`
```csharp
ValueTuple<TextObject, TextObject> valueTuple =
    Campaign.Current.Models.HeroCreationModel.GenerateFirstAndFullName(hero);
```

### Example 12: GetPreferredUpgradeFormation — 获取偏好升级阵型
**Source:** `bannerlord-1.3.0/TaleWorlds.CampaignSystem/HeroCreator.cs:148`
```csharp
hero.PreferredUpgradeFormation = (initializationArgs.PreferredUpgradeFormation ??
    Campaign.Current.Models.HeroCreationModel.GetPreferredUpgradeFormation(hero));
```

### Example 13: GetStaticBodyProperties — 获取静态身体属性
**Source:** `bannerlord-1.3.0/TaleWorlds.CampaignSystem/HeroCreator.cs:27`
```csharp
heroInitializationArgs.SetAppearance(
    new StaticBodyProperties?(
        Campaign.Current.Models.HeroCreationModel.GetStaticBodyProperties(hero, false, 0f)),
    -1f, -1f, -1, -1, -1);
```
**Also at:** `HeroCreator.cs:151`

---

## 4. Current page status

**Page path:** `content/v1.3.0/zh/api/campaign/DefaultHeroCreationModel.md`
**Byte count:** 7039 bytes

**Section inventory (H2 headings):**
| Section | Line | Present? |
|---------|------|----------|
| `## 概述` | 13 | ✅ |
| `## 心智模型` | 17 | ✅ |
| `## 主要方法` | 21 | ✅ |
| `## 使用示例` | 188 | ✅ |
| `## 参见` | 194 | ✅ |

**Six-section completeness assessment:**
- Canonical six sections (per sibling `DefaultCharacterDevelopmentModel.md`): 概述、心智模型、主要属性、主要方法、使用示例、参见
- Current page has **5 of 6** sections — missing `## 主要属性` (the class has no public properties, only methods, so this is a reasonable omission but should be noted)
- The `## 主要方法` section covers 15 of 15 public methods with `### ` subsections (lines 23–187)
- The `## 使用示例` section (line 188) exists but is minimal — only 1 short example block
- The `## 参见` section (line 194) exists

**Gaps identified for rewrite:**
1. Missing `## 主要属性` section (or explicit "无 public 属性" note)
2. `## 使用示例` needs expansion with real call-site examples from HeroCreator.cs / Hero.cs / AgingCampaignBehavior.cs
3. `## 心智模型` is generic boilerplate — needs class-specific mental model (how HeroCreator orchestrates these methods)
4. Method descriptions are auto-generated one-liners ("读取并返回...") — need proper purpose + usage + examples per method
