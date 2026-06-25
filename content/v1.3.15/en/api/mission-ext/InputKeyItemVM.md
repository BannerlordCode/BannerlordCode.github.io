---
title: "InputKeyItemVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `InputKeyItemVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# InputKeyItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Input
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class InputKeyItemVM : ViewModel`
**Base:** `ViewModel`
**Area:** mission-ext

## Overview

`InputKeyItemVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.Input`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

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

**Purpose:** Called when the `finalize` event is raised.

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### SetForcedVisibility
`public void SetForcedVisibility(bool? isVisible)`

**Purpose:** Sets the value or state of `forced visibility`.

### CreateFromGameKey
`public static InputKeyItemVM CreateFromGameKey(GameKey gameKey, bool isConsoleOnly)`

**Purpose:** Creates a new `from game key` instance or object.

### CreateFromHotKey
`public static InputKeyItemVM CreateFromHotKey(HotKey hotKey, bool isConsoleOnly)`

**Purpose:** Creates a new `from hot key` instance or object.

### CreateFromHotKeyWithForcedName
`public static InputKeyItemVM CreateFromHotKeyWithForcedName(HotKey hotKey, TextObject forcedName, bool isConsoleOnly)`

**Purpose:** Creates a new `from hot key with forced name` instance or object.

### CreateFromGameKeyWithForcedName
`public static InputKeyItemVM CreateFromGameKeyWithForcedName(GameKey gameKey, TextObject forcedName, bool isConsoleOnly)`

**Purpose:** Creates a new `from game key with forced name` instance or object.

### CreateFromForcedID
`public static InputKeyItemVM CreateFromForcedID(string forcedID, TextObject forcedName, bool isConsoleOnly)`

**Purpose:** Creates a new `from forced i d` instance or object.

## Usage Example

```csharp
// First obtain a InputKeyItemVM instance from game state, then call one of its public methods
var value = new InputKeyItemVM();
value.OnFinalize();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
