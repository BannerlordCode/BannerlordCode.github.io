---
title: "MPChatLineVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MPChatLineVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MPChatLineVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Multiplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPChatLineVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Multiplayer/MPChatLineVM.cs`

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

**Purpose:** Handles the `fading` event or callback.

### ForceInvisible
`public void ForceInvisible()`

**Purpose:** Handles logic related to `force invisible`.

### ToggleForceVisible
`public void ToggleForceVisible(bool visible)`

**Purpose:** Handles logic related to `toggle force visible`.

## Usage Example

```csharp
var value = new MPChatLineVM();
value.HandleFading(0);
```

## See Also

- [Complete Class Catalog](../catalog)