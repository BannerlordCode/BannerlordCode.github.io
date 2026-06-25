---
title: "MultiplayerLocalData"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerLocalData`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerLocalData

**Namespace:** TaleWorlds.MountAndBlade.Diamond.Lobby
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MultiplayerLocalData`
**Base:** none
**File:** `TaleWorlds.MountAndBlade.Diamond/Lobby/MultiplayerLocalData.cs`

## Overview

`MultiplayerLocalData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `MultiplayerLocalData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### HasSameContentWith
`public abstract bool HasSameContentWith(MultiplayerLocalData other)`

**Purpose:** Checks whether the current object has/contains `same content with`.

## Usage Example

```csharp
var implementation = new CustomMultiplayerLocalData();
```

## See Also

- [Complete Class Catalog](../catalog)