---
title: "IAgentBehaviorManager"
description: "Auto-generated class reference for IAgentBehaviorManager."
---
# IAgentBehaviorManager

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public interface IAgentBehaviorManager`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/IAgentBehaviorManager.cs`

## Overview

`IAgentBehaviorManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `IAgentBehaviorManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
// Usually obtained through DI or a factory method
IIAgentBehaviorManager service = ...;
```

## See Also

- [Area Index](../)