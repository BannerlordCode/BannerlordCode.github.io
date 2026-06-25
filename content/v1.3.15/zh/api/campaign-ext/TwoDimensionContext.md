---
title: "TwoDimensionContext"
description: "TwoDimensionContext 的自动生成类参考。"
---
# TwoDimensionContext

**Namespace:** TaleWorlds.TwoDimension
**Module:** TaleWorlds.TwoDimension
**Type:** `public class TwoDimensionContext`
**Base:** 无
**File:** `TaleWorlds.TwoDimension/TwoDimensionContext.cs`

## 概述

`TwoDimensionContext` 位于 `TaleWorlds.TwoDimension`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.TwoDimension` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Width` | `public float Width { get; }` |
| `Height` | `public float Height { get; }` |
| `Platform` | `public ITwoDimensionPlatform Platform { get; }` |
| `ResourceContext` | `public ITwoDimensionResourceContext ResourceContext { get; }` |
| `ResourceDepot` | `public ResourceDepot ResourceDepot { get; }` |
| `IsDebugModeEnabled` | `public bool IsDebugModeEnabled { get; }` |

## 主要方法

### PlaySound
`public void PlaySound(string soundName)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 TwoDimensionContext 实例
TwoDimensionContext twoDimensionContext = ...;
twoDimensionContext.PlaySound("example");
```

### CreateSoundEvent
`public void CreateSoundEvent(string soundName)`

**用途 / Purpose:** 构建一个新的 「sound event」 实体并返回给调用方。

```csharp
// 先通过子系统 API 拿到 TwoDimensionContext 实例
TwoDimensionContext twoDimensionContext = ...;
twoDimensionContext.CreateSoundEvent("example");
```

### StopAndRemoveSoundEvent
`public void StopAndRemoveSoundEvent(string soundName)`

**用途 / Purpose:** 停止「and remove sound event」流程或状态机。

```csharp
// 先通过子系统 API 拿到 TwoDimensionContext 实例
TwoDimensionContext twoDimensionContext = ...;
twoDimensionContext.StopAndRemoveSoundEvent("example");
```

### PlaySoundEvent
`public void PlaySoundEvent(string soundName)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 TwoDimensionContext 实例
TwoDimensionContext twoDimensionContext = ...;
twoDimensionContext.PlaySoundEvent("example");
```

### DrawImage
`public void DrawImage(SimpleMaterial material, in ImageDrawObject drawObject2D, int layer = 0)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 TwoDimensionContext 实例
TwoDimensionContext twoDimensionContext = ...;
twoDimensionContext.DrawImage(material, drawObject2D, 0);
```

### DrawText
`public void DrawText(TextMaterial material, in TextDrawObject drawObject2D, int layer = 0)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 TwoDimensionContext 实例
TwoDimensionContext twoDimensionContext = ...;
twoDimensionContext.DrawText(material, drawObject2D, 0);
```

### BeginDebugPanel
`public void BeginDebugPanel(string panelTitle)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 TwoDimensionContext 实例
TwoDimensionContext twoDimensionContext = ...;
twoDimensionContext.BeginDebugPanel("example");
```

### EndDebugPanel
`public void EndDebugPanel()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 TwoDimensionContext 实例
TwoDimensionContext twoDimensionContext = ...;
twoDimensionContext.EndDebugPanel();
```

### DrawDebugText
`public void DrawDebugText(string text)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 TwoDimensionContext 实例
TwoDimensionContext twoDimensionContext = ...;
twoDimensionContext.DrawDebugText("example");
```

### DrawDebugTreeNode
`public bool DrawDebugTreeNode(string text)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 TwoDimensionContext 实例
TwoDimensionContext twoDimensionContext = ...;
var result = twoDimensionContext.DrawDebugTreeNode("example");
```

### PopDebugTreeNode
`public void PopDebugTreeNode()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 TwoDimensionContext 实例
TwoDimensionContext twoDimensionContext = ...;
twoDimensionContext.PopDebugTreeNode();
```

### DrawCheckbox
`public void DrawCheckbox(string label, ref bool isChecked)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 TwoDimensionContext 实例
TwoDimensionContext twoDimensionContext = ...;
twoDimensionContext.DrawCheckbox("example", isChecked);
```

### IsDebugItemHovered
`public bool IsDebugItemHovered()`

**用途 / Purpose:** 判断当前对象是否处于 「debug item hovered」 状态或条件。

```csharp
// 先通过子系统 API 拿到 TwoDimensionContext 实例
TwoDimensionContext twoDimensionContext = ...;
var result = twoDimensionContext.IsDebugItemHovered();
```

### LoadTexture
`public Texture LoadTexture(string name)`

**用途 / Purpose:** 从持久化存储或流中读取 「texture」。

```csharp
// 先通过子系统 API 拿到 TwoDimensionContext 实例
TwoDimensionContext twoDimensionContext = ...;
var result = twoDimensionContext.LoadTexture("example");
```

### SetScissor
`public void SetScissor(ScissorTestInfo scissor)`

**用途 / Purpose:** 为 「scissor」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 TwoDimensionContext 实例
TwoDimensionContext twoDimensionContext = ...;
twoDimensionContext.SetScissor(scissor);
```

### ResetScissor
`public void ResetScissor()`

**用途 / Purpose:** 将 「scissor」 重置回默认或初始状态。

```csharp
// 先通过子系统 API 拿到 TwoDimensionContext 实例
TwoDimensionContext twoDimensionContext = ...;
twoDimensionContext.ResetScissor();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
TwoDimensionContext twoDimensionContext = ...;
twoDimensionContext.PlaySound("example");
```

## 参见

- [本区域目录](../)