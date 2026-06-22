<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `InventoryEquippedItemControlsBrushWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# InventoryEquippedItemControlsBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Inventory
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class InventoryEquippedItemControlsBrushWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Inventory/InventoryEquippedItemControlsBrushWidget.cs`

## 概述

`InventoryEquippedItemControlsBrushWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `ForcedScopeCollection` | `public NavigationForcedScopeCollectionTargeter ForcedScopeCollection { get; set; }` |
| `NavigationScope` | `public NavigationScopeTargeter NavigationScope { get; set; }` |
| `ItemWidget` | `public InventoryItemButtonWidget ItemWidget { get; set; }` |

## 主要方法

### ShowPanel
```csharp
public void ShowPanel()
```

### HidePanel
```csharp
public void HidePanel()
```

### ButtonClickEventHandler
```csharp
public delegate void ButtonClickEventHandler(Widget itemWidget)
```

## 使用示例

```csharp
// InventoryEquippedItemControlsBrushWidget (Widget) 的典型用法
// 声明/访问一个 InventoryEquippedItemControlsBrushWidget
var widget = root.GetChild("inventoryEquippedItemControlsBrushWidget");;
```

## 参见

- [完整类目录](../catalog)