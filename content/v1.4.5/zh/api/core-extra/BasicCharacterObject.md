---
title: "BasicCharacterObject"
description: "所有数据驱动兵种与可上场角色的身份基类：定义名字、文化、种族、职业、兵种倾向、装备名册与属性/技能访问器，是连接 MBObjectBase 数据、Campaign 角色与战场 Agent 的“角色身份层”。"
---
# BasicCharacterObject

**Namespace:** `TaleWorlds.Core`  
**Module:** `TaleWorlds.Core`  
**Type:** `public class BasicCharacterObject : MBObjectBase`  
**Base:** `MBObjectBase`（[../core/MBObjectBase/](../../core/MBObjectBase)）  
**Source:** `bin/TaleWorlds.Core/TaleWorlds.Core/BasicCharacterObject.cs`

## 一句话职责

它是所有"能上战场的人/兵"的**身份基类**：数据驱动的兵种与 NPC 定义（`CharacterObject`）直接继承它；英雄（`Hero`）虽然不继承它，却内嵌一个 `CharacterObject` 并通过它共享同一套名字、文化、种族、职业、兵种与属性/技能语义。它把角色数据（XML 加载的 `MBObjectBase`）暴露给 Campaign 系统、对话/Encyclopedia 与战场 `Agent`，是"角色是什么"这层语义的中枢。

## 概述

`BasicCharacterObject` 处在数据、战役与战场三层的交界。它继承 `MBObjectBase`（因此拥有 `StringId`、注册到 `MBObjectManager`、可被 XML 反序列化），又向下为 `CharacterObject` 提供一套完整的"角色通用能力"：显示名、文化、种族、年龄、等级、是否女性/英雄/士兵、兵种判定（步/骑/弓）、默认编队、抗击退/击倒/落马、装备名册（`MBEquipmentRoster`）、体型与外观、技能访问（`GetSkillValue`）和一系列战力/生命派生计算（`MaxHitPoints` / `GetPower` / `GetBattleTier` 等）。

mod 实际打交道时，手里拿到的几乎总是它的子类：`CharacterObject`（普通兵种、NPC 模板，来自 XML）或经 `Hero.CharacterObject` 取到的英雄角色。把方法参数声明为 `BasicCharacterObject` 可以统一接受这两者——这是它最常见的用法。

## 心智模型

### 继承与关系（v1.4.5 实测）

```
MBObjectBase
├── BasicCharacterObject          ← 身份基类，承载名字/文化/技能/装备等通用语义
│   └── CharacterObject : BasicCharacterObject, ICharacterData   ← 数据驱动兵种/NPC（XML）
└── Hero : MBObjectBase           ← 不继承 BasicCharacterObject，但直接继承 MBObjectBase
```

关键点（与"Hero 继承 BasicCharacterObject"的常见误解不同）：

- **`CharacterObject` 直接继承 `BasicCharacterObject`**：普通兵种、强盗、村民、巡逻队等都在 XML 里定义为 `CharacterObject`，它们就是 `BasicCharacterObject` 的实例。
- **`Hero` 直接继承 `MBObjectBase`，并不继承 `BasicCharacterObject`**：但每个 `Hero` 内部持有一个 `CharacterObject`（`Hero.CharacterObject`），英雄的名字、文化、技能、装备都来自这个内嵌角色；反过来，某个 `CharacterObject` 若是英雄，其 `IsHero == true` 且 `HeroObject` 指向对应的 `Hero`。
- **战场上的统一视图**：`Agent.Character` 的类型是 `BasicCharacterObject`，实际运行期对象是一个 `CharacterObject`。若该角色是英雄（`IsHero`），则可经 `HeroObject` 取到 `Hero`；如果该 `CharacterObject` 来自某个 `Hero.CharacterObject`，它同样代表那个英雄。

所以：要"统一处理任何角色"，用 `BasicCharacterObject` 作参数类型最合适；要区分"这是不是一个具体英雄"，用 `IsHero` / `HeroObject` 比用类型判断更稳（`Hero` 类本身不出现在 `Agent.Character` 的类型里）。

### 谁创建、谁持有、在什么层

