---
title: "HealthDropData"
description: "Auto-generated class reference for HealthDropData."
---
# HealthDropData

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class HealthDropData`
**Base:** none
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/AgentHealthWidget.cs`

## Overview

`HealthDropData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `HealthDropData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
HealthDropData entry = ...;
```

## See Also

- [Area Index](../)