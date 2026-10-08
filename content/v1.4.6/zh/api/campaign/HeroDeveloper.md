---
title: "HeroDeveloper"
description: "英雄角色成长的状态容器：持有技能经验账本、未分配专注点与属性点、总经验，并把技能升级、专注/属性加点、perk 授予的写入路径收口成一组方法。"
---
# HeroDeveloper

**Namespace:** `TaleWorlds.CampaignSystem.CharacterDevelopment`
**Type:** `public class HeroDeveloper`
**Source:** `TaleWorlds.CampaignSystem/CharacterDevelopment/HeroDeveloper.cs`

> 节 schema：本页采用 7 节（按出现顺序）：概述 / 心智模型 / 怎么用 / 关键成员 / 真实示例 / 参见 / 导航

## 概述

`HeroDeveloper` 是每个 `Hero` 身上那份「成长状态」的持有者。它不保存技能值本身——技能值、属性值、特性、perk 都存在 `Hero` 自己的属性容器里——它保存的是三样东西：每个技能累计到多少经验（`_skillXps`）、每个技能投了几点专注（`_newFocuses`）、以及把全部升级进度压成单值的总经验 `TotalXp`。除此之外，它把两个「还没花掉的池子」`UnspentFocusPoints` 与 `UnspentAttributePoints` 直接暴露成可读可写的属性。

游戏里所有改变角色成长曲线的操作都从这一页走：给技能加经验、按等级差改技能值、加/减专注点、加/减属性点、授予 perk、读「距离下一级还差多少经验」，以及读档时把旧版本存档迁移到当前的经验公式。它由 `Hero` 在构造时创建，通过 `Hero` 上的 `HeroDeveloper` 属性取到，外部不需要也不能自己 `new`（构造函数不是公开成员）。

## 心智模型

把一个英雄的成长想成**一本经验账本 + 两个待分配点数池 + 一张已选 perk 名单**，`HeroDeveloper` 就是这三样东西的持有者与唯一记账员。

- **账本有两个层级。** 细账是 `_skillXps`：字典，键是 `SkillObject`，值是该技能累计的经验，`GetSkillXp` / `SetSkillXp` 是它的读写口。总账是 `TotalXp`：一个 `int` 标量，`Hero.Level` 只认它，不认任何单个技能。细账溢出会改技能值，总账够数会改等级——这是两条独立推进的线，别把它们当成一件事。
- **两个池子是「已赚未花」。** `UnspentFocusPoints` 与 `UnspentAttributePoints` 在升级时增加（`OnGainLevel`），在加点时减少（`AddFocus` / `AddAttribute`）。它们是公开可写属性，所以「合法」和「正确」不是一回事：直接赋值不会少派发任何事件（这两个池子本来就没有事件），但会绕开方法里的上限与扣减逻辑。
- **技能经验的两条入口语义不同。** `AddSkillXp` 默认 `isAffectedByFocusFactor: true`，会先乘 `GetFocusFactor` 的学习倍率、再把原始经验喂给 `GainRawXp` 推总账；`ChangeSkillLevel` 走的是 `isAffectedByFocusFactor: false` 的那一支，只把技能值抬到目标等级，**不推总账、不升级**。想让「改技能」顺带升级，必须自己另外喂 `AddSkillXp`。
- **一次技能升级的完整链路。** `AddSkillXp` 累加细账后问 `CharacterDevelopmentModel.GetSkillLevelChange` 涨了几级，涨了就进 `ChangeSkillLevelFromXpChange`：写 `Hero.SetSkillValue` 并派发 `OnHeroGainedSkill`。总账那一路是 `GainRawXp` → `TotalXp` → `CheckLevel` → `Hero.Level++` → `OnGainLevel`：发专注点、按 `LevelsPerAttributePoint` 发属性点、派发 `OnHeroLevelledUp`。
- **所有公式都外挂在模型上。** 升级需求、学习倍率、属性上限、每级发多少点、下一个该加哪个属性/技能、该选哪个 perk，全部从 `Campaign.Current.Models.CharacterDevelopmentModel` 现取，`HeroDeveloper` 自己不写死常量（唯一的例外是 `GetRequiredFocusPointsToAddFocus` 直接 `return 1`）。

## 怎么用

### 怎么拿到

用 `Hero` 上的属性拿，不要自己构造：

```csharp
Hero hero = Hero.MainHero;
HeroDeveloper developer = hero.HeroDeveloper;
if (developer == null || !developer.IsDeveloperInitialized)
{
    return;
}
```

