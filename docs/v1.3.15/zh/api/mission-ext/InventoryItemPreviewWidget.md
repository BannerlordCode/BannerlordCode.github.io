<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `InventoryItemPreviewWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# InventoryItemPreviewWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Inventory
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class InventoryItemPreviewWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Inventory/InventoryItemPreviewWidget.cs`

## 概述

`InventoryItemPreviewWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsPreviewOpen` | `public bool IsPreviewOpen { get; set; }` |
| `ItemTableau` | `public ItemTableauWidget ItemTableau { get; set; }` |

## 使用示例

```csharp
// InventoryItemPreviewWidget (Widget) 的典型用法
// 声明/访问一个 InventoryItemPreviewWidget
var widget = root.GetChild("inventoryItemPreviewWidget");;
```

## 参见

- [完整类目录](../catalog)