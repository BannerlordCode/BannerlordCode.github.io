<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MPLobbyCosmeticSigilItemVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MPLobbyCosmeticSigilItemVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyCosmeticSigilItemVM : MPLobbySigilItemVM`
**Base:** `MPLobbySigilItemVM`
**Area:** mission-ext

## Overview

`MPLobbyCosmeticSigilItemVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsUnlocked` | `public bool IsUnlocked { get; set; }` |
| `IsUsed` | `public bool IsUsed { get; set; }` |
| `Rarity` | `public int Rarity { get; set; }` |
| `Cost` | `public int Cost { get; set; }` |

## Key Methods

### SetOnSelectionCallback
`public static void SetOnSelectionCallback(Action<MPLobbyCosmeticSigilItemVM> onSelection)`

**Purpose:** Sets the value or state of `on selection callback`.

### ResetOnSelectionCallback
`public static void ResetOnSelectionCallback()`

**Purpose:** Resets `on selection callback` to its initial state.

### SetOnObtainRequestedCallback
`public static void SetOnObtainRequestedCallback(Action<MPLobbyCosmeticSigilItemVM> onObtainRequested)`

**Purpose:** Sets the value or state of `on obtain requested callback`.

### ResetOnObtainRequestedCallback
`public static void ResetOnObtainRequestedCallback()`

**Purpose:** Resets `on obtain requested callback` to its initial state.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
MPLobbyCosmeticSigilItemVM.SetOnSelectionCallback(onSelection);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
