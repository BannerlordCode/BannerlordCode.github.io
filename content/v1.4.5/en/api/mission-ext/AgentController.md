---
title: "AgentController"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AgentController`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# AgentController

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class AgentController`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/AgentController.cs`

## Overview

`AgentController` is a controller whose job is less about storing data and more about driving the subsystem into its next state after receiving input.

## Mental Model

Treat `AgentController` as a Controller-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `Owner` | `public Agent Owner { get; set; }` |
| `Mission` | `public Mission Mission { get; set; }` |

## Key Methods

### OnInitialize
`public virtual void OnInitialize()`

**Purpose:** Called when the `initialize` event is raised.

## Usage Example

```csharp
var controller = Mission.Current.GetMissionBehavior<AgentController>();
```

## See Also

- [Complete Class Catalog](../catalog)