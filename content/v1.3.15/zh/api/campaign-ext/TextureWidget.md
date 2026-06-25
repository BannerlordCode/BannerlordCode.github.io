---
title: "TextureWidget"
description: "TextureWidget 的自动生成类参考。"
---
# TextureWidget

**Namespace:** TaleWorlds.GauntletUI.BaseTypes
**Module:** TaleWorlds.GauntletUI
**Type:** `public class TextureWidget : ImageWidget`
**Base:** `ImageWidget`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/TextureWidget.cs`

## 概述

`TextureWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `TextureWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `LoadingIconWidget` | `public Widget LoadingIconWidget { get; }` |
| `TextureProvider` | `public TextureProvider TextureProvider { get; }` |
| `SetForClearNextFrame` | `public bool SetForClearNextFrame { get; set; }` |
| `TextureProviderName` | `public string TextureProviderName { get; set; }` |
| `Texture` | `public Texture Texture { get; set; }` |

## 主要方法

### OnClearTextureProvider
`public virtual void OnClearTextureProvider()`

**用途 / Purpose:** 在 clear texture provider 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 TextureWidget 实例
TextureWidget textureWidget = ...;
textureWidget.OnClearTextureProvider();
```

## 使用示例

```csharp
// 在 Gauntlet 控件树或 Movie 中获取该控件实例
TextureWidget widget = ...;
```

## 参见

- [本区域目录](../)