<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Hero`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
- [🔀 跨版本对比 /versions/Hero](/versions/Hero)
<!-- END BREADCRUMB -->
# Hero

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public sealed class Hero : MBObjectBase, ITrackableCampaignObject, ITrackableBase, IRandomOwner`
**Base:** `MBObjectBase`
**File:** `TaleWorlds.CampaignSystem/Hero.cs`

## 概述

`Hero` 位于 `TaleWorlds.CampaignSystem`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `StaticBodyProperties` | `public StaticBodyProperties StaticBodyProperties { get; set; }` |
| `Weight` | `public float Weight { get; set; }` |
| `Build` | `public float Build { get; set; }` |
| `BodyProperties` | `public BodyProperties BodyProperties { get; }` |
| `PassedTimeAtHomeSettlement` | `public float PassedTimeAtHomeSettlement { get; set; }` |
| `CanHaveRecruits` | `public bool CanHaveRecruits { get; }` |
| `CharacterObject` | `public CharacterObject CharacterObject { get; }` |
| `FirstName` | `public TextObject FirstName { get; }` |
| `Name` | `public TextObject Name { get; }` |
| `EncyclopediaText` | `public TextObject EncyclopediaText { get; set; }` |
| `EncyclopediaLink` | `public string EncyclopediaLink { get; }` |
| `EncyclopediaLinkWithName` | `public TextObject EncyclopediaLinkWithName { get; set; }` |
| `IsFemale` | `public bool IsFemale { get; set; }` |
| `BattleEquipment` | `public Equipment BattleEquipment { get; }` |
| `CivilianEquipment` | `public Equipment CivilianEquipment { get; }` |
| `StealthEquipment` | `public Equipment StealthEquipment { get; set; }` |
| `CaptivityStartTime` | `public CampaignTime CaptivityStartTime { get; }` |
| `PreferredUpgradeFormation` | `public FormationClass PreferredUpgradeFormation { get; }` |
| `HeroState` | `public Hero.CharacterStates HeroState { get; }` |
| `CharacterAttributes` | `public IReadOnlyPropertyOwner<CharacterAttribute> CharacterAttributes { get; set; }` |
| `IsMinorFactionHero` | `public bool IsMinorFactionHero { get; }` |
| `Issue` | `public IssueBase Issue { get; }` |
| `WoundedHealthLimit` | `public int WoundedHealthLimit { get; }` |
| `IsNoncombatant` | `public bool IsNoncombatant { get; set; }` |
| `CompanionOf` | `public Clan CompanionOf { get; set; }` |
| `CompanionsInParty` | `public IEnumerable<Hero> CompanionsInParty { get; }` |
| `Occupation` | `public Occupation Occupation { get; }` |
| `Template` | `public CharacterObject Template { get; }` |
| `IsDead` | `public bool IsDead { get; }` |
| `IsFugitive` | `public bool IsFugitive { get; }` |
| `IsPrisoner` | `public bool IsPrisoner { get; }` |
| `IsReleased` | `public bool IsReleased { get; }` |
| `IsActive` | `public bool IsActive { get; }` |
| `IsNotSpawned` | `public bool IsNotSpawned { get; }` |
| `IsDisabled` | `public bool IsDisabled { get; }` |
| `IsTraveling` | `public bool IsTraveling { get; }` |
| `IsAlive` | `public bool IsAlive { get; }` |
| `DeathMark` | `public KillCharacterAction.KillCharacterActionDetail DeathMark { get; }` |
| `DeathMarkKillerHero` | `public Hero DeathMarkKillerHero { get; }` |
| `LastKnownClosestSettlement` | `public Settlement LastKnownClosestSettlement { get; }` |
| `IsWanderer` | `public bool IsWanderer { get; }` |
| `IsTemplate` | `public bool IsTemplate { get; }` |
| `IsWounded` | `public bool IsWounded { get; }` |
| `IsPlayerCompanion` | `public bool IsPlayerCompanion { get; }` |
| `IsMerchant` | `public bool IsMerchant { get; }` |
| `IsPreacher` | `public bool IsPreacher { get; }` |
| `IsHeadman` | `public bool IsHeadman { get; }` |
| `IsGangLeader` | `public bool IsGangLeader { get; }` |
| `IsArtisan` | `public bool IsArtisan { get; }` |
| `IsRuralNotable` | `public bool IsRuralNotable { get; }` |
| `IsUrbanNotable` | `public bool IsUrbanNotable { get; }` |
| `IsSpecial` | `public bool IsSpecial { get; }` |
| `IsRebel` | `public bool IsRebel { get; }` |
| `IsCommander` | `public bool IsCommander { get; }` |
| `IsPartyLeader` | `public bool IsPartyLeader { get; }` |
| `IsNotable` | `public bool IsNotable { get; }` |
| `IsLord` | `public bool IsLord { get; }` |
| `MaxHitPoints` | `public int MaxHitPoints { get; set; }` |
| `HitPoints` | `public int HitPoints { get; set; }` |
| `BirthDay` | `public CampaignTime BirthDay { get; }` |
| `DeathDay` | `public CampaignTime DeathDay { get; }` |
| `Age` | `public float Age { get; }` |
| `IsChild` | `public bool IsChild { get; }` |
| `Power` | `public float Power { get; }` |
| `ClanBanner` | `public Banner ClanBanner { get; set; }` |
| `LastExaminedLogEntryID` | `public long LastExaminedLogEntryID { get; set; }` |
| `Clan` | `public Clan Clan { get; set; }` |
| `SupporterOf` | `public Clan SupporterOf { get; set; }` |
| `GovernorOf` | `public Town GovernorOf { get; set; }` |
| `MapFaction` | `public IFaction MapFaction { get; }` |
| `OwnedAlleys` | `public List<Alley> OwnedAlleys { get; }` |
| `IsFactionLeader` | `public bool IsFactionLeader { get; }` |
| `IsKingdomLeader` | `public bool IsKingdomLeader { get; }` |
| `IsClanLeader` | `public bool IsClanLeader { get; }` |
| `OwnedCaravans` | `public List<CaravanPartyComponent> OwnedCaravans { get; }` |
| `PartyBelongedTo` | `public MobileParty PartyBelongedTo { get; }` |
| `PartyBelongedToAsPrisoner` | `public PartyBase PartyBelongedToAsPrisoner { get; }` |
| `StayingInSettlement` | `public Settlement StayingInSettlement { get; set; }` |
| `IsHumanPlayerCharacter` | `public bool IsHumanPlayerCharacter { get; set; }` |
| `IsKnownToPlayer` | `public bool IsKnownToPlayer { get; set; }` |
| `HasMet` | `public bool HasMet { get; }` |
| `LastMeetingTimeWithPlayer` | `public CampaignTime LastMeetingTimeWithPlayer { get; set; }` |
| `BornSettlement` | `public Settlement BornSettlement { get; set; }` |
| `HomeSettlement` | `public Settlement HomeSettlement { get; }` |
| `PowerModifier` | `public float PowerModifier { get; }` |
| `CurrentSettlement` | `public Settlement CurrentSettlement { get; }` |
| `Gold` | `public int Gold { get; }` |
| `RandomValue` | `public int RandomValue { get; }` |
| `BannerItem` | `public EquipmentElement BannerItem { get; set; }` |
| `ProbabilityOfDeath` | `public float ProbabilityOfDeath { get; }` |
| `Father` | `public Hero Father { get; set; }` |
| `Mother` | `public Hero Mother { get; set; }` |
| `ExSpouses` | `public MBReadOnlyList<Hero> ExSpouses { get; set; }` |
| `Spouse` | `public Hero Spouse { get; set; }` |
| `Children` | `public MBList<Hero> Children { get; }` |
| `Siblings` | `public IEnumerable<Hero> Siblings { get; }` |
| `HeroDeveloper` | `public HeroDeveloper HeroDeveloper { get; }` |
| `OwnedWorkshops` | `public MBReadOnlyList<Workshop> OwnedWorkshops { get; }` |
| `AllAliveHeroes` | `public static MBReadOnlyList<Hero> AllAliveHeroes { get; }` |
| `DeadOrDisabledHeroes` | `public static MBReadOnlyList<Hero> DeadOrDisabledHeroes { get; }` |
| `MainHero` | `public static Hero MainHero { get; }` |
| `OneToOneConversationHero` | `public static Hero OneToOneConversationHero { get; }` |
| `IsMainHeroIll` | `public static bool IsMainHeroIll { get; }` |

