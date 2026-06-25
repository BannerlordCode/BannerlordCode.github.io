---
title: "IIncidentManager"
description: "Auto-generated class reference for IIncidentManager."
---
# IIncidentManager

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public interface IIncidentManager`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/IIncidentManager.cs`

## Overview

`IIncidentManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `IIncidentManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
// Usually obtained through DI or a factory method
IIIncidentManager service = ...;
```

## See Also

- [Area Index](../)