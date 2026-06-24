<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DedicatedServerConsoleCommandManager`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DedicatedServerConsoleCommandManager

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class DedicatedServerConsoleCommandManager`
**Base:** none
**File:** `Bannerlord.Source/Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade/DedicatedServerConsoleCommandManager.cs`

## Overview

`DedicatedServerConsoleCommandManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `DedicatedServerConsoleCommandManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### AddType
`public static void AddType(Type type)`

**Purpose:** Adds `type` to the current collection or state.

## Usage Example

```csharp
var manager = DedicatedServerConsoleCommandManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)