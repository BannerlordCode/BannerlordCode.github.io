---
title: "PartyBase"
description: "PartyBase：TaleWorlds.CampaignSystem.Party 的 public 类，继承 IBattleCombatant、IRandomOwner；公开成员 86 个（方法 27、属性 57、字段 0）。canonical 桶 campaign。源文件 TaleWorlds.CampaignSystem/Party/PartyBase.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# PartyBase

**Namespace:** `TaleWorlds.CampaignSystem.Party`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public sealed class PartyBase : IBattleCombatant, IRandomOwner, IInteractablePoint`
**File:** `TaleWorlds.CampaignSystem/Party/PartyBase.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## 概述

PartyBase 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/Party/PartyBase.cs。它是一个 public 类（sealed），实现/继承 IBattleCombatant、IRandomOwner、IInteractablePoint，继承链为 PartyBase → IBattleCombatant。public/protected 成员共 86 个：27 方法、57 属性、2 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：PartyBase 落在 canonical 桶 `campaign`（命中规则 `rule:TaleWorlds.CampaignSystem`），命名空间 `TaleWorlds.CampaignSystem.Party`，继承链 PartyBase → IBattleCombatant。成员构成以属性为主（属性 57/86，方法 27/86），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/Party/PartyBase.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Position` | `public CampaignVec2 Position` | 属性 |
| `IsVisible` | `public bool IsVisible` | 属性 |
| `IsActive` | `public bool IsActive` | 属性 |
| `SiegeEvent` | `public SiegeEvent SiegeEvent` | 属性 |
| `OnVisibilityChanged` | `public void OnVisibilityChanged(bool value)` | 方法 |
| `Settlement` | `public Settlement Settlement` | 属性 |
| `MobileParty` | `public MobileParty MobileParty` | 属性 |
| `IsSettlement` | `public bool IsSettlement` | 属性 |
| `IsMobile` | `public bool IsMobile` | 属性 |
| `MemberRoster` | `public TroopRoster MemberRoster` | 属性 |
| `PrisonRoster` | `public TroopRoster PrisonRoster` | 属性 |
| `ItemRoster` | `public ItemRoster ItemRoster` | 属性 |
| `Name` | `public TextObject Name` | 属性 |
| `DaysStarving` | `public float DaysStarving` | 属性 |
| `OnConsumedFood` | `public void OnConsumedFood()` | 方法 |
| `RemainingFoodPercentage` | `public int RemainingFoodPercentage` | 属性 |
| `IsStarving` | `public bool IsStarving` | 属性 |
| `Id` | `public string Id` | 属性 |
| `HealingRateForMemberRegulars` | `public float HealingRateForMemberRegulars` | 属性 |
| `HealingRateForMemberRegularsExplained` | `public ExplainedNumber HealingRateForMemberRegularsExplained` | 属性 |
| `HealingRateForMemberHeroes` | `public float HealingRateForMemberHeroes` | 属性 |
| `HealingRateForMemberHeroesExplained` | `public ExplainedNumber HealingRateForMemberHeroesExplained` | 属性 |
| `Owner` | `public Hero Owner` | 属性 |
| `SetCustomOwner` | `public void SetCustomOwner(Hero customOwner)` | 方法 |
| `LeaderHero` | `public Hero LeaderHero` | 属性 |
| `MainParty` | `public static PartyBase MainParty` | 属性 |
| `IsPartyUnderPlayerCommand` | `public static bool IsPartyUnderPlayerCommand(PartyBase party)` | 方法 |
| `LevelMaskIsDirty` | `public bool LevelMaskIsDirty` | 属性 |
| `SetLevelMaskIsDirty` | `public void SetLevelMaskIsDirty()` | 方法 |
| `OnLevelMaskUpdated` | `public void OnLevelMaskUpdated()` | 方法 |
| `Index` | `public int Index` | 属性 |
| `IsValid` | `public bool IsValid` | 属性 |
| `MapFaction` | `public IFaction MapFaction` | 属性 |
| `RandomValue` | `public int RandomValue` | 属性 |
| `Culture` | `public CultureObject Culture` | 属性 |
| `uint>PrimaryColorPair` | `public Tuple<uint, uint>PrimaryColorPair` | 属性 |
| `CustomName` | `public TextObject CustomName` | 属性 |
| `SetCustomName` | `public void SetCustomName(TextObject name)` | 方法 |
| `CustomBanner` | `public Banner CustomBanner` | 属性 |
| `Banner` | `public Banner Banner` | 属性 |
| `MapEvent` | `public MapEvent MapEvent` | 属性 |
| `MapEventSide` | `public MapEventSide MapEventSide` | 属性 |
| `Side` | `public BattleSideEnum Side` | 属性 |
| `OpponentSide` | `public BattleSideEnum OpponentSide` | 属性 |
| `SetCustomBanner` | `public void SetCustomBanner(Banner banner)` | 方法 |
| `IsUnderPlayersCommand` | `public bool IsUnderPlayersCommand(BattleSideEnum playerSide)` | 方法 |
| `PartySizeLimit` | `public int PartySizeLimit` | 属性 |
| `PrisonerSizeLimit` | `public int PrisonerSizeLimit` | 属性 |
| `PartySizeLimitExplainer` | `public ExplainedNumber PartySizeLimitExplainer` | 属性 |
| `PrisonerSizeLimitExplainer` | `public ExplainedNumber PrisonerSizeLimitExplainer` | 属性 |
| `NumberOfHealthyMembers` | `public int NumberOfHealthyMembers` | 属性 |
| `NumberOfRegularMembers` | `public int NumberOfRegularMembers` | 属性 |
| `NumberOfWoundedTotalMembers` | `public int NumberOfWoundedTotalMembers` | 属性 |
| `NumberOfAllMembers` | `public int NumberOfAllMembers` | 属性 |
| `NumberOfPrisoners` | `public int NumberOfPrisoners` | 属性 |
| `NumberOfMounts` | `public int NumberOfMounts` | 属性 |
| `NumberOfPackAnimals` | `public int NumberOfPackAnimals` | 属性 |
| `IEnumerable` | `public IEnumerable<CharacterObject>PrisonerHeroes` | 属性 |
| `NumberOfMenWithHorse` | `public int NumberOfMenWithHorse` | 属性 |
| `NumberOfMenWithoutHorse` | `public int NumberOfMenWithoutHorse` | 属性 |
| `GetNumberOfHealthyMenOfTier` | `public int GetNumberOfHealthyMenOfTier(int tier)` | 方法 |
| `EstimatedStrength` | `public float EstimatedStrength` | 属性 |
| `CalculateCurrentStrength` | `public float CalculateCurrentStrength()` | 方法 |
| `GetCustomStrength` | `public float GetCustomStrength(BattleSideEnum side, MapEvent.PowerCalculationContext context)` | 方法 |
| `PartyBase` | `public PartyBase(MobileParty mobileParty) : this(mobileParty, null)` | 构造函数 |
| `PartyBase` | `public PartyBase(Settlement settlement) : this(null, settlement)` | 构造函数 |
| `MBReadOnlyList` | `public MBReadOnlyList<Ship>Ships` | 属性 |
| `FlagShip` | `public Ship FlagShip` | 属性 |
| `GetShipsVersion` | `public int GetShipsVersion()` | 方法 |
| `GetNumberOfMenWith` | `public int GetNumberOfMenWith(TraitObject trait)` | 方法 |
| `AddPrisoner` | `public int AddPrisoner(CharacterObject element, int numberToAdd)` | 方法 |
| `AddMember` | `public int AddMember(CharacterObject element, int numberToAdd, int numberToAddWounded = 0)` | 方法 |
| `AddPrisoners` | `public void AddPrisoners(TroopRoster roster)` | 方法 |
| `AddMembers` | `public void AddMembers(TroopRoster roster)` | 方法 |
| `ToString` | `public override string ToString()` | 方法 |
| `AddElementToMemberRoster` | `public int AddElementToMemberRoster(CharacterObject element, int numberToAdd, bool insertAtFront = false)` | 方法 |
| `AddToMemberRosterElementAtIndex` | `public void AddToMemberRosterElementAtIndex(int index, int numberToAdd, int woundedCount = 0)` | 方法 |
| `WoundMemberRosterElements` | `public void WoundMemberRosterElements(CharacterObject elementObj, int numberToWound)` | 方法 |
| `WoundMemberRosterElementsWithIndex` | `public void WoundMemberRosterElementsWithIndex(int elementIndex, int numberToWound)` | 方法 |
| `UpdateVisibilityAndInspected` | `public void UpdateVisibilityAndInspected(CampaignVec2 fromPosition, float mainPartySeeingRange = 0f)` | 方法 |
| `BasicCulture` | `public BasicCultureObject BasicCulture` | 属性 |
| `General` | `public BasicCharacterObject General` | 属性 |
| `SetAsCameraFollowParty` | `public void SetAsCameraFollowParty()` | 方法 |
| `IsVisualDirty` | `public bool IsVisualDirty` | 属性 |
| `SetVisualAsDirty` | `public void SetVisualAsDirty()` | 方法 |
| `OnVisualsUpdated` | `public void OnVisualsUpdated()` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 IBattleCombatant](../../core-extra/IBattleCombatant/)
- [基类/接口 IRandomOwner](../IRandomOwner/)
- [基类/接口 IInteractablePoint](../IInteractablePoint/)
- [同命名空间 AiBehavior](../AiBehavior/)
- [同命名空间 CanTalkToHeroDelegate](../CanTalkToHeroDelegate/)
- [同命名空间 IsTroopTransferableDelegate](../IsTroopTransferableDelegate/)
- [同命名空间 MobileParty](../MobileParty/)
