---
title: "CustomGameUsableMap"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CustomGameUsableMap`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CustomGameUsableMap

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CustomGameUsableMap`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/CustomGameUsableMap.cs`

## Overview

`CustomGameUsableMap` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Map` | `public string Map { get; }` |
| `IsCompatibleWithAllGameTypes` | `public bool IsCompatibleWithAllGameTypes { get; }` |
| `CompatibleGameTypes` | `public List<string> CompatibleGameTypes { get; }` |

## Key Methods

### Equals
`public override bool Equals(object obj)`

**Purpose:** Handles logic related to `equals`.

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Gets the current value of `hash code`.

## Usage Example

```csharp
var value = new CustomGameUsableMap();
value.Equals(obj);
```

## See Also

- [Complete Class Catalog](../catalog)