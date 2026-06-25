---
title: "TalkToNotableTutorialStep2"
description: "Auto-generated class reference for TalkToNotableTutorialStep2."
---
# TalkToNotableTutorialStep2

**Namespace:** StoryMode.GauntletUI.Tutorial
**Module:** StoryMode.GauntletUI
**Type:** `public class TalkToNotableTutorialStep2 : TutorialItemBase`
**Base:** `TutorialItemBase`
**File:** `StoryMode.GauntletUI/Tutorial/TalkToNotableTutorialStep2.cs`

## Overview

`TalkToNotableTutorialStep2` lives in `StoryMode.GauntletUI.Tutorial` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `StoryMode.GauntletUI.Tutorial` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### IsConditionsMetForCompletion
`public override bool IsConditionsMetForCompletion()`

**Purpose:** **Purpose:** Determines whether the this instance is in the conditions met for completion state or condition.

```csharp
// Obtain an instance of TalkToNotableTutorialStep2 from the subsystem API first
TalkToNotableTutorialStep2 talkToNotableTutorialStep2 = ...;
var result = talkToNotableTutorialStep2.IsConditionsMetForCompletion();
```

### OnPlayerStartTalkFromMenuOverlay
`public override void OnPlayerStartTalkFromMenuOverlay(Hero hero)`

**Purpose:** **Purpose:** Invoked when the player start talk from menu overlay event is raised.

```csharp
// Obtain an instance of TalkToNotableTutorialStep2 from the subsystem API first
TalkToNotableTutorialStep2 talkToNotableTutorialStep2 = ...;
talkToNotableTutorialStep2.OnPlayerStartTalkFromMenuOverlay(hero);
```

### GetTutorialsRelevantContext
`public override TutorialContexts GetTutorialsRelevantContext()`

**Purpose:** **Purpose:** Reads and returns the tutorials relevant context value held by the this instance.

```csharp
// Obtain an instance of TalkToNotableTutorialStep2 from the subsystem API first
TalkToNotableTutorialStep2 talkToNotableTutorialStep2 = ...;
var result = talkToNotableTutorialStep2.GetTutorialsRelevantContext();
```

### IsConditionsMetForActivation
`public override bool IsConditionsMetForActivation()`

**Purpose:** **Purpose:** Determines whether the this instance is in the conditions met for activation state or condition.

```csharp
// Obtain an instance of TalkToNotableTutorialStep2 from the subsystem API first
TalkToNotableTutorialStep2 talkToNotableTutorialStep2 = ...;
var result = talkToNotableTutorialStep2.IsConditionsMetForActivation();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
TalkToNotableTutorialStep2 talkToNotableTutorialStep2 = ...;
talkToNotableTutorialStep2.IsConditionsMetForCompletion();
```

## See Also

- [Area Index](../)