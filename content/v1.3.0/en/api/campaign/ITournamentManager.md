---
title: "ITournamentManager"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ITournamentManager`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ITournamentManager

**Namespace:** TaleWorlds.CampaignSystem.TournamentGames
**Module:** TaleWorlds.CampaignSystem
**Type:** `class`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/TournamentGames/ITournamentManager.cs`

## Overview

`ITournamentManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `ITournamentManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
ITournamentManager implementation = GetTournamentManagerImplementation();
```

## See Also

- [Complete Class Catalog](../catalog)