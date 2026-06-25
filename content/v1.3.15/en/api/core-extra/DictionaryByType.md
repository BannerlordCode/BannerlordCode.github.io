---
title: "DictionaryByType"
description: "Auto-generated class reference for DictionaryByType."
---
# DictionaryByType

**Namespace:** TaleWorlds.Library.EventSystem
**Module:** TaleWorlds.Library
**Type:** `public class DictionaryByType`
**Base:** none
**File:** `TaleWorlds.Library/EventSystem/DictionaryByType.cs`

## Overview

`DictionaryByType` lives in `TaleWorlds.Library.EventSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library.EventSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetClone
`public IDictionary<Type, object> GetClone()`

**Purpose:** **Purpose:** Reads and returns the clone value held by the this instance.

```csharp
// Obtain an instance of DictionaryByType from the subsystem API first
DictionaryByType dictionaryByType = ...;
var result = dictionaryByType.GetClone();
```

### Clear
`public void Clear()`

**Purpose:** **Purpose:** Removes all content from the this instance.

```csharp
// Obtain an instance of DictionaryByType from the subsystem API first
DictionaryByType dictionaryByType = ...;
dictionaryByType.Clear();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
DictionaryByType dictionaryByType = ...;
dictionaryByType.GetClone();
```

## See Also

- [Area Index](../)