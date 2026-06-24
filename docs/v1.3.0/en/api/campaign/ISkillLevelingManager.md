<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ISkillLevelingManager`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ISkillLevelingManager

**Namespace:** TaleWorlds.CampaignSystem.CharacterDevelopment
**Module:** TaleWorlds.CampaignSystem
**Type:** `class`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/CharacterDevelopment/ISkillLevelingManager.cs`

## Overview

`ISkillLevelingManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `ISkillLevelingManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
ISkillLevelingManager implementation = GetSkillLevelingManagerImplementation();
```

## See Also

- [Complete Class Catalog](../catalog)