---
title: "ISaveManager"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ISaveManager`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ISaveManager

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `class`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/ISaveManager.cs`

## Overview

`ISaveManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `ISaveManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
ISaveManager implementation = GetSaveManagerImplementation();
```

## See Also

- [Complete Class Catalog](../catalog)