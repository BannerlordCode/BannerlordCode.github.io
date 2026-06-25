---
title: "SpectatorData"
description: "Auto-generated class reference for SpectatorData."
---
# SpectatorData

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct SpectatorData`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/Mission.cs`

## Overview

`SpectatorData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `SpectatorData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `AgentToFollow` | `public Agent AgentToFollow { get; }` |
| `AgentVisualToFollow` | `public IAgentVisual AgentVisualToFollow { get; }` |
| `CameraType` | `public SpectatorCameraTypes CameraType { get; }` |

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
SpectatorData entry = ...;
```

## See Also

- [Area Index](../)