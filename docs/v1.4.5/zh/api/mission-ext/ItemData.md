<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ItemData`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# ItemData

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ItemData`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.Diamond/TaleWorlds.MountAndBlade.Diamond/ItemData.cs`

## 概述

`ItemData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `ItemData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `TypeId` | `public string TypeId { get; set; }` |
| `ModifierId` | `public string ModifierId { get; set; }` |
| `Index` | `public int? Index { get; set; }` |

## 主要方法

### CopyItemData
`public void CopyItemData(ItemData itemdata)`

**用途 / Purpose:** 处理 `copy item data` 相关逻辑。

### CanItemToEquipmentDragPossible
`public bool CanItemToEquipmentDragPossible(int equipmentIndex)`

**用途 / Purpose:** 判断当前对象是否可以执行 `item to equipment drag possible`。

### CanItemToEquipmentDragPossible
`public static bool CanItemToEquipmentDragPossible(string itemTypeId, int equipmentIndex)`

**用途 / Purpose:** 判断当前对象是否可以执行 `item to equipment drag possible`。

### GetPriceOf
`public static int GetPriceOf(string itemId, string modifierId)`

**用途 / Purpose:** 获取 `price of` 的当前值。

### IsItemValid
`public static bool IsItemValid(string itemId, string modifierId)`

**用途 / Purpose:** 处理 `is item valid` 相关逻辑。

## 使用示例

```csharp
var value = new ItemData();
```

## 参见

- [完整类目录](../catalog)