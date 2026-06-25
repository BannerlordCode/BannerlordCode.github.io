---
title: "PartyCharacterVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PartyCharacterVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PartyCharacterVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Party
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class PartyCharacterVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.Party/PartyCharacterVM.cs`

## Overview

`PartyCharacterVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.Party` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Party` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Troops` | `public TroopRoster Troops { get; }` |
| `StringId` | `public string StringId { get; }` |
| `Troop` | `public TroopRosterElement Troop { get; set; }` |
| `Character` | `public CharacterObject Character { get; set; }` |
| `IsFormationEnabled` | `public bool IsFormationEnabled { get; set; }` |
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
| `WoundedCount` | `public int WoundedCount { get; set; }` |
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

## Key Methods

### UpdateTalkable
`public void UpdateTalkable()`

**Purpose:** Updates the state or data of `talkable`.

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### ExecuteSetSelected
`public void ExecuteSetSelected()`

**Purpose:** Executes the `set selected` operation or workflow.

### ExecuteTalk
`public void ExecuteTalk()`

**Purpose:** Executes the `talk` operation or workflow.

### UpdateTradeData
`public void UpdateTradeData()`

**Purpose:** Updates the state or data of `trade data`.

### UpdateRecruitable
`public void UpdateRecruitable()`

**Purpose:** Updates the state or data of `recruitable`.

### InitializeUpgrades
`public void InitializeUpgrades()`

**Purpose:** Initializes the state, resources, or bindings for `upgrades`.

### OnTransferred
`public void OnTransferred()`

**Purpose:** Called when the `transferred` event is raised.

### ThrowOnPropertyChanged
`public void ThrowOnPropertyChanged()`

**Purpose:** Handles logic related to `throw on property changed`.

### Equals
`public override bool Equals(object obj)`

**Purpose:** Handles logic related to `equals`.

### ExecuteSetFocused
`public void ExecuteSetFocused()`

**Purpose:** Executes the `set focused` operation or workflow.

### ExecuteSetUnfocused
`public void ExecuteSetUnfocused()`

**Purpose:** Executes the `set unfocused` operation or workflow.

### ExecuteTransferSingle
`public void ExecuteTransferSingle()`

**Purpose:** Executes the `transfer single` operation or workflow.

### ExecuteResetTrade
`public void ExecuteResetTrade()`

**Purpose:** Executes the `reset trade` operation or workflow.

### Upgrade
`public void Upgrade(int upgradeIndex, int maxUpgradeCount)`

**Purpose:** Handles logic related to `upgrade`.

### FocusUpgrade
`public void FocusUpgrade(UpgradeTargetVM upgrade)`

**Purpose:** Handles logic related to `focus upgrade`.

### RecruitAll
`public void RecruitAll()`

**Purpose:** Handles logic related to `recruit all`.

### ExecuteRecruitTroop
`public void ExecuteRecruitTroop()`

**Purpose:** Executes the `recruit troop` operation or workflow.

### ExecuteExecuteTroop
`public void ExecuteExecuteTroop()`

**Purpose:** Executes the `execute troop` operation or workflow.

### ExecuteOpenTroopEncyclopedia
`public void ExecuteOpenTroopEncyclopedia()`

**Purpose:** Executes the `open troop encyclopedia` operation or workflow.

### SetIsUpgradeButtonHighlighted
`public void SetIsUpgradeButtonHighlighted(bool isHighlighted)`

**Purpose:** Sets the value or state of `is upgrade button highlighted`.

### GetNumOfCategoryItemPartyHas
`public int GetNumOfCategoryItemPartyHas(ItemRoster items, ItemCategory itemCategory)`

**Purpose:** Gets the current value of `num of category item party has`.

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Gets the current value of `hash code`.

## Usage Example

```csharp
var value = new PartyCharacterVM();
value.UpdateTalkable();
```

## See Also

- [Complete Class Catalog](../catalog)