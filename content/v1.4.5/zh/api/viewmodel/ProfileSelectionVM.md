---
title: "ProfileSelectionVM"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ProfileSelectionVM`
- [← 本领域 / 返回 viewmodel](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# ProfileSelectionVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.ProfileSelection
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ProfileSelectionVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.ProfileSelection/ProfileSelectionVM.cs`

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

**用途 / Purpose:** 当 `activate` 事件触发时调用此方法。

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

## 使用示例

```csharp
var value = new ProfileSelectionVM();
value.OnActivate(false);
```

## 参见

- [完整类目录](../catalog)