---
title: "UIResourceManager"
description: "UIResourceManager：TaleWorlds.Engine.GauntletUI 的 public 类；公开成员 12 个（方法 6、属性 6、字段 0）。canonical 桶 engine。源文件 TaleWorlds.Engine.GauntletUI/UIResourceManager.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# UIResourceManager

**Namespace:** `TaleWorlds.Engine.GauntletUI`
**Module:** `TaleWorlds.Engine.GauntletUI`
**Type:** `public static class UIResourceManager`
**File:** `TaleWorlds.Engine.GauntletUI/UIResourceManager.cs`
**Bucket:** `engine` (rule:TaleWorlds.Engine)

## 概述

UIResourceManager 位于 TaleWorlds.Engine.GauntletUI 模块，源文件 TaleWorlds.Engine.GauntletUI/UIResourceManager.cs。它是一个 public 类，继承链为 UIResourceManager。public/protected 成员共 12 个：6 方法、6 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：UIResourceManager 落在 canonical 桶 `engine`（命中规则 `rule:TaleWorlds.Engine`），命名空间 `TaleWorlds.Engine.GauntletUI`，继承链 UIResourceManager。成员构成以方法为主（方法 6/12，属性 6/12），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Engine.GauntletUI/UIResourceManager.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ResourceDepot` | `public static ResourceDepot ResourceDepot` | 属性 |
| `WidgetFactory` | `public static WidgetFactory WidgetFactory` | 属性 |
| `SpriteData` | `public static SpriteData SpriteData` | 属性 |
| `BrushFactory` | `public static BrushFactory BrushFactory` | 属性 |
| `FontFactory` | `public static FontFactory FontFactory` | 属性 |
| `ResourceContext` | `public static TwoDimensionEngineResourceContext ResourceContext` | 属性 |
| `Refresh` | `public static void Refresh()` | 方法 |
| `GetSpriteCategory` | `public static SpriteCategory GetSpriteCategory(string spriteCategoryName)` | 方法 |
| `LoadSpriteCategory` | `public static SpriteCategory LoadSpriteCategory(string spriteCategoryName)` | 方法 |
| `Update` | `public static void Update()` | 方法 |
| `OnLanguageChange` | `public static void OnLanguageChange(string newLanguageCode)` | 方法 |
| `Clear` | `public static void Clear()` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 EngineTexture](../EngineTexture/)
- [同命名空间 Extensions](../Extensions/)
- [同命名空间 GauntletMovieIdentifier](../GauntletMovieIdentifier/)
- [同命名空间 TwoDimensionEnginePlatform](../TwoDimensionEnginePlatform/)
