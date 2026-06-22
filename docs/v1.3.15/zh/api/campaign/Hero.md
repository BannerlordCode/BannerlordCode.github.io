<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Hero`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
- [🔀 跨版本对比 /versions/Hero](/versions/Hero)
<!-- END BREADCRUMB -->
# Hero

**命名空间:** TaleWorlds.CampaignSystem  
**模块:** TaleWorlds.CampaignSystem  
**类型:** sealed class（继承 `MBObjectBase`，实现 `ITrackableCampaignObject`、`ITrackableBase`、`IRandomOwner`）

`Hero` 表示战役系统中的一个具名角色（领主、同伴、要人、流浪者、玩家本人等）。它是模组开发者与角色交互的主要入口：查询角色状态、修改金币/关系/技能、遍历存活角色、定位其所属家族或队伍等。

## 概述

每个 `Hero` 关联一个 `CharacterObject`（战斗模板），并持有姓名、文化、年龄、家族、配偶/父母/子女等关系、所属队伍、当前所在地、金币与生命值等状态。角色的生死/活动状态由 `HeroState`（`CharacterStates` 枚举）描述，并提供 `IsAlive`、`IsDead`、`IsPrisoner`、`IsActive` 等便捷属性。

模组通常不应直接 `new Hero(...)`（构造会向 `CampaignObjectManager` 注册）；应通过 `Hero.Find`、`Hero.FindFirst`、`Hero.FindAll` 或 `Hero.AllAliveHeroes` 获取既有角色，再读写其属性。

## 开发用例 / Developer Use Cases

### 用例 1: 按 StringId 查找角色并修改金币

**场景**: 模组启动时需要定位某个 XML 中定义的领主，并给予或扣除金币。

```csharp
// 按 StringId 查找（委托给 CampaignObjectManager.Find<Hero>）
Hero lord = Hero.Find("lord_1_1");
if (lord != null && lord.IsAlive)
{
    // 增量修改金币，内部夹至 >= 0
    lord.ChangeHeroGold(1000);
}
```

**要点**: `Hero.Find` 未找到返回 `null`，调用前务必判空；`ChangeHeroGold` 接受负数用于扣款。

### 用例 2: 修改角色与玩家的关系

**场景**: 完成任务后提升 NPC 对玩家的好感度。

```csharp
int current = lord.GetRelation(Hero.MainHero);
// SetPersonalRelation 会夹在外交模型的关系上下限内
lord.SetPersonalRelation(Hero.MainHero, current + 5);
```

**要点**: 用 `GetRelation` 读取经外交模型计算的生效值；不要直接写 `Gold` 属性，用 `ChangeHeroGold` 走增量逻辑。

### 用例 3: 遍历某文化的所有存活领主

**场景**: 统计当前存活角色、按文化筛选。

```csharp
foreach (Hero hero in Hero.AllAliveHeroes)
{
    if (hero.IsLord && hero.Culture == culture)
    {
        // 处理每个领主
    }
}
```

**要点**: `AllAliveHeroes` 只含存活角色；死亡/禁用角色用 `DeadOrDisabledHeroes`。

### 用例 4: 用谓词查找满足条件的角色

**场景**: 找出某王国中所有家族领袖。

```csharp
Hero leader = Hero.FindFirst(h => h.IsClanLeader && h.Clan?.Kingdom == kingdom);
```

**要点**: `FindFirst` 返回第一个匹配项，未找到返回 `null`；用 `FindAll` 获取全部匹配。

## 主要属性

| 名称 | 类型 | 描述 |
|------|------|------|
| Name | TextObject | 角色全名（只读） |
| FirstName | TextObject | 角色名（只读） |
| Culture | CultureObject | 所属文化（公共字段） |
| IsFemale | bool | 是否为女性 |
| Age | float | 当前年龄（由出生/死亡日推算） |
| BirthDay | CampaignTime | 出生时刻 |
| DeathDay | CampaignTime | 死亡时刻 |
| Level | int | 等级（公共字段） |
| HitPoints | int | 当前生命值，赋值会被夹在 [1, MaxHitPoints] |
| MaxHitPoints | int | 最大生命值 |
| IsWounded | bool | 是否负伤（HitPoints ≤ WoundedHealthLimit） |
| Gold | int | 持有金币，赋值会被夹至 ≥ 0 |
| Power | float | 影响力（power） |
| HeroState | Hero.CharacterStates | 当前状态枚举 |
| Occupation | Occupation | 职业（Lord/Merchant/Wanderer...） |
| Clan | Clan | 所属家族（若为同伴则返回 CompanionOf） |
| CompanionOf | Clan | 作为同伴所属的家族 |
| SupporterOf | Clan | 作为要人支持的家族 |
| GovernorOf | Town | 担任总督的城镇 |
| MapFaction | IFaction | 地图阵营（王国或家族） |
| IsClanLeader / IsKingdomLeader / IsFactionLeader | bool | 是否为家族/王国/阵营领袖 |
| PartyBelongedTo | MobileParty | 所属移动队伍（可为 null） |
| PartyBelongedToAsPrisoner | PartyBase | 作为囚犯所属的队伍（可为 null） |
| StayingInSettlement | Settlement | 当前逗留的定居点 |
| BornSettlement | Settlement | 出生地定居点 |
| HomeSettlement | Settlement | 计算得出的“主”定居点 |
| CurrentSettlement | Settlement | 当前所在定居点（综合队伍/囚犯/逗留推算） |
| Father / Mother / Spouse | Hero | 父/母/配偶 |
| ExSpouses | MBReadOnlyList&lt;Hero> | 前任配偶列表 |
| Children | MBList&lt;Hero> | 子女列表 |
| Siblings | IEnumerable&lt;Hero> | 兄弟姐妹 |
| CharacterObject | CharacterObject | 关联的战斗角色模板 |
| BattleEquipment / CivilianEquipment / StealthEquipment | Equipment | 战斗/便装/潜行装备 |
| BannerItem | EquipmentElement | 旗帜物品 |
| ClanBanner | Banner | 家族旗帜 |
| HeroDeveloper | HeroDeveloper | 角色发展器（技能/经验） |
| IsKnownToPlayer | bool | 玩家是否已知该角色 |
| HasMet | bool | 是否与玩家见过面 |
| LastMeetingTimeWithPlayer | CampaignTime | 最近一次与玩家见面时间 |
| IsPlayerCompanion | bool | 是否为玩家同伴 |
| IsHumanPlayerCharacter | bool | 是否为玩家本人 |
| IsMinorFactionHero | bool | 是否为小阵营英雄 |
| IsNotable / IsLord / IsWanderer / IsMerchant / IsGangLeader 等 | bool | 基于 Occupation 的便捷判断 |
| IsAlive / IsDead / IsPrisoner / IsActive / IsFugitive / IsReleased / IsNotSpawned / IsDisabled / IsTraveling | bool | 基于 HeroState 的便捷判断 |
| IsChild | bool | 是否未成年 |
| IsPregnant | bool | 是否怀孕（公共字段） |
| VolunteerTypes | CharacterObject[] | 可招募志愿兵模板（长度 6，公共字段） |
| SpecialItems | MBList&lt;ItemObject> | 特殊物品（公共字段） |
| OwnedWorkshops | MBReadOnlyList&lt;Workshop> | 拥有的工坊 |
| OwnedCaravans / OwnedAlleys | List<...> | 拥有的商队/巷子 |
| PreferredUpgradeFormation | FormationClass | 升级偏好兵种阵型 |
| EncyclopediaText / EncyclopediaLink / EncyclopediaLinkWithName | ... | 百科文本与链接 |
| DeathMark | KillCharacterAction.KillCharacterActionDetail | 死亡标记 |
| DeathMarkKillerHero | Hero | 死亡标记的击杀者 |

## 静态成员

| 名称 | 类型 | 描述 |
|------|------|------|
| MainHero | Hero | 玩家主角 |
| AllAliveHeroes | MBReadOnlyList&lt;Hero> | 所有存活角色 |
| DeadOrDisabledHeroes | MBReadOnlyList&lt;Hero> | 所有死亡/禁用角色 |
| OneToOneConversationHero | Hero | 当前一对一对话中的对方角色 |
| IsMainHeroIll | bool | 主角是否生病 |
| MaximumNumberOfVolunteers | int | 常量，= 6 |

## 静态查询方法

### Find

```csharp
public static Hero Find(string stringId)
```

按 `StringId` 查找角色（委托给 `Campaign.Current.CampaignObjectManager.Find<Hero>`）。未找到返回 `null`。

### FindFirst

```csharp
public static Hero FindFirst(Func<Hero, bool> predicate)
```

返回第一个满足谓词的存活/已注册角色，未找到返回 `null`。

### FindAll

```csharp
public static IEnumerable<Hero> FindAll(Func<Hero, bool> predicate)
```

返回所有满足谓词的角色。

## 主要方法

### SetName

```csharp
public void SetName(TextObject fullName, TextObject firstName)
```

设置全名与名；若该角色是所属队伍的领袖，会清除队伍缓存名称。

### SetBirthDay / SetDeathDay

```csharp
public void SetBirthDay(CampaignTime birthday)
public void SetDeathDay(CampaignTime deathDay)
```

设置出生/死亡时刻。

### ChangeState

```csharp
public void ChangeState(Hero.CharacterStates newState)
```

切换角色状态，会通知所属家族与 `CampaignObjectManager`；切到 `Traveling` 时触发 `OnHeroGetsBusy`。

### ChangeHeroGold

```csharp
public void ChangeHeroGold(int changeAmount)
```

按增量修改金币（可正可负，内部经 `Gold` 夹至 ≥ 0，并防溢出）。

### Heal / IsHealthFull

```csharp
public void Heal(int healAmount, bool addXp = false)
public bool IsHealthFull()
```

治疗角色（治疗量经 `PartyHealingModel` 调整）；判断是否满血。

### MakeWounded / AddDeathMark

```csharp
public void MakeWounded(Hero killerHero = null, KillCharacterAction.KillCharacterActionDetail deathMarkDetail = KillCharacterAction.KillCharacterActionDetail.None)
public void AddDeathMark(Hero killerHero = null, KillCharacterAction.KillCharacterActionDetail deathMarkDetail = KillCharacterAction.KillCharacterActionDetail.None)
```

将角色置为负伤（生命值设为 1）/打上死亡标记。

### 技能、属性、特质、特长

```csharp
public int GetSkillValue(SkillObject skill)
public void SetSkillValue(SkillObject skill, int value)
public void AddSkillXp(SkillObject skill, float xpAmount)
public void ClearSkills()

