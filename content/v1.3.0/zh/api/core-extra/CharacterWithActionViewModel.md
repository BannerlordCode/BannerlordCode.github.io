---
title: "CharacterWithActionViewModel"
description: "CharacterWithActionViewModel 的自动生成类参考。"
---
# CharacterWithActionViewModel

**Namespace:** TaleWorlds.Core.ViewModelCollection
**Module:** TaleWorlds.Core
**Type:** `public class CharacterWithActionViewModel : CharacterViewModel`
**Base:** `CharacterViewModel`
**File:** `TaleWorlds.Core.ViewModelCollection/CharacterWithActionViewModel.cs`

## 概述

`CharacterWithActionViewModel` 是一个 Gauntlet ViewModel——C# 逻辑与 UI 之间的数据绑定桥梁。mod 常通过它暴露状态、命令和列表项给界面。

## 心智模型

把 `CharacterWithActionViewModel` 当作一个 ViewModel 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 使用示例

```csharp
// 将实例绑定到 Movie 或 View 的 ViewModel
CharacterWithActionViewModel vm = ...;
movie.SetViewModel(vm);
```

## 参见

- [本区域目录](../)