1. **数据来源**：`CharacterObject` 实例由 `MBObjectManager` 从 XML（如 `troops.xml`、`npc_characters.xml`）反序列化得到，靠 `StringId` 取回；`Hero` 在 Campaign 运行时由 `CharacterObject` 具体化（`Hero.CreateHero` 等）或作为玩家主角 `Game.Current.PlayerTroop`。
2. **持有者**：`BasicCharacterObject` 是长期 Campaign 对象（经 `MBObjectBase` 注册），不像 `Agent` 那样随 Mission 来去。多个系统共享同一个角色实例（名册、对话、战场都引用它）。
3. **所在层**：**Core**（定义与计算）+ **Campaign**（英雄/名册语义）+ **Mission**（经 `Agent.Character` 上场）。它是"角色身份"层，跨三层共享。

## 如何获取 BasicCharacterObject

```csharp
using TaleWorlds.Core;
using TaleWorlds.CampaignSystem;        // CharacterObject 在此命名空间
using TaleWorlds.ObjectSystem;

// 1) 普通兵种：经 MBObjectManager 按 StringId 取得（它是 BasicCharacterObject 的子类）
CharacterObject looter = MBObjectManager.Instance.GetObject<CharacterObject>("looters");
BasicCharacterObject asBase = looter;   // 向上转型，统一处理

// 2) 英雄：Campaign 里的 Hero，其角色数据就是 BasicCharacterObject
Hero hero = Hero.MainHero;
BasicCharacterObject heroChar = hero.CharacterObject;

// 3) 战场：Mission 中 Agent 的 Character 字段（类型是 BasicCharacterObject）
//    BasicCharacterObject character = agent.Character;
```

要点：你几乎不会 `new BasicCharacterObject()`——要么取 XML 定义的 `CharacterObject`，要么取 `Hero.CharacterObject`。需要"任何角色"的通用代码，把形参写成 `BasicCharacterObject` 即可同时接受两者。

## 何时用 / 何时不要用

**用它：**
- 写一个同时接受"普通兵种"和"英雄"的通用方法时，把参数声明为 `BasicCharacterObject`。
- 读取跨子类通用的属性：`Name` / `Culture` / `Race` / `Age` / `Level` / `IsHero` / `IsFemale` / `IsMounted` / `IsRanged` / `IsPlayerCharacter`。
- 调用通用计算：`GetSkillValue` / `MaxHitPoints` / `GetPower` / `GetBattleTier` / `GetStepSize` / `GetBodyProperties`。

**别用它：**
- 不要把它当持久身份去存 Campaign 业务数据——具体身份是 `CharacterObject` 或 `Hero`；`BasicCharacterObject` 是它们的共同基类，单独实例化没有语义。
- 不要把 `GetSkillValue` 当作**英雄当前技能值**的权威来源：它读的是 `DefaultCharacterSkills`（XML 的 `skill_template` 基础模板）。英雄升级后的实时技能在 `Hero` 自己的技能容器里，需查 `Hero` 文档。
- 不要直接改 `Equipment` 期望它影响英雄的实际装备：`Equipment` 来自 `_equipmentRoster`（XML 装备集）；`Hero` 有独立的装备覆盖，改这里不会改英雄身上穿的。`Hero` 相关改装在 `CharacterObject` / `Hero` 文档。
- 继承 `BasicCharacterObject` 自定义角色时，务必遵守 `Deserialize` 的 XML 契约（见风险段），否则会出现技能全 0、外观解析失败等坏档表现。

## 依赖图

