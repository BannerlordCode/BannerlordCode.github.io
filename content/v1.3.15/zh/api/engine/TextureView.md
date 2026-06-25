---
title: "TextureView"
description: "TextureView 的自动生成类参考。"
---
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

**用途 / Purpose:** 构建一个新的 texture view 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
TextureView.CreateTextureView();
```

### SetTexture
`public void SetTexture(Texture texture)`

**用途 / Purpose:** 为 texture 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 TextureView 实例
TextureView textureView = ...;
textureView.SetTexture(texture);
```

## 使用示例

```csharp
// 从子系统 API 或场景中获取该视图
TextureView view = ...;
```

## 参见

- [本区域目录](../)