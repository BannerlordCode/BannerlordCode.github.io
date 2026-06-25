---
title: "OrderTutorialStep1"
description: "Auto-generated class reference for OrderTutorialStep1."
---
# OrderTutorialStep1

**Namespace:** StoryMode.GauntletUI.Tutorial
**Module:** StoryMode.GauntletUI
**Type:** `public class OrderTutorialStep1 : TutorialItemBase`
**Base:** `TutorialItemBase`
**File:** `Modules.StoryMode/StoryMode.GauntletUI/StoryMode.GauntletUI.Tutorial/OrderTutorialStep1.cs`

## Overview

`OrderTutorialStep1` lives in `StoryMode.GauntletUI.Tutorial` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `StoryMode.GauntletUI.Tutorial` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### IsConditionsMetForCompletion
`public override bool IsConditionsMetForCompletion()`

**Purpose:** Determines whether the this instance is in the conditions met for completion state or condition.

```csharp
// Obtain an instance of OrderTutorialStep1 from the subsystem API first
OrderTutorialStep1 orderTutorialStep1 = ...;
var result = orderTutorialStep1.IsConditionsMetForCompletion();
```

### OnDeactivate
`public override void OnDeactivate()`

**Purpose:** Invoked when the deactivate event is raised.

```csharp
// Obtain an instance of OrderTutorialStep1 from the subsystem API first
OrderTutorialStep1 orderTutorialStep1 = ...;
orderTutorialStep1.OnDeactivate();
```

### GetTutorialsRelevantContext
`public override TutorialContexts GetTutorialsRelevantContext()`

**Purpose:** Reads and returns the tutorials relevant context value held by the this instance.

```csharp
// Obtain an instance of OrderTutorialStep1 from the subsystem API first
OrderTutorialStep1 orderTutorialStep1 = ...;
var result = orderTutorialStep1.GetTutorialsRelevantContext();
```

### IsConditionsMetForActivation
`public override bool IsConditionsMetForActivation()`

**Purpose:** Determines whether the this instance is in the conditions met for activation state or condition.

```csharp
// Obtain an instance of OrderTutorialStep1 from the subsystem API first
OrderTutorialStep1 orderTutorialStep1 = ...;
var result = orderTutorialStep1.IsConditionsMetForActivation();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
OrderTutorialStep1 orderTutorialStep1 = ...;
orderTutorialStep1.IsConditionsMetForCompletion();
```

## See Also

- [Area Index](../)