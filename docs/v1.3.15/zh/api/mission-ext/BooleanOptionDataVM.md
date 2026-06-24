<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BooleanOptionDataVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BooleanOptionDataVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BooleanOptionDataVM : GenericOptionDataVM`
**Base:** `GenericOptionDataVM`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/BooleanOptionDataVM.cs`

## 概述

`BooleanOptionDataVM` 位于 `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `OptionValueAsBoolean` | `public bool OptionValueAsBoolean { get; set; }` |

## 主要方法

### UpdateValue
`public override void UpdateValue()`

**用途 / Purpose:** 更新 `value` 的状态或数据。

### Cancel
`public override void Cancel()`

**用途 / Purpose:** 判断当前对象是否可以执行 `cel`。

### SetValue
`public override void SetValue(float value)`

**用途 / Purpose:** 设置 `value` 的值或状态。

### ResetData
`public override void ResetData()`

**用途 / Purpose:** 将 `data` 重置为初始状态。

### IsChanged
`public override bool IsChanged()`

**用途 / Purpose:** 处理 `is changed` 相关逻辑。

### ApplyValue
`public override void ApplyValue()`

**用途 / Purpose:** 将 `value` 应用到当前对象。

## 使用示例

```csharp
var value = new BooleanOptionDataVM();
value.UpdateValue();
```

## 参见

- [完整类目录](../catalog)