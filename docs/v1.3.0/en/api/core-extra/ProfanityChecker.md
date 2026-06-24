<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ProfanityChecker`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ProfanityChecker

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public class ProfanityChecker`
**Base:** none
**File:** `TaleWorlds.Library/ProfanityChecker.cs`

## Overview

`ProfanityChecker` lives in `TaleWorlds.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### IsProfane
`public bool IsProfane(string word)`

**Purpose:** Handles logic related to `is profane`.

### ContainsProfanity
`public bool ContainsProfanity(string text, ProfanityChecker.ProfanityChechkerType checkType)`

**Purpose:** Handles logic related to `contains profanity`.

### CensorText
`public string CensorText(string text)`

**Purpose:** Handles logic related to `censor text`.

## Usage Example

```csharp
var value = new ProfanityChecker();
value.IsProfane("example");
```

## See Also

- [Complete Class Catalog](../catalog)