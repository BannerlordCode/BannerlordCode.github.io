---
title: "CharacterObject"
description: "战役里每一个能上场的个体（领主英雄或普通兵种）的统一身份对象，同时充当兵种模板、升级链节点和战力/装备查询入口。"
---
# CharacterObject

**命名空间：** `TaleWorlds.CampaignSystem`
**模块：** `TaleWorlds.CampaignSystem`
**类型：** `public sealed class CharacterObject : BasicCharacterObject, ICharacterData`
**基类：** `BasicCharacterObject`（并实现 `ICharacterData`）
**源文件：** `bannerlord-1.4.7/TaleWorlds.CampaignSystem/CharacterObject.cs`（声明见第 17 行）

## 概述

`CharacterObject` 是战役层的「人」的通用句柄：它同时覆盖两种截然不同的东西——有名有姓的领主（此时它只是 `Hero` 在战斗/名册层面的门面）和成建制的普通兵种（此时它自己就是模板本体，携带职业、文化、装备模板、升级目标与属性）。它位于 `TaleWorlds.CampaignSystem` 的实体层，向下依赖 `BasicCharacterObject` 提供的静态数据与技能表，向上被 `TroopRoster`、`PartyBase`、`MobileParty` 以及战役行为层大量引用；几乎所有「谁的兵、什么兵、能不能升级、战斗力多少」的问题都先落到它身上。

## 心智模型

把它想成一张**二元身份卡**：`IsHero` 为真时它是个薄壳，`Name`、`Culture`、`Equipment`、`Level`、`HitPoints`、`Skill`、`Trait` 这些读写几乎全部转发给 `HeroObject`，你改它等于改那个英雄本人；`IsHero` 为假时它才是自持数据的兵种模板，属性来自 XML 反序列化，`Culture` 和 stealth 装备则从文化 rosters 上取。它**不负责**队伍编制、不负责战斗模拟、也不负责存档序列化以外的生命周期——它只是一份被注册进 `MBObjectManager`、可由 StringId 全局查回的引用对象。状态来源有三处：XML 反序列化、`CreateFrom` 克隆、以及英雄侧对象（`Hero`/`HeroObject`）的实时值；改它的入口因此也只有战役系统自身（`AfterRegister`、`Deserialize`、`CreateFrom`、`InitializeHeroCharacterOnAfterLoad`），mod 侧通常是只读消费。

## 怎么用

拿到实例的常规路径有两条：按 StringId 查注册表，或遍历战役已加载的全部角色。

1. 按 id 取：`CharacterObject.Find("imperial_recruit")` 走 `MBObjectManager`，找不到返回 `null`；批量筛选用 `FindFirst` / `FindAll`，它们只是对 `All` 做线性过滤，`All` 直接返回 `Campaign.Current.Characters`，**战役未启动时这里会抛空引用**（CharacterObject.cs:1062）。
2. 按身份取：`CharacterObject.PlayerCharacter` 实际是 `Game.Current.PlayerTroop as CharacterObject`，主菜单或尚未开局时可能为 `null`，别在 UI 初始化阶段直接解引用（CharacterObject.cs:396）。
3. 升级费用有坑：`GetUpgradeXpCost(party, index)` 会先检查 `index` 是否落在 `UpgradeTargets` 范围内，越界时传 `null` 目标继续算；而 `GetUpgradeGoldCost(party, index)` **不做越界检查**，直接下标访问 `UpgradeTargets[index]`，`index` 越界会抛异常（CharacterObject.cs:630、CharacterObject.cs:641）。
4. stealth 装备会空引用：`StealthEquipments` 只检查 `Culture.DefaultBattleEquipmentRoster != null`，而 `FirstStealthEquipment` 直接对 `Culture.DefaultStealthEquipmentRoster.AllEquipments` 取 `First()`，没有判空，文化缺少 stealth roster 时调用即崩（CharacterObject.cs:201、CharacterObject.cs:247）。
5. 别拿 `GetMountKeySeed` 做确定性外观：非英雄分支返回的是 `MBRandom.NondeterministicRandomInt`，同一兵种每次结果不同；要稳定的脸请用 `GetBodyProperties(equipment, seed)`（CharacterObject.cs:1005、CharacterObject.cs:896）。

## 关键成员

