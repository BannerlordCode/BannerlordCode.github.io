---
title: "BasicCharacterObject"
description: "角色的内核数据对象：装备组、体型范围、阵型分类、技能模板与战力数值都在这里，战役层的 CharacterObject 继承自它。"
---
# BasicCharacterObject

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public class BasicCharacterObject : MBObjectBase`
**Base:** `TaleWorlds.ObjectSystem.MBObjectBase`
**File:** `TaleWorlds.Core/BasicCharacterObject.cs`

## 概述

它是「一个角色」的底层数据载体，与战役状态无关。作为 `MBObjectBase` 的派生类，它由 `MBObjectManager` 从 `basic_characters` 的 XML 加载，**存档里存的是 `StringId` 引用，读档时按 id 重新加载**。

数据分五块：**装备**（`Equipment` 是默认套，`BattleEquipments` / `CivilianEquipments` 是全部套，`AllEquipments` 汇总）、**体型**（`BodyPropertyRange` 是 min/max 两份 [BodyProperties](../BodyProperties)，`GetBodyProperties` 随机取中间值）、**分类**（`Race` / `IsFemale` / `Culture` / `IsInfantry` / `IsMounted` / `IsRanged` / `FormationClass`）、**技能**（`DefaultCharacterSkills` 是 `MBCharacterSkills` 模板）、**战力数值**（`GetPower` / `GetBattlePower` / `GetMoraleResistance` / `GetBattleTier` / `MaxHitPoints` / `SkillFactor` / `GetStepSize`）。

**战役层的 `TaleWorlds.CampaignSystem.CharacterObject` 继承自本类**，在它之上加了 `HeroParty` / `Level` 的成长、`ICharacterData` 接口实现等等。所以本类是那套体系的地基。

## 心智模型

三个典型场景：

1. **按 id 取角色读数据**：`MBObjectManager.Instance.GetObject<BasicCharacterObject>("villager_male_1")`，然后读 `Level` / `Race` / `Equipment` / `GetBattleTier()`。
2. **挑一套装备**：`BattleEquipments` / `FirstBattleEquipment` / `RandomBattleEquipment`，或用 `GetFirstEquipment(Func<Equipment,bool>)` 自定义筛选。
3. **给角色生成体型**：`GetBodyProperties(equipment, seed)` 内部调 [FaceGen](../FaceGen)，把 `BodyPropertyRange` 的 min/max 与 `HairCoverType` 一起喂进去。

**最坑的一条：`Equipment` 永远不返回 null，但它可能是一份「空装备」。** getter 是 `_equipmentRoster == null ? MBEquipmentRoster.EmptyEquipment : _equipmentRoster.DefaultEquipment`。所以判「角色有没有武器」不能判 `Equipment == null`，要判槽位上的 `Item`。`HasMount()` 就是正确示范——`this.Equipment[10].Item != null`（硬编码槽位 10）。

第二条：**大量便捷方法在裸构造的对象上会 NRE。** `new BasicCharacterObject()` 只设了 `DefaultFormationClass`。于是：`GetSkillValue(...)` → `DefaultCharacterSkills` 为 null → NRE；`GetStepSize()` 内部调 `GetSkillValue(DefaultSkills.Athletics)` → 同样 NRE；`GetBodyProperties(...)` → `BodyPropertyRange` 为 null → NRE；`MaxHitPoints()` → [FaceGen](../FaceGen).GetBaseMonsterFromRace 无实例时返回 null → 解引用 NRE；`IsPlayerCharacter` → `Game.Current.PlayerTroop` → `Game.Current` 为 null 时 NRE。

第三条：**它是 `MBObjectBase` 而不是存档对象。** 想持久化一个角色的体型，改的是存档里那份 `ItemObject` / 角色数据，不是给本类加字段。`Age` / `Race` / `IsFemale` / `FaceDirtAmount` 虽然是 `{ get; set; }`，**运行时改了不会进存档**。

第四条：`Culture` 是**唯一有真 setter 的核心数据属性**（走 `_culture` 字段），其余像 `Level` / `Race` / `IsFemale` / `Age` 虽然写着 `{ get; set; }` 但都是直接写字段，没有校验。

第五条：`GetBattleTier()` 有一条 hero 特判：`IsHero` 为真直接返回 `7`（`MaxBattleTier`），否则 `clamp(ceil((Level - 5) / 5), 0, 7)`。**等级 10 及以上才拿满 7 档。**

常见误用：判 `Equipment == null`；对裸构造对象调 `GetSkillValue`；以为改 `Age` 会存进档；把 `HasMount()` 当成通用的「是否有坐骑装备」（它只看槽位 10）。

## 关键成员

### 身份与分类

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `Name` | `public virtual TextObject Name { get; }` | **只读**。返回 `_basicName`，由 `Deserialize` 的 `name` 属性填。**`new BasicCharacterObject()` 出来是 null。** |
| `GetName` | `public override TextObject GetName()` | 返回 `Name`。覆写基类契约用。 |
| `ToString` | `public override string ToString()` | 返回 `Name.ToString()`。**`Name` 为 null 时是 `NullReferenceException`。** |
| `Level` | `public virtual int Level { get; set; }` | 等级，`get; set` 都是 `virtual`。`SkillFactor` / `GetPower` / `GetBattleTier` 全从它算。 |
| `Race` | `public int Race { get; set; }` | 种族索引。XML 的 `race` 属性经 `FaceGen.GetRaceOrDefault` 解析，**找不到回落 0**。 |
| `IsFemale` | `public virtual bool IsFemale { get; set; }` | 性别，`virtual`。 |
| `Culture` | `public BasicCultureObject Culture { get; set; }` | 写 `_culture` 字段。**本类里唯一带真 setter 的核心数据属性。** |
| `Age` | `public virtual float Age { get; set; }` | 年龄，写 `_age`。运行期改不进存档。 |
| `IsHero` | `public virtual bool IsHero { get; }` | `_isBasicHero`，来自 XML 的 `is_hero`。**只读**，派生类可覆写。 |
| `IsSoldier` | `public bool IsSoldier { get; private set; }` | XML 的 `occupation` 属性里含 `"soldier"`（不区分大小写）即为真。 |
| `IsObsolete` | `public bool IsObsolete { get; private set; }` | XML 的 `is_obsolete`，兼容旧角色用。 |
| `FaceMeshCache` | `public bool FaceMeshCache { get; private set; }` | XML 的 `face_mesh_cache`，是否缓存脸 mesh。 |
| `FaceDirtAmount` | `public float FaceDirtAmount { get; set; }` | 面部污渍量，`public get/set`。运行期表现值。 |
| `IsPlayerCharacter` | `public virtual bool IsPlayerCharacter { get; }` | `Game.Current.PlayerTroop == this`。**`Game.Current` 为 null 时 NRE。** |

### 兵种分类

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `IsInfantry` | `public bool IsInfantry { get; }` | `!IsRanged && !IsMounted`。**注意这和 `FormationClass` 是两套东西**——`IsInfantry` 是类型判定，`FormationClass` 是阵型默认分类。 |
| `IsMounted` | `public virtual bool IsMounted { get; }` | 返回 `_isMounted`。`virtual`，派生类可覆写。 |
| `IsRanged` | `public virtual bool IsRanged { get; }` | 返回 `_isRanged`。`virtual`。 |
| `FormationClass` / `DefaultFormationClass` | `public FormationClass FormationClass { get; set; }` / `DefaultFormationClass` | 阵型分类。**构造器把 `DefaultFormationClass` 设成 `FormationClass.Infantry`**。 |
| `DefaultFormationGroup` | `public int DefaultFormationGroup { get; set; }` | 默认阵型组号，XML 的 `FormationGroup` 解析。 |
| `FormationPositionPreference` | `public FormationPositionPreference FormationPositionPreference { get; protected set; }` | 阵型站位偏好。 |
| `GetFormationClass` | `public virtual FormationClass GetFormationClass()` | 方法形式的阵型分类，`virtual`。 |
| `FetchDefaultFormationGroup` | `protected int FetchDefaultFormationGroup(string innerText)` | 从 XML 文本解析阵型组号，**`protected`，外部不可见**。 |

### 装备

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `Equipment` | `public virtual Equipment Equipment { get; }` | 默认装备套。**`_equipmentRoster` 为 null 时返回 `MBEquipmentRoster.EmptyEquipment`（单槽全空的共享实例），不是 null。** |
| `AllEquipments` | `protected virtual MBReadOnlyList<Equipment> AllEquipments { get; }` | 全部装备套。**`protected`**，外部只能通过下面几个派生属性间接访问。为 null 时返回一个只含 `EmptyEquipment` 的单元素 `MBList`。 |
| `BattleEquipments` / `CivilianEquipments` | `public virtual IEnumerable<Equipment> BattleEquipments { get; }` / `CivilianEquipments` | 按 `Equipment.IsBattle` / `IsCivilian` 过滤 `AllEquipments`。两者都是**惰性 `WhereQ`，多次枚举会重复过滤。** |
| `FirstBattleEquipment` / `FirstCivilianEquipment` | `public virtual Equipment FirstBattleEquipment { get; }` / `FirstCivilianEquipment` | 对应集合的第一个。**集合为空时返回 null**（`FirstOrDefault`）。 |
| `RandomBattleEquipment` / `RandomCivilianEquipment` / `GetRandomEquipment` | `public virtual Equipment RandomBattleEquipment { get; }` 等 | `GetRandomElementWithPredicate`。**`GetRandomEquipment` 的谓词是 `!x.IsEmpty()`，不区分战斗/民用。** 三个都可能是 null。 |
| `GetFirstEquipment` | `public Equipment GetFirstEquipment(Func<Equipment, bool> predicate)` | 先在 `AllEquipments` 里按谓词找第一个，**找不到回落到 `this.Equipment`**（永不返回 null，除非 `Equipment` 为 null，而它永不 null）。 |
| `InitializeEquipmentsOnLoad` | `public void InitializeEquipmentsOnLoad(BasicCharacterObject character)` | 读档路径：直接接管 `character._equipmentRoster` 的**引用**（不是拷贝）。 |
| `AddEquipment` | `protected void AddEquipment(MBEquipmentRoster equipmentRoster, Equipment.EquipmentType equipmentType)` | `protected`，`Deserialize` 内部用。 |

### 体型

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `BodyPropertyRange` | `public virtual MBBodyProperty BodyPropertyRange { get; protected set; }` | 该角色的体型上下限容器（`MBBodyProperty`），带 `HairTags` / `BeardTags` / `TattooTags` 与 `BodyPropertyMin` / `BodyPropertyMax`。**`protected set`，裸构造对象为 null。** |
| `GetBodyPropertiesMin` / `GetBodyPropertiesMax` | `public virtual BodyProperties GetBodyPropertiesMin(bool returnBaseValue = false)` / `GetBodyPropertiesMax` | 直接返回 `BodyPropertyRange.BodyPropertyMin` / `BodyPropertyMax`。**`returnBaseValue` 参数在方法体里完全没用。`BodyPropertyRange` 为 null 时 NRE。** |
| `GetBodyProperties` | `public virtual BodyProperties GetBodyProperties(Equipment equipment, int seed = -1)` | 取 min/max 后交给 `FaceGen.GetRandomBodyProperties(Race, IsFemale, min, max, equipment?.HairCoverType ?? ArmorComponent.HairCoverTypes.None, seed, …Tags, 0f)`。**`equipment` 为 null 时 HairCoverType 用 `None`；`BodyPropertyRange` 为 null 时 NRE；[FaceGen](../FaceGen) 未初始化时返回下限值。** |
| `UpdatePlayerCharacterBodyProperties` | `public virtual void UpdatePlayerCharacterBodyProperties(BodyProperties properties, int race, bool isFemale)` | 用同一份 properties 同时作为 min 与 max 调 `BodyPropertyRange.Init(properties, properties)`，再写 `Race` 与 `IsFemale`。**只对玩家角色有意义。** |

### 技能与战力数值

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `GetDefaultCharacterSkills` | `public MBCharacterSkills GetDefaultCharacterSkills()` | 返回 `DefaultCharacterSkills`（`protected` 字段的 getter）。 |
| `GetSkillValue` | `public virtual int GetSkillValue(SkillObject skill)` | `DefaultCharacterSkills.Skills.GetPropertyValue(skill)`。**裸构造对象上 `DefaultCharacterSkills` 为 null → NRE。** |
| `SkillFactor` | `public float SkillFactor { get; }` | `min(Level, SkillAffectingMaxLevel) / (float)SkillAffectingMaxLevel`。**等级 32 及以上恒为 1.0**。 |
| `GetPower` | `public virtual float GetPower()` | `0.2f + (Level + 10)² × 0.0025f`。**纯 `Level` 的函数**，`virtual` 供派生类改写。 |
| `GetBattlePower` | `public virtual float GetBattlePower()` | 基类实现恒返回 `1f`。`virtual`。 |
| `GetMoraleResistance` | `public virtual float GetMoraleResistance()` | 基类实现恒返回 `1f`。`virtual`。 |
| `GetBattleTier` | `public virtual int GetBattleTier()` | `IsHero ? MaxBattleTier : clamp(ceil((Level - 5f) / 5f), 0, 7)`。**10 级起满档。** |
| `MaxHitPoints` | `public virtual int MaxHitPoints()` | `FaceGen.GetBaseMonsterFromRace(Race).HitPoints`。**`GetBaseMonsterFromRace` 未装实例时返回 null → NRE。** `virtual`（`HitPoints` 属性返回 `MaxHitPoints()`）。 |
| `HitPoints` | `public virtual int HitPoints { get; }` | 直接返回 `MaxHitPoints()`。**只读。** |
| `GetStepSize` | `public float GetStepSize()` | `min(0.8f + 0.2f × GetSkillValue(DefaultSkills.Athletics) × 0.00333333f, 1f)`。**间接依赖 `GetSkillValue`。** |
| `GetMountKeySeed` | `public virtual int GetMountKeySeed()` | `MBRandom.RandomInt()`。`virtual`。 |
| `GetDefaultFaceSeed` | `public int GetDefaultFaceSeed(int rank)` | `(StringId.GetDeterministicHashCode() × 6791 + rank × 197)` 取绝对值后 `% 2000`。**纯函数，无副作用**，`StringId` 为 null 时 NRE。 |
| `HasMount` | `public bool HasMount()` | `this.Equipment[10].Item != null`。**硬编码槽位 10**（马具位），且只判 `Item` 不判类型。 |
| `SkillAffectingMaxLevel` | `public static readonly int SkillAffectingMaxLevel = 32` | `SkillFactor` 的分母上限。 |
| `DefaultKnockbackResistance` | `public const float DefaultKnockbackResistance = 25f` | 击退抗性默认值。 |
| `DefaultKnockdownResistance` | `public const float DefaultKnockdownResistance = 50f` | 击倒抗性默认值。 |
| `DefaultDismountResistance` | `public const float DefaultDismountResistance = 50f` | 下马抗性默认值。 |
| `MaxBattleTier` | `public const int MaxBattleTier = 7` | 战斗档位上限，`GetBattleTier()` 的钳制上界。 |

### 复制与加载

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `FillFrom` | `protected void FillFrom(BasicCharacterObject character)` | 逐字段拷 14 项（文化/阵型/体型/性别/种族/等级/名字/年龄/三项抗性/技能/装备组）。**`protected`**，且**不含 `IsHero` / `IsSoldier`**。 |
| `InitializeHeroBasicCharacterOnAfterLoad` | `protected void InitializeHeroBasicCharacterOnAfterLoad(BasicCharacterObject originCharacter)` | 读档时把英雄的 15 项拷过来，**额外含 `IsSoldier` / `_isBasicHero` / `Culture`**。`protected`。 |
| `.ctor` | `public BasicCharacterObject()` | **只设 `DefaultFormationClass = FormationClass.Infantry`。** 其余全是默认零值/null。 |
| `Deserialize` | `public override void Deserialize(MBObjectManager objectManager, XmlNode node)` | 解析 `name` / `race` / `occupation` / `is_hero` / `face_mesh_cache` / `is_obsolete` / `skill_template`，以及子节点 `<Equipments>`（内含 `<EquipmentRoster>` / `<EquipmentSet>` / `<equipment>`）、`<face>`。**`c:unknown` 之外遇到不认识的 `equipmentType` 值会 `Debug.FailedAssert`。** |
| `AutoGeneratedInstanceCollectObjects` | `protected override void AutoGeneratedInstanceCollectObjects(List<object> collectedObjects)` | 存档系统对象图收集钩子。`protected`。 |

## 怎么用

### 怎么拿到它

`BasicCharacterObject` 是 `public class BasicCharacterObject : MBObjectBase`（`TaleWorlds.Core/BasicCharacterObject.cs:14`）——**不是 sealed，可以继承**，[CharacterObject](../../campaign/CharacterObject) 就继承它。XML 对象，构造器 `public BasicCharacterObject()`（`:378`）。

mod 拿到的实例来自三处：物品/角色表反序列化、`Game.PlayerTroop`（字段类型就是 `BasicCharacterObject`）、以及直接 `MBObjectManager.Instance.GetObject<BasicCharacterObject>("字符串id")`。

它身上几乎所有东西都是 `virtual`，这是这个类型存在的全部意义——子类覆写它们来改变「外观 / 装备 / 属性」的呈现方式：

| 覆写点 | 行 | 默认实现 |
| --- | --- | --- |
| `Name` | `:18` | 空 |
| `GetName()` | `:33` | 转调 `Name` |
| `AllEquipments` | `:136` | 遍历 Battle + Civilian |
| `Equipment` | `:150` | `GetRandomEquipment()` |
| `IsPlayerCharacter` / `IsHero` / `IsMounted` / `IsRanged` | `:276` / `:364` / `:91` / `:101` | 都是 `false` |
| `Level` / `HitPoints` | `:257` / `:301` | 都是 `0` |
| `GetBodyPropertiesMin/Max` | `:310` / `:336` | `default(BodyProperties)` |

`protected void FillFrom(BasicCharacterObject character)`（`:316`）是子类复制别的实例时的公共入口。

### 典型用法

派生一个「同一套数值、不同阵营配色」的兵种模板：

```csharp
using TaleWorlds.Core;

