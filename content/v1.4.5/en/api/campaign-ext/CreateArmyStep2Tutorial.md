---
title: "CreateArmyStep2Tutorial"
description: "Auto-generated class reference for CreateArmyStep2Tutorial."
---
# CreateArmyStep2Tutorial

**Namespace:** StoryMode.GauntletUI.Tutorial
**Module:** StoryMode.GauntletUI
**Type:** `public class CreateArmyStep2Tutorial : TutorialItemBase`
**Base:** `TutorialItemBase`
**File:** `Modules.StoryMode/StoryMode.GauntletUI/StoryMode.GauntletUI.Tutorial/CreateArmyStep2Tutorial.cs`

## Overview

`CreateArmyStep2Tutorial` lives in `StoryMode.GauntletUI.Tutorial` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `StoryMode.GauntletUI.Tutorial` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### IsConditionsMetForCompletion
`public override bool IsConditionsMetForCompletion()`

**Purpose:** Determines whether the this instance is in the conditions met for completion state or condition.

```csharp
// Obtain an instance of CreateArmyStep2Tutorial from the subsystem API first
CreateArmyStep2Tutorial createArmyStep2Tutorial = ...;
var result = createArmyStep2Tutorial.IsConditionsMetForCompletion();
```

### OnPartyAddedToArmyByPlayer
`public override void OnPartyAddedToArmyByPlayer(PartyAddedToArmyByPlayerEvent obj)`

**Purpose:** Invoked when the party added to army by player event is raised.

```csharp
// Obtain an instance of CreateArmyStep2Tutorial from the subsystem API first
CreateArmyStep2Tutorial createArmyStep2Tutorial = ...;
createArmyStep2Tutorial.OnPartyAddedToArmyByPlayer(obj);
```

### GetTutorialsRelevantContext
`public override TutorialContexts GetTutorialsRelevantContext()`

**Purpose:** Reads and returns the tutorials relevant context value held by the this instance.

```csharp
// Obtain an instance of CreateArmyStep2Tutorial from the subsystem API first
CreateArmyStep2Tutorial createArmyStep2Tutorial = ...;
var result = createArmyStep2Tutorial.GetTutorialsRelevantContext();
```

### IsConditionsMetForActivation
`public override bool IsConditionsMetForActivation()`

**Purpose:** Determines whether the this instance is in the conditions met for activation state or condition.

```csharp
// Obtain an instance of CreateArmyStep2Tutorial from the subsystem API first
CreateArmyStep2Tutorial createArmyStep2Tutorial = ...;
var result = createArmyStep2Tutorial.IsConditionsMetForActivation();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
CreateArmyStep2Tutorial createArmyStep2Tutorial = ...;
createArmyStep2Tutorial.IsConditionsMetForCompletion();
```

## See Also

- [Area Index](../)