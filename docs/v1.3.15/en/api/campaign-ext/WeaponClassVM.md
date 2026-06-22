<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `WeaponClassVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# WeaponClassVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `WeaponClassVM` is a class in the `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


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

```csharp
public override void RefreshValues()
```

### RegisterSelectedPiece

```csharp
public void RegisterSelectedPiece(CraftingPiece.PieceTypes type, string pieceID)
```

### GetSelectedPieceData

```csharp
public string GetSelectedPieceData(CraftingPiece.PieceTypes type)
```

### ExecuteSelect

```csharp
public void ExecuteSelect()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)