public class EliteHeavy : BasicCharacterObject
{
    private readonly BasicCharacterObject _base;
    private readonly Banner _banner;

    public EliteHeavy(BasicCharacterObject baseTroop, Banner banner)
    {
        _base = baseTroop;
        _banner = banner;
        FillFrom(baseTroop);                 // BasicCharacterObject.cs:316
    }

    public override TextObject Name => new TextObject("{=myelite}精锐重甲");   // :18

    public override bool IsMounted => _base.IsMounted;                        // :91

    public override Equipment Equipment => _base.FirstBattleEquipment;         // :150

    public override int Level => 30;                                           // :257
}
```

### 最容易踩的坑

**覆写 `Equipment`（`:150`）时忘了它默认是 `GetRandomEquipment()`（`:224`）的随机结果，于是把「每次都换一套」的行为抹平了，或者反过来在覆写里又调回随机。** 这两个成员是一对：基类 `Equipment` 的 getter 走 `GetRandomEquipment()`，而 `FirstBattleEquipment`（`:174`）、`RandomBattleEquipment`（`:184`）、`CivilianEquipments`（`:194`）各自有独立的取法。后果是 mod 里「角色外观每次进入战斗都变」这个原生表现会突然固定下来（或者本该固定却被你改成了随机），而且由于 `Equipment` 被战斗/菜单/装备界面多路径调用，改一处会在三个界面同时生效。

第二个坑：`Level`（`:257`）和 `HitPoints`（`:301`）的基类默认返回 `0`，**`Equipment`、`Level` 任何一项为 0 都不会报错**。自定义兵种如果忘了覆写 `MaxHitPoints()`，它在战场上的血条就是 0，表现为一进场就被秒——而控制台没有任何提示。覆写这些虚成员时要按「基类返回的是安全但无意义的默认值」来假设，而不是「基类会给出合理值」。

## 真实示例

按 id 取角色并读它的基础分类：

<!-- xml-id-unverifiable: v1.4.6 -->
> ⚠️ 不可验证：本页全部字符串 id（下方代码示例中的）在 v1.4.6 源码树均无法核对——该版本未随附 XML 语料。
```csharp
BasicCharacterObject character = MBObjectManager.Instance.GetObject<BasicCharacterObject>("villager_male_1");
if (character == null)
{
    Debug.Print("character not loaded", 0);
    return;
}

