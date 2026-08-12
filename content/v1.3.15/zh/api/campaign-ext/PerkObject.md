---
title: "PerkObject"
description: "Bannerlord 中绑定到某个技能、带解锁等级与互斥替身的特典（perk）数据对象，通过 PerkObject.All 枚举、靠 GetPerkValue 判断角色是否已习得。"
---
# PerkObject

**Namespace:** TaleWorlds.CampaignSystem.CharacterDevelopment
**Module:** TaleWorlds.CampaignSystem
**Type:** `public sealed class PerkObject : PropertyObject`
**Base:** `PropertyObject`（再继承自 `MBObjectBase`）
**File:** `TaleWorlds.CampaignSystem.CharacterDevelopment/PerkObject.cs`

## 概述

`PerkObject` 是 Bannerlord 战役里的一条**特典（perk）数据**：每一个特典都挂在某一个 `SkillObject` 之下，有一个解锁所需的技能等级 `RequiredSkillValue`，以及一个与之互斥、二选一的 `AlternativePerk`。它在 XML（`spc_perks.xml`）里声明，由 `MBObjectManager` 在战役启动时加载进 `Campaign.Current.AllPerks`，然后你通过 `PerkObject.All` 这一静态入口拿到全部已加载的特典。

需要特别理解的一点：特典本身**没有任何“效果方法”**。它只携带“这个特典属于哪个技能、加多少、加成类型是什么、作用在什么兵种上”这些描述性数据。真正的数值加成是由战役模型与 `PerkHelper` 在结算时调用 `character.GetPerkValue(perk)` 判断角色是否已习得，再套用对应的 `PerkEffect` 子类实现的。所以你读 `PerkObject` 时，是在读“一张特典卡片”，而不是在读“一段逻辑”。

## 心智模型

把 `PerkObject` 当作**“技能树上的一个小格子”**：

- 它是**只读数据**。所有属性都是 `get`（私有 setter），只有 `Initialize(...)` 会在 XML 加载阶段被内部调用去填值——模组**不要**自己 `new PerkObject` 也不要调 `Initialize`。
- 它的生命周期跟随战役：`spc_perks.xml` → `MBObjectManager` 加载 → 进入 `Campaign.Current.AllPerks` → 经 `PerkObject.All` 暴露给全局。`Campaign` 在加载时会先把 `IsTrash`（没有名称/描述或没有绑定技能的脏数据）过滤掉，所以你从 `PerkObject.All` 拿到的都是“真特典”。
- 它归属 **Campaign / Character Development** 层，不进入 Mission；进入战斗后特典的加成通过模型/PerkHelper 间接作用于 `Agent` 的结算，而不是由 `PerkObject` 自己驱动。
- 某个角色是否“拥有”这个特典，不是一个字段，而是一个**判定**：`hero.GetPerkValue(perk)` 返回 `bool`。它背后查的是 `HeroDeveloper` 记录的已选特典集合，不是 `PerkObject` 上的状态。

## 如何拿到一个 PerkObject

```csharp
// 1) 枚举全部特典（已过滤掉 IsTrash）
foreach (PerkObject perk in PerkObject.All)
{
    // perk.Skill / perk.RequiredSkillValue / perk.AlternativePerk ...
}

// 2) 通过 DefaultPerks 静态引用直接拿“某一个已知特典”
PerkObject duelist = DefaultPerks.OneHanded.Duelist;
PerkObject bladeMaster = DefaultPerks.TwoHanded.BladeMaster;

// 3) 想找“某技能下的所有特典”：没有 SkillObject.PerkObjects 这种属性，
//    只能遍历 All 并按 Skill 过滤
SkillObject skill = DefaultSkills.Steward;
var perksOfSkill = PerkObject.All.Where(p => p.Skill == skill).ToList();
```

> 注意：不存在 `SkillObject.PerkObjects`。若要根据技能找特典，请遍历 `PerkObject.All` 并用 `perk.Skill == skill` 过滤。

## 主要属性

