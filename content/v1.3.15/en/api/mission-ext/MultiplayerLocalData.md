---
title: "MultiplayerLocalData"
description: "Auto-generated class reference for MultiplayerLocalData."
---
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

**Purpose:** Determines whether the this instance already holds same content with.

```csharp
// Obtain an instance of MultiplayerLocalData from the subsystem API first
MultiplayerLocalData multiplayerLocalData = ...;
var result = multiplayerLocalData.HasSameContentWith(other);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
MultiplayerLocalData instance = ...;
```

## See Also

- [Area Index](../)