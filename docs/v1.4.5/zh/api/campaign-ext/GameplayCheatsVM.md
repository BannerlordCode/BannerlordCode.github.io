<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GameplayCheatsVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# GameplayCheatsVM

**Namespace:** SandBox.ViewModelCollection.Map.Cheat
**Module:** SandBox.ViewModelCollection
**Type:** `public class GameplayCheatsVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox.ViewModelCollection/SandBox.ViewModelCollection.Map.Cheat/GameplayCheatsVM.cs`

## 概述

`GameplayCheatsVM` 位于 `SandBox.ViewModelCollection.Map.Cheat`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.ViewModelCollection.Map.Cheat` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Title` | `public string Title { get; set; }` |
| `ButtonCloseLabel` | `public string ButtonCloseLabel { get; set; }` |
| `Cheats` | `public MBBindingList<CheatItemBaseVM> Cheats { get; set; }` |
| `CloseInputKey` | `public InputKeyItemVM CloseInputKey { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

### ExecuteClose
`public void ExecuteClose()`

**用途 / Purpose:** 执行 `close` 操作或流程。

### SetCloseInputKey
`public void SetCloseInputKey(HotKey hotKey)`

**用途 / Purpose:** 设置 `close input key` 的值或状态。

## 使用示例

```csharp
var value = new GameplayCheatsVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)