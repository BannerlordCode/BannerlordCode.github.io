---
title: "BannerEditorVM"
description: "Auto-generated class reference for BannerEditorVM."
---
# BannerEditorVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class BannerEditorVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/BannerEditorVM.cs`

## Overview

`BannerEditorVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Character` | `public BasicCharacterObject Character { get; }` |
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

**Purpose:** **Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of BannerEditorVM from the subsystem API first
BannerEditorVM bannerEditorVM = ...;
bannerEditorVM.RefreshValues();
```

### RefreshSelectedColorsAndSigils
`public void RefreshSelectedColorsAndSigils()`

**Purpose:** **Purpose:** Keeps the display or cache of selected colors and sigils in sync with the underlying state.

```csharp
// Obtain an instance of BannerEditorVM from the subsystem API first
BannerEditorVM bannerEditorVM = ...;
bannerEditorVM.RefreshSelectedColorsAndSigils();
```

### SetClanRelatedRules
`public void SetClanRelatedRules(bool canChangeBackgroundColor)`

**Purpose:** **Purpose:** Assigns a new value to clan related rules and updates the object's internal state.

```csharp
// Obtain an instance of BannerEditorVM from the subsystem API first
BannerEditorVM bannerEditorVM = ...;
bannerEditorVM.SetClanRelatedRules(false);
```

### ExecuteSwitchColors
`public void ExecuteSwitchColors()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with switch colors.

```csharp
// Obtain an instance of BannerEditorVM from the subsystem API first
BannerEditorVM bannerEditorVM = ...;
bannerEditorVM.ExecuteSwitchColors();
```

### ExecuteDone
`public void ExecuteDone()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with done.

```csharp
// Obtain an instance of BannerEditorVM from the subsystem API first
BannerEditorVM bannerEditorVM = ...;
bannerEditorVM.ExecuteDone();
```

### ExecuteCancel
`public void ExecuteCancel()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with cancel.

```csharp
// Obtain an instance of BannerEditorVM from the subsystem API first
BannerEditorVM bannerEditorVM = ...;
bannerEditorVM.ExecuteCancel();
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** **Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of BannerEditorVM from the subsystem API first
BannerEditorVM bannerEditorVM = ...;
bannerEditorVM.OnFinalize();
```

### SetCancelInputKey
`public void SetCancelInputKey(HotKey hotKey)`

**Purpose:** **Purpose:** Assigns a new value to cancel input key and updates the object's internal state.

```csharp
// Obtain an instance of BannerEditorVM from the subsystem API first
BannerEditorVM bannerEditorVM = ...;
bannerEditorVM.SetCancelInputKey(hotKey);
```

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotKey)`

**Purpose:** **Purpose:** Assigns a new value to done input key and updates the object's internal state.

```csharp
// Obtain an instance of BannerEditorVM from the subsystem API first
BannerEditorVM bannerEditorVM = ...;
bannerEditorVM.SetDoneInputKey(hotKey);
```

### AddCameraControlInputKey
`public void AddCameraControlInputKey(HotKey hotKey)`

**Purpose:** **Purpose:** Adds camera control input key to the current collection or state.

```csharp
// Obtain an instance of BannerEditorVM from the subsystem API first
BannerEditorVM bannerEditorVM = ...;
bannerEditorVM.AddCameraControlInputKey(hotKey);
```

### AddCameraControlInputKey
`public void AddCameraControlInputKey(GameKey gameKey)`

**Purpose:** **Purpose:** Adds camera control input key to the current collection or state.

```csharp
// Obtain an instance of BannerEditorVM from the subsystem API first
BannerEditorVM bannerEditorVM = ...;
bannerEditorVM.AddCameraControlInputKey(gameKey);
```

### AddCameraControlInputKey
`public void AddCameraControlInputKey(GameAxisKey gameAxisKey, TextObject keyName)`

**Purpose:** **Purpose:** Adds camera control input key to the current collection or state.

```csharp
// Obtain an instance of BannerEditorVM from the subsystem API first
BannerEditorVM bannerEditorVM = ...;
bannerEditorVM.AddCameraControlInputKey(gameAxisKey, keyName);
```

### ExecuteGoToIndex
`public void ExecuteGoToIndex(int index)`

**Purpose:** **Purpose:** Runs the operation or workflow associated with go to index.

```csharp
// Obtain an instance of BannerEditorVM from the subsystem API first
BannerEditorVM bannerEditorVM = ...;
bannerEditorVM.ExecuteGoToIndex(0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
BannerEditorVM bannerEditorVM = ...;
bannerEditorVM.RefreshValues();
```

## See Also

- [Area Index](../)