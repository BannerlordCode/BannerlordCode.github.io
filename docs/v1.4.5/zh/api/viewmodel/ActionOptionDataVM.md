<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ActionOptionDataVM`
- [← 本领域 / 返回 viewmodel](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# ActionOptionDataVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ActionOptionDataVM : GenericOptionDataVM`
**Base:** `GenericOptionDataVM`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions/ActionOptionDataVM.cs`

## 概述

`ActionOptionDataVM` 位于 `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `ActionName` | `public string ActionName { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### Cancel
`public override void Cancel()`

**用途 / Purpose:** 判断当前对象是否可以执行 `cel`。

### IsChanged
`public override bool IsChanged()`

**用途 / Purpose:** 处理 `is changed` 相关逻辑。

### ResetData
`public override void ResetData()`

**用途 / Purpose:** 将 `data` 重置为初始状态。

### SetValue
`public override void SetValue(float value)`

**用途 / Purpose:** 设置 `value` 的值或状态。

### UpdateValue
`public override void UpdateValue()`

**用途 / Purpose:** 更新 `value` 的状态或数据。

### ApplyValue
`public override void ApplyValue()`

**用途 / Purpose:** 将 `value` 应用到当前对象。

## 使用示例

```csharp
var value = new ActionOptionDataVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)