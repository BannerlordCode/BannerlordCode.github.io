<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `KingdomManagementVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# KingdomManagementVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class KingdomManagementVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/KingdomManagementVM.cs`

## Overview

`KingdomManagementVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Kingdom` | `public Kingdom Kingdom { get; }` |
| `KingdomActionHint` | `public BasicTooltipViewModel KingdomActionHint { get; set; }` |
| `KingdomBanner` | `public BannerImageIdentifierVM KingdomBanner { get; set; }` |
| `Leader` | `public HeroVM Leader { get; set; }` |
| `Army` | `public KingdomArmyVM Army { get; set; }` |
| `Settlement` | `public KingdomSettlementVM Settlement { get; set; }` |
| `Clan` | `public KingdomClanVM Clan { get; set; }` |
| `Policy` | `public KingdomPoliciesVM Policy { get; set; }` |
| `Diplomacy` | `public KingdomDiplomacyVM Diplomacy { get; set; }` |
| `GiftFief` | `public KingdomGiftFiefPopupVM GiftFief { get; set; }` |
| `Decision` | `public KingdomDecisionsVM Decision { get; set; }` |
| `ChangeKingdomNameHint` | `public HintViewModel ChangeKingdomNameHint { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `CanSwitchTabs` | `public bool CanSwitchTabs { get; set; }` |
| `PlayerHasKingdom` | `public bool PlayerHasKingdom { get; set; }` |
| `IsKingdomActionEnabled` | `public bool IsKingdomActionEnabled { get; set; }` |
| `PlayerCanChangeKingdomName` | `public bool PlayerCanChangeKingdomName { get; set; }` |
| `LeaderText` | `public string LeaderText { get; set; }` |
| `KingdomActionText` | `public string KingdomActionText { get; set; }` |
| `ClansText` | `public string ClansText { get; set; }` |
| `DiplomacyText` | `public string DiplomacyText { get; set; }` |
| `DoneText` | `public string DoneText { get; set; }` |
| `FiefsText` | `public string FiefsText { get; set; }` |
| `PoliciesText` | `public string PoliciesText { get; set; }` |
| `ArmiesText` | `public string ArmiesText { get; set; }` |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey { get; set; }` |
| `PreviousTabInputKey` | `public InputKeyItemVM PreviousTabInputKey { get; set; }` |
| `NextTabInputKey` | `public InputKeyItemVM NextTabInputKey { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### OnRefresh
`public void OnRefresh()`

**Purpose:** Called when the `refresh` event is raised.

### OnFrameTick
`public void OnFrameTick()`

**Purpose:** Called when the `frame tick` event is raised.

### ExecuteClose
`public void ExecuteClose()`

**Purpose:** Executes the `close` operation or workflow.

### SelectArmy
`public void SelectArmy(Army army)`

**Purpose:** Handles logic related to `select army`.

### SelectSettlement
`public void SelectSettlement(Settlement settlement)`

**Purpose:** Handles logic related to `select settlement`.

### SelectClan
`public void SelectClan(Clan clan)`

**Purpose:** Handles logic related to `select clan`.

### SelectPolicy
`public void SelectPolicy(PolicyObject policy)`

**Purpose:** Handles logic related to `select policy`.

### SelectKingdom
`public void SelectKingdom(Kingdom kingdom)`

**Purpose:** Handles logic related to `select kingdom`.

### SelectPreviousCategory
`public void SelectPreviousCategory()`

**Purpose:** Handles logic related to `select previous category`.

### SelectNextCategory
`public void SelectNextCategory()`

**Purpose:** Handles logic related to `select next category`.

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotkey)`

**Purpose:** Sets the value or state of `done input key`.

### SetCancelInputKey
`public void SetCancelInputKey(HotKey hotkey)`

**Purpose:** Sets the value or state of `cancel input key`.

### SetPreviousTabInputKey
`public void SetPreviousTabInputKey(HotKey hotkey)`

**Purpose:** Sets the value or state of `previous tab input key`.

### SetNextTabInputKey
`public void SetNextTabInputKey(HotKey hotkey)`

**Purpose:** Sets the value or state of `next tab input key`.

## Usage Example

```csharp
var value = new KingdomManagementVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)