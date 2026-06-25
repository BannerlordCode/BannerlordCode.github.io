---
title: "CustomGameFilterType"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CustomGameFilterType`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CustomGameFilterType

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.CustomGame
**Module:** TaleWorlds.MountAndBlade
**Type:** `public enum CustomGameFilterType`
**Area:** mission-ext

## Overview

`CustomGameFilterType` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.CustomGame`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.CustomGame` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Enum Values

| Name |
|------|
| `Name` |
| `NotFull` |
| `HasPlayers` |
| `HasPasswordProtection` |
| `IsOfficial` |
| `ModuleCompatible` |

## Usage Example

```csharp
CustomGameFilterType example = CustomGameFilterType.Name;
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
