---
title: "CrimeTutorial"
description: "Auto-generated class reference for CrimeTutorial."
---
# CrimeTutorial

**Namespace:** StoryMode.GauntletUI.Tutorial
**Module:** StoryMode.GauntletUI
**Type:** `public class CrimeTutorial : TutorialItemBase`
**Base:** `TutorialItemBase`
**File:** `StoryMode.GauntletUI/Tutorial/CrimeTutorial.cs`

## Overview

`CrimeTutorial` lives in `StoryMode.GauntletUI.Tutorial` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `StoryMode.GauntletUI.Tutorial` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetTutorialsRelevantContext
`public override TutorialContexts GetTutorialsRelevantContext()`

**Purpose:** **Purpose:** Reads and returns the tutorials relevant context value held by the this instance.

```csharp
// Obtain an instance of CrimeTutorial from the subsystem API first
CrimeTutorial crimeTutorial = ...;
var result = crimeTutorial.GetTutorialsRelevantContext();
```

### OnCrimeValueInspectedInSettlementOverlay
`public override void OnCrimeValueInspectedInSettlementOverlay(CrimeValueInspectedInSettlementOverlayEvent obj)`

**Purpose:** **Purpose:** Invoked when the crime value inspected in settlement overlay event is raised.

```csharp
// Obtain an instance of CrimeTutorial from the subsystem API first
CrimeTutorial crimeTutorial = ...;
crimeTutorial.OnCrimeValueInspectedInSettlementOverlay(obj);
```

### IsConditionsMetForActivation
`public override bool IsConditionsMetForActivation()`

**Purpose:** **Purpose:** Determines whether the this instance is in the conditions met for activation state or condition.

```csharp
// Obtain an instance of CrimeTutorial from the subsystem API first
CrimeTutorial crimeTutorial = ...;
var result = crimeTutorial.IsConditionsMetForActivation();
```

### IsConditionsMetForCompletion
`public override bool IsConditionsMetForCompletion()`

**Purpose:** **Purpose:** Determines whether the this instance is in the conditions met for completion state or condition.

```csharp
// Obtain an instance of CrimeTutorial from the subsystem API first
CrimeTutorial crimeTutorial = ...;
var result = crimeTutorial.IsConditionsMetForCompletion();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
CrimeTutorial crimeTutorial = ...;
crimeTutorial.GetTutorialsRelevantContext();
```

## See Also

- [Area Index](../)