---
title: "EncyclopediaListViewDataController"
description: "EncyclopediaListViewDataController 的自动生成类参考。"
---
# EncyclopediaListViewDataController

**Namespace:** SandBox.GauntletUI.Encyclopedia
**Module:** SandBox.GauntletUI
**Type:** `public class EncyclopediaListViewDataController`
**Base:** 无
**File:** `Modules.SandBox/SandBox.GauntletUI/SandBox.GauntletUI.Encyclopedia/EncyclopediaListViewDataController.cs`

## 概述

`EncyclopediaListViewDataController` 是一个控制器，重点不在存储数据，而在接收输入后把系统推向下一个状态。

## 心智模型

把 `EncyclopediaListViewDataController` 当作一个 Controller 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### SaveListData
`public void SaveListData(EncyclopediaListVM list, string id)`

**用途 / Purpose:** **用途 / Purpose:** 将 list data 写入持久化存储或流中。

```csharp
// 先通过子系统 API 拿到 EncyclopediaListViewDataController 实例
EncyclopediaListViewDataController encyclopediaListViewDataController = ...;
encyclopediaListViewDataController.SaveListData(list, "example");
```

### LoadListData
`public void LoadListData(EncyclopediaListVM list)`

**用途 / Purpose:** **用途 / Purpose:** 从持久化存储或流中读取 list data。

```csharp
// 先通过子系统 API 拿到 EncyclopediaListViewDataController 实例
EncyclopediaListViewDataController encyclopediaListViewDataController = ...;
encyclopediaListViewDataController.LoadListData(list);
```

## 使用示例

```csharp
var controller = Mission.Current.GetMissionBehavior<EncyclopediaListViewDataController>();
```

## 参见

- [本区域目录](../)