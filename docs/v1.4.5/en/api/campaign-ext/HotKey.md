<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `HotKey`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# HotKey

**Namespace:** TaleWorlds.InputSystem
**Module:** TaleWorlds.InputSystem
**Type:** `public class HotKey`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.InputSystem/TaleWorlds.InputSystem/HotKey.cs`

## Overview

`HotKey` lives in `TaleWorlds.InputSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.InputSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Keys` | `public List<Key> Keys { get; }` |
| `DefaultKeys` | `public List<Key> DefaultKeys { get; }` |

## Key Methods

### HasModifier
`public bool HasModifier(Modifiers modifier)`

**Purpose:** Checks whether the current object has/contains `modifier`.

### HasSameModifiers
`public bool HasSameModifiers(HotKey other)`

**Purpose:** Checks whether the current object has/contains `same modifiers`.

### ToString
`public override string ToString()`

**Purpose:** Handles logic related to `to string`.

### Equals
`public override bool Equals(object obj)`

**Purpose:** Handles logic related to `equals`.

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Gets the current value of `hash code`.

## Usage Example

```csharp
var value = new HotKey();
value.HasModifier(modifier);
```

## See Also

- [Complete Class Catalog](../catalog)