---
title: "GamepadOptionKeyItemVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GamepadOptionKeyItemVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GamepadOptionKeyItemVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions.GamepadOptions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GamepadOptionKeyItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/GamepadOptions/GamepadOptionKeyItemVM.cs`

## Overview

`GamepadOptionKeyItemVM` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions.GamepadOptions` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions.GamepadOptions` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `GamepadKey` | `public GameKey GamepadKey { get; }` |
| `GamepadHotKey` | `public HotKey GamepadHotKey { get; }` |
| `Key` | `public InputKey? Key { get; }` |
| `Action` | `public string Action { get; set; }` |
| `KeyId` | `public int KeyId { get; set; }` |
| `KeyIdAsString` | `public string KeyIdAsString { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

## Usage Example

```csharp
var value = new GamepadOptionKeyItemVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)