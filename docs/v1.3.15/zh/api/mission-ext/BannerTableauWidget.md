<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BannerTableauWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BannerTableauWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BannerTableauWidget : TextureWidget`
**Base:** `TextureWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/BannerTableauWidget.cs`

## 概述

`BannerTableauWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `BannerCodeText` | `public string BannerCodeText { get; set; }` |
| `CustomRenderScale` | `public float CustomRenderScale { get; set; }` |
| `IsNineGrid` | `public bool IsNineGrid { get; set; }` |
| `UpdatePositionValueManual` | `public Vec2 UpdatePositionValueManual { get; set; }` |
| `UpdateSizeValueManual` | `public Vec2 UpdateSizeValueManual { get; set; }` |
| `UpdateRotationValueManualWithMirror` | `public ValueTuple<float, bool> UpdateRotationValueManualWithMirror { get; set; }` |
| `MeshIndexToUpdate` | `public int MeshIndexToUpdate { get; set; }` |

## 使用示例

```csharp
// BannerTableauWidget (Widget) 的典型用法
// 声明/访问一个 BannerTableauWidget
var widget = root.GetChild("bannerTableauWidget");;
```

## 参见

- [完整类目录](../catalog)