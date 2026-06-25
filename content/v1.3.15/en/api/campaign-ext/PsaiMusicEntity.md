---
title: "PsaiMusicEntity"
description: "Auto-generated class reference for PsaiMusicEntity."
---
# PsaiMusicEntity

**Namespace:** psai.Editor
**Module:** psai.Editor
**Type:** `public abstract class PsaiMusicEntity : ICloneable`
**Base:** `ICloneable`
**File:** `TaleWorlds.PSAI/Editor/PsaiMusicEntity.cs`

## Overview

`PsaiMusicEntity` lives in `psai.Editor` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `psai.Editor` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Name` | `public string Name { get; set; }` |

## Key Methods

### GetClassString
`public abstract string GetClassString()`

**Purpose:** Reads and returns the class string value held by the this instance.

```csharp
// Obtain an instance of PsaiMusicEntity from the subsystem API first
PsaiMusicEntity psaiMusicEntity = ...;
var result = psaiMusicEntity.GetClassString();
```

### GetCompatibilitySetting
`public abstract CompatibilitySetting GetCompatibilitySetting(PsaiMusicEntity targetEntity)`

**Purpose:** Reads and returns the compatibility setting value held by the this instance.

```csharp
// Obtain an instance of PsaiMusicEntity from the subsystem API first
PsaiMusicEntity psaiMusicEntity = ...;
var result = psaiMusicEntity.GetCompatibilitySetting(targetEntity);
```

### GetCompatibilityType
`public abstract CompatibilityType GetCompatibilityType(PsaiMusicEntity targetEntity, out CompatibilityReason reason)`

**Purpose:** Reads and returns the compatibility type value held by the this instance.

```csharp
// Obtain an instance of PsaiMusicEntity from the subsystem API first
PsaiMusicEntity psaiMusicEntity = ...;
var result = psaiMusicEntity.GetCompatibilityType(targetEntity, reason);
```

### GetParent
`public abstract PsaiMusicEntity GetParent()`

**Purpose:** Reads and returns the parent value held by the this instance.

```csharp
// Obtain an instance of PsaiMusicEntity from the subsystem API first
PsaiMusicEntity psaiMusicEntity = ...;
var result = psaiMusicEntity.GetParent();
```

### GetChildren
`public abstract List<PsaiMusicEntity> GetChildren()`

**Purpose:** Reads and returns the children value held by the this instance.

```csharp
// Obtain an instance of PsaiMusicEntity from the subsystem API first
PsaiMusicEntity psaiMusicEntity = ...;
var result = psaiMusicEntity.GetChildren();
```

### GetIndexPositionWithinParentEntity
`public abstract int GetIndexPositionWithinParentEntity(PsaiProject parentProject)`

**Purpose:** Reads and returns the index position within parent entity value held by the this instance.

```csharp
// Obtain an instance of PsaiMusicEntity from the subsystem API first
PsaiMusicEntity psaiMusicEntity = ...;
var result = psaiMusicEntity.GetIndexPositionWithinParentEntity(parentProject);
```

### Clone
`public virtual object Clone()`

**Purpose:** Duplicates the this instance's state and returns a new instance.

```csharp
// Obtain an instance of PsaiMusicEntity from the subsystem API first
PsaiMusicEntity psaiMusicEntity = ...;
var result = psaiMusicEntity.Clone();
```

### ShallowCopy
`public virtual PsaiMusicEntity ShallowCopy()`

**Purpose:** Executes the ShallowCopy logic.

```csharp
// Obtain an instance of PsaiMusicEntity from the subsystem API first
PsaiMusicEntity psaiMusicEntity = ...;
var result = psaiMusicEntity.ShallowCopy();
```

### PropertyDifferencesAffectCompatibilities
`public virtual bool PropertyDifferencesAffectCompatibilities(PsaiMusicEntity otherEntity)`

**Purpose:** Executes the PropertyDifferencesAffectCompatibilities logic.

```csharp
// Obtain an instance of PsaiMusicEntity from the subsystem API first
PsaiMusicEntity psaiMusicEntity = ...;
var result = psaiMusicEntity.PropertyDifferencesAffectCompatibilities(otherEntity);
```

### GetTheme
`public Theme GetTheme()`

**Purpose:** Reads and returns the theme value held by the this instance.

```csharp
// Obtain an instance of PsaiMusicEntity from the subsystem API first
PsaiMusicEntity psaiMusicEntity = ...;
var result = psaiMusicEntity.GetTheme();
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
PsaiMusicEntity instance = ...;
```

## See Also

- [Area Index](../)