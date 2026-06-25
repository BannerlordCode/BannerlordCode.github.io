---
title: "PlayerDataExperience"
description: "Auto-generated class reference for PlayerDataExperience."
---
# PlayerDataExperience

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct PlayerDataExperience`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade.Diamond/TaleWorlds.MountAndBlade.Diamond/PlayerDataExperience.cs`

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

**Purpose:** Calculates the current value or result of level from experience.

```csharp
// Static call; no instance required
PlayerDataExperience.CalculateLevelFromExperience(0);
```

### CalculateExperienceFromLevel
`public static int CalculateExperienceFromLevel(int level)`

**Purpose:** Calculates the current value or result of experience from level.

```csharp
// Static call; no instance required
PlayerDataExperience.CalculateExperienceFromLevel(0);
```

### ExperienceRequiredForLevel
`public static int ExperienceRequiredForLevel(int level)`

**Purpose:** Executes the ExperienceRequiredForLevel logic.

```csharp
// Static call; no instance required
PlayerDataExperience.ExperienceRequiredForLevel(0);
```

## Usage Example

```csharp
PlayerDataExperience.CalculateLevelFromExperience(0);
```

## See Also

- [Area Index](../)