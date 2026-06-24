<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CharacterCreationClanNamingStageVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CharacterCreationClanNamingStageVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CharacterCreationClanNamingStageVM : CharacterCreationStageBaseVM`
**Base:** `CharacterCreationStageBaseVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterCreation/CharacterCreationClanNamingStageVM.cs`

## Overview

`CharacterCreationClanNamingStageVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Character` | `public BasicCharacterObject Character { get; }` |
| `ShieldSlotIndex` | `public int ShieldSlotIndex { get; }` |
| `ShieldRosterElement` | `public ItemRosterElement ShieldRosterElement { get; }` |
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey { get; set; }` |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey { get; set; }` |
| `CameraControlKeys` | `public MBBindingList<InputKeyItemVM> CameraControlKeys { get; set; }` |
| `ClanName` | `public string ClanName { get; set; }` |
| `ClanNameNotApplicableReason` | `public string ClanNameNotApplicableReason { get; set; }` |
| `BottomHintText` | `public string BottomHintText { get; set; }` |
| `ClanBanner` | `public BannerImageIdentifierVM ClanBanner { get; set; }` |
| `CharacterGamepadControlsEnabled` | `public bool CharacterGamepadControlsEnabled { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### CanAdvanceToNextStage
`public override bool CanAdvanceToNextStage()`

**Purpose:** Checks whether the current object can `advance to next stage`.

### OnNextStage
`public override void OnNextStage()`

**Purpose:** Called when the `next stage` event is raised.

### OnPreviousStage
`public override void OnPreviousStage()`

**Purpose:** Called when the `previous stage` event is raised.

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

## Usage Example

```csharp
var value = new CharacterCreationClanNamingStageVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)