---
title: "SubtitleItem"
description: "Auto-generated class reference for SubtitleItem."
---
# SubtitleItem

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public class SubtitleItem`
**Base:** none
**File:** `TaleWorlds.Library/SRTHelper.cs`

## Overview

`SubtitleItem` lives in `TaleWorlds.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `StartTime` | `public int StartTime { get; set; }` |
| `EndTime` | `public int EndTime { get; set; }` |
| `Lines` | `public List<string> Lines { get; set; }` |

## Key Methods

### ToString
`public override string ToString()`

**Purpose:** Returns a human-readable string representation of the this instance.

```csharp
// Obtain an instance of SubtitleItem from the subsystem API first
SubtitleItem subtitleItem = ...;
var result = subtitleItem.ToString();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
SubtitleItem subtitleItem = ...;
subtitleItem.ToString();
```

## See Also

- [Area Index](../)