| 属性 | 类型 | 说明 | 何时关注 |
|------|------|------|----------|
| `All` | `static MBReadOnlyList<PerkObject>` | 全部已加载特典（`Campaign.Current.AllPerks`）。 | 枚举/查找特典时唯一入口。 |
| `Skill` | `SkillObject` | 该特典所属技能。 | 判断特典归属、按技能分组。 |
| `RequiredSkillValue` | `float` | 解锁所需技能等级。 | 判定是否满足解锁条件。 |
| `AlternativePerk` | `PerkObject` | 互斥替身（二选一）。 | 判断两个 perk 是否冲突。 |
| `PrimaryRole` | `PartyRole` | 主加成的作用角色（个人/队长/族长/governor 等）。 | 配合 `PerkHelper` 套用加成。 |
| `SecondaryRole` | `PartyRole` | 次加成的作用角色。 | 同上。 |
| `PrimaryBonus` | `float` | 主加成的数值。 | 阅读特典强度。 |
| `SecondaryBonus` | `float` | 次加成的数值。 | 同上。 |
| `PrimaryIncrementType` | `EffectIncrementType` | 主加成的类型（加值/百分比等）。 | 理解加成如何计算。 |
| `SecondaryIncrementType` | `EffectIncrementType` | 次加成的类型。 | 同上。 |
| `PrimaryTroopUsageMask` | `TroopUsageFlags` | 主加成适用的兵种掩码。 | 队伍/兵种相关加成。 |
| `SecondaryTroopUsageMask` | `TroopUsageFlags` | 次加成适用的兵种掩码。 | 同上。 |
| `PrimaryDescription` | `TextObject` | 主效果描述文本（含已替换的 `{VALUE}`）。 | 向玩家展示说明。 |
| `SecondaryDescription` | `TextObject` | 次效果描述文本。 | 同上。 |
| `IsTrash` | `bool` | 是否为脏数据（缺名称/描述或未绑定技能）。`All` 里不会出现。 | 调试 XML 时排查。 |

## 主要方法

### `public static MBReadOnlyList<PerkObject> All`

静态枚举器，返回战役中全部“有效”特典。底层就是 `Campaign.Current.AllPerks`。它是你查找特典的唯一公开入口；不要在模组里缓存它后再去绕过 `Campaign` 自行维护一份列表。

```csharp
int countUnlockedByMain = 0;
foreach (PerkObject perk in PerkObject.All)
{
    if (Hero.MainHero.GetPerkValue(perk))
        countUnlockedByMain++;
}
```

### `public bool GetPerkValue(PerkObject perk)`（在 `Hero` / `CharacterObject` / `HeroDeveloper` 上）

判断角色**是否已习得**该特典。返回 `bool`，不是等级，也不是 int。对 `CharacterObject`，仅当它是英雄（`IsHero`）时委托给 `HeroObject`；非英雄角色恒返回 `false`。

```csharp
// 正确：bool 判断
bool hasDuelist = Hero.MainHero.GetPerkValue(DefaultPerks.OneHanded.Duelist);
if (hasDuelist)
{
    // 角色已选了这个特典，可走对应分支
}

// 错误示范：GetPerkValue 返回的是 bool，不能当作等级
// int lvl = hero.GetPerkValue(DefaultPerks.OneHanded.Duelist); // 编译/语义都错
```

### `public void Initialize(...)`（内部调用，模组勿用）

XML 加载阶段由 `MBObjectManager` 调用，用来填入名称、技能、需求等级、替身、主/次加成与描述。它的 setter 全是私有的，模组既无法也不应重新初始化一个已加载的特典。要新增特典，请在 `spc_perks.xml`（或模组自己的 XML 补丁）里声明，而不是在代码里 `new` + `Initialize`。

### `public override string ToString()`

返回特典的显示名（`Name`），若名称缺失则回退到 `StringId`。调试日志里直接打印特典时很有用。

```csharp
InformationManager.DisplayMessage(new InformationMessage($"Unlocked: {DefaultPerks.TwoHanded.BladeMaster}"));
```

## 解锁条件到底怎么算

“满足解锁条件”和“已经习得”是两回事，模组经常混淆：

- **满足解锁**：`(float)hero.GetSkillValue(perk.Skill) >= perk.RequiredSkillValue`，且尚未习得本 perk，且（若有替身）替身也未被习得。
- **已经习得**：`hero.GetPerkValue(perk) == true`。

不要仅凭“技能等级够了”就假设角色拥有该特典——他可能还没在升级时选它，或者其 `AlternativePerk` 已经被选了。引擎自己在 `HeroDeveloper.SelectPerks` 里就是这样双重判定的。

```csharp
PerkObject perk = DefaultPerks.Steward.GivingHands;
bool meetsRequirement =
    (float)Hero.MainHero.GetSkillValue(perk.Skill) >= perk.RequiredSkillValue;
bool alreadyTaken = Hero.MainHero.GetPerkValue(perk);

if (meetsRequirement && !alreadyTaken)
{
    // 该特典可被角色在下次升级时选择；但此刻并不一定已经被选
}
```

## 典型用法示例

### 示例 1：查询某角色是否已习得一组特典

```csharp
using TaleWorlds.CampaignSystem.CharacterDevelopment;

Hero hero = Hero.MainHero;

// 用一个已知特典直接判定
if (hero.GetPerkValue(DefaultPerks.OneHanded.Duelist))
{
    // 主角点了“决斗者”
}

// 遍历某技能下所有特典，统计主角已选的数量
SkillObject steward = DefaultSkills.Steward;
int taken = 0;
foreach (PerkObject p in PerkObject.All.Where(x => x.Skill == steward))
{
    if (hero.GetPerkValue(p))
        taken++;
}
```

