---
title: "BindingPath"
description: "Auto-generated class reference for BindingPath."
---
# BindingPath

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public class BindingPath`
**Base:** none
**File:** `TaleWorlds.Library/BindingPath.cs`

## Overview

`BindingPath` lives in `TaleWorlds.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Path` | `public string Path { get; }` |
| `Nodes` | `public string Nodes { get; }` |
| `FirstNode` | `public string FirstNode { get; }` |
| `LastNode` | `public string LastNode { get; }` |
| `SubPath` | `public BindingPath SubPath { get; }` |
| `ParentPath` | `public BindingPath ParentPath { get; }` |

## Key Methods

### CreateFromProperty
`public static BindingPath CreateFromProperty(string propertyName)`

**Purpose:** Constructs a new `from property` entity and returns it to the caller.

```csharp
// Static call; no instance required
BindingPath.CreateFromProperty("example");
```

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Returns a hash code for the current object, used for fast lookup in dictionaries and hash sets.

```csharp
// Obtain an instance of BindingPath from the subsystem API first
BindingPath bindingPath = ...;
var result = bindingPath.GetHashCode();
```

### Equals
`public override bool Equals(object obj)`

**Purpose:** Compares the current object with the supplied instance for equality.

```csharp
// Obtain an instance of BindingPath from the subsystem API first
BindingPath bindingPath = ...;
var result = bindingPath.Equals(obj);
```

### IsRelatedWithPathAsString
`public static bool IsRelatedWithPathAsString(string path, string referencePath)`

**Purpose:** Determines whether the current object is in the `related with path as string` state or condition.

```csharp
// Static call; no instance required
BindingPath.IsRelatedWithPathAsString("example", "example");
```

### IsRelatedWithPath
`public static bool IsRelatedWithPath(string path, BindingPath referencePath)`

**Purpose:** Determines whether the current object is in the `related with path` state or condition.

```csharp
// Static call; no instance required
BindingPath.IsRelatedWithPath("example", referencePath);
```

### IsRelatedWith
`public bool IsRelatedWith(BindingPath referencePath)`

**Purpose:** Determines whether the current object is in the `related with` state or condition.

```csharp
// Obtain an instance of BindingPath from the subsystem API first
BindingPath bindingPath = ...;
var result = bindingPath.IsRelatedWith(referencePath);
```

### DecrementIfRelatedWith
`public void DecrementIfRelatedWith(BindingPath path, int startIndex)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of BindingPath from the subsystem API first
BindingPath bindingPath = ...;
bindingPath.DecrementIfRelatedWith(path, 0);
```

### Simplify
`public BindingPath Simplify()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of BindingPath from the subsystem API first
BindingPath bindingPath = ...;
var result = bindingPath.Simplify();
```

### Append
`public BindingPath Append(BindingPath bindingPath)`

**Purpose:** Appends `append` to the end of the current collection or sequence.

```csharp
// Obtain an instance of BindingPath from the subsystem API first
BindingPath bindingPath = ...;
var result = bindingPath.Append(bindingPath);
```

### ToString
`public override string ToString()`

**Purpose:** Returns a human-readable string representation of the current object.

```csharp
// Obtain an instance of BindingPath from the subsystem API first
BindingPath bindingPath = ...;
var result = bindingPath.ToString();
```

## Usage Example

```csharp
BindingPath.CreateFromProperty("example");
```

## See Also

- [Area Index](../)