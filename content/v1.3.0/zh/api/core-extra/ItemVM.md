---
title: "ItemVM"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ItemVM`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# ItemVM

**Namespace:** TaleWorlds.Core.ViewModelCollection
**Module:** TaleWorlds.Core
**Type:** `public class ItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.Core.ViewModelCollection/ItemVM.cs`

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

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### ExecutePreviewItem
`public void ExecutePreviewItem()`

**用途 / Purpose:** 执行 `preview item` 操作或流程。

### ExecuteUnequipItem
`public void ExecuteUnequipItem()`

**用途 / Purpose:** 执行 `unequip item` 操作或流程。

### ExecuteEquipItem
`public void ExecuteEquipItem()`

**用途 / Purpose:** 执行 `equip item` 操作或流程。

### ReleaseStaticContent
`public static void ReleaseStaticContent()`

**用途 / Purpose:** 处理 `release static content` 相关逻辑。

### ExecuteRefreshTooltip
`public void ExecuteRefreshTooltip()`

**用途 / Purpose:** 执行 `refresh tooltip` 操作或流程。

### ExecuteCancelTooltip
`public void ExecuteCancelTooltip()`

**用途 / Purpose:** 执行 `cancel tooltip` 操作或流程。

### ExecuteBuyItem
`public void ExecuteBuyItem()`

**用途 / Purpose:** 执行 `buy item` 操作或流程。

### ExecuteSelectItem
`public void ExecuteSelectItem()`

**用途 / Purpose:** 执行 `select item` 操作或流程。

### GetItemTypeWithItemObject
`public EquipmentIndex GetItemTypeWithItemObject()`

**用途 / Purpose:** 获取 `item type with item object` 的当前值。

## 使用示例

```csharp
var value = new ItemVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)