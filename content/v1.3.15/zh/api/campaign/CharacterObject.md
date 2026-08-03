---
title: "CharacterObject"
description: "战役世界里“人物模板”的数据载体：技能、装备槽、身体属性、文化、职业与升级树。它是英雄(Hero)与所有兵种/NPC 共享的只读型数据，理清它与 Hero 的区别是避免 mutating 共享模板崩溃的关键。"
---
# CharacterObject

**Namespace:** TaleWorlds.CampaignSystem  
**Module:** TaleWorlds.CampaignSystem  
**Type:** `public sealed class CharacterObject : BasicCharacterObject, ICharacterData`  
**Base:** `BasicCharacterObject`  
**File:** `TaleWorlds.CampaignSystem/CharacterObject.cs`

## 概述

`CharacterObject` 是 Bannerlord 战役层里**“一张人物模板/数据卡”**：它装着生成一名角色所需的全部静态数据——技能值、装备槽(`Equipment`)、体型属性(`BodyProperties`)、文化(`CultureObject`)、职业(`Occupation`)、年龄、特性(`TraitObject`)、可升级目标(`UpgradeTargets`)等。它通常是**被大量实例共享的单例**：游戏 XML 里定义的每个兵种（如帝国步兵 `imperial_infantry`）、每个英雄的出身模板都对应一个 `CharacterObject`，所有用到该兵种的部队、商队、村庄 militia 都引用同一个对象。

它和 `Hero` 是新手最容易混淆的一对：

- `CharacterObject` = **模板/数据**：回答“这个角色会什么技能、穿什么装备、属于哪族”。
- `Hero` = **战役世界里的具体角色实例**：玩家、领主、同伴，有自己的金钱、家族、所在部队、生死状态，以及一条 `CharacterObject` 引用。

两者通过一条双向指针绑定：`Hero.CharacterObject` 拿到英雄背后的人物卡；而该人物卡上的 `HeroObject` 反向指回英雄。当一张 `CharacterObject` 的 `_heroObject` 不为空时，`IsHero` 为 `true`（它就是某个英雄的化身）；否则 `IsRegular` 为 `true`（它是普通兵种/ NPC 的共享模板）。正因为模板是共享的，**直接修改一张兵种模板的装备或技能会同时影响所有引用它的实体**——这就是本页反复强调“先克隆再改”的原因。

## 心智模型

把 `CharacterObject` 想成**“从 XML/出厂数据里来的蓝图”**，而不是可操作的运行时个体：

- 它是 `MBObjectBase` 的子类（经 `BasicCharacterObject`），由 `MBObjectManager` 在模组加载时从 XML 注册进 `Campaign.Current.Characters`。你几乎永远**不要 `new CharacterObject()`** 自己造一张（构造器只做字段初始化，不含任何 XML 数据），应走 `Find`/`CreateFrom` 或自然引用。
- **英雄的人物卡是克隆出来的**：`HeroCreator` 在生成英雄时若 `useCharacterAsTemplate == true`，会先 `CharacterObject.CreateFrom(template)` 浅克隆一张专属副本，再把 `HeroObject` 指回新英雄（`Hero.SetCharacterObject` 内部 `_characterObject.HeroObject = this;`）。所以英雄的卡是“独享”的；而普通兵种卡是“共享”的。
- **何时用**：读技能/装备/体格、按文化或职业筛选兵种、计算升级花费与战力、给部队加人、构建战斗模拟。
- **何时不用 / 危险**：当你拿到的是一张**共享兵种模板**（如 `Clan.BasicTroop`、`CultureObject.BasicTroop`）并想改它的装备或技能时，**必须先 `CreateFrom` 克隆**，否则改动会污染所有用到该模板的实体。要拿到“某英雄当前实际穿戴”，应通过 `Hero` 而不是改 `CharacterObject.Equipment`。

## 如何获取 CharacterObject

