---
title: "GameMenuItemProgressVM"
description: "Auto-generated class reference for GameMenuItemProgressVM."
---
# GameMenuItemProgressVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class GameMenuItemProgressVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu/GameMenuItemProgressVM.cs`

## Overview

`GameMenuItemProgressVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Text` | `public string Text { get; set; }` |
| `ProgressText` | `public string ProgressText { get; set; }` |
| `Progress` | `public float Progress { get; set; }` |

## Key Methods

### InitializeWith
`public void InitializeWith(MenuContext context, int virtualIndex)`

**Purpose:** Prepares the resources, state, or bindings required by `with`.

```csharp
// Obtain an instance of GameMenuItemProgressVM from the subsystem API first
GameMenuItemProgressVM gameMenuItemProgressVM = ...;
gameMenuItemProgressVM.InitializeWith(context, 0);
```

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of `values` in sync with the underlying state.

```csharp
// Obtain an instance of GameMenuItemProgressVM from the subsystem API first
GameMenuItemProgressVM gameMenuItemProgressVM = ...;
gameMenuItemProgressVM.RefreshValues();
```

### OnTick
`public void OnTick()`

**Purpose:** Invoked when the `tick` event is raised.

```csharp
// Obtain an instance of GameMenuItemProgressVM from the subsystem API first
GameMenuItemProgressVM gameMenuItemProgressVM = ...;
gameMenuItemProgressVM.OnTick();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
GameMenuItemProgressVM gameMenuItemProgressVM = ...;
gameMenuItemProgressVM.InitializeWith(context, 0);
```

## See Also

- [Area Index](../)