## 主要方法

### GetName
`public override TextObject GetName()`

**用途 / Purpose:** 获取 `name` 的当前值。

### SetName
`public void SetName(TextObject fullName, TextObject firstName)`

**用途 / Purpose:** 同时更新英雄的完整姓名和名字文本，通常用于初始化角色或在剧情/自定义流程里改名。

### OnIssueCreatedForHero
`public void OnIssueCreatedForHero(IssueBase issue)`

**用途 / Purpose:** 当这个英雄接到新的 `IssueBase` 时，把问题挂到英雄状态上，让百科、任务和对话层能读到当前问题。

### OnIssueDeactivatedForHero
`public void OnIssueDeactivatedForHero()`

**用途 / Purpose:** 当英雄身上的问题结束或失效时，清理该问题的挂接状态，避免 UI 和逻辑继续把它当作活跃问题。

### ToString
`public override string ToString()`

**用途 / Purpose:** 生成便于日志、调试和快速显示的字符串表示，而不是用于本地化 UI 文案。

### UpdateLastKnownClosestSettlement
`public void UpdateLastKnownClosestSettlement(Settlement settlement)`

**用途 / Purpose:** 缓存英雄最近一次已知的最近定居点，供地图、追踪和百科层查询角色大致位置。

### SetNewOccupation
`public void SetNewOccupation(Occupation occupation)`