Debug.Print(character.GetName() + " level=" + character.Level + " race=" + character.Race, 0);
Debug.Print("infantry=" + character.IsInfantry + " tier=" + character.GetBattleTier(), 0);
Debug.Print("power=" + character.GetPower() + " skillFactor=" + character.SkillFactor, 0);
```

挑一套战斗装备并逐槽判空（注意别判 `Equipment == null`）：

```csharp
Equipment battle = character.FirstBattleEquipment;
if (battle == null)
{
    battle = character.RandomBattleEquipment;
}

for (int slot = 0; slot < 12; slot++)
{
    ItemObject item = battle[slot];
    if (item != null)
    {
        Debug.Print("slot " + slot + " item=" + item.StringId, 0);
    }
}

Debug.Print("has mount gear: " + character.HasMount(), 0);
Debug.Print("weapons weight=" + battle.GetTotalWeightOfWeapons(), 0);
```

用自定义谓词挑装备（找不到会自动回落到默认套）：

```csharp
Equipment picked = character.GetFirstEquipment(e => e.IsBattle && !e.IsEmpty());
Debug.Print("picked isEmpty=" + picked.IsEmpty(), 0);

foreach (Equipment all in character.BattleEquipments)
{
    Debug.Print("battle set armor weight=" + all.GetTotalWeightOfArmor(true), 0);
}
```

生成一份体型（`BodyPropertyRange` 必须已加载）：

```csharp
Equipment equipped = character.Equipment;
BodyProperties body = character.GetBodyProperties(equipped, -1);

