<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MPIntermissionMapItemVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MPIntermissionMapItemVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Intermission
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPIntermissionMapItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Intermission/MPIntermissionMapItemVM.cs`

## 概述

`MPIntermissionMapItemVM` 位于 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Intermission`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Intermission` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `MapID` | `public string MapID { get; set; }` |
| `MapName` | `public string MapName { get; set; }` |
| `Votes` | `public int Votes { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### ExecuteVote
`public void ExecuteVote()`

**用途 / Purpose:** 执行 `vote` 操作或流程。

## 使用示例

```csharp
var value = new MPIntermissionMapItemVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)