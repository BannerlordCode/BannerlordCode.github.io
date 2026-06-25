---
title: "HintViewModel"
description: "HintViewModel 的自动生成类参考。"
---
# HintViewModel

**Namespace:** TaleWorlds.Core.ViewModelCollection.Information
**Module:** TaleWorlds.Core
**Type:** `public class HintViewModel : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.Core.ViewModelCollection/TaleWorlds.Core.ViewModelCollection.Information/HintViewModel.cs`

## 概述

`HintViewModel` 是一个 Gauntlet ViewModel——C# 逻辑与 UI 之间的数据绑定桥梁。mod 常通过它暴露状态、命令和列表项给界面。

## 心智模型

把 `HintViewModel` 当作一个 ViewModel 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### ExecuteBeginHint
`public void ExecuteBeginHint()`

**用途 / Purpose:** 执行 「begin hint」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 HintViewModel 实例
HintViewModel hintViewModel = ...;
hintViewModel.ExecuteBeginHint();
```

### ExecuteEndHint
`public void ExecuteEndHint()`

**用途 / Purpose:** 执行 「end hint」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 HintViewModel 实例
HintViewModel hintViewModel = ...;
hintViewModel.ExecuteEndHint();
```

## 使用示例

```csharp
// 将实例绑定到 Movie 或 View 的 ViewModel
HintViewModel vm = ...;
movie.SetViewModel(vm);
```

## 参见

- [本区域目录](../)