---
title: "GettingCompanionsStep1Tutorial"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GettingCompanionsStep1Tutorial`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GettingCompanionsStep1Tutorial

**Namespace:** StoryMode.GauntletUI.Tutorial
**Module:** StoryMode.GauntletUI
**Type:** `public class GettingCompanionsStep1Tutorial : TutorialItemBase`
**Base:** `TutorialItemBase`
**File:** `Bannerlord.Source/Modules.StoryMode/StoryMode.GauntletUI/StoryMode.GauntletUI.Tutorial/GettingCompanionsStep1Tutorial.cs`

## Overview

`GettingCompanionsStep1Tutorial` lives in `StoryMode.GauntletUI.Tutorial` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `StoryMode.GauntletUI.Tutorial` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### IsConditionsMetForCompletion
`public override bool IsConditionsMetForCompletion()`

**Purpose:** Handles logic related to `is conditions met for completion`.

### OnGameMenuOpened
`public override void OnGameMenuOpened(MenuCallbackArgs obj)`

**Purpose:** Called when the `game menu opened` event is raised.

### IsConditionsMetForActivation
`public override bool IsConditionsMetForActivation()`

**Purpose:** Handles logic related to `is conditions met for activation`.

### GetTutorialsRelevantContext
`public override TutorialContexts GetTutorialsRelevantContext()`

**Purpose:** Gets the current value of `tutorials relevant context`.

## Usage Example

```csharp
var value = new GettingCompanionsStep1Tutorial();
value.IsConditionsMetForCompletion();
```

## See Also

- [Complete Class Catalog](../catalog)