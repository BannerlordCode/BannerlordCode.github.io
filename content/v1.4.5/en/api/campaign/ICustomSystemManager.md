---
title: "ICustomSystemManager"
description: "Auto-generated class reference for ICustomSystemManager."
---
# ICustomSystemManager

**Namespace:** TaleWorlds.CampaignSystem.Handlers
**Module:** TaleWorlds.CampaignSystem
**Type:** `public interface ICustomSystemManager`
**Base:** none
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Handlers/ICustomSystemManager.cs`

## Overview

`ICustomSystemManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `ICustomSystemManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
// Usually obtained through DI or a factory method
IICustomSystemManager service = ...;
```

## See Also

- [Area Index](../)