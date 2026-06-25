---
title: "ImageIdentifierWidget"
description: "ImageIdentifierWidget 的自动生成类参考。"
---
# ImageIdentifierWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ImageIdentifierWidget : TextureWidget`
**Base:** `TextureWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/ImageIdentifierWidget.cs`

## 概述

`ImageIdentifierWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `ImageIdentifierWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `ImageId` | `public string ImageId { get; set; }` |
| `AdditionalArgs` | `public string AdditionalArgs { get; set; }` |
| `IsBig` | `public bool IsBig { get; set; }` |
| `HideWhenNull` | `public bool HideWhenNull { get; set; }` |

## 主要方法

### OnClearTextureProvider
`public override void OnClearTextureProvider()`

**用途 / Purpose:** 在 clear texture provider 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 ImageIdentifierWidget 实例
ImageIdentifierWidget imageIdentifierWidget = ...;
imageIdentifierWidget.OnClearTextureProvider();
```

## 使用示例

```csharp
// 在 Gauntlet 控件树或 Movie 中获取该控件实例
ImageIdentifierWidget widget = ...;
```

## 参见

- [本区域目录](../)