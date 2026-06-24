<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `FullScreenNoticeVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### ExecuteCloseNotice
`public void ExecuteCloseNotice()`

**用途 / Purpose:** 执行 `close notice` 操作或流程。

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotkey)`

**用途 / Purpose:** 设置 `done input key` 的值或状态。

## 使用示例

```csharp
var value = new FullScreenNoticeVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)