<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BannerEditorVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# BannerEditorVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class BannerEditorVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection/BannerEditorVM.cs`

## Overview

`BannerEditorVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Character` | `public BasicCharacterObject Character { get; set; }` |
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey { get; set; }` |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey { get; set; }` |
| `CameraControlKeys` | `public MBBindingList<InputKeyItemVM> CameraControlKeys { get; set; }` |
| `CategoryNames` | `public MBBindingList<HintViewModel> CategoryNames { get; set; }` |
| `IconsList` | `public MBBindingList<BannerIconVM> IconsList { get; set; }` |
| `PrimaryColorList` | `public MBBindingList<BannerColorVM> PrimaryColorList { get; set; }` |
| `SigilColorList` | `public MBBindingList<BannerColorVM> SigilColorList { get; set; }` |
| `RandomizeHint` | `public HintViewModel RandomizeHint { get; set; }` |
| `UndoHint` | `public HintViewModel UndoHint { get; set; }` |
| `RedoHint` | `public HintViewModel RedoHint { get; set; }` |
| `ResetHint` | `public HintViewModel ResetHint { get; set; }` |
| `CurrentShieldName` | `public string CurrentShieldName { get; set; }` |
| `MinIconSize` | `public int MinIconSize { get; set; }` |
| `MaxIconSize` | `public int MaxIconSize { get; set; }` |
| `CurrentIconSize` | `public int CurrentIconSize { get; set; }` |
| `PrimaryColorText` | `public string PrimaryColorText { get; set; }` |
| `SizeText` | `public string SizeText { get; set; }` |
| `SigilColorText` | `public string SigilColorText { get; set; }` |
| `CancelText` | `public string CancelText { get; set; }` |
| `DoneText` | `public string DoneText { get; set; }` |
| `BannerVM` | `public BannerViewModel BannerVM { get; set; }` |
| `IconCodes` | `public string IconCodes { get; set; }` |
| `ColorCodes` | `public string ColorCodes { get; set; }` |
| `CanChangeBackgroundColor` | `public bool CanChangeBackgroundColor { get; set; }` |
| `CharacterGamepadControlsEnabled` | `public bool CharacterGamepadControlsEnabled { get; set; }` |
| `Title` | `public string Title { get; set; }` |
| `Description` | `public string Description { get; set; }` |
| `TotalStageCount` | `public int TotalStageCount { get; set; }` |
| `CurrentStageIndex` | `public int CurrentStageIndex { get; set; }` |
| `FurthestIndex` | `public int FurthestIndex { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### RefreshSelectedColorsAndSigils
`public void RefreshSelectedColorsAndSigils()`

**Purpose:** Refreshes the display or cache of `selected colors and sigils`.

### SetClanRelatedRules
`public void SetClanRelatedRules(bool canChangeBackgroundColor)`

**Purpose:** Sets the value or state of `clan related rules`.

### ExecuteSwitchColors
`public void ExecuteSwitchColors()`

**Purpose:** Executes the `switch colors` operation or workflow.

### ExecuteDone
`public void ExecuteDone()`

**Purpose:** Executes the `done` operation or workflow.

### ExecuteCancel
`public void ExecuteCancel()`

**Purpose:** Executes the `cancel` operation or workflow.

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

### SetCancelInputKey
`public void SetCancelInputKey(HotKey hotKey)`

**Purpose:** Sets the value or state of `cancel input key`.

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotKey)`

**Purpose:** Sets the value or state of `done input key`.

### AddCameraControlInputKey
`public void AddCameraControlInputKey(HotKey hotKey)`

**Purpose:** Adds `camera control input key` to the current collection or state.

### AddCameraControlInputKey
`public void AddCameraControlInputKey(GameKey gameKey)`

**Purpose:** Adds `camera control input key` to the current collection or state.

### AddCameraControlInputKey
`public void AddCameraControlInputKey(GameAxisKey gameAxisKey, TextObject keyName)`

**Purpose:** Adds `camera control input key` to the current collection or state.

### ExecuteGoToIndex
`public void ExecuteGoToIndex(int index)`

**Purpose:** Executes the `go to index` operation or workflow.

## Usage Example

```csharp
var value = new BannerEditorVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)