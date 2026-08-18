---
title: "PerkObject"
description: "战役角色成长里的“专长”数据卡：每个 PerkObject 描述一条专长的归属技能、解锁门槛、主/副效果（角色与加成类型）、互斥替代项，以及它作用在部队的哪种用途上。它是只读数据对象，英雄是否拥有某专长由 Hero.HeroDeveloper 记录，而非改这张卡本身。"
---
# PerkObject

**命名空间：** TaleWorlds.CampaignSystem.CharacterDevelopment  
**模块：** TaleWorlds.CampaignSystem  
**类型：** `public sealed class PerkObject : PropertyObject`  
**基类：** `PropertyObject`（`MBObjectBase` 的子类）  
**源文件：** `TaleWorlds.CampaignSystem/CharacterDevelopment/PerkObject.cs`

## 概述

`PerkObject` 是 Bannerlord 战役层里**“一条专长（perk）的数据定义”**：游戏 XML 中定义的每个专长——比如双手武器的「Fluid Strikes」、骑术的「Mounted Warrior」——都对应一个 `PerkObject`，它装着这条专长归属于哪个[技能](../../core-extra/SkillObject/)（`Skill`）、解锁需要多少技能值（`RequiredSkillValue`）、它的主/副效果分别加在什么上（`PrimaryRole` / `PrimaryBonus` / `PrimaryIncrementType`）、与哪条专长是二选一的互斥关系（`AlternativePerk`），以及它的效果只作用于哪类部队（`PrimaryTroopUsageMask`）。`PerkObject` 自身**只是一张只读定义卡**，英雄“有没有点出这条专长”并不存在这张卡里，而是记在英雄自己的 `Hero.HeroDeveloper` 状态中。

## 心智模型

把 `PerkObject` 想成**“专长树里的一张静态标签”**，而不是英雄身上会被改的状态：

- 它和 `SkillObject`、`TraitObject` 一样，是 `PropertyObject`（`MBObjectBase`）的子类，由 `MBObjectManager` 在模组加载时从 XML 注册进 `Campaign.Current.AllPerks`。你几乎永远**不要 `new PerkObject()`**——构造器只接受 `stringId` 并初始化基类，真正的字段要在 `Initialize(...)` 里由反序列化流程填，且所有字段都是 `private set`，运行期不可写。
- **英雄的专长状态是布尔的、独立的**：`PerkObject` 没有“等级”概念，一条专长要么被英雄拥有、要么没有。授予走 `Hero.HeroDeveloper.AddPerk(perk)`（内部 `Hero.SetPerkValueInternal(perk, true)`），查询走 `Hero.GetPerkValue(perk)`。引擎在英雄升级、技能值达到 `RequiredSkillValue` 时，才在专长选择界面把这条 perk 解锁为可选。
- **什么时候用**：读某条专长的归属技能/门槛/效果，遍历全部专长做校验或筛选（如找所有“总督”角色专精），判定 `AlternativePerk` 互斥关系，给英雄加/查专长。
- **什么时候不要用 / 危险**：把它当成可变状态去改 `Skill`、`RequiredSkillValue` 等字段（它们是 `private set`，且共享单例，改了会影响所有英雄）；用 `GetPerkValue` 去问一张普通兵种卡（`CharacterObject.GetPerkValue` 对非英雄恒为 `false`）；或在战役加载完成前访问 `PerkObject.All`（它来自 `Campaign.Current.AllPerks`，会为 `null`）。

## 何时使用 / 何时不要使用

- **应**：通过 `DefaultPerks` 静态分组或 `PerkObject.All` 按 `Skill` / `PrimaryRole` / `TroopUsageMask` 筛选专长；用 `Hero.HeroDeveloper.AddPerk` 与 `Hero.GetPerkValue` 读写英雄的专长状态。
- **不应**：`new PerkObject(...)` 或运行时改其字段——它是只读 XML 数据；直接改 `Hero` 上的 `_heroPerks`（请用 `HeroDeveloper` 公开方法，内部 `SetPerkValueInternal` 还会发 `OnPerkOpened` / `OnPerkReset` 事件）；把 `IsTrash == true` 的残缺专长当成可用专长去展示或授予。

## 依赖图

- 上游：[MBObjectManager](../../campaign-ext/MBObjectManager/) 在加载时按 XML 注册全部 `PerkObject` 进 `Campaign.Current.AllPerks`；[PropertyObject](../../core-extra/PropertyObject/) 提供 `Name` / `StringId` / `Description` 等基础字段；每条专长绑定一个 [SkillObject](../../core-extra/SkillObject/)，[DefaultPerks](../DefaultPerks/) 按技能把知名专长分组为静态引用。
- 下游：[Hero](../Hero/) 经 [HeroDeveloper](../../campaign-ext/HeroDeveloper/) 持有“拥有哪些专长”的位状态；[PerkHelper](../../campaign-ext/PerkHelper/) 遍历 `PerkObject.All` 做总督/角色专精汇总与按技能清专长；[CharacterObject](../CharacterObject/) 提供 `GetPerkValue` 取英雄卡的专长。
- 相关类型：[PartyRole](../PartyRole/) 表示主/副效果对应的队伍职位；[TroopUsageFlags](../../core-extra/TroopUsageFlags/) 与 [EffectIncrementType](../../core-extra/EffectIncrementType/) 描述效果作用范围与加成方式。

