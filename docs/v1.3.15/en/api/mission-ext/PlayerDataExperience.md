<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PlayerDataExperience`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PlayerDataExperience

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct PlayerDataExperience`
**Area:** mission-ext

## Overview

`PlayerDataExperience` lives in `TaleWorlds.MountAndBlade.Diamond`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Diamond` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Experience` | `public int Experience { get; }` |
| `Level` | `public int Level { get; }` |
| `ExperienceToNextLevel` | `public int ExperienceToNextLevel { get; }` |
| `ExperienceInCurrentLevel` | `public int ExperienceInCurrentLevel { get; }` |

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
// Prepare the required context, then call the static entry point directly
PlayerDataExperience.CalculateLevelFromExperience(0);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
