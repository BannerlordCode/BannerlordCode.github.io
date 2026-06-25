---
title: "Hero"
description: "Hero 的自动生成类参考。"
---
# Hero

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public sealed class Hero : MBObjectBase, ITrackableCampaignObject, ITrackableBase, IRandomOwner`
**Base:** `MBObjectBase`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/Hero.cs`

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
| `PassedTimeAtHomeSettlement` | `public float PassedTimeAtHomeSettlement { get; set; }` |
| `EncyclopediaText` | `public TextObject EncyclopediaText { get; set; }` |
| `IsFemale` | `public bool IsFemale { get; set; }` |
| `CaptivityStartTime` | `public CampaignTime CaptivityStartTime { get; }` |
| `PreferredUpgradeFormation` | `public FormationClass PreferredUpgradeFormation { get; }` |
| `HeroState` | `public CharacterStates HeroState { get; }` |
| `IsMinorFactionHero` | `public bool IsMinorFactionHero { get; }` |
| `Issue` | `public IssueBase Issue { get; }` |
| `CompanionOf` | `public Clan CompanionOf { get; set; }` |
| `CompanionsInParty` | `public IEnumerable<Hero> CompanionsInParty { get; }` |
| `Occupation` | `public Occupation Occupation { get; }` |
| `DeathMark` | `public KillCharacterAction.KillCharacterActionDetail DeathMark { get; }` |
| `DeathMarkKillerHero` | `public Hero DeathMarkKillerHero { get; }` |
| `LastKnownClosestSettlement` | `public Settlement LastKnownClosestSettlement { get; }` |
| `IsUrbanNotable` | `public bool IsUrbanNotable { get; }` |
| `IsRebel` | `public bool IsRebel { get; }` |
| `IsPartyLeader` | `public bool IsPartyLeader { get; }` |
| `IsNotable` | `public bool IsNotable { get; }` |
| `HitPoints` | `public int HitPoints { get; set; }` |
| `BirthDay` | `public CampaignTime BirthDay { get; }` |
| `DeathDay` | `public CampaignTime DeathDay { get; }` |
| `Age` | `public float Age { get; }` |
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
| `Father` | `public Hero Father { get; set; }` |
| `Mother` | `public Hero Mother { get; set; }` |
| `Spouse` | `public Hero Spouse { get; set; }` |
| `Siblings` | `public IEnumerable<Hero> Siblings { get; }` |

## 主要方法

### GetName
`public override TextObject GetName()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 name 的结果。

```csharp
// 先通过子系统 API 拿到 Hero 实例
Hero hero = ...;
var result = hero.GetName();
```

### SetName
`public void SetName(TextObject fullName, TextObject firstName)`

**用途 / Purpose:** **用途 / Purpose:** 为 name 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Hero 实例
Hero hero = ...;
hero.SetName(fullName, firstName);
```

### OnIssueCreatedForHero
`public void OnIssueCreatedForHero(IssueBase issue)`

**用途 / Purpose:** **用途 / Purpose:** 在 issue created for hero 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 Hero 实例
Hero hero = ...;
hero.OnIssueCreatedForHero(issue);
```

### OnIssueDeactivatedForHero
`public void OnIssueDeactivatedForHero()`

**用途 / Purpose:** **用途 / Purpose:** 在 issue deactivated for hero 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 Hero 实例
Hero hero = ...;
hero.OnIssueDeactivatedForHero();
```

### ToString
`public override string ToString()`

**用途 / Purpose:** **用途 / Purpose:** 返回当前对象的人类可读字符串表示。

```csharp
// 先通过子系统 API 拿到 Hero 实例
Hero hero = ...;
var result = hero.ToString();
```

### UpdateLastKnownClosestSettlement
`public void UpdateLastKnownClosestSettlement(Settlement settlement)`

**用途 / Purpose:** **用途 / Purpose:** 重新计算并更新 last known closest settlement 的最新表示。

```csharp
// 先通过子系统 API 拿到 Hero 实例
Hero hero = ...;
hero.UpdateLastKnownClosestSettlement(settlement);
```