public int GetAttributeValue(CharacterAttribute charAttribute)
public void ClearAttributes()

public int GetTraitLevel(TraitObject trait)
public void SetTraitLevel(TraitObject trait, int value)
public void ClearTraits()

public bool GetPerkValue(PerkObject perk)
public void ClearPerks()
```

分别读写技能值、属性值、特质等级、特长是否开启，并提供清空方法。

### 关系

```csharp
public float GetRelationWithPlayer()
public int GetRelation(Hero otherHero)
public int GetBaseHeroRelation(Hero otherHero)
public void SetPersonalRelation(Hero otherHero, int value)
public bool IsEnemy(Hero otherHero)
public bool IsFriend(Hero otherHero)
public bool IsNeutral(Hero otherHero)
```

`GetRelation` 返回经外交模型计算的有效关系值；与自身比较返回 0。`SetPersonalRelation` 会夹在 `DiplomacyModel` 的关系上下限内。

### 其它

```csharp
public void AddPower(float value)
public void UpdatePowerModifier()
public void UpdateHomeSettlement()
public void UpdateLastKnownClosestSettlement(Settlement settlement)
public void SetNewOccupation(Occupation occupation)
public void AddInfluenceWithKingdom(float additionalInfluence)
public void AddOwnedWorkshop(Workshop workshop)
public void RemoveOwnedWorkshop(Workshop workshop)
public void ResetEquipments()
public bool CanLeadParty()
public bool CanMarry()
public bool CanDie(KillCharacterAction.KillCharacterActionDetail causeOfDeath)
public bool CanBecomePrisoner()
public bool CanBeGovernorOrHavePartyRole()
public bool CanHaveCampaignIssues()
public bool CanMoveToSettlement()
public bool CanHeroEquipmentBeChanged()
public Vec3 GetPositionAsVec3()
public CampaignVec2 GetCampaignPosition()
public IMapPoint GetMapPoint()
public void SetHasMet()
public void SetTextVariables()
public void ModifyHair(int hair, int beard, int tattoo)
```

## CharacterStates 枚举

```csharp
public enum CharacterStates
{
    NotSpawned,
    Active,
    Fugitive,
    Prisoner,
    Released,
    Dead,
    Disabled,
    Traveling
}
```

## 使用示例

```csharp
// 按 StringId 查找角色
Hero lord = Hero.Find("lord_1_1");
if (lord != null && lord.IsAlive)
{
    // 赠予金币
    lord.ChangeHeroGold(1000);

    // 提升与玩家的关系
    lord.SetPersonalRelation(Hero.MainHero, lord.GetRelation(Hero.MainHero) + 5);

    // 加技能经验
    lord.AddSkillXp(DefaultSkills.OneHanded, 500f);
}

// 遍历某文化的所有存活领主
foreach (Hero hero in Hero.AllAliveHeroes)
{
    if (hero.IsLord && hero.Culture == culture)
    {
        // ...
    }
}

// 用谓词查找
Hero target = Hero.FindFirst(h => h.IsClanLeader && h.Clan?.Kingdom == kingdom);
```

## 参见

- [MobileParty](./MobileParty.md)
- [Clan](./Clan.md)
- [Kingdom](./Kingdom.md)
- [PartyBase](./PartyBase.md)