```csharp
// 1) 从一个 Hero 反查它背后的人物模板（最常见）
CharacterObject mainTemplate = Hero.MainHero.CharacterObject;

// 2) 遍历战役中所有已注册的 CharacterObject（含兵种与英雄卡）
foreach (CharacterObject character in CharacterObject.All)
{
    if (character.IsRegular && character.Culture == Hero.MainHero.Culture)
    {
        // 这是一支普通兵种模板，可以按文化筛选
    }
}

// 3) 按 stringId 精确查找（id 即 XML 中的定义，如 "imperial_infantry"）
CharacterObject imperialInfantry = CharacterObject.Find("imperial_infantry");
if (imperialInfantry != null)
{
    // 注意：Find 返回的是共享模板，不要直接改它
}

// 4) 按条件查找第一个 / 全部匹配
CharacterObject firstElite = CharacterObject.FindFirst(c => c.Tier >= 5 && c.IsRegular);
foreach (CharacterObject cav in CharacterObject.FindAll(c => c.IsMounted && c.IsRegular))
{
    // 遍历所有骑兵兵种
}

// 5) 通过文化 / 家族拿到“基础兵种”入口（注意 BasicTroop 在 Clan / CultureObject 上，不在 CharacterObject 上）
CharacterObject starterTroop = Clan.PlayerClan.BasicTroop;          // 玩家家族基础兵
CharacterObject cultureTroop = starterTroop.Culture.BasicTroop;     // 同一文化的基础兵

// 6) 对话 / 当前玩家角色快捷入口
CharacterObject talkTarget = CharacterObject.OneToOneConversationCharacter;
CharacterObject playerTroop = CharacterObject.PlayerCharacter;     // 等价于 Hero.MainHero.CharacterObject
```

`All` 的实现是 `Campaign.Current.Characters`（一个 `MBReadOnlyList<CharacterObject>`），`Find` 走 `MBObjectManager.Instance.GetObject<CharacterObject>(idString)`，因此 `Find` 找不到时返回 `null`，调用前务必判空。

## 主要属性