**用途 / Purpose:** 设置 `new occupation` 的值或状态。

### SetBirthDay
`public void SetBirthDay(CampaignTime birthday)`

**用途 / Purpose:** 设置 `birth day` 的值或状态。

### SetDeathDay
`public void SetDeathDay(CampaignTime deathDay)`

**用途 / Purpose:** 设置 `death day` 的值或状态。

### AddPower
`public void AddPower(float value)`

**用途 / Purpose:** 向当前集合/状态中添加 `power`。

### SetHasMet
`public void SetHasMet()`

**用途 / Purpose:** 设置 `has met` 的值或状态。

### UpdatePowerModifier
`public void UpdatePowerModifier()`

**用途 / Purpose:** 更新 `power modifier` 的状态或数据。

### UpdateHomeSettlement
`public void UpdateHomeSettlement()`

**用途 / Purpose:** 更新 `home settlement` 的状态或数据。

### GetSkillValue
`public int GetSkillValue(SkillObject skill)`

**用途 / Purpose:** 获取 `skill value` 的当前值。

### SetSkillValue
`public void SetSkillValue(SkillObject skill, int value)`

**用途 / Purpose:** 设置 `skill value` 的值或状态。

### ClearSkills
`public void ClearSkills()`

**用途 / Purpose:** 处理 `clear skills` 相关逻辑。

### AddSkillXp
`public void AddSkillXp(SkillObject skill, float xpAmount)`

**用途 / Purpose:** 向当前集合/状态中添加 `skill xp`。

### GetAttributeValue
`public int GetAttributeValue(CharacterAttribute charAttribute)`

**用途 / Purpose:** 获取 `attribute value` 的当前值。

### ClearAttributes
`public void ClearAttributes()`

**用途 / Purpose:** 处理 `clear attributes` 相关逻辑。

### SetTraitLevel
`public void SetTraitLevel(TraitObject trait, int value)`

**用途 / Purpose:** 设置 `trait level` 的值或状态。

### GetTraitLevel
`public int GetTraitLevel(TraitObject trait)`

**用途 / Purpose:** 获取 `trait level` 的当前值。

### ClearTraits
`public void ClearTraits()`

**用途 / Purpose:** 处理 `clear traits` 相关逻辑。

### GetPerkValue
`public bool GetPerkValue(PerkObject perk)`

**用途 / Purpose:** 获取 `perk value` 的当前值。

### ClearPerks
`public void ClearPerks()`

**用途 / Purpose:** 处理 `clear perks` 相关逻辑。

### ChangeState
`public void ChangeState(Hero.CharacterStates newState)`

**用途 / Purpose:** 处理 `change state` 相关逻辑。

### IsHealthFull
`public bool IsHealthFull()`

**用途 / Purpose:** 处理 `is health full` 相关逻辑。

### Heal
`public void Heal(int healAmount, bool addXp = false)`

**用途 / Purpose:** 处理 `heal` 相关逻辑。

### Deserialize
`public override void Deserialize(MBObjectManager objectManager, XmlNode node)`

**用途 / Purpose:** 处理 `deserialize` 相关逻辑。

### CanLeadParty
`public bool CanLeadParty()`

**用途 / Purpose:** 判断当前对象是否可以执行 `lead party`。

### SetHeroEncyclopediaTextAndLinks
`public static TextObject SetHeroEncyclopediaTextAndLinks(Hero o)`

**用途 / Purpose:** 设置 `hero encyclopedia text and links` 的值或状态。

### CanHeroEquipmentBeChanged
`public bool CanHeroEquipmentBeChanged()`

**用途 / Purpose:** 判断当前对象是否可以执行 `hero equipment be changed`。

### CanMarry
`public bool CanMarry()`

**用途 / Purpose:** 判断当前对象是否可以执行 `marry`。

### CanBeGovernorOrHavePartyRole
`public bool CanBeGovernorOrHavePartyRole()`

**用途 / Purpose:** 判断当前对象是否可以执行 `be governor or have party role`。

### CanDie
`public bool CanDie(KillCharacterAction.KillCharacterActionDetail causeOfDeath)`

**用途 / Purpose:** 判断当前对象是否可以执行 `die`。

### CanBecomePrisoner
`public bool CanBecomePrisoner()`

