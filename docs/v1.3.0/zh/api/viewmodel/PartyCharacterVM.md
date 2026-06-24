<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PartyCharacterVM`
- [← 本领域 / 返回 viewmodel](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# PartyCharacterVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Party
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class PartyCharacterVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/PartyCharacterVM.cs`

## 概述

`PartyCharacterVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.Party`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.Party` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Troops` | `public TroopRoster Troops { get; }` |
| `StringId` | `public string StringId { get; }` |
| `Troop` | `public TroopRosterElement Troop { get; set; }` |
| `Character` | `public CharacterObject Character { get; set; }` |
| `IsFormationEnabled` | `public bool IsFormationEnabled { get; set; }` |
| `TransferString` | `public string TransferString { get; set; }` |
| `IsTroopUpgradable` | `public bool IsTroopUpgradable { get; set; }` |
| `IsTroopRecruitable` | `public bool IsTroopRecruitable { get; set; }` |
| `IsRecruitablePrisoner` | `public bool IsRecruitablePrisoner { get; set; }` |
| `IsUpgradableTroop` | `public bool IsUpgradableTroop { get; set; }` |
| `IsExecutable` | `public bool IsExecutable { get; set; }` |
| `NumOfReadyToUpgradeTroops` | `public int NumOfReadyToUpgradeTroops { get; set; }` |
| `NumOfUpgradeableTroops` | `public int NumOfUpgradeableTroops { get; set; }` |
| `NumOfRecruitablePrisoners` | `public int NumOfRecruitablePrisoners { get; set; }` |
| `MaxXP` | `public int MaxXP { get; set; }` |
| `CurrentXP` | `public int CurrentXP { get; set; }` |
| `CurrentConformity` | `public int CurrentConformity { get; set; }` |
| `MaxConformity` | `public int MaxConformity { get; set; }` |
| `TroopXPTooltip` | `public BasicTooltipViewModel TroopXPTooltip { get; set; }` |
| `TroopConformityTooltip` | `public BasicTooltipViewModel TroopConformityTooltip { get; set; }` |
| `TransferHint` | `public BasicTooltipViewModel TransferHint { get; set; }` |
| `IsRecruitButtonsHiglighted` | `public bool IsRecruitButtonsHiglighted { get; set; }` |
| `IsTransferButtonHiglighted` | `public bool IsTransferButtonHiglighted { get; set; }` |
| `StrNumOfUpgradableTroop` | `public string StrNumOfUpgradableTroop { get; set; }` |
| `StrNumOfRecruitableTroop` | `public string StrNumOfRecruitableTroop { get; set; }` |
| `TroopID` | `public string TroopID { get; set; }` |
| `UpgradeCostText` | `public string UpgradeCostText { get; set; }` |
| `RecruitMoraleCostText` | `public string RecruitMoraleCostText { get; set; }` |
| `Index` | `public int Index { get; set; }` |
| `TransferAmount` | `public int TransferAmount { get; set; }` |
| `IsTroopTransferrable` | `public bool IsTroopTransferrable { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `TroopNum` | `public string TroopNum { get; }` |
| `IsHeroWounded` | `public bool IsHeroWounded { get; }` |
| `HeroHealth` | `public int HeroHealth { get; }` |
| `Number` | `public int Number { get; }` |
| `WoundedCount` | `public int WoundedCount { get; }` |
| `RecruitPrisonerHint` | `public BasicTooltipViewModel RecruitPrisonerHint { get; set; }` |
| `Code` | `public CharacterImageIdentifierVM Code { get; set; }` |
| `ExecutePrisonerHint` | `public BasicTooltipViewModel ExecutePrisonerHint { get; set; }` |
| `Upgrades` | `public MBBindingList<UpgradeTargetVM> Upgrades { get; set; }` |
| `HeroHealthHint` | `public BasicTooltipViewModel HeroHealthHint { get; set; }` |
| `IsHero` | `public bool IsHero { get; set; }` |
| `IsMainHero` | `public bool IsMainHero { get; set; }` |
| `IsPrisoner` | `public bool IsPrisoner { get; set; }` |
| `IsPrisonerOfPlayer` | `public bool IsPrisonerOfPlayer { get; set; }` |
| `IsHeroPrisonerOfPlayer` | `public bool IsHeroPrisonerOfPlayer { get; set; }` |
| `AnyUpgradeHasRequirement` | `public bool AnyUpgradeHasRequirement { get; set; }` |
| `TierIconData` | `public StringItemWithHintVM TierIconData { get; set; }` |
| `TypeIconData` | `public StringItemWithHintVM TypeIconData { get; set; }` |
| `HasEnoughGold` | `public bool HasEnoughGold { get; set; }` |
| `IsTalkableCharacter` | `public bool IsTalkableCharacter { get; set; }` |
| `CanTalk` | `public bool CanTalk { get; set; }` |
| `TalkHint` | `public HintViewModel TalkHint { get; set; }` |
| `TradeData` | `public PartyTradeVM TradeData { get; set; }` |
| `IsLocked` | `public bool IsLocked { get; set; }` |
| `LockHint` | `public HintViewModel LockHint { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |

## 主要方法

### UpdateTalkable
`public void UpdateTalkable()`

**用途 / Purpose:** 更新 `talkable` 的状态或数据。

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### ExecuteSetSelected
`public void ExecuteSetSelected()`

**用途 / Purpose:** 执行 `set selected` 操作或流程。

### ExecuteTalk
`public void ExecuteTalk()`

**用途 / Purpose:** 执行 `talk` 操作或流程。

### UpdateTradeData
`public void UpdateTradeData()`

**用途 / Purpose:** 更新 `trade data` 的状态或数据。

### UpdateRecruitable
`public void UpdateRecruitable()`

**用途 / Purpose:** 更新 `recruitable` 的状态或数据。

### InitializeUpgrades
`public void InitializeUpgrades()`

**用途 / Purpose:** 初始化 `upgrades` 的状态、资源或绑定。

### OnTransferred
`public void OnTransferred()`

**用途 / Purpose:** 当 `transferred` 事件触发时调用此方法。

### ThrowOnPropertyChanged
`public void ThrowOnPropertyChanged()`

**用途 / Purpose:** 处理 `throw on property changed` 相关逻辑。

### Equals
`public override bool Equals(object obj)`

**用途 / Purpose:** 处理 `equals` 相关逻辑。

### ExecuteSetFocused
`public void ExecuteSetFocused()`

**用途 / Purpose:** 执行 `set focused` 操作或流程。

### ExecuteSetUnfocused
`public void ExecuteSetUnfocused()`

**用途 / Purpose:** 执行 `set unfocused` 操作或流程。

### ExecuteTransferSingle
`public void ExecuteTransferSingle()`

**用途 / Purpose:** 执行 `transfer single` 操作或流程。

### ExecuteResetTrade
`public void ExecuteResetTrade()`

**用途 / Purpose:** 执行 `reset trade` 操作或流程。

### Upgrade
`public void Upgrade(int upgradeIndex, int maxUpgradeCount)`

**用途 / Purpose:** 处理 `upgrade` 相关逻辑。

### FocusUpgrade
`public void FocusUpgrade(UpgradeTargetVM upgrade)`

**用途 / Purpose:** 处理 `focus upgrade` 相关逻辑。

### RecruitAll
`public void RecruitAll()`

**用途 / Purpose:** 处理 `recruit all` 相关逻辑。

### ExecuteRecruitTroop
`public void ExecuteRecruitTroop()`

**用途 / Purpose:** 执行 `recruit troop` 操作或流程。

### ExecuteExecuteTroop
`public void ExecuteExecuteTroop()`

**用途 / Purpose:** 执行 `execute troop` 操作或流程。

### ExecuteOpenTroopEncyclopedia
`public void ExecuteOpenTroopEncyclopedia()`

**用途 / Purpose:** 执行 `open troop encyclopedia` 操作或流程。

### SetIsUpgradeButtonHighlighted
`public void SetIsUpgradeButtonHighlighted(bool isHighlighted)`

**用途 / Purpose:** 设置 `is upgrade button highlighted` 的值或状态。

### GetNumOfCategoryItemPartyHas
`public int GetNumOfCategoryItemPartyHas(ItemRoster items, ItemCategory itemCategory)`

**用途 / Purpose:** 获取 `num of category item party has` 的当前值。

### GetHashCode
`public override int GetHashCode()`

**用途 / Purpose:** 获取 `hash code` 的当前值。

## 使用示例

```csharp
var value = new PartyCharacterVM();
value.UpdateTalkable();
```

## 参见

- [完整类目录](../catalog)