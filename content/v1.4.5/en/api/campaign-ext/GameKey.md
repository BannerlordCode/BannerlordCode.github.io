---
title: "GameKey"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GameKey`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GameKey

**Namespace:** TaleWorlds.InputSystem
**Module:** TaleWorlds.InputSystem
**Type:** `public class GameKey`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.InputSystem/TaleWorlds.InputSystem/GameKey.cs`

## Overview

`GameKey` lives in `TaleWorlds.InputSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.InputSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Id` | `public int Id { get; }` |
| `StringId` | `public string StringId { get; }` |
| `GroupId` | `public string GroupId { get; }` |
| `MainCategoryId` | `public string MainCategoryId { get; }` |
| `KeyboardKey` | `public Key KeyboardKey { get; }` |
| `DefaultKeyboardKey` | `public Key DefaultKeyboardKey { get; }` |
| `ControllerKey` | `public Key ControllerKey { get; set; }` |
| `DefaultControllerKey` | `public Key DefaultControllerKey { get; set; }` |

## Key Methods

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
var value = new GameKey();
value.ToString();
```

## See Also

- [Complete Class Catalog](../catalog)