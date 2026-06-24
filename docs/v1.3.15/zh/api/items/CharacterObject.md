<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CharacterObject / 角色对象`
- [← 本领域 / 返回 items](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CharacterObject / 角色对象

## 心智模型

先把 `CharacterObject` 当作这个子系统的入口或数据节点来理解：先看属性代表什么状态，再看方法允许你做什么。

**Namespace**: TaleWorlds.CampaignSystem  
**File**: 

`bannerlord-1.3.15/TaleWorlds.CampaignSystem/CharacterObject.cs

`  
**Base Class**: BasicCharacterObject (TaleWorlds.Core)  
**Purpose**: 战役模式中的角色定义,包括NPC、士兵、英雄等


<!-- BEGIN DEV-USE-CASES -->

## 开发用?/ Developer Use Cases

### 用例 1: 获取玩家角色模板

**场景**: 引用玩家角色对象，用于战斗场景生成或 UI 显示?
`

`

`csharp
CharacterObject player = CharacterObject.PlayerCharacter;
// player.HeroObject 即对应的 Hero 实例
Hero playerHero = player.HeroObject;
`

`

`

**要点**: 

`PlayerCharacter

` 是静态属性；非英雄角色（普通兵种）?

`HeroObject

` ?

`null

`?
### 用例 2: 从现有角色创建副?
**场景**: 动态生成一个基于模板的角色（如雇佣兵、特?NPC）?
`

`

`csharp
CharacterObject template = MBObjectManager.Instance.GetObject&lt;CharacterObject&gt;("bandit_bandit");
CharacterObject clone = CharacterObject.CreateFrom(template);
// clone 有独立的装备与属性，但共享视觉资?

`

`

`

**要点**: 

`CreateFrom

` 是静态工厂；传入 

`staticBodyProperties

` 可覆盖面部生成?
### 用例 3: 读取角色的战斗装?
**场景**: 检查或修改角色进入战斗时的装备?
`

