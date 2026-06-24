<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SingleQueryPopUpVM`
- [← 本领域 / 返回 viewmodel](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# SingleQueryPopUpVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Inquiries
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SingleQueryPopUpVM : PopUpBaseVM`
**Base:** `PopUpBaseVM`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.Inquiries/SingleQueryPopUpVM.cs`

## 概述

`SingleQueryPopUpVM` 位于 `TaleWorlds.MountAndBlade.ViewModelCollection.Inquiries`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.Inquiries` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `RemainingQueryTime` | `public float RemainingQueryTime { get; set; }` |
| `TotalQueryTime` | `public float TotalQueryTime { get; set; }` |
| `IsTimerShown` | `public bool IsTimerShown { get; set; }` |

## 主要方法

### OnTick
`public override void OnTick(float dt)`

**用途 / Purpose:** 当 `tick` 事件触发时调用此方法。

### ExecuteAffirmativeAction
`public override void ExecuteAffirmativeAction()`

**用途 / Purpose:** 执行 `affirmative action` 操作或流程。

### ExecuteNegativeAction
`public override void ExecuteNegativeAction()`

**用途 / Purpose:** 执行 `negative action` 操作或流程。

### OnClearData
`public override void OnClearData()`

**用途 / Purpose:** 当 `clear data` 事件触发时调用此方法。

### SetData
`public void SetData(InquiryData data)`

**用途 / Purpose:** 设置 `data` 的值或状态。

## 使用示例

```csharp
var value = new SingleQueryPopUpVM();
value.OnTick(0);
```

## 参见

- [完整类目录](../catalog)