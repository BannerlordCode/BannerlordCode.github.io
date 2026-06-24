<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GenericOptionDataVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GenericOptionDataVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class GenericOptionDataVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/GenericOptionDataVM.cs`

## 概述

`GenericOptionDataVM` 位于 `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsNative` | `public bool IsNative { get; }` |
| `IsAction` | `public bool IsAction { get; }` |
| `Description` | `public string Description { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `ImageIDs` | `public string ImageIDs { get; set; }` |
| `OptionTypeID` | `public int OptionTypeID { get; set; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `Hint` | `public HintViewModel Hint { get; set; }` |

## 主要方法

### UpdateData
`public virtual void UpdateData(bool initUpdate)`

**用途 / Purpose:** 更新 `data` 的状态或数据。

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### GetOptionType
`public object GetOptionType()`

**用途 / Purpose:** 获取 `option type` 的当前值。

### GetOptionData
`public IOptionData GetOptionData()`

**用途 / Purpose:** 获取 `option data` 的当前值。

### ResetToDefault
`public void ResetToDefault()`

**用途 / Purpose:** 将 `to default` 重置为初始状态。

### UpdateEnableState
`public void UpdateEnableState()`

**用途 / Purpose:** 更新 `enable state` 的状态或数据。

### UpdateValue
`public abstract void UpdateValue()`

**用途 / Purpose:** 更新 `value` 的状态或数据。

### Cancel
`public abstract void Cancel()`

**用途 / Purpose:** 判断当前对象是否可以执行 `cel`。

### IsChanged
`public abstract bool IsChanged()`

**用途 / Purpose:** 处理 `is changed` 相关逻辑。

### SetValue
`public abstract void SetValue(float value)`

**用途 / Purpose:** 设置 `value` 的值或状态。

### ResetData
`public abstract void ResetData()`

**用途 / Purpose:** 将 `data` 重置为初始状态。

### ApplyValue
`public abstract void ApplyValue()`

**用途 / Purpose:** 将 `value` 应用到当前对象。

## 使用示例

```csharp
var implementation = new CustomGenericOptionDataVM();
```

## 参见

- [完整类目录](../catalog)