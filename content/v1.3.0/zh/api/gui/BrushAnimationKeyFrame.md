---
title: "BrushAnimationKeyFrame"
description: "BrushAnimationKeyFrame 的自动生成类参考。"
---
# BrushAnimationKeyFrame

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `public class BrushAnimationKeyFrame`
**Base:** 无
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BrushAnimationKeyFrame.cs`

## 概述

`BrushAnimationKeyFrame` 位于 `TaleWorlds.GauntletUI`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.GauntletUI` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Time` | `public float Time { get; }` |
| `Index` | `public int Index { get; }` |

## 主要方法

### InitializeAsFloat
`public void InitializeAsFloat(float time, float value)`

**用途 / Purpose:** 为 「as float」 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 BrushAnimationKeyFrame 实例
BrushAnimationKeyFrame brushAnimationKeyFrame = ...;
brushAnimationKeyFrame.InitializeAsFloat(0, 0);
```

### InitializeAsColor
`public void InitializeAsColor(float time, Color value)`

**用途 / Purpose:** 为 「as color」 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 BrushAnimationKeyFrame 实例
BrushAnimationKeyFrame brushAnimationKeyFrame = ...;
brushAnimationKeyFrame.InitializeAsColor(0, value);
```

### InitializeAsSprite
`public void InitializeAsSprite(float time, Sprite value)`

**用途 / Purpose:** 为 「as sprite」 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 BrushAnimationKeyFrame 实例
BrushAnimationKeyFrame brushAnimationKeyFrame = ...;
brushAnimationKeyFrame.InitializeAsSprite(0, value);
```

### InitializeIndex
`public void InitializeIndex(int index)`

**用途 / Purpose:** 为 「index」 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 BrushAnimationKeyFrame 实例
BrushAnimationKeyFrame brushAnimationKeyFrame = ...;
brushAnimationKeyFrame.InitializeIndex(0);
```

### GetValueAsFloat
`public float GetValueAsFloat()`

**用途 / Purpose:** 读取并返回当前对象中 「value as float」 的结果。

```csharp
// 先通过子系统 API 拿到 BrushAnimationKeyFrame 实例
BrushAnimationKeyFrame brushAnimationKeyFrame = ...;
var result = brushAnimationKeyFrame.GetValueAsFloat();
```

### GetValueAsColor
`public Color GetValueAsColor()`

**用途 / Purpose:** 读取并返回当前对象中 「value as color」 的结果。

```csharp
// 先通过子系统 API 拿到 BrushAnimationKeyFrame 实例
BrushAnimationKeyFrame brushAnimationKeyFrame = ...;
var result = brushAnimationKeyFrame.GetValueAsColor();
```

### GetValueAsSprite
`public Sprite GetValueAsSprite()`

**用途 / Purpose:** 读取并返回当前对象中 「value as sprite」 的结果。

```csharp
// 先通过子系统 API 拿到 BrushAnimationKeyFrame 实例
BrushAnimationKeyFrame brushAnimationKeyFrame = ...;
var result = brushAnimationKeyFrame.GetValueAsSprite();
```

### GetValueAsObject
`public object GetValueAsObject()`

**用途 / Purpose:** 读取并返回当前对象中 「value as object」 的结果。

```csharp
// 先通过子系统 API 拿到 BrushAnimationKeyFrame 实例
BrushAnimationKeyFrame brushAnimationKeyFrame = ...;
var result = brushAnimationKeyFrame.GetValueAsObject();
```

### Clone
`public BrushAnimationKeyFrame Clone()`

**用途 / Purpose:** 复制当前对象的状态并返回一个新实例。

```csharp
// 先通过子系统 API 拿到 BrushAnimationKeyFrame 实例
BrushAnimationKeyFrame brushAnimationKeyFrame = ...;
var result = brushAnimationKeyFrame.Clone();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
BrushAnimationKeyFrame brushAnimationKeyFrame = ...;
brushAnimationKeyFrame.InitializeAsFloat(0, 0);
```

## 参见

- [本区域目录](../)