`

`csharp
Equipment battleEquipment = character.FirstBattleEquipment;
if (battleEquipment != null && battleEquipment.HasWeapon())
{
    // 角色有武?}
`

`

`

**要点**: 

`FirstBattleEquipment

` 是只读副本；要修改装备需通过 

`RandomBattleEquipment

` 或在生成时设置?
### 用例 4: 遍历对话中的角色

**场景**: 在对话系统中处理参与者?
`

`

`csharp
foreach (CharacterObject c in CharacterObject.ConversationCharacters)
{
    // 处理对话场景中的每个角色
}
`

`

`

**要点**: 

`ConversationCharacters

` 仅在对话活跃期间有效；对话结束后集合为空?
<!-- END DEV-USE-CASES -->

## 关键属?/ Key Properties

\| 属?\| 类型 \| 描述 \|
\|------\|------\|------\|
\| HeroObject \| Hero \| 如果是英雄角?返回关联的Hero对象 \|
\| CharacterObject \| CharacterObject \| 角色对象自身引用 \|
\| Equipment \| Equipment \| 获取角色装备(如果是Hero则返回战斗装? \|
\| BattleEquipments \| IEnumerable \| 所有战斗装?\|
\| CivilianEquipments \| IEnumerable \| 所有平民装?\|
\| StealthEquipments \| IEnumerable \| 所有潜行装?\|
\| Level \| int \| 角色等级(如果是Hero则返回Hero等级) \|
\| HitPoints \| int \| 当前生命?\|
\| MaxHitPoints() \| int \| 最大生命?\|
\| IsHero \| bool \| 是否为英雄角?\|
\| IsFemale \| bool \| 是否为女性角?\|
\| Culture \| CultureObject \| 角色文化/阵营 \|
\| Occupation \| Occupation \| 角色职业 \|

## 关键方法 / Key Methods

\| 方法 \| 签名 \| 描述 \|
\|------\|------\|------\|
\| CreateFrom \| 

`static CharacterObject CreateFrom(CharacterObject character, StaticBodyProperties? staticBodyProperties = null)

` \| 从现有角色创建新实例 \|
\| GetBodyPropertiesMin \| 

`BodyProperties GetBodyPropertiesMin(bool returnBaseValue = false)

` \| 获取最小身体属?\|
\| GetBodyPropertiesMax \| 

`BodyProperties GetBodyPropertiesMax(bool returnBaseValue = false)

` \| 获取最大身体属?\|

## 静态属?/ Static Properties

\| 属?\| 类型 \| 描述 \|
\|------\|------\|------\|
\| PlayerCharacter \| CharacterObject \| 当前玩家角色 \|
\| OneToOneConversationCharacter \| CharacterObject \| 当前一对一对话的角?\|
\| ConversationCharacters \| IEnumerable \| 当前对话中的所有角?\|

## 使用示例 / Usage Example

`

`

`csharp
// 获取玩家角色
CharacterObject player = CharacterObject.PlayerCharacter;

// 检查是否为英雄
if (player.IsHero)
{
    Hero hero = player.HeroObject;
    // 处理英雄特有属?
}

// 获取角色装备
Equipment equipment = player.Equipment;

// 遍历战斗装备
foreach (Equipment eq in player.BattleEquipments)
{
    // 处理装备
}

// 获取角色文化
CultureObject culture = player.Culture;

// 获取等级和生命?
int level = player.Level;
int hp = player.HitPoints;
int maxHp = player.MaxHitPoints();

// 创建角色副本
CharacterObject clone = CharacterObject.CreateFrom(player);

// 检查角色职?
if (player.Occupation == Occupation.Soldier)
{
    // 是士?
}
`

`

`

---

# BasicCharacterObject / 基础角色对象

**Namespace**: TaleWorlds.Core  
**File**: 

`bannerlord-1.3.15/TaleWorlds.Core/BasicCharacterObject.cs

`  
**Purpose**: 核心游戏引擎中的角色基础定义,定义了角色的基本属性和装备

## 关键属?/ Key Properties

\| 属?\| 类型 \| 描述 \|
\|------\|------\|------\|
\| Name \| TextObject \| 角色名称 \|
\| Level \| int \| 角色等级 \|
\| Race \| int \| 角色种族 \|
\| IsFemale \| bool \| 是否为女?\|
\| Culture \| BasicCultureObject \| 角色文化 \|
\| Equipment \| Equipment \| 默认装备 \|
\| BattleEquipments \| IEnumerable \| 战斗装备列表 \|
\| CivilianEquipments \| IEnumerable \| 平民装备列表 \|
\| IsHero \| bool \| 是否为英?\|
\| IsSoldier \| bool \| 是否为士?\|
\| IsMounted \| bool \| 是否为骑?\|
\| IsRanged \| bool \| 是否为远程单?\|
\| IsInfantry \| bool \| 是否为步?\|
\| DefaultFormationClass \| FormationClass \| 默认阵型类别 \|
\| BodyPropertyRange \| MBBodyProperty \| 身体属性范?\|

## 关键方法 / Key Methods

\| 方法 \| 签名 \| 描述 \|
\|------\|------\|------\|
\| MaxHitPoints \| 

`int MaxHitPoints()

` \| 计算最大生命?\|
\| GetSkillValue \| 

`int GetSkillValue(SkillObject skill)

` \| 获取技能?\|
\| GetPower \| 

`float GetPower()

` \| 获取角色威力?\|
\| GetBattlePower \| 

`float GetBattlePower()

` \| 获取战斗威力?\|
\| GetBattleTier \| 

`int GetBattleTier()

` \| 获取战斗等级(1-7) \|
\| GetBodyProperties \| 

`BodyProperties GetBodyProperties(Equipment equipment, int seed = -1)

` \| 获取身体属?\|
\| HasMount \| 

`bool HasMount()

` \| 是否拥有坐骑 \|
\| GetStepSize \| 

`float GetStepSize()

` \| 获取步进大小 \|

## 使用示例 / Usage Example

`

`

`csharp
// 获取角色模板
BasicCharacterObject troop = MBObjectManager.Instance.GetObject&lt;BasicCharacterObject&gt;("vlandian_footman");

// 检查角色类?
if (troop.IsInfantry)
{
    // 是步?
}
if (troop.IsMounted)
{
    // 是骑?
}

// 获取装备
Equipment equipment = troop.Equipment;

// 获取技能?
int oneHandedSkill = troop.GetSkillValue(DefaultSkills.OneHanded);

// 获取战斗等级
int tier = troop.GetBattleTier();

// 检查是否有坐骑
bool hasMount = troop.HasMount();

// 获取身体属?用于生成角色外观)
BodyProperties bodyProps = troop.GetBodyProperties(equipment, randomSeed);
`

`

`
