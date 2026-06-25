---
title: "StoryModeCheats"
description: "Auto-generated class reference for StoryModeCheats."
---
# StoryModeCheats

**Namespace:** StoryMode
**Module:** StoryMode
**Type:** `public static class StoryModeCheats`
**Base:** none
**File:** `Modules.StoryMode/StoryMode/StoryMode/StoryModeCheats.cs`

## Overview

`StoryModeCheats` lives in `StoryMode` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `StoryMode` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### CheckCheatUsage
`public static bool CheckCheatUsage(ref string message)`

**Purpose:** **Purpose:** Verifies whether cheat usage holds true for the this instance.

```csharp
// Static call; no instance required
StoryModeCheats.CheckCheatUsage(message);
```

### AddFamilyMembers
`public static string AddFamilyMembers(List<string> strings)`

**Purpose:** **Purpose:** Adds family members to the current collection or state.

```csharp
// Static call; no instance required
StoryModeCheats.AddFamilyMembers(strings);
```

## Usage Example

```csharp
StoryModeCheats.CheckCheatUsage(message);
```

## See Also

- [Area Index](../)