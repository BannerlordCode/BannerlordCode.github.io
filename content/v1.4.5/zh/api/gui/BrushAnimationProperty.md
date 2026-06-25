---
title: "BrushAnimationProperty"
description: "BrushAnimationProperty 的自动生成类参考。"
---
# BrushAnimationProperty

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `public class BrushAnimationProperty`
**Base:** 无
**File:** `bin/TaleWorlds.GauntletUI/TaleWorlds.GauntletUI/BrushAnimationProperty.cs`

## 概述

`BrushAnimationProperty` 位于 `TaleWorlds.GauntletUI`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.GauntletUI` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `LayerName` | `public string LayerName { get; set; }` |

## 主要方法

### GetFrameAfter
`public BrushAnimationKeyFrame GetFrameAfter(float time)`

**用途 / Purpose:** 读取并返回当前对象中 frame after 的结果。

```csharp
// 先通过子系统 API 拿到 BrushAnimationProperty 实例
BrushAnimationProperty brushAnimationProperty = ...;
var result = brushAnimationProperty.GetFrameAfter(0);
```

### GetFrameAt
`public BrushAnimationKeyFrame GetFrameAt(int i)`

**用途 / Purpose:** 读取并返回当前对象中 frame at 的结果。

```csharp
// 先通过子系统 API 拿到 BrushAnimationProperty 实例
BrushAnimationProperty brushAnimationProperty = ...;
var result = brushAnimationProperty.GetFrameAt(0);
```

### Clone
`public BrushAnimationProperty Clone()`

**用途 / Purpose:** 复制当前对象的状态并返回一个新实例。

```csharp
// 先通过子系统 API 拿到 BrushAnimationProperty 实例
BrushAnimationProperty brushAnimationProperty = ...;
var result = brushAnimationProperty.Clone();
```

### AddKeyFrame
`public void AddKeyFrame(BrushAnimationKeyFrame keyFrame)`

**用途 / Purpose:** 将 key frame 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 BrushAnimationProperty 实例
BrushAnimationProperty brushAnimationProperty = ...;
brushAnimationProperty.AddKeyFrame(keyFrame);
```

### RemoveKeyFrame
`public void RemoveKeyFrame(BrushAnimationKeyFrame keyFrame)`

**用途 / Purpose:** 从当前容器或状态中移除 key frame。

```csharp
// 先通过子系统 API 拿到 BrushAnimationProperty 实例
BrushAnimationProperty brushAnimationProperty = ...;
brushAnimationProperty.RemoveKeyFrame(keyFrame);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
BrushAnimationProperty brushAnimationProperty = ...;
brushAnimationProperty.GetFrameAfter(0);
```

## 参见

- [本区域目录](../)