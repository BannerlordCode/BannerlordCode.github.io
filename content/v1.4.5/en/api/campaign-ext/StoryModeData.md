---
title: "StoryModeData"
description: "Auto-generated class reference for StoryModeData."
---
# StoryModeData

**Namespace:** StoryMode
**Module:** StoryMode
**Type:** `public static class StoryModeData`
**Base:** none
**File:** `Modules.StoryMode/StoryMode/StoryMode/StoryModeData.cs`

## Overview

`StoryModeData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `StoryModeData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `NorthernEmpireKingdom` | `public static Kingdom NorthernEmpireKingdom { get; }` |
| `WesternEmpireKingdom` | `public static Kingdom WesternEmpireKingdom { get; }` |
| `SouthernEmpireKingdom` | `public static Kingdom SouthernEmpireKingdom { get; }` |
| `SturgiaKingdom` | `public static Kingdom SturgiaKingdom { get; }` |
| `AseraiKingdom` | `public static Kingdom AseraiKingdom { get; }` |
| `VlandiaKingdom` | `public static Kingdom VlandiaKingdom { get; }` |
| `BattaniaKingdom` | `public static Kingdom BattaniaKingdom { get; }` |
| `KhuzaitKingdom` | `public static Kingdom KhuzaitKingdom { get; }` |

## Key Methods

### IsKingdomImperial
`public static bool IsKingdomImperial(Kingdom kingdomToCheck)`

**Purpose:** Determines whether the this instance is in the kingdom imperial state or condition.

```csharp
// Static call; no instance required
StoryModeData.IsKingdomImperial(kingdomToCheck);
```

### IsConspiracyTroop
`public static bool IsConspiracyTroop(CharacterObject troop)`

**Purpose:** Determines whether the this instance is in the conspiracy troop state or condition.

```csharp
// Static call; no instance required
StoryModeData.IsConspiracyTroop(troop);
```

### OnGameEnd
`public static void OnGameEnd()`

**Purpose:** Invoked when the game end event is raised.

```csharp
// Static call; no instance required
StoryModeData.OnGameEnd();
```

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
StoryModeData entry = ...;
```

## See Also

- [Area Index](../)