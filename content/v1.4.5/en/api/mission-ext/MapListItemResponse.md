---
title: "MapListItemResponse"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MapListItemResponse`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MapListItemResponse

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MapListItemResponse`
**Base:** none
**File:** `Bannerlord.Source/Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer/MapListItemResponse.cs`

## Overview

`MapListItemResponse` lives in `TaleWorlds.MountAndBlade.Multiplayer` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Name` | `public string Name { get; }` |
| `UniqueToken` | `public string UniqueToken { get; }` |
| `Revision` | `public string Revision { get; }` |

## Usage Example

```csharp
var value = new MapListItemResponse();
```

## See Also

- [Complete Class Catalog](../catalog)