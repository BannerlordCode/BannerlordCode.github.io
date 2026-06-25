---
title: "FirstPhase"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `FirstPhase`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# FirstPhase

**Namespace:** StoryMode.StoryModePhases
**Module:** StoryMode.StoryModePhases
**Type:** `public class FirstPhase`
**Base:** none
**File:** `StoryMode/StoryModePhases/FirstPhase.cs`

## Overview

`FirstPhase` lives in `StoryMode.StoryModePhases` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `StoryMode.StoryModePhases` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Instance` | `public static FirstPhase Instance { get; }` |
| `CollectedBannerPieceCount` | `public int CollectedBannerPieceCount { get; }` |
| `FirstPhaseStartTime` | `public CampaignTime FirstPhaseStartTime { get; }` |
| `FirstPhaseEndTime` | `public CampaignTime FirstPhaseEndTime { get; }` |
| `AllPiecesCollected` | `public bool AllPiecesCollected { get; }` |

## Key Methods

### CollectBannerPiece
`public void CollectBannerPiece()`

**Purpose:** Handles logic related to `collect banner piece`.

### MergeDragonBanner
`public void MergeDragonBanner()`

**Purpose:** Handles logic related to `merge dragon banner`.

## Usage Example

```csharp
var value = new FirstPhase();
value.CollectBannerPiece();
```

## See Also

- [Complete Class Catalog](../catalog)