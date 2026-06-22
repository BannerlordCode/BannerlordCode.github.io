<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `InventoryItemValueTextWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# InventoryItemValueTextWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Inventory
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class InventoryItemValueTextWidget : TextWidget`
**Base:** `TextWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Inventory/InventoryItemValueTextWidget.cs`

## 概述

`InventoryItemValueTextWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `ProfitType` | `public int ProfitType { get; set; }` |

## 使用示例

```csharp
// InventoryItemValueTextWidget (Widget) 的典型用法
// 声明/访问一个 InventoryItemValueTextWidget
var widget = root.GetChild("inventoryItemValueTextWidget");;
```

## 参见

- [完整类目录](../catalog)