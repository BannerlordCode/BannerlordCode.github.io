---
title: "ObjectTypeRecord"
description: "Auto-generated class reference for ObjectTypeRecord."
---
# ObjectTypeRecord

**Namespace:** TaleWorlds.ObjectSystem
**Module:** TaleWorlds.ObjectSystem
**Type:** `internal class ObjectTypeRecord<T> : IObjectTypeRecord, IEnumerable, IEnumerable<T> where T : MBObjectBase`
**Base:** `IObjectTypeRecord`
**File:** `bin/TaleWorlds.ObjectSystem/TaleWorlds.ObjectSystem/MBObjectManager.cs`

## Overview

`ObjectTypeRecord` lives in `TaleWorlds.ObjectSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.ObjectSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetMBObject
`public MBObjectBase GetMBObject(MBGUID objId)`

**Purpose:** **Purpose:** Reads and returns the m b object value held by the this instance.

```csharp
// Obtain an instance of ObjectTypeRecord from the subsystem API first
ObjectTypeRecord objectTypeRecord = ...;
var result = objectTypeRecord.GetMBObject(objId);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ObjectTypeRecord objectTypeRecord = ...;
objectTypeRecord.GetMBObject(objId);
```

## See Also

- [Area Index](../)