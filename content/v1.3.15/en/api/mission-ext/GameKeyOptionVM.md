---
title: "GameKeyOptionVM"
description: "Auto-generated class reference for GameKeyOptionVM."
---
# GameKeyOptionVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions.GameKeys
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GameKeyOptionVM : KeyOptionVM`
**Base:** `KeyOptionVM`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/GameKeys/GameKeyOptionVM.cs`

## Overview

`GameKeyOptionVM` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions.GameKeys` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions.GameKeys` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `CurrentGameKey` | `public GameKey CurrentGameKey { get; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of `values` in sync with the underlying state.

```csharp
// Obtain an instance of GameKeyOptionVM from the subsystem API first
GameKeyOptionVM gameKeyOptionVM = ...;
gameKeyOptionVM.RefreshValues();
```

### Set
`public override void Set(InputKey newKey)`

**Purpose:** Assigns a new value to the current object's property or state.

```csharp
// Obtain an instance of GameKeyOptionVM from the subsystem API first
GameKeyOptionVM gameKeyOptionVM = ...;
gameKeyOptionVM.Set(newKey);
```

### Update
`public override void Update()`

**Purpose:** Recalculates and stores the latest representation of the current object.

```csharp
// Obtain an instance of GameKeyOptionVM from the subsystem API first
GameKeyOptionVM gameKeyOptionVM = ...;
gameKeyOptionVM.Update();
```

### OnDone
`public override void OnDone()`

**Purpose:** Invoked when the `done` event is raised.

```csharp
// Obtain an instance of GameKeyOptionVM from the subsystem API first
GameKeyOptionVM gameKeyOptionVM = ...;
gameKeyOptionVM.OnDone();
```

### Revert
`public void Revert()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of GameKeyOptionVM from the subsystem API first
GameKeyOptionVM gameKeyOptionVM = ...;
gameKeyOptionVM.Revert();
```

### Apply
`public void Apply()`

**Purpose:** Applies the current object's effect to its target.

```csharp
// Obtain an instance of GameKeyOptionVM from the subsystem API first
GameKeyOptionVM gameKeyOptionVM = ...;
gameKeyOptionVM.Apply();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
GameKeyOptionVM gameKeyOptionVM = ...;
gameKeyOptionVM.RefreshValues();
```

## See Also

- [Area Index](../)