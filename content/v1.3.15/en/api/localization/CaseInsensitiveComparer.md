---
title: "CaseInsensitiveComparer"
description: "Auto-generated class reference for CaseInsensitiveComparer."
---
# CaseInsensitiveComparer

**Namespace:** TaleWorlds.Localization.TextProcessor
**Module:** TaleWorlds.Localization
**Type:** `internal class CaseInsensitiveComparer : IEqualityComparer<string>`
**Base:** `IEqualityComparer<string>`
**File:** `TaleWorlds.Localization/TextProcessor/CaseInsensitiveComparer.cs`

## Overview

`CaseInsensitiveComparer` lives in `TaleWorlds.Localization.TextProcessor` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Localization.TextProcessor` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Equals
`public bool Equals(string x, string y)`

**Purpose:** **Purpose:** Compares the this instance with the supplied instance for equality.

```csharp
// Obtain an instance of CaseInsensitiveComparer from the subsystem API first
CaseInsensitiveComparer caseInsensitiveComparer = ...;
var result = caseInsensitiveComparer.Equals("example", "example");
```

### GetHashCode
`public int GetHashCode(string x)`

**Purpose:** **Purpose:** Returns a hash code for the this instance, used for fast lookup in dictionaries and hash sets.

```csharp
// Obtain an instance of CaseInsensitiveComparer from the subsystem API first
CaseInsensitiveComparer caseInsensitiveComparer = ...;
var result = caseInsensitiveComparer.GetHashCode("example");
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
CaseInsensitiveComparer caseInsensitiveComparer = ...;
caseInsensitiveComparer.Equals("example", "example");
```

## See Also

- [Area Index](../)