| 属性 | 类型 | 说明 |
|------|------|------|
| `HeroObject` | `Hero` | 若该卡属于某英雄，反向指回该 `Hero`；兵种模板为 `null`。**这是区分英雄卡与普通兵种卡的根本**。setter 为 `internal`，只能由 `Hero` 内部赋值。 |
| `IsHero` | `bool` | `_heroObject != null`。英雄卡为 `true`。 |
| `IsRegular` | `bool` | `_heroObject == null`。普通兵种/NPC 模板为 `true`，与 `IsHero` 互斥。 |
| `IsTemplate` | `bool` | 由 XML `is_template` 标记，仅 `private set`。英雄卡多来自模板克隆，本身通常不是模板。 |
| `IsOriginalCharacter` | `bool` | `_originCharacter == null`。英雄卡经 `CreateFrom` 克隆后，`OriginalCharacter` 指向源模板，故 `IsOriginalCharacter` 为 `false`；源模板自身为 `true`。 |
| `OriginalCharacter` | `CharacterObject` | 该卡被克隆出来的源模板（即 `Hero.Template`）。改英雄卡不会回写到它。 |
| `Culture` | `CultureObject` | 隐藏为 `new`：英雄卡返回 `HeroObject.Culture`，否则返回基类 `Culture`。决定兵种外观、语音、基础装备名册。 |
| `Occupation` | `Occupation` | 职业（Soldier/Mercenary/Bandit/Lord…）。英雄卡读 `HeroObject.Occupation`；兵种卡读内部 `_occupation`（XML `occupation` 字段）。 |
| `Age` | `float` | 英雄卡返回 `HeroObject.Age`，否则返回模板基础年龄（`base.Age`）。 |
| `IsFemale` | `bool` | 英雄卡读 `HeroObject.IsFemale`；兵种卡读模板。 |
| `Level` | `int` | 英雄卡返回 `HeroObject.Level`（英雄等级）；兵种卡返回模板等级（XML `level`，默认 1）。影响 `TroopWage` 与战力。 |
| `Equipment` | `Equipment` | **英雄卡**返回 `HeroObject.BattleEquipment`（英雄当前战斗装备）；**兵种卡**返回模板自身战斗装备。`AfterRegister` 时此装备会被标记 `SyncEquipments = true`。 |
| `BattleEquipments` / `CivilianEquipments` / `StealthEquipments` | `IEnumerable<Equipment>` | 三类装备名册。英雄卡只返回其对应单套装备；兵种卡返回模板名册（潜行装来自 `Culture.DefaultStealthEquipmentRoster`）。 |
| `FirstBattleEquipment` / `FirstCivilianEquipment` / `FirstStealthEquipment` | `Equipment` | 各名册里的第一套装备；多数兵种只有这一套，是改装备时最常碰的对象。 |
| `RandomBattleEquipment` / `RandomCivilianEquipment` / `RandomStealthEquipment` | `Equipment` | 名册里随机抽一套（潜行装用 `GetRandomElement`）。 |
| `HitPoints` | `int` | 英雄卡返回 `HeroObject.HitPoints`（实际当前血量）；兵种卡返回 `MaxHitPoints()`。 |
| `MaxHitPointsExplanation` | `ExplainedNumber` | 经 `CharacterStatsModel.MaxHitpoints(this, includeDescriptions: true)` 算出的血量明细（含各项加成说明）。 |
| `IsMounted` | `bool` | 英雄卡看 `Equipment[10].Item`（坐骑槽）是否非空；兵种卡读基类。 |
| `IsRanged` | `bool` | 英雄卡检查前 4 个武器槽是否含弓/弩/投石；兵种卡读基类。 |
| `IsBasicTroop` | `bool` | 是否“基础兵种”（XML `is_basic_troop`）。常作为升级树的叶子节点。`Clan.BasicTroop` 即取此标记的角色。 |
| `IsChildTemplate` | `bool` | 是否儿童模板（`private set`）。 |
| `IsMariner` | `bool` | 是否水手，由 `GetTraitLevel(DefaultTraits.NavalSoldier) != 0` 在 `Deserialize` 时判定。 |
| `TroopWage` | `int` | 雇佣工资。英雄卡为 `2 + Level * 2`；兵种卡由 `PartyWageModel.GetCharacterWage(this)` 计算。 |
| `Tier` | `int` | 兵种阶位，`CharacterStatsModel.GetTier(this)`。 |
| `UpgradeTargets` | `CharacterObject[]` | 升级去向（XML `upgrade_targets`）。`Hero` 在重新编组时据此升级部队成员。 |
| `UpgradeRequiresItemFromCategory` | `ItemCategory` | 升级所需物品类别（XML `upgrade_requires`）。 |
| `ConformityNeededToRecruitPrisoner` | `int` | 招募该俘虏所需“顺从度”，由 `PrisonerRecruitmentCalculationModel` 计算。 |
| `HiddenInEncyclopedia` | `bool` | 是否在百科中隐藏（可写）。 |
| `IsNotTransferableInPartyScreen` / `IsNotTransferableInHideouts` | `bool` | 是否禁止在部队界面 / 潜入据点中转移（由 `_characterRestrictionFlags` 位标记决定）。 |
| `PlayerCharacter` | `CharacterObject`（static） | `Game.Current.PlayerTroop as CharacterObject`，即玩家英雄的人物卡。 |
| `OneToOneConversationCharacter` / `ConversationCharacters` | `CharacterObject`（static） | 当前一对一对话角色 / 当前对话涉及的所有角色，来自 `ConversationManager`。 |
| `All` | `MBReadOnlyList<CharacterObject>`（static） | 战役中所有已注册的人物卡。 |

## 主要方法

### 查询与遍历

#### `public static CharacterObject Find(string idString)`
按 `stringId` 从 `MBObjectManager` 取唯一人物卡；不存在返回 `null`。

```csharp
CharacterObject looter = CharacterObject.Find("looter");
if (looter != null && looter.Tier <= 1)
{
    // 低级野怪，适合做早期练级目标
}
```

