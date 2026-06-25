---
title: "BannerTableauWidget"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BannerTableauWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
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

## 心智模型

把 `BannerTableauWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

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
var widget = new BannerTableauWidget(context);
```

## 参见

- [完整类目录](../catalog)