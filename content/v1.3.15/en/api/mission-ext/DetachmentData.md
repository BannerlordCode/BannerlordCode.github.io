---
title: "DetachmentData"
description: "Auto-generated class reference for DetachmentData."
---
# DetachmentData

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DetachmentData`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/DetachmentData.cs`

## Overview

`DetachmentData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `DetachmentData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `AgentCount` | `public int AgentCount { get; }` |

## Key Methods

### IsPrecalculated
`public bool IsPrecalculated()`

**Purpose:** **Purpose:** Determines whether the this instance is in the precalculated state or condition.

```csharp
// Obtain an instance of DetachmentData from the subsystem API first
DetachmentData detachmentData = ...;
var result = detachmentData.IsPrecalculated();
```

### RemoveScoreOfAgent
`public void RemoveScoreOfAgent(Agent agent)`

**Purpose:** **Purpose:** Removes score of agent from the current collection or state.

```csharp
// Obtain an instance of DetachmentData from the subsystem API first
DetachmentData detachmentData = ...;
detachmentData.RemoveScoreOfAgent(agent);
```

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
DetachmentData entry = ...;
```

## See Also

- [Area Index](../)