#### `public static CharacterObject FindFirst(Predicate<CharacterObject> predicate)`
返回 `All` 中第一个满足条件的卡，底层是 `All.FirstOrDefault(...)`。

```csharp
CharacterObject eliteCav = CharacterObject.FindFirst(c => c.IsMounted && c.Tier >= 4);
```

#### `public static IEnumerable<CharacterObject> FindAll(Predicate<CharacterObject> predicate)`
返回 `All` 中所有满足条件的卡（延迟求值，`All.Where(...)`）。

```csharp
var banditTroops = CharacterObject.FindAll(c => c.Occupation == Occupation.Bandit && c.IsRegular);
```

#### `public static CharacterObject CreateFrom(CharacterObject character, StaticBodyProperties? staticBodyProperties = null)`
**克隆一张独立副本**：新建一个 `CharacterObject`，拷贝 `_originCharacter`（源或源之源）、`_occupation`、`_persona`、`_characterTraits`、`_isMariner`、装备模板等，并 `FillFrom(character)` 复制装备。若源是英雄卡且传入 `staticBodyProperties`，会写进新卡的 `HeroObject.StaticBodyProperties`。**这是“改模板前先克隆”的标准做法**。

```csharp
// 克隆一支共享兵种，给它换上自定义装备而不影响原模板
CharacterObject custom = CharacterObject.CreateFrom(Clan.PlayerClan.BasicTroop);
custom.FirstBattleEquipment[EquipmentIndex.Weapon0] = new EquipmentElement(/* 你的 ItemObject */);
// 之后把 custom 加入部队名册，原 BasicTroop 不受影响
```

> 注意：`CreateFrom` 对英雄卡会进入 `if (characterObject.IsHero)` 分支操作 `HeroObject`，普通 mod 多用于克隆兵种卡；生成新英雄请走 `HeroCreator`。

### 能力查询

#### `public override int GetSkillValue(SkillObject skill)`
查技能等级。英雄卡委托 `HeroObject.GetSkillValue(skill)`；兵种卡读模板自身的技能值（`base.GetSkillValue`）。

```csharp
int riding = Hero.MainHero.CharacterObject.GetSkillValue(DefaultSkills.Riding);
```

#### `public int GetTraitLevel(TraitObject trait)`
查特性等级。英雄卡委托 `HeroObject.GetTraitLevel(trait)`；兵种卡读内部 `_characterTraits`（`PropertyOwner<TraitObject>`）。

```csharp
int valor = someCharacter.GetTraitLevel(DefaultTraits.Valor);
```

#### `public bool GetPerkValue(PerkObject perk)`
查专长效用。**兵种卡永远返回 `false`**——只有英雄卡（`IsHero`）才委托 `HeroObject.GetPerkValue`，因为专长是英雄运行时属性。

```csharp
bool hasPerk = heroCharacter.GetPerkValue(DefaultPerks.TwoHanded.FluidStrikes);
```

#### `public TraitObject GetPersona()`
返回该角色的性格原型（`_persona`），为空时回退 `DefaultTraits.PersonaSoftspoken`。用于对话语气选择。

#### `public Occupation GetDefaultOccupation()`
返回内部 `_occupation`（XML 设定的原始职业），与 `Occupation` 属性一致；兵种卡用它判断出身职业。

### 装备与战斗属性

#### `public bool HasThrowingWeapon()`
遍历武器槽（`WeaponItemBeginSlot` ~ `NumAllWeaponSlots`），只要有 `ItemTypeEnum.Thrown` 即返回 `true`。常用于判定一支兵是否带投武。

```csharp
if (troop.HasThrowingWeapon())
{
    // 可在编队时把它放到后排投弹
}
```

#### `public void GetSimulationAttackPower(out float attackPoints, out float defencePoints, Equipment equipment = null)`
计算一套装备下的攻防评分（用于战前模拟）：`equipment` 默认用本卡 `Equipment`，综合武器 `Effectiveness`、相关技能（`RelevantSkill`）、护甲加权和坐骑加成。结果通过 `out` 参数返回。

