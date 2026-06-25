---
title: "BrushListPanel"
description: "BrushListPanel 的自动生成类参考。"
---
# BrushListPanel

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `public class BrushListPanel : ListPanel`
**Base:** `ListPanel`
**File:** `bin/TaleWorlds.GauntletUI/TaleWorlds.GauntletUI/BrushListPanel.cs`

## 概述

`BrushListPanel` 位于 `TaleWorlds.GauntletUI`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.GauntletUI` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Brush` | `public Brush Brush { get; }` |
| `ReadOnlyBrush` | `public Brush ReadOnlyBrush { get; }` |
| `Sprite` | `public new Sprite Sprite { get; set; }` |
| `BrushRenderer` | `public BrushRenderer BrushRenderer { get; }` |

## 主要方法

### UpdateBrushes
`public override void UpdateBrushes(float dt)`

**用途 / Purpose:** 重新计算并更新 brushes 的最新表示。

```csharp
// 先通过子系统 API 拿到 BrushListPanel 实例
BrushListPanel brushListPanel = ...;
brushListPanel.UpdateBrushes(0);
```

### SetState
`public override void SetState(string stateName)`

**用途 / Purpose:** 为 state 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 BrushListPanel 实例
BrushListPanel brushListPanel = ...;
brushListPanel.SetState("example");
```

### UpdateAnimationPropertiesSubTask
`public override void UpdateAnimationPropertiesSubTask(float alphaFactor)`

**用途 / Purpose:** 重新计算并更新 animation properties sub task 的最新表示。

```csharp
// 先通过子系统 API 拿到 BrushListPanel 实例
BrushListPanel brushListPanel = ...;
brushListPanel.UpdateAnimationPropertiesSubTask(0);
```

### OnBrushChanged
`public virtual void OnBrushChanged()`

**用途 / Purpose:** 在 brush changed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 BrushListPanel 实例
BrushListPanel brushListPanel = ...;
brushListPanel.OnBrushChanged();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
BrushListPanel brushListPanel = ...;
brushListPanel.UpdateBrushes(0);
```

## 参见

- [本区域目录](../)