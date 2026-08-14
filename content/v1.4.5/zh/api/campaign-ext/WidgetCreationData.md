---
title: "WidgetCreationData"
description: "WidgetCreationData 的自动生成类参考。"
---
# WidgetCreationData

**Namespace:** TaleWorlds.GauntletUI.PrefabSystem
**Module:** TaleWorlds.GauntletUI
**Type:** `public class WidgetCreationData`
**Base:** 无
**File:** `TaleWorlds.GauntletUI.PrefabSystem/WidgetCreationData.cs`

## 概述

`WidgetCreationData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `WidgetCreationData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `Parent` | `public Widget Parent { get; }` |
| `Context` | `public UIContext Context { get; }` |
| `WidgetFactory` | `public WidgetFactory WidgetFactory { get; }` |
| `BrushFactory` | `public BrushFactory BrushFactory { get; }` |
| `SpriteData` | `public SpriteData SpriteData { get; }` |
| `PrefabExtensionContext` | `public PrefabExtensionContext PrefabExtensionContext { get; }` |

## 主要方法

### AddExtensionData
`public void AddExtensionData(string name, object data)`

**用途 / Purpose:** 将 extension data 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 WidgetCreationData 实例
WidgetCreationData widgetCreationData = ...;
widgetCreationData.AddExtensionData("example", data);
```

### AddExtensionData
`public void AddExtensionData(object data)`

**用途 / Purpose:** 将 extension data 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 WidgetCreationData 实例
WidgetCreationData widgetCreationData = ...;
widgetCreationData.AddExtensionData(data);
```

## 使用示例

```csharp
// 该数据对象通常由战役/任务 API 返回
WidgetCreationData entry = ...;
```

## 参见

- [本区域目录](../)