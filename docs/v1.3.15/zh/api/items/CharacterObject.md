# CharacterObject / 角色对象

**Namespace**: TaleWorlds.CampaignSystem  
**File**: `bannerlord-1.3.15/TaleWorlds.CampaignSystem/CharacterObject.cs`  
**Base Class**: BasicCharacterObject (TaleWorlds.Core)  
**Purpose**: 战役模式中的角色定义,包括NPC、士兵、英雄等

## 关键属性 / Key Properties

| 属性 | 类型 | 描述 |
|------|------|------|
| HeroObject | Hero | 如果是英雄角色,返回关联的Hero对象 |
| CharacterObject | CharacterObject | 角色对象自身引用 |
| Equipment | Equipment | 获取角色装备(如果是Hero则返回战斗装备) |
| BattleEquipments | IEnumerable | 所有战斗装备 |
| CivilianEquipments | IEnumerable | 所有平民装备 |
| StealthEquipments | IEnumerable | 所有潜行装备 |
| Level | int | 角色等级(如果是Hero则返回Hero等级) |
| HitPoints | int | 当前生命值 |
| MaxHitPoints() | int | 最大生命值 |
| IsHero | bool | 是否为英雄角色 |
| IsFemale | bool | 是否为女性角色 |
| Culture | CultureObject | 角色文化/阵营 |
| Occupation | Occupation | 角色职业 |

## 关键方法 / Key Methods

| 方法 | 签名 | 描述 |
|------|------|------|
| CreateFrom | `static CharacterObject CreateFrom(CharacterObject character, StaticBodyProperties? staticBodyProperties = null)` | 从现有角色创建新实例 |
| GetBodyPropertiesMin | `BodyProperties GetBodyPropertiesMin(bool returnBaseValue = false)` | 获取最小身体属性 |
| GetBodyPropertiesMax | `BodyProperties GetBodyPropertiesMax(bool returnBaseValue = false)` | 获取最大身体属性 |

## 静态属性 / Static Properties

| 属性 | 类型 | 描述 |
|------|------|------|
| PlayerCharacter | CharacterObject | 当前玩家角色 |
| OneToOneConversationCharacter | CharacterObject | 当前一对一对话的角色 |
| ConversationCharacters | IEnumerable | 当前对话中的所有角色 |

## 使用示例 / Usage Example

```csharp
// 获取玩家角色
CharacterObject player = CharacterObject.PlayerCharacter;

// 检查是否为英雄
if (player.IsHero)
{
    Hero hero = player.HeroObject;
    // 处理英雄特有属性
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

// 获取等级和生命值
int level = player.Level;
int hp = player.HitPoints;
int maxHp = player.MaxHitPoints();

// 创建角色副本
CharacterObject clone = CharacterObject.CreateFrom(player);

// 检查角色职业
if (player.Occupation == Occupation.Soldier)
{
    // 是士兵
}
```

---

# BasicCharacterObject / 基础角色对象

**Namespace**: TaleWorlds.Core  
**File**: `bannerlord-1.3.15/TaleWorlds.Core/BasicCharacterObject.cs`  
**Purpose**: 核心游戏引擎中的角色基础定义,定义了角色的基本属性和装备

## 关键属性 / Key Properties

| 属性 | 类型 | 描述 |
|------|------|------|
| Name | TextObject | 角色名称 |
| Level | int | 角色等级 |
| Race | int | 角色种族 |
| IsFemale | bool | 是否为女性 |
| Culture | BasicCultureObject | 角色文化 |
| Equipment | Equipment | 默认装备 |
| BattleEquipments | IEnumerable | 战斗装备列表 |
| CivilianEquipments | IEnumerable | 平民装备列表 |
| IsHero | bool | 是否为英雄 |
| IsSoldier | bool | 是否为士兵 |
| IsMounted | bool | 是否为骑兵 |
| IsRanged | bool | 是否为远程单位 |
| IsInfantry | bool | 是否为步兵 |
| DefaultFormationClass | FormationClass | 默认阵型类别 |
| BodyPropertyRange | MBBodyProperty | 身体属性范围 |

## 关键方法 / Key Methods

| 方法 | 签名 | 描述 |
|------|------|------|
| MaxHitPoints | `int MaxHitPoints()` | 计算最大生命值 |
| GetSkillValue | `int GetSkillValue(SkillObject skill)` | 获取技能值 |
| GetPower | `float GetPower()` | 获取角色威力值 |
| GetBattlePower | `float GetBattlePower()` | 获取战斗威力值 |
| GetBattleTier | `int GetBattleTier()` | 获取战斗等级(1-7) |
| GetBodyProperties | `BodyProperties GetBodyProperties(Equipment equipment, int seed = -1)` | 获取身体属性 |
| HasMount | `bool HasMount()` | 是否拥有坐骑 |
| GetStepSize | `float GetStepSize()` | 获取步进大小 |

## 使用示例 / Usage Example

```csharp
// 获取角色模板
BasicCharacterObject troop = MBObjectManager.Instance.GetObject<BasicCharacterObject>("vlandian_footman");

// 检查角色类型
if (troop.IsInfantry)
{
    // 是步兵
}
if (troop.IsMounted)
{
    // 是骑兵
}

// 获取装备
Equipment equipment = troop.Equipment;

// 获取技能值
int oneHandedSkill = troop.GetSkillValue(DefaultSkills.OneHanded);

// 获取战斗等级
int tier = troop.GetBattleTier();

// 检查是否有坐骑
bool hasMount = troop.HasMount();

// 获取身体属性(用于生成角色外观)
BodyProperties bodyProps = troop.GetBodyProperties(equipment, randomSeed);
```