- 基类（数据框架）：[MBObjectBase](../../core/MBObjectBase)（`TaleWorlds.Core`）提供 `StringId`、`MBObjectManager` 注册与 `Deserialize` 框架。
- 直接子类（真实可上场对象）：[CharacterObject](../../campaign/CharacterObject)（数据驱动兵种/NPC）、以及经其关联的 [Hero](../../campaign/Hero)（内嵌 `CharacterObject`）。
- 关联数据对象：[BasicCultureObject](../BasicCultureObject)（文化，影响兵种/外观/命名）、[SkillObject](../SkillObject)（技能定义，供 `GetSkillValue`）、[MBCharacterSkills](../MBCharacterSkills)（技能值容器，即 `DefaultCharacterSkills`）、[Equipment](../Equipment) 与 [ItemObject](../ItemObject)（装备与物品）、[Banner](../Banner)（旗）、[Monster](../Monster)（种族体型/基础生命，供 `MaxHitPoints`）、[FaceGen](../FaceGen)（外观随机生成）。
- 战场连接：[Agent](../../mission/Agent) 的 `Character` 字段即一个 `BasicCharacterObject`（实际为 `CharacterObject`）。
- 接口引用：[IAgentOriginBase](../IAgentOriginBase) 的 `Troop` 静态返回类型就是 `BasicCharacterObject`。

## 风险

1. **`GetSkillValue` 读的是基础模板，不是英雄实时值**：它返回 `DefaultCharacterSkills.Skills.GetPropertyValue(skill)`。对 `CharacterObject` 这是 XML 定义的固定值；对 `Hero`，真正随升级变化的技能在 `Hero` 自己的容器里。做"英雄当前技能"逻辑务必走 `Hero` 文档中的接口，否则会得到偏低的固定值。
2. **`Culture` 为 null 的连锁问题**：许多派生逻辑（兵种名、外观标签、命名规则）依赖 `Culture`。XML 漏写 `culture` 引用或引用了不存在的文化，会导致生成/显示异常。`Deserialize` 中 `Culture = objectManager.ReadObjectReferenceFromXml<BasicCultureObject>("culture", node);` 若失败会保持 null。
3. **坏档注意（XML 契约）**：`Deserialize` 大量读取 XML 节点——`name` / `race` / `occupation` / `is_hero` / `is_obsolete` / `face_mesh_cache` / `skill_template` / `Skills` / `Equipments` / `face` / `Resistances` / `culture` / `age` / `level` / `default_group` / `formation_position_preference` / `default_equipment_set`。若缺 `skill_template` 且未成功新建，`DefaultCharacterSkills` 会是空白，角色技能全 0、战力异常；若 `face` / `BodyProperties` 解析失败会触发 `Debug.FailedAssert("cannot read body properties")`。自制加载或改 XML 时务必保证这些节点完整。
4. **`IsHero` 是虚属性，靠 `_isBasicHero` 字段**：基类 `IsHero => _isBasicHero`，由 XML `is_hero` 决定（`CharacterObject` 一般为 false，`Hero` 内嵌的 `CharacterObject` 一般为 true）。用 `IsHero` 判断"是否英雄"比用类型判断更稳。
5. **`HitPoints` 基类等于 `MaxHitPoints()`**：基类 `HitPoints => MaxHitPoints()`（按种族 `Monster` 的体型生命，不含等级加成）。`CharacterObject` / `Hero` 会重写加入等级/升级加成。直接用 `HitPoints` 当英雄当前血量会漏掉加成。
6. **`Equipment` 可为空装备**：当 `_equipmentRoster == null` 时，`Equipment` 返回 `MBEquipmentRoster.EmptyEquipment`，`AllEquipments` 返回只含 EmptyEquipment 的列表。`HasMount()` 读 `Equipment[10].Item` 判断是否有坐骑槽物品——空装备下为 null，不会崩但返回 false。
7. **不要跨 Mission 缓存 `Agent.Character` 当新引用**：`BasicCharacterObject` 本身是 `MBObjectBase`，靠 `StringId` 长期存在；但"某个具体 Agent 的角色快照"不应跨场景持有。需要跨场景的是 `StringId` 或 `CharacterObject`/`Hero` 引用本身，而不是战场期产生的临时关联状态。
8. **`IsSoldier` 由 occupation 决定**：`Deserialize` 中 `IsSoldier = occupation 文本含 "soldier"（不区分大小写）`。它影响 AI/编队与可被招募等逻辑；误设 occupation 会改变角色行为。

## 成员说明

下面按 mod 实际用到的时机分组。构造与 `Deserialize` 由引擎驱动，mod 一般只读其它成员。

### 身份与基础属性（读取用）

