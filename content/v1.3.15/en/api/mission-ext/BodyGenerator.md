---
title: "BodyGenerator"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BodyGenerator`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BodyGenerator

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BodyGenerator`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/BodyGenerator.cs`

## Overview

`BodyGenerator` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Character` | `public BasicCharacterObject Character { get; }` |

## Key Methods

### InitBodyGenerator
`public FaceGenerationParams InitBodyGenerator(bool isDressed)`

**Purpose:** Initializes the state, resources, or bindings for `body generator`.

### RefreshFace
`public void RefreshFace(FaceGenerationParams faceGenerationParams, bool hasEquipment)`

**Purpose:** Refreshes the display or cache of `face`.

### SaveCurrentCharacter
`public void SaveCurrentCharacter()`

**Purpose:** Saves `current character` data.

## Usage Example

```csharp
var value = new BodyGenerator();
value.InitBodyGenerator(false);
```

## See Also

- [Complete Class Catalog](../catalog)