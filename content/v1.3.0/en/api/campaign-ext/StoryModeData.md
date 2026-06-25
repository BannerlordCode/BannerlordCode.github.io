---
title: "StoryModeData"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `StoryModeData`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# StoryModeData

**Namespace:** StoryMode
**Module:** StoryMode
**Type:** `public static class StoryModeData`
**Base:** none
**File:** `StoryMode/StoryModeData.cs`

## Overview

`StoryModeData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `StoryModeData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `ImperialCulture` | `public static CultureObject ImperialCulture { get; }` |
| `NorthernEmpireKingdom` | `public static Kingdom NorthernEmpireKingdom { get; }` |
| `WesternEmpireKingdom` | `public static Kingdom WesternEmpireKingdom { get; }` |
| `SouthernEmpireKingdom` | `public static Kingdom SouthernEmpireKingdom { get; }` |
| `SturgiaKingdom` | `public static Kingdom SturgiaKingdom { get; }` |
| `AseraiKingdom` | `public static Kingdom AseraiKingdom { get; }` |
| `VlandiaKingdom` | `public static Kingdom VlandiaKingdom { get; }` |
| `BattaniaKingdom` | `public static Kingdom BattaniaKingdom { get; }` |
| `KhuzaitKingdom` | `public static Kingdom KhuzaitKingdom { get; }` |

## Key Methods

### OnGameEnd
`public static void OnGameEnd()`

**Purpose:** Called when the `game end` event is raised.

### IsKingdomImperial
`public static bool IsKingdomImperial(Kingdom kingdomToCheck)`

**Purpose:** Handles logic related to `is kingdom imperial`.

## Usage Example

```csharp
var value = new StoryModeData();
```

## See Also

- [Complete Class Catalog](../catalog)