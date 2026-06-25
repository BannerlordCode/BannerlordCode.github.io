---
title: "PopUpBaseVM"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PopUpBaseVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PopUpBaseVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Inquiries
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class PopUpBaseVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Inquiries/PopUpBaseVM.cs`

## 概述

`PopUpBaseVM` 位于 `TaleWorlds.MountAndBlade.ViewModelCollection.Inquiries`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.Inquiries` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `TitleText` | `public string TitleText { get; set; }` |
| `PopUpLabel` | `public string PopUpLabel { get; set; }` |
| `ButtonOkLabel` | `public string ButtonOkLabel { get; set; }` |
| `ButtonCancelLabel` | `public string ButtonCancelLabel { get; set; }` |
| `IsButtonOkShown` | `public bool IsButtonOkShown { get; set; }` |
| `IsButtonCancelShown` | `public bool IsButtonCancelShown { get; set; }` |
| `IsButtonOkEnabled` | `public bool IsButtonOkEnabled { get; set; }` |
| `IsButtonCancelEnabled` | `public bool IsButtonCancelEnabled { get; set; }` |
| `ButtonOkHint` | `public HintViewModel ButtonOkHint { get; set; }` |
| `ButtonCancelHint` | `public HintViewModel ButtonCancelHint { get; set; }` |
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey { get; set; }` |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey { get; set; }` |

## 主要方法

### ExecuteAffirmativeAction
`public abstract void ExecuteAffirmativeAction()`

**用途 / Purpose:** 执行 `affirmative action` 操作或流程。

### ExecuteNegativeAction
`public abstract void ExecuteNegativeAction()`

**用途 / Purpose:** 执行 `negative action` 操作或流程。

### OnTick
`public virtual void OnTick(float dt)`

**用途 / Purpose:** 当 `tick` 事件触发时调用此方法。

### OnClearData
`public virtual void OnClearData()`

**用途 / Purpose:** 当 `clear data` 事件触发时调用此方法。

### ForceRefreshKeyVisuals
`public void ForceRefreshKeyVisuals()`

**用途 / Purpose:** 处理 `force refresh key visuals` 相关逻辑。

### CloseQuery
`public void CloseQuery()`

**用途 / Purpose:** 处理 `close query` 相关逻辑。

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

### SetCancelInputKey
`public void SetCancelInputKey(HotKey hotKey)`

**用途 / Purpose:** 设置 `cancel input key` 的值或状态。

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotKey)`

**用途 / Purpose:** 设置 `done input key` 的值或状态。

## 使用示例

```csharp
var implementation = new CustomPopUpBaseVM();
```

## 参见

- [完整类目录](../catalog)