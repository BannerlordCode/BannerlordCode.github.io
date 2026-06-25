---
title: "FillBar"
description: "FillBar 的自动生成类参考。"
---
# FillBar

**Namespace:** TaleWorlds.GauntletUI.ExtraWidgets
**Module:** TaleWorlds.GauntletUI
**Type:** `public class FillBar : BrushWidget`
**Base:** `BrushWidget`
**File:** `bin/TaleWorlds.GauntletUI.ExtraWidgets/TaleWorlds.GauntletUI.ExtraWidgets/FillBar.cs`

## 概述

`FillBar` 位于 `TaleWorlds.GauntletUI.ExtraWidgets`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.GauntletUI.ExtraWidgets` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `MaxAmount` | `public int MaxAmount { get; set; }` |
| `CurrentAmount` | `public int CurrentAmount { get; set; }` |
| `InitialAmount` | `public int InitialAmount { get; set; }` |
| `MaxAmountAsFloat` | `public float MaxAmountAsFloat { get; set; }` |
| `CurrentAmountAsFloat` | `public float CurrentAmountAsFloat { get; set; }` |
| `InitialAmountAsFloat` | `public float InitialAmountAsFloat { get; set; }` |
| `IsVertical` | `public bool IsVertical { get; set; }` |
| `IsSmoothFillEnabled` | `public bool IsSmoothFillEnabled { get; set; }` |

## 使用示例

```csharp
// 从对应子系统 API 获取实例
FillBar instance = ...;
```

## 参见

- [本区域目录](../)