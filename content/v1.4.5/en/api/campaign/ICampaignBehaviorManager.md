---
title: "ICampaignBehaviorManager"
description: "Auto-generated class reference for ICampaignBehaviorManager."
---
# ICampaignBehaviorManager

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public interface ICampaignBehaviorManager`
**Base:** none
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/ICampaignBehaviorManager.cs`

## Overview

`ICampaignBehaviorManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `ICampaignBehaviorManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
// Usually obtained through DI or a factory method
IICampaignBehaviorManager service = ...;
```

## See Also

- [Area Index](../)