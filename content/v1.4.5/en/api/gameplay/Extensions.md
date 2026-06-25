---
title: "Extensions"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Extensions`
- [← Area / Back to gameplay](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# Extensions

**Namespace:** StoryMode.Extensions
**Module:** StoryMode.Extensions
**Type:** `public static class Extensions`
**Base:** none
**File:** `Bannerlord.Source/Modules.StoryMode/StoryMode/StoryMode.Extensions/Extensions.cs`

## Overview

`Extensions` lives in `StoryMode.Extensions` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `StoryMode.Extensions` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### IsTrainingField
`public static bool IsTrainingField(this Settlement settlement)`

**Purpose:** Handles logic related to `is training field`.

### TrainingField
`public static TrainingField TrainingField(this Settlement settlement)`

**Purpose:** Handles logic related to `training field`.

## Usage Example

```csharp
Extensions.IsTrainingField(settlement);
```

## See Also

- [Complete Class Catalog](../catalog)