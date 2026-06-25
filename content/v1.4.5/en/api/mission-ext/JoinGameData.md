---
title: "JoinGameData"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `JoinGameData`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# JoinGameData

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class JoinGameData`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.Diamond/TaleWorlds.MountAndBlade.Diamond/JoinGameData.cs`

## Overview

`JoinGameData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `JoinGameData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `GameServerProperties` | `public GameServerProperties GameServerProperties { get; set; }` |
| `PeerIndex` | `public int PeerIndex { get; set; }` |
| `SessionKey` | `public int SessionKey { get; set; }` |

## Usage Example

```csharp
var value = new JoinGameData();
```

## See Also

- [Complete Class Catalog](../catalog)