---
title: "TalkToNotableTutorialStep1"
description: "Auto-generated class reference for TalkToNotableTutorialStep1."
---
# TalkToNotableTutorialStep1

**Namespace:** StoryMode.GauntletUI.Tutorial
**Module:** StoryMode.GauntletUI
**Type:** `public class TalkToNotableTutorialStep1 : TutorialItemBase`
**Base:** `TutorialItemBase`
**File:** `StoryMode.GauntletUI/Tutorial/TalkToNotableTutorialStep1.cs`

## Overview

`TalkToNotableTutorialStep1` lives in `StoryMode.GauntletUI.Tutorial` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `StoryMode.GauntletUI.Tutorial` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetTutorialsRelevantContext
`public override TutorialContexts GetTutorialsRelevantContext()`

**Purpose:** Reads and returns the tutorials relevant context value held by the this instance.

```csharp
// Obtain an instance of TalkToNotableTutorialStep1 from the subsystem API first
TalkToNotableTutorialStep1 talkToNotableTutorialStep1 = ...;
var result = talkToNotableTutorialStep1.GetTutorialsRelevantContext();
```

### IsConditionsMetForActivation
`public override bool IsConditionsMetForActivation()`

**Purpose:** Determines whether the this instance is in the conditions met for activation state or condition.

```csharp
// Obtain an instance of TalkToNotableTutorialStep1 from the subsystem API first
TalkToNotableTutorialStep1 talkToNotableTutorialStep1 = ...;
var result = talkToNotableTutorialStep1.IsConditionsMetForActivation();
```

### IsConditionsMetForCompletion
`public override bool IsConditionsMetForCompletion()`

**Purpose:** Determines whether the this instance is in the conditions met for completion state or condition.

```csharp
// Obtain an instance of TalkToNotableTutorialStep1 from the subsystem API first
TalkToNotableTutorialStep1 talkToNotableTutorialStep1 = ...;
var result = talkToNotableTutorialStep1.IsConditionsMetForCompletion();
```

### OnCharacterPortraitPopUpOpened
`public override void OnCharacterPortraitPopUpOpened(CharacterObject obj)`

**Purpose:** Invoked when the character portrait pop up opened event is raised.

```csharp
// Obtain an instance of TalkToNotableTutorialStep1 from the subsystem API first
TalkToNotableTutorialStep1 talkToNotableTutorialStep1 = ...;
talkToNotableTutorialStep1.OnCharacterPortraitPopUpOpened(obj);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
TalkToNotableTutorialStep1 talkToNotableTutorialStep1 = ...;
talkToNotableTutorialStep1.GetTutorialsRelevantContext();
```

## See Also

- [Area Index](../)