#### `public virtual TextObject Name { get; }` / `public override TextObject GetName()`
显示名。基类返回 `_basicName`，由 `Deserialize` 的 `name` 属性或 `SetName` 设置；`ToString()` 也返回它。**调用时机**：UI、对话、日志随时可读。

#### `public virtual bool IsHero => _isBasicHero;`
是否为英雄角色（由 XML `is_hero` 决定）。**用途**：区分英雄与普通兵种，比类型判断更稳。**注意**：`Hero` 类本身不在此类型体系内，判断英雄靠的是这个标志 + `HeroObject`。

#### `public virtual bool IsFemale { get; set; }`
性别。XML `is_female` 决定，运行时可写（捏脸/变身）。

#### `public int Race { get; set; }`
种族 id（影响 `FaceGen` 与 `Monster` 体型）。XML `race` 决定。

#### `public virtual float Age { get; set; }`
年龄，影响外观与属性上限。XML `age` 或缺省取 `BodyPropertyMax.Age` 与 20 的较大值。

#### `public virtual int Level { get; set; }`
等级，影响 `GetPower`、`SkillFactor`、`GetBattleTier`。XML `level` 缺省为 1。

#### `public BasicCultureObject Culture { get; set; }`
所属文化。**用途**：兵种、外观、命名、阵营逻辑。**风险**：可为 null（见风险 2），使用前判空。

#### `public bool IsSoldier { get; private set; }`
是否士兵（XML `occupation` 含 "soldier"）。影响 AI/编队/招募。**调用时机**：只读。

#### `public bool IsObsolete { get; private set; }`
是否已弃用（XML `is_obsolete`），用于过滤过时兵种。

#### `public virtual bool IsPlayerCharacter => Game.Current.PlayerTroop == this;`
是否为玩家主角。基类按"角色是否等于 `Game.Current.PlayerTroop`"判断。

### 兵种与战斗判定（读取用）

#### `public bool IsInfantry`
是否步兵：非远程且非骑兵（`!IsRanged && !IsMounted`）。由派生属性组合。

#### `public virtual bool IsMounted` / `public virtual bool IsRanged`
是否骑兵 / 远程。基类由 `DefaultFormationClass.IsMounted()` / `IsRanged()` 推导（`_isMounted` / `_isRanged` 在 `Deserialize` 按 `default_group` 设置）。

#### `public FormationClass DefaultFormationClass { get; protected set; }` / `public int DefaultFormationGroup`
默认编队类与编队组。XML `default_group` 决定（解析为 `FormationClass`）。**用途**：决定该角色在战场默认进哪个阵形。

#### `public virtual FormationClass GetFormationClass()`
返回 `DefaultFormationClass`。供编队/AI 分配阵形。

#### `public float KnockbackResistance` / `KnockdownResistance` / `DismountResistance`
抗击退 / 击倒 / 落马，已归一化到 0–1（XML `Resistances` 的 `knockback/knockdown/dismount` 百分值 ×0.01 并 clamp）。

#### `public FormationPositionPreference FormationPositionPreference`
编队站位偏好（前/中/后）。XML `formation_position_preference`，缺省 `Middle`。

#### `public float SkillFactor => Min(Level, 32) / 32f`
技能影响因子，等级封顶 32。供成长/战力曲线。

### 身体与外观（读取/生成用）

#### `public virtual MBBodyProperty BodyPropertyRange { get; protected set; }`
体型范围（min/max 体型）。XML `face`/`face_key_template` 提供，缺省注册一个空 `MBBodyProperty`。

#### `public virtual BodyProperties GetBodyPropertiesMin(bool returnBaseValue = false)` / `GetBodyPropertiesMax(bool ...)`
体型上下限，直接取 `BodyPropertyRange.BodyPropertyMin/Max`。

#### `public virtual BodyProperties GetBodyProperties(Equipment equipment, int seed = -1)`
由 `FaceGen.GetRandomBodyProperties` 按种族、性别、装备发型覆盖、seed 与体型标签随机生成一套外观。**用途**： battlefield/捏脸时生成具体脸。**调用时机**：需要为新单位生成外观时。

