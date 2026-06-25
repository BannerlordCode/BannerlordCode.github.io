---
title: "WidgetInfo"
description: "WidgetInfo 的自动生成类参考。"
---
# WidgetInfo

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `public class WidgetInfo`
**Base:** 无
**File:** `bin/TaleWorlds.GauntletUI/TaleWorlds.GauntletUI/WidgetInfo.cs`

## 概述

`WidgetInfo` 位于 `TaleWorlds.GauntletUI`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.GauntletUI` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Name` | `public string Name { get; }` |
| `Type` | `public Type Type { get; }` |
| `GotCustomUpdate` | `public bool GotCustomUpdate { get; }` |
| `GotCustomLateUpdate` | `public bool GotCustomLateUpdate { get; }` |
| `GotCustomParallelUpdate` | `public bool GotCustomParallelUpdate { get; }` |
| `GotUpdateBrushes` | `public bool GotUpdateBrushes { get; }` |

## 主要方法

### Refresh
`public static void Refresh()`

**用途 / Purpose:** 刷新当前对象的显示或缓存，使其与底层状态保持一致。

```csharp
// 静态调用，不需要实例
WidgetInfo.Refresh();
```

### GetWidgetInfo
`public static WidgetInfo GetWidgetInfo(Type type)`

**用途 / Purpose:** 读取并返回当前对象中 「widget info」 的结果。

```csharp
// 静态调用，不需要实例
WidgetInfo.GetWidgetInfo(type);
```

### GetWidgetInfos
`public static WidgetInfo GetWidgetInfos()`

**用途 / Purpose:** 读取并返回当前对象中 「widget infos」 的结果。

```csharp
// 静态调用，不需要实例
WidgetInfo.GetWidgetInfos();
```

## 使用示例

```csharp
WidgetInfo.Refresh();
```

## 参见

- [本区域目录](../)