| 成员 | 用途 |
| --- | --- |
| `CharacterObject()` | 无参构造，内部 `Init()` 把职业置为 `NotAssigned`、新建 trait 容器、`Level = 1`、清空限制标记；反序列化/读档时也会走这条初始化。CharacterObject.cs:346 |
| `CreateFrom(CharacterObject, StaticBodyProperties?)` | 经 `MBObjectManager` 新建一个对象，复制来源的职业、persona、traits、装备模板与藏身处标记，并把 `_originCharacter` 指向来源（自身因此不是原件）；用于在不动原模板的前提下派生一个带自定义体格的角色。CharacterObject.cs:368 |
| `ToString()` | 返回 `Name` 的字符串形式，便于日志与调试输出。CharacterObject.cs:97 |
| `AfterRegister()` | 对象注册进 `MBObjectManager` 后的钩子；若 `Equipment` / `FirstCivilianEquipment` 非空则打开 `SyncEquipments`，保证模板装备变化能同步到实例。CharacterObject.cs:425 |
| `Deserialize(MBObjectManager, XmlNode)` | 从 XML 读 `occupation`、`is_template`、`is_hidden_encyclopedia`、`Traits`、`upgrade_targets`、`voice`、`is_basic_troop`、`upgrade_requires`、`level`，并按 `NavalSoldier` trait 推导 `IsMariner`；老字段 `civilianTemplate`/`battleTemplate` 会触发断言。CharacterObject.cs:665 |
| `InitializeHeroCharacterOnAfterLoad()` | 读档后把英雄角色的职业、基础名、升级链、装备模板、persona、traits、默认技能从 `_originCharacter` 补齐并置 `IsReady`；只对派生角色有意义。CharacterObject.cs:647 |
| `GetBodyPropertiesMin(bool returnBaseValue = false)` | 英雄返回其真实 `BodyProperties`（除非要基础值），普通兵种回落到基类模板的最小体格。CharacterObject.cs:468 |
| `GetBodyPropertiesMax(bool returnBaseValue = false)` | 同上，取最大体格。CharacterObject.cs:478 |
| `GetBodyProperties(Equipment, int seed = -1)` | 英雄返回真实体格；普通兵种用 `FaceGen.GetRandomBodyProperties` 按种族/性别/装备发罩/种子生成，`seed = -1` 时用 StringId 的确定性哈希，`seed = -2` 直接返回最小体格。CharacterObject.cs:896 |
| `UpdatePlayerCharacterBodyProperties(BodyProperties, int race, bool isFemale)` | 仅在「当前对象就是玩家角色且是英雄」时生效：写入 `HeroObject` 的静态体格/体重/体型、基类种族与性别，并派发 `OnPlayerBodyPropertiesChanged`；捏脸/换性别的唯一入口。CharacterObject.cs:502 |
| `GetMountKeySeed()` | 给坐骑外观用的种子：英雄返回 `HeroObject.RandomValue`（稳定），普通兵种返回非确定性随机数。CharacterObject.cs:1005 |
| `GetDefaultOccupation()` | 返回 `_occupation` 字段本身（模板默认职业），不像 `Occupation` 属性那样在英雄上转发给 `HeroObject`。CharacterObject.cs:575 |
| `HasThrowingWeapon()` | 遍历全部武器槽，只要有一件 `ItemTypeEnum.Thrown` 就返回真；用于判断能否投掷，会实时读 `Equipment`。CharacterObject.cs:616 |
| `GetUpgradeXpCost(PartyBase, int index)` | 经 `PartyTroopUpgradeModel` 计算升到 `UpgradeTargets[index]` 所需经验；`index` 越界时以 `null` 目标继续计算而不抛错。CharacterObject.cs:630 |
| `GetUpgradeGoldCost(PartyBase, int index)` | 经同一模型计算升级金币（四舍五入），但直接下标访问 `UpgradeTargets[index]`，越界即抛。CharacterObject.cs:641 |
| `GetPower()` | 粗略战力：英雄用 `Level / 4 + 1`、普通兵种用 `Tier`，再按是否英雄/是否骑乘加权。CharacterObject.cs:731 |
| `GetBattlePower()` | 把 `GetPower()` 相对「零阶步行」基线折算出的战斗强度，最低为 1。CharacterObject.cs:737 |
| `GetMoraleResistance()` | 士气抗性：英雄系数 1.5、普通兵种 1.0，再按等级/阶级线性放大。CharacterObject.cs:743 |
| `GetSimulationAttackPower(out float attackPoints, out float defencePoints, Equipment equipment = null)` | 给大地图自动战斗算攻防点数：护甲按总重折算防御，武器按相关技能加权取最大值作攻击，盾牌计入防御，远程武器会额外吃掉一件弹药，坐骑同时加成攻防；`equipment` 传 `null` 时用 `Equipment`。CharacterObject.cs:750 |
| `GetHeadArmorSum(Equipment.EquipmentType = Battle)` | 指定装备类型（Battle/Civilian/Stealth）的头部护甲合计，内部走 `GetEquipmentByType`。CharacterObject.cs:843 |
| `GetBodyArmorSum(Equipment.EquipmentType = Battle)` | 躯干护甲合计。CharacterObject.cs:849 |
| `GetLegArmorSum(Equipment.EquipmentType = Battle)` | 腿部护甲合计。CharacterObject.cs:855 |
| `GetArmArmorSum(Equipment.EquipmentType = Battle)` | 臂部护甲合计。CharacterObject.cs:861 |
| `GetHorseArmorSum(Equipment.EquipmentType = Battle)` | 坐骑马甲合计。CharacterObject.cs:867 |
| `GetTotalArmorSum(Equipment.EquipmentType = Battle)` | 头+躯干+腿+臂四项之和（不含马甲）。CharacterObject.cs:873 |
| `GetFormationClass()` | 按装备推导阵型归类：有马无远程为骑兵、有马有远程为骑射、无马有远程为远程、其余为步兵；非英雄或 `Equipment` 为空时回落基类。CharacterObject.cs:1015 |
| `SetTransferableInPartyScreen(bool)` | 置位/清除「队伍界面不可转移」限制标记，只影响该标记本身，不校验当前是否在队伍里。CharacterObject.cs:928 |
| `SetTransferableInHideouts(bool)` | 置位/清除「不能进藏身处」限制标记。CharacterObject.cs:939 |
| `ClearAttributes()` | 仅在英雄上生效，转发给 `HeroObject.ClearAttributes()`；普通兵种调用是空操作。CharacterObject.cs:960 |
| `GetTraitLevel(TraitObject)` | 英雄转发给 `HeroObject`；普通兵种读自己的 trait 容器，读不到为 0。CharacterObject.cs:969 |
| `GetPerkValue(PerkObject)` | 只有英雄可能为真，普通兵种恒为 `false`。CharacterObject.cs:979 |
| `GetSkillValue(SkillObject)` | 英雄转发给 `HeroObject`；普通兵种回落到基类的模板技能值。CharacterObject.cs:985 |
| `GetPersona()` | 返回反序列化时由 `voice` 属性读出的 persona；为空时兜底返回 `PersonaSoftspoken`，因此永不返回 `null`。CharacterObject.cs:995 |
| `Find(string idString)` | 按 StringId 从 `MBObjectManager` 取角色，找不到返回 `null`。CharacterObject.cs:1043 |
| `FindFirst(Predicate<CharacterObject>)` | 在 `All` 上取第一个满足条件的角色，无匹配返回 `null`。CharacterObject.cs:1049 |
| `FindAll(Predicate<CharacterObject>)` | 在 `All` 上做惰性 `Where` 过滤，返回可枚举序列（注意每次遍历都会重新读 `All`）。CharacterObject.cs:1055 |
| `Name` / `EncyclopediaLink` / `EncyclopediaLinkWithName` / `HiddenInEncyclopedia` | 名称与百科入口：英雄一律转发给 `HeroObject`，普通兵种用模板名并拼 `EncyclopediaManager` 的标识串；`HiddenInEncyclopedia` 可直接改写以隐藏条目。CharacterObject.cs:47、CharacterObject.cs:61、CharacterObject.cs:75、CharacterObject.cs:94 |
| `HeroObject` / `IsHero` / `IsPlayerCharacter` / `IsRegular` | 身份族：`IsHero` 等价于 `_heroObject != null`，`IsRegular` 就是非英雄，`IsPlayerCharacter` 是「等于 `PlayerCharacter`」；`HeroObject` 的 setter 是 internal，只能由系统赋值。CharacterObject.cs:145、CharacterObject.cs:542、CharacterObject.cs:532、CharacterObject.cs:552 |
| `Equipment` / `BattleEquipments` / `CivilianEquipments` / `StealthEquipments` / `FirstBattleEquipment` / `FirstCivilianEquipment` / `FirstStealthEquipment` / `RandomBattleEquipment` / `RandomCivilianEquipment` / `RandomStealthEquipment` | 装备族：英雄全部转发到 `HeroObject` 的对应装备（改它就是改英雄）；普通兵种用模板装备或按 `Culture` 的 roster 随机/取首个，stealth 系列依赖文化 roster 存在。CharacterObject.cs:159、CharacterObject.cs:173、CharacterObject.cs:187、CharacterObject.cs:201、CharacterObject.cs:219、CharacterObject.cs:233、CharacterObject.cs:247、CharacterObject.cs:261、CharacterObject.cs:275、CharacterObject.cs:303 |
| `HitPoints` / `MaxHitPoints()` / `MaxHitPointsExplanation` | 生命值族：英雄读实时血量；普通兵种用 `CharacterStatsModel.MaxHitpoints` 计算并取整，`Explanation` 版本带上加成明细，均要求战役模型可用。CharacterObject.cs:289、CharacterObject.cs:316、CharacterObject.cs:323 |
| `Level` / `Tier` / `Age` | 等级/兵种阶级/年龄：英雄分别转发给 `HeroObject.Level`、`HeroObject.Age`；`Tier` 与普通兵种等级由战役模型计算，`Level` 在普通兵种上读模板值。CharacterObject.cs:333、CharacterObject.cs:951、CharacterObject.cs:582 |
| `IsMariner` / `Culture` | 水手标记与所属文化：`Culture` 在英雄上转发给 `HeroObject.Culture`，setter 为 private，只能在反序列化期赋值。CharacterObject.cs:440、CharacterObject.cs:451 |
| `IsBasicTroop` / `IsTemplate` / `IsChildTemplate` | 模板标记族：`IsBasicTroop` 可写（XML 的 `is_basic_troop`），另两个 setter 为 private，由加载流程设置，mod 侧只读。CharacterObject.cs:518、CharacterObject.cs:523、CharacterObject.cs:528 |
| `Occupation` / `ConformityNeededToRecruitPrisoner` | 职业与招降门槛：前者英雄上转发、普通兵种读 `_occupation`；后者每次访问都调 `PrisonerRecruitmentCalculationModel`，属于计算型属性。CharacterObject.cs:562、CharacterObject.cs:597 |
| `UpgradeTargets` / `UpgradeRequiresItemFromCategory` | 升级链：目标数组默认空数组（不是 `null`），可升级目标与所需物品类别由 XML 的 `upgrade_targets` / `upgrade_requires` 填充，setter 均为 private。CharacterObject.cs:608、CharacterObject.cs:613 |
| `TroopWage` | 军饷：英雄按 `2 + Level * 2` 直接算，普通兵种走 `PartyWageModel.GetCharacterWage`。CharacterObject.cs:915 |
| `IsNotTransferableInPartyScreen` / `IsNotTransferableInHideouts` | 两个限制标记的只读视图，对应 `CharacterRestrictionFlags` 的两个位。CharacterObject.cs:104、CharacterObject.cs:114 |
| `OriginalCharacter` / `IsOriginalCharacter` | 派生溯源：`OriginalCharacter` 为空即表示自己就是原件。CharacterObject.cs:124、CharacterObject.cs:134 |
| `IsMounted` / `IsRanged` | 战场判定：英雄直接看装备槽（坐骑槽非空 / 前四槽有弓弩投石索），普通兵种回落基类模板。CharacterObject.cs:809、CharacterObject.cs:823 |
| `PlayerCharacter` / `OneToOneConversationCharacter` / `ConversationCharacters` | 三个静态快捷入口，分别取玩家角色、当前一对一对话对象、当前全部对话参与者，都依赖已启动的 `Game`/`Campaign`。CharacterObject.cs:396、CharacterObject.cs:406、CharacterObject.cs:416 |
| `All` | 战役已加载的全部角色列表（`Campaign.Current.Characters` 的只读视图），是 `FindFirst` / `FindAll` 的数据源。CharacterObject.cs:1062 |