#### `public virtual void UpdatePlayerCharacterBodyProperties(BodyProperties properties, int race, bool isFemale)`
更新玩家角色体型范围（初始化 `BodyPropertyRange` 为同一组 properties）并改写 `Race` / `IsFemale`。**用途**：角色创建/理发。**副作用**：改动体型范围与种族/性别，影响后续 `GetBodyProperties`。

#### `public int GetDefaultFaceSeed(int rank)`
确定性面部种子：`StringId.GetDeterministicHashCode() * 6791 + rank * 197` 取正后 % 2000。**用途**：稳定复现某 rank 的脸。

#### `public float FaceDirtAmount { get; set; }`
面部污垢量（0–1 视觉），可写。

### 装备（读取用）

#### `public virtual Equipment Equipment`
默认装备，来自 `_equipmentRoster.DefaultEquipment`；roster 为 null 时返回 `MBEquipmentRoster.EmptyEquipment`。

#### `public virtual IEnumerable<Equipment> BattleEquipments` / `CivilianEquipments`
战斗 / 平民装备集（`AllEquipments` 按 `IsBattle` / `IsCivilian` 过滤）。

#### `public virtual Equipment FirstBattleEquipment` / `RandomBattleEquipment` / `FirstCivilianEquipment` / `RandomCivilianEquipment`
第一个/随机的战斗或平民装备。

#### `public virtual Equipment GetRandomEquipment`
随机一个非空装备（按 `!x.IsEmpty()`）。

#### `public Equipment GetFirstEquipment(Func<Equipment, bool> predicate)`
按谓词取第一个匹配装备，无匹配则返回 `Equipment`（默认）。**用途**：取"符合条件的第一套"。

#### `public void InitializeEquipmentsOnLoad(BasicCharacterObject character)`
读档时把另一个角色的 `_equipmentRoster` 拷贝过来。**副作用**：覆盖本角色的装备名册引用。**调用时机**：引擎反序列化后由 `FillFrom` 调用，mod 一般不直接调。

#### `public bool HasMount()`
装备槽 `[10]`（坐骑槽）是否有物品。**用途**：快速判断是否骑乘单位。

### 属性与战力（计算用）

#### `public virtual int MaxHitPoints()`
按种族 `Monster` 的基础生命：`FaceGen.GetBaseMonsterFromRace(Race).HitPoints`。**注意**：不含等级加成（见风险 5）。

#### `public virtual int HitPoints => MaxHitPoints();`
当前生命（基类等于上限）。`CharacterObject`/`Hero` 会重写。

#### `public virtual float GetPower()`
综合战力：`(Level+10)^2 * 0.0025 + 0.2`。等级驱动。

#### `public virtual float GetBattlePower()` / `GetMoraleResistance()`
战斗战力 / 士气抗性。基类均返回 `1f`，由子类（如 `CharacterObject`）按数据重写。

#### `public virtual int GetBattleTier()`
战斗层级：英雄恒 7；否则按 `Level` 计算 `Clamp(Ceil((Level-5)/5), 0, 7)`。

#### `public virtual int GetMountKeySeed()`
坐骑外观种子（基类 `MBRandom.RandomInt()`）。

#### `public float GetStepSize()`
步幅：`Min(0.8 + 0.2 * Athletics * 0.00333, 1)`。依赖 `GetSkillValue(DefaultSkills.Athletics)`。

#### `public MBCharacterSkills GetDefaultCharacterSkills()`
默认技能容器（`DefaultCharacterSkills`，XML `skill_template`）。`GetSkillValue` 的数据源。

#### `public virtual int GetSkillValue(SkillObject skill)`
从 `DefaultCharacterSkills` 读技能值。**重要**：这是基础模板值，不是英雄实时值（见风险 1）。

### 生命周期 / 序列化（引擎调用）

#### `public BasicCharacterObject()`
构造时把 `DefaultFormationClass` 设为 `FormationClass.Infantry`。

