---
title: "WeaponClassVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `WeaponClassVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**Purpose:** Refreshes the display or cache of `values`.

### RegisterSelectedPiece
`public void RegisterSelectedPiece(CraftingPiece.PieceTypes type, string pieceID)`

**Purpose:** Handles logic related to `register selected piece`.

### GetSelectedPieceData
`public string GetSelectedPieceData(CraftingPiece.PieceTypes type)`

**Purpose:** Gets the current value of `selected piece data`.

### ExecuteSelect
`public void ExecuteSelect()`

**Purpose:** Executes the `select` operation or workflow.

## Usage Example

```csharp
var value = new WeaponClassVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)