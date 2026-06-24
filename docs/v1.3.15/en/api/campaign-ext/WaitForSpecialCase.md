<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `WaitForSpecialCase`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# WaitForSpecialCase

**Namespace:** TaleWorlds.Network
**Module:** TaleWorlds.Network
**Type:** `public class WaitForSpecialCase : CoroutineState`
**Base:** `CoroutineState`
**File:** `TaleWorlds.Network/WaitForSpecialCase.cs`

## Overview

`WaitForSpecialCase` lives in `TaleWorlds.Network` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Network` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### IsConditionSatisfiedDelegate
`public delegate bool IsConditionSatisfiedDelegate()`

**Purpose:** Handles logic related to `is condition satisfied delegate`.

## Usage Example

```csharp
var value = new WaitForSpecialCase();
value.IsConditionSatisfiedDelegate();
```

## See Also

- [Complete Class Catalog](../catalog)