<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EncyclopediaSettlementPageVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# EncyclopediaSettlementPageVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class EncyclopediaSettlementPageVM : EncyclopediaContentPageVM`
**Base:** `EncyclopediaContentPageVM`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages/EncyclopediaSettlementPageVM.cs`

## Overview

`EncyclopediaSettlementPageVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `OwnerBanner` | `public EncyclopediaFactionVM OwnerBanner { get; set; }` |
| `BoundSettlement` | `public EncyclopediaSettlementVM BoundSettlement { get; set; }` |
| `IsFortification` | `public bool IsFortification { get; set; }` |
| `IsTrackerButtonHighlightEnabled` | `public bool IsTrackerButtonHighlightEnabled { get; set; }` |
| `HasBoundSettlement` | `public bool HasBoundSettlement { get; set; }` |
| `SettlementCropPosition` | `public double SettlementCropPosition { get; set; }` |
| `BoundSettlementText` | `public string BoundSettlementText { get; set; }` |
| `TrackText` | `public string TrackText { get; set; }` |
| `SettlementPath` | `public string SettlementPath { get; set; }` |
| `SettlementName` | `public string SettlementName { get; set; }` |
| `InformationText` | `public string InformationText { get; set; }` |
| `Owner` | `public HeroVM Owner { get; set; }` |
| `SettlementsText` | `public string SettlementsText { get; set; }` |
| `SettlementImageID` | `public string SettlementImageID { get; set; }` |
| `NotableCharactersText` | `public string NotableCharactersText { get; set; }` |
| `SettlementType` | `public int SettlementType { get; set; }` |
| `History` | `public MBBindingList<EncyclopediaHistoryEventVM> History { get; set; }` |
| `Settlements` | `public MBBindingList<EncyclopediaSettlementVM> Settlements { get; set; }` |
| `NotableCharacters` | `public MBBindingList<HeroVM> NotableCharacters { get; set; }` |
| `ShowInMapHint` | `public HintViewModel ShowInMapHint { get; set; }` |
| `LeftSideProperties` | `public MBBindingList<EncyclopediaSettlementPageStatItemVM> LeftSideProperties { get; set; }` |
| `RightSideProperties` | `public MBBindingList<EncyclopediaSettlementPageStatItemVM> RightSideProperties { get; set; }` |
| `NameText` | `public string NameText { get; set; }` |
| `CultureText` | `public string CultureText { get; set; }` |
| `OwnerText` | `public string OwnerText { get; set; }` |
| `IsVisualTrackerSelected` | `public bool IsVisualTrackerSelected { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### Refresh
`public override void Refresh()`

**Purpose:** Refreshes the display or cache of `refresh`.

### GetName
`public override string GetName()`

**Purpose:** Gets the current value of `name`.

### ExecuteTrack
`public void ExecuteTrack()`

**Purpose:** Executes the `track` operation or workflow.

### GetNavigationBarURL
`public override string GetNavigationBarURL()`

**Purpose:** Gets the current value of `navigation bar u r l`.

### ExecuteBoundSettlementLink
`public void ExecuteBoundSettlementLink()`

**Purpose:** Executes the `bound settlement link` operation or workflow.

### ExecuteSwitchBookmarkedState
`public override void ExecuteSwitchBookmarkedState()`

**Purpose:** Executes the `switch bookmarked state` operation or workflow.

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

## Usage Example

```csharp
var value = new EncyclopediaSettlementPageVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)