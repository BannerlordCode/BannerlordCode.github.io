<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CraftingStep1Tutorial`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CraftingStep1Tutorial

**Namespace:** StoryMode.GauntletUI.Tutorial
**Module:** StoryMode.GauntletUI
**Type:** `public class CraftingStep1Tutorial : TutorialItemBase`
**Base:** `TutorialItemBase`
**File:** `StoryMode.GauntletUI/Tutorial/CraftingStep1Tutorial.cs`

## Overview

`CraftingStep1Tutorial` lives in `StoryMode.GauntletUI.Tutorial` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `StoryMode.GauntletUI.Tutorial` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetTutorialsRelevantContext
`public override TutorialContexts GetTutorialsRelevantContext()`

**Purpose:** Gets the current value of `tutorials relevant context`.

### OnCraftingWeaponClassSelectionOpened
`public override void OnCraftingWeaponClassSelectionOpened(CraftingWeaponClassSelectionOpenedEvent obj)`

**Purpose:** Called when the `crafting weapon class selection opened` event is raised.

### OnCraftingOrderSelectionOpened
`public override void OnCraftingOrderSelectionOpened(CraftingOrderSelectionOpenedEvent obj)`

**Purpose:** Called when the `crafting order selection opened` event is raised.

### OnCraftingOnWeaponResultPopupOpened
`public override void OnCraftingOnWeaponResultPopupOpened(CraftingWeaponResultPopupToggledEvent obj)`

**Purpose:** Called when the `crafting on weapon result popup opened` event is raised.

### IsConditionsMetForActivation
`public override bool IsConditionsMetForActivation()`

**Purpose:** Handles logic related to `is conditions met for activation`.

### IsConditionsMetForCompletion
`public override bool IsConditionsMetForCompletion()`

**Purpose:** Handles logic related to `is conditions met for completion`.

## Usage Example

```csharp
var value = new CraftingStep1Tutorial();
value.GetTutorialsRelevantContext();
```

## See Also

- [Complete Class Catalog](../catalog)