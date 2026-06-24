<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `UpgradingTroopsStep2Tutorial`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# UpgradingTroopsStep2Tutorial

**Namespace:** StoryMode.GauntletUI.Tutorial
**Module:** StoryMode.GauntletUI
**Type:** `public class UpgradingTroopsStep2Tutorial : TutorialItemBase`
**Base:** `TutorialItemBase`
**File:** `StoryMode.GauntletUI/Tutorial/UpgradingTroopsStep2Tutorial.cs`

## Overview

`UpgradingTroopsStep2Tutorial` lives in `StoryMode.GauntletUI.Tutorial` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `StoryMode.GauntletUI.Tutorial` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### IsConditionsMetForCompletion
`public override bool IsConditionsMetForCompletion()`

**Purpose:** Handles logic related to `is conditions met for completion`.

### OnPlayerToggledUpgradePopup
`public override void OnPlayerToggledUpgradePopup(PlayerToggledUpgradePopupEvent obj)`

**Purpose:** Called when the `player toggled upgrade popup` event is raised.

### OnPlayerUpgradeTroop
`public override void OnPlayerUpgradeTroop(CharacterObject arg1, CharacterObject arg2, int arg3)`

**Purpose:** Called when the `player upgrade troop` event is raised.

### IsConditionsMetForActivation
`public override bool IsConditionsMetForActivation()`

**Purpose:** Handles logic related to `is conditions met for activation`.

### GetTutorialsRelevantContext
`public override TutorialContexts GetTutorialsRelevantContext()`

**Purpose:** Gets the current value of `tutorials relevant context`.

## Usage Example

```csharp
var value = new UpgradingTroopsStep2Tutorial();
value.IsConditionsMetForCompletion();
```

## See Also

- [Complete Class Catalog](../catalog)