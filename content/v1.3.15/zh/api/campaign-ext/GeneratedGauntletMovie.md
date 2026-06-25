---
title: "GeneratedGauntletMovie"
description: "GeneratedGauntletMovie 的自动生成类参考。"
---
# GeneratedGauntletMovie

**Namespace:** TaleWorlds.GauntletUI.Data
**Module:** TaleWorlds.GauntletUI
**Type:** `public class GeneratedGauntletMovie : IGauntletMovie`
**Base:** `IGauntletMovie`
**File:** `TaleWorlds.GauntletUI.Data/GeneratedGauntletMovie.cs`

## 概述

`GeneratedGauntletMovie` 位于 `TaleWorlds.GauntletUI.Data`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.GauntletUI.Data` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Context` | `public UIContext Context { get; }` |
| `RootWidget` | `public Widget RootWidget { get; }` |
| `MovieName` | `public string MovieName { get; }` |
| `IsLoaded` | `public bool IsLoaded { get; }` |
| `IsReleased` | `public bool IsReleased { get; }` |

## 主要方法

### Update
`public void Update()`

**用途 / Purpose:** 重新计算并更新当前对象的最新表示。

```csharp
// 先通过子系统 API 拿到 GeneratedGauntletMovie 实例
GeneratedGauntletMovie generatedGauntletMovie = ...;
generatedGauntletMovie.Update();
```

### Release
`public void Release()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 GeneratedGauntletMovie 实例
GeneratedGauntletMovie generatedGauntletMovie = ...;
generatedGauntletMovie.Release();
```

### RefreshBindingWithChildren
`public void RefreshBindingWithChildren()`

**用途 / Purpose:** 使 「binding with children」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 GeneratedGauntletMovie 实例
GeneratedGauntletMovie generatedGauntletMovie = ...;
generatedGauntletMovie.RefreshBindingWithChildren();
```

### OnResourcesRefreshed
`public void OnResourcesRefreshed(SpriteData spriteData, WidgetFactory widgetFactory, BrushFactory brushFactory, FontFactory fontFactory)`

**用途 / Purpose:** 在 「resources refreshed」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 GeneratedGauntletMovie 实例
GeneratedGauntletMovie generatedGauntletMovie = ...;
generatedGauntletMovie.OnResourcesRefreshed(spriteData, widgetFactory, brushFactory, fontFactory);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
GeneratedGauntletMovie generatedGauntletMovie = ...;
generatedGauntletMovie.Update();
```

## 参见

- [本区域目录](../)