Debug.Print("age=" + body.Age + " build=" + body.Build, 0);
Debug.Print("min age=" + character.GetBodyPropertiesMin(false).Age, 0);
Debug.Print("faceSeed=" + character.GetDefaultFaceSeed(0), 0);
```

读技能值（裸构造对象上会 NRE）：

```csharp
int athletics = character.GetSkillValue(DefaultSkills.Athletics);
Debug.Print("athletics=" + athletics + " stepSize=" + character.GetStepSize(), 0);

int maxHp = character.MaxHitPoints();
Debug.Print("hitpoints=" + maxHp, 0);
```

给玩家角色钉一个固定体型：

```csharp
BodyProperties fixedBody = new BodyProperties(
    new DynamicBodyProperties(31f, 0.5f, 0.5f),
    StaticBodyProperties.GetRandomStaticBodyProperties());

character.UpdatePlayerCharacterBodyProperties(fixedBody, FaceGen.GetRaceOrDefault("empire"), false);
Debug.Print("race now " + character.Race + " female=" + character.IsFemale, 0);
```

## 风险与边界

- **不是存档对象。** 它是 `MBObjectBase`，存档存 `StringId` 引用。**运行时改 `Age` / `FaceDirtAmount` / `Level` 不会进存档。**
- **裸构造对象上大量方法 NRE。** `GetSkillValue` / `GetStepSize`（依赖前者）/ `GetBodyProperties*`（依赖 `BodyPropertyRange`）/ `MaxHitPoints`（依赖 [FaceGen](../FaceGen) 实例）。
- **`Equipment` 永不返回 null，但可能是空装备。** 判「有没有武器」要看槽位 `Item`，不要判 `Equipment == null`。`HasMount()` 是正确示范（硬编码槽位 10）。
- **`FirstBattleEquipment` / `RandomBattleEquipment` 等可能是 null。** 集合为空时给 null。
- **`GetFirstEquipment` 永不返回 null**（会回落到 `Equipment`），所以「拿不到就是 null」在它身上不成立。
- **`BattleEquipments` / `CivilianEquipments` 是惰性的。** 反复枚举会重复过滤 `AllEquipments`，热路径里先 `ToList()`。
- **`AllEquipments` 是 `protected`。** 外部拿不到全集，只能用 `BattleEquipments` / `CivilianEquipments` 这两个派生视图或 `GetFirstEquipment`。
- **`BodyPropertyRange` 是 `protected set`。** 运行期换不了整个范围，只能调 `UpdatePlayerCharacterBodyProperties`。
- **`GetBodyPropertiesMin/Max` 的 `returnBaseValue` 参数没用。** 传什么都一样，别以为它在区分「基础值」和「随机值」。
- **`GetBodyProperties` 在 [FaceGen](../FaceGen) 未初始化时返回下限值。** 全部角色长得一样，且没有错误信号。
- **`IsPlayerCharacter` 摸 `Game.Current`。** 早期阶段 NRE。
- **`ToString()` 解引用 `Name`。** `Name` 为 null 时 NRE。
- **`GetBattleTier` 有 hero 特判。** `IsHero` 为真直接返回 7，不看等级。
- **`SkillFactor` 在 32 级封顶。** 高等级角色的 SkillFactor 恒为 1.0。
- **`HasMount()` 只看槽位 10 的 `Item`。** 塞了个非马具类物品进去它也返回 true。
- **`GetDefaultFaceSeed` 用 `StringId.GetDeterministicHashCode()`。** `StringId` 为 null（裸构造）时 NRE；不同 `StringId` 的结果会撞（取模 2000）。
- **`Deserialize` 遇到未识别的 `equipmentType` 值会 `Debug.FailedAssert`。** 自定义 XML 写错枚举名时是断言而非静默回落。
- **战役层派生类存在但本页不链。** `TaleWorlds.CampaignSystem.CharacterObject` 继承自本类（在 `campaign` 桶），本页只描述内核这一半。

## 跨版本提示

`bannerlord-1.3.15/TaleWorlds.Core/BasicCharacterObject.cs` 与 `bannerlord-1.4.6/TaleWorlds.Core/BasicCharacterObject.cs` 逐行比对，**public 表面完全一致**：60 条 public 成员（`Name` / `BodyPropertyRange` / `Equipment` / `BattleEquipments` / `CivilianEquipments` / `First*` / `Random*` / `GetRandomEquipment` / `Level` / `Culture` / `Age` / `IsHero` / `HitPoints` 等属性，以及 `GetBodyPropertiesMin/Max` / `GetBodyProperties` / `UpdatePlayerCharacterBodyProperties` / `GetPower` / `GetBattlePower` / `GetMoraleResistance` / `GetBattleTier` / `GetSkillValue` / `GetFormationClass` / `MaxHitPoints` / `GetDefaultFaceSeed` / `GetStepSize` / `HasMount` / `GetFirstEquipment` / `InitializeEquipmentsOnLoad` / `Deserialize` 等方法 + 5 个常量 / `static readonly` 字段）。

**1.4.5 侧结论**：打开 `bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.Core/TaleWorlds.Core/BasicCharacterObject.cs`（558 行）与 `bannerlord-1.4.6/TaleWorlds.Core/BasicCharacterObject.cs`（797 行）逐成员比对 public/protected 表面。**三版 public/protected 表面完全一致（各 67 个成员，0 新增 / 0 移除 / 0 签名变化 / 0 可访问性变化）**。

**为什么这份源码之前被判为「不存在」**：`bannerlord-1.4.5/` 的 C# 源码在 `Bannerlord.Source/bin/` 下**双层嵌套** `bin/<Assembly>/<Assembly>/<Type>.cs`，而 `bin/` 的一层里没有任何 `.cs`（实测 `find bannerlord-1.4.5/Bannerlord.Source/bin -maxdepth 1 -name "*.cs"` 命中 0），只扫一层就会误判成无源码。**1.4.5 是原始源码形态**（file-scoped namespace、无 `// Token:` 注释），1.4.6 与 1.3.15 是反编译产物，所以两边的行数不可直接比大小。

