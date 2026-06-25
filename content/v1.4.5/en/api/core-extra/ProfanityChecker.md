---
title: "ProfanityChecker"
description: "Auto-generated class reference for ProfanityChecker."
---
# ProfanityChecker

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public class ProfanityChecker`
**Base:** none
**File:** `bin/TaleWorlds.Library/TaleWorlds.Library/ProfanityChecker.cs`

## Overview

`ProfanityChecker` lives in `TaleWorlds.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### IsProfane
`public bool IsProfane(string word)`

**Purpose:** Determines whether the current object is in the `profane` state or condition.

```csharp
// Obtain an instance of ProfanityChecker from the subsystem API first
ProfanityChecker profanityChecker = ...;
var result = profanityChecker.IsProfane("example");
```

### ContainsProfanity
`public bool ContainsProfanity(string text, ProfanityChechkerType checkType)`

**Purpose:** Indicates whether the current object contains `profanity`.

```csharp
// Obtain an instance of ProfanityChecker from the subsystem API first
ProfanityChecker profanityChecker = ...;
var result = profanityChecker.ContainsProfanity("example", checkType);
```

### CensorText
`public string CensorText(string text)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of ProfanityChecker from the subsystem API first
ProfanityChecker profanityChecker = ...;
var result = profanityChecker.CensorText("example");
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ProfanityChecker profanityChecker = ...;
profanityChecker.IsProfane("example");
```

## See Also

- [Area Index](../)