`IsDeveloperInitialized` 的实现就是 `Hero != null`（`HeroDeveloper.cs:78`），而 `Hero` 是 `{ get; private set; }`（`HeroDeveloper.cs:90`）——你可以读它反查英雄，但不能替换。

### 典型用法

**给技能灌经验（会乘专注倍率、会推总经验、可能升级）：**

```csharp
SkillObject skill = DefaultSkills.OneHanded;
developer.AddSkillXp(skill, 150f);
```

**花未分配专注点：先问再花。** `AddFocus` 自己不校验，`CanAddFocusToSkill` 才校验：

```csharp
if (developer.CanAddFocusToSkill(skill))
{
    developer.AddFocus(skill, 1);
}
```

**花未分配属性点：** `AddAttribute` 返回 `void`，失败时静默不生效，所以要么先看池子，要么接受「可能什么都没发生」：

```csharp
if (developer.UnspentAttributePoints > 0)
{
    developer.AddAttribute(DefaultCharacterAttributes.Vigor, 1);
}
```

**读进度与结果：**

```csharp
int progress = developer.GetSkillXpProgress(skill);   // 距离下一级还差多少（可能为负）
float rate = developer.GetFocusFactor(skill);         // 当前专注/属性下的学习倍率
bool hasPerk = developer.GetPerkValue(DefaultPerks.OneHanded.Duelist);
int total = developer.GetTotalSkillPoints();          // 全部技能值之和
```

### 坑

- **`AddFocus` 不做任何校验。** 它只算「当前专注 + 增量」，写回 `_newFocuses`，然后从 `UnspentFocusPoints` 里扣掉 `GetRequiredFocusPointsToAddFocus(skill)`。点数不够时池子会被扣成负数，技能上限也不检查。**调用前先过 `CanAddFocusToSkill`**（`HeroDeveloper.cs:451`）。
- **`GetRequiredFocusPointsToAddFocus` 恒返回 1**（`HeroDeveloper.cs:457`），它是个占位式实现；不要指望它随技能等级涨价。
- **`AddAttribute` 会静默失败。** 只有「当前值 + 增量 ≤ `MaxAttribute`」且「池子里至少有 1 点（或显式 `checkUnspentPoints: false`）」时才生效，否则直接返回，不给返回值也不报错（`HeroDeveloper.cs:409`）。
- **`ChangeSkillLevel` 不会升级。** 它内部以 `isAffectedByFocusFactor: false` 调 `AddSkillXp`（`HeroDeveloper.cs:208`），因此跳过 `GainRawXp`，总经验与等级都不动。要「加技能顺带升级」，得自己再喂一次 `AddSkillXp`。
- **别绕过入口直接写 `Hero` 的状态。** 直接 `Hero.SetSkillValue` 会漏掉 `OnHeroGainedSkill`；直接写 `Hero.Level` 会漏掉 `OnGainLevel` 发的专注点/属性点与 `OnHeroLevelledUp`。这两个池子本身没有事件，直接写 `UnspentFocusPoints` / `UnspentAttributePoints` 只影响后续 `AddFocus` / `AddAttribute` 的余额判断。
- **`SetSkillXp` 是 `internal`**（`HeroDeveloper.cs:549`），外部程序集不能直接调；它还把「约等于 0」的值从字典里删掉，所以 `_skillXps` 里没有「值为 0 的键」。
- **`AfterLoad` 是迁移代码，不是常规初始化。** 它只在读档且存档版本低于 `v1.2.6` / `v1.3.0` 时补写属性、抬高 `TotalXp`、修负数技能进度（`HeroDeveloper.cs:518`）。新开局不要靠它。

## 关键成员

