---
title: "MPOptionsVM"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MPOptionsVM`
- [← 本领域 / 返回 viewmodel](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MPOptionsVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPOptionsVM : OptionsVM`
**Base:** `OptionsVM`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions/MPOptionsVM.cs`

## 概述

`MPOptionsVM` 位于 `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `AreHotkeysEnabled` | `public bool AreHotkeysEnabled { get; set; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `ApplyText` | `public string ApplyText { get; set; }` |
| `RevertText` | `public string RevertText { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### ExecuteCancel
`public new void ExecuteCancel()`

**用途 / Purpose:** 执行 `cancel` 操作或流程。

### ExecuteApply
`public void ExecuteApply()`

**用途 / Purpose:** 执行 `apply` 操作或流程。

### ForceCancel
`public void ForceCancel()`

**用途 / Purpose:** 处理 `force cancel` 相关逻辑。

## 使用示例

```csharp
var value = new MPOptionsVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)