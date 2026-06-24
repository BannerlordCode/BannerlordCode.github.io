<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MultiplayerCultureSelectVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MultiplayerCultureSelectVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.TeamSelection
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerCultureSelectVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.TeamSelection/MultiplayerCultureSelectVM.cs`

## 概述

`MultiplayerCultureSelectVM` 位于 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.TeamSelection`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.TeamSelection` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `GameModeText` | `public string GameModeText { get; set; }` |
| `CultureSelectionText` | `public string CultureSelectionText { get; set; }` |
| `FirstCultureName` | `public string FirstCultureName { get; set; }` |
| `SecondCultureName` | `public string SecondCultureName { get; set; }` |
| `FirstCultureCode` | `public string FirstCultureCode { get; set; }` |
| `SecondCultureCode` | `public string SecondCultureCode { get; set; }` |
| `FirstCultureColor1` | `public Color FirstCultureColor1 { get; set; }` |
| `FirstCultureColor2` | `public Color FirstCultureColor2 { get; set; }` |
| `SecondCultureColor1` | `public Color SecondCultureColor1 { get; set; }` |
| `SecondCultureColor2` | `public Color SecondCultureColor2 { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### ExecuteSelectCulture
`public void ExecuteSelectCulture(int cultureIndex)`

**用途 / Purpose:** 执行 `select culture` 操作或流程。

### ExecuteClose
`public void ExecuteClose()`

**用途 / Purpose:** 执行 `close` 操作或流程。

## 使用示例

```csharp
var value = new MultiplayerCultureSelectVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)