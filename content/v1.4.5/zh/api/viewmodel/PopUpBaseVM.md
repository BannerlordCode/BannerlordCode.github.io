---
title: "PopUpBaseVM"
description: "PopUpBaseVM 的自动生成类参考。"
---
# PopUpBaseVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Inquiries
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class PopUpBaseVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.Inquiries/PopUpBaseVM.cs`

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

**用途 / Purpose:** 执行 「affirmative action」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 PopUpBaseVM 实例
PopUpBaseVM popUpBaseVM = ...;
popUpBaseVM.ExecuteAffirmativeAction();
```

### ExecuteNegativeAction
`public abstract void ExecuteNegativeAction()`

**用途 / Purpose:** 执行 「negative action」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 PopUpBaseVM 实例
PopUpBaseVM popUpBaseVM = ...;
popUpBaseVM.ExecuteNegativeAction();
```

### OnTick
`public virtual void OnTick(float dt)`

**用途 / Purpose:** 在 「tick」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 PopUpBaseVM 实例
PopUpBaseVM popUpBaseVM = ...;
popUpBaseVM.OnTick(0);
```

### OnClearData
`public virtual void OnClearData()`

**用途 / Purpose:** 在 「clear data」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 PopUpBaseVM 实例
PopUpBaseVM popUpBaseVM = ...;
popUpBaseVM.OnClearData();
```

### ForceRefreshKeyVisuals
`public void ForceRefreshKeyVisuals()`

**用途 / Purpose:** 处理与 「force refresh key visuals」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 PopUpBaseVM 实例
PopUpBaseVM popUpBaseVM = ...;
popUpBaseVM.ForceRefreshKeyVisuals();
```

### CloseQuery
`public void CloseQuery()`

**用途 / Purpose:** 关闭「query」对应的资源或界面。

```csharp
// 先通过子系统 API 拿到 PopUpBaseVM 实例
PopUpBaseVM popUpBaseVM = ...;
popUpBaseVM.CloseQuery();
```

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 在 「finalize」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 PopUpBaseVM 实例
PopUpBaseVM popUpBaseVM = ...;
popUpBaseVM.OnFinalize();
```

### SetCancelInputKey
`public void SetCancelInputKey(HotKey hotKey)`

**用途 / Purpose:** 为 「cancel input key」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 PopUpBaseVM 实例
PopUpBaseVM popUpBaseVM = ...;
popUpBaseVM.SetCancelInputKey(hotKey);
```

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotKey)`

**用途 / Purpose:** 为 「done input key」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 PopUpBaseVM 实例
PopUpBaseVM popUpBaseVM = ...;
popUpBaseVM.SetDoneInputKey(hotKey);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
PopUpBaseVM instance = ...;
```

## 参见

- [本区域目录](../)