| 成员 | 签名 | 作用 | 行号 |
| --- | --- | --- | --- |
| `Hero` | `public Hero Hero { get; private set; }` | 反向指回拥有者；`IsDeveloperInitialized` 与 `AfterLoad` 都依赖它 | `HeroDeveloper.cs:90` |
| `IsDeveloperInitialized` | `public bool IsDeveloperInitialized { get; }` | 判定 `Hero` 是否已绑定，实现就是 `Hero != null` | `HeroDeveloper.cs:78` |
| `TotalXp` | `public int TotalXp { get; private set; }` | 驱动 `Hero.Level` 的单值总经验，外部只读 | `HeroDeveloper.cs:95` |
| `UnspentFocusPoints` | `public int UnspentFocusPoints { get; set; }` | 未分配专注点池，带 `[SaveableProperty(101)]`，可写 | `HeroDeveloper.cs:68` |
| `UnspentAttributePoints` | `public int UnspentAttributePoints { get; set; }` | 未分配属性点池，带 `[SaveableProperty(102)]`，可写 | `HeroDeveloper.cs:74` |
| `GetSkillXp` | `public float GetSkillXp(SkillObject skill)` | 读该技能累计经验；`skill` 为 null 时断言并返回 0 | `HeroDeveloper.cs:115` |
| `GetSkillXpProgress` | `public int GetSkillXpProgress(SkillObject skill)` | 当前技能经验减「当前等级所需经验」，即距下一级的进度 | `HeroDeveloper.cs:108` |
| `GetFocusFactor` | `public float GetFocusFactor(SkillObject skill)` | 专注点/属性换算出的学习倍率，取 `CalculateLearningRate(...).ResultNumber` | `HeroDeveloper.cs:272` |
| `AddSkillXp` | `public void AddSkillXp(SkillObject skill, float rawXp, bool isAffectedByFocusFactor = true, bool shouldNotify = true)` | 技能经验主入口：乘倍率与专注系数累加，溢出触发技能升级与事件 | `HeroDeveloper.cs:232` |
| `ChangeSkillLevel` | `public void ChangeSkillLevel(SkillObject skill, int changeAmount, bool shouldNotify = true)` | 按等级差换算经验差再调 `AddSkillXp`（专注因子关），只改技能值 | `HeroDeveloper.cs:208` |
| `SetInitialSkillLevel` | `public void SetInitialSkillLevel(SkillObject skill, int newSkillValue)` | 初始化用：技能值与该等级所需经验一起写死 | `HeroDeveloper.cs:223` |
| `InitializeSkillXp` | `public void InitializeSkillXp(SkillObject skill)` | 把该技能经验对齐到「当前技能值所需经验」 | `HeroDeveloper.cs:511` |
| `GetFocus` | `public int GetFocus(SkillObject skill)` | 读 `_newFocuses` 里该技能投了几点专注 | `HeroDeveloper.cs:469` |
| `AddFocus` | `public void AddFocus(SkillObject skill, int changeAmount, bool checkUnspentFocusPoints = true)` | 加专注并扣 `UnspentFocusPoints`；不校验上限与余额 | `HeroDeveloper.cs:434` |
| `RemoveFocus` | `public void RemoveFocus(SkillObject skill, int changeAmount)` | 减专注点，不把点数退回未分配池 | `HeroDeveloper.cs:444` |
| `CanAddFocusToSkill` | `public bool CanAddFocusToSkill(SkillObject skill)` | 同时判 `MaxFocusPerSkill` 与余额；调 `AddFocus` 前应先过这里 | `HeroDeveloper.cs:451` |
| `GetRequiredFocusPointsToAddFocus` | `public int GetRequiredFocusPointsToAddFocus(SkillObject skill)` | 加一点专注的代价；当前实现恒为 1 | `HeroDeveloper.cs:457` |
| `AddAttribute` | `public void AddAttribute(CharacterAttribute attrib, int changeAmount, bool checkUnspentPoints = true)` | 加属性并扣池；超上限或点数不足时静默不生效 | `HeroDeveloper.cs:409` |
| `RemoveAttribute` | `public void RemoveAttribute(CharacterAttribute attrib, int changeAmount)` | 直接减属性值，不退回未分配点 | `HeroDeveloper.cs:398` |
| `AddPerk` | `public void AddPerk(PerkObject perk)` | 经 `Hero.SetPerkValueInternal` 授予一个 perk | `HeroDeveloper.cs:375` |
| `GetPerkValue` | `public bool GetPerkValue(PerkObject perk)` | 转发到 `Hero.GetPerkValue` | `HeroDeveloper.cs:489` |
| `GetTotalSkillPoints` | `public int GetTotalSkillPoints()` | 把 `Skills.All` 上的技能值求和，用于角色强度类统计 | `HeroDeveloper.cs:197` |
| `GetXpRequiredForLevel` | `public int GetXpRequiredForLevel(int level)` | 转发到 `CharacterDevelopmentModel.SkillsRequiredForLevel` | `HeroDeveloper.cs:392` |
| `CheckLevel` | `public void CheckLevel(bool shouldNotify)` | 循环比较 `TotalXp` 与下一级需求，够就 `Hero.Level++` 并走 `OnGainLevel` | `HeroDeveloper.cs:289` |
| `SetInitialLevel` | `public void SetInitialLevel(int level)` | 把 `TotalXp` 设成该等级需求 + 1 | `HeroDeveloper.cs:315` |
| `ResetTotalXpForPlayerCharacter` | `public void ResetTotalXpForPlayerCharacter()` | 把 `TotalXp` 归零 | `HeroDeveloper.cs:309` |
| `ClearUnspentPoints` | `public void ClearUnspentPoints()` | 两个未分配池同时归零 | `HeroDeveloper.cs:139` |
| `ResetCharacterStats` | `public void ResetCharacterStats()` | 清专注/属性/perk 后重发默认点；技能值与技能经验不动 | `HeroDeveloper.cs:146` |
| `ClearHero` | `public void ClearHero()` | 清空 perk、技能经验、专注、属性、技能、特性并把等级归零 | `HeroDeveloper.cs:156` |
| `InitializeHeroDeveloper` | `public void InitializeHeroDeveloper()` | 由技能反推初始等级、发默认点；非儿童再自动分配 | `HeroDeveloper.cs:170` |
| `DevelopCharacterStats` | `public void DevelopCharacterStats()` | 按模型建议分掉未分配属性点与专注点，再自动选 perk | `HeroDeveloper.cs:183` |
| `AfterLoad` | `public void AfterLoad()` | 读档后的版本迁移（`v1.2.6` / `v1.3.0` 旧档） | `HeroDeveloper.cs:518` |
| `SetSkillXp` | `internal void SetSkillXp(PropertyObject skill, float value)` | 写单个技能经验，0 会从字典移除该项；`internal` 不可外部调用 | `HeroDeveloper.cs:549` |
| `GainRawXp` | `private void GainRawXp(float rawXp, bool shouldNotify)` | 只推总账：`TotalXp` 累加（封顶 `GetMaxSkillPoint()`）并触发 `CheckLevel` | `HeroDeveloper.cs:260` |
| `ChangeSkillLevelFromXpChange` | `private void ChangeSkillLevelFromXpChange(SkillObject skill, int changeAmount, bool shouldNotify = false)` | 技能经验溢出时写技能值并派发 `OnHeroGainedSkill` | `HeroDeveloper.cs:278` |
| `OnGainLevel` | `private void OnGainLevel(bool shouldNotify)` | 升级奖励：加专注点、按 `LevelsPerAttributePoint` 加属性点、派发 `OnHeroLevelledUp` | `HeroDeveloper.cs:381` |
| `SetupDefaultPoints` | `private void SetupDefaultPoints()` | 按当前等级与模型常量重算两个未分配池 | `HeroDeveloper.cs:322` |
| `SetInitialLevelFromSkills` | `private void SetInitialLevelFromSkills()` | 用各技能值的 2.2 次方加权和反推 `TotalXp` | `HeroDeveloper.cs:329` |
| `SetInitialFocusAndAttributePoints` | `private void SetInitialFocusAndAttributePoints()` | 从两个池扣掉已花的属性/专注，并初始化每个技能的经验 | `HeroDeveloper.cs:336` |
| `DistributeUnspentAttributePoints` | `private void DistributeUnspentAttributePoints()` | 循环向模型建议的属性加点，直到池空或无建议 | `HeroDeveloper.cs:355` |
| `DistributeUnspentFocusPoints` | `private void DistributeUnspentFocusPoints()` | 循环向模型建议的技能加专注，直到池空或无建议 | `HeroDeveloper.cs:475` |
| `SelectPerks` | `private void SelectPerks()` | 遍历 `PerkObject.All`，按技能门槛与互斥条件自动选 perk | `HeroDeveloper.cs:495` |
| `ClearFocuses` | `private void ClearFocuses()` | 清空 `_newFocuses` 里的全部专注点 | `HeroDeveloper.cs:428` |
| `ClearHeroLevel` | `private void ClearHeroLevel()` | 把 `Hero.Level` 置 0 | `HeroDeveloper.cs:369` |
| `SetFocus` | `private void SetFocus(SkillObject focus, int newAmount)` | 直接写 `_newFocuses`，不扣点、不校验 | `HeroDeveloper.cs:463` |

