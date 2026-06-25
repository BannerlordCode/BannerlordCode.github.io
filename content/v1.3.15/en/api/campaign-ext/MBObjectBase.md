---
title: "MBObjectBase"
description: "Auto-generated class reference for MBObjectBase."
---
# MBObjectBase

**Namespace:** TaleWorlds.ObjectSystem
**Module:** TaleWorlds.ObjectSystem
**Type:** `public class MBObjectBase`
**Base:** none
**File:** `TaleWorlds.ObjectSystem/MBObjectBase.cs`

## Overview

`MBObjectBase` lives in `TaleWorlds.ObjectSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.ObjectSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `StringId` | `public string StringId { get; }` |
| `Id` | `public MBGUID Id { get; }` |
| `IsInitialized` | `public bool IsInitialized { get; }` |
| `IsReady` | `public bool IsReady { get; }` |

## Key Methods

### AfterInitialized
`public void AfterInitialized()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MBObjectBase from the subsystem API first
MBObjectBase mBObjectBase = ...;
mBObjectBase.AfterInitialized();
```

### AfterRegister
`public virtual void AfterRegister()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MBObjectBase from the subsystem API first
MBObjectBase mBObjectBase = ...;
mBObjectBase.AfterRegister();
```

### Initialize
`public virtual void Initialize()`

**Purpose:** Prepares the resources, state, or bindings the current object needs before use.

```csharp
// Obtain an instance of MBObjectBase from the subsystem API first
MBObjectBase mBObjectBase = ...;
mBObjectBase.Initialize();
```

### Deserialize
`public virtual void Deserialize(MBObjectManager objectManager, XmlNode node)`

**Purpose:** Restores the current object from serialized data.

```csharp
// Obtain an instance of MBObjectBase from the subsystem API first
MBObjectBase mBObjectBase = ...;
mBObjectBase.Deserialize(objectManager, node);
```

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Returns a hash code for the current object, used for fast lookup in dictionaries and hash sets.

```csharp
// Obtain an instance of MBObjectBase from the subsystem API first
MBObjectBase mBObjectBase = ...;
var result = mBObjectBase.GetHashCode();
```

### GetName
`public virtual TextObject GetName()`

**Purpose:** Reads and returns the `name` value held by the current object.

```csharp
// Obtain an instance of MBObjectBase from the subsystem API first
MBObjectBase mBObjectBase = ...;
var result = mBObjectBase.GetName();
```

### PreAfterLoadInternal
`public void PreAfterLoadInternal()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MBObjectBase from the subsystem API first
MBObjectBase mBObjectBase = ...;
mBObjectBase.PreAfterLoadInternal();
```

### AfterLoadInternal
`public void AfterLoadInternal()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MBObjectBase from the subsystem API first
MBObjectBase mBObjectBase = ...;
mBObjectBase.AfterLoadInternal();
```

### OnRegistered
`public void OnRegistered()`

**Purpose:** Invoked when the `registered` event is raised.

```csharp
// Obtain an instance of MBObjectBase from the subsystem API first
MBObjectBase mBObjectBase = ...;
mBObjectBase.OnRegistered();
```

### OnUnregistered
`public void OnUnregistered()`

**Purpose:** Invoked when the `unregistered` event is raised.

```csharp
// Obtain an instance of MBObjectBase from the subsystem API first
MBObjectBase mBObjectBase = ...;
mBObjectBase.OnUnregistered();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MBObjectBase mBObjectBase = ...;
mBObjectBase.AfterInitialized();
```

## See Also

- [Area Index](../)