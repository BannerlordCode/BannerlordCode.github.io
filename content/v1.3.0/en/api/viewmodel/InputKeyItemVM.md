---
title: "InputKeyItemVM"
description: "Auto-generated class reference for InputKeyItemVM."
---
# InputKeyItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Input
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class InputKeyItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Input/InputKeyItemVM.cs`

## Overview

`InputKeyItemVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.Input` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Input` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `GameKey` | `public GameKey GameKey { get; }` |
| `HotKey` | `public HotKey HotKey { get; }` |
| `KeyID` | `public string KeyID { get; set; }` |
| `KeyName` | `public string KeyName { get; set; }` |
| `IsVisible` | `public bool IsVisible { get; set; }` |

## Key Methods

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of InputKeyItemVM from the subsystem API first
InputKeyItemVM inputKeyItemVM = ...;
inputKeyItemVM.OnFinalize();
```

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of InputKeyItemVM from the subsystem API first
InputKeyItemVM inputKeyItemVM = ...;
inputKeyItemVM.RefreshValues();
```

### SetForcedVisibility
`public void SetForcedVisibility(bool? isVisible)`

**Purpose:** Assigns a new value to forced visibility and updates the object's internal state.

```csharp
// Obtain an instance of InputKeyItemVM from the subsystem API first
InputKeyItemVM inputKeyItemVM = ...;
inputKeyItemVM.SetForcedVisibility(false);
```

### CreateFromGameKey
`public static InputKeyItemVM CreateFromGameKey(GameKey gameKey, bool isConsoleOnly)`

**Purpose:** Constructs a new from game key entity and returns it to the caller.

```csharp
// Static call; no instance required
InputKeyItemVM.CreateFromGameKey(gameKey, false);
```

### CreateFromHotKey
`public static InputKeyItemVM CreateFromHotKey(HotKey hotKey, bool isConsoleOnly)`

**Purpose:** Constructs a new from hot key entity and returns it to the caller.

```csharp
// Static call; no instance required
InputKeyItemVM.CreateFromHotKey(hotKey, false);
```

### CreateFromHotKeyWithForcedName
`public static InputKeyItemVM CreateFromHotKeyWithForcedName(HotKey hotKey, TextObject forcedName, bool isConsoleOnly)`

**Purpose:** Constructs a new from hot key with forced name entity and returns it to the caller.

```csharp
// Static call; no instance required
InputKeyItemVM.CreateFromHotKeyWithForcedName(hotKey, forcedName, false);
```

### CreateFromGameKeyWithForcedName
`public static InputKeyItemVM CreateFromGameKeyWithForcedName(GameKey gameKey, TextObject forcedName, bool isConsoleOnly)`

**Purpose:** Constructs a new from game key with forced name entity and returns it to the caller.

```csharp
// Static call; no instance required
InputKeyItemVM.CreateFromGameKeyWithForcedName(gameKey, forcedName, false);
```

### CreateFromForcedID
`public static InputKeyItemVM CreateFromForcedID(string forcedID, TextObject forcedName, bool isConsoleOnly)`

**Purpose:** Constructs a new from forced i d entity and returns it to the caller.

```csharp
// Static call; no instance required
InputKeyItemVM.CreateFromForcedID("example", forcedName, false);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
InputKeyItemVM inputKeyItemVM = ...;
inputKeyItemVM.OnFinalize();
```

## See Also

- [Area Index](../)