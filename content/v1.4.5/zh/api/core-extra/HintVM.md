---
title: "HintVM"
description: "HintVM 的自动生成类参考。"
---
# HintVM

**Namespace:** TaleWorlds.Core.ViewModelCollection.Information
**Module:** TaleWorlds.Core
**Type:** `public class HintVM : TooltipBaseVM`
**Base:** `TooltipBaseVM`
**File:** `TaleWorlds.Core.ViewModelCollection/Information/HintVM.cs`

## 概述

`HintVM` 位于 `TaleWorlds.Core.ViewModelCollection.Information`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Core.ViewModelCollection.Information` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Text` | `public string Text { get; set; }` |

## 主要方法

### RefreshGenericHintTooltip
`public static void RefreshGenericHintTooltip(HintVM hint, object args)`

**用途 / Purpose:** 使 generic hint tooltip 的显示或缓存与底层状态保持一致。

```csharp
// 静态调用，不需要实例
HintVM.RefreshGenericHintTooltip(hint, args);
```

## 使用示例

```csharp
HintVM.RefreshGenericHintTooltip(hint, args);
```

## 参见

- [本区域目录](../)