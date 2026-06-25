---
title: "TextureView"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TextureView`
- [← 本领域 / 返回 engine](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# TextureView

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class TextureView : View`
**Base:** `View`
**File:** `TaleWorlds.Engine/TextureView.cs`

## 概述

`TextureView` 表示一个视图层对象，通常负责把游戏状态投影到屏幕、场景或可交互界面。

## 心智模型

把 `TextureView` 当作一个 View 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### CreateTextureView
`public static TextureView CreateTextureView()`

**用途 / Purpose:** 创建一个 `texture view` 实例或对象。

### SetTexture
`public void SetTexture(Texture texture)`

**用途 / Purpose:** 设置 `texture` 的值或状态。

## 使用示例

```csharp
var view = new TextureView();
```

## 参见

- [完整类目录](../catalog)