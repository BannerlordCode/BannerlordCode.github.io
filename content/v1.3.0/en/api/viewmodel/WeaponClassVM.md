---
title: "WeaponClassVM"
description: "Auto-generated class reference for WeaponClassVM."
---
# WeaponClassVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class WeaponClassVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/WeaponClassVM.cs`

## Overview

`WeaponClassVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `NewlyUnlockedPieceCount` | `public int NewlyUnlockedPieceCount { get; set; }` |
| `Template` | `public CraftingTemplate Template { get; }` |
| `HasNewlyUnlockedPieces` | `public bool HasNewlyUnlockedPieces { get; set; }` |
| `UnlockedPiecesLabelText` | `public string UnlockedPiecesLabelText { get; set; }` |
| `UnlockedPiecesCount` | `public int UnlockedPiecesCount { get; set; }` |
| `TemplateName` | `public string TemplateName { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `SelectionIndex` | `public int SelectionIndex { get; set; }` |
| `WeaponType` | `public string WeaponType { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** **Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of WeaponClassVM from the subsystem API first
WeaponClassVM weaponClassVM = ...;
weaponClassVM.RefreshValues();
```

### RegisterSelectedPiece
`public void RegisterSelectedPiece(CraftingPiece.PieceTypes type, string pieceID)`

**Purpose:** **Purpose:** Registers selected piece with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of WeaponClassVM from the subsystem API first
WeaponClassVM weaponClassVM = ...;
weaponClassVM.RegisterSelectedPiece(type, "example");
```

### GetSelectedPieceData
`public string GetSelectedPieceData(CraftingPiece.PieceTypes type)`

**Purpose:** **Purpose:** Reads and returns the selected piece data value held by the this instance.

```csharp
// Obtain an instance of WeaponClassVM from the subsystem API first
WeaponClassVM weaponClassVM = ...;
var result = weaponClassVM.GetSelectedPieceData(type);
```

### ExecuteSelect
`public void ExecuteSelect()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with select.

```csharp
// Obtain an instance of WeaponClassVM from the subsystem API first
WeaponClassVM weaponClassVM = ...;
weaponClassVM.ExecuteSelect();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
WeaponClassVM weaponClassVM = ...;
weaponClassVM.RefreshValues();
```

## See Also

- [Area Index](../)