存档系统自动生成的一层成员只服务序列化，mod 不需要直接调用：`AutoGeneratedGetMemberValueUnspentFocusPoints`（`HeroDeveloper.cs:29`）、`AutoGeneratedGetMemberValueUnspentAttributePoints`（`HeroDeveloper.cs:35`）、`AutoGeneratedGetMemberValueHero`（`HeroDeveloper.cs:41`）、`AutoGeneratedGetMemberValue_skillXps`（`HeroDeveloper.cs:47`）、`AutoGeneratedGetMemberValue_newFocuses`（`HeroDeveloper.cs:53`）、`AutoGeneratedGetMemberValue_totalXp`（`HeroDeveloper.cs:59`）是 SaveSystem 反射用的取值器；`AutoGeneratedStaticCollectObjectsHeroDeveloper`（`HeroDeveloper.cs:15`）与 `AutoGeneratedInstanceCollectObjects`（`HeroDeveloper.cs:21`）把 `_skillXps`、`_newFocuses`、`Hero` 登记进存档对象图。

## 真实示例

一个每日给英雄练技能的 Behavior，把「加经验 → 花专注点 → 花属性点 → 读结果」四步串起来：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.CharacterDevelopment;
using TaleWorlds.CampaignSystem.Extensions;
using TaleWorlds.Core;

