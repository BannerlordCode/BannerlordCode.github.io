---
title: "PlayerDataExperience"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PlayerDataExperience`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PlayerDataExperience

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct PlayerDataExperience`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.Diamond/TaleWorlds.MountAndBlade.Diamond/PlayerDataExperience.cs`

## Overview

`PlayerDataExperience` lives in `TaleWorlds.MountAndBlade.Diamond` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Diamond` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Experience` | `public int Experience { get; }` |

## Key Methods

### CalculateLevelFromExperience
`public static int CalculateLevelFromExperience(int experience)`

**Purpose:** Handles logic related to `calculate level from experience`.

### CalculateExperienceFromLevel
`public static int CalculateExperienceFromLevel(int level)`

**Purpose:** Handles logic related to `calculate experience from level`.

### ExperienceRequiredForLevel
`public static int ExperienceRequiredForLevel(int level)`

**Purpose:** Handles logic related to `experience required for level`.

## Usage Example

```csharp
PlayerDataExperience.CalculateLevelFromExperience(0);
```

## See Also

- [Complete Class Catalog](../catalog)