### SetNewOccupation
`public void SetNewOccupation(Occupation occupation)`

**用途 / Purpose:** **用途 / Purpose:** 为 new occupation 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Hero 实例
Hero hero = ...;
hero.SetNewOccupation(occupation);
```

### SetBirthDay
`public void SetBirthDay(CampaignTime birthday)`

**用途 / Purpose:** **用途 / Purpose:** 为 birth day 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Hero 实例
Hero hero = ...;
hero.SetBirthDay(birthday);
```

### SetDeathDay
`public void SetDeathDay(CampaignTime deathDay)`

**用途 / Purpose:** **用途 / Purpose:** 为 death day 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Hero 实例
Hero hero = ...;
hero.SetDeathDay(deathDay);
```

### AddPower
`public void AddPower(float value)`

**用途 / Purpose:** **用途 / Purpose:** 将 power 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 Hero 实例
Hero hero = ...;
hero.AddPower(0);
```

### SetHasMet
`public void SetHasMet()`

**用途 / Purpose:** **用途 / Purpose:** 为 has met 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Hero 实例
Hero hero = ...;
hero.SetHasMet();
```

### UpdatePowerModifier
`public void UpdatePowerModifier()`

**用途 / Purpose:** **用途 / Purpose:** 重新计算并更新 power modifier 的最新表示。

```csharp
// 先通过子系统 API 拿到 Hero 实例
Hero hero = ...;
hero.UpdatePowerModifier();
```

### UpdateHomeSettlement
`public void UpdateHomeSettlement()`

**用途 / Purpose:** **用途 / Purpose:** 重新计算并更新 home settlement 的最新表示。

```csharp
// 先通过子系统 API 拿到 Hero 实例
Hero hero = ...;
hero.UpdateHomeSettlement();
```

### GetSkillValue
`public int GetSkillValue(SkillObject skill)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 skill value 的结果。

```csharp
// 先通过子系统 API 拿到 Hero 实例
Hero hero = ...;
var result = hero.GetSkillValue(skill);
```

### SetSkillValue
`public void SetSkillValue(SkillObject skill, int value)`

**用途 / Purpose:** **用途 / Purpose:** 为 skill value 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Hero 实例
Hero hero = ...;
hero.SetSkillValue(skill, 0);
```

### ClearSkills
`public void ClearSkills()`

**用途 / Purpose:** **用途 / Purpose:** 清空当前对象中的skills。

```csharp
// 先通过子系统 API 拿到 Hero 实例
Hero hero = ...;
hero.ClearSkills();
```

### AddSkillXp
`public void AddSkillXp(SkillObject skill, float xpAmount)`

**用途 / Purpose:** **用途 / Purpose:** 将 skill xp 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 Hero 实例
Hero hero = ...;
hero.AddSkillXp(skill, 0);
```

### GetAttributeValue
`public int GetAttributeValue(CharacterAttribute charAttribute)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 attribute value 的结果。

```csharp
// 先通过子系统 API 拿到 Hero 实例
Hero hero = ...;
var result = hero.GetAttributeValue(charAttribute);
```

### ClearAttributes
`public void ClearAttributes()`

**用途 / Purpose:** **用途 / Purpose:** 清空当前对象中的attributes。

```csharp
// 先通过子系统 API 拿到 Hero 实例
Hero hero = ...;
hero.ClearAttributes();
```

### SetTraitLevel
`public void SetTraitLevel(TraitObject trait, int value)`

**用途 / Purpose:** **用途 / Purpose:** 为 trait level 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Hero 实例
Hero hero = ...;
hero.SetTraitLevel(trait, 0);
```

### GetTraitLevel
`public int GetTraitLevel(TraitObject trait)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 trait level 的结果。

```csharp
// 先通过子系统 API 拿到 Hero 实例
Hero hero = ...;
var result = hero.GetTraitLevel(trait);
```

### ClearTraits
`public void ClearTraits()`

**用途 / Purpose:** **用途 / Purpose:** 清空当前对象中的traits。

```csharp
// 先通过子系统 API 拿到 Hero 实例
Hero hero = ...;
hero.ClearTraits();
```

### GetPerkValue
`public bool GetPerkValue(PerkObject perk)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 perk value 的结果。

