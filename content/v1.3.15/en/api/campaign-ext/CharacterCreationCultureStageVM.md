---
title: "CharacterCreationCultureStageVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CharacterCreationCultureStageVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CharacterCreationCultureStageVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CharacterCreationCultureStageVM : CharacterCreationStageBaseVM`
**Base:** `CharacterCreationStageBaseVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterCreation/CharacterCreationCultureStageVM.cs`

## Overview

`CharacterCreationCultureStageVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey { get; set; }` |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey { get; set; }` |
| `IsActive` | `public bool IsActive { get; set; }` |
| `Cultures` | `public MBBindingList<CharacterCreationCultureVM> Cultures { get; set; }` |
| `CurrentSelectedCulture` | `public CharacterCreationCultureVM CurrentSelectedCulture { get; set; }` |

## Key Methods

### OnCultureSelection
`public void OnCultureSelection(CharacterCreationCultureVM selectedCulture)`

**Purpose:** Called when the `culture selection` event is raised.

### OnNextStage
`public override void OnNextStage()`

**Purpose:** Called when the `next stage` event is raised.

### OnPreviousStage
`public override void OnPreviousStage()`

**Purpose:** Called when the `previous stage` event is raised.

### CanAdvanceToNextStage
`public override bool CanAdvanceToNextStage()`

**Purpose:** Checks whether the current object can `advance to next stage`.

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

### SetCancelInputKey
`public void SetCancelInputKey(HotKey hotKey)`

**Purpose:** Sets the value or state of `cancel input key`.

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotKey)`

**Purpose:** Sets the value or state of `done input key`.

## Usage Example

```csharp
var value = new CharacterCreationCultureStageVM();
value.OnCultureSelection(selectedCulture);
```

## See Also

- [Complete Class Catalog](../catalog)