namespace MyMod
{
    public class DailyTrainingBehavior : CampaignBehaviorBase
    {
        public override void RegisterEvents()
        {
            CampaignEvents.DailyTickHeroEvent.AddNonSerializedListener(this, OnDailyTickHero);
        }

        public override void SyncData(IDataStore dataStore)
        {
        }

        private void OnDailyTickHero(Hero hero)
        {
            HeroDeveloper developer = hero.HeroDeveloper;
            if (developer == null || !developer.IsDeveloperInitialized)
            {
                return;
            }

            SkillObject skill = DefaultSkills.OneHanded;

            // 1) 灌经验：默认会乘专注倍率、推 TotalXp、可能触发升级
            developer.AddSkillXp(skill, 150f);

            // 2) 花专注点：AddFocus 自己不校验，必须先过 CanAddFocusToSkill
            if (developer.CanAddFocusToSkill(skill))
            {
                developer.AddFocus(skill, 1);
            }

            // 3) 花属性点：AddAttribute 失败时静默，所以先看余额
            if (developer.UnspentAttributePoints > 0)
            {
                developer.AddAttribute(DefaultCharacterAttributes.Vigor, 1);
            }

            // 4) 读结果
            int progressToNextLevel = developer.GetSkillXpProgress(skill);
            float learningRate = developer.GetFocusFactor(skill);
            bool hasDuelist = developer.GetPerkValue(DefaultPerks.OneHanded.Duelist);
            int totalSkillPoints = developer.GetTotalSkillPoints();
        }
    }
}
```

示例里值得单独点出的三处：`developer.IsDeveloperInitialized` 是判空的正确姿势（`HeroDeveloper.cs:78` 就是 `Hero != null`）；`CanAddFocusToSkill` 之后再 `AddFocus` 是唯一安全的加点顺序（`HeroDeveloper.cs:451` → `HeroDeveloper.cs:434`）；`AddAttribute` 用之前先看 `UnspentAttributePoints`（`HeroDeveloper.cs:74`），因为它失败时没有任何返回值可以检查（`HeroDeveloper.cs:409`）。

如果想只改技能值而不动总经验与等级，用 `ChangeSkillLevel`；想连等级一起推，就留在 `AddSkillXp`：

```csharp
// 只把技能抬 2 级，不升级、不加 TotalXp
developer.ChangeSkillLevel(DefaultSkills.Athletics, 2);

// 补一段经验，让它按正常公式推进总经验与等级
developer.AddSkillXp(DefaultSkills.Athletics, 200f);
```

## 参见

- [`../Hero`](../Hero) —— `HeroDeveloper` 的持有者与反向引用来源；`Hero.HeroDeveloper` 是唯一公开入口，技能值/属性/perk 的实际存储也在这一页。
- [`../CampaignEvents`](../CampaignEvents) —— `OnHeroGainedSkill` / `OnHeroLevelledUp` 的派发方，是技能与等级变化的下游挂点。
- [`../CampaignBehaviorBase`](../CampaignBehaviorBase) —— 本页示例的宿主基类，成长逻辑通常写在它的 `RegisterEvents` 里。
- [`../CharacterObject`](../CharacterObject) —— 技能值同样会被角色模板读取，比较英雄与普通 NPC 时要一起看。
- [`../ExplainedNumber`](../ExplainedNumber) —— `GetFocusFactor` 取的是 `CalculateLearningRate(...)` 返回的 `ExplainedNumber.ResultNumber`。
- [`../../core-extra/SkillObject`](../../core-extra/SkillObject) —— 技能标识对象，`AddSkillXp` / `GetFocus` / `InitializeSkillXp` 都以它为键。
- [`../../campaign-ext/MBObjectManager`](../../campaign-ext/MBObjectManager) —— `Skills.All`、`Attributes.All`、`PerkObject.All` 这类全局表由对象管理器持有。
- [`../_index`](../_index) —— `campaign` 桶全类型索引。

## 导航

- 同桶：[`../Hero`](../Hero) · [`../CampaignEvents`](../CampaignEvents)
- 父索引：[`../_index`](../_index)