```csharp
troop.GetSimulationAttackPower(out float atk, out float def, troop.FirstBattleEquipment);
// atk / def 可用于估算这支兵在模拟战斗中的贡献
```

#### `public float GetHeadArmorSum(Equipment.EquipmentType equipmentType = Equipment.EquipmentType.Battle)` 及其 `GetBodyArmorSum` / `GetLegArmorSum` / `GetArmArmorSum` / `GetHorseArmorSum`
分别累加某类装备（默认战斗装）在头/身/腿/臂/马具上的护甲值，内部转调对应 `Equipment` 的求和。

#### `public float GetTotalArmorSum(Equipment.EquipmentType equipmentType = Equipment.EquipmentType.Battle)`
头部 + 身体 + 腿 + 臂护甲之和（不含马具）。

#### `public override bool IsMounted` / `public override bool IsRanged`
前者看坐骑槽（英雄卡 `Equipment[10]`），后者看前四武器槽是否含远程武器，常用于自动编队与阵型分配。

#### `public override FormationClass GetFormationClass()`
英雄卡按“是否骑马 + 是否带弓弩”返回 `Infantry` / `Ranged` / `Cavalry` / `HorseArcher`；兵种卡读基类默认值。

### 体格与身体属性

#### `public override int MaxHitPoints()`
返回角色最大生命值，由 `CharacterStatsModel.MaxHitpoints(this).ResultNumber` 四舍五入。英雄卡与兵种卡都走模型计算。

#### `public override BodyProperties GetBodyProperties(Equipment equipment, int seed = -1)`
生成/返回体型属性：英雄卡直接返回 `HeroObject.BodyProperties`；兵种卡按 `seed` 经 `FaceGen.GetRandomBodyProperties` 在 `GetBodyPropertiesMin/Max` 区间内随机生成（`seed == -1` 时用 `StringId` 的哈希保证确定性）。

#### `public override BodyProperties GetBodyPropertiesMin(bool returnBaseValue = false)` / `GetBodyPropertiesMax(...)`
返回体型属性的上下限。英雄卡且 `returnBaseValue == false` 时返回 `HeroObject.BodyProperties`（即实际值）；兵种卡返回模板区间。

#### `public override void UpdatePlayerCharacterBodyProperties(BodyProperties properties, int race, bool isFemale)`
**仅当 `IsPlayerCharacter && IsHero` 时生效**：把 `properties` 写进玩家英雄的 `StaticBodyProperties / Weight / Build / Race / IsFemale`，并触发 `OnPlayerBodyPropertiesChanged` 事件。修改玩家外观就走这里。

#### `public override int GetMountKeySeed()`
返回坐骑外观随机种子：兵种卡用 `MBRandom.NondeterministicRandomInt`，英雄卡用 `HeroObject.RandomValue`。

### 强度与升级

#### `public override float GetPower()` / `GetBattlePower()` / `GetMoraleResistance()`
战力三件套：`GetPower` 按阶位（`IsHero` 用 `Level/4+1`，否则用 `Tier`）与是否英雄/骑马加权；`GetBattlePower` 在 `GetPower` 基础上做相对基准的缩放（最低 1）；`GetMoraleResistance` 返回士气抗性（英雄 1.5 倍权重）。用于 AI 评估与自动编队。

#### `public int GetUpgradeXpCost(PartyBase party, int index)` / `GetUpgradeGoldCost(PartyBase party, int index)`
查询把本兵种升到第 `index` 个 `UpgradeTargets` 所需经验/金币，分别由 `PartyTroopUpgradeModel.GetXpCostForUpgrade` 与 `GetGoldCostForUpgrade` 计算。`party` 为拥有该兵的部队，影响花费系数。

```csharp
int xpCost = recruitTroop.GetUpgradeXpCost(MobileParty.MainParty.Party, 0);
```

