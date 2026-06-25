---
title: "PsaiInfo"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PsaiInfo`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PsaiInfo

**Namespace:** psai.net
**Module:** psai.net
**Type:** `public struct PsaiInfo`
**Base:** none
**File:** `TaleWorlds.PSAI/net/PsaiInfo.cs`

## Overview

`PsaiInfo` lives in `psai.net` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `psai.net` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `psaiState` | `public PsaiState psaiState { get; }` |
| `upcomingPsaiState` | `public PsaiState upcomingPsaiState { get; }` |
| `lastBasicMoodThemeId` | `public int lastBasicMoodThemeId { get; }` |
| `effectiveThemeId` | `public int effectiveThemeId { get; }` |
| `upcomingThemeId` | `public int upcomingThemeId { get; }` |
| `currentIntensity` | `public float currentIntensity { get; }` |
| `upcomingIntensity` | `public float upcomingIntensity { get; }` |
| `themesQueued` | `public int themesQueued { get; }` |
| `targetSegmentId` | `public int targetSegmentId { get; }` |
| `intensityIsHeld` | `public bool intensityIsHeld { get; }` |
| `returningToLastBasicMood` | `public bool returningToLastBasicMood { get; }` |
| `remainingMillisecondsInRestMode` | `public int remainingMillisecondsInRestMode { get; }` |
| `paused` | `public bool paused { get; }` |

## Usage Example

```csharp
var value = new PsaiInfo();
```

## See Also

- [Complete Class Catalog](../catalog)