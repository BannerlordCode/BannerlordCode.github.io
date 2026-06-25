---
title: "RundownTooltipVM"
description: "RundownTooltipVM 的自动生成类参考。"
---
# RundownTooltipVM

**Namespace:** TaleWorlds.Core.ViewModelCollection.Information.RundownTooltip
**Module:** TaleWorlds.Core
**Type:** `public class RundownTooltipVM : TooltipBaseVM`
**Base:** `TooltipBaseVM`
**File:** `bin/TaleWorlds.Core.ViewModelCollection/TaleWorlds.Core.ViewModelCollection.Information.RundownTooltip/RundownTooltipVM.cs`

## 概述

`RundownTooltipVM` 位于 `TaleWorlds.Core.ViewModelCollection.Information.RundownTooltip`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Core.ViewModelCollection.Information.RundownTooltip` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsInitializedProperly` | `public bool IsInitializedProperly { get; set; }` |
| `Lines` | `public MBBindingList<RundownLineVM> Lines { get; set; }` |
| `TitleText` | `public string TitleText { get; set; }` |
| `ExpectedChangeText` | `public string ExpectedChangeText { get; set; }` |
| `ValueCategorizationAsInt` | `public int ValueCategorizationAsInt { get; set; }` |
| `ExtendText` | `public string ExtendText { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 RundownTooltipVM 实例
RundownTooltipVM rundownTooltipVM = ...;
rundownTooltipVM.RefreshValues();
```

### RefreshGenericRundownTooltip
`public static void RefreshGenericRundownTooltip(RundownTooltipVM rundownTooltip, object args)`

**用途 / Purpose:** 使 generic rundown tooltip 的显示或缓存与底层状态保持一致。

```csharp
// 静态调用，不需要实例
RundownTooltipVM.RefreshGenericRundownTooltip(rundownTooltip, args);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
RundownTooltipVM rundownTooltipVM = ...;
rundownTooltipVM.RefreshValues();
```

## 参见

- [本区域目录](../)