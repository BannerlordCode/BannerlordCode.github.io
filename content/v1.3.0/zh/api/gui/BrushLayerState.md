---
title: "BrushLayerState"
description: "BrushLayerState 的自动生成类参考。"
---
# BrushLayerState

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `public struct BrushLayerState : IBrushAnimationState, IDataSource`
**Base:** `IBrushAnimationState`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BrushLayerState.cs`

## 概述

`BrushLayerState` 位于 `TaleWorlds.GauntletUI`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.GauntletUI` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### FillFrom
`public void FillFrom(IBrushLayerData styleLayer)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 BrushLayerState 实例
BrushLayerState brushLayerState = ...;
brushLayerState.FillFrom(styleLayer);
```

### LerpFrom
`public void LerpFrom(BrushLayerState start, IBrushLayerData end, float ratio)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 BrushLayerState 实例
BrushLayerState brushLayerState = ...;
brushLayerState.LerpFrom(start, end, 0);
```

### SetValueAsFloat
`public void SetValueAsFloat(BrushAnimationProperty.BrushAnimationPropertyType propertyType, float value)`

**用途 / Purpose:** 为 「value as float」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 BrushLayerState 实例
BrushLayerState brushLayerState = ...;
brushLayerState.SetValueAsFloat(propertyType, 0);
```

### SetValueAsColor
`public void SetValueAsColor(BrushAnimationProperty.BrushAnimationPropertyType propertyType, in Color value)`

**用途 / Purpose:** 为 「value as color」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 BrushLayerState 实例
BrushLayerState brushLayerState = ...;
brushLayerState.SetValueAsColor(propertyType, value);
```

### SetValueAsSprite
`public void SetValueAsSprite(BrushAnimationProperty.BrushAnimationPropertyType propertyType, Sprite value)`

**用途 / Purpose:** 为 「value as sprite」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 BrushLayerState 实例
BrushLayerState brushLayerState = ...;
brushLayerState.SetValueAsSprite(propertyType, value);
```

### GetValueAsFloat
`public float GetValueAsFloat(BrushAnimationProperty.BrushAnimationPropertyType propertyType)`

**用途 / Purpose:** 读取并返回当前对象中 「value as float」 的结果。

```csharp
// 先通过子系统 API 拿到 BrushLayerState 实例
BrushLayerState brushLayerState = ...;
var result = brushLayerState.GetValueAsFloat(propertyType);
```

### GetValueAsColor
`public Color GetValueAsColor(BrushAnimationProperty.BrushAnimationPropertyType propertyType)`

**用途 / Purpose:** 读取并返回当前对象中 「value as color」 的结果。

```csharp
// 先通过子系统 API 拿到 BrushLayerState 实例
BrushLayerState brushLayerState = ...;
var result = brushLayerState.GetValueAsColor(propertyType);
```

### GetValueAsSprite
`public Sprite GetValueAsSprite(BrushAnimationProperty.BrushAnimationPropertyType propertyType)`

**用途 / Purpose:** 读取并返回当前对象中 「value as sprite」 的结果。

```csharp
// 先通过子系统 API 拿到 BrushLayerState 实例
BrushLayerState brushLayerState = ...;
var result = brushLayerState.GetValueAsSprite(propertyType);
```

### SetValueAsLerpOfValues
`public static void SetValueAsLerpOfValues(ref BrushLayerState currentState, in BrushAnimationKeyFrame startValue, in BrushAnimationKeyFrame endValue, BrushAnimationProperty.BrushAnimationPropertyType propertyType, float ratio)`

**用途 / Purpose:** 为 「value as lerp of values」 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
BrushLayerState.SetValueAsLerpOfValues(currentState, startValue, endValue, propertyType, 0);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
BrushLayerState brushLayerState = ...;
brushLayerState.FillFrom(styleLayer);
```

## 参见

- [本区域目录](../)