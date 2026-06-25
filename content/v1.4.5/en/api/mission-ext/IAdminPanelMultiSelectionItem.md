---
title: "IAdminPanelMultiSelectionItem"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `IAdminPanelMultiSelectionItem`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# IAdminPanelMultiSelectionItem

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.Admin
**Module:** TaleWorlds.MountAndBlade
**Type:** `class`
**Base:** none
**File:** `Bannerlord.Source/Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.Admin/IAdminPanelMultiSelectionItem.cs`

## Overview

`IAdminPanelMultiSelectionItem` lives in `TaleWorlds.MountAndBlade.Multiplayer.Admin` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.Admin` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
IAdminPanelMultiSelectionItem implementation = GetAdminPanelMultiSelectionItemImplementation();
```

## See Also

- [Complete Class Catalog](../catalog)