### 角色状态与限制

#### `public void SetTransferableInPartyScreen(bool isTransferable)` / `SetTransferableInHideouts(bool isTransferable)`
通过位标记 `_characterRestrictionFlags` 设置该角色能否在部队界面 / 潜入据点中被转移。若你操作的是**共享模板**，此改动会同时作用于所有引用它的实体——务必先 `CreateFrom` 克隆。

#### `public void ClearAttributes()`
清空属性点；英雄卡委托 `HeroObject.ClearAttributes()`（兵种卡为空操作）。

#### `public void InitializeHeroCharacterOnAfterLoad()`
存档读档后由系统调用：从 `OriginalCharacter`（源模板）把职业、名称、升级目标、装备模板、特性等**拷贝回**当前英雄卡，并置 `IsReady = true`。解释了为何英雄卡改了基础数据后重载仍能还原。

## 典型用法示例

### 示例 1：读取一支兵种模板的技能、装备与阶位

```csharp
CharacterObject troop = CharacterObject.Find("imperial_infantry");
if (troop != null && troop.IsRegular)
{
    int oneHanded = troop.GetSkillValue(DefaultSkills.OneHanded);
    int tier = troop.Tier;
    int wage = troop.TroopWage;
    Equipment battle = troop.FirstBattleEquipment;
    InformationManager.DisplayMessage(new TextObject($"{troop.Name}: 单手 {oneHanded}, 阶位 {tier}, 工资 {wage}"));
}
```

### 示例 2：克隆共享模板以定制一支专属部队（避免污染原模板）

```csharp
// 直接改 Clan.PlayerClan.BasicTroop 会影响所有用到基础兵的地方——先克隆
CharacterObject customTroop = CharacterObject.CreateFrom(Clan.PlayerClan.BasicTroop);
customTroop.FirstBattleEquipment[EquipmentIndex.Weapon1] =
    new EquipmentElement(MBObjectManager.Instance.GetObject<ItemObject>("javelin"));   // 给副本加一柄标枪

// 把克隆体加入玩家部队；原 BasicTroop 及其所有引用者完全不受影响
MobileParty.MainParty.MemberRoster.AddToCounts(customTroop, 20);
```

### 示例 3：遍历当前文化的所有骑兵并估算其战斗攻防

```csharp
CultureObject culture = Hero.MainHero.Culture;
foreach (CharacterObject cav in CharacterObject.FindAll(c => c.IsRegular && c.IsMounted && c.Culture == culture))
{
    cav.GetSimulationAttackPower(out float atk, out float def, cav.FirstBattleEquipment);
    float power = cav.GetBattlePower();
    // atk/def/power 可用于自动编队或平衡性调试
}
```

## 风险与崩溃边界

- **改共享模板会全局生效**：`Clan.BasicTroop`、`CultureObject.BasicTroop`、`CharacterObject.Find(...)` 返回的是 XML 注册的**单例**。直接写它的 `Equipment` 槽、`SetTransferableInPartyScreen`、`Level`(英雄卡) 或技能，会让所有部队、商队、村庄民兵一起变化，且**存档后会固化进存档**。任何“想给某支兵换装备”的需求都应先 `CharacterObject.CreateFrom(template)` 克隆。
- **英雄卡与兵种卡行为不同**：多数属性（`Equipment`、`Level`、`Culture`、`Occupation`、`Age`、`IsFemale`、`HitPoints`、`GetSkillValue`、`GetTraitLevel`）在英雄卡上委托给 `HeroObject`，在兵种卡上读模板自身。`GetPerkValue` 对兵种卡恒为 `false`。写通用逻辑时要先判 `IsHero`，否则可能拿到模板默认值而非英雄实际值。
- **`HeroObject` 为 `null` 的兵种卡**：普通兵种模板没有英雄，`IsHero == false`。若你的代码假设“每张卡都能拿到 `HeroObject.Name`”，对兵种卡会拿到 `null` 进而空引用——访问前用 `IsHero` 区分。`Name` 属性自身已处理：`IsHero` 时返回 `HeroObject.Name`，否则返回模板名。
- **`Find` 可能返回 `null`**：使用了不存在的 `stringId` 时返回 `null`，调用其属性前务必判空。
- **不要 `new CharacterObject()`**：构造器只做字段初始化（`Init()`），不含任何 XML 数据，造出的卡 `Culture`/`Equipment`/`Skills` 几乎全空，既不会被 `MBObjectManager` 注册，也不会出现在 `All` 中。`MBObjectManager.Instance.CreateObject<CharacterObject>()` 是引擎内部的注册途径，mod 应使用 `Find` / `CreateFrom` / `HeroCreator`。
- **`CreateFrom` 是浅克隆**：它复制引用（装备模板、特性 `PropertyOwner`、升级目标数组），不是深度拷贝每个 `ItemObject`。改副本的装备槽内容安全，但意外改了副本引用的共享 `Equipment` 对象仍会影响他者。