## 真实示例

```csharp
// 从 StringId 拿一个普通兵种，读取它的升级链与升级成本
CharacterObject recruit = CharacterObject.Find("imperial_recruit");
if (recruit != null && !recruit.IsHero && recruit.UpgradeTargets.Length > 0)
{
    CharacterObject upgrade = recruit.UpgradeTargets[0];
    int xp = recruit.GetUpgradeXpCost(PartyBase.MainParty, 0);
    int gold = recruit.GetUpgradeGoldCost(PartyBase.MainParty, 0);
    string line = recruit.Name.ToString() + " -> " + upgrade.Name.ToString();
    Debug.Print(line + " cost: " + xp + " xp, " + gold + " gold");
}
```

## 参见

- [Hero](../Hero) — 英雄角色的实体本体，`CharacterObject` 在英雄情形下只是它的门面。
- [TroopRoster](../TroopRoster) — 部队编制里存的正是 `CharacterObject` 引用与数量。
- [PartyBase](../PartyBase) — 升级费用计算需要传入的队伍上下文。
- [MBObjectManager](../../campaign-ext/MBObjectManager) — `Find` / `All` 背后的全局注册表与对象生命周期。

## 导航
- ↑ [campaign 桶索引](../)
- ↑ [API 参考](../../)
- ↑ [v1.4.7 中文首页](../../../)
- ↔ [架构总览](../../../architecture/)
