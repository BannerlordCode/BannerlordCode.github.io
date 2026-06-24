<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MPArmoryCosmeticItemBaseVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MPArmoryCosmeticItemBaseVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Armory.CosmeticItem
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MPArmoryCosmeticItemBaseVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Armory.CosmeticItem/MPArmoryCosmeticItemBaseVM.cs`

## Overview

`MPArmoryCosmeticItemBaseVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Armory.CosmeticItem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Armory.CosmeticItem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `UnequipText` | `public string UnequipText { get; }` |
| `CosmeticType` | `public CosmeticType CosmeticType { get; set; }` |
| `IsUnlocked` | `public bool IsUnlocked { get; set; }` |
| `IsUsed` | `public bool IsUsed { get; set; }` |
| `AreActionsEnabled` | `public bool AreActionsEnabled { get; set; }` |
| `IsSelectable` | `public bool IsSelectable { get; set; }` |
| `IsUnequippable` | `public bool IsUnequippable { get; set; }` |
| `Cost` | `public int Cost { get; set; }` |
| `Rarity` | `public int Rarity { get; set; }` |
| `ItemType` | `public int ItemType { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `OwnedText` | `public string OwnedText { get; set; }` |
| `ActionText` | `public string ActionText { get; set; }` |
| `PreviewText` | `public string PreviewText { get; set; }` |
| `Icon` | `public ItemImageIdentifierVM Icon { get; set; }` |
| `ActionKey` | `public InputKeyItemVM ActionKey { get; set; }` |
| `PreviewKey` | `public InputKeyItemVM PreviewKey { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

### ExecuteAction
`public void ExecuteAction()`

**Purpose:** Executes the `action` operation or workflow.

### ExecutePreview
`public void ExecutePreview()`

**Purpose:** Executes the `preview` operation or workflow.

### ExecuteEnableActions
`public void ExecuteEnableActions()`

**Purpose:** Executes the `enable actions` operation or workflow.

### ExecuteDisableActions
`public void ExecuteDisableActions()`

**Purpose:** Executes the `disable actions` operation or workflow.

### RefreshKeyBindings
`public void RefreshKeyBindings(HotKey actionKey, HotKey previewKey)`

**Purpose:** Refreshes the display or cache of `key bindings`.

## Usage Example

```csharp
var implementation = new CustomMPArmoryCosmeticItemBaseVM();
```

## See Also

- [Complete Class Catalog](../catalog)