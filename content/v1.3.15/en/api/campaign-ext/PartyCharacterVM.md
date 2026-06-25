---
title: "PartyCharacterVM"
description: "Auto-generated class reference for PartyCharacterVM."
---
# PartyCharacterVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Party
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class PartyCharacterVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/PartyCharacterVM.cs`

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

## Key Methods

### UpdateTalkable
`public void UpdateTalkable()`

**Purpose:** Recalculates and stores the latest representation of talkable.

```csharp
// Obtain an instance of PartyCharacterVM from the subsystem API first
PartyCharacterVM partyCharacterVM = ...;
partyCharacterVM.UpdateTalkable();
```

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of PartyCharacterVM from the subsystem API first
PartyCharacterVM partyCharacterVM = ...;
partyCharacterVM.RefreshValues();
```

### ExecuteSetSelected
`public void ExecuteSetSelected()`

**Purpose:** Runs the operation or workflow associated with set selected.

```csharp
// Obtain an instance of PartyCharacterVM from the subsystem API first
PartyCharacterVM partyCharacterVM = ...;
partyCharacterVM.ExecuteSetSelected();
```

### ExecuteTalk
`public void ExecuteTalk()`

**Purpose:** Runs the operation or workflow associated with talk.

```csharp
// Obtain an instance of PartyCharacterVM from the subsystem API first
PartyCharacterVM partyCharacterVM = ...;
partyCharacterVM.ExecuteTalk();
```

### UpdateTradeData
`public void UpdateTradeData()`

**Purpose:** Recalculates and stores the latest representation of trade data.

```csharp
// Obtain an instance of PartyCharacterVM from the subsystem API first
PartyCharacterVM partyCharacterVM = ...;
partyCharacterVM.UpdateTradeData();
```

### UpdateRecruitable
`public void UpdateRecruitable()`

**Purpose:** Recalculates and stores the latest representation of recruitable.

```csharp
// Obtain an instance of PartyCharacterVM from the subsystem API first
PartyCharacterVM partyCharacterVM = ...;
partyCharacterVM.UpdateRecruitable();
```

### InitializeUpgrades
`public void InitializeUpgrades()`

**Purpose:** Prepares the resources, state, or bindings required by upgrades.

```csharp
// Obtain an instance of PartyCharacterVM from the subsystem API first
PartyCharacterVM partyCharacterVM = ...;
partyCharacterVM.InitializeUpgrades();
```

### OnTransferred
`public void OnTransferred()`

**Purpose:** Invoked when the transferred event is raised.

```csharp
// Obtain an instance of PartyCharacterVM from the subsystem API first
PartyCharacterVM partyCharacterVM = ...;
partyCharacterVM.OnTransferred();
```

### ThrowOnPropertyChanged
`public void ThrowOnPropertyChanged()`

**Purpose:** Executes the ThrowOnPropertyChanged logic.

```csharp
// Obtain an instance of PartyCharacterVM from the subsystem API first
PartyCharacterVM partyCharacterVM = ...;
partyCharacterVM.ThrowOnPropertyChanged();
```

### Equals
`public override bool Equals(object obj)`

**Purpose:** Compares the this instance with the supplied instance for equality.

```csharp
// Obtain an instance of PartyCharacterVM from the subsystem API first
PartyCharacterVM partyCharacterVM = ...;
var result = partyCharacterVM.Equals(obj);
```

### ExecuteSetFocused
`public void ExecuteSetFocused()`

**Purpose:** Runs the operation or workflow associated with set focused.

```csharp
// Obtain an instance of PartyCharacterVM from the subsystem API first
PartyCharacterVM partyCharacterVM = ...;
partyCharacterVM.ExecuteSetFocused();
```

### ExecuteSetUnfocused
`public void ExecuteSetUnfocused()`

**Purpose:** Runs the operation or workflow associated with set unfocused.

```csharp
// Obtain an instance of PartyCharacterVM from the subsystem API first
PartyCharacterVM partyCharacterVM = ...;
partyCharacterVM.ExecuteSetUnfocused();
```

