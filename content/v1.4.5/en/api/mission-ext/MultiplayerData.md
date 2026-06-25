---
title: "MultiplayerData"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerData`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MultiplayerData

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerData : MBMultiplayerData`
**Base:** `MBMultiplayerData`
**File:** `Bannerlord.Source/Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade/MultiplayerData.cs`

## Overview

`MultiplayerData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `MultiplayerData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### IsMultiplayerTeamAvailable
`public bool IsMultiplayerTeamAvailable(int peerNo, int teamNo)`

**Purpose:** Handles logic related to `is multiplayer team available`.

## Usage Example

```csharp
var value = new MultiplayerData();
```

## See Also

- [Complete Class Catalog](../catalog)