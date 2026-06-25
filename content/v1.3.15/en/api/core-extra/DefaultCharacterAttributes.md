---
title: "DefaultCharacterAttributes"
description: "Auto-generated class reference for DefaultCharacterAttributes."
---
# DefaultCharacterAttributes

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class DefaultCharacterAttributes`
**Base:** none
**File:** `TaleWorlds.Core/DefaultCharacterAttributes.cs`

## Overview

`DefaultCharacterAttributes` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Vigor` | `public static CharacterAttribute Vigor { get; }` |
| `Control` | `public static CharacterAttribute Control { get; }` |
| `Endurance` | `public static CharacterAttribute Endurance { get; }` |
| `Cunning` | `public static CharacterAttribute Cunning { get; }` |
| `Social` | `public static CharacterAttribute Social { get; }` |
| `Intelligence` | `public static CharacterAttribute Intelligence { get; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
DefaultCharacterAttributes instance = ...;
```

## See Also

- [Area Index](../)