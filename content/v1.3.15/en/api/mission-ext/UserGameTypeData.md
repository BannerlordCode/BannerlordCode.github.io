---
title: "UserGameTypeData"
description: "Auto-generated class reference for UserGameTypeData."
---
# UserGameTypeData

**Namespace:** TaleWorlds.MountAndBlade.Launcher.Library.UserDatas
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class UserGameTypeData`
**Base:** none
**File:** `TaleWorlds.MountAndBlade.Launcher.Library/UserDatas/UserGameTypeData.cs`

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
// This data object is usually returned by campaign/mission APIs
UserGameTypeData entry = ...;
```

## See Also

- [Area Index](../)