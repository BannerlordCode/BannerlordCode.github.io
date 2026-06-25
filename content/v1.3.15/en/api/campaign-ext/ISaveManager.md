---
title: "ISaveManager"
description: "Auto-generated class reference for ISaveManager."
---
# ISaveManager

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public interface ISaveManager`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/ISaveManager.cs`

## Overview

`ISaveManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `ISaveManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
// Usually obtained through DI or a factory method
IISaveManager service = ...;
```

## See Also

- [Area Index](../)