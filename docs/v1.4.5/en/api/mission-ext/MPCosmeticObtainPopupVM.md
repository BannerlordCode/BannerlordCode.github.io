<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MPCosmeticObtainPopupVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MPCosmeticObtainPopupVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPCosmeticObtainPopupVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby/MPCosmeticObtainPopupVM.cs`

## Overview

`MPCosmeticObtainPopupVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `CanObtain` | `public bool CanObtain { get; set; }` |
| `IsOpenedWithClothingItem` | `public bool IsOpenedWithClothingItem { get; set; }` |
| `IsOpenedWithSigilItem` | `public bool IsOpenedWithSigilItem { get; set; }` |
| `IsOpenedWithTauntItem` | `public bool IsOpenedWithTauntItem { get; set; }` |
| `IsObtainSuccessful` | `public bool IsObtainSuccessful { get; set; }` |
| `ObtainState` | `public int ObtainState { get; set; }` |
| `ObtainDescriptionText` | `public string ObtainDescriptionText { get; set; }` |
| `AnimationVariationText` | `public string AnimationVariationText { get; set; }` |
| `ContinueText` | `public string ContinueText { get; set; }` |
| `NotEnoughLootText` | `public string NotEnoughLootText { get; set; }` |
| `ObtainResultText` | `public string ObtainResultText { get; set; }` |
| `PreviewAsText` | `public string PreviewAsText { get; set; }` |
| `CurrentLootText` | `public string CurrentLootText { get; set; }` |
| `ClickToCloseText` | `public string ClickToCloseText { get; set; }` |
| `CharacterVisual` | `public CharacterViewModel CharacterVisual { get; set; }` |
| `SigilItem` | `public MPLobbyCosmeticSigilItemVM SigilItem { get; set; }` |
| `Item` | `public MPArmoryCosmeticClothingItemVM Item { get; set; }` |
| `TauntItem` | `public MPArmoryCosmeticTauntItemVM TauntItem { get; set; }` |
| `ItemVisual` | `public ItemCollectionElementViewModel ItemVisual { get; set; }` |
| `Cultures` | `public MBBindingList<MPCultureItemVM> Cultures { get; set; }` |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

### OpenWith
`public void OpenWith(MPArmoryCosmeticClothingItemVM item)`

**Purpose:** Handles logic related to `open with`.

### OpenWith
`public void OpenWith(MPArmoryCosmeticTauntItemVM item, CharacterViewModel sourceCharacter)`

**Purpose:** Handles logic related to `open with`.

### ExecuteSelectNextAnimation
`public void ExecuteSelectNextAnimation(int increment)`

**Purpose:** Executes the `select next animation` operation or workflow.

### OpenWith
`public void OpenWith(MPLobbyCosmeticSigilItemVM sigilItem)`

**Purpose:** Handles logic related to `open with`.

### ExecuteClosePopup
`public void ExecuteClosePopup()`

**Purpose:** Executes the `close popup` operation or workflow.

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotKey)`

**Purpose:** Sets the value or state of `done input key`.

## Usage Example

```csharp
var value = new MPCosmeticObtainPopupVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)