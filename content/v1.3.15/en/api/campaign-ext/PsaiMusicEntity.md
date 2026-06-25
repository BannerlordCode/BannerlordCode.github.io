---
title: "PsaiMusicEntity"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PsaiMusicEntity`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**Purpose:** Gets the current value of `class string`.

### GetCompatibilitySetting
`public abstract CompatibilitySetting GetCompatibilitySetting(PsaiMusicEntity targetEntity)`

**Purpose:** Gets the current value of `compatibility setting`.

### GetCompatibilityType
`public abstract CompatibilityType GetCompatibilityType(PsaiMusicEntity targetEntity, out CompatibilityReason reason)`

**Purpose:** Gets the current value of `compatibility type`.

### GetParent
`public abstract PsaiMusicEntity GetParent()`

**Purpose:** Gets the current value of `parent`.

### GetChildren
`public abstract List<PsaiMusicEntity> GetChildren()`

**Purpose:** Gets the current value of `children`.

### GetIndexPositionWithinParentEntity
`public abstract int GetIndexPositionWithinParentEntity(PsaiProject parentProject)`

**Purpose:** Gets the current value of `index position within parent entity`.

### Clone
`public virtual object Clone()`

**Purpose:** Handles logic related to `clone`.

### ShallowCopy
`public virtual PsaiMusicEntity ShallowCopy()`

**Purpose:** Handles logic related to `shallow copy`.

### PropertyDifferencesAffectCompatibilities
`public virtual bool PropertyDifferencesAffectCompatibilities(PsaiMusicEntity otherEntity)`

**Purpose:** Handles logic related to `property differences affect compatibilities`.

### GetTheme
`public Theme GetTheme()`

**Purpose:** Gets the current value of `theme`.

## Usage Example

```csharp
var implementation = new CustomPsaiMusicEntity();
```

## See Also

- [Complete Class Catalog](../catalog)