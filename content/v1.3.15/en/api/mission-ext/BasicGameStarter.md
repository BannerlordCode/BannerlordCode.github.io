---
title: "BasicGameStarter"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BasicGameStarter`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BasicGameStarter

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BasicGameStarter : IGameStarter`
**Base:** `IGameStarter`
**File:** `TaleWorlds.MountAndBlade/BasicGameStarter.cs`

## Overview

`BasicGameStarter` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### AddModel
`public void AddModel(GameModel gameModel)`

**Purpose:** Adds `model` to the current collection or state.

## Usage Example

```csharp
var value = new BasicGameStarter();
value.AddModel(gameModel);
```

## See Also

- [Complete Class Catalog](../catalog)