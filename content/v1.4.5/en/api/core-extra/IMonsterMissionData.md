---
title: "IMonsterMissionData"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `IMonsterMissionData`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# IMonsterMissionData

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `class`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.Core/TaleWorlds.Core/IMonsterMissionData.cs`

## Overview

`IMonsterMissionData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `IMonsterMissionData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
IMonsterMissionData implementation = GetMonsterMissionDataImplementation();
```

## See Also

- [Complete Class Catalog](../catalog)