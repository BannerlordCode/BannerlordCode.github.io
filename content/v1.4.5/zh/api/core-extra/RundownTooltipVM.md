---
title: "RundownTooltipVM"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `RundownTooltipVM`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# RundownTooltipVM

**Namespace:** TaleWorlds.Core.ViewModelCollection.Information.RundownTooltip
**Module:** TaleWorlds.Core
**Type:** `public class RundownTooltipVM : TooltipBaseVM`
**Base:** `TooltipBaseVM`
**File:** `Bannerlord.Source/bin/TaleWorlds.Core.ViewModelCollection/TaleWorlds.Core.ViewModelCollection.Information.RundownTooltip/RundownTooltipVM.cs`

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

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### RefreshGenericRundownTooltip
`public static void RefreshGenericRundownTooltip(RundownTooltipVM rundownTooltip, object args)`

**用途 / Purpose:** 刷新 `generic rundown tooltip` 的显示或缓存。

## 使用示例

```csharp
var value = new RundownTooltipVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)