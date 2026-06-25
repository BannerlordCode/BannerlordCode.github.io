---
title: "MPChatLineVM"
description: "Auto-generated class reference for MPChatLineVM."
---
# MPChatLineVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Multiplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPChatLineVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.Multiplayer/MPChatLineVM.cs`

## Overview

`MPChatLineVM` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.Multiplayer` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.Multiplayer` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `ChatLine` | `public string ChatLine { get; set; }` |
| `Color` | `public Color Color { get; set; }` |
| `Alpha` | `public float Alpha { get; set; }` |
| `Category` | `public string Category { get; set; }` |

## Key Methods

### HandleFading
`public void HandleFading(float dt)`

**Purpose:** **Purpose:** Executes the response logic associated with fading.

```csharp
// Obtain an instance of MPChatLineVM from the subsystem API first
MPChatLineVM mPChatLineVM = ...;
mPChatLineVM.HandleFading(0);
```

### ForceInvisible
`public void ForceInvisible()`

**Purpose:** **Purpose:** Executes the ForceInvisible logic.

```csharp
// Obtain an instance of MPChatLineVM from the subsystem API first
MPChatLineVM mPChatLineVM = ...;
mPChatLineVM.ForceInvisible();
```

### ToggleForceVisible
`public void ToggleForceVisible(bool visible)`

**Purpose:** **Purpose:** Executes the ToggleForceVisible logic.

```csharp
// Obtain an instance of MPChatLineVM from the subsystem API first
MPChatLineVM mPChatLineVM = ...;
mPChatLineVM.ToggleForceVisible(false);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MPChatLineVM mPChatLineVM = ...;
mPChatLineVM.HandleFading(0);
```

## See Also

- [Area Index](../)