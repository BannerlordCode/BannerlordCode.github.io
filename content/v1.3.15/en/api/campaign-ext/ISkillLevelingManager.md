---
title: "ISkillLevelingManager"
description: "Auto-generated class reference for ISkillLevelingManager."
---
# ISkillLevelingManager

**Namespace:** TaleWorlds.CampaignSystem.CharacterDevelopment
**Module:** TaleWorlds.CampaignSystem
**Type:** `public interface ISkillLevelingManager`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/CharacterDevelopment/ISkillLevelingManager.cs`

## Overview

`ISkillLevelingManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `ISkillLevelingManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
// Usually obtained through DI or a factory method
IISkillLevelingManager service = ...;
```

## See Also

- [Area Index](../)