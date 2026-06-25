---
title: "SaveId"
description: "Auto-generated class reference for SaveId."
---
# SaveId

**Namespace:** TaleWorlds.SaveSystem.Definition
**Module:** TaleWorlds.SaveSystem
**Type:** `public abstract class SaveId`
**Base:** none
**File:** `TaleWorlds.SaveSystem/Definition/SaveId.cs`

## Overview

`SaveId` lives in `TaleWorlds.SaveSystem.Definition` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.SaveSystem.Definition` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetStringId
`public abstract string GetStringId()`

**Purpose:** Reads and returns the `string id` value held by the current object.

```csharp
// Obtain an instance of SaveId from the subsystem API first
SaveId saveId = ...;
var result = saveId.GetStringId();
```

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Returns a hash code for the current object, used for fast lookup in dictionaries and hash sets.

```csharp
// Obtain an instance of SaveId from the subsystem API first
SaveId saveId = ...;
var result = saveId.GetHashCode();
```

### Equals
`public override bool Equals(object obj)`

**Purpose:** Compares the current object with the supplied instance for equality.

```csharp
// Obtain an instance of SaveId from the subsystem API first
SaveId saveId = ...;
var result = saveId.Equals(obj);
```

### WriteTo
`public abstract void WriteTo(IWriter writer)`

**Purpose:** Writes `to` to the target location.

```csharp
// Obtain an instance of SaveId from the subsystem API first
SaveId saveId = ...;
saveId.WriteTo(writer);
```

### ReadSaveIdFrom
`public static SaveId ReadSaveIdFrom(IReader reader)`

**Purpose:** Reads the data or state of `save id from`.

```csharp
// Static call; no instance required
SaveId.ReadSaveIdFrom(reader);
```

### GetSizeInBytes
`public abstract int GetSizeInBytes()`

**Purpose:** Reads and returns the `size in bytes` value held by the current object.

```csharp
// Obtain an instance of SaveId from the subsystem API first
SaveId saveId = ...;
var result = saveId.GetSizeInBytes();
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
SaveId instance = ...;
```

## See Also

- [Area Index](../)