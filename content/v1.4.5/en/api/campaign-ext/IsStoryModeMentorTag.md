---
title: "IsStoryModeMentorTag"
description: "Auto-generated class reference for IsStoryModeMentorTag."
---
# IsStoryModeMentorTag

**Namespace:** StoryMode
**Module:** StoryMode
**Type:** `public class IsStoryModeMentorTag : ConversationTag`
**Base:** `ConversationTag`
**File:** `Modules.StoryMode/StoryMode/StoryMode/IsStoryModeMentorTag.cs`

## Overview

`IsStoryModeMentorTag` lives in `StoryMode` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `StoryMode` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### IsApplicableTo
`public override bool IsApplicableTo(CharacterObject character)`

**Purpose:** **Purpose:** Determines whether the this instance is in the applicable to state or condition.

```csharp
// Obtain an instance of IsStoryModeMentorTag from the subsystem API first
IsStoryModeMentorTag isStoryModeMentorTag = ...;
var result = isStoryModeMentorTag.IsApplicableTo(character);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
IsStoryModeMentorTag isStoryModeMentorTag = ...;
isStoryModeMentorTag.IsApplicableTo(character);
```

## See Also

- [Area Index](../)