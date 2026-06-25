---
title: "NavigationPath"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `NavigationPath`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# NavigationPath

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public class NavigationPath : ISerializable`
**Base:** `ISerializable`
**File:** `TaleWorlds.Library/NavigationPath.cs`

## Overview

`NavigationPath` lives in `TaleWorlds.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `PathPoints` | `public Vec2 PathPoints { get; }` |
| `Size` | `public int Size { get; set; }` |
| `this` | `public Vec2 this { get; }` |

## Key Methods

### GetObjectData
`public virtual void GetObjectData(SerializationInfo info, StreamingContext context)`

**Purpose:** Gets the current value of `object data`.

### OverridePathPointAtIndex
`public void OverridePathPointAtIndex(int index, in Vec2 newValue)`

**Purpose:** Handles logic related to `override path point at index`.

## Usage Example

```csharp
var value = new NavigationPath();
value.GetObjectData(info, context);
```

## See Also

- [Complete Class Catalog](../catalog)