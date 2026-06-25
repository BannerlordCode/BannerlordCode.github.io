---
title: "BrushState"
description: "BrushState 的自动生成类参考。"
---
# BrushState

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `public struct BrushState : IBrushAnimationState, IDataSource`
**Base:** `IBrushAnimationState`
**File:** `bin/TaleWorlds.GauntletUI/TaleWorlds.GauntletUI/BrushState.cs`

## 概述

`BrushState` 位于 `TaleWorlds.GauntletUI`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.GauntletUI` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### FillFrom
`public void FillFrom(Style style)`

**用途 / Purpose:** 处理与 「fill from」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 BrushState 实例
BrushState brushState = ...;
brushState.FillFrom(style);
```

### LerpFrom
`public void LerpFrom(BrushState start, Style end, float ratio)`

**用途 / Purpose:** 处理与 「lerp from」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 BrushState 实例
BrushState brushState = ...;
brushState.LerpFrom(start, end, 0);
```

### GetValueAsFloat
`public float GetValueAsFloat(BrushAnimationProperty.BrushAnimationPropertyType propertyType)`

**用途 / Purpose:** 读取并返回当前对象中 「value as float」 的结果。

```csharp
// 先通过子系统 API 拿到 BrushState 实例
BrushState brushState = ...;
var result = brushState.GetValueAsFloat(propertyType);
```

### GetValueAsColor
`public Color GetValueAsColor(BrushAnimationProperty.BrushAnimationPropertyType propertyType)`

**用途 / Purpose:** 读取并返回当前对象中 「value as color」 的结果。

```csharp
// 先通过子系统 API 拿到 BrushState 实例
BrushState brushState = ...;
var result = brushState.GetValueAsColor(propertyType);
```

### GetValueAsSprite
`public Sprite GetValueAsSprite(BrushAnimationProperty.BrushAnimationPropertyType propertyType)`

**用途 / Purpose:** 读取并返回当前对象中 「value as sprite」 的结果。

```csharp
// 先通过子系统 API 拿到 BrushState 实例
BrushState brushState = ...;
var result = brushState.GetValueAsSprite(propertyType);
```

### SetValueAsFloat
`public void SetValueAsFloat(BrushAnimationProperty.BrushAnimationPropertyType propertyType, float value)`

**用途 / Purpose:** 为 「value as float」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 BrushState 实例
BrushState brushState = ...;
brushState.SetValueAsFloat(propertyType, 0);
```

### SetValueAsColor
`public void SetValueAsColor(BrushAnimationProperty.BrushAnimationPropertyType propertyType, in Color value)`

**用途 / Purpose:** 为 「value as color」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 BrushState 实例
BrushState brushState = ...;
brushState.SetValueAsColor(propertyType, value);
```

### SetValueAsSprite
`public void SetValueAsSprite(BrushAnimationProperty.BrushAnimationPropertyType propertyType, Sprite value)`

**用途 / Purpose:** 为 「value as sprite」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 BrushState 实例
BrushState brushState = ...;
brushState.SetValueAsSprite(propertyType, value);
```

### CreateTextMaterial
`public TextMaterial CreateTextMaterial(TwoDimensionDrawContext drawContext)`

**用途 / Purpose:** 构建一个新的 「text material」 实体并返回给调用方。

```csharp
// 先通过子系统 API 拿到 BrushState 实例
BrushState brushState = ...;
var result = brushState.CreateTextMaterial(drawContext);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
BrushState brushState = ...;
brushState.FillFrom(style);
```

## 参见

- [本区域目录](../)