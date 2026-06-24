<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `HeirSelectionPopupVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# HeirSelectionPopupVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Map.HeirSelectionPopup
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class HeirSelectionPopupVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/HeirSelectionPopup/HeirSelectionPopupVM.cs`

## Overview

`HeirSelectionPopupVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.Map.HeirSelectionPopup` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Map.HeirSelectionPopup` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `TitleText` | `public string TitleText { get; set; }` |
| `ButtonOkLabel` | `public string ButtonOkLabel { get; set; }` |
| `NameLabel` | `public string NameLabel { get; set; }` |
| `AgeLabel` | `public string AgeLabel { get; set; }` |
| `CultureLabel` | `public string CultureLabel { get; set; }` |
| `OccupationLabel` | `public string OccupationLabel { get; set; }` |
| `ClanBanner` | `public BannerImageIdentifierVM ClanBanner { get; set; }` |
| `HeirApparents` | `public MBBindingList<HeirSelectionPopupHeroVM> HeirApparents { get; set; }` |
| `CurrentSelectedHero` | `public HeirSelectionPopupHeroVM CurrentSelectedHero { get; set; }` |
| `AreHotkeysVisible` | `public bool AreHotkeysVisible { get; set; }` |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey { get; set; }` |

## Key Methods

### Update
`public void Update()`

**Purpose:** Updates the state or data of `update`.

### ExecuteSelectHeir
`public void ExecuteSelectHeir()`

**Purpose:** Executes the `select heir` operation or workflow.

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotKey)`

**Purpose:** Sets the value or state of `done input key`.

## Usage Example

```csharp
var value = new HeirSelectionPopupVM();
value.Update();
```

## See Also

- [Complete Class Catalog](../catalog)