## 风险

- **它是共享只读单例**：`PerkObject.All` 里的每条专长都是 XML 注册的同一份对象，所有英雄共享。任何对 `Skill`、`RequiredSkillValue`、`PrimaryBonus` 等字段的写入（即便绕过 `private set`）都会污染全局定义。改英雄的专长状态只能走 `HeroDeveloper.AddPerk` / `Hero.GetPerkValue`。
- **`IsTrash` 的残缺专长**：当 `Name` 或 `Description` 为 `null`，或 `Skill == null` 时，`IsTrash` 返回 `true`，代表一条没定义完整的“垃圾”专长。在遍历 `PerkObject.All` 做 UI 展示或授予逻辑时务必跳过，否则可能拿到空 `Skill` 或空描述文本。
- **`AlternativePerk` 的互斥是双向的**：`Initialize` 里若传入 `alternativePerk`，会把它反向的 `AlternativePerk` 也指向自己。因此二选一关系在两条卡上各存一份；展示“替代项”时要避免重复或环形遍历。
- **非英雄的 `GetPerkValue` 恒为 `false`**：`CharacterObject.GetPerkValue(perk)` 只对英雄卡委托 `HeroObject`，普通兵种卡永远返回 `false`。通用逻辑里先判 `IsHero`。
- **战役未加载时 `All` 为 `null`**：`PerkObject.All` 直接转发 `Campaign.Current.AllPerks`，在 `Campaign.Current` 尚不存在的早期（如主菜单、Mission 层）访问会空引用。

## 成员说明

### 静态入口

#### `public static MBReadOnlyList<PerkObject> All`
战役中所有已注册专长的只读列表，转发自 `Campaign.Current.AllPerks`。这是遍历全部专长（如 `PerkHelper` 汇总总督专精、按技能批量清专长）的唯一入口；战役加载前为 `null`。

### 关键属性（均为 `private set`，只读数据）

| 属性 | 类型 | 真正表示什么 |
|------|------|--------------|
| `Skill` | `SkillObject` | 这条专长所属的技能。专长的“解锁候选”只在英雄该技能达到 `RequiredSkillValue` 时才出现；`PerkHelper.ClearPerksForSkill` 正是按 `item.Skill == skill` 过滤。`IsTrash` 会在 `Skill == null` 时为真。 |
| `RequiredSkillValue` | `float` | 解锁这条专长所需的技能值门槛。英雄在该技能练到该值后，才能在升级界面把它选为可用专长。 |
| `AlternativePerk` | `PerkObject` | 与本条二选一的互斥专长。在 `Initialize` 中被设为双向引用；两者只能拥有其一。 |
| `PrimaryRole` / `SecondaryRole` | `PartyRole` | 这条专长的主/副效果分别挂在哪个队伍职位上（如 `Governor` / `Scout` / `Quartermaster` / `Engineer` / `Surgeon`）。`PerkHelper.GetGovernorPerksForHero` 即按 `PrimaryRole == PartyRole.Governor` 筛选。 |
| `PrimaryBonus` / `SecondaryBonus` | `float` | 主/副效果的加成数值（配合 `PrimaryIncrementType` 解释“加多少”）。 |
| `PrimaryIncrementType` / `SecondaryIncrementType` | `EffectIncrementType` | 主/副加成的计算方式（如直接加值、乘系数等）。`SecondaryIncrementType` 若传 `Invalid` 会自动退化为 `PrimaryIncrementType`。 |
| `PrimaryTroopUsageMask` / `SecondaryTroopUsageMask` | `TroopUsageFlags` | 主/副效果只对哪些兵种用途生效（如步兵、骑兵、弓兵），用于把专长加成限定到对应部队类别。 |
| `PrimaryDescription` / `SecondaryDescription` | `TextObject` | 主/副效果的描述文本。在 `Initialize` 里由原始字符串建成 `TextObject`，并把 `VALUE` 文本变量替换为带单位/百分号的加成说明。 |
| `IsTrash` | `bool` | 这条专长是否“残缺不可用”：`Name` 或 `Description` 为 `null`，或 `Skill == null` 时为真。遍历/展示时应跳过。 |

### 方法

#### `public void Initialize(string name, SkillObject skill, int requiredSkillValue, PerkObject alternativePerk, string primaryDescription, PartyRole primaryRole, float primaryBonus, EffectIncrementType incrementType, string secondaryDescription = "", PartyRole secondaryRole = PartyRole.None, float secondaryBonus = 0f, EffectIncrementType secondaryIncrementType = EffectIncrementType.Invalid, TroopUsageFlags primaryTroopUsageMask = TroopUsageFlags.Undefined, TroopUsageFlags secondaryTroopUsageMask = TroopUsageFlags.Undefined)`
XML 反序列化时由引擎调用，填充本条专长的全部字段：构建主/副描述 `TextObject` 并写入 `VALUE` 变量、绑定 `Skill` / `RequiredSkillValue` / `AlternativePerk`（并设置反向引用）、设置角色与加成、最后触发 `AfterInitialized()`。mod 一般**不应**手动调用它——专长数据应在 XML 中定义、由 `MBObjectManager` 注册。

