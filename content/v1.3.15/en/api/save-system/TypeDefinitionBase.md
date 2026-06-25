---
title: "TypeDefinitionBase"
description: "Auto-generated class reference for TypeDefinitionBase."
---
# TypeDefinitionBase

**Namespace:** TaleWorlds.SaveSystem.Definition
**Module:** TaleWorlds.SaveSystem
**Type:** `public class TypeDefinitionBase`
**Base:** none
**File:** `TaleWorlds.SaveSystem/Definition/TypeDefinitionBase.cs`

## Overview

`TypeDefinitionBase` lives in `TaleWorlds.SaveSystem.Definition` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.SaveSystem.Definition` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `SaveId` | `public SaveId SaveId { get; }` |
| `Type` | `public Type Type { get; }` |
| `TypeLevel` | `public byte TypeLevel { get; }` |

## Key Methods

### GetClassLevel
`public static byte GetClassLevel(Type type)`

**Purpose:** Reads and returns the `class level` value held by the current object.

```csharp
// Static call; no instance required
TypeDefinitionBase.GetClassLevel(type);
```

## Usage Example

```csharp
TypeDefinitionBase.GetClassLevel(type);
```

## See Also

- [Area Index](../)