```csharp
// 先通过子系统 API 拿到 Hero 实例
Hero hero = ...;
var result = hero.GetPerkValue(perk);
```

### ClearPerks
`public void ClearPerks()`

**用途 / Purpose:** **用途 / Purpose:** 清空当前对象中的perks。

```csharp
// 先通过子系统 API 拿到 Hero 实例
Hero hero = ...;
hero.ClearPerks();
```

### ChangeState
`public void ChangeState(CharacterStates newState)`

**用途 / Purpose:** **用途 / Purpose:** 调用 ChangeState 对应的操作。

```csharp
// 先通过子系统 API 拿到 Hero 实例
Hero hero = ...;
hero.ChangeState(newState);
```

### IsHealthFull
`public bool IsHealthFull()`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 health full 状态或条件。

```csharp
// 先通过子系统 API 拿到 Hero 实例
Hero hero = ...;
var result = hero.IsHealthFull();
```

### Heal
`public void Heal(int healAmount, bool addXp = false)`

**用途 / Purpose:** **用途 / Purpose:** 调用 Heal 对应的操作。

```csharp
// 先通过子系统 API 拿到 Hero 实例
Hero hero = ...;
hero.Heal(0, false);
```

### Deserialize
`public override void Deserialize(MBObjectManager objectManager, XmlNode node)`

**用途 / Purpose:** **用途 / Purpose:** 从序列化数据还原当前对象。

```csharp
// 先通过子系统 API 拿到 Hero 实例
Hero hero = ...;
hero.Deserialize(objectManager, node);
```

### CanLeadParty
`public bool CanLeadParty()`

**用途 / Purpose:** **用途 / Purpose:** 检查当前对象是否满足 lead party 的前置条件。

```csharp
// 先通过子系统 API 拿到 Hero 实例
Hero hero = ...;
var result = hero.CanLeadParty();
```

### SetHeroEncyclopediaTextAndLinks
`public static TextObject SetHeroEncyclopediaTextAndLinks(Hero o)`

**用途 / Purpose:** **用途 / Purpose:** 为 hero encyclopedia text and links 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
Hero.SetHeroEncyclopediaTextAndLinks(o);
```

### CanHeroEquipmentBeChanged
`public bool CanHeroEquipmentBeChanged()`

**用途 / Purpose:** **用途 / Purpose:** 检查当前对象是否满足 hero equipment be changed 的前置条件。

```csharp
// 先通过子系统 API 拿到 Hero 实例
Hero hero = ...;
var result = hero.CanHeroEquipmentBeChanged();
```

### CanMarry
`public bool CanMarry()`

**用途 / Purpose:** **用途 / Purpose:** 检查当前对象是否满足 marry 的前置条件。

```csharp
// 先通过子系统 API 拿到 Hero 实例
Hero hero = ...;
var result = hero.CanMarry();
```

### CanBeGovernorOrHavePartyRole
`public bool CanBeGovernorOrHavePartyRole()`

**用途 / Purpose:** **用途 / Purpose:** 检查当前对象是否满足 be governor or have party role 的前置条件。

```csharp
// 先通过子系统 API 拿到 Hero 实例
Hero hero = ...;
var result = hero.CanBeGovernorOrHavePartyRole();
```

### CanDie
`public bool CanDie(KillCharacterAction.KillCharacterActionDetail causeOfDeath)`

**用途 / Purpose:** **用途 / Purpose:** 检查当前对象是否满足 die 的前置条件。

```csharp
// 先通过子系统 API 拿到 Hero 实例
Hero hero = ...;
var result = hero.CanDie(causeOfDeath);
```

### CanBecomePrisoner
`public bool CanBecomePrisoner()`

**用途 / Purpose:** **用途 / Purpose:** 检查当前对象是否满足 become prisoner 的前置条件。

```csharp
// 先通过子系统 API 拿到 Hero 实例
Hero hero = ...;
var result = hero.CanBecomePrisoner();
```

### CanMoveToSettlement
`public bool CanMoveToSettlement()`

**用途 / Purpose:** **用途 / Purpose:** 检查当前对象是否满足 move to settlement 的前置条件。

```csharp
// 先通过子系统 API 拿到 Hero 实例
Hero hero = ...;
var result = hero.CanMoveToSettlement();
```

### CanHaveCampaignIssues
`public bool CanHaveCampaignIssues()`

**用途 / Purpose:** **用途 / Purpose:** 检查当前对象是否满足 have campaign issues 的前置条件。

```csharp
// 先通过子系统 API 拿到 Hero 实例
Hero hero = ...;
var result = hero.CanHaveCampaignIssues();
```

### AddInfluenceWithKingdom
`public void AddInfluenceWithKingdom(float additionalInfluence)`

**用途 / Purpose:** **用途 / Purpose:** 将 influence with kingdom 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 Hero 实例
Hero hero = ...;
hero.AddInfluenceWithKingdom(0);
```

