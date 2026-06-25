---
title: "ItemVM"
description: "ItemVM 的自动生成类参考。"
---
# ItemVM

**Namespace:** TaleWorlds.Core.ViewModelCollection
**Module:** TaleWorlds.Core
**Type:** `public class ItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.Core.ViewModelCollection/TaleWorlds.Core.ViewModelCollection/ItemVM.cs`

## 概述

`ItemVM` 位于 `TaleWorlds.Core.ViewModelCollection`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Core.ViewModelCollection` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `TypeId` | `public int TypeId { get; }` |
| `Version` | `public int Version { get; set; }` |
| `ItemType` | `public EquipmentIndex ItemType { get; }` |
| `ImageIdentifier` | `public ItemImageIdentifierVM ImageIdentifier { get; set; }` |
| `StringId` | `public string StringId { get; set; }` |
| `ItemDescription` | `public string ItemDescription { get; set; }` |
| `IsFiltered` | `public bool IsFiltered { get; set; }` |
| `ItemCost` | `public int ItemCost { get; set; }` |
| `TypeName` | `public string TypeName { get; set; }` |
| `PreviewHint` | `public HintViewModel PreviewHint { get; set; }` |
| `EquipHint` | `public HintViewModel EquipHint { get; set; }` |
| `UnequipHint` | `public HintViewModel UnequipHint { get; set; }` |
| `SlaughterHint` | `public BasicTooltipViewModel SlaughterHint { get; set; }` |
| `DonateHint` | `public BasicTooltipViewModel DonateHint { get; set; }` |
| `BuyAndEquipHint` | `public BasicTooltipViewModel BuyAndEquipHint { get; set; }` |
| `SellHint` | `public BasicTooltipViewModel SellHint { get; set; }` |
| `BuyHint` | `public BasicTooltipViewModel BuyHint { get; set; }` |
| `LockHint` | `public HintViewModel LockHint { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 ItemVM 实例
ItemVM itemVM = ...;
itemVM.RefreshValues();
```

### ExecutePreviewItem
`public void ExecutePreviewItem()`

**用途 / Purpose:** 执行 preview item 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 ItemVM 实例
ItemVM itemVM = ...;
itemVM.ExecutePreviewItem();
```

### ExecuteUnequipItem
`public void ExecuteUnequipItem()`

**用途 / Purpose:** 执行 unequip item 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 ItemVM 实例
ItemVM itemVM = ...;
itemVM.ExecuteUnequipItem();
```

### ExecuteEquipItem
`public void ExecuteEquipItem()`

**用途 / Purpose:** 执行 equip item 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 ItemVM 实例
ItemVM itemVM = ...;
itemVM.ExecuteEquipItem();
```

### ReleaseStaticContent
`public static void ReleaseStaticContent()`

**用途 / Purpose:** 调用 ReleaseStaticContent 对应的操作。

```csharp
// 静态调用，不需要实例
ItemVM.ReleaseStaticContent();
```

### ExecuteRefreshTooltip
`public void ExecuteRefreshTooltip()`

**用途 / Purpose:** 执行 refresh tooltip 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 ItemVM 实例
ItemVM itemVM = ...;
itemVM.ExecuteRefreshTooltip();
```

### ExecuteCancelTooltip
`public void ExecuteCancelTooltip()`

**用途 / Purpose:** 执行 cancel tooltip 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 ItemVM 实例
ItemVM itemVM = ...;
itemVM.ExecuteCancelTooltip();
```

### ExecuteBuyItem
`public void ExecuteBuyItem()`

**用途 / Purpose:** 执行 buy item 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 ItemVM 实例
ItemVM itemVM = ...;
itemVM.ExecuteBuyItem();
```

### ExecuteSelectItem
`public void ExecuteSelectItem()`

**用途 / Purpose:** 执行 select item 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 ItemVM 实例
ItemVM itemVM = ...;
itemVM.ExecuteSelectItem();
```

### GetItemTypeWithItemObject
`public EquipmentIndex GetItemTypeWithItemObject()`

**用途 / Purpose:** 读取并返回当前对象中 item type with item object 的结果。

```csharp
// 先通过子系统 API 拿到 ItemVM 实例
ItemVM itemVM = ...;
var result = itemVM.GetItemTypeWithItemObject();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
ItemVM itemVM = ...;
itemVM.RefreshValues();
```

## 参见

- [本区域目录](../)