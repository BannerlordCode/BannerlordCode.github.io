---
title: "UsableMissionObjectComponent"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `UsableMissionObjectComponent`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# UsableMissionObjectComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class UsableMissionObjectComponent`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/UsableMissionObjectComponent.cs`

## Overview

`UsableMissionObjectComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `UsableMissionObjectComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### IsOnTickRequired
`public virtual bool IsOnTickRequired()`

**Purpose:** Handles logic related to `is on tick required`.

## Usage Example

```csharp
var implementation = new CustomUsableMissionObjectComponent();
```

## See Also

- [Complete Class Catalog](../catalog)