---
title: "UserGameTypeData"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `UserGameTypeData`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# UserGameTypeData

**Namespace:** TaleWorlds.MountAndBlade.Launcher.Library.UserDatas
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class UserGameTypeData`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.Launcher.Library/TaleWorlds.MountAndBlade.Launcher.Library.UserDatas/UserGameTypeData.cs`

## Overview

`UserGameTypeData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `UserGameTypeData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `ModDatas` | `public List<UserModData> ModDatas { get; set; }` |

## Usage Example

```csharp
var value = new UserGameTypeData();
```

## See Also

- [Complete Class Catalog](../catalog)