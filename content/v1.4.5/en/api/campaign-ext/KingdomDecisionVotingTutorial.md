---
title: "KingdomDecisionVotingTutorial"
description: "Auto-generated class reference for KingdomDecisionVotingTutorial."
---
# KingdomDecisionVotingTutorial

**Namespace:** StoryMode.GauntletUI.Tutorial
**Module:** StoryMode.GauntletUI
**Type:** `public class KingdomDecisionVotingTutorial : TutorialItemBase`
**Base:** `TutorialItemBase`
**File:** `Modules.StoryMode/StoryMode.GauntletUI/StoryMode.GauntletUI.Tutorial/KingdomDecisionVotingTutorial.cs`

## Overview

`KingdomDecisionVotingTutorial` lives in `StoryMode.GauntletUI.Tutorial` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `StoryMode.GauntletUI.Tutorial` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetTutorialsRelevantContext
`public override TutorialContexts GetTutorialsRelevantContext()`

**Purpose:** Reads and returns the `tutorials relevant context` value held by the current object.

```csharp
// Obtain an instance of KingdomDecisionVotingTutorial from the subsystem API first
KingdomDecisionVotingTutorial kingdomDecisionVotingTutorial = ...;
var result = kingdomDecisionVotingTutorial.GetTutorialsRelevantContext();
```

### OnPlayerSelectedAKingdomDecisionOption
`public override void OnPlayerSelectedAKingdomDecisionOption(PlayerSelectedAKingdomDecisionOptionEvent obj)`

**Purpose:** Invoked when the `player selected a kingdom decision option` event is raised.

```csharp
// Obtain an instance of KingdomDecisionVotingTutorial from the subsystem API first
KingdomDecisionVotingTutorial kingdomDecisionVotingTutorial = ...;
kingdomDecisionVotingTutorial.OnPlayerSelectedAKingdomDecisionOption(obj);
```

### IsConditionsMetForActivation
`public override bool IsConditionsMetForActivation()`

**Purpose:** Determines whether the current object is in the `conditions met for activation` state or condition.

```csharp
// Obtain an instance of KingdomDecisionVotingTutorial from the subsystem API first
KingdomDecisionVotingTutorial kingdomDecisionVotingTutorial = ...;
var result = kingdomDecisionVotingTutorial.IsConditionsMetForActivation();
```

### IsConditionsMetForCompletion
`public override bool IsConditionsMetForCompletion()`

**Purpose:** Determines whether the current object is in the `conditions met for completion` state or condition.

```csharp
// Obtain an instance of KingdomDecisionVotingTutorial from the subsystem API first
KingdomDecisionVotingTutorial kingdomDecisionVotingTutorial = ...;
var result = kingdomDecisionVotingTutorial.IsConditionsMetForCompletion();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
KingdomDecisionVotingTutorial kingdomDecisionVotingTutorial = ...;
kingdomDecisionVotingTutorial.GetTutorialsRelevantContext();
```

## See Also

- [Area Index](../)