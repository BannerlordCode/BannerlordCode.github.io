---
title: "HealthDropData"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `HealthDropData`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# HealthDropData

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class HealthDropData`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission/AgentHealthWidget.cs`

## Overview

`HealthDropData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `HealthDropData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
var value = new HealthDropData();
```

## See Also

- [Complete Class Catalog](../catalog)