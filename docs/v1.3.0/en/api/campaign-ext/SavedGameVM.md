<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SavedGameVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SavedGameVM

**Namespace:** SandBox.ViewModelCollection.SaveLoad
**Module:** SandBox.ViewModelCollection
**Type:** `public class SavedGameVM : ViewModel`
**Base:** `ViewModel`
**File:** `SandBox.ViewModelCollection/SaveLoad/SavedGameVM.cs`

## Overview

`SavedGameVM` lives in `SandBox.ViewModelCollection.SaveLoad` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.ViewModelCollection.SaveLoad` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Save` | `public SaveGameFileInfo Save { get; }` |
| `RequiresInquiryOnLoad` | `public bool RequiresInquiryOnLoad { get; }` |
| `IsModuleDiscrepancyDetected` | `public bool IsModuleDiscrepancyDetected { get; }` |
| `SavedGameProperties` | `public MBBindingList<SavedGamePropertyVM> SavedGameProperties { get; set; }` |
| `LoadedModulesInSave` | `public MBBindingList<SavedGameModuleInfoVM> LoadedModulesInSave { get; set; }` |
| `SaveVersionAsString` | `public string SaveVersionAsString { get; set; }` |
| `DeleteText` | `public string DeleteText { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `IsCorrupted` | `public bool IsCorrupted { get; set; }` |
| `BannerTextCode` | `public string BannerTextCode { get; set; }` |
| `SaveLoadText` | `public string SaveLoadText { get; set; }` |
| `OverrideSaveText` | `public string OverrideSaveText { get; set; }` |
| `UpdateSaveText` | `public string UpdateSaveText { get; set; }` |
| `ModulesText` | `public string ModulesText { get; set; }` |
| `CorruptedSaveText` | `public string CorruptedSaveText { get; set; }` |
| `NameText` | `public string NameText { get; set; }` |
| `GameTimeText` | `public string GameTimeText { get; set; }` |
| `CharacterNameText` | `public string CharacterNameText { get; set; }` |
| `MainHeroVisualCode` | `public string MainHeroVisualCode { get; set; }` |
| `CharacterVisual` | `public CharacterViewModel CharacterVisual { get; set; }` |
| `ClanBanner` | `public BannerImageIdentifierVM ClanBanner { get; set; }` |
| `RealTimeText1` | `public string RealTimeText1 { get; set; }` |
| `RealTimeText2` | `public string RealTimeText2 { get; set; }` |
| `LevelText` | `public string LevelText { get; set; }` |
| `DateTimeHint` | `public HintViewModel DateTimeHint { get; set; }` |
| `UpdateButtonHint` | `public HintViewModel UpdateButtonHint { get; set; }` |
| `DisabledReasonHint` | `public HintViewModel DisabledReasonHint { get; set; }` |
| `IsFilteredOut` | `public bool IsFilteredOut { get; set; }` |
| `IsDisabled` | `public bool IsDisabled { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### ExecuteSaveLoad
`public void ExecuteSaveLoad()`

**Purpose:** Executes the `save load` operation or workflow.

### ExecuteUpdate
`public void ExecuteUpdate()`

**Purpose:** Executes the `update` operation or workflow.

### ExecuteDelete
`public void ExecuteDelete()`

**Purpose:** Executes the `delete` operation or workflow.

### ExecuteSelection
`public void ExecuteSelection()`

**Purpose:** Executes the `selection` operation or workflow.

## Usage Example

```csharp
var value = new SavedGameVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)