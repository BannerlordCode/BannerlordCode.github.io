---
title: "StoryModeCheats"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `StoryModeCheats`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# StoryModeCheats

**Namespace:** StoryMode
**Module:** StoryMode
**Type:** `public static class StoryModeCheats`
**Base:** none
**File:** `StoryMode/StoryModeCheats.cs`

## Overview

`StoryModeCheats` lives in `StoryMode` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `StoryMode` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### CheckCheatUsage
`public static bool CheckCheatUsage(ref string message)`

**Purpose:** Handles logic related to `check cheat usage`.

### AddFamilyMembers
`public static string AddFamilyMembers(List<string> strings)`

**Purpose:** Adds `family members` to the current collection or state.

## Usage Example

```csharp
StoryModeCheats.CheckCheatUsage(message);
```

## See Also

- [Complete Class Catalog](../catalog)