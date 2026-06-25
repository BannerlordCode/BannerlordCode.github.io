---
title: "BasicTooltipViewModel"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BasicTooltipViewModel`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BasicTooltipViewModel

**Namespace:** TaleWorlds.Core.ViewModelCollection.Information
**Module:** TaleWorlds.Core
**Type:** `public class BasicTooltipViewModel : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.Core.ViewModelCollection/Information/BasicTooltipViewModel.cs`

## 概述

`BasicTooltipViewModel` 是一个 Gauntlet ViewModel——C# 逻辑与 UI 之间的数据绑定桥梁。mod 常通过它暴露状态、命令和列表项给界面。

## 心智模型

把 `BasicTooltipViewModel` 当作一个 ViewModel 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### SetToolipCallback
`public void SetToolipCallback(Func<List<TooltipProperty>> tooltipPropertiesDelegate)`

**用途 / Purpose:** 设置 `toolip callback` 的值或状态。

### SetGenericTooltipCallback
`public void SetGenericTooltipCallback(Action preBuiltTooltipCallback)`

**用途 / Purpose:** 设置 `generic tooltip callback` 的值或状态。

### SetHintCallback
`public void SetHintCallback(Func<string> hintProperty)`

**用途 / Purpose:** 设置 `hint callback` 的值或状态。

### ExecuteBeginHint
`public void ExecuteBeginHint()`

**用途 / Purpose:** 执行 `begin hint` 操作或流程。

### ExecuteEndHint
`public void ExecuteEndHint()`

**用途 / Purpose:** 执行 `end hint` 操作或流程。

## 使用示例

```csharp
var vm = new BasicTooltipViewModel();
movie.SetViewModel(vm);
```

## 参见

- [完整类目录](../catalog)