```csharp
// 引擎内部（反序列化）如何初始化一条专长（示意，mod 勿手动调用）
PerkObject perk = MBObjectManager.Instance.CreateObject<PerkObject>("fluid_strikes");
perk.Initialize(
    "Fluid Strikes",
    DefaultSkills.TwoHanded,
    75,
    alternativePerk: DefaultPerks.TwoHanded.KnockDown,
    primaryDescription: "{=*}+{VALUE} chance to knock down on hit",
    primaryRole: PartyRole.None,
    primaryBonus: 0.1f,
    incrementType: EffectIncrementType.Add);
```

#### `public override string ToString()`
返回 `Name ?? StringId`，便于日志/调试里识别这条专长（优先显示本地化名称，没有则退回到注册 id）。

## 示例

### 示例 1：给英雄授予一条专长并查询

```csharp
// 授予：内部置 Hero 的 perk 位为 true，并触发 OnPerkOpened 事件
Hero.MainHero.HeroDeveloper.AddPerk(DefaultPerks.TwoHanded.FluidStrikes);

// 查询：返回该英雄是否拥有这条专长（布尔，无等级概念）
bool hasFluidStrikes = Hero.MainHero.GetPerkValue(DefaultPerks.TwoHanded.FluidStrikes);
```

### 示例 2：遍历全部专长，按技能与队伍角色筛选

```csharp
// PerkHelper 内部即如此汇总“总督”类专长
List<PerkObject> governorPerks = new List<PerkObject>();
foreach (PerkObject perk in PerkObject.All)
{
    if (perk.IsTrash)
    {
        continue; // 跳过残缺定义
    }
    if ((perk.PrimaryRole == PartyRole.Governor || perk.SecondaryRole == PartyRole.Governor)
        && Hero.MainHero.GetPerkValue(perk))
    {
        governorPerks.Add(perk);
    }
}
```

### 示例 3：从角色卡查英雄的专长（注意非英雄恒为 false）

```csharp
CharacterObject heroCharacter = Hero.MainHero.CharacterObject;
if (heroCharacter.IsHero)
{
    bool mountedWarrior = heroCharacter.GetPerkValue(DefaultPerks.Riding.MountedWarrior);
}
```

## 风险与崩溃边界（补充）

- 授予专长请走 `HeroDeveloper.AddPerk` 而非直接碰 `Hero.SetPerkValueInternal`——后者为 `internal`，且只有经公开方法才能保证 `OnPerkOpened` / `OnPerkReset` 事件被正确派发，依赖这些事件的 Behavior 才能正常工作。
- `AddPerk` 只把专长位设为 `true`，**没有等级参数**。若你的逻辑需要“按等级叠加”，那属于 `SkillObject` 的技能值或 `Attribute` 体系，而非 `PerkObject`。
- 清某技能全部专长用 `PerkHelper.ClearPerksForSkill(hero, skill)`（例如洗点时），它会遍历 `PerkObject.All` 把该技能下已拥有的专长位复位，并回滚部分专长的属性/专注点副作用。

## 存档与序列化

英雄的专长位（布尔状态）随 `Hero` 一起序列化进存档；`PerkObject` 定义本身是只读 XML 数据，不被改写，存档里只按 `StringId` 引用。跨 Game 生命周期不要缓存 `PerkObject` 实例引用，应始终通过 `DefaultPerks` 或 `PerkObject.All` 重新取。

## 参见

- [Hero](../Hero/) — 英雄实例，经 `HeroDeveloper` 持有“拥有哪些专长”的状态
- [HeroDeveloper](../../campaign-ext/HeroDeveloper/) — `AddPerk` / 专注点 / 属性点的真实写入入口
- [SkillObject](../../core-extra/SkillObject/) — 每条专长归属的技能与解锁门槛来源
- [DefaultPerks](../DefaultPerks/) — 按技能分组的知名专长静态引用（如 `DefaultPerks.TwoHanded.FluidStrikes`）
- [PerkHelper](../../campaign-ext/PerkHelper/) — 遍历 `PerkObject.All` 做总督专精汇总、按技能清专长
- [CharacterObject](../CharacterObject/) — `GetPerkValue` 取英雄卡的专长（非英雄恒 false）
- [PartyRole](../PartyRole/) — 专长主/副效果对应的队伍职位
- [TroopUsageFlags](../../core-extra/TroopUsageFlags/) — 专长效果作用的兵种用途
- [EffectIncrementType](../../core-extra/EffectIncrementType/) — 加成计算方式
- [MBObjectManager](../../campaign-ext/MBObjectManager/) — 注册全部 `PerkObject` 的加载入口
- [战役 API 索引](../)
