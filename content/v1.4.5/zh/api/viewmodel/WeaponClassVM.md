---
title: "WeaponClassVM"
description: "WeaponClassVM 的自动生成类参考。"
---
# WeaponClassVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class WeaponClassVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign/WeaponClassVM.cs`

## 概述

`WeaponClassVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `NewlyUnlockedPieceCount` | `public int NewlyUnlockedPieceCount { get; set; }` |
| `Template` | `public CraftingTemplate Template { get; set; }` |
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

**用途 / Purpose:** 使 「values」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 WeaponClassVM 实例
WeaponClassVM weaponClassVM = ...;
weaponClassVM.RefreshValues();
```

### RegisterSelectedPiece
`public void RegisterSelectedPiece(CraftingPiece.PieceTypes type, string pieceID)`

**用途 / Purpose:** 将「selected piece」注册到当前系统，以便后续监听或分发。

```csharp
// 先通过子系统 API 拿到 WeaponClassVM 实例
WeaponClassVM weaponClassVM = ...;
weaponClassVM.RegisterSelectedPiece(type, "example");
```

### GetSelectedPieceData
`public string GetSelectedPieceData(CraftingPiece.PieceTypes type)`

**用途 / Purpose:** 读取并返回当前对象中 「selected piece data」 的结果。

```csharp
// 先通过子系统 API 拿到 WeaponClassVM 实例
WeaponClassVM weaponClassVM = ...;
var result = weaponClassVM.GetSelectedPieceData(type);
```

### ExecuteSelect
`public void ExecuteSelect()`

**用途 / Purpose:** 执行 「select」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 WeaponClassVM 实例
WeaponClassVM weaponClassVM = ...;
weaponClassVM.ExecuteSelect();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
WeaponClassVM weaponClassVM = ...;
weaponClassVM.RefreshValues();
```

## 参见

- [本区域目录](../)