## 跨版本提示

- **命名空间**：`CharacterObject` 始终位于 `TaleWorlds.CampaignSystem`（部分文档误写为 `TaleWorlds.Core`，后者只是它 using 的命名空间）。本仓库核对的 1.3.15 与 1.4.5 两个版本中，**该类的公开 API 完全一致**：`CreateFrom`、`Find`/`FindFirst`/`FindAll`、`All`、`IsHero`/`IsRegular`、`Equipment` 系列、`GetSkillValue`/`GetTraitLevel` 等均已存在且签名相同。
- **`BasicTroop` 的位置**：它定义在 `Clan.BasicTroop`、`CultureObject.BasicTroop`、`Kingdom.BasicTroop` 上，返回 `CharacterObject`；`CharacterObject` 自身**没有** `BasicTroop` 成员。需要基础兵请从家族/文化/王国入口取，而非从 `CharacterObject` 取。
- **1.3.0**：本仓库未包含 1.3.0 的 `TaleWorlds.CampaignSystem` 源码（仅有 `SandBox` / `StoryMode` 工程），无法确认其与 1.3.15 的逐行差异。撰写时以 1.3.15 与 1.4.5 为准，二者在该类上无公开差异。
- **英雄生成入口**：跨版本创建英雄建议统一走 `HeroCreator.CreateHero` / `HeroCreator.CreateSpecialHero`，由它内部决定是否 `CreateFrom` 模板——不要在 mod 里手动拼 `new Hero(...)` + `CreateFrom`，以免漏掉 `HeroInitializationArgs` 里的文化/家族/出身结算。

## 依赖关系

- 上游：[MBObjectManager](../../campaign-ext/MBObjectManager/) 注册 XML/模块对象；[CultureObject](../../campaign-ext/CultureObject/) 和模板数据决定职业与装备。
- 下游：[Hero](../Hero/) 以 `CharacterObject` 作为人物模板，[TroopRoster](../../campaign-ext/TroopRoster/) 和 Agent 生成逻辑读取它。
- 存档：保存稳定对象身份和可序列化状态；不要跨 Game 生命周期缓存引用。

## 参见

- [Hero](../Hero/) — 战役世界里的具体角色实例，与 `CharacterObject` 双向绑定
- [Clan](../Clan/) — `Clan.BasicTroop` 返回该家族基础兵种模板
- [MobileParty](../MobileParty/) — 部队名册(`MemberRoster`)以 `CharacterObject` 为计数单位
- [Campaign](../Campaign/) — `Campaign.Current.Characters` 即 `CharacterObject.All`
- [CultureObject](../../campaign-ext/CultureObject/) — 文化决定基础兵、语音与默认装备名册
- [Equipment](../../core-extra/Equipment/) — `CharacterObject` 持有的装备槽数据
- [SkillObject](../../core-extra/SkillObject/) — `GetSkillValue` 的入参类型
- [ItemObject](../../core/ItemObject/) — 装备槽里具体的物品
- [本区域目录](../)
