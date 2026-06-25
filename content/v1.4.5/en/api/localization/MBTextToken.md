---
title: "MBTextToken"
description: "Auto-generated class reference for MBTextToken."
---
# MBTextToken

**Namespace:** TaleWorlds.Localization.TextProcessor
**Module:** TaleWorlds.Localization
**Type:** `internal class MBTextToken`
**Base:** none
**File:** `bin/TaleWorlds.Localization/TaleWorlds.Localization.TextProcessor/MBTextToken.cs`

## Overview

`MBTextToken` lives in `TaleWorlds.Localization.TextProcessor` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Localization.TextProcessor` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Value` | `public string Value { get; set; }` |

## Key Methods

### Clone
`public MBTextToken Clone()`

**Purpose:** Duplicates the current object's state and returns a new instance.

```csharp
// Obtain an instance of MBTextToken from the subsystem API first
MBTextToken mBTextToken = ...;
var result = mBTextToken.Clone();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MBTextToken mBTextToken = ...;
mBTextToken.Clone();
```

## See Also

- [Area Index](../)