### 示例 2：在结算里应用特典加成（交给 PerkHelper，不要自己读字段）

```csharp
using TaleWorlds.CampaignSystem.CharacterDevelopment;
using TaleWorlds.CampaignSystem.Helpers;

// 计算某角色带兵时的士气加成时，让 PerkHelper 去判定并套用
ExplainedNumber morale = new ExplainedNumber();
PerkHelper.AddPerkBonusForCharacter(
    DefaultPerks.Leadership.AlphaLeadership,
    character,
    isPrimaryBonus: true,
    ref morale);
// PerkHelper 内部会调用 character.GetPerkValue(perk)，
// 只有角色真正习得了该 perk 才会把 PrimaryBonus 加进去。
```

## 依赖图

- 上游类型：[MBObjectManager](../MBObjectManager/) 在战役启动时把所有 `PerkObject` 从 `spc_perks.xml` 加载进 `Campaign.Current.AllPerks`；其根基类是 [MBObjectBase](../MBObjectBase/)。
- 关联数据：[SkillObject](../../core-extra/SkillObject/) 决定每个特典的归属与解锁技能；[CharacterObject](../../campaign/CharacterObject/) 及其 `Hero` 持有“是否已习得”的判定（`GetPerkValue`）。
- 下游系统：特典数值由战役模型与 [PerkHelper](../PerkHelper/) 在结算（属性、带兵、城镇、船长加成等）时读取 `GetPerkValue` 并套用；选择/重置由 [PerkResetCampaignBehavior](../PerkResetCampaignBehavior/) 等驱动。
- 同桶相关：[DefaultPerks](../DefaultPerks/)（所有内置特典的静态引用）、[PerkAlternativeType](../PerkAlternativeType/)（替身关系枚举）。

## 风险与注意

- **不要 `new PerkObject` / 调 `Initialize`**：特典由 XML + `MBObjectManager` 统一加载，手动构造的实例不会被 `Campaign.Current.AllPerks` 收录，也不会参与任何结算。
- **`GetPerkValue` 返回 `bool`，不是等级**：把它赋给 `int` 是语义错误；想看“技能等级”要用 `hero.GetSkillValue(perk.Skill)`。
- **别假设“等级够了 = 已习得”**：解锁条件满足只代表“可以选”，不代表“已经选”。二者必须分别判定。
- **`SkillObject.PerkObjects` 不存在**：按技能找特典只能遍历 `PerkObject.All` 再 `perk.Skill == skill` 过滤。
- **存档相关**：已习得的特典随 `Hero` 存档；`spc_perks.xml` 中被改动/删除的特典 id 可能造成旧存档里指向它的引用失效，升级或读档时要对 `GetPerkValue` 的结果保持防御性判断。
- **`IsTrash` 已被 Campaign 过滤**：`PerkObject.All` 不会包含 `IsTrash == true` 的脏数据；但如果你直接读 `MBObjectManager.Instance.GetObjectTypeList<PerkObject>()`，则会拿到未过滤的全集，需要自己排除。

## 跨版本提示

- v1.3.0：公开 API 与 1.4.5 基本一致（`All` / 各属性 / `Initialize` / `ToString` 形态相同）。内部差异：`Initialize` 在 1.3.0 用 `PerkHelper.SetDescriptionTextVariable` 写入 `{VALUE}` 文本变量，1.3.15/1.4.5 改用 `StringHelpers.SetEffectIncrementTypeTextVariable`；对模组透明。
- v1.3.15 / v1.4.5：`IsTrash` 的 null 判定顺序做了细微重构，但“名称/描述缺失或未绑定技能即为 trash”的语义不变。
- 写跨版本 mod 时，统一通过 `PerkObject.All` 与 `DefaultPerks.*` 访问，不要依赖任何内部字段。

## 导航

- ↑ 父级（本桶索引）：[campaign-ext](../)
- ↔ 同级（campaign-ext 桶）：[PerkHelper](../PerkHelper/)、[PerkResetCampaignBehavior](../PerkResetCampaignBehavior/)、[PerkAlternativeType](../PerkAlternativeType/)、[DefaultPerks](../DefaultPerks/)、[PolicyObject](../PolicyObject/)
- 相关类：[SkillObject](../../core-extra/SkillObject/)（特典归属技能）、[CharacterObject](../../campaign/CharacterObject/)（习得判定）、[MBObjectManager](../MBObjectManager/)（加载入口）、[MBObjectBase](../MBObjectBase/)（根基类）
