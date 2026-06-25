---
title: "Segment"
description: "Auto-generated class reference for Segment."
---
# Segment

**Namespace:** psai.net
**Module:** psai.net
**Type:** `public class Segment`
**Base:** none
**File:** `TaleWorlds.PSAI/net/Segment.cs`

## Overview

`Segment` lives in `psai.net` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `psai.net` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Id` | `public int Id { get; set; }` |
| `Intensity` | `public float Intensity { get; set; }` |
| `ThemeId` | `public int ThemeId { get; set; }` |
| `Name` | `public string Name { get; }` |
| `Playcount` | `public int Playcount { get; }` |
| `MaxPreBeatMsOfCompatibleSnippetsWithinSameTheme` | `public int MaxPreBeatMsOfCompatibleSnippetsWithinSameTheme { get; }` |
| `Followers` | `public List<Follower> Followers { get; }` |
| `SnippetTypeBitfield` | `public int SnippetTypeBitfield { get; set; }` |

## Key Methods

### ToString
`public override string ToString()`

**Purpose:** **Purpose:** Returns a human-readable string representation of the this instance.

```csharp
// Obtain an instance of Segment from the subsystem API first
Segment segment = ...;
var result = segment.ToString();
```

### IsUsableAs
`public bool IsUsableAs(SegmentSuitability snippetType)`

**Purpose:** **Purpose:** Determines whether the this instance is in the usable as state or condition.

```csharp
// Obtain an instance of Segment from the subsystem API first
Segment segment = ...;
var result = segment.IsUsableAs(snippetType);
```

### IsUsableOnlyAs
`public bool IsUsableOnlyAs(SegmentSuitability snippetType)`

**Purpose:** **Purpose:** Determines whether the this instance is in the usable only as state or condition.

```csharp
// Obtain an instance of Segment from the subsystem API first
Segment segment = ...;
var result = segment.IsUsableOnlyAs(snippetType);
```

### ReturnSegmentWithLowestIntensityDifference
`public Segment ReturnSegmentWithLowestIntensityDifference(List<Segment> argSnippets)`

**Purpose:** **Purpose:** Executes the ReturnSegmentWithLowestIntensityDifference logic.

```csharp
// Obtain an instance of Segment from the subsystem API first
Segment segment = ...;
var result = segment.ReturnSegmentWithLowestIntensityDifference(argSnippets);
```

### CheckIfAtLeastOneDirectTransitionOrLayeringIsPossible
`public bool CheckIfAtLeastOneDirectTransitionOrLayeringIsPossible(Soundtrack soundtrack, int targetThemeId)`

**Purpose:** **Purpose:** Verifies whether if at least one direct transition or layering is possible holds true for the this instance.

```csharp
// Obtain an instance of Segment from the subsystem API first
Segment segment = ...;
var result = segment.CheckIfAtLeastOneDirectTransitionOrLayeringIsPossible(soundtrack, 0);
```

### GetStringFromSegmentSuitabilities
`public static string GetStringFromSegmentSuitabilities(int snippetTypeBitfield)`

**Purpose:** **Purpose:** Reads and returns the string from segment suitabilities value held by the this instance.

```csharp
// Static call; no instance required
Segment.GetStringFromSegmentSuitabilities(0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
Segment segment = ...;
segment.ToString();
```

## See Also

- [Area Index](../)