### GetRelationWithPlayer
`public float GetRelationWithPlayer()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 relation with player 的结果。

```csharp
// 先通过子系统 API 拿到 Hero 实例
Hero hero = ...;
var result = hero.GetRelationWithPlayer();
```

### GetUnmodifiedClanLeaderRelationshipWithPlayer
`public float GetUnmodifiedClanLeaderRelationshipWithPlayer()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 unmodified clan leader relationship with player 的结果。

```csharp
// 先通过子系统 API 拿到 Hero 实例
Hero hero = ...;
var result = hero.GetUnmodifiedClanLeaderRelationshipWithPlayer();
```

### SetTextVariables
`public void SetTextVariables()`

**用途 / Purpose:** **用途 / Purpose:** 为 text variables 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Hero 实例
Hero hero = ...;
hero.SetTextVariables();
```

### SetPersonalRelation
`public void SetPersonalRelation(Hero otherHero, int value)`

**用途 / Purpose:** **用途 / Purpose:** 为 personal relation 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Hero 实例
Hero hero = ...;
hero.SetPersonalRelation(otherHero, 0);
```

### GetRelation
`public int GetRelation(Hero otherHero)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 relation 的结果。

```csharp
// 先通过子系统 API 拿到 Hero 实例
Hero hero = ...;
var result = hero.GetRelation(otherHero);
```

### GetBaseHeroRelation
`public int GetBaseHeroRelation(Hero otherHero)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 base hero relation 的结果。

```csharp
// 先通过子系统 API 拿到 Hero 实例
Hero hero = ...;
var result = hero.GetBaseHeroRelation(otherHero);
```

### IsEnemy
`public bool IsEnemy(Hero otherHero)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 enemy 状态或条件。

```csharp
// 先通过子系统 API 拿到 Hero 实例
Hero hero = ...;
var result = hero.IsEnemy(otherHero);
```

### IsFriend
`public bool IsFriend(Hero otherHero)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 friend 状态或条件。

```csharp
// 先通过子系统 API 拿到 Hero 实例
Hero hero = ...;
var result = hero.IsFriend(otherHero);
```

### IsNeutral
`public bool IsNeutral(Hero otherHero)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 neutral 状态或条件。

```csharp
// 先通过子系统 API 拿到 Hero 实例
Hero hero = ...;
var result = hero.IsNeutral(otherHero);
```

### ModifyHair
`public void ModifyHair(int hair, int beard, int tattoo)`

**用途 / Purpose:** **用途 / Purpose:** 调用 ModifyHair 对应的操作。

```csharp
// 先通过子系统 API 拿到 Hero 实例
Hero hero = ...;
hero.ModifyHair(0, 0, 0);
```

### AddOwnedWorkshop
`public void AddOwnedWorkshop(Workshop workshop)`

**用途 / Purpose:** **用途 / Purpose:** 将 owned workshop 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 Hero 实例
Hero hero = ...;
hero.AddOwnedWorkshop(workshop);
```

