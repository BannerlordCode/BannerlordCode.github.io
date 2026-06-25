---
title: "MPCosmeticObtainPopupVM"
description: "Auto-generated class reference for MPCosmeticObtainPopupVM."
---
# MPCosmeticObtainPopupVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPCosmeticObtainPopupVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby/MPCosmeticObtainPopupVM.cs`

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

**Purpose:** Keeps the display or cache of `values` in sync with the underlying state.

```csharp
// Obtain an instance of MPCosmeticObtainPopupVM from the subsystem API first
MPCosmeticObtainPopupVM mPCosmeticObtainPopupVM = ...;
mPCosmeticObtainPopupVM.RefreshValues();
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Invoked when the `finalize` event is raised.

```csharp
// Obtain an instance of MPCosmeticObtainPopupVM from the subsystem API first
MPCosmeticObtainPopupVM mPCosmeticObtainPopupVM = ...;
mPCosmeticObtainPopupVM.OnFinalize();
```

### OpenWith
`public void OpenWith(MPArmoryCosmeticClothingItemVM item)`

**Purpose:** Opens the resource or UI associated with `with`.

```csharp
// Obtain an instance of MPCosmeticObtainPopupVM from the subsystem API first
MPCosmeticObtainPopupVM mPCosmeticObtainPopupVM = ...;
mPCosmeticObtainPopupVM.OpenWith(item);
```

### OpenWith
`public void OpenWith(MPArmoryCosmeticTauntItemVM item, CharacterViewModel sourceCharacter)`

**Purpose:** Opens the resource or UI associated with `with`.

```csharp
// Obtain an instance of MPCosmeticObtainPopupVM from the subsystem API first
MPCosmeticObtainPopupVM mPCosmeticObtainPopupVM = ...;
mPCosmeticObtainPopupVM.OpenWith(item, sourceCharacter);
```

### ExecuteSelectNextAnimation
`public void ExecuteSelectNextAnimation(int increment)`

**Purpose:** Runs the operation or workflow associated with `select next animation`.

```csharp
// Obtain an instance of MPCosmeticObtainPopupVM from the subsystem API first
MPCosmeticObtainPopupVM mPCosmeticObtainPopupVM = ...;
mPCosmeticObtainPopupVM.ExecuteSelectNextAnimation(0);
```

### OpenWith
`public void OpenWith(MPLobbyCosmeticSigilItemVM sigilItem)`

**Purpose:** Opens the resource or UI associated with `with`.

```csharp
// Obtain an instance of MPCosmeticObtainPopupVM from the subsystem API first
MPCosmeticObtainPopupVM mPCosmeticObtainPopupVM = ...;
mPCosmeticObtainPopupVM.OpenWith(sigilItem);
```

### ExecuteClosePopup
`public void ExecuteClosePopup()`

**Purpose:** Runs the operation or workflow associated with `close popup`.

```csharp
// Obtain an instance of MPCosmeticObtainPopupVM from the subsystem API first
MPCosmeticObtainPopupVM mPCosmeticObtainPopupVM = ...;
mPCosmeticObtainPopupVM.ExecuteClosePopup();
```

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotKey)`

**Purpose:** Assigns a new value to `done input key` and updates the object's internal state.

```csharp
// Obtain an instance of MPCosmeticObtainPopupVM from the subsystem API first
MPCosmeticObtainPopupVM mPCosmeticObtainPopupVM = ...;
mPCosmeticObtainPopupVM.SetDoneInputKey(hotKey);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MPCosmeticObtainPopupVM mPCosmeticObtainPopupVM = ...;
mPCosmeticObtainPopupVM.RefreshValues();
```

## See Also

- [Area Index](../)