---
title: "FirstPhase"
description: "Auto-generated class reference for FirstPhase."
---
# FirstPhase

**Namespace:** StoryMode.StoryModePhases
**Module:** StoryMode.StoryModePhases
**Type:** `public class FirstPhase`
**Base:** none
**File:** `Modules.StoryMode/StoryMode/StoryMode.StoryModePhases/FirstPhase.cs`

## Overview

`FirstPhase` lives in `StoryMode.StoryModePhases` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `StoryMode.StoryModePhases` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `CollectedBannerPieceCount` | `public int CollectedBannerPieceCount { get; }` |
| `FirstPhaseStartTime` | `public CampaignTime FirstPhaseStartTime { get; }` |

## Key Methods

### CollectBannerPiece
`public void CollectBannerPiece()`

**Purpose:** **Purpose:** Executes the CollectBannerPiece logic.

```csharp
// Obtain an instance of FirstPhase from the subsystem API first
FirstPhase firstPhase = ...;
firstPhase.CollectBannerPiece();
```

### MergeDragonBanner
`public void MergeDragonBanner()`

**Purpose:** **Purpose:** Executes the MergeDragonBanner logic.

```csharp
// Obtain an instance of FirstPhase from the subsystem API first
FirstPhase firstPhase = ...;
firstPhase.MergeDragonBanner();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
FirstPhase firstPhase = ...;
firstPhase.CollectBannerPiece();
```

## See Also

- [Area Index](../)