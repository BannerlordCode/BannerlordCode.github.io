---
title: "UIResourceManager"
description: "UIResourceManager 的自动生成类参考。"
---
# UIResourceManager

**Namespace:** TaleWorlds.Engine.GauntletUI
**Module:** TaleWorlds.Engine
**Type:** `public static class UIResourceManager`
**Base:** 无
**File:** `bin/TaleWorlds.Engine.GauntletUI/TaleWorlds.Engine.GauntletUI/UIResourceManager.cs`

## 概述

`UIResourceManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `UIResourceManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `ResourceDepot` | `public static ResourceDepot ResourceDepot { get; }` |
| `WidgetFactory` | `public static WidgetFactory WidgetFactory { get; }` |
| `SpriteData` | `public static SpriteData SpriteData { get; }` |
| `BrushFactory` | `public static BrushFactory BrushFactory { get; }` |
| `FontFactory` | `public static FontFactory FontFactory { get; }` |
| `ResourceContext` | `public static TwoDimensionEngineResourceContext ResourceContext { get; }` |

## 主要方法

### Refresh
`public static void Refresh()`

**用途 / Purpose:** 刷新当前对象的显示或缓存，使其与底层状态保持一致。

```csharp
// 静态调用，不需要实例
UIResourceManager.Refresh();
```

### GetSpriteCategory
`public static SpriteCategory GetSpriteCategory(string spriteCategoryName)`

**用途 / Purpose:** 读取并返回当前对象中 「sprite category」 的结果。

```csharp
// 静态调用，不需要实例
UIResourceManager.GetSpriteCategory("example");
```

### LoadSpriteCategory
`public static SpriteCategory LoadSpriteCategory(string spriteCategoryName)`

**用途 / Purpose:** 从持久化存储或流中读取 「sprite category」。

```csharp
// 静态调用，不需要实例
UIResourceManager.LoadSpriteCategory("example");
```

### Update
`public static void Update()`

**用途 / Purpose:** 重新计算并更新当前对象的最新表示。

```csharp
// 静态调用，不需要实例
UIResourceManager.Update();
```

### OnLanguageChange
`public static void OnLanguageChange(string newLanguageCode)`

**用途 / Purpose:** 在 「language change」 事件触发时调用此回调。

```csharp
// 静态调用，不需要实例
UIResourceManager.OnLanguageChange("example");
```

### Clear
`public static void Clear()`

**用途 / Purpose:** 清空当前对象中的内容。

```csharp
// 静态调用，不需要实例
UIResourceManager.Clear();
```

## 使用示例

```csharp
var manager = UIResourceManager.Current;
```

## 参见

- [本区域目录](../)