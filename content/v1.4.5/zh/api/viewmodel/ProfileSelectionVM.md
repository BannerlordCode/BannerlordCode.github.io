---
title: "ProfileSelectionVM"
description: "ProfileSelectionVM 的自动生成类参考。"
---
# ProfileSelectionVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.ProfileSelection
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ProfileSelectionVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.ProfileSelection/ProfileSelectionVM.cs`

## 概述

`ProfileSelectionVM` 位于 `TaleWorlds.MountAndBlade.ViewModelCollection.ProfileSelection`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.ProfileSelection` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `SelectProfileText` | `public string SelectProfileText { get; set; }` |
| `IsPlayEnabled` | `public bool IsPlayEnabled { get; set; }` |
| `PlayText` | `public string PlayText { get; set; }` |
| `SelectProfileKey` | `public InputKeyItemVM SelectProfileKey { get; set; }` |
| `PlayKey` | `public InputKeyItemVM PlayKey { get; set; }` |

## 主要方法

### OnActivate
`public void OnActivate(bool isDirectPlayPossible)`

**用途 / Purpose:** **用途 / Purpose:** 在 activate 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 ProfileSelectionVM 实例
ProfileSelectionVM profileSelectionVM = ...;
profileSelectionVM.OnActivate(false);
```

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** **用途 / Purpose:** 在 finalize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 ProfileSelectionVM 实例
ProfileSelectionVM profileSelectionVM = ...;
profileSelectionVM.OnFinalize();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
ProfileSelectionVM profileSelectionVM = ...;
profileSelectionVM.OnActivate(false);
```

## 参见

- [本区域目录](../)