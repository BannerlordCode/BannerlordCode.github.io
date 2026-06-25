---
title: "PartyBase"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PartyBase`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PartyBase

**Namespace:** TaleWorlds.CampaignSystem.Party
**Module:** TaleWorlds.CampaignSystem
**Type:** `public sealed class PartyBase : IBattleCombatant, IRandomOwner, IInteractablePoint`
**Base:** `IBattleCombatant`
**File:** `TaleWorlds.CampaignSystem/Party/PartyBase.cs`

## 概述

`PartyBase` 位于 `TaleWorlds.CampaignSystem.Party`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.Party` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Position` | `public CampaignVec2 Position { get; }` |
| `IsVisible` | `public bool IsVisible { get; }` |
| `IsActive` | `public bool IsActive { get; }` |
| `SiegeEvent` | `public SiegeEvent SiegeEvent { get; }` |
| `Settlement` | `public Settlement Settlement { get; }` |
| `MobileParty` | `public MobileParty MobileParty { get; }` |
| `IsSettlement` | `public bool IsSettlement { get; }` |
| `IsMobile` | `public bool IsMobile { get; }` |
| `MemberRoster` | `public TroopRoster MemberRoster { get; }` |
| `PrisonRoster` | `public TroopRoster PrisonRoster { get; }` |
| `ItemRoster` | `public ItemRoster ItemRoster { get; }` |
| `Name` | `public TextObject Name { get; }` |
| `DaysStarving` | `public float DaysStarving { get; }` |
| `RemainingFoodPercentage` | `public int RemainingFoodPercentage { get; set; }` |
| `IsStarving` | `public bool IsStarving { get; }` |
| `Id` | `public string Id { get; }` |
| `HealingRateForMemberRegulars` | `public float HealingRateForMemberRegulars { get; }` |
| `HealingRateForMemberRegularsExplained` | `public ExplainedNumber HealingRateForMemberRegularsExplained { get; }` |
| `HealingRateForMemberHeroes` | `public float HealingRateForMemberHeroes { get; }` |
| `HealingRateForMemberHeroesExplained` | `public ExplainedNumber HealingRateForMemberHeroesExplained { get; }` |
| `Owner` | `public Hero Owner { get; }` |
| `LeaderHero` | `public Hero LeaderHero { get; }` |
| `MainParty` | `public static PartyBase MainParty { get; }` |
| `LevelMaskIsDirty` | `public bool LevelMaskIsDirty { get; }` |
| `Index` | `public int Index { get; }` |
| `IsValid` | `public bool IsValid { get; }` |
| `MapFaction` | `public IFaction MapFaction { get; }` |
| `RandomValue` | `public int RandomValue { get; }` |
| `Culture` | `public CultureObject Culture { get; }` |
| `PrimaryColorPair` | `public Tuple<uint, uint> PrimaryColorPair { get; }` |
| `CustomName` | `public TextObject CustomName { get; }` |
| `CustomBanner` | `public Banner CustomBanner { get; }` |
| `Banner` | `public Banner Banner { get; }` |
| `MapEvent` | `public MapEvent MapEvent { get; }` |
| `MapEventSide` | `public MapEventSide MapEventSide { get; set; }` |
| `Side` | `public BattleSideEnum Side { get; }` |
| `OpponentSide` | `public BattleSideEnum OpponentSide { get; }` |
| `PartySizeLimit` | `public int PartySizeLimit { get; }` |
| `PrisonerSizeLimit` | `public int PrisonerSizeLimit { get; }` |
| `PartySizeLimitExplainer` | `public ExplainedNumber PartySizeLimitExplainer { get; }` |
| `PrisonerSizeLimitExplainer` | `public ExplainedNumber PrisonerSizeLimitExplainer { get; }` |
| `NumberOfHealthyMembers` | `public int NumberOfHealthyMembers { get; }` |
| `NumberOfRegularMembers` | `public int NumberOfRegularMembers { get; }` |
| `NumberOfWoundedTotalMembers` | `public int NumberOfWoundedTotalMembers { get; }` |
| `NumberOfAllMembers` | `public int NumberOfAllMembers { get; }` |
| `NumberOfPrisoners` | `public int NumberOfPrisoners { get; }` |
| `NumberOfMounts` | `public int NumberOfMounts { get; }` |
| `NumberOfPackAnimals` | `public int NumberOfPackAnimals { get; }` |
| `PrisonerHeroes` | `public IEnumerable<CharacterObject> PrisonerHeroes { get; }` |
| `NumberOfMenWithHorse` | `public int NumberOfMenWithHorse { get; }` |
| `NumberOfMenWithoutHorse` | `public int NumberOfMenWithoutHorse { get; }` |
| `EstimatedStrength` | `public float EstimatedStrength { get; }` |
| `Ships` | `public MBReadOnlyList<Ship> Ships { get; }` |
| `FlagShip` | `public Ship FlagShip { get; }` |
| `BasicCulture` | `public BasicCultureObject BasicCulture { get; }` |
| `General` | `public BasicCharacterObject General { get; }` |
| `IsVisualDirty` | `public bool IsVisualDirty { get; }` |

## 主要方法

### OnVisibilityChanged
`public void OnVisibilityChanged(bool value)`

**用途 / Purpose:** 当 `visibility changed` 事件触发时调用此方法。

### OnConsumedFood
`public void OnConsumedFood()`

**用途 / Purpose:** 当 `consumed food` 事件触发时调用此方法。

### SetCustomOwner
`public void SetCustomOwner(Hero customOwner)`

**用途 / Purpose:** 设置 `custom owner` 的值或状态。

### IsPartyUnderPlayerCommand
`public static bool IsPartyUnderPlayerCommand(PartyBase party)`

**用途 / Purpose:** 处理 `is party under player command` 相关逻辑。

### SetLevelMaskIsDirty
`public void SetLevelMaskIsDirty()`

**用途 / Purpose:** 设置 `level mask is dirty` 的值或状态。

### OnLevelMaskUpdated
`public void OnLevelMaskUpdated()`

**用途 / Purpose:** 当 `level mask updated` 事件触发时调用此方法。

### SetCustomName
`public void SetCustomName(TextObject name)`

**用途 / Purpose:** 设置 `custom name` 的值或状态。

### SetCustomBanner
`public void SetCustomBanner(Banner banner)`

**用途 / Purpose:** 设置 `custom banner` 的值或状态。

### GetNumberOfHealthyMenOfTier
`public int GetNumberOfHealthyMenOfTier(int tier)`

**用途 / Purpose:** 获取 `number of healthy men of tier` 的当前值。

### CalculateCurrentStrength
`public float CalculateCurrentStrength()`

**用途 / Purpose:** 处理 `calculate current strength` 相关逻辑。

### GetCustomStrength
`public float GetCustomStrength(BattleSideEnum side, MapEvent.PowerCalculationContext context)`

**用途 / Purpose:** 获取 `custom strength` 的当前值。

### GetShipsVersion
`public int GetShipsVersion()`

**用途 / Purpose:** 获取 `ships version` 的当前值。

### GetNumberOfMenWith
`public int GetNumberOfMenWith(TraitObject trait)`

**用途 / Purpose:** 获取 `number of men with` 的当前值。

### AddPrisoner
`public int AddPrisoner(CharacterObject element, int numberToAdd)`

**用途 / Purpose:** 向当前集合/状态中添加 `prisoner`。

### AddMember
`public int AddMember(CharacterObject element, int numberToAdd, int numberToAddWounded = 0)`

**用途 / Purpose:** 向当前集合/状态中添加 `member`。

### AddPrisoners
`public void AddPrisoners(TroopRoster roster)`

**用途 / Purpose:** 向当前集合/状态中添加 `prisoners`。

### AddMembers
`public void AddMembers(TroopRoster roster)`

**用途 / Purpose:** 向当前集合/状态中添加 `members`。

### ToString
`public override string ToString()`

**用途 / Purpose:** 处理 `to string` 相关逻辑。

### AddElementToMemberRoster
`public int AddElementToMemberRoster(CharacterObject element, int numberToAdd, bool insertAtFront = false)`

**用途 / Purpose:** 向当前集合/状态中添加 `element to member roster`。

### AddToMemberRosterElementAtIndex
`public void AddToMemberRosterElementAtIndex(int index, int numberToAdd, int woundedCount = 0)`

**用途 / Purpose:** 向当前集合/状态中添加 `to member roster element at index`。

### WoundMemberRosterElements
`public void WoundMemberRosterElements(CharacterObject elementObj, int numberToWound)`

**用途 / Purpose:** 处理 `wound member roster elements` 相关逻辑。

### WoundMemberRosterElementsWithIndex
`public void WoundMemberRosterElementsWithIndex(int elementIndex, int numberToWound)`

**用途 / Purpose:** 处理 `wound member roster elements with index` 相关逻辑。

### UpdateVisibilityAndInspected
`public void UpdateVisibilityAndInspected(CampaignVec2 fromPosition, float mainPartySeeingRange = 0f)`

**用途 / Purpose:** 更新 `visibility and inspected` 的状态或数据。

### SetAsCameraFollowParty
`public void SetAsCameraFollowParty()`

**用途 / Purpose:** 设置 `as camera follow party` 的值或状态。

### SetVisualAsDirty
`public void SetVisualAsDirty()`

**用途 / Purpose:** 设置 `visual as dirty` 的值或状态。

### OnVisualsUpdated
`public void OnVisualsUpdated()`

**用途 / Purpose:** 当 `visuals updated` 事件触发时调用此方法。

## 使用示例

```csharp
var value = new PartyBase();
value.OnVisibilityChanged(false);
```

## 参见

- [完整类目录](../catalog)