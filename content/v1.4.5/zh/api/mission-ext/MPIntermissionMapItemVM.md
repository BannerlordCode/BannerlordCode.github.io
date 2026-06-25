---
title: "MPIntermissionMapItemVM"
description: "MPIntermissionMapItemVM 的自动生成类参考。"
---
# MPIntermissionMapItemVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Intermission
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPIntermissionMapItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Intermission/MPIntermissionMapItemVM.cs`

## 概述

`MPIntermissionMapItemVM` 位于 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Intermission`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Intermission` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `MapID` | `public string MapID { get; set; }` |
| `MapName` | `public string MapName { get; set; }` |
| `Votes` | `public int Votes { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** **用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MPIntermissionMapItemVM 实例
MPIntermissionMapItemVM mPIntermissionMapItemVM = ...;
mPIntermissionMapItemVM.RefreshValues();
```

### ExecuteVote
`public void ExecuteVote()`

**用途 / Purpose:** **用途 / Purpose:** 执行 vote 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MPIntermissionMapItemVM 实例
MPIntermissionMapItemVM mPIntermissionMapItemVM = ...;
mPIntermissionMapItemVM.ExecuteVote();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MPIntermissionMapItemVM mPIntermissionMapItemVM = ...;
mPIntermissionMapItemVM.RefreshValues();
```

## 参见

- [本区域目录](../)