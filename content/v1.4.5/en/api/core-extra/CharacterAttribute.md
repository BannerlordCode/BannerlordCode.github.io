---
title: "CharacterAttribute"
description: "Auto-generated class reference for CharacterAttribute."
---
# CharacterAttribute

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class CharacterAttribute : PropertyObject`
**Base:** `PropertyObject`
**File:** `bin/TaleWorlds.Core/TaleWorlds.Core/CharacterAttribute.cs`

## Overview

`CharacterAttribute` is a .NET attribute used to tag a type or member so runtime code or tooling can recognize it by convention.

## Mental Model

Treat `CharacterAttribute` as a Attribute-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `Abbreviation` | `public TextObject Abbreviation { get; }` |

## Key Methods

### Initialize
`public void Initialize(TextObject name, TextObject description, TextObject abbreviation)`

**Purpose:** Prepares the resources, state, or bindings the this instance needs before use.

```csharp
// Obtain an instance of CharacterAttribute from the subsystem API first
CharacterAttribute characterAttribute = ...;
characterAttribute.Initialize(name, description, abbreviation);
```

## Usage Example

```csharp
[CharacterAttribute]
public class Example { }
```

## See Also

- [Area Index](../)