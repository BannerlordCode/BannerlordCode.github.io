---
title: "ClanCreationPlayerData"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ClanCreationPlayerData`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ClanCreationPlayerData

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ClanCreationPlayerData`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.Diamond/TaleWorlds.MountAndBlade.Diamond/ClanCreationPlayerData.cs`

## Overview

`ClanCreationPlayerData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `ClanCreationPlayerData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `PlayerSessionId` | `public PlayerSessionId PlayerSessionId { get; }` |
| `ClanCreationAnswer` | `public ClanCreationAnswer ClanCreationAnswer { get; }` |

## Usage Example

```csharp
var value = new ClanCreationPlayerData();
```

## See Also

- [Complete Class Catalog](../catalog)