### ExecuteTransferSingle
`public void ExecuteTransferSingle()`

**Purpose:** Runs the operation or workflow associated with transfer single.

```csharp
// Obtain an instance of PartyCharacterVM from the subsystem API first
PartyCharacterVM partyCharacterVM = ...;
partyCharacterVM.ExecuteTransferSingle();
```

### ExecuteResetTrade
`public void ExecuteResetTrade()`

**Purpose:** Runs the operation or workflow associated with reset trade.

```csharp
// Obtain an instance of PartyCharacterVM from the subsystem API first
PartyCharacterVM partyCharacterVM = ...;
partyCharacterVM.ExecuteResetTrade();
```

### Upgrade
`public void Upgrade(int upgradeIndex, int maxUpgradeCount)`

**Purpose:** Executes the Upgrade logic.

```csharp
// Obtain an instance of PartyCharacterVM from the subsystem API first
PartyCharacterVM partyCharacterVM = ...;
partyCharacterVM.Upgrade(0, 0);
```

### FocusUpgrade
`public void FocusUpgrade(UpgradeTargetVM upgrade)`

**Purpose:** Executes the FocusUpgrade logic.

```csharp
// Obtain an instance of PartyCharacterVM from the subsystem API first
PartyCharacterVM partyCharacterVM = ...;
partyCharacterVM.FocusUpgrade(upgrade);
```

### RecruitAll
`public void RecruitAll()`

**Purpose:** Executes the RecruitAll logic.

```csharp
// Obtain an instance of PartyCharacterVM from the subsystem API first
PartyCharacterVM partyCharacterVM = ...;
partyCharacterVM.RecruitAll();
```

### ExecuteRecruitTroop
`public void ExecuteRecruitTroop()`

**Purpose:** Runs the operation or workflow associated with recruit troop.

```csharp
// Obtain an instance of PartyCharacterVM from the subsystem API first
PartyCharacterVM partyCharacterVM = ...;
partyCharacterVM.ExecuteRecruitTroop();
```

### ExecuteExecuteTroop
`public void ExecuteExecuteTroop()`

**Purpose:** Runs the operation or workflow associated with execute troop.

```csharp
// Obtain an instance of PartyCharacterVM from the subsystem API first
PartyCharacterVM partyCharacterVM = ...;
partyCharacterVM.ExecuteExecuteTroop();
```

### ExecuteOpenTroopEncyclopedia
`public void ExecuteOpenTroopEncyclopedia()`

**Purpose:** Runs the operation or workflow associated with open troop encyclopedia.

```csharp
// Obtain an instance of PartyCharacterVM from the subsystem API first
PartyCharacterVM partyCharacterVM = ...;
partyCharacterVM.ExecuteOpenTroopEncyclopedia();
```

### SetIsUpgradeButtonHighlighted
`public void SetIsUpgradeButtonHighlighted(bool isHighlighted)`

**Purpose:** Assigns a new value to is upgrade button highlighted and updates the object's internal state.

```csharp
// Obtain an instance of PartyCharacterVM from the subsystem API first
PartyCharacterVM partyCharacterVM = ...;
partyCharacterVM.SetIsUpgradeButtonHighlighted(false);
```

### GetNumOfCategoryItemPartyHas
`public int GetNumOfCategoryItemPartyHas(ItemRoster items, ItemCategory itemCategory)`

**Purpose:** Reads and returns the num of category item party has value held by the this instance.

```csharp
// Obtain an instance of PartyCharacterVM from the subsystem API first
PartyCharacterVM partyCharacterVM = ...;
var result = partyCharacterVM.GetNumOfCategoryItemPartyHas(items, itemCategory);
```

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Returns a hash code for the this instance, used for fast lookup in dictionaries and hash sets.

```csharp
// Obtain an instance of PartyCharacterVM from the subsystem API first
PartyCharacterVM partyCharacterVM = ...;
var result = partyCharacterVM.GetHashCode();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
PartyCharacterVM partyCharacterVM = ...;
partyCharacterVM.UpdateTalkable();
```

## See Also

- [Area Index](../)