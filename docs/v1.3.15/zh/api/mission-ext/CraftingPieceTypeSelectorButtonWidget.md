<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CraftingPieceTypeSelectorButtonWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CraftingPieceTypeSelectorButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Crafting
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CraftingPieceTypeSelectorButtonWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Crafting/CraftingPieceTypeSelectorButtonWidget.cs`

## 概述

`CraftingPieceTypeSelectorButtonWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `VisualsWidget` | `public Widget VisualsWidget { get; set; }` |

## 主要方法

### SetState
```csharp
public override void SetState(string stateName)
```

## 使用示例

```csharp
// CraftingPieceTypeSelectorButtonWidget (Widget) 的典型用法
// 声明/访问一个 CraftingPieceTypeSelectorButtonWidget
var widget = root.GetChild("craftingPieceTypeSelectorButtonWidget");;
```

## 参见

- [完整类目录](../catalog)