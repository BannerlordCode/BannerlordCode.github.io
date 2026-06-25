---
title: "WeaponClassVM"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `WeaponClassVM`
- [← 本领域 / 返回 viewmodel](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# WeaponClassVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class WeaponClassVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/WeaponClassVM.cs`

## 概述

`WeaponClassVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

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
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### RegisterSelectedPiece
`public void RegisterSelectedPiece(CraftingPiece.PieceTypes type, string pieceID)`

**用途 / Purpose:** 处理 `register selected piece` 相关逻辑。

### GetSelectedPieceData
`public string GetSelectedPieceData(CraftingPiece.PieceTypes type)`

**用途 / Purpose:** 获取 `selected piece data` 的当前值。

### ExecuteSelect
`public void ExecuteSelect()`

**用途 / Purpose:** 执行 `select` 操作或流程。

## 使用示例

```csharp
var value = new WeaponClassVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)