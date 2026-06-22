<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `WeaponClassVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# WeaponClassVM

**命名空间:** TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`WeaponClassVM` 是 `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

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


## 主要方法

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

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)