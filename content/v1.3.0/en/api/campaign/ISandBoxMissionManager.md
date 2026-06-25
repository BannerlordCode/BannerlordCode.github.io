---
title: "ISandBoxMissionManager"
description: "Auto-generated class reference for ISandBoxMissionManager."
---
# ISandBoxMissionManager

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public interface ISandBoxMissionManager`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/ISandBoxMissionManager.cs`

## Overview

`ISandBoxMissionManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `ISandBoxMissionManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
// Usually obtained through DI or a factory method
IISandBoxMissionManager service = ...;
```

## See Also

- [Area Index](../)