#### `public override void Deserialize(MBObjectManager objectManager, XmlNode node)`
从 XML 反序列化全部角色数据（名字、种族、职业、文化、技能模板、装备、外观、抗性）。**调用时机**：`MBObjectManager` 加载模块数据时调用，mod 不应直接调；自定义角色需遵守其 XML 契约（见风险 3）。

## 真实获取与调用示例

### 示例 1：取得一个兵种角色并读取通用属性

`CharacterObject` 是 `BasicCharacterObject` 的子类，经 `MBObjectManager` 按 `StringId` 取得。下面展示真实可用的读取路径（用到 `MBObjectManager`、`CharacterObject`、`DefaultSkills`）：

```csharp
using TaleWorlds.Core;
using TaleWorlds.CampaignSystem;
using TaleWorlds.ObjectSystem;

// 通过 MBObjectManager 按 StringId 取得一个 CharacterObject（BasicCharacterObject 的子类）
CharacterObject troop = MBObjectManager.Instance.GetObject<CharacterObject>("looters");
if (troop != null)
{
    TextObject name = troop.Name;                       // 显示名
    BasicCultureObject culture = troop.Culture;         // 文化（可能为 null，使用前判空）
    int level = troop.Level;
    bool isRanged = troop.IsRanged;                     // 是否远程兵种
    int hp = troop.MaxHitPoints();                      // 按种族的基础生命
    int athletics = troop.GetSkillValue(DefaultSkills.Athletics); // 基础模板技能值

    BasicCharacterObject asBase = troop;                // 向上转型，统一处理任意角色
    _ = asBase.IsHero;
}
```

### 示例 2：在战场 Mission 中读取 Agent 的角色身份

`Agent.Character` 的类型就是 `BasicCharacterObject`（实际为 `CharacterObject`）。下面展示如何在回调里统一处理任何角色，并区分英雄：

```csharp
using TaleWorlds.MountAndBlade;
using TaleWorlds.Core;

public sealed class CharacterProbe : MissionLogic
{
    public override void OnAgentCreated(Agent agent)
    {
        base.OnAgentCreated(agent);
        BasicCharacterObject character = agent.Character; // 实际是 CharacterObject（可能代表英雄）
        if (character != null)
        {
            string displayName = character.Name.ToString();
            bool mounted = character.IsMounted;
            int tier = character.GetBattleTier();
            // HeroObject 定义在 CharacterObject 上，需要转型才能访问
            if (character.IsHero && character is CharacterObject co && co.HeroObject != null)
            {
                Hero hero = co.HeroObject; // 取对应的具体英雄
                _ = hero.Name;
            }
        }
    }
}
```

注意：`Agent.Character` 返回的是 `BasicCharacterObject`，但 `Hero` 类本身不在这里——英雄通过 `IsHero` + `HeroObject`（在 `CharacterObject` 上）访问。

## 版本注记

本文以 v1.4.5 的 `TaleWorlds.Core.BasicCharacterObject` 源码为准。其公开成员（`Name` / `Culture` / `Race` / `Age` / `Level` / `IsHero` / `IsFemale` / `IsSoldier` / `IsPlayerCharacter` / 兵种判定 / `DefaultFormationClass` / 抗性 / 装备访问 / `MaxHitPoints` / `GetSkillValue` / `GetBattleTier` / `Deserialize`）在该版本稳定。继承关系上，`CharacterObject : BasicCharacterObject` 而 `Hero : MBObjectBase`（内嵌 `CharacterObject`），这是 v1.4.5 的实际结构。

## 导航

- ↑ [MBObjectBase](../../core/MBObjectBase) — 基类，提供 StringId 与反序列化框架
- ↔ 同目录：[SkillObject](../SkillObject) · [ItemObject](../ItemObject) · [Equipment](../Equipment) · [Banner](../Banner) · [BasicCultureObject](../BasicCultureObject) · [MBCharacterSkills](../MBCharacterSkills) · [Monster](../Monster) · [FaceGen](../FaceGen) · [IAgentOriginBase](../IAgentOriginBase)
- ↓ 子类 / 关联对象：[CharacterObject](../../campaign/CharacterObject) · [Hero](../../campaign/Hero)
- 战场连接：[Agent](../../mission/Agent)（其 `Character` 即本类型）
