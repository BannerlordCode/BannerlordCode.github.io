---
title: "TwoDimensionContext"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TwoDimensionContext`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**用途 / Purpose:** 处理 `play sound` 相关逻辑。

### CreateSoundEvent
`public void CreateSoundEvent(string soundName)`

**用途 / Purpose:** 创建一个 `sound event` 实例或对象。

### StopAndRemoveSoundEvent
`public void StopAndRemoveSoundEvent(string soundName)`

**用途 / Purpose:** 处理 `stop and remove sound event` 相关逻辑。

### PlaySoundEvent
`public void PlaySoundEvent(string soundName)`

**用途 / Purpose:** 处理 `play sound event` 相关逻辑。

### DrawImage
`public void DrawImage(SimpleMaterial material, in ImageDrawObject drawObject2D, int layer = 0)`

**用途 / Purpose:** 处理 `draw image` 相关逻辑。

### DrawText
`public void DrawText(TextMaterial material, in TextDrawObject drawObject2D, int layer = 0)`

**用途 / Purpose:** 处理 `draw text` 相关逻辑。

### BeginDebugPanel
`public void BeginDebugPanel(string panelTitle)`

**用途 / Purpose:** 处理 `begin debug panel` 相关逻辑。

### EndDebugPanel
`public void EndDebugPanel()`

**用途 / Purpose:** 处理 `end debug panel` 相关逻辑。

### DrawDebugText
`public void DrawDebugText(string text)`

**用途 / Purpose:** 处理 `draw debug text` 相关逻辑。

### DrawDebugTreeNode
`public bool DrawDebugTreeNode(string text)`

**用途 / Purpose:** 处理 `draw debug tree node` 相关逻辑。

### PopDebugTreeNode
`public void PopDebugTreeNode()`

**用途 / Purpose:** 处理 `pop debug tree node` 相关逻辑。

### DrawCheckbox
`public void DrawCheckbox(string label, ref bool isChecked)`

**用途 / Purpose:** 处理 `draw checkbox` 相关逻辑。

### IsDebugItemHovered
`public bool IsDebugItemHovered()`

**用途 / Purpose:** 处理 `is debug item hovered` 相关逻辑。

### LoadTexture
`public Texture LoadTexture(string name)`

**用途 / Purpose:** 加载 `texture` 数据。

### SetScissor
`public void SetScissor(ScissorTestInfo scissor)`

**用途 / Purpose:** 设置 `scissor` 的值或状态。

### ResetScissor
`public void ResetScissor()`

**用途 / Purpose:** 将 `scissor` 重置为初始状态。

## 使用示例

```csharp
var value = new TwoDimensionContext();
value.PlaySound("example");
```

## 参见

- [完整类目录](../catalog)