**用途 / Purpose:** 判断当前对象是否可以执行 `become prisoner`。

### CanMoveToSettlement
`public bool CanMoveToSettlement()`

**用途 / Purpose:** 判断当前对象是否可以执行 `move to settlement`。

### CanHaveCampaignIssues
`public bool CanHaveCampaignIssues()`

**用途 / Purpose:** 判断当前对象是否可以执行 `have campaign issues`。

### AddInfluenceWithKingdom
`public void AddInfluenceWithKingdom(float additionalInfluence)`

**用途 / Purpose:** 向当前集合/状态中添加 `influence with kingdom`。

### GetRelationWithPlayer
`public float GetRelationWithPlayer()`

**用途 / Purpose:** 获取 `relation with player` 的当前值。

### GetUnmodifiedClanLeaderRelationshipWithPlayer
`public float GetUnmodifiedClanLeaderRelationshipWithPlayer()`

**用途 / Purpose:** 获取 `unmodified clan leader relationship with player` 的当前值。

### SetTextVariables
`public void SetTextVariables()`

**用途 / Purpose:** 设置 `text variables` 的值或状态。

### SetPersonalRelation
`public void SetPersonalRelation(Hero otherHero, int value)`

**用途 / Purpose:** 设置 `personal relation` 的值或状态。

### GetRelation
`public int GetRelation(Hero otherHero)`

**用途 / Purpose:** 获取 `relation` 的当前值。

### GetBaseHeroRelation
`public int GetBaseHeroRelation(Hero otherHero)`

**用途 / Purpose:** 获取 `base hero relation` 的当前值。

### IsEnemy
`public bool IsEnemy(Hero otherHero)`

**用途 / Purpose:** 处理 `is enemy` 相关逻辑。

### IsFriend
`public bool IsFriend(Hero otherHero)`

**用途 / Purpose:** 处理 `is friend` 相关逻辑。

### IsNeutral
`public bool IsNeutral(Hero otherHero)`

**用途 / Purpose:** 处理 `is neutral` 相关逻辑。

### ModifyHair
`public void ModifyHair(int hair, int beard, int tattoo)`

**用途 / Purpose:** 处理 `modify hair` 相关逻辑。

### AddOwnedWorkshop
`public void AddOwnedWorkshop(Workshop workshop)`

**用途 / Purpose:** 向当前集合/状态中添加 `owned workshop`。

### RemoveOwnedWorkshop
`public void RemoveOwnedWorkshop(Workshop workshop)`

**用途 / Purpose:** 从当前集合/状态中移除 `owned workshop`。

### FindFirst
`public static Hero FindFirst(Func<Hero, bool> predicate)`

**用途 / Purpose:** 处理 `find first` 相关逻辑。

### Find
`public static Hero Find(string stringId)`

**用途 / Purpose:** 处理 `find` 相关逻辑。

### FindAll
`public static IEnumerable<Hero> FindAll(Func<Hero, bool> predicate)`

**用途 / Purpose:** 处理 `find all` 相关逻辑。

### MakeWounded
`public void MakeWounded(Hero killerHero = null, KillCharacterAction.KillCharacterActionDetail deathMarkDetail = KillCharacterAction.KillCharacterActionDetail.None)`

**用途 / Purpose:** 处理 `make wounded` 相关逻辑。

### AddDeathMark
`public void AddDeathMark(Hero killerHero = null, KillCharacterAction.KillCharacterActionDetail deathMarkDetail = KillCharacterAction.KillCharacterActionDetail.None)`

**用途 / Purpose:** 向当前集合/状态中添加 `death mark`。

### GetPositionAsVec3
`public Vec3 GetPositionAsVec3()`

**用途 / Purpose:** 获取 `position as vec3` 的当前值。

### GetCampaignPosition
`public CampaignVec2 GetCampaignPosition()`

**用途 / Purpose:** 获取 `campaign position` 的当前值。

### GetMapPoint
`public IMapPoint GetMapPoint()`

**用途 / Purpose:** 获取 `map point` 的当前值。

### ResetEquipments
`public void ResetEquipments()`

**用途 / Purpose:** 将 `equipments` 重置为初始状态。

### ChangeHeroGold
`public void ChangeHeroGold(int changeAmount)`

**用途 / Purpose:** 处理 `change hero gold` 相关逻辑。

### CheckInvalidEquipmentsAndReplaceIfNeeded
`public void CheckInvalidEquipmentsAndReplaceIfNeeded()`

**用途 / Purpose:** 处理 `check invalid equipments and replace if needed` 相关逻辑。

## 使用示例

```csharp
var value = new Hero();
value.GetName();
```

## 参见

- [完整类目录](../catalog)
