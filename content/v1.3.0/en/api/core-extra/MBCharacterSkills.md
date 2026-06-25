---
title: "MBCharacterSkills"
description: "Auto-generated class reference for MBCharacterSkills."
---
# MBCharacterSkills

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class MBCharacterSkills : MBObjectBase`
**Base:** `MBObjectBase`
**File:** `TaleWorlds.Core/MBCharacterSkills.cs`

## Overview

`MBCharacterSkills` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Skills` | `public PropertyOwner<SkillObject> Skills { get; }` |

## Key Methods

### Init
`public void Init(MBObjectManager objectManager, XmlNode node)`

**Purpose:** Prepares the resources, state, or bindings the this instance needs before use.

```csharp
// Obtain an instance of MBCharacterSkills from the subsystem API first
MBCharacterSkills mBCharacterSkills = ...;
mBCharacterSkills.Init(objectManager, node);
```

### Deserialize
`public override void Deserialize(MBObjectManager objectManager, XmlNode node)`

**Purpose:** Restores the this instance from serialized data.

```csharp
// Obtain an instance of MBCharacterSkills from the subsystem API first
MBCharacterSkills mBCharacterSkills = ...;
mBCharacterSkills.Deserialize(objectManager, node);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MBCharacterSkills mBCharacterSkills = ...;
mBCharacterSkills.Init(objectManager, node);
```

## See Also

- [Area Index](../)