<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `KeyOptionVM`
- [← 本领域 / 返回 viewmodel](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# KeyOptionVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class KeyOptionVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions/KeyOptionVM.cs`

## 概述

`KeyOptionVM` 位于 `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `CurrentKey` | `public Key CurrentKey { get; set; }` |
| `Key` | `public Key Key { get; set; }` |
| `OptionValueText` | `public string OptionValueText { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `Description` | `public string Description { get; set; }` |
| `IsChanged` | `public bool IsChanged { get; set; }` |
| `RevertHint` | `public HintViewModel RevertHint { get; set; }` |
| `ExtraInformationText` | `public string ExtraInformationText { get; set; }` |

## 主要方法

### Set
`public abstract void Set(InputKey newKey)`

**用途 / Purpose:** 设置 `set` 的值或状态。

### Update
`public abstract void Update()`

**用途 / Purpose:** 更新 `update` 的状态或数据。

### OnDone
`public abstract void OnDone()`

**用途 / Purpose:** 当 `done` 事件触发时调用此方法。

### ExecuteRevert
`public abstract void ExecuteRevert()`

**用途 / Purpose:** 执行 `revert` 操作或流程。

## 使用示例

```csharp
var implementation = new CustomKeyOptionVM();
```

## 参见

- [完整类目录](../catalog)