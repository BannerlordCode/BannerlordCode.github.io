---
title: "FullScreenNoticeVM"
description: "FullScreenNoticeVM 的自动生成类参考。"
---
# FullScreenNoticeVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class FullScreenNoticeVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/FullScreenNoticeVM.cs`

## 概述

`FullScreenNoticeVM` 位于 `TaleWorlds.MountAndBlade.ViewModelCollection`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsNoticeActive` | `public bool IsNoticeActive { get; set; }` |
| `NoticeTitleText` | `public string NoticeTitleText { get; set; }` |
| `NoticeContentText` | `public string NoticeContentText { get; set; }` |
| `ConfirmText` | `public string ConfirmText { get; set; }` |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 FullScreenNoticeVM 实例
FullScreenNoticeVM fullScreenNoticeVM = ...;
fullScreenNoticeVM.RefreshValues();
```

### ExecuteCloseNotice
`public void ExecuteCloseNotice()`

**用途 / Purpose:** 执行 close notice 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 FullScreenNoticeVM 实例
FullScreenNoticeVM fullScreenNoticeVM = ...;
fullScreenNoticeVM.ExecuteCloseNotice();
```

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 在 finalize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 FullScreenNoticeVM 实例
FullScreenNoticeVM fullScreenNoticeVM = ...;
fullScreenNoticeVM.OnFinalize();
```

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotkey)`

**用途 / Purpose:** 为 done input key 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 FullScreenNoticeVM 实例
FullScreenNoticeVM fullScreenNoticeVM = ...;
fullScreenNoticeVM.SetDoneInputKey(hotkey);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
FullScreenNoticeVM fullScreenNoticeVM = ...;
fullScreenNoticeVM.RefreshValues();
```

## 参见

- [本区域目录](../)