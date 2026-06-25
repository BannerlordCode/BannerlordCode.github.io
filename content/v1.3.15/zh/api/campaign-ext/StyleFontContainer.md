---
title: "StyleFontContainer"
description: "StyleFontContainer 的自动生成类参考。"
---
# StyleFontContainer

**Namespace:** TaleWorlds.TwoDimension
**Module:** TaleWorlds.TwoDimension
**Type:** `public class StyleFontContainer`
**Base:** 无
**File:** `TaleWorlds.TwoDimension/StyleFontContainer.cs`

## 概述

`StyleFontContainer` 位于 `TaleWorlds.TwoDimension`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.TwoDimension` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### Add
`public void Add(string style, Font font, float fontSize)`

**用途 / Purpose:** 向当前容器或状态添加项。

```csharp
// 先通过子系统 API 拿到 StyleFontContainer 实例
StyleFontContainer styleFontContainer = ...;
styleFontContainer.Add("example", font, 0);
```

### GetFontData
`public StyleFontContainer.FontData GetFontData(string style)`

**用途 / Purpose:** 读取并返回当前对象中 font data 的结果。

```csharp
// 先通过子系统 API 拿到 StyleFontContainer 实例
StyleFontContainer styleFontContainer = ...;
var result = styleFontContainer.GetFontData("example");
```

### ClearFonts
`public void ClearFonts()`

**用途 / Purpose:** 清空当前对象中的fonts。

```csharp
// 先通过子系统 API 拿到 StyleFontContainer 实例
StyleFontContainer styleFontContainer = ...;
styleFontContainer.ClearFonts();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
StyleFontContainer styleFontContainer = ...;
styleFontContainer.Add("example", font, 0);
```

## 参见

- [本区域目录](../)