### RemoveOwnedWorkshop
`public void RemoveOwnedWorkshop(Workshop workshop)`

**用途 / Purpose:** **用途 / Purpose:** 从当前容器或状态中移除 owned workshop。

```csharp
// 先通过子系统 API 拿到 Hero 实例
Hero hero = ...;
hero.RemoveOwnedWorkshop(workshop);
```

### FindFirst
`public static Hero FindFirst(Func<Hero, bool> predicate)`

**用途 / Purpose:** **用途 / Purpose:** 在当前集合/范围内查找满足条件的first。

```csharp
// 静态调用，不需要实例
Hero.FindFirst(func<Hero, false);
```

### Find
`public static Hero Find(string stringId)`

**用途 / Purpose:** **用途 / Purpose:** 在当前集合/范围内查找匹配项。

```csharp
// 静态调用，不需要实例
Hero.Find("example");
```

### FindAll
`public static IEnumerable<Hero> FindAll(Func<Hero, bool> predicate)`

**用途 / Purpose:** **用途 / Purpose:** 在当前集合/范围内查找满足条件的all。

```csharp
// 静态调用，不需要实例
Hero.FindAll(func<Hero, false);
```

### MakeWounded
`public void MakeWounded(Hero killerHero = null, KillCharacterAction.KillCharacterActionDetail deathMarkDetail = KillCharacterAction.KillCharacterActionDetail.None)`

**用途 / Purpose:** **用途 / Purpose:** 调用 MakeWounded 对应的操作。

```csharp
// 先通过子系统 API 拿到 Hero 实例
Hero hero = ...;
hero.MakeWounded(null, killCharacterAction.KillCharacterActionDetail.None);
```

### AddDeathMark
`public void AddDeathMark(Hero killerHero = null, KillCharacterAction.KillCharacterActionDetail deathMarkDetail = KillCharacterAction.KillCharacterActionDetail.None)`

**用途 / Purpose:** **用途 / Purpose:** 将 death mark 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 Hero 实例
Hero hero = ...;
hero.AddDeathMark(null, killCharacterAction.KillCharacterActionDetail.None);
```

### GetPositionAsVec3
`public Vec3 GetPositionAsVec3()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 position as vec3 的结果。

```csharp
// 先通过子系统 API 拿到 Hero 实例
Hero hero = ...;
var result = hero.GetPositionAsVec3();
```

### GetCampaignPosition
`public CampaignVec2 GetCampaignPosition()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 campaign position 的结果。

```csharp
// 先通过子系统 API 拿到 Hero 实例
Hero hero = ...;
var result = hero.GetCampaignPosition();
```

### GetMapPoint
`public IMapPoint GetMapPoint()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 map point 的结果。

```csharp
// 先通过子系统 API 拿到 Hero 实例
Hero hero = ...;
var result = hero.GetMapPoint();
```

### ResetEquipments
`public void ResetEquipments()`

**用途 / Purpose:** **用途 / Purpose:** 将 equipments 重置回默认或初始状态。

```csharp
// 先通过子系统 API 拿到 Hero 实例
Hero hero = ...;
hero.ResetEquipments();
```

### ChangeHeroGold
`public void ChangeHeroGold(int changeAmount)`

**用途 / Purpose:** **用途 / Purpose:** 调用 ChangeHeroGold 对应的操作。

```csharp
// 先通过子系统 API 拿到 Hero 实例
Hero hero = ...;
hero.ChangeHeroGold(0);
```

### CheckInvalidEquipmentsAndReplaceIfNeeded
`public void CheckInvalidEquipmentsAndReplaceIfNeeded()`

**用途 / Purpose:** **用途 / Purpose:** 检查invalid equipments and replace if needed在当前对象中是否成立。

```csharp
// 先通过子系统 API 拿到 Hero 实例
Hero hero = ...;
hero.CheckInvalidEquipmentsAndReplaceIfNeeded();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
Hero hero = ...;
hero.GetName();
```

## 参见

- [本区域目录](../)