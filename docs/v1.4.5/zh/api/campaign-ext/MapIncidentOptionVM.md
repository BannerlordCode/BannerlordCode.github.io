<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MapIncidentOptionVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MapIncidentOptionVM

**Namespace:** SandBox.ViewModelCollection.Map.Incidents
**Module:** SandBox.ViewModelCollection
**Type:** `public class MapIncidentOptionVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox.ViewModelCollection/SandBox.ViewModelCollection.Map.Incidents/MapIncidentOptionVM.cs`

## 概述

`MapIncidentOptionVM` 位于 `SandBox.ViewModelCollection.Map.Incidents`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.ViewModelCollection.Map.Incidents` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `IsFocused` | `public bool IsFocused { get; set; }` |
| `Description` | `public string Description { get; set; }` |
| `Hint` | `public string Hint { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

### ExecuteSelect
`public void ExecuteSelect()`

**用途 / Purpose:** 执行 `select` 操作或流程。

### ExecuteFocus
`public void ExecuteFocus()`

**用途 / Purpose:** 执行 `focus` 操作或流程。

### ExecuteUnfocus
`public void ExecuteUnfocus()`

**用途 / Purpose:** 执行 `unfocus` 操作或流程。

## 使用示例

```csharp
var value = new MapIncidentOptionVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)