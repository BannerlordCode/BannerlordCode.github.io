<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DictionaryByType`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DictionaryByType

**Namespace:** TaleWorlds.Library.EventSystem
**Module:** TaleWorlds.Library
**Type:** `public class DictionaryByType`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.Library/TaleWorlds.Library.EventSystem/DictionaryByType.cs`

## Overview

`DictionaryByType` lives in `TaleWorlds.Library.EventSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library.EventSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetClone
`public IDictionary<Type, object> GetClone()`

**Purpose:** Gets the current value of `clone`.

### Clear
`public void Clear()`

**Purpose:** Handles logic related to `clear`.

## Usage Example

```csharp
var value = new DictionaryByType();
value.GetClone();
```

## See Also

- [Complete Class Catalog](../catalog)