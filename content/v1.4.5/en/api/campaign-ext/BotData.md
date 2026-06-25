---
title: "BotData"
description: "Auto-generated class reference for BotData."
---
# BotData

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BotData`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/BotData.cs`

## Overview

`BotData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `BotData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsAnyValid` | `public bool IsAnyValid { get; }` |

## Key Methods

### ResetKillDeathAssist
`public void ResetKillDeathAssist()`

**Purpose:** Returns `kill death assist` to its default or initial condition.

```csharp
// Obtain an instance of BotData from the subsystem API first
BotData botData = ...;
botData.ResetKillDeathAssist();
```

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
BotData entry = ...;
```

## See Also

- [Area Index](../)