## 依赖关系

- 基类与装载：[MBObjectBase](../../campaign-ext/MBObjectBase) 提供 `StringId` 与 `Deserialize` 契约；[MBObjectManager](../../campaign-ext/MBObjectManager) 负责 id 寻址
- 装备容器：[Equipment](../Equipment) 的 12 槽结构是本类 `Equipment` / `AllEquipments` / `BattleEquipments` 的元素类型，[ItemObject](../ItemObject) 是槽位上挂的物品
- 体型：本类的 `BodyPropertyRange` 装着 min/max 两份 [BodyProperties](../BodyProperties)；生成随机体型时经 [FaceGen](../FaceGen)，静态位包是 [StaticBodyProperties](../StaticBodyProperties)、动态量是 [DynamicBodyProperties](../DynamicBodyProperties)
- 技能：`GetSkillValue` 传入的是 [SkillObject](../SkillObject)，模板存在 `MBCharacterSkills` 里
- 锻造：[Crafting](../Crafting) 的合成武器最终会作为 `ItemObject` 装进本类的装备套
- 玩法层：[Hero](../../campaign/Hero) 属于 `TaleWorlds.CampaignSystem` 那一层，其角色数据最终由本类的战役派生类承载
- 桶首页：[core-extra API 分区](../)

## 导航

- 同桶：[`../Equipment`](../Equipment) · [`../BodyProperties`](../BodyProperties) · [`../FaceGen`](../FaceGen)
- 父索引：[`../_index`](../_index)
