---
title: "NativeString"
description: "Auto-generated class reference for NativeString."
---
# NativeString

**Namespace:** TaleWorlds.DotNet
**Module:** TaleWorlds.DotNet
**Type:** `public sealed class NativeString : NativeObject`
**Base:** `NativeObject`
**File:** `bin/TaleWorlds.DotNet/TaleWorlds.DotNet/NativeString.cs`

## Overview

`NativeString` lives in `TaleWorlds.DotNet` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.DotNet` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Create
`public static NativeString Create()`

**Purpose:** Creates a new instance or related entity for the this instance.

```csharp
// Static call; no instance required
NativeString.Create();
```

### GetString
`public string GetString()`

**Purpose:** Reads and returns the string value held by the this instance.

```csharp
// Obtain an instance of NativeString from the subsystem API first
NativeString nativeString = ...;
var result = nativeString.GetString();
```

### SetString
`public void SetString(string newString)`

**Purpose:** Assigns a new value to string and updates the object's internal state.

```csharp
// Obtain an instance of NativeString from the subsystem API first
NativeString nativeString = ...;
nativeString.SetString("example");
```

## Usage Example

```csharp
NativeString.Create();
```

## See Also

- [Area Index](../)