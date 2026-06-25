---
title: "SkillObject"
description: "Auto-generated class reference for SkillObject."
---
# SkillObject

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public sealed class SkillObject : PropertyObject`
**Base:** `PropertyObject`
**File:** `bin/TaleWorlds.Core/TaleWorlds.Core/SkillObject.cs`

## Overview

`SkillObject` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Attributes` | `public CharacterAttribute Attributes { get; }` |
| `HowToLearnSkillText` | `public TextObject HowToLearnSkillText { get; }` |

## Key Methods

### ToString
`public override string ToString()`

**Purpose:** **Purpose:** Returns a human-readable string representation of the this instance.

```csharp
// Obtain an instance of SkillObject from the subsystem API first
SkillObject skillObject = ...;
var result = skillObject.ToString();
```

### Initialize
`public SkillObject Initialize(TextObject name, TextObject description, CharacterAttribute attributes)`

**Purpose:** **Purpose:** Prepares the resources, state, or bindings the this instance needs before use.

```csharp
// Obtain an instance of SkillObject from the subsystem API first
SkillObject skillObject = ...;
var result = skillObject.Initialize(name, description, attributes);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
SkillObject skillObject = ...;